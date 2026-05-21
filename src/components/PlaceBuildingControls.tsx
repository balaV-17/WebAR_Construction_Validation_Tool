import React from 'react';
import { Lock, Unlock } from 'lucide-react';
import { ARState } from '../types';

interface PlaceBuildingControlsProps {
  state: ARState;
  onChangeState: (updater: (prev: ARState) => ARState) => void;
}

export default function PlaceBuildingControls({
  state,
  onChangeState,
}: PlaceBuildingControlsProps) {
  
  const handleTogglePlace = () => {
    onChangeState((prev) => {
      const nextPlaced = !prev.isPlaced;
      const nextLocked = nextPlaced; // lock displacement coordinates if placed
      return {
        ...prev,
        isPlaced: nextPlaced,
        isLocked: nextLocked,
      };
    });
  };

  return (
    <div className="bg-slate-950/90 backdrop-blur-md p-2.5 md:p-3.5 rounded-2xl border-2 border-slate-700 shadow-xl select-none w-full max-w-[180px] md:max-w-[220px] flex flex-col justify-between relative overflow-hidden group">
      
      {/* Visual background scanning lines inside the option */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.02)_0%,transparent_100%)] pointer-events-none" />

      {/* Header aligned like SCALE/OPACITY labels */}
      <div className="flex justify-between items-center text-[8px] md:text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none mb-2 select-none">
        <span>STATUS</span>
        <span className={state.isPlaced ? 'text-emerald-400' : 'text-cyan-400'}>
          {state.isPlaced ? 'PLACED' : 'ALIGNING'}
        </span>
      </div>

      {/* Simple, high-fidelity button option named PLACED BUILDING */}
      <button
        onClick={handleTogglePlace}
        className={`w-full flex items-center justify-center gap-1.5 md:gap-2 py-1.5 md:py-2 px-2.5 md:px-3 rounded-xl border-2 font-extrabold text-[9.5px] md:text-xs tracking-[0.1em] transition-all cursor-pointer select-none active:scale-95 ${
          state.isPlaced
            ? 'border-emerald-500 bg-emerald-950/25 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
            : 'border-slate-400 bg-slate-900/40 text-slate-100 hover:border-emerald-500 hover:text-emerald-400'
        }`}
      >
        {state.isPlaced ? (
          <>
            <Lock className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="uppercase">LOCKED</span>
          </>
        ) : (
          <>
            <Unlock className="w-3.5 h-3.5 text-slate-300" />
            <span className="uppercase">PLACE</span>
          </>
        )}
      </button>

      {/* Custom light status indicator at the top corner */}
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 pointer-events-none">
        <span className={`w-1.5 h-1.5 rounded-full ${state.isPlaced ? 'bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse' : 'bg-slate-600'}`} />
      </div>

    </div>
  );
}
