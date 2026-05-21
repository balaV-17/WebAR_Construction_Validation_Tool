/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { ARState } from './types';
import ARView from './components/ARView'; 
import HeaderNav from './components/HeaderNav';
import FloorSelector from './components/FloorSelector';
import LayerControls from './components/LayerControls';
import PlaceBuildingControls from './components/PlaceBuildingControls';

export default function App() {
  const [state, setState] = useState<ARState>({
    scale: 1.0, opacity: 0.85, posX: 260, posY: 240, rotation: 0, 
    selectedFloor: 0, isArMode: false, isLocked: false, isPlaced: false,
    layers: { foundations: false, columns: true, beams: true, floors: false }
  });

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLayersOpen, setIsLayersOpen] = useState(false);

  const positionHistory = useRef<{ x: number; y: number }[]>([]);
  const redoHistory = useRef<{ x: number; y: number }[]>([]);

  const handleMove = (dir: 'up' | 'down' | 'left' | 'right') => {
    if (state.isLocked || state.selectedFloor === 0) return;
    const stepSize = 15;
    setState((prev) => {
      let dx = 0; let dy = 0;
      if (dir === 'left') dx = -stepSize;
      if (dir === 'right') dx = stepSize;
      if (dir === 'up') dy = -stepSize;
      if (dir === 'down') dy = stepSize;
      positionHistory.current.push({ x: prev.posX, y: prev.posY });
      if (positionHistory.current.length > 30) positionHistory.current.shift();
      redoHistory.current = [];
      return { ...prev, posX: prev.posX + dx, posY: prev.posY + dy };
    });
  };

  const handleUndoPlacement = () => {
    if (positionHistory.current.length === 0) return;
    const prevPos = positionHistory.current.pop();
    if (prevPos) {
      redoHistory.current.push({ x: state.posX, y: state.posY });
      setState((prev) => ({ ...prev, posX: prevPos.x, posY: prevPos.y }));
    }
  };

  const handleRedoPlacement = () => {
    if (redoHistory.current.length === 0) return;
    const nextPos = redoHistory.current.pop();
    if (nextPos) {
      positionHistory.current.push({ x: state.posX, y: state.posY });
      setState((prev) => ({ ...prev, posX: nextPos.x, posY: nextPos.y }));
    }
  };

  const handleClearScene = () => {
    setState((prev) => ({
      ...prev, posX: 260, posY: 240, scale: 1.0, rotation: 0,
      selectedFloor: 0, isPlaced: false, isLocked: false,
      layers: { foundations: false, columns: true, beams: true, floors: false }
    }));
    setIsNavOpen(false); setIsLayersOpen(false);
    positionHistory.current = []; redoHistory.current = [];
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#020617] text-slate-100 font-sans relative select-none">
      
      {/* IMMERSIVE AR ENGINE */}
      <ARView state={state} onChangeState={setState} />

      {/* WEBXR DOM OVERLAY CONTAINER */}
      <div id="ar-overlay" className="absolute inset-0 z-10 p-4 md:p-8 flex flex-col justify-between h-full pointer-events-none">
        
        {/* Top Header Always Visible */}
        <div className="w-full flex justify-between items-start pointer-events-auto">
          <HeaderNav state={state} onRedoPlacement={handleRedoPlacement} onUndoPlacement={handleUndoPlacement} onClearScene={handleClearScene} />
        </div>

        {/* Center UI BEFORE AR Starts - Perfectly matches your design */}
        {!state.isArMode && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div id="ar-button-container" className="relative pointer-events-auto bg-slate-950/95 border-2 border-slate-700/80 p-6 md:p-10 rounded-2xl text-center flex flex-col items-center gap-4 select-none transition-all">
              <h2 className="text-xl md:text-2xl font-extrabold tracking-widest text-slate-100 uppercase">
                Enter AR Mode
              </h2>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="border border-slate-700/80 rounded p-1 px-2 flex items-center justify-center text-xs gap-1">
                  <span className="text-[9px] text-zinc-500">⎾</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-[9px] text-zinc-500">⎿</span>
                </div>
                <div className="border border-slate-700/80 rounded p-1 px-2 flex items-center justify-center text-xs gap-1">
                  <span className="text-[9px] text-zinc-500">⎡</span>
                  <div className="w-1 h-3.5 bg-emerald-500 rounded-sm" />
                  <span className="text-[9px] text-zinc-500">⎦</span>
                </div>
              </div>

              <p className="text-[8px] md:text-[9.5px] font-mono tracking-wider opacity-60 text-slate-400 max-w-xs leading-normal">
                ACTIVE OVERLAY TO INTEGRATE BIM STRUCTURES
              </p>
            </div>
          </div>
        )}

        {/* HUD CONTROLS AFTER AR STARTS */}
        {state.isArMode && (
          <div className="w-full flex items-end justify-between gap-4 mt-auto">
            
            <div className="flex flex-col gap-3 items-start pointer-events-auto w-[130px] md:w-[190px]">
              <FloorSelector state={state} isOpen={isNavOpen} onToggle={() => setIsNavOpen(!isNavOpen)} onSelectFloor={(f) => setState(p => ({ ...p, selectedFloor: f }))} onResetFloor={() => setState(p => ({ ...p, selectedFloor: 0 }))} onMove={handleMove} />
              <div className="bg-slate-950/95 p-1.5 md:p-3 rounded-2xl border-2 border-slate-700/80 select-none w-full shadow-lg">
                <input type="range" min="0.10" max="2.00" step="0.05" value={state.scale} onChange={(e) => setState(p => ({ ...p, scale: Number(e.target.value) }))} className="w-full accent-white bg-slate-800 h-1 rounded-lg" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 pointer-events-auto relative -top-3 w-full max-w-[130px] md:max-w-[190px]">
              <PlaceBuildingControls state={state} onChangeState={setState} />
              <div className="bg-slate-950/95 p-1.5 md:p-2.5 rounded-2xl border-2 border-slate-700/80 select-none relative w-full">
                <input type="range" min="-180" max="180" step="1" value={state.rotation} onChange={(e) => setState(p => ({ ...p, rotation: Number(e.target.value) }))} className="w-full accent-cyan-400 bg-slate-800 h-1 rounded-lg" />
              </div>
            </div>

            <div className="flex flex-col gap-3 items-end pointer-events-auto w-[130px] md:w-[190px]">
              <LayerControls state={state} isOpen={isLayersOpen} onToggle={() => setIsLayersOpen(!isLayersOpen)} onToggleLayer={(k) => setState(p => ({ ...p, layers: { ...p.layers, [k]: !p.layers[k] } }))} />
              <div className="bg-slate-950/95 p-1.5 md:p-3 rounded-2xl border-2 border-slate-700/80 select-none relative w-full shadow-lg">
                <input type="range" min="0.00" max="1.00" step="0.05" value={state.opacity} onChange={(e) => setState(p => ({ ...p, opacity: Number(e.target.value) }))} className="w-full accent-cyan-400 bg-slate-800 h-1 rounded-lg" />
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}