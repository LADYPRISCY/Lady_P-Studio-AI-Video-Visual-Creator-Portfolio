import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX, Sparkles, Layers, Sliders } from 'lucide-react';
import heroReelImg from '../assets/images/hero_cinematic_ai_reel_1790369933783.jpg';

const FEATURED_VIDEO_SRC =
  'https://res.cloudinary.com/d6ir6dye/video/upload/v1790531547/Astronut_video_1.mp4';

export const FeaturedVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [ambientGlow, setAmbientGlow] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(curr);
    setProgress((curr / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetTime = clickPos * (videoRef.current.duration || 0);
    videoRef.current.currentTime = targetTime;
    setProgress(clickPos * 100);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs <= 0) return '00:00';
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <section id="featured-video" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Dynamic Ambient Theater Light Glow */}
      {ambientGlow && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative">
        {/* Above Player Section Label */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400">
              FEATURED AI VIDEO
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white dark:text-white light:text-neutral-900 font-display">
            Chronicles of Solitude: Astronaut
          </h2>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mt-2">
            SPEC SHORT FILM · 4K CINEMA GRADE · GENERATIVE MOTION REEL
          </p>
        </div>

        {/* Large Cinema Player Container */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-800/90 dark:border-neutral-800/90 light:border-neutral-200 bg-neutral-950 shadow-2xl group">
          {/* Subtle Golden Yellow top border highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 z-20" />

          {/* Screen Content */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
            <video
              ref={videoRef}
              src={FEATURED_VIDEO_SRC}
              poster={heroReelImg}
              playsInline
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={togglePlay}
              className={`w-full h-full object-cover cursor-pointer transition-transform duration-1000 ease-out ${
                isPlaying ? 'scale-102' : 'scale-100'
              }`}
            />

            {/* Gradient Overlays for UI contrast (fades when playing to enjoy full visual) */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40 pointer-events-none transition-opacity duration-300 ${
                isPlaying ? 'opacity-40 group-hover:opacity-80' : 'opacity-75'
              }`}
            />

            {/* Top Bar inside player */}
            <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 flex items-center justify-between text-xs z-10 pointer-events-auto">
              <div className="flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-neutral-800 text-neutral-300">
                <span className={`w-2 h-2 rounded-full bg-amber-400 ${isPlaying ? 'animate-ping' : 'animate-pulse'}`} />
                <span className="font-semibold text-white tracking-wide">
                  {isPlaying ? 'PLAYING PREVIEW' : 'DIRECTOR’S CUT'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAmbientGlow((g) => !g)}
                  className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md backdrop-blur-md border text-xs transition-colors cursor-pointer ${
                    ambientGlow
                      ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                      : 'bg-neutral-950/80 text-neutral-400 border-neutral-800'
                  }`}
                  title="Toggle Ambient Theater Backlight"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ambient Glow</span>
                </button>
              </div>
            </div>

            {/* Center Big Play Button (shows when paused or hover) */}
            <div
              className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${
                isPlaying ? 'opacity-0 group-hover:opacity-90' : 'opacity-100'
              }`}
            >
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause film' : 'Play film'}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 flex items-center justify-center shadow-xl shadow-amber-400/25 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                ) : (
                  <Play className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-1" />
                )}
              </button>
            </div>

            {/* Bottom Scrubber & Timecode Controls */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-10">
              <div className="bg-neutral-950/85 backdrop-blur-md p-4 rounded-xl border border-neutral-800/80 flex flex-col gap-3">
                {/* Timeline bar with golden active scrub */}
                <div
                  className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden cursor-pointer"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-amber-400 transition-all duration-150 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow" />
                  </div>
                </div>

                {/* Timeline Controls */}
                <div className="flex items-center justify-between text-xs text-neutral-300">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>
                    <span className="font-mono text-neutral-400">
                      {formatTime(currentTime)} / {formatTime(duration || 15)}
                    </span>
                    <span className="text-neutral-600 hidden sm:inline">|</span>
                    <span className="text-white font-medium hidden sm:inline">2.39:1 Anamorphic DCI</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleMute}
                      className="p-1 text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                    </button>

                    <button
                      onClick={() => {
                        const elem = document.getElementById('featured-video');
                        if (!document.fullscreenElement && elem) {
                          elem.requestFullscreen?.().catch(() => {});
                          setIsFullscreen(true);
                        } else {
                          document.exitFullscreen?.().catch(() => {});
                          setIsFullscreen(false);
                        }
                      }}
                      className="p-1 text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer"
                      title="Fullscreen view"
                    >
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below Player Section: Storytelling subtitle & Technical Breakdown */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <h3 className="text-2xl font-bold text-white dark:text-white light:text-neutral-900 font-display mb-2">
              Visual storytelling, created with AI.
            </h3>
            <p className="text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
              Combining algorithmic camera motion, consistent character and landscape seeds, and
              traditional cinema post-production. Rather than disjointed video clips, every shot is
              paced with emotional intention and rhythm.
            </p>
          </div>

          <div className="md:col-span-6 space-y-3">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Tools & Production Pipeline</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 dark:bg-neutral-900/80 light:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500">Generative Motion:</span>
                <span className="font-semibold text-white dark:text-white light:text-neutral-900">Runway Gen-3 Alpha + Luma</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500">Keyframe Composition:</span>
                <span className="font-semibold text-white dark:text-white light:text-neutral-900">Midjourney v6.1 + ComfyUI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500">Resolution & Interpolation:</span>
                <span className="font-semibold text-white dark:text-white light:text-neutral-900">Topaz Video AI 4K (Dione Robust)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500">Grading & Master Mix:</span>
                <span className="font-semibold text-amber-400">DaVinci Resolve Studio (ACES Color)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
