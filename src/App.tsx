/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import ARView from './components/ARView';
import { 
  Building2, 
  Layers, 
  ArrowDownToLine, 
  Wrench, 
  Droplet, 
  Zap, 
  Flame,
  Plus,
  Undo,
  Redo,
  Ban,
  Maximize
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type FloorState = { f1: boolean; f2: boolean; f3: boolean; f7: boolean };
export type SystemType = 'HVAC' | 'Plumb' | 'Elec' | 'Fire' | null;

export default function App() {
  const [floors, setFloors] = useState<FloorState>({ f1: true, f2: true, f3: true, f7: true });
  const [teleported, setTeleported] = useState<boolean>(false);
  const [activeSystem, setActiveSystem] = useState<SystemType>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [hasReticle, setHasReticle] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const activeFloorCount = Object.values(floors).filter(Boolean).length;
  const canTeleport = activeFloorCount === 1;

  const toggleFloor = (floor: keyof FloorState) => {
    setFloors(prev => ({ ...prev, [floor]: !prev[floor] }));
    setTeleported(false); // Reset teleport on floor change
  };

  const toggleAllFloors = () => {
    const allOn = activeFloorCount === 4;
    setFloors({ f1: !allOn, f2: !allOn, f3: !allOn, f7: !allOn });
    setTeleported(false);
  };

  const activeFloorEntry = Object.entries(floors).find(([_, v]) => v);
  const activeFloorKey: keyof FloorState | null = (canTeleport && activeFloorEntry) ? (activeFloorEntry[0] as keyof FloorState) : null;

  // Event handlers to communicate with ARView
  const handlePlace = () => {
    window.dispatchEvent(new CustomEvent('ar-action-place', { detail: { system: activeSystem } }));
  };
  const handleClear = () => {
    // Note on CLR: Clicking this dispatches the clear event immediately.
    // We removed the javascript `confirm()` dialog because modal popups often
    // break or freeze active WebXR sessions on mobile devices.
    window.dispatchEvent(new CustomEvent('ar-action-clear'));
  };

  useEffect(() => {
    const handleSelected = (e: any) => setSelectedModel(e.detail.id);
    const handleReticle = (e: any) => setHasReticle(e.detail.visible);
    const handleHistory = (e: any) => {
        setCanUndo(e.detail.canUndo);
        setCanRedo(e.detail.canRedo);
    };
    
    window.addEventListener('ar-model-selected', handleSelected);
    window.addEventListener('ar-reticle-update', handleReticle);
    window.addEventListener('ar-history-update', handleHistory);
    return () => {
      window.removeEventListener('ar-model-selected', handleSelected);
      window.removeEventListener('ar-reticle-update', handleReticle);
      window.removeEventListener('ar-history-update', handleHistory);
    };
  }, []);

  return (
    <div className="w-full h-full bg-slate-900 text-slate-200 font-sans flex items-center justify-center overflow-hidden absolute inset-0">
      
      {/* 3D / AR Viewport */}
      <ARView 
        floors={floors}
        teleportedFloor={teleported ? activeFloorKey : null}
        activeSystem={activeSystem}
      />

      {/* DOM Overlay UI for WebXR */}
      <div id="ar-overlay" className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 z-20">
        
        {/* Top: Status & Systems */}
        <div className="flex flex-col gap-4 pointer-events-auto w-full max-w-3xl mx-auto">
          {/* Top Bar Status */}
          <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-3 border border-slate-700/50 flex justify-between items-center shadow-lg">
             <div className="flex items-center gap-3">
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
               <span className="text-xs font-bold tracking-wider uppercase text-slate-300">AR Active</span>
             </div>
             <div className="text-xs font-mono text-slate-400">
               {teleported ? `TELEPORTED: ${activeFloorKey?.toUpperCase()}` : 'OVERVIEW'}
             </div>
          </div>

          {/* System Toggle Bar */}
          <div className="flex justify-center gap-2">
            {[
              { id: 'HVAC', color: 'bg-blue-500', activeBg: 'bg-blue-500/20', border: 'border-blue-500/50', icon: Wrench },
              { id: 'Plumb', color: 'bg-red-500', activeBg: 'bg-red-500/20', border: 'border-red-500/50', icon: Droplet },
              { id: 'Elec', color: 'bg-yellow-500', activeBg: 'bg-yellow-500/20', border: 'border-yellow-500/50', icon: Zap },
              { id: 'Fire', color: 'bg-orange-500', activeBg: 'bg-orange-500/20', border: 'border-orange-500/50', icon: Flame },
            ].map(sys => {
              const isActive = activeSystem === sys.id;
              const Icon = sys.icon;
              return (
                <button
                  key={sys.id}
                  onClick={() => setActiveSystem(isActive ? null : sys.id as SystemType)}
                  className={cn(
                    "flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-200",
                    "w-16 h-16 shadow-lg backdrop-blur-md",
                    isActive ? cn(sys.activeBg, sys.border, "shadow-[0_0_15px_rgba(0,0,0,0.2)]") : "bg-slate-800/80 border-slate-700/50 text-slate-400 hover:bg-slate-700"
                  )}
                >
                  <Icon size={20} className={isActive ? sys.color.replace('bg-', 'text-') : ''} />
                  <span className={cn("text-[9px] font-bold uppercase mt-1.5", isActive ? "text-white" : "")}>{sys.id}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right side: Floor Toggle Bar */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-auto">
          <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-2 border border-slate-700/50 flex flex-col gap-2 shadow-xl">
            <button
              onClick={toggleAllFloors}
              className={cn("w-12 h-12 rounded-xl flex flex-col items-center justify-center transition-all", activeFloorCount === 4 ? "bg-emerald-500 text-slate-900 font-bold" : "bg-slate-700 text-slate-300")}
            >
              <Layers size={18} />
              <span className="text-[9px] uppercase mt-0.5">All</span>
            </button>
            <div className="w-8 h-px bg-slate-700 mx-auto"></div>
            {['f7', 'f3', 'f2', 'f1'].map(f => {
              const isOn = floors[f as keyof FloorState];
              return (
                <button
                  key={f}
                  onClick={() => toggleFloor(f as keyof FloorState)}
                  className={cn("w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-all", isOn ? "bg-emerald-500 text-slate-900" : "bg-slate-700 text-slate-300")}
                >
                  {f.toUpperCase()}
                </button>
              )
            })}
            <div className="w-8 h-px bg-slate-700 mx-auto"></div>
            <button
              onClick={() => canTeleport && setTeleported(!teleported)}
              disabled={!canTeleport}
              className={cn(
                "w-12 h-12 rounded-xl flex flex-col items-center justify-center transition-all",
                teleported ? "bg-amber-500 text-slate-900 shadow-[0_0_15px_rgba(245,158,11,0.5)]" : 
                canTeleport ? "bg-slate-700 text-white hover:bg-slate-600" : "opacity-30 cursor-not-allowed bg-slate-800 text-slate-500 text-slate-500"
              )}
            >
              {teleported ? <Maximize size={18} /> : <ArrowDownToLine size={18} />}
              <span className="text-[9px] uppercase mt-0.5">{teleported ? 'Back' : 'TP ↓'}</span>
            </button>
          </div>
        </div>

        {/* Bottom: Action Bar */}
        <div className="pointer-events-auto flex justify-center w-full max-w-xl mx-auto mb-16">
          <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-2 border border-slate-700/50 flex gap-2 shadow-xl items-center">
            <button
              onClick={handlePlace}
              disabled={!hasReticle}
              className={cn(
                "px-6 py-4 rounded-xl flex items-center gap-2 font-bold uppercase transition-all",
                hasReticle ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400" : "bg-slate-800 text-slate-600 cursor-not-allowed border-2 border-slate-700 border-dashed"
              )}
            >
              <Plus size={20} />
              <span>{activeSystem ? `Place ${activeSystem}` : 'Place Bldg'}</span>
            </button>
            <div className="w-px h-10 bg-slate-700 mx-1"></div>
            
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('ar-action-undo'))}
              disabled={!canUndo}
              className={cn("w-14 h-14 rounded-xl flex flex-col items-center justify-center transition-all", canUndo ? "bg-slate-700 text-white hover:bg-slate-600" : "opacity-30 bg-slate-800")}
            >
              <Undo size={18} />
              <span className="text-[9px] uppercase mt-1">Undo</span>
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('ar-action-redo'))}
              disabled={!canRedo}
              className={cn("w-14 h-14 rounded-xl flex flex-col items-center justify-center transition-all", canRedo ? "bg-slate-700 text-white hover:bg-slate-600" : "opacity-30 bg-slate-800")}
            >
              <Redo size={18} />
              <span className="text-[9px] uppercase mt-1">Redo</span>
            </button>
            <button 
              onClick={handleClear}
              className="w-14 h-14 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:bg-slate-700 transition-all bg-slate-800/50"
            >
              <Ban size={18} />
              <span className="text-[9px] uppercase mt-1">Clr</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

