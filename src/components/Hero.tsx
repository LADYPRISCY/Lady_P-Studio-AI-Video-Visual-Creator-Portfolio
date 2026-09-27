import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import heroWomanCityscape from '../assets/images/hero_lady_cityscape_1790449175944.jpg';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-play video on mount (muted is required for browsers to allow autoplay)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log('Autoplay deferred or waiting for user interaction:', err);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true));
          }
        });
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleVideoEnded = () => {
    // If looped or ended, keep playing or reset
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 lg:pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-neutral-950 dark:bg-neutral-950 light:bg-white text-white dark:text-white light:text-neutral-900 selection:bg-[#f5c32c] selection:text-neutral-950 transition-colors duration-300"
    >
      {/* Cinematic Golden Ambient Atmosphere Glow */}
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-amber-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-400/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Headlines & CTA Buttons */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left z-10">
            {/* Eyebrow Label */}
            <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] uppercase text-[#f5c32c] block mb-3 font-mono">
              AI VIDEO CREATOR
            </span>

            {/* Massive Bold Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white dark:text-white light:text-neutral-900 leading-[1.06] sm:leading-[1.04] uppercase font-display mb-4 sm:mb-5">
              I CREATE <br />
              VISUALS THAT <br />
              <span className="text-[#f5c32c]">TELL STORIES.</span>
            </h1>

            {/* Subtext description */}
            <p className="text-sm sm:text-base text-neutral-300 dark:text-neutral-300 light:text-neutral-600 max-w-lg leading-relaxed font-normal mb-6 sm:mb-8">
              Cinematic AI videos, visual storytelling and digital experiences built to capture attention and bring ideas to life.
            </p>

            {/* Buttons: View My Work (Solid Yellow Pill) + Let's Work Together (Transparent Pill with border) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
              <button
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#f5c32c] hover:bg-[#eab308] text-neutral-950 text-xs sm:text-sm font-bold transition-all duration-200 shadow-lg shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group text-center"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-transparent hover:bg-neutral-900/60 dark:hover:bg-neutral-900/60 light:hover:bg-neutral-100 border border-neutral-700 dark:border-neutral-700 light:border-neutral-300 hover:border-neutral-500 dark:hover:border-neutral-500 light:hover:border-neutral-400 text-neutral-200 dark:text-neutral-200 light:text-neutral-800 hover:text-white dark:hover:text-white light:hover:text-neutral-950 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group text-center"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 dark:text-neutral-400 light:text-neutral-600 group-hover:text-white dark:group-hover:text-white light:group-hover:text-neutral-950 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Video Frame with Autoplaying Video */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center lg:justify-end">
            
            {/* Golden aura background glow around the card */}
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-amber-500/25 via-amber-400/35 to-amber-600/20 rounded-[28px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Interactive Cinema Frame: Autoplay video in place */}
            <div
              onClick={handlePlayToggle}
              className="relative w-full max-w-[620px] aspect-[16/10] rounded-[22px] overflow-hidden border border-neutral-700/60 shadow-2xl bg-neutral-950 group cursor-pointer"
            >
              {/* 1. Underlying Video Element (Autoplays seamlessly, muted by default for browser compliance) */}
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/d6ir6dye/video/upload/v1790453571/NOVA_AI.mp4"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="auto"
                onEnded={handleVideoEnded}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* 2. Cover Image (Fades out when video is active) */}
              <img
                src={heroWomanCityscape}
                alt="AI Video Creator — Lady_P Studio"
                referrerPolicy="no-referrer"
                className={`absolute inset-0 w-full h-full object-cover object-center z-10 transition-opacity duration-700 ease-out ${
                  isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:scale-[1.02]'
                }`}
              />

              {/* 3. Subtle Dark Vignette on Image */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10 transition-opacity duration-500 ${
                  isPlaying ? 'opacity-0' : 'opacity-100'
                }`}
              />

              {/* 4. Center Play Button Trigger (Shown when video is paused by user) */}
              {!isPlaying && (
                <button
                  type="button"
                  aria-label="Play Video"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/50 backdrop-blur-sm border-2 border-amber-400/90 flex items-center justify-center text-[#f5c32c] hover:scale-110 hover:bg-black/70 hover:border-amber-300 shadow-2xl shadow-amber-500/40 transition-all duration-300 z-20 cursor-pointer"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-[#f5c32c] text-[#f5c32c] translate-x-0.5" />
                </button>
              )}

              {/* 5. Audio / Controls floating badge */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 transition-all duration-200"
              >
                <button
                  onClick={handleToggleMute}
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-[#f5c32c] text-xs font-mono transition-colors"
                  title={isMuted ? 'Click to Unmute Sound' : 'Mute Sound'}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-[#f5c32c]" />
                      <span className="text-[10px] uppercase font-bold text-[#f5c32c]">Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-[10px] uppercase font-bold text-neutral-200">Sound On</span>
                    </>
                  )}
                </button>
              </div>

              {/* 6. Active Video Controls Bar (Visible on hover when playing) */}
              {isPlaying && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePlayToggle}
                      className="p-1 text-white hover:text-[#f5c32c] transition-colors"
                      title="Pause"
                    >
                      <Pause className="w-4 h-4 fill-current" />
                    </button>
                    <button
                      onClick={handleToggleMute}
                      className="p-1 text-white hover:text-[#f5c32c] transition-colors"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-[11px] font-mono text-neutral-300 font-semibold tracking-wider">
                      NOVA AI · COMMERCIAL
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                        videoRef.current.play();
                      }
                    }}
                    className="p-1 text-neutral-400 hover:text-white transition-colors"
                    title="Replay from start"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* 7. Script Signature Overlay: "Ideas into Visuals" (Fades when video is active) */}
              <div
                className={`absolute bottom-6 right-6 sm:bottom-8 sm:right-8 pointer-events-none select-none text-right z-20 transition-opacity duration-500 ${
                  isPlaying ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <span
                  className="block text-2xl sm:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-tight -rotate-3"
                  style={{ fontFamily: "'Caveat', cursive, sans-serif", fontWeight: 700 }}
                >
                  Ideas <br />
                  into <br />
                  <span className="text-[#f5c32c] inline-block border-b-2 border-[#f5c32c] pb-0.5">
                    Visuals
                  </span>
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Down Mouse Indicator */}
        <div className="pt-12 sm:pt-14 pb-2 flex items-center justify-center">
          <button
            onClick={scrollToWork}
            className="inline-flex items-center gap-2.5 text-xs text-neutral-400 hover:text-[#f5c32c] transition-colors cursor-pointer group"
          >
            <div className="w-5 h-8 rounded-full border border-amber-400/80 flex items-start justify-center p-1 group-hover:border-[#f5c32c] transition-colors">
              <span className="w-1 h-2 rounded-full bg-[#f5c32c] animate-bounce" />
            </div>
            <span className="font-mono text-[11px] tracking-wider text-neutral-300 group-hover:text-white uppercase">
              Scroll Down
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
