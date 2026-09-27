import React, { useEffect } from 'react';
import { GalleryItem } from '../types.ts';
import { X, ChevronLeft, ChevronRight, Sparkles, Camera, Sliders } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
        onNavigate(currentIndex + 1);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, currentIndex, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 backdrop-blur-xl animate-in fade-in duration-200 p-4 md:p-8"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close fullscreen lightbox"
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-amber-400 border border-neutral-700/80 transition-colors cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation Button */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          aria-label="Previous artwork"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-amber-400 border border-neutral-700/80 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Navigation Button */}
      {currentIndex < items.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          aria-label="Next artwork"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-amber-400 border border-neutral-700/80 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Lightbox Content Box */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* High Resolution Frame */}
        <div className="relative max-h-[72vh] rounded-xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-950">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto object-contain mx-auto"
          />
          {/* Subtle golden yellow bottom trim */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
        </div>

        {/* Exhibition Metadata Card */}
        <div className="mt-4 w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 md:p-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-semibold">
                {item.category}
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs font-mono text-neutral-400">
                FRAME {currentIndex + 1} OF {items.length}
              </span>
            </div>
            <span className="text-xs text-neutral-400 font-mono">{item.lensInfo}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm font-mono text-neutral-300 italic mb-2">
            "{item.promptConcept}"
          </p>

          <div className="flex items-center gap-2 text-[11px] text-neutral-400">
            <Sliders className="w-3 h-3 text-amber-400" />
            <span>Grading: {item.colorGrade}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
