import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { ARState } from '../types';

interface ARViewProps {
  state: ARState;
  onChangeState: (updater: (prev: ARState) => ARState) => void;
}

export default function ARView({ state, onChangeState }: ARViewProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  
  const sceneRef = useRef<THREE.Scene | null>(null);
  const anchorGroupRef = useRef<THREE.Group | null>(null); 
  const modelGroupRef = useRef<THREE.Group | null>(null);  
  const reticleRef = useRef<THREE.Mesh | null>(null);
  
  const navPointsRef = useRef<Record<string, THREE.Vector3>>({
    nav1: new THREE.Vector3(), nav2: new THREE.Vector3(), nav3: new THREE.Vector3(),
  });

  // Sync Visibilities & Opacity
  useEffect(() => {
    if (!sceneRef.current || !modelGroupRef.current) return;
    const mapping: Record<keyof ARState['layers'], string> = {
      foundations: 'Level1_Foundations', columns: 'Level2_Columns', beams: 'Level3_Beams', floors: 'Level4_Floors',
    };
    Object.entries(mapping).forEach(([key, nodeName]) => {
      const target = sceneRef.current?.getObjectByName(nodeName);
      if (target) target.visible = state.layers[key as keyof ARState['layers']];
    });

    modelGroupRef.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        mats.forEach((mat: any) => { mat.transparent = state.opacity < 1.0; mat.opacity = state.opacity; });
      }
    });
  }, [state.layers, state.opacity]);

  // Sync Transform & Placement
  useEffect(() => {
    if (!modelGroupRef.current) return;
    modelGroupRef.current.scale.setScalar(state.scale);
    modelGroupRef.current.rotation.y = THREE.MathUtils.degToRad(state.rotation);
    
    const transX = (state.posX - 260) * 0.005;
    const transZ = (state.posY - 240) * 0.005;
    let transY = 0;
    
    if (state.selectedFloor > 0) {
      const navKey = `nav${state.selectedFloor}`;
      const targetAnchor = navPointsRef.current[navKey];
      if (targetAnchor) transY = -targetAnchor.y; 
    }
    modelGroupRef.current.position.set(transX, transY, transZ);
    modelGroupRef.current.updateMatrix();

    if (state.isPlaced && anchorGroupRef.current && reticleRef.current?.visible) {
      anchorGroupRef.current.matrix.copy(reticleRef.current.matrix);
      anchorGroupRef.current.visible = true;
      reticleRef.current.visible = false;
    } else if (!state.isPlaced && anchorGroupRef.current) {
      anchorGroupRef.current.visible = false;
    }
  }, [state.scale, state.rotation, state.posX, state.posY, state.selectedFloor, state.isPlaced]);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const ambientLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    ambientLight.position.set(0.5, 1, 0.25);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(2, 5, 2);
    scene.add(dirLight);

    const camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 20);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    const anchorGroup = new THREE.Group();
    anchorGroup.matrixAutoUpdate = false;
    anchorGroup.visible = false;
    scene.add(anchorGroup);
    anchorGroupRef.current = anchorGroup;

    const modelGroup = new THREE.Group();
    anchorGroup.add(modelGroup);
    modelGroupRef.current = modelGroup;

    const loader = new GLTFLoader();
    loader.load(`${import.meta.env.BASE_URL}model1.glb`, (gltf) => {
      modelGroup.add(gltf.scene);
      ['nav1', 'nav2', 'nav3'].forEach((navName) => {
        const navObject = gltf.scene.getObjectByName(navName);
        if (navObject) {
          navObject.getWorldPosition(navPointsRef.current[navName]);
          navObject.visible = false;
        }
      });
    });

    const reticleGroup = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    reticleGroup.add(new THREE.Mesh(new THREE.RingGeometry(0.08, 0.09, 32), mat));
    reticleGroup.add(new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.01, 0.01), mat));
    reticleGroup.add(new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.22, 0.01), mat));
    reticleGroup.rotateX(-Math.PI / 2);
    
    const reticleContainer = new THREE.Group();
    reticleContainer.matrixAutoUpdate = false;
    reticleContainer.visible = false;
    reticleContainer.add(reticleGroup);
    scene.add(reticleContainer);
    reticleRef.current = reticleContainer as any;

    let hitTestSource: XRHitTestSource | null = null;
    let hitTestSourceRequested = false;

    // INVISIBLE WEBXR BUTTON TRICK
    setTimeout(() => {
      const btnContainer = document.getElementById('ar-button-container');
      const arButton = ARButton.createButton(renderer, {
        requiredFeatures: ['hit-test', 'dom-overlay'],
        optionalFeatures: ['plane-detection'],
        domOverlay: { root: document.getElementById('ar-overlay') || document.body }
      });
      
      // Make the native button completely transparent and stretch over our custom React UI
      arButton.style.opacity = '0';
      arButton.style.position = 'absolute';
      arButton.style.top = '0';
      arButton.style.left = '0';
      arButton.style.width = '100%';
      arButton.style.height = '100%';
      arButton.style.cursor = 'pointer';
      
      if (btnContainer) {
        btnContainer.appendChild(arButton);
      } else {
        document.body.appendChild(arButton);
      }

      renderer.xr.addEventListener('sessionstart', () => onChangeState(p => ({ ...p, isArMode: true })));
      renderer.xr.addEventListener('sessionend', () => onChangeState(p => ({ ...p, isArMode: false, isPlaced: false })));
    }, 200);

    function render(timestamp: number, frame: XRFrame) {
      if (frame) {
        const referenceSpace = renderer.xr.getReferenceSpace();
        const session = renderer.xr.getSession();

        if (session && referenceSpace && !hitTestSourceRequested) {
          session.requestReferenceSpace('viewer').then((viewerSpace) => {
            if (session.requestHitTestSource) {
              session.requestHitTestSource({ space: viewerSpace }).then(source => hitTestSource = source);
            }
          });
          hitTestSourceRequested = true;
        }

        if (hitTestSource && referenceSpace && !state.isPlaced) {
          const hitTestResults = frame.getHitTestResults(hitTestSource);
          if (hitTestResults.length > 0 && reticleRef.current) {
            reticleRef.current.visible = true;
            reticleRef.current.matrix.fromArray(hitTestResults[0].getPose(referenceSpace)!.transform.matrix);
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
    };
  }, []); 

  return <div ref={mountRef} className="absolute inset-0 w-full h-full -z-10" />;
}