import React from 'react';
import { Lightbulb, Compass, Cog, PackageCheck, ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS_FLOW: ProcessStep[] = [
  {
    number: '01',
    title: 'IDEA',
    description: 'Understanding the concept, message and desired outcome.',
    icon: <Lightbulb className="w-7 h-7 text-[#f5c32c]" strokeWidth={1.8} />,
  },
  {
    number: '02',
    title: 'DIRECTION',
    description: 'Developing the visual style, storytelling and creative direction.',
    icon: <Compass className="w-7 h-7 text-[#f5c32c]" strokeWidth={1.8} />,
  },
  {
    number: '03',
    title: 'CREATION',
    description: 'Using AI tools to generate, refine and animate the visuals.',
    icon: <Cog className="w-7 h-7 text-[#f5c32c]" strokeWidth={1.8} />,
  },
  {
    number: '04',
    title: 'DELIVERY',
    description: 'Polishing the final content and preparing it for its platform.',
    icon: <PackageCheck className="w-7 h-7 text-[#f5c32c]" strokeWidth={1.8} />,
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-14 sm:py-16 md:py-20 bg-[#0d0d0f] border-y border-neutral-800/80 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 xl:gap-14">
          
          {/* Left Title: MY PROCESS / How I Work */}
          <div className="shrink-0 lg:w-56">
            <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] uppercase text-[#f5c32c] block mb-2 font-mono">
              MY PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white tracking-tight font-display whitespace-nowrap">
              How I Work
            </h2>
          </div>

          {/* Right Flow: 01 to 04 with yellow icons and arrows */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
            {PROCESS_STEPS_FLOW.map((step, idx) => (
              <div key={step.number} className="relative flex items-start gap-4">
                
                {/* Step content */}
                <div className="flex-1">
                  {/* Top row: Icon + Number */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-base sm:text-lg font-bold text-white font-mono tracking-tight">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-sm font-black text-white uppercase tracking-wider font-mono mb-1.5">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector to next step (hidden on mobile and last step) */}
                {idx < PROCESS_STEPS_FLOW.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center pt-2 text-neutral-500">
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
