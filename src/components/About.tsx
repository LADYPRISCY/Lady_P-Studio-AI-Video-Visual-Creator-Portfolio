import React from 'react';
import { Video, Image as ImageIcon, Megaphone, Clapperboard, Lightbulb } from 'lucide-react';

interface WhatICreateItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WHAT_I_CREATE: WhatICreateItem[] = [
  {
    icon: <Video className="w-5 h-5 text-neutral-950" strokeWidth={2.2} />,
    title: 'AI Video Production',
    description: 'Cinematic AI-generated videos for brands, advertising, storytelling and social media.',
  },
  {
    icon: <ImageIcon className="w-5 h-5 text-neutral-950" strokeWidth={2.2} />,
    title: 'AI Image Creation',
    description: 'High-quality AI visuals for campaigns, concepts, products and creative marketing projects.',
  },
  {
    icon: <Megaphone className="w-5 h-5 text-neutral-950" strokeWidth={2.2} />,
    title: 'AI Advertising Content',
    description: 'Attention-grabbing visual content for promotional campaigns and digital marketing.',
  },
  {
    icon: <Clapperboard className="w-5 h-5 text-neutral-950" strokeWidth={2.2} />,
    title: 'Visual Storytelling',
    description: 'AI-powered storytelling that turns ideas and scripts into compelling visual experiences.',
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-neutral-950" strokeWidth={2.2} />,
    title: 'Creative AI Concepts',
    description: 'Experimental and concept-driven visuals for brands, creators and businesses.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* Left Column: Portrait Card with yellow pill badge */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-xl">
              <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <img
                  src="https://res.cloudinary.com/d6ir6dye/image/upload/v1790375754/Change_suit_color_and_background.jpg"
                  alt="Adeleke Priscilla - Lady_P Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Yellow bottom tag */}
              <div className="bg-[#f5c32c] text-neutral-950 py-2.5 px-4 text-center select-none">
                <div className="font-black text-sm sm:text-[15px] tracking-wide font-display leading-tight">
                  Adeleke Priscilla
                </div>
                <div className="text-[11px] font-bold tracking-widest uppercase opacity-90 font-mono mt-0.5">
                  Ai Video Creator
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column: Bio with full-height vertical gold accent line and Lady_P signature */}
          <div className="lg:col-span-4 xl:col-span-4 flex items-stretch">
            {/* Solid vibrant yellow-gold accent bar matching screenshot */}
            <div className="w-[3px] bg-[#f5c32c] rounded-full shrink-0 mr-5 sm:mr-6" />

            <div className="flex flex-col justify-between py-0.5">
              <div>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#cca022] block mb-2 font-mono">
                  ABOUT ME
                </span>
                <h2 className="text-[26px] sm:text-[32px] md:text-[34px] font-black text-neutral-900 leading-[1.12] tracking-tight font-display mb-4">
                  Turning Ideas Into<br />Visual Experiences.
                </h2>

                <p className="text-[13px] sm:text-[14px] text-[#4b5563] leading-[1.65] font-normal tracking-normal max-w-prose">
                  I create AI-powered videos and visuals designed to bring ideas, brands, products and stories to life. From cinematic scenes and advertising concepts to AI-generated images and visual storytelling. I combine creativity, direction and AI tools to create visuals that feel intentional and engaging.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: "WHAT I CREATE" Grid */}
          <div className="lg:col-span-4 xl:col-span-5 pt-1 lg:pt-0">
            <div className="mb-5">
              <h3 className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-neutral-900 font-mono">
                WHAT I CREATE
              </h3>
            </div>

            {/* Grid matching the responsive banner row layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-6 sm:gap-y-7 items-start">
              {WHAT_I_CREATE.map((item, index) => (
                <div key={index} className="flex flex-col">
                  {/* Yellow Circular Icon Badge with exact styling from reference */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f5c32c] flex items-center justify-center mb-2.5 shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-[13px] sm:text-[14px] font-bold text-neutral-950 tracking-tight mb-1 font-display leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] text-[#4b5563] leading-[1.55] font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
