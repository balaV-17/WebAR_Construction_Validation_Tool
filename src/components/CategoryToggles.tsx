import React from 'react';
import { Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ARState } from '../types';

interface CategoryTogglesProps {
  state: ARState;
  isOpen: boolean;
  onToggle: () => void;
  onToggleCategory: (category: keyof ARState['activeCategories']) => void;
}

const CATEGORIES: Array<{
  id: keyof ARState['activeCategories'];
  label: string;
  icon: string;
  color: string;
}> = [
  { id: 'structure', label: 'STRC', icon: '⨁', color: 'text-cyan-400' },
  { id: 'openings', label: 'OPEN', icon: '⌧', color: 'text-amber-400' },
  { id: 'circulation', label: 'CIRC', icon: '⇵', color: 'text-yellow-400' },
  { id: 'mep', label: 'MEP', icon: '⚡', color: 'text-blue-400' },
];

export default function CategoryToggles({
  state,
  isOpen,
  onToggle,
  onToggleCategory,
}: CategoryTogglesProps) {
  // FIX: Use the isOpen prop from parent (App.tsx), not local state
  return (
    <div className="flex flex-col-reverse items-center select-none">
      <div className="flex flex-col items-center mt-1">
        <button
          onClick={onToggle}
          aria-label="Toggle Category Controls List"
          className={`flex items-center justify-center w-14 h-14 md:w-[72px] md:h-[72px] rounded-xl border-2 transition-all bg-slate-950/90 active:scale-95 shadow-lg ${
            isOpen
              ? 'border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
              : 'border-slate-400 hover:border-emerald-400'
          }`}
        >
          <div className="relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11 border-2 border-slate-400 rounded-lg bg-slate-900/60">
            <Layers className="w-5 h-5 md:w-6 md:h-6 text-slate-100" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
          </div>
        </button>
        <span className="text-[9px] md:text-[10px] font-extrabold tracking-[0.15em] text-slate-100 mt-1 uppercase font-sans leading-none">
          SYSTEMS
        </span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <div className="flex flex-col-reverse items-center">
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-[2px] h-3 md:h-4 bg-slate-400 origin-bottom"
            />

            <motion.div
              initial={{ y: 15, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 15, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="p-2 md:p-3 bg-slate-950/90 backdrop-blur-md rounded-2xl border-2 border-slate-700/80 shadow-2xl flex items-center justify-center"
            >
              <div className="grid grid-cols-2 gap-1.5 md:gap-2.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onToggleCategory(cat.id)}
                    className={`flex flex-col items-center justify-center w-14 h-11 md:w-[68px] md:h-[48px] rounded-lg border-2 transition-all ${
                      state.activeCategories[cat.id]
                        ? 'border-emerald-500 bg-emerald-950/20 text-emerald-400 font-extrabold shadow-[0_0_8px_rgba(16,185,129,0.3)]'
                        : 'border-slate-500 bg-slate-900/40 text-slate-300 hover:border-slate-100 hover:text-white'
                    }`}
                  >
                    <span className={`text-xs md:text-sm font-semibold leading-none ${cat.color}`}>
                      {cat.icon}
                    </span>
                    <span className="text-[8px] md:text-[9.5px] font-extrabold tracking-wider mt-1 uppercase">
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}