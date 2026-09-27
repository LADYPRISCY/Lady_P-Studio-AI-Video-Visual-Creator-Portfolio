import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData.ts';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400">
              COMMERCIAL ENDORSEMENT
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white dark:text-white light:text-neutral-900 tracking-tight font-display">
            WORDS FROM CLIENTS
          </h2>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/80 light:bg-white border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 flex flex-col justify-between relative group hover:border-amber-400/40 transition-colors shadow-sm"
            >
              {/* Quote Mark */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-amber-400/40 group-hover:text-amber-400 transition-colors" />
              </div>

              {/* Quote Body */}
              <p className="text-sm md:text-base text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed italic mb-8 flex-1">
                "{t.quote}"
              </p>

              {/* Author & Attribution Footer */}
              <div className="pt-6 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
                <div className="text-base font-bold text-white dark:text-white light:text-neutral-900 font-display">
                  {t.author}
                </div>
                <div className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mt-0.5">
                  <span>{t.role}</span>
                  <span className="mx-1 text-amber-400">·</span>
                  <span>{t.company}</span>
                </div>
                <div className="mt-2 text-[11px] font-mono text-amber-400">
                  Ref: {t.projectHighlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
