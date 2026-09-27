import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/portfolioData.ts';
import { GalleryItem } from '../types.ts';
import { LightboxModal } from './LightboxModal.tsx';
import { Maximize2, Sparkles, SlidersHorizontal } from 'lucide-react';

export const ImageGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleNavigate = (index: number) => {
    if (index >= 0 && index < GALLERY_ITEMS.length) {
      setSelectedItem(GALLERY_ITEMS[index]);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-0.5 bg-amber-400" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400">
                EXHIBITION CURATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white dark:text-white light:text-neutral-900 tracking-tight font-display">
              AI Image Gallery
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-md">
            Editorial visual compositions engineered through custom prompt syntax, micro-surface lighting, and high-coherence diffusion. Click any frame for exhibition lightbox.
          </p>
        </div>

        {/* Exhibition Gallery Grid with varied aspect ratios */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          {GALLERY_ITEMS.map((item, idx) => {
            // Curate balanced 12-col layout:
            // 0: wide 16:9 banner (col-span-7)
            // 1: vertical 3:4 warrior maiden (col-span-5)
            // 2: 3:4 automotive obsidian (col-span-6)
            // 3: 9:16 architectural monolith (col-span-6)
            let colSpan = 'md:col-span-6';
            if (idx === 0) colSpan = 'md:col-span-7';
            if (idx === 1) colSpan = 'md:col-span-5';
            if (idx === 2) colSpan = 'md:col-span-6';
            if (idx === 3) colSpan = 'md:col-span-6';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`${colSpan} group relative rounded-2xl overflow-hidden bg-neutral-900 dark:bg-neutral-900 light:bg-white border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 cursor-pointer shadow-lg hover:shadow-amber-400/5 transition-all duration-300`}
              >
                {/* Visual Image */}
                <div className="relative w-full h-[260px] sm:h-[340px] md:h-[400px] overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Golden Yellow Accent Line: Appears on hover at bottom */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-400 group-hover:w-full transition-all duration-500 ease-out z-20" />

                  {/* Top-Right Lightbox Indicator */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="p-2 rounded-lg bg-neutral-950/80 text-amber-400 border border-neutral-700/80 backdrop-blur-md flex items-center justify-center">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Information overlay that reveals on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white font-display leading-tight mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {item.lensInfo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedItem(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
};
