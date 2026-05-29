import * as THREE from 'three';
import { SpaceData } from './spacesOverlay';

export interface StoreyElevation {
  name: string;
  elevation: number;
  hasData: boolean;
}

const elevationCache = new Map<string, number>();

export async function getStoreyElevation(storey: string): Promise<number | null> {
  if (elevationCache.has(storey)) {
    return elevationCache.get(storey)!;
  }

  const url = `${import.meta.env.BASE_URL}models/${storey}/${storey}_spaces.json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`No spaces data found for ${storey}, using default elevation 0`);
      elevationCache.set(storey, 0);
      return 0;
    }

    const spaces: SpaceData[] = await response.json();

    if (spaces.length === 0) {
      elevationCache.set(storey, 0);
      return 0;
    }

    const firstSpace = spaces[0];
    if (firstSpace.center && firstSpace.center.length >= 3) {
      const elevation = firstSpace.center[1];
      elevationCache.set(storey, elevation);
      return elevation;
    }

    const inferredElevation = inferElevationFromName(storey);
    elevationCache.set(storey, inferredElevation);
    return inferredElevation;
  } catch (error) {
    console.warn(`Failed to load elevation for ${storey}:`, error);
    elevationCache.set(storey, 0);
    return 0;
  }
}

function inferElevationFromName(storey: string): number {
  const lowerName = storey.toLowerCase();

  if (lowerName === 'groundfloor') return 0;
  if (lowerName.includes('level_01') || lowerName.includes('l01')) return 2.8;
  if (lowerName.includes('level_02') || lowerName.includes('l02')) return 5.6;
  if (lowerName.includes('level_03') || lowerName.includes('l03')) return 8.4;
  if (lowerName.includes('level_04') || lowerName.includes('l04')) return 11.2;
  if (lowerName === 'roof') return 14.0;

  return 0;
}

export async function getAllStoreyElevations(
  storeys: string[]
): Promise<Map<string, number>> {
  const results = new Map<string, number>();
  const promises = storeys.map(async (storey) => {
    const elevation = await getStoreyElevation(storey);
    results.set(storey, elevation ?? 0);
  });
  await Promise.all(promises);
  return results;
}

export function getTeleportYPosition(elevation: number, cameraOffset: number = 1.6): number {
  return elevation + cameraOffset;
}

export async function animateCameraToElevation(
  camera: THREE.Camera,
  targetElevation: number,
  duration: number = 500,
  eyeHeight: number = 1.6
): Promise<void> {
  return new Promise((resolve) => {
    const startY = camera.position.y;
    const targetY = targetElevation + eyeHeight;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      camera.position.y = startY + (targetY - startY) * easeProgress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(animate);
  });
}

export function clearElevationCache(): void {
  elevationCache.clear();
}