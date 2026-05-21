import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Define explicit typescript states for your updated structural model hierarchy
interface StructuralLayers {
  foundations: boolean;
  columns: boolean;
  beams: boolean;
  floors: boolean;
}

export default function ARView({
  layers = { foundations: true, columns: true, beams: true, floors: true }
}: {
  layers?: StructuralLayers;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // React UI Context Toggles
  const [menuOpen, setMenuOpen] = useState(false);
  const [navPanelOpen, setNavPanelOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [scale, setScale] = useState(1.0);
  const [opacity, setOpacity] = useState(1.0);

  // Core Three.js references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const reticleRef = useRef<THREE.Mesh | null>(null);
  const gltfLoaderRef = useRef<GLTFLoader | null>(null);

  // Keep a clean track of your hidden navigation anchor spatial vectors
  const navPointsRef = useRef<Record<string, THREE.Vector3>>({
    nav1: new THREE.Vector3(),
    nav2: new THREE.Vector3(),
    nav3: new THREE.Vector3(),
  });

  // Framework Tracking Memory Engine (Undo/Redo States)
  const undoStack = useRef<any[]>([]);
  const redoStack = useRef<any[]>([]);

  // 1. Dynamic Visibility Layer & Teleportation Updates
  useEffect(() => {
    if (!sceneRef.current) return;

    // Direct binding updates to your updated IFC/GLB structural naming strings
    const layerMappings: Record<keyof StructuralLayers, string> = {
      foundations: 'Level1_Foundations',
      columns: 'Level2_Columns',
      beams: 'Level3_Beams',
      floors: 'Level4_Floors',
    };

    Object.entries(layerMappings).forEach(([key, nodeName]) => {
      const targetMesh = sceneRef.current?.getObjectByName(nodeName);
      if (targetMesh) {
        targetMesh.visible = layers[key as keyof StructuralLayers];
      }
    });
  }, [layers]);

  // 2. Dynamic Realtime Opacity Material Adjustments
  useEffect(() => {
    if (!modelRef.current) return;
    
    // Recursively traverse your updated structural nodes to modify opacity flags smoothly
    modelRef.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat: any) => {
            mat.transparent = opacity < 1.0;
            mat.opacity = opacity;
          });
        } else if (mesh.material) {
          const mat = mesh.material as any;
          mat.transparent = opacity < 1.0;
          mat.opacity = opacity;
        }
      }
    });
  }, [opacity]);

  // 3. Scale Transformation Adjustments
  useEffect(() => {
    if (!modelRef.current) return;
    modelRef.current.scale.setScalar(scale);
    modelRef.current.updateMatrix();
  }, [scale]);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Lighting Ecosystem Configuration
    const ambientLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    ambientLight.position.set(0.5, 1, 0.25);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(2, 5, 2);
    scene.add(directionalLight);

    const camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    // =========================================================================
    // 🔍 ASYNC REAL GLB STRUCTURAL HIERARCHY LOAD PIPELINE
    // =========================================================================
    const loader = new GLTFLoader();
    gltfLoaderRef.current = loader;

    loader.load(`${import.meta.env.BASE_URL}model1.glb`, (gltf) => {
      const myModel = gltf.scene;
      myModel.name = "IfcBuilding";
      myModel.visible = false;
      myModel.matrixAutoUpdate = false;
      scene.add(myModel);
      modelRef.current = myModel as any;

      // Extract hidden anchor vectors for spatial calculation
      ['nav1', 'nav2', 'nav3'].forEach((navName) => {
        const navObject = myModel.getObjectByName(navName);
        if (navObject) {
          navObject.getWorldPosition(navPointsRef.current[navName]);
          navObject.visible = false; // Kept hidden away from the user view layout
        }
      });
    }, undefined, (err) => console.error("Model Engine Error:", err));

    // Advanced Center Crosshair Alignment Reticle (Flips flat on floors vs upright against walls)
    const reticleGroup = new THREE.Group();
    
    const ringGeo = new THREE.RingGeometry(0.08, 0.09, 32);
    const lineHGeo = new THREE.BoxGeometry(0.22, 0.01, 0.01);
    const lineVGeo = new THREE.BoxGeometry(0.01, 0.22, 0.01);
    const crosshairMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

    const ring = new THREE.Mesh(ringGeo, crosshairMat);
    const lineH = new THREE.Mesh(lineHGeo, crosshairMat);
    const lineV = new THREE.Mesh(lineVGeo, crosshairMat);

    reticleGroup.add(ring, lineH, lineV);
    reticleGroup.rotateX(-Math.PI / 2); // Default flat layout configuration
    
    const baseReticleContainer = new THREE.Group();
    baseReticleContainer.matrixAutoUpdate = false;
    baseReticleContainer.visible = false;
    baseReticleContainer.add(reticleGroup);
    scene.add(baseReticleContainer);
    reticleRef.current = baseReticleContainer as any;

    // WebXR Interaction Systems
    let hitTestSource: XRHitTestSource | null = null;
    let hitTestSourceRequested = false;

    const overlayElement = document.getElementById('ar-overlay');
    const arButton = ARButton.createButton(renderer, {
      requiredFeatures: ['hit-test', 'dom-overlay', 'plane-detection'],
      domOverlay: { root: overlayElement || document.body }
    });
    document.body.appendChild(arButton);

    // Contextual Action Listeners
    window.addEventListener('ui-action-place', () => {
      if (reticleRef.current?.visible && modelRef.current) {
        undoStack.current.push({
          matrix: modelRef.current.matrix.clone(),
          visible: modelRef.current.visible
        });
        redoStack.current = [];
        
        modelRef.current.matrix.copy(reticleRef.current.matrix);
        modelRef.current.visible = true;
      }
    });

    window.addEventListener('ui-action-reset', () => {
      if (modelRef.current) {
        modelRef.current.visible = false;
        setActiveNav(null);
        modelRef.current.position.set(0, 0, 0);
        modelRef.current.updateMatrix();
      }
    });

    window.addEventListener('ui-action-undo', () => {
      if (undoStack.current.length > 0 && modelRef.current) {
        redoStack.current.push({
          matrix: modelRef.current.matrix.clone(),
          visible: modelRef.current.visible
        });
        const state = undoStack.current.pop();
        modelRef.current.visible = state.visible;
        modelRef.current.matrix.copy(state.matrix);
      }
    });

    function render(timestamp: number, frame: XRFrame) {
      if (frame) {
        const referenceSpace = renderer.xr.getReferenceSpace();
        const session = renderer.xr.getSession();

        if (session && referenceSpace && !hitTestSourceRequested) {
          session.requestReferenceSpace('viewer').then((viewerSpace) => {
            if (session.requestHitTestSource) {
              session.requestHitTestSource({ space: viewerSpace }).then((source) => {
                hitTestSource = source;
              });
            }
          });
          hitTestSourceRequested = true;
        }

        if (hitTestSource && referenceSpace) {
          const hitTestResults = frame.getHitTestResults(hitTestSource);
          if (hitTestResults.length > 0 && reticleRef.current) {
            const hit = hitTestResults[0];
            const pose = hit.getPose(referenceSpace);
            if (pose) {
              reticleRef.current.visible = true;
              reticleRef.current.matrix.fromArray(pose.transform.matrix);
            }
          } else if (reticleRef.current) {
            reticleRef.current.visible = false;
          }
        }
      }
      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(render);

    return () => {
      renderer.setAnimationLoop(null);
      if (document.body.contains(arButton)) document.body.removeChild(arButton);
    };
  }, []);

  // Joystick Translation Movement Loop Mechanics
  const handleJoystickPress = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (!modelRef.current) return;
    const translationSpeed = 0.05;
    const currentPosition = new THREE.Vector3();
    currentPosition.setFromMatrixPosition(modelRef.current.matrix);

    switch (direction) {
      case 'up': currentPosition.z += translationSpeed; break;
      case 'down': currentPosition.z -= translationSpeed; break;
      case 'left': currentPosition.x += translationSpeed; break;
      case 'right': currentPosition.x -= translationSpeed; break;
    }
    modelRef.current.position.copy(currentPosition);
    modelRef.current.updateMatrix();
  };

  // Anchor Teleport Handler
  const teleportToAnchor = (navKey: string) => {
    if (!modelRef.current) return;
    setActiveNav(navKey);
    const targetVector = navPointsRef.current[navKey];
    
    // Smoothly reposition entire world relative to view workspace offset height
    modelRef.current.position.set(-targetVector.x, -targetVector.y, -targetVector.z);
    modelRef.current.updateMatrix();
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-50 font-sans">
      
      {/* =========================================================================
          💎 TOP HEADERS ACTION ROW PANEL
          ========================================================================= */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl active:scale-95 transition-transform"
          >
            ☰
          </button>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('ui-action-place'))}
            className="px-6 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium uppercase tracking-wider text-sm active:scale-95 transition-transform"
          >
            PLACE
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('ui-action-undo'))}
            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
            title="Undo"
          >
            ↺
          </button>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('ui-action-reset'))}
            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
            title="Reset Spatial Mapping"
          >
            ⟳
          </button>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('ui-action-reset'))}
            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-lg active:scale-95 transition-transform"
            title="Clear Scene"
          >
            ✕
          </button>
        </div>
      </div>

      {/* =========================================================================
          📐 TOP-LEFT CONTEXTUAL MENU LAYERS SIDE PANEL (SLIDES DOWN)
          ========================================================================= */}
      {menuOpen && (
        <div className="absolute top-20 left-4 w-64 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex flex-col gap-1 pointer-events-auto animate-fadeIn">
          {['foundations', 'columns', 'beams', 'floors'].map((layer) => (
            <div key={layer} className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 text-white capitalize text-sm font-medium">
              <span>{layer}</span>
              <span className="text-emerald-400 text-xs">✓ Active</span>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          🔍 LEFT VERTICAL SLIDER (SIZING CONTROL)
          ========================================================================= */}
      <div className="absolute left-6 top-1/4 bottom-1/4 w-12 bg-black/20 backdrop-blur-lg border border-white/10 rounded-full flex flex-col items-center justify-between py-6 pointer-events-auto">
        <span className="text-[10px] text-white/64 font-bold tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">SIZING ({scale.toFixed(1)}x)</span>
        <input 
          type="range" 
          min="0.1" 
          max="2.0" 
          step="0.1"
          value={scale}
          onChange={(e) => setScale(parseFloat(e.target.value))}
          className="h-2/3 accent-white pointer-events-auto [writing-mode:vertical-lr]"
        />
        <span className="text-white text-xs">📐</span>
      </div>

      {/* =========================================================================
          👻 RIGHT VERTICAL SLIDER (TRANSPARENCY OPACITY CONTROL)
          ========================================================================= */}
      <div className="absolute right-6 top-1/4 bottom-1/4 w-12 bg-black/20 backdrop-blur-lg border border-white/10 rounded-full flex flex-col items-center justify-between py-6 pointer-events-auto">
        <span className="text-[10px] text-white/64 font-bold tracking-widest uppercase [writing-mode:vertical-lr]">OPACITY ({opacity.toFixed(1)})</span>
        <input 
          type="range" 
          min="0.0" 
          max="1.0" 
          step="0.1"
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
          className="h-2/3 accent-white pointer-events-auto [writing-mode:vertical-lr]"
        />
        <span className="text-white text-sm">👻</span>
      </div>

      {/* =========================================================================
          🕹️ BOTTOM CONTEXTUAL WALK-AROUND SYSTEM (JOYSTICK & NAV ANCHORS)
          ========================================================================= */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-4 justify-end">
        
        {/* Relative Walking Joystick Interface - Triggers only when floor node tracking active */}
        {activeNav && (
          <div className="w-32 h-32 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 relative flex items-center justify-center pointer-events-auto">
            <button onClick={() => handleJoystickPress('up')} className="absolute top-2 text-white p-1 text-sm active:scale-125 transition-transform">▲</button>
            <button onClick={() => handleJoystickPress('left')} className="absolute left-2 text-white p-1 text-sm active:scale-125 transition-transform">◀</button>
            <button onClick={() => handleJoystickPress('right')} className="absolute right-2 text-white p-1 text-sm active:scale-125 transition-transform">▶</button>
            <button onClick={() => handleJoystickPress('down')} className="absolute bottom-2 text-white p-1 text-sm active:scale-125 transition-transform">▼</button>
            <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-md" />
          </div>
        )}

        {/* Anchor Sub-Selection Drawer Toggles */}
        {navPanelOpen && (
          <div className="flex items-center gap-3 bg-black/20 backdrop-blur-xl border border-white/10 p-2 rounded-2xl pointer-events-auto animate-fadeIn">
            {['nav1', 'nav2', 'nav3'].map((point, index) => (
              <button
                key={point}
                onClick={() => teleportToAnchor(point)}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase border transition-all ${
                  activeNav === point 
                    ? 'bg-white text-slate-900 border-white shadow-lg' 
                    : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                }`}
              >
                FLR {index + 1}
              </button>
            ))}
          </div>
        )}

        {/* Main Base Dock Pivot Button Trigger */}
        <button
          onClick={() => setNavPanelOpen(!navPanelOpen)}
          className={`px-6 py-3 rounded-xl border flex items-center gap-2 font-bold uppercase text-xs tracking-wider pointer-events-auto active:scale-95 transition-all ${
            navPanelOpen ? 'bg-white text-slate-900 border-white' : 'bg-black/30 text-white border-white/20 backdrop-blur-md'
          }`}
        >
          📍 NAV {navPanelOpen ? '▲' : '▼'}
        </button>
      </div>

      <div ref={mountRef} className="absolute inset-0 w-full h-full -z-10" />
    </div>
  );
}