import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface ShowcaseImage {
  src: string;
  alt: string;
}

const SHOWCASE_IMAGES: ShowcaseImage[] = [
  {
    // Woman in yellow headwrap / turban
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85',
    alt: 'High fashion portrait with vibrant yellow turban headwrap',
  },
  {
    // Modern architectural luxury villa with swimming pool
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=85',
    alt: 'Modern architectural luxury villa with swimming pool',
  },
  {
    // Majestic golden lion portrait
    src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=85',
    alt: 'Cinematic lion portrait bathed in golden sunlight',
  },
  {
    // Yellow sports car with city skyline sunset backdrop
    src: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=85',
    alt: 'Vibrant yellow supercar with city skyline sunset backdrop',
  },
];

interface ClientTestimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    quote:
      'Working with Lady_P Studio was an amazing experience. The visuals were beyond what we imagined — creative, professional and delivered on time.',
    author: 'Sarah Johnson',
    role: 'CEO, Neva Brands',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
  },
  {
    quote:
      'The speed and cinematic quality of the AI generated commercial video blew our entire executive board away. Simply unmatched artistic direction.',
    author: 'David Sterling',
    role: 'Head of Marketing, Lumina Agency',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
  },
  {
    quote:
      'Every visual asset delivered had intention, depth, and striking beauty. Lady_P is a true pioneer in next-generation visual storytelling.',
    author: 'Elena Rostova',
    role: 'Creative Director, Veloce Studio',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
  },
];

export const GalleryTestimonialSplit: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? CLIENT_TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === CLIENT_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const current = CLIENT_TESTIMONIALS[activeTestimonial];

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-[#f8f8f9] text-neutral-900 border-b border-neutral-200/90 relative">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-0">
          
          {/* Left Column: AI IMAGE GALLERY Header & Button with right vertical border */}
          <div className="shrink-0 lg:w-[260px] xl:w-[280px] flex flex-col justify-between py-1 lg:pr-8 lg:border-r lg:border-neutral-300/80">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-neutral-800 block mb-2 font-mono">
                AI IMAGE GALLERY
              </span>
              <h2 className="text-[28px] sm:text-[32px] md:text-[34px] font-black text-neutral-950 tracking-tight font-display leading-[1.12]">
                Visuals That<br />Inspire
              </h2>
            </div>

            <div className="pt-6 lg:pt-0">
              <button
                onClick={scrollToGallery}
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-neutral-950 hover:text-amber-500 transition-colors group cursor-pointer"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Middle Column: 4 Clean Edge-to-Edge Rounded Thumbnails matching screenshot */}
          <div className="flex-1 lg:px-7 flex items-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 w-full">
              {SHOWCASE_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/5] rounded-[14px] overflow-hidden bg-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={scrollToGallery}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: WORDS FROM CLIENTS Testimonial with left vertical border */}
          <div className="shrink-0 lg:w-[380px] xl:w-[420px] flex flex-col justify-between py-1 lg:pl-8 lg:border-l lg:border-neutral-300/80">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-[#b8860b] block mb-2.5 font-mono">
                WORDS FROM CLIENTS
              </span>

              {/* Seamless soft card container with rounded-2xl */}
              <div className="bg-neutral-100/90 rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between min-h-[168px] border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                {/* Quote with opening amber mark */}
                <p className="text-[12px] sm:text-[12.5px] text-neutral-700 leading-[1.6] font-normal mb-4">
                  <span className="text-[#f5c32c] text-sm leading-none mr-0.5 font-serif font-black">“</span>
                  {current.quote}
                </p>

                {/* Footer: Author details, subtle dots, and minimalist arrows */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full object-cover ring-1 ring-neutral-300"
                    />
                    <div>
                      <h4 className="text-[11.5px] font-bold text-neutral-950 leading-tight">
                        {current.author}
                      </h4>
                      <p className="text-[9.5px] text-neutral-500 font-mono mt-0.5">
                        {current.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Tiny pagination dots */}
                    <div className="flex items-center gap-1">
                      {CLIENT_TESTIMONIALS.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveTestimonial(i)}
                          className={`h-1 rounded-full transition-all ${
                            i === activeTestimonial ? 'bg-[#b8860b] w-3' : 'bg-neutral-300 w-1'
                          }`}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>

                    {/* Navigation Arrows: Left black, Right golden amber */}
                    <div className="flex items-center gap-1.5 ml-1">
                      <button
                        onClick={prevTestimonial}
                        className="text-neutral-900 hover:text-neutral-600 transition-colors p-1"
                        aria-label="Previous testimonial"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="text-[#eab308] hover:text-[#ca8a04] transition-colors p-1"
                        aria-label="Next testimonial"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
