import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import type { FloorState, SystemType } from '../App';

export default function ARView({
  floors,
  teleportedFloor,
  activeSystem
}: {
  floors: FloorState;
  teleportedFloor: keyof FloorState | null;
  activeSystem: SystemType;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Refs for three.js objects that need to be updated outside the main initialization
  const sceneRef = useRef<THREE.Scene | null>(null);
  const activeSystemRef = useRef<SystemType>(activeSystem);
  const reticleRef = useRef<THREE.Mesh | null>(null);

  // Keep active system in sync for event listeners
  useEffect(() => {
    activeSystemRef.current = activeSystem;
  }, [activeSystem]);

  useEffect(() => {
    if (sceneRef.current) {
      const f1 = sceneRef.current.getObjectByName('Mod-Floor-1');
      const f2 = sceneRef.current.getObjectByName('Mod-Floor-2');
      const f3 = sceneRef.current.getObjectByName('Mod-Floor-3');
      const f7 = sceneRef.current.getObjectByName('Mod-Floor-7');
      if (f1) f1.visible = floors.f1;
      if (f2) f2.visible = floors.f2;
      if (f3) f3.visible = floors.f3;
      if (f7) f7.visible = floors.f7;

  // Basic teleport logic - Move building down to simulate teleporting UP if needed
      // Actually moving the main camera in WebXR is complex, so we simulate it by moving the world down
      const building = sceneRef.current.getObjectByName('Default Building');
      if (building) {
        if (teleportedFloor && teleportedFloor === 'f1') building.position.y = -0.3;
        else if (teleportedFloor && teleportedFloor === 'f2') building.position.y = -0.9;
        else if (teleportedFloor && teleportedFloor === 'f3') building.position.y = -1.5;
        else if (teleportedFloor && teleportedFloor === 'f7') building.position.y = -3.3;
        else building.position.y = -0.5; // Overview baseline
      }
    }
  }, [floors, teleportedFloor]);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // =========================================================================
    // 🚀 HOW TO LOAD YOUR OWN MODEL (model1.glb)
    // =========================================================================
    // To use your actual 'model1.glb' hierarchy instead of these placeholders:
    // 1. Use the GLTFLoader (already imported at the top of this file).
    // 2. Load the model and assign it to targetObjects['building'].
    //
    // Example:
    // const loader = new GLTFLoader();
    // loader.load('model1.glb', (gltf) => {
    //   const myModel = gltf.scene;
    //   myModel.visible = false;
    //   myModel.matrixAutoUpdate = false;
    //   scene.add(myModel);
    //   targetObjects['building'] = myModel; 
    //   // Note: For the floor toggles to work, make sure your nodes are named
    //   // 'Mod-Floor-1', 'Mod-Floor-2', etc. inside the GLB, or update the 
    //   // sceneRef.current.getObjectByName() calls at the top of this file.
    // });
    // =========================================================================

    const targetObjects: Record<string, THREE.Object3D> = {};
    
    // Create Base wrapper for Building so we can reposition it with matrix
    const buildingBase = new THREE.Group();
    buildingBase.name = 'BuildingBase';
    buildingBase.matrixAutoUpdate = false;
    buildingBase.visible = false;
    scene.add(buildingBase);
    targetObjects['building'] = buildingBase;

    // Create Default Building Hierarchy to test UI toggles
    const building = new THREE.Group();
    building.name = 'Default Building';
    buildingBase.add(building);
    
    // Big transparent rectangle shell
    const shellGeo = new THREE.BoxGeometry(2, 4, 1.5);
    const shellMat = new THREE.MeshBasicMaterial({ color: 0x64748b, transparent: true, opacity: 0.15, wireframe: true });
    const shell = new THREE.Mesh(shellGeo, shellMat);
    shell.position.y = 2;
    building.add(shell);

    // Helper to create shaped floors
    const createFloor = (name: string, color: number, y: number, isSpecialShape = false) => {
      const geo = isSpecialShape 
        ? new THREE.CylinderGeometry(0.7, 0.7, 0.4, 32)
        : new THREE.BoxGeometry(1.8, 0.4, 1.3);
      
      const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.2, metalness: 0.3 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = y;
      mesh.name = name;
      building.add(mesh);
      return mesh;
    };

    createFloor('Mod-Floor-1', 0x3b82f6, 0.3);
    createFloor('Mod-Floor-2', 0x10b981, 0.9);
    createFloor('Mod-Floor-3', 0xeab308, 1.5);
    createFloor('Mod-Floor-7', 0xdda0dd, 3.3, true);

    // Create singletons for MEP Systems
    const systemsMap = {
      'HVAC': 0x3b82f6,
      'Plumb': 0xef4444,
      'Elec': 0xeab308,
      'Fire': 0xf97316,
    };
    Object.entries(systemsMap).forEach(([sys, color]) => {
      const geom = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.2 });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.visible = false;
      mesh.matrixAutoUpdate = false;
      scene.add(mesh);
      targetObjects[sys] = mesh;
    });

    // History System
    let undoStack: any[] = [];
    let redoStack: any[] = [];

    const captureState = () => {
        const state: any = {};
        for (const key in targetObjects) {
            const obj = targetObjects[key];
            state[key] = {
                visible: obj.visible,
                matrix: obj.matrix.clone()
            };
        }
        return state;
    };

    const applyState = (state: any) => {
        for (const key in state) {
            if (targetObjects[key]) {
                targetObjects[key].visible = state[key].visible;
                targetObjects[key].matrix.copy(state[key].matrix);
            }
        }
    };

    const saveHistory = () => {
        undoStack.push(captureState());
        redoStack = [];
        updateHistoryUI();
    };

    const updateHistoryUI = () => {
        window.dispatchEvent(new CustomEvent('ar-history-update', { 
            detail: { canUndo: undoStack.length > 0, canRedo: redoStack.length > 0 } 
        }));
    };
    
    // Add lighting suitable for an AR scene
    const ambientLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    ambientLight.position.set(0.5, 1, 0.25);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(2, 5, 2);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    // Setup Model Loading and Fallback Placeholder
    const loader = new GLTFLoader();

    // In a real app we'd load the building (model1.glb) and the MEP components.
    // For now we'll just set up the reticle and generic placement logic.

    // Hit Testing and Reticle Logic
    let hitTestSource: XRHitTestSource | null = null;
    let hitTestSourceRequested = false;

    // Create the reticle
    const reticleGeometry = new THREE.RingGeometry(0.1, 0.12, 32).rotateX(-Math.PI / 2);
    const reticleMaterial = new THREE.MeshBasicMaterial({ color: 0x10b981 }); // emerald-500
    const reticle = new THREE.Mesh(reticleGeometry, reticleMaterial);
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);
    reticleRef.current = reticle;

    // AR Button Initialization - Requesting dom-overlay
    const overlayElement = document.getElementById('ar-overlay');
    const arButton = ARButton.createButton(renderer, {
      requiredFeatures: ['hit-test', 'dom-overlay'],
      domOverlay: { root: overlayElement || document.body }
    });
    
    // Style AR Initial Button
    arButton.style.position = 'absolute';
    arButton.style.top = '50%';
    arButton.style.left = '50%';
    arButton.style.transform = 'translate(-50%, -50%)';
    arButton.style.bottom = 'auto';
    arButton.style.backgroundColor = '#10b981'; // emerald-500
    arButton.style.color = '#0f172a';
    arButton.style.opacity = '1';
    arButton.style.border = '1px solid #047857';
    arButton.style.fontWeight = 'bold';
    arButton.style.textTransform = 'uppercase';
    arButton.style.fontFamily = 'monospace';
    arButton.style.padding = '16px 24px';
    arButton.style.zIndex = '99999';
    arButton.style.borderRadius = '12px';
    arButton.style.pointerEvents = 'auto';
    document.body.appendChild(arButton);
    
    // Selection Controller
    const controller = renderer.xr.getController(0);
    scene.add(controller);

    // Custom UI action event listeners
    const onActionPlace = (e: any) => {
      const activeSys = e.detail.system;
      if (reticleRef.current?.visible) {
        saveHistory();
        const targetId = activeSys ? activeSys : 'building';
        const target = targetObjects[targetId];
        if (target) {
            target.matrix.copy(reticleRef.current.matrix);
            target.visible = true;
        }
      }
    };

    const onActionUndo = () => {
        if (undoStack.length > 0) {
            redoStack.push(captureState());
            const prevState = undoStack.pop();
            applyState(prevState);
            updateHistoryUI();
        }
    };

    const onActionRedo = () => {
        if (redoStack.length > 0) {
            undoStack.push(captureState());
            const nextState = redoStack.pop();
            applyState(nextState);
            updateHistoryUI();
        }
    };

    const onActionClear = () => {
      saveHistory();
      for (const key in targetObjects) {
          targetObjects[key].visible = false;
      }
    };

    window.addEventListener('ar-action-place', onActionPlace);
    window.addEventListener('ar-action-undo', onActionUndo);
    window.addEventListener('ar-action-redo', onActionRedo);
    window.addEventListener('ar-action-clear', onActionClear);

    // Handle render loop
    function render(timestamp: number, frame: XRFrame) {
      if (frame) {
        const referenceSpace = renderer.xr.getReferenceSpace();
        const session = renderer.xr.getSession();

        if (session && referenceSpace && !hitTestSourceRequested) {
          session.requestReferenceSpace('viewer').then((viewerSpace) => {
            if (session.requestHitTestSource) {
              (session as any).requestHitTestSource({ space: viewerSpace }).then((source: any) => {
                hitTestSource = source;
              });
            }
          });

          session.addEventListener('end', () => {
            hitTestSourceRequested = false;
            hitTestSource = null;
            if (reticleRef.current) {
              reticleRef.current.visible = false;
              window.dispatchEvent(new CustomEvent('ar-reticle-update', { detail: { visible: false } }));
            }
          });

          hitTestSourceRequested = true;
        }

        if (hitTestSource && referenceSpace) {
          const hitTestResults = frame.getHitTestResults(hitTestSource);

          if (hitTestResults.length > 0) {
            const hit = hitTestResults[0];
            const pose = hit.getPose(referenceSpace);
            
            if (pose && reticleRef.current) {
              if (!reticleRef.current.visible) {
                 window.dispatchEvent(new CustomEvent('ar-reticle-update', { detail: { visible: true } }));
              }
              reticleRef.current.visible = true;
              reticleRef.current.matrix.fromArray(pose.transform.matrix);
            }
          } else {
            if (reticleRef.current && reticleRef.current.visible) {
              reticleRef.current.visible = false;
              window.dispatchEvent(new CustomEvent('ar-reticle-update', { detail: { visible: false } }));
            }
          }
        }
      }

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(render);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      if (document.body.contains(arButton)) document.body.removeChild(arButton);
      
      window.removeEventListener('ar-action-place', onActionPlace);
      window.removeEventListener('ar-action-undo', onActionUndo);
      window.removeEventListener('ar-action-redo', onActionRedo);
      window.removeEventListener('ar-action-clear', onActionClear);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full z-10" />;
}
