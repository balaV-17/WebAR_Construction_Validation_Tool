import * as THREE from 'three';

export const categoryMaterials: Record<string, THREE.Material> = {
  structure: new THREE.MeshStandardMaterial({
    color: 0x9e9e9e,
    metalness: 0.3,
    roughness: 0.6,
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
    flatShading: false,
    toneMapped: true,
  }),
  openings: new THREE.MeshStandardMaterial({
    color: 0xff9800,
    metalness: 0.2,
    roughness: 0.4,
    transparent: false,
    opacity: 1.0,
    side: THREE.DoubleSide,
    flatShading: false,
  }),
  circulation: new THREE.MeshStandardMaterial({
    color: 0xffc107,
    metalness: 0.1,
    roughness: 0.5,
    transparent: false,
    opacity: 1.0,
    side: THREE.DoubleSide,
    flatShading: false,
  }),
  mep: new THREE.MeshStandardMaterial({
    color: 0x2196f3,
    metalness: 0.5,
    roughness: 0.3,
    transparent: false,
    opacity: 1.0,
    side: THREE.DoubleSide,
    flatShading: false,
  })
};

export function applyMaterials(group: THREE.Group, category: string) {
  const baseMaterial = categoryMaterials[category];
  if (!baseMaterial) {
    console.warn(`[applyMaterials] No material found for category: ${category}`);
    return;
  }
  
  let meshCount = 0;
  group.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      try {
        mesh.material = baseMaterial.clone();
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        meshCount++;
      } catch (e) {
        console.warn(`[applyMaterials] Failed to apply material to mesh:`, e);
      }
    }
  });
  
  console.log(`[applyMaterials] Applied ${category} material to ${meshCount} meshes`);
}