import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../data/portfolioData.ts';
import { CategoryType, Project } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';
import { ArrowUpRight, Play, Eye } from 'lucide-react';

const CATEGORIES: CategoryType[] = [
  'All',
  'AI Video',
  'AI Images',
  'Advertising',
  'Cinematic',
  'Product Visuals',
  'Storytelling',
];

interface CardVideoPlayerProps {
  src: string;
  poster: string;
  title: string;
}

const CardVideoPlayer: React.FC<CardVideoPlayerProps> = ({ src, poster, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure audio tracks are strictly disabled so browser security always permits autoplay
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay paused by browser policy until interaction
        });
      }
    };

    playVideo();

    // Use IntersectionObserver to play whenever card scrolls into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      key={src}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
    />
  );
};

interface SelectedWorkProps {
  onSelectProjectForContact?: (projectTitle: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProjectForContact }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleInquireFromModal = (projectTitle: string) => {
    if (onSelectProjectForContact) {
      onSelectProjectForContact(projectTitle);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-0.5 bg-amber-400" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400">
              FEATURED WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white dark:text-white light:text-neutral-900 tracking-tight font-display mb-3">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-xl">
            A collection of AI-powered visuals, videos and creative experiments.
          </p>
        </div>

        {/* Filter Buttons: Segmented controls with active state */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-neutral-950 shadow-sm'
                    : 'bg-neutral-900/60 dark:bg-neutral-900/80 light:bg-neutral-100 text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-white dark:hover:text-white light:hover:text-neutral-900 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Elegant Masonry / Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout logic: Alternate wide featured showcase cards (7 cols) with companion cards (5 cols)
            const isWide = index % 3 === 0;
            const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group relative rounded-2xl overflow-hidden bg-neutral-900 dark:bg-neutral-900 light:bg-white border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/5 cursor-pointer flex flex-col justify-between`}
              >
                {/* Visual Thumbnail Area with Video Support */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                  {project.videoUrl ? (
                    <CardVideoPlayer
                      src={project.videoUrl}
                      poster={project.image}
                      title={project.title}
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}

                  {/* Dark gradient overlay for typography readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Golden Yellow Accent line on top of image */}
                  <div className="absolute top-0 left-0 w-0 h-1 bg-amber-400 group-hover:w-full transition-all duration-500 ease-out" />

                  {/* Category Pill Alternative: Unboxed subtle text in upper corner */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono font-medium text-amber-400 bg-neutral-950/70 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800">
                    <span>{project.category}</span>
                    <span>·</span>
                    <span className="text-neutral-400">{project.year}</span>
                  </div>

                  {/* View Project button that appears smoothly on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 text-neutral-950 font-bold text-xs md:text-sm tracking-wide shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 md:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mb-2">
                      <span className="font-semibold text-amber-400 uppercase tracking-wider">
                        {project.subCategory}
                      </span>
                      {project.duration && <span className="font-mono">{project.duration}</span>}
                    </div>

                    {/* Title with hover highlight in golden yellow */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-neutral-900 group-hover:text-amber-400 transition-colors duration-200 mb-2 font-display">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Bottom Tool Tag Strip */}
                  <div className="mt-5 pt-4 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500 truncate max-w-[200px]">
                      {project.tools[0]} · {project.tools[1]}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-neutral-300 dark:text-neutral-300 light:text-neutral-800 group-hover:text-amber-400 transition-colors">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-neutral-400">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireFromModal}
      />
    </section>
  );
};
