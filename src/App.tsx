import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { ARState } from './types';
import ARView from './components/ARView';
import HeaderNav from './components/HeaderNav';
import StoreySelector from './components/StoreySelector';
import CategoryToggles from './components/CategoryToggles';
import SpacesControls from './components/SpacesControls';
import SpacesOverlay from './components/SpacesOverlay';

export default function App() {
  const [state, setState] = useState<ARState>({
    scale: 1.0,
    opacity: 0.85,
    rotationY: 0,
    rotationX: -270,
    positionY: 0,
    activeStoreys: {
      GroundFloor: true,
      Level_01: false,
      Level_02: false,
      Level_03: false,
      Level_04: false,
      'OK Attika': false,
      Roof: false,
      zeHGW: false,
    },
    isArMode: false,
    isPlaced: false,
    showAllStoreys: false,
    activeCategories: {
      structure: true,
      openings: false,
      circulation: false,
      mep: false,
    },
    showSpaces: false,
  });

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLayersOpen, setIsLayersOpen] = useState(false);

  const handleToggleCategory = (category: keyof ARState['activeCategories']) => {
    setState((prev) => ({
      ...prev,
      activeCategories: {
        ...prev.activeCategories,
        [category]: !prev.activeCategories[category],
      },
    }));
  };

  const handleResetView = () => {
    setState((prev) => ({
      ...prev,
      activeStoreys: {
        GroundFloor: true,
        Level_01: false,
        Level_02: false,
        Level_03: false,
        Level_04: false,
        'OK Attika': false,
        Roof: false,
        zeHGW: false,
      },
      scale: 1.0,
      rotationY: 0,
      rotationX: 0,
      positionY: 0,
      opacity: 0.85,
      showAllStoreys: false,
      activeCategories: {
        structure: true,
        openings: false,
        circulation: false,
        mep: false,
      },
      showSpaces: false,
      isPlaced: false,
    }));
  };

  const handleToggleSpaces = () => {
    setState((prev) => ({ ...prev, showSpaces: !prev.showSpaces }));
  };

  const handlePlaceBuilding = () => {
    setState((prev) => ({ ...prev, isPlaced: true }));
    console.log('Place building clicked');
  };

  const handleToggleStorey = (storey: keyof ARState['activeStoreys']) => {
    setState((prev) => {
      const newState = {
        ...prev,
        activeStoreys: {
          ...prev.activeStoreys,
          [storey]: !prev.activeStoreys[storey],
        },
        showAllStoreys: false,
        isPlaced: false,
      };
      const activeStoreys = Object.entries(newState.activeStoreys)
        .filter(([, v]) => v)
        .map(([k]) => k);
      console.log(`[handleToggleStorey] ${storey} → ${newState.activeStoreys[storey] ? 'ON' : 'OFF'} | Active: [${activeStoreys.join(', ')}]`);
      return newState;
    });
  };

  const handleShowAllStoreys = () => {
    setState((prev) => ({ 
      ...prev, 
      showAllStoreys: !prev.showAllStoreys,
      isPlaced: false 
    }));
  };

  const availableStoreys = [
    'GroundFloor',
    'Level_01',
    'Level_02',
    'Level_03',
    'Level_04',
    'OK Attika',
    'Roof',
    'zeHGW',
  ];

  // Get elevations for all storeys (for "ALL" mode)
  const [storeyElevations, setStoreyElevations] = useState<Map<string, number>>(new Map());

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#020617] text-slate-100 font-sans relative select-none">
      <ARView 
        state={state} 
        onChangeState={setState}
        storeyElevations={storeyElevations}
        onStoreyElevationsLoaded={setStoreyElevations}
      />
      
  <SpacesOverlay 
    showSpaces={state.showSpaces} 
    selectedStorey={state.showAllStoreys ? 'ALL' : Object.keys(state.activeStoreys).filter(s => state.activeStoreys[s as keyof typeof state.activeStoreys])[0] || 'GroundFloor'}
    storeyElevations={storeyElevations}
  />

      <div id="ar-overlay" className="absolute inset-0 z-10 p-4 md:p-8 flex flex-col justify-between h-full pointer-events-none">
        <div className="w-full flex justify-between items-start pointer-events-auto">
          <HeaderNav state={state} onResetView={handleResetView} />
        </div>

        {!state.isArMode && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              id="ar-button-container"
              className="relative pointer-events-auto bg-slate-950/95 border-2 border-slate-700/80 p-6 md:p-10 rounded-2xl text-center flex flex-col items-center gap-4 select-none transition-all"
            >
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

        {state.isArMode && (
          <div className="w-full flex items-end justify-between gap-4 mt-auto">
            {/* COLUMN 1: STOREYS & SCALE */}
            <div className="flex flex-col gap-3 items-start pointer-events-auto w-[130px] md:w-[190px]">
              <StoreySelector
                state={state}
                isOpen={isNavOpen}
                onToggle={() => setIsNavOpen(!isNavOpen)}
                onToggleStorey={handleToggleStorey}
                onShowAllStoreys={handleShowAllStoreys}
                availableStoreys={availableStoreys}
              />

              <div className="bg-slate-950/95 p-1.5 md:p-3 rounded-2xl border-2 border-slate-700/80 select-none w-full shadow-lg">
                <div className="flex justify-between text-[8px] md:text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 leading-none select-none">
                  <span>Scale Range</span>
                  <span className="text-emerald-400 font-extrabold">
                    {state.scale.toFixed(1)}x
                  </span>
                </div>
                <div className="relative flex items-center py-0.5">
                  <input
                    type="range"
                    min="0.10"
                    max="10.00"
                    step="0.05"
                    value={state.scale}
                    onChange={(e) =>
                      setState((p) => ({ ...p, scale: Number(e.target.value) }))
                    }
                    className="w-full accent-white bg-slate-800 h-1 rounded-lg cursor-pointer animate-none"
                  />
                </div>
                <div className="flex justify-center items-center px-0.5 mt-1 select-none">
                  <span className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] text-slate-300 uppercase text-center leading-none">
                    SCALE
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMN 2: SPACES & ROTATION + ELEVATION */}
            <div className="flex flex-col items-center gap-2 pointer-events-auto relative -top-3 w-full max-w-[130px] md:max-w-[190px]">
              <SpacesControls
                state={state}
                onPlaceBuilding={handlePlaceBuilding}
                onToggleSpaces={handleToggleSpaces}
              />

              {/* Rotate Y Slider (Horizontal Rotation) */}
              <div className="bg-slate-950/95 p-1.5 md:p-2.5 rounded-2xl border-2 border-slate-700/80 select-none relative w-full">
                <div className="flex justify-between text-[8px] md:text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 leading-none select-none">
                  <span>Rotate Y</span>
                  <span className="text-cyan-400 font-extrabold">
                    {state.rotationY}°
                  </span>
                </div>
                <div className="relative flex items-center py-0.5">
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    step="1"
                    value={state.rotationY}
                    onChange={(e) =>
                      setState((p) => ({ ...p, rotationY: Number(e.target.value) }))
                    }
                    className="w-full accent-cyan-400 bg-slate-800 h-1 rounded-lg cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center px-0.5 mt-1 select-none">
                  <span className="text-[7px] md:text-[8px] font-extrabold text-slate-500 uppercase tracking-widest leading-none">
                    -180°
                  </span>
                  <span className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] text-slate-300 uppercase text-center leading-none">
                     (LEFT/RIGHT)
                  </span>
                  <span className="text-[7px] md:text-[8px] font-extrabold text-slate-500 uppercase tracking-widest leading-none">
                    180°
                  </span>
                </div>
              </div>

              {/* Rotate X Slider (Vertical Rotation) */}
              <div className="bg-slate-950/95 p-1.5 md:p-2.5 rounded-2xl border-2 border-slate-700/80 select-none relative w-full">
                <div className="flex justify-between text-[8px] md:text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 leading-none select-none">
                  <span>Rotate X</span>
                  <span className="text-emerald-400 font-extrabold">
                    {state.rotationX}°
                  </span>
                </div>
                <div className="relative flex items-center py-0.5">
                  <input
                    type="range"
                    min="0"
                    max="360"
                    step="1"
                    value={state.rotationX}
                    onChange={(e) =>
                      setState((p) => ({ ...p, rotationX: Number(e.target.value) }))
                    }
                    className="w-full accent-emerald-400 bg-slate-800 h-1 rounded-lg cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center px-0.5 mt-1 select-none">
                  <span className="text-[7px] md:text-[8px] font-extrabold text-slate-500 uppercase tracking-widest leading-none">
                    -180°
                  </span>
                  <span className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] text-slate-300 uppercase text-center leading-none">
                    俯仰 (UP/DOWN)
                  </span>
                  <span className="text-[7px] md:text-[8px] font-extrabold text-slate-500 uppercase tracking-widest leading-none">
                    180°
                  </span>
                </div>
              </div>

              {/* NEW: Elevation Slider (Vertical Movement) */}
              <div className="bg-slate-950/95 p-1.5 md:p-2.5 rounded-2xl border-2 border-slate-700/80 select-none relative w-full">
                <div className="flex justify-between text-[8px] md:text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 leading-none select-none">
                  <span>Elevation</span>
                  <span className="text-purple-400 font-extrabold">
                    {state.positionY.toFixed(1)}m
                  </span>
                </div>
                <div className="relative flex items-center py-0.5">
                  <input
                    type="range"
                    min="-8"
                    max="8"
                    step="0.1"
                    value={state.positionY}
                    onChange={(e) =>
                      setState((p) => ({ ...p, positionY: Number(e.target.value) }))
                    }
                    className="w-full accent-purple-400 bg-slate-800 h-1 rounded-lg cursor-pointer"
                  />
                </div>
                <div className="flex justify-center items-center px-0.5 mt-1 select-none">
                  <span className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] text-slate-300 uppercase text-center leading-none">
                    HEIGHT
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMN 3: CATEGORIES & OPACITY */}
            <div className="flex flex-col gap-3 items-end pointer-events-auto w-[130px] md:w-[190px]">
              <CategoryToggles
                state={state}
                isOpen={isLayersOpen}
                onToggle={() => setIsLayersOpen(!isLayersOpen)}
                onToggleCategory={handleToggleCategory}
              />

              <div className="bg-slate-950/95 p-1.5 md:p-3 rounded-2xl border-2 border-slate-700/80 select-none relative w-full shadow-lg">
                <div className="flex justify-between text-[8px] md:text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 leading-none select-none">
                  <span>Transp.</span>
                  <span className="text-cyan-400 font-extrabold">
                    {(state.opacity * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="relative flex items-center py-0.5">
                  <input
                    type="range"
                    min="0.00"
                    max="1.00"
                    step="0.05"
                    value={state.opacity}
                    onChange={(e) =>
                      setState((p) => ({ ...p, opacity: Number(e.target.value) }))
                    }
                    className="w-full accent-cyan-400 bg-slate-800 h-1 rounded-lg cursor-pointer"
                  />
                </div>
                <div className="flex justify-center items-center px-0.5 mt-1 select-none">
                  <span className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] text-slate-300 uppercase text-center leading-none">
                    OPACITY
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}