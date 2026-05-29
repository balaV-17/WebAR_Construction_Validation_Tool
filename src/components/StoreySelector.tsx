import React from 'react';
import { RotateCcw } from 'lucide-react';
import { ARState } from '../types';

interface StoreySelectorProps {
  state: ARState;
  isOpen: boolean;
  onToggle: () => void;
  onToggleStorey: (storey: keyof ARState['activeStoreys']) => void;
  onShowAllStoreys: () => void;
  availableStoreys: string[];
}

export default function StoreySelector({
  state,
  isOpen,
  onToggle,
  onToggleStorey,
  onShowAllStoreys,
  availableStoreys,
}: StoreySelectorProps) {
  const formatStoreyName = (name: string) => {
    if (name === 'GroundFloor') return 'GND';
    if (name === 'OK Attika') return 'ATT';
    if (name === 'zeHGW') return 'ZEH';
    return name.replace('Level_', 'L');
  };

  const isStoreyActive = (storey: string): boolean => {
    return state.activeStoreys[storey as keyof ARState['activeStoreys']] ?? false;
  };

  return (
    <div className="flex flex-col-reverse items-center select-none w-full">
      <div className="flex flex-col items-center mt-1 w-full">
        <button
          onClick={onToggle}
          className={`flex items-center justify-center w-14 h-14 md:w-[72px] md:h-[72px] rounded-xl border-2 transition-colors bg-slate-950/95 ${
            isOpen
              ? 'border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
              : 'border-slate-400 hover:border-emerald-400'
          }`}
        >
          <div className="relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11 border-2 border-slate-400 rounded-lg bg-slate-900/60">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4L6 18l6-3 6 3-6-14z" />
              <circle cx="12" cy="18" r="1.5" fill="currentColor" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
          </div>
        </button>
        <span className="text-[9px] md:text-[10px] font-extrabold tracking-[0.15em] text-slate-100 mt-1 uppercase font-sans leading-none text-center">
          STORIES
        </span>
      </div>

      {isOpen && (
        <div className="flex flex-col-reverse items-center w-full">
          <div className="w-[2px] h-3 md:h-4 bg-slate-400" />
          <div className="p-3 md:p-4 bg-slate-950/95 rounded-2xl border-2 border-slate-700/80 shadow-2xl flex flex-col items-center justify-center w-full max-w-[220px] gap-3">
            {/* ALL button */}
            <button
              onClick={onShowAllStoreys}
              className={`flex items-center justify-center w-full h-10 md:h-11 rounded-lg border-2 transition-all text-xs md:text-sm font-bold ${
                state.showAllStoreys
                  ? 'border-emerald-500 bg-emerald-950/20 text-emerald-400'
                  : 'border-purple-500 bg-purple-950/20 text-purple-400 hover:border-purple-400'
              }`}
            >
              ALL FLOORS
            </button>

            <div className="w-full h-[1px] bg-slate-800" />

            {/* Storey grid - multi-select toggle buttons */}
            <div className="grid grid-cols-2 gap-2 w-full">
              {availableStoreys.map((storey) => (
                <button
                  key={storey}
                  onClick={() => onToggleStorey(storey as keyof ARState['activeStoreys'])}
                  className={`flex items-center justify-center w-full h-10 md:h-11 rounded-lg border-2 transition-all text-xs md:text-sm font-bold ${
                    isStoreyActive(storey)
                      ? 'border-emerald-500 bg-emerald-950/20 text-emerald-400'
                      : 'border-slate-500 bg-slate-900/40 text-slate-300 hover:border-slate-100'
                  }`}
                >
                  {formatStoreyName(storey)}
                </button>
              ))}
            </div>

            <div className="w-full h-[1px] bg-slate-800" />

            <button
              onClick={() => {
                onToggleStorey('GroundFloor');
                Object.keys(state.activeStoreys).forEach((s) => {
                  if (s !== 'GroundFloor' && isStoreyActive(s)) {
                    onToggleStorey(s as keyof ARState['activeStoreys']);
                  }
                });
              }}
              className="flex items-center justify-center gap-2 w-full h-10 md:h-11 rounded-lg border-2 border-slate-500 bg-slate-900/40 text-slate-400 hover:border-slate-100 hover:text-white transition-all"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="text-xs font-bold">RESET VIEW</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}