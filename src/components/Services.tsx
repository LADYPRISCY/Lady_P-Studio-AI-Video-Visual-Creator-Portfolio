import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData.ts';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleInquireService = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-0.5 bg-amber-400" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400">
              COMMISSION CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white dark:text-white light:text-neutral-900 tracking-tight font-display mb-4">
            WHAT I CREATE
          </h2>
          <p className="text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
            Specialized visual execution combining cinematic direction, narrative pacing, and modern generative pipelines for forward-thinking brands and creators.
          </p>
        </div>

        {/* Services List: Clean minimal list with golden-yellow hover interactions */}
        <div className="divide-y divide-neutral-800 dark:divide-neutral-800 light:divide-neutral-200 border-y border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
          {SERVICES.map((service) => {
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="py-10 md:py-12 transition-all duration-300 group hover:bg-neutral-900/30 dark:hover:bg-neutral-900/40 light:hover:bg-neutral-50/80 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Number & Service Title */}
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <span className="text-xs font-mono font-bold text-amber-400 mt-1">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-neutral-900 font-display group-hover:text-amber-400 transition-colors duration-200 flex items-center gap-2">
                        <span>{service.title}</span>
                      </h3>
                      <span className="text-xs text-neutral-500 font-mono mt-1 block">
                        Est. Turnaround: {service.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-sm md:text-base text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables & Quick Inquire Action */}
                  <div className="lg:col-span-4 flex flex-col justify-between">
                    <div className="space-y-1.5 mb-6 text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                      {service.deliverables.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-amber-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <button
                        onClick={() => handleInquireService(service.title)}
                        className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-neutral-300 dark:text-neutral-300 light:text-neutral-800 hover:text-amber-400 dark:hover:text-amber-400 transition-colors cursor-pointer group/btn"
                      >
                        <span className="underline underline-offset-4 decoration-amber-400/50 group-hover/btn:decoration-amber-400">
                          Request Quote For {service.title}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-amber-400 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
