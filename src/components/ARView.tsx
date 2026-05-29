

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { ARState } from '../types';
import { applyMaterials } from '../utils/materials';
import { getAllStoreyElevations } from '../utils/storeyElevation';

// ─── IFC Axis Correction ──────────────────────────────────────────────────────
// IFC models use Z-up coordinates; GLTF/Three.js use Y-up.
// When a raw IFC→GLB export skips axis conversion the building appears as a
// vertical wall in AR.  Set to `true` (default) to rotate the model group by
// -90° on X so the floor faces down and the building stands upright.
// Set to `false` only if your exporter (e.g. Blender with "Apply Transform")
// already bakes the Y-up conversion into the GLB.
const IFC_NEEDS_ZUP_CORRECTION = true;

interface ARViewProps {
  state: ARState;
  onChangeState: (updater: (prev: ARState) => ARState) => void;
  storeyElevations?: Map<string, number>;
  onStoreyElevationsLoaded?: (elevations: Map<string, number>) => void;
}

export default function ARView({ state, onChangeState, storeyElevations = new Map(), onStoreyElevationsLoaded }: ARViewProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  // Three.js object refs — stable across renders, mutated inside XR loop
  const anchorGroupRef = useRef<THREE.Group | null>(null);
  const modelGroupRef  = useRef<THREE.Group | null>(null);
  const reticleRef     = useRef<THREE.Group | null>(null);

  // GLB cache: avoids redundant network requests for the same storey+category pair
  const loadedModelsRef = useRef<Map<string, THREE.Group>>(new Map());

  // Tracks active storeys to only reload when they actually change
  const currentActiveStoreysRef = useRef<string>('GroundFloor:true');

  const isLoadingRef = useRef(false);
  const isStoreyChangingRef = useRef(false);

  // ── Placement flags ────────────────────────────────────────────────────────
  // CRITICAL: placement must happen INSIDE an XR frame (where hit-test results
  // are live).  React effects fire outside XR frames, so we use a ref flag that
  // the render loop reads on its next tick.
  //
  //   pendingPlacementRef  — set to true by the isPlaced effect; cleared by the
  //                          render loop after successfully placing the anchor.
  //   isPlacedRef          — mirrors state.isPlaced for synchronous reads inside
  //                          the render loop without going through React state.
  const pendingPlacementRef = useRef(false);
  const isPlacedRef         = useRef(false);

  // ── Reusable heap objects (avoid GC churn inside the 60-fps render loop) ───
  const _hitMatrix = useRef(new THREE.Matrix4());
  const _hitPos    = useRef(new THREE.Vector3());

  // ────────────────────────────────────────────────────────────────────────────
  // Helpers
  // ────────────────────────────────────────────────────────────────────────────

  const getModelUrl = (storey: string, category: string): string => {
    const base = import.meta.env.BASE_URL || '/';
    
    // Special case for combined mesh
    if (storey === 'combinedMesh') {
      return `${base}models/combinedMesh/building_combined.glb`;
    }
    
    // Standard case: models/{storey}/{storey}_{category}.glb
    return `${base}models/${storey}/${storey}_${category}.glb`;
  };

  /** Load a GLB, cache the original, return a clone with materials applied. */
  const loadGLB = async (storey: string, category: string): Promise<THREE.Group | null> => {
    const key = `${storey}_${category}`;
    if (!isStoreyChangingRef.current && loadedModelsRef.current.has(key)) {
    const clone = loadedModelsRef.current.get(key)!.clone();
    applyMaterials(clone, category);
    return clone;
    }
    const url = getModelUrl(storey, category);
    console.log(`[loadGLB] Fetching: ${url}`);
    try {
      const loader = new GLTFLoader();
      const gltf   = await new Promise<THREE.Group>((resolve, reject) => {
        loader.load(url, g => resolve(g.scene), undefined, reject);
      });
      loadedModelsRef.current.set(key, gltf.clone()); // store pristine copy
      applyMaterials(gltf, category);
      return gltf;
    } catch (err) {
      console.error(`[loadGLB] Failed: ${url}`, err);
      return null;
    }
  };

  /**
   * Shift modelGroup along its local Y axis so its lowest vertex sits exactly
   * at Y = 0 of the anchorGroup (= the detected floor surface after placement).
   *
   * The bounding box is computed in world space then converted to anchor-local
   * space, which correctly handles both the pre-placement state (anchor at
   * world origin) and the post-placement state (anchor at floor level).
   */
  const adjustModelBottomToAnchor = () => {
    if (!modelGroupRef.current) return;

    // Reset Y before measuring so we don't compound previous offsets
    modelGroupRef.current.position.y = 0;
    modelGroupRef.current.updateMatrixWorld(true);

    const box = new THREE.Box3();
    modelGroupRef.current.traverse(child => {
      if ((child as THREE.Mesh).isMesh) box.expandByObject(child);
    });

    if (box.isEmpty()) {
      console.warn('[adjustModelBottomToAnchor] Bounding box is empty — no meshes?');
      return;
    }

    // Convert world-space minY to anchor-local space.
    // When anchor is at Y=0 these are identical; when the anchor has been
    // placed at floor level (e.g. Y=0.05 in XR space) this keeps the offset
    // correct if the user switches storeys after placement.
    const anchorWorldY = anchorGroupRef.current
      ? new THREE.Vector3().setFromMatrixPosition(anchorGroupRef.current.matrixWorld).y
      : 0;

    const localMinY = box.min.y - anchorWorldY;
    modelGroupRef.current.position.y = -localMinY;

    console.log(
      `[adjustModelBottomToAnchor] worldMin=${box.min.y.toFixed(3)} ` +
      `anchorY=${anchorWorldY.toFixed(3)} → localOffset=${(-localMinY).toFixed(3)}`
    );
  };

  /** Reload meshes for all active storeys + active categories, stacked by elevation. */
  const updateVisibleModels = async () => {
    // Prevent concurrent loads
    if (isLoadingRef.current) {
      console.log('[updateVisibleModels] Already loading, skipping');
      return;
    }
    
    if (!modelGroupRef.current) return;
    
    isLoadingRef.current = true;

    const activeCats = Object.entries(state.activeCategories)
      .filter(([, on]) => on)
      .map(([cat]) => cat);

    // Determine which storeys to load
    let storeysToLoad: string[] = [];
    if (state.showAllStoreys) {
      // Load combined mesh
      storeysToLoad = ['combinedMesh'];
      console.log('[updateVisibleModels] Loading combined mesh');
    } else {
      // Load active storeys
      storeysToLoad = Object.entries(state.activeStoreys)
        .filter(([, active]) => active)
        .map(([storey]) => storey);
      console.log(`[updateVisibleModels] Active storeys: [${storeysToLoad.join(', ')}] cats=[${activeCats.join(', ')}]`);
    }

    // Reset position but DO NOT touch rotation
    modelGroupRef.current.position.set(0, 0, 0);

    // Remove old meshes
    while (modelGroupRef.current.children.length > 0) {
      modelGroupRef.current.remove(modelGroupRef.current.children[0]);
    }

    // Load each storey at its elevation
    for (const storey of storeysToLoad) {
      const elevation = storeyElevations.get(storey) ?? 0;
      console.log(`[updateVisibleModels] Loading storey: ${storey} at elevation ${elevation}`);
      
      if (state.showAllStoreys) {
        // Load combined building mesh
        const model = await loadGLB(storey, 'combined');
        if (model) {
          console.log(`[updateVisibleModels] ✓ Added combined mesh to scene`);
          // Model inherits parent's IFC rotation, no need to set it again
          
          // Center at origin
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);
          
          // Position at storey elevation
          const minY = box.min.y;
          model.position.y = -minY + elevation;
          
          modelGroupRef.current.add(model);
        } else {
          console.error(`[updateVisibleModels] ✗ Failed to load combined mesh`);
        }
      } else {
        // Load individual categories for this storey
        for (const cat of activeCats) {
          const model = await loadGLB(storey, cat);
          if (model) {
            console.log(`[updateVisibleModels] ✓ Added ${storey}/${cat} to scene`);
            // Model inherits parent's IFC rotation, no need to set it again
            
            // Center at origin
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);
            
            // Position at storey elevation
            const minY = box.min.y;
            model.position.y = -minY + elevation;
            
            modelGroupRef.current.add(model);
          } else {
            console.error(`[updateVisibleModels] ✗ Failed to load ${storey}/${cat}`);
          }
        }
      }
    }

    // Wait one frame so geometry uploads to GPU before we measure the bbox
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));

    adjustModelBottomToAnchor();

    // Re-apply the user's current scale / Y-rotation after reload
    updateTransform();
    
    isLoadingRef.current = false;
  };

  const updateOpacity = () => {
    if (!modelGroupRef.current) return;
    modelGroupRef.current.traverse(child => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        (mats as THREE.MeshStandardMaterial[]).forEach(mat => {
          mat.transparent = state.opacity < 1.0;
          mat.opacity     = state.opacity;
          mat.needsUpdate = true;
        });
      }
    });
  };

  const updateTransform = () => {
    if (!modelGroupRef.current) return;
    modelGroupRef.current.scale.setScalar(state.scale);
    // Only overwrite rotation.y (user azimuth control).
    // rotation.x is reserved for the IFC Z-up correction and must not be reset.
    modelGroupRef.current.rotation.y = THREE.MathUtils.degToRad(state.rotation);
  };


  
  // ────────────────────────────────────────────────────────────────────────────
  // React Effects — state → Three.js bridge
  // ────────────────────────────────────────────────────────────────────────────

  // Active storeys or show all mode change
  const activeStoreysKey = Object.entries(state.activeStoreys)
    .filter(([, v]) => v).map(([k]) => k).sort().join(',');
  const storeysDependency = state.showAllStoreys ? 'all' : activeStoreysKey;
  
  useEffect(() => {
    const newKey = storeysDependency;
    console.log(`[ARView.storeys-effect] storeysDependency changed: "${newKey}" (was "${currentActiveStoreysRef.current}")`);
    if (currentActiveStoreysRef.current !== newKey) {
      currentActiveStoreysRef.current = newKey;
      console.log(`[ARView.storeys-effect] Triggering updateVisibleModels for: ${newKey}`);
      updateVisibleModels();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeysDependency]);

  // Active categories change
  const activeCatKey = Object.entries(state.activeCategories)
    .filter(([, v]) => v).map(([k]) => k).sort().join(',');
  useEffect(() => {
    updateVisibleModels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCatKey]);

  // Opacity
  useEffect(() => { updateOpacity(); }, [state.opacity]);

  // Scale & rotation
  useEffect(() => { updateTransform(); }, [state.scale, state.rotation]);

  

  // ── Placement ──────────────────────────────────────────────────────────────
  //
  // WHY NOT place here directly:
  //   • This effect fires outside any XR frame.
  //   • The reticle uses matrixAutoUpdate = false — its matrix is ONLY valid
  //     inside the XR render callback.  Calling getWorldPosition() here returns
  //     data from the *previous* frame at best, stale/identity at worst.
  //   • Without a live hit-test result we cannot read the current floor position.
  //
  // WHAT WE DO instead:
  //   • Set pendingPlacementRef = true.
  //   • The XR render loop checks this flag on every frame.  The next frame that
  //     has a valid hit-test result executes the placement and clears the flag.
  //   • This guarantees we always use a current, device-tracked floor position.
  useEffect(() => {
    if (state.isPlaced) {
      pendingPlacementRef.current = true;
      isPlacedRef.current         = true;
      console.log('[Placement] Placement pending — waiting for next XR hit-test frame');
    } else {
      // Unplace: cancel any pending placement and hide the anchor
      pendingPlacementRef.current = false;
      isPlacedRef.current         = false;
      if (anchorGroupRef.current) {
        anchorGroupRef.current.visible = false;
        // Restore matrixAutoUpdate so position/quaternion drive the matrix again
        // when the user places the building a second time.
        anchorGroupRef.current.matrixAutoUpdate = true;
      }
      console.log('[Placement] Building hidden / unplaced');
    }
  }, [state.isPlaced]);

  // ────────────────────────────────────────────────────────────────────────────
  // Scene initialisation (runs once)
  // ────────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    // ── Scene ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = null;

    // Lighting (slightly boosted for AR — ambient light is often low)
    const ambient = new THREE.AmbientLight(0x404060, 2.5);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(1, 2, 1);
    scene.add(dirLight);
    const backLight = new THREE.DirectionalLight(0x88aaff, 0.6);
    backLight.position.set(-1, 1, -1);
    scene.add(backLight);

    // ── Camera & renderer ─────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      70, container.clientWidth / container.clientHeight, 0.01, 200
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    (window as any).__arScene = scene;
    (window as any).__arCamera = camera;

    // ── Anchor group ───────────────────────────────────────────────────────
    //
    // Lifecycle:
    //   BEFORE placement  matrixAutoUpdate = true (default), visible = false
    //   AFTER  placement  matrixAutoUpdate = false, matrix baked from XR hit pos,
    //                     visible = true
    //
    // Why freeze with matrixAutoUpdate = false?
    //   In WebXR the camera moves every frame to match the device pose.  All
    //   scene objects are rendered in the same reference-space coordinate frame.
    //   If matrixAutoUpdate = true, Three.js recomputes the world matrix from
    //   position/quaternion each frame — the anchor *stays* at its scene position,
    //   but position was set during an XR frame so it's already world-locked.
    //
    //   However, freezing the matrix (matrixAutoUpdate = false) after baking it
    //   with updateMatrix() is more robust: it prevents any accidental writes to
    //   position/quaternion from moving the anchor, and it's the canonical way
    //   to implement pseudo-anchors in Three.js WebXR without the WebXR Anchors
    //   API (which requires an additional 'anchors' required feature).
    const anchorGroup = new THREE.Group();
    anchorGroup.visible = false;
    scene.add(anchorGroup);
    anchorGroupRef.current = anchorGroup;

    // ── Model group ────────────────────────────────────────────────────────
    //
    // Child of anchorGroup — inherits the world-locked transform automatically.
    // We apply the IFC Z-up → Three.js Y-up correction here once so it persists
    // across all model reloads. All models added to this group inherit this rotation.
    const modelGroup = new THREE.Group();
    if (IFC_NEEDS_ZUP_CORRECTION) {
      // IFC: Z-up coordinate system → Three.js Y-up
      // Rotate +90 degrees on X to flip Z axis to Y
      modelGroup.rotation.x = Math.PI / 2;
    }
    anchorGroup.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // ── Reticle ────────────────────────────────────────────────────────────
    //
    // The reticle uses matrixAutoUpdate = false because we write its matrix
    // directly from the raw XR hit-test pose each frame (pose includes surface-
    // normal orientation so the ring tilts on slopes — which is the desired
    // visual behaviour).  The ANCHOR does NOT copy the reticle's rotation; it
    // only takes the hit position and keeps identity quaternion so the building
    // stays Y-up regardless of surface tilt.
    const reticleContainer = new THREE.Group();
    reticleContainer.matrixAutoUpdate = false;
    reticleContainer.visible = false;

    // Visual: green ring + crosshair bars
    const rMat  = new THREE.MeshStandardMaterial({ color: 0x00ff88, emissive: 0x00cc66, emissiveIntensity: 0.6 });
    const ring  = new THREE.Mesh(new THREE.RingGeometry(0.07, 0.12, 32), rMat);
    ring.rotation.x = -Math.PI / 2; // lay flat on the surface
    reticleContainer.add(ring);

    const cMat = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
    const cH   = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.004, 0.004), cMat);
    const cV   = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.004, 0.22), cMat);
    cH.rotation.x = -Math.PI / 2;
    cV.rotation.x = -Math.PI / 2;
    reticleContainer.add(cH);
    reticleContainer.add(cV);

    scene.add(reticleContainer);
    reticleRef.current = reticleContainer;

    // ── AR Button ──────────────────────────────────────────────────────────
    setTimeout(() => {
      const btnContainer = document.getElementById('ar-button-container');
      const arButton = ARButton.createButton(renderer, {
        requiredFeatures: ['hit-test', 'dom-overlay'],
        optionalFeatures: ['plane-detection'],
        domOverlay: { root: document.getElementById('ar-overlay') ?? document.body },
      });
      // Make the button invisible but cover the entire launch card so the user
      // can tap anywhere on it to start AR.
      arButton.style.cssText =
        'opacity:0;position:absolute;inset:0;width:100%;height:100%;cursor:pointer;';
      (btnContainer ?? document.body).appendChild(arButton);

      renderer.xr.addEventListener('sessionstart', () => {
        onChangeState(p => ({ ...p, isArMode: true }));
      });

      renderer.xr.addEventListener('sessionend', () => {
        // Full reset on session end so a subsequent session starts clean
        if (anchorGroupRef.current) {
          anchorGroupRef.current.visible = false;
          anchorGroupRef.current.matrixAutoUpdate = true;
        }
        pendingPlacementRef.current = false;
        isPlacedRef.current         = false;
        hitTestSource               = null;
        hitTestSourceRequested      = false;
        onChangeState(p => ({ ...p, isArMode: false, isPlaced: false }));
      });
    }, 200);

    // ── Initial model load ─────────────────────────────────────────────────
    const loadTimeout = setTimeout(() => updateVisibleModels(), 100);

    // ── XR Render Loop ─────────────────────────────────────────────────────
    let hitTestSource: XRHitTestSource | null = null;
    let hitTestSourceRequested = false;

    function render(_timestamp: number, frame: XRFrame) {
      if (frame) {
        const session        = renderer.xr.getSession();
        const referenceSpace = renderer.xr.getReferenceSpace();

        // Request a hit-test source once per XR session
        if (session && referenceSpace && !hitTestSourceRequested) {
          hitTestSourceRequested = true;
          session
            .requestReferenceSpace('viewer')
            .then(viewerSpace => {
              session.requestHitTestSource?.({ space: viewerSpace })
                .then(src => { hitTestSource = src; });
            });
        }

        if (hitTestSource && referenceSpace && reticleRef.current) {
          const results = frame.getHitTestResults(hitTestSource);

          if (results.length > 0) {
            const pose = results[0].getPose(referenceSpace)!;

            // Update reticle: full pose matrix (position + surface normal).
            // The ring will tilt to match sloped surfaces — correct visual.
            reticleRef.current.visible = true;
            reticleRef.current.matrix.fromArray(pose.transform.matrix);

            // ── PLACEMENT ────────────────────────────────────────────────────
            //
            // Executed on the first XR frame after the user presses
            // "PLACE BUILDING" (pendingPlacementRef was set by the React effect).
            // Running here guarantees:
            //   1. A live hit-test position is available.
            //   2. We're inside the XR frame callback, so all XR matrices are
            //      current and valid.
            //   3. We can safely freeze the anchor matrix immediately after
            //      writing it.
            if (pendingPlacementRef.current && anchorGroupRef.current) {

              // Extract ONLY the translation from the hit-test pose.
              // We deliberately discard the rotation component so the building
              // stays Y-up regardless of the detected surface's normal vector.
              _hitMatrix.current.fromArray(pose.transform.matrix);
              _hitPos.current.setFromMatrixPosition(_hitMatrix.current);

              // Move anchor to floor hit point
              anchorGroupRef.current.position.copy(_hitPos.current);
              // Keep building perfectly upright — identity quaternion = Y-up
              anchorGroupRef.current.quaternion.identity();
              anchorGroupRef.current.scale.setScalar(1);

              // Bake position/quaternion/scale → matrix, then FREEZE the matrix.
              // After this line Three.js will no longer overwrite the matrix from
              // position/quaternion each frame, world-locking the anchor.
              anchorGroupRef.current.updateMatrix();
              anchorGroupRef.current.matrixAutoUpdate = false;

              anchorGroupRef.current.visible = true;
              pendingPlacementRef.current    = false;

              const p = _hitPos.current;
              console.log(
                `[Placement] ✓ Anchor placed at ` +
                `X:${p.x.toFixed(3)} Y:${p.y.toFixed(3)} Z:${p.z.toFixed(3)}`
              );
              console.log(
                `[Placement] Model Y offset (ground correction): ` +
                `${modelGroupRef.current?.position.y.toFixed(3)}`
              );
            }

          } else {
            // No surface detected at current gaze direction
            reticleRef.current.visible = false;
          }
        }
      }

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(render);

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      clearTimeout(loadTimeout);
      renderer.setAnimationLoop(null);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — scene is created once

  // Load storey elevations
  useEffect(() => {
    const loadElevations = async () => {
      const allStoreys = Object.keys(state.activeStoreys);
      const elevations = await getAllStoreyElevations(allStoreys);
      onStoreyElevationsLoaded?.(elevations);
    };
    loadElevations();
  }, [onStoreyElevationsLoaded, state.activeStoreys]);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full -z-10" />;
}




