import React from 'react';
import { Redo, Undo, RotateCcw } from 'lucide-react';
import { ARState } from '../types';

interface HeaderNavProps {
  state: ARState;
  onRedoPlacement: () => void;
  onUndoPlacement: () => void;
  onClearScene: () => void; // Acts as Reset
}

export default function HeaderNav({
  state,
  onRedoPlacement,
  onUndoPlacement,
  onClearScene,
}: HeaderNavProps) {
  return (
    <div className="flex items-center justify-between gap-2 md:gap-4 w-full text-slate-100 select-none">
      
      {/* 1. Top-Left BIM-AR Status Indicator */}
      <div className="flex items-center gap-2 md:gap-3.5">
        {/* Glowing Green active dot */}
        <div className="relative flex h-3.5 w-3.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
        </div>

        {/* Hard Hat Custom Vector Design */}
        <div className="flex items-center justify-center p-1.5 md:p-2 rounded-xl bg-slate-950/90 border border-slate-800 shadow-md shrink-0">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-slate-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 00-9 9v1h18v-1a9 9 0 00-9-9z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14a2 2 0 002-2v-2H3v2a2 2 0 002 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v14M9 5a25 25 0 013-1l3 1" />
          </svg>
        </div>

        <div className="min-w-0">
          <h1 className="text-sm md:text-xl font-extrabold tracking-wider font-sans text-slate-100 uppercase truncate">
            BIM-AR VALIDATION
          </h1>
          <p className="text-[8.5px] md:text-[10px] font-bold tracking-widest text-emerald-400 font-mono uppercase truncate">
            Created by Balaji Velu
          </p>
        </div>
      </div>

      {/* 2. Top-Right Operation Actions (REDO, UNDO, RESET) */}
      <div className="flex items-center gap-1.5 md:gap-3 bg-slate-950/90 backdrop-blur-md p-1 md:p-1.5 rounded-xl border border-slate-800/80">
        
        {/* Redo Button */}
        <button
          onClick={onRedoPlacement}
          aria-label="Redo Last Placement"
          className="group flex flex-col items-center justify-center w-14 md:w-20 py-1 md:py-1.5 rounded-lg hover:bg-slate-900/60 active:bg-slate-900 transition-all text-slate-200"
        >
          <div className="p-1 rounded bg-slate-900 border border-slate-800 group-hover:border-slate-500 transition-colors">
            <Redo className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-200 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </div>
          <span className="text-[8px] md:text-[10px] font-bold tracking-wide mt-1 text-slate-100">REDO</span>
        </button>

        {/* Undo Button */}
        <button
          onClick={onUndoPlacement}
          aria-label="Undo Last Placement"
          className="group flex flex-col items-center justify-center w-14 md:w-20 py-1 md:py-1.5 rounded-lg hover:bg-slate-900/60 active:bg-slate-900 transition-all text-slate-300"
        >
          <div className="p-1 rounded bg-slate-900 border border-slate-800 group-hover:border-slate-500 transition-colors">
            <Undo className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-200 group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <span className="text-[8px] md:text-[10px] font-bold tracking-wide mt-1 text-slate-100">UNDO</span>
        </button>

        {/* Reset Button (originally clear scene) */}
        <button
          onClick={onClearScene}
          aria-label="Reset Sandbox Scene"
          className="group flex flex-col items-center justify-center w-14 md:w-20 py-1 md:py-1.5 rounded-lg hover:bg-slate-900/60 active:bg-slate-900 transition-all text-slate-300"
        >
          <div className="p-1 rounded bg-slate-900 border border-slate-800 group-hover:border-red-500/50 transition-colors">
            <RotateCcw className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-200 group-hover:text-red-400 group-hover:-rotate-45 transition-transform" />
          </div>
          <span className="text-[8px] md:text-[10px] font-bold tracking-wide mt-1 text-slate-100">RESET</span>
        </button>
      </div>

    </div>
  );
}
