import React from 'react';
import { MapPin, Target } from 'lucide-react';
import { ARState } from '../types';

interface SpacesControlsProps {
  state: ARState;
  onPlaceBuilding: () => void;
  onToggleSpaces: () => void;
}

export default function SpacesControls({ state, onPlaceBuilding, onToggleSpaces }: SpacesControlsProps) {
  return (
    <div className="bg-slate-950/95 p-1.5 md:p-2.5 rounded-2xl border-2 border-slate-700/80 select-none w-full max-w-[150px] md:max-w-[210px] flex flex-col gap-2 justify-center items-center shadow-lg">
      <button
        onClick={onPlaceBuilding}
        className={`w-full py-2 px-3 rounded-xl border-2 font-extrabold text-[10px] md:text-xs tracking-[0.1em] cursor-pointer select-none transition-all flex items-center justify-center gap-2 ${
          state.isPlaced
            ? 'border-emerald-500 bg-emerald-950/20 text-emerald-400 font-black shadow-[0_0_10px_rgba(16,185,129,0.25)]'
            : 'border-slate-400 bg-slate-900/60 text-slate-100 hover:border-cyan-400 hover:text-cyan-400'
        }`}
      >
        <Target className="w-3 h-3" />
        {state.isPlaced ? 'BUILDING PLACED' : 'PLACE BUILDING'}
      </button>

      <button
        onClick={onToggleSpaces}
        className={`w-full py-2 px-3 rounded-xl border-2 font-extrabold text-[10px] md:text-xs tracking-[0.1em] cursor-pointer select-none transition-all flex items-center justify-center gap-2 ${
          state.showSpaces
            ? 'border-emerald-500 bg-emerald-950/20 text-emerald-400 font-black shadow-[0_0_10px_rgba(16,185,129,0.25)]'
            : 'border-slate-400 bg-slate-900/60 text-slate-100 hover:border-cyan-400 hover:text-cyan-400'
        }`}
      >
        <MapPin className="w-3 h-3" />
        {state.showSpaces ? 'LABELS ON' : 'SHOW SPACES'}
      </button>
    </div>
  );
}