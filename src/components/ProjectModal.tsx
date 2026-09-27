import React, { useEffect } from 'react';
import { Project } from '../types.ts';
import { X, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-900 dark:bg-neutral-900 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 hover:text-amber-400 border border-neutral-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header Container with Video Support */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              poster={project.image}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          ) : (
            <>
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
            </>
          )}

          {/* Golden accent bar on media */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />

          {/* Quick Media Tag Overlay */}
          <div className="absolute bottom-4 left-6 flex items-center gap-3 text-xs pointer-events-none">
            <span className="bg-amber-400 text-neutral-950 font-bold px-2.5 py-1 rounded">
              {project.category}
            </span>
            {project.duration && (
              <span className="bg-neutral-950/80 text-white px-2.5 py-1 rounded border border-neutral-700/80 font-mono">
                {project.duration}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Title & Metadata Header */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>{project.subCategory}</span>
              <span>·</span>
              <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500">{project.year}</span>
              {project.client && (
                <>
                  <span>·</span>
                  <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500">Client: {project.client}</span>
                </>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white dark:text-white light:text-neutral-900 font-display">
              {project.title}
            </h2>
          </div>

          {/* Project Description */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-400 light:text-neutral-500 font-semibold mb-2">
              Overview & Visual Direction
            </h3>
            <p className="text-base text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Prompt & Concept Architecture */}
          <div className="p-4 sm:p-5 rounded-xl bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-50 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Prompt & Diffusion Direction Concept</span>
            </div>
            <p className="text-sm font-mono text-neutral-300 dark:text-neutral-300 light:text-neutral-800 leading-relaxed italic">
              "{project.promptConcept}"
            </p>
          </div>

          {/* Tools & Pipeline */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-400 light:text-neutral-500 font-semibold mb-3">
              Production Stack & AI Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-neutral-800/80 dark:bg-neutral-800/80 light:bg-neutral-100 text-neutral-200 dark:text-neutral-200 light:text-neutral-800 border border-neutral-700/60 dark:border-neutral-700/60 light:border-neutral-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action CTA Footer */}
          <div className="pt-6 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm transition-all shadow-md hover:scale-[1.02] cursor-pointer"
            >
              <span>Inquire For Similar Production</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-xs text-neutral-400 hover:text-white dark:hover:text-white light:hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Close View (ESC)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
