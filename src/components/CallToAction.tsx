import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Golden Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-0.5 bg-amber-400" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400">
            INITIATE PRODUCTION
          </span>
          <span className="w-2 h-0.5 bg-amber-400" />
        </div>

        {/* Large Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white dark:text-white light:text-neutral-900 tracking-tight font-display mb-6 uppercase text-balance leading-[1.08] sm:leading-[1.05]">
          HAVE AN IDEA? <br />
          LET'S TURN IT INTO{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            SOMETHING VISUAL.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 dark:text-neutral-300 light:text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Tell me what you're imagining, and let's create something that gets attention.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-9 py-4 text-base font-bold rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-all duration-200 shadow-lg hover:shadow-amber-400/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-xl text-white dark:text-white light:text-neutral-900 bg-neutral-900/60 dark:bg-neutral-900/80 light:bg-neutral-100 hover:border-amber-400/60 dark:hover:border-amber-400/60 light:hover:border-amber-400/60 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};
