import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

export interface LoadResult {
  success: boolean;
  group?: THREE.Group;
  error?: string;
}

const glbCache = new Map<string, THREE.Group>();

const getModelUrl = (storey: string, category: string): string => {
  return `${import.meta.env.BASE_URL}models/${storey}/${storey}_${category}.glb`;
};

export async function loadStoreyGLB(
  storey: string,
  category: string
): Promise<LoadResult> {
  const cacheKey = `${storey}_${category}`;

  if (glbCache.has(cacheKey)) {
    const cachedGroup = glbCache.get(cacheKey)!;
    const clone = cachedGroup.clone();
    return { success: true, group: clone };
  }

  const url = getModelUrl(storey, category);
  console.log(`Loading: ${url}`);

  try {
    const loader = new GLTFLoader();
    const gltf = await new Promise<THREE.Group>((resolve, reject) => {
      loader.load(
        url,
        (gltf) => resolve(gltf.scene),
        undefined,
        (error) => reject(error)
      );
    });

    glbCache.set(cacheKey, gltf.clone());
    const clone = gltf.clone();
    return { success: true, group: clone };
  } catch (error) {
    console.warn(`Failed to load ${url}:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function preloadStoreyGLBs(
  storey: string,
  categories: string[]
): Promise<Map<string, LoadResult>> {
  const results = new Map<string, LoadResult>();
  const promises = categories.map(async (category) => {
    const result = await loadStoreyGLB(storey, category);
    results.set(category, result);
  });
  await Promise.all(promises);
  return results;
}

export function isGLBCached(storey: string, category: string): boolean {
  return glbCache.has(`${storey}_${category}`);
}

export function clearGLBCache(): void {
  glbCache.clear();
}