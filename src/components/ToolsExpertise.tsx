import React from 'react';
import { TOOLS_EXPERTISE, MODEL_STACK } from '../data/portfolioData.ts';
import { Sparkles, Terminal, Cpu } from 'lucide-react';

export const ToolsExpertise: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400">
              DISCIPLINES & PIPELINES
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white dark:text-white light:text-neutral-900 tracking-tight font-display mb-3">
            Creative Disciplines & Tools
          </h2>
          <p className="text-sm md:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
            A fusion of traditional cinematic composition, art direction, and next-generation generative models.
          </p>
        </div>

        {/* Creative Disciplines - Curated typography grid, not a technical resume */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-16">
          {TOOLS_EXPERTISE.map((tool, idx) => (
            <div
              key={idx}
              className={`px-5 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-200 cursor-default flex items-center gap-2.5 ${
                tool.highlight
                  ? 'bg-amber-400/10 text-amber-400 border border-amber-400/30 shadow-sm shadow-amber-400/5'
                  : 'bg-neutral-900/60 dark:bg-neutral-900/80 light:bg-neutral-100 text-neutral-300 dark:text-neutral-300 light:text-neutral-800 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 hover:border-amber-400/50'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{tool.label}</span>
            </div>
          ))}
        </div>

        {/* Model & Software Foundation (Quiet, minimal reference) */}
        <div className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/50 light:bg-neutral-50 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
            <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-400 light:text-neutral-600 font-semibold">
              Production Stack Integration
            </span>
            <span className="text-xs font-mono text-amber-400">STATE-OF-THE-ART 2026</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            {MODEL_STACK.map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-semibold text-white dark:text-white light:text-neutral-900">
                  {item.name}
                </span>
                <span className="text-[11px] text-neutral-400 dark:text-neutral-400 light:text-neutral-600 truncate mt-0.5">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
