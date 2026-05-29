import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';

interface SpaceData {
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

interface SpacesOverlayProps {
  showSpaces: boolean;
  selectedStorey: string;
  storeyElevations: Map<string, number>;
}

export default function SpacesOverlay({ showSpaces, selectedStorey, storeyElevations }: SpacesOverlayProps) {
  const [spaces, setSpaces] = useState<SpaceData[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!showSpaces) {
      setSpaces([]);
      return;
    }

    const loadSpaces = async () => {
      const storeysToLoad = selectedStorey === 'ALL' 
        ? Array.from(storeyElevations.keys())
        : [selectedStorey];

      const allSpaces: SpaceData[] = [];

      for (const storey of storeysToLoad) {
        const url = `${import.meta.env.BASE_URL}models/${storey}/${storey}_spaces.json`;
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data: SpaceData[] = await response.json();
            // Add elevation from storeyElevations if not present
            const elevation = storeyElevations.get(storey) || 0;
            allSpaces.push(...data.map(space => ({
              ...space,
              elevation: space.center?.[1] ?? elevation
            })));
          }
        } catch (error) {
          console.warn(`Failed to load spaces for ${storey}:`, error);
        }
      }
      setSpaces(allSpaces);
    };

    loadSpaces();
  }, [showSpaces, selectedStorey, storeyElevations]);

  // Update overlay positions on animation frame
  useEffect(() => {
    if (!showSpaces || spaces.length === 0) return;

    const updatePositions = () => {
      const scene = (window as any).__arScene;
      const camera = (window as any).__arCamera;
      
      if (!scene || !camera || !overlayRef.current) return;

      const container = overlayRef.current;
      const children = container.children;

      spaces.forEach((space, index) => {
        const child = children[index] as HTMLDivElement;
        if (!child || !space.center || space.center.length < 3) return;

        // Project 3D position to 2D screen
        const vector = new THREE.Vector3(space.center[0], space.center[1] + 0.5, space.center[2]);
        vector.project(camera);

        if (vector.z < 1 && vector.z > -1) {
          const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
          const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;
          
          child.style.display = 'block';
          child.style.left = `${x}px`;
          child.style.top = `${y}px`;
          child.style.transform = 'translate(-50%, -50%)';
        } else {
          child.style.display = 'none';
        }
      });

      animationRef.current = requestAnimationFrame(updatePositions);
    };

    animationRef.current = requestAnimationFrame(updatePositions);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [showSpaces, spaces]);

  if (!showSpaces) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 pointer-events-none z-20">
      {spaces.map((space, index) => (
        <div
          key={space.guid || index}
          className="absolute bg-black/75 backdrop-blur-sm border-l-3 border-emerald-500 rounded-md px-2 py-1 text-xs whitespace-nowrap shadow-lg"
          style={{ display: 'none' }}
        >
          <div className="text-emerald-400 font-bold text-xs">{space.name}</div>
          {space.long_name && space.long_name !== space.name && (
            <div className="text-slate-300 text-[10px]">{space.long_name}</div>
          )}
          {space.area && (
            <div className="text-slate-400 text-[8px]">{space.area.toFixed(1)} m²</div>
          )}
        </div>
      ))}
    </div>
  );
}