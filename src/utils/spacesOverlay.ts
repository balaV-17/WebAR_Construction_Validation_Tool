import * as THREE from 'three';

export interface SpaceData {
  guid: string | null;
  type: string;
  name: string;
  long_name: string;
  storey: string;
  area: number | null;
  volume: number | null;
  center?: number[];
  elevation?: number;
}

export interface SpaceWithPosition extends SpaceData {
  position: THREE.Vector3;
}

let activeOverlays: HTMLDivElement[] = [];

export async function loadSpacesForStorey(storey: string): Promise<SpaceData[]> {
  const url = `${import.meta.env.BASE_URL}models/${storey}/${storey}_spaces.json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`No spaces data found for ${storey}`);
      return [];
    }
    const data: SpaceData[] = await response.json();
    return data;
  } catch (error) {
    console.warn(`Failed to load spaces for ${storey}:`, error);
    return [];
  }
}

export function createSpacesOverlays(
  spaces: SpaceData[],
  scene: THREE.Scene,
  camera: THREE.Camera,
  container: HTMLElement
): HTMLDivElement[] {
  clearSpacesOverlays();

  const overlays: HTMLDivElement[] = [];

  spaces.forEach((space) => {
    if (!space.center || space.center.length < 3) {
      console.warn(`Space ${space.name} has no center coordinates, skipping`);
      return;
    }

    const position = new THREE.Vector3(space.center[0], space.center[1], space.center[2]);

    const div = document.createElement('div');
    div.className = 'space-overlay';
    div.innerHTML = `
      <div class="space-label">
        <div class="space-name">${escapeHtml(space.name)}</div>
        ${space.long_name && space.long_name !== space.name ? `<div class="space-long-name">${escapeHtml(space.long_name)}</div>` : ''}
        ${space.area ? `<div class="space-area">${space.area.toFixed(1)} m²</div>` : ''}
      </div>
    `;
    div.style.position = 'absolute';
    div.style.pointerEvents = 'none';
    div.style.zIndex = '1000';

    (div as any).__spacePosition = position;
    (div as any).__spaceCamera = camera;
    (div as any).__spaceScene = scene;

    container.appendChild(div);
    overlays.push(div);
    activeOverlays.push(div);
  });

  return overlays;
}

export function updateOverlayPositions(): void {
  activeOverlays.forEach((overlay) => {
    const position = (overlay as any).__spacePosition;
    const camera = (overlay as any).__spaceCamera;
    const scene = (overlay as any).__spaceScene;

    if (!position || !camera || !scene) return;

    const vector = position.clone().project(camera);

    const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;

    if (vector.z < 1) {
      overlay.style.display = 'block';
      overlay.style.left = `${x}px`;
      overlay.style.top = `${y}px`;
      overlay.style.transform = 'translate(-50%, -50%)';
    } else {
      overlay.style.display = 'none';
    }
  });
}

export function clearSpacesOverlays(): void {
  activeOverlays.forEach((overlay) => {
    if (overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
  });
  activeOverlays = [];
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function injectSpacesStyles(): void {
  if (document.getElementById('spaces-overlay-styles')) return;

  const style = document.createElement('style');
  style.id = 'spaces-overlay-styles';
  style.textContent = `
    .space-overlay {
      position: absolute;
      pointer-events: none;
      z-index: 1000;
      transition: opacity 0.2s ease;
    }
    .space-label {
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(4px);
      border-left: 3px solid #10b981;
      border-radius: 6px;
      padding: 4px 8px;
      font-family: monospace;
      font-size: 10px;
      white-space: nowrap;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    .space-name {
      color: #10b981;
      font-weight: bold;
      font-size: 11px;
    }
    .space-long-name {
      color: #cbd5e1;
      font-size: 9px;
    }
    .space-area {
      color: #94a3b8;
      font-size: 8px;
      margin-top: 2px;
    }
    @media (max-width: 768px) {
      .space-label {
        padding: 2px 6px;
        font-size: 8px;
      }
      .space-name {
        font-size: 9px;
      }
    }
  `;
  document.head.appendChild(style);
}