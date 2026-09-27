import React, { useState } from 'react';
import { CREATOR_PROFILE } from '../data/portfolioData.ts';
import { Send, CheckCircle2, Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

interface ContactProps {
  prefilledProject?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledProject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: prefilledProject || 'AI Video Production',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync if prefilledProject changes
  React.useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledProject,
        details: prev.details || `I am interested in commissioning: ${prefilledProject}`,
      }));
    }
  }, [prefilledProject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate real brief dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CREATOR_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const projectTypes = [
    'AI Video Production',
    'AI Image Creation',
    'AI Advertising Content',
    'Visual Storytelling',
    'Creative AI Concepts',
    'Commercial Spec / Other',
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Contact Intro & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-0.5 bg-amber-400" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white dark:text-white light:text-neutral-900 tracking-tight font-display mb-4 sm:mb-6">
                LET'S CREATE SOMETHING.
              </h2>
              <p className="text-base text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed mb-8">
                Whether you have an established commercial brief or an embryonic concept waiting for
                cinematic AI direction, send a transmission. Direct responses within 24 hours.
              </p>

              {/* Direct Email & WhatsApp Cards */}
              <div className="grid grid-cols-1 gap-3.5 mb-8">
                {/* Direct Email Card */}
                <div className="p-4 sm:p-5 rounded-xl bg-neutral-900/60 dark:bg-neutral-900/80 light:bg-neutral-50 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-400 light:text-neutral-500 font-mono block mb-1">
                    DIRECT TRANSMISSION (EMAIL)
                  </span>
                  <div className="flex items-center justify-between gap-3">
                    <a
                      href={`mailto:${CREATOR_PROFILE.email}`}
                      className="text-sm sm:text-base font-bold text-white dark:text-white light:text-neutral-900 hover:text-amber-400 transition-colors truncate"
                    >
                      {CREATOR_PROFILE.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-neutral-800 dark:bg-neutral-800 light:bg-white text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-amber-400 transition-colors cursor-pointer shrink-0"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Direct WhatsApp Card */}
                <a
                  href={CREATOR_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 sm:p-5 rounded-xl bg-neutral-900/60 dark:bg-neutral-900/80 light:bg-neutral-50 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 flex items-center justify-between gap-3 shadow-sm hover:shadow-emerald-500/10 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center shrink-0 text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366]/25 transition-all">
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] text-emerald-400 font-mono block">
                        INSTANT CHAT (WHATSAPP)
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white dark:text-white light:text-neutral-900 group-hover:text-emerald-400 transition-colors">
                        07068539317
                      </span>
                      <span className="text-[11px] text-neutral-400 block truncate">
                        Adeleke Priscilla • Chat directly on WhatsApp
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400 shrink-0 group-hover:translate-x-0.5 transition-transform">
                    <span>Chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links With Recognizable Minimal Icons */}
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-400 light:text-neutral-500 font-semibold block mb-4">
                CREATIVE NETWORKS & PORTALS
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: 'WhatsApp (07068539317)',
                    href: CREATOR_PROFILE.whatsappUrl,
                    highlight: 'whatsapp',
                  },
                  {
                    name: 'TikTok (@adelekepriscilla8)',
                    href: 'https://www.tiktok.com/@adelekepriscilla8?_r=1&_t=ZS-9A5a3kWJAdl',
                    highlight: 'gold',
                  },
                  { name: 'adelekepriscilla2019@gmail.com', href: 'mailto:adelekepriscilla2019@gmail.com' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2.5 rounded-lg text-xs font-semibold border transition-all inline-flex items-center gap-2 ${
                      social.highlight === 'whatsapp'
                        ? 'bg-[#25D366]/15 text-[#25D366] border-[#25D366]/40 hover:bg-[#25D366]/25'
                        : social.highlight === 'gold'
                        ? 'bg-[#f5c32c]/15 text-[#f5c32c] border-[#f5c32c]/40 hover:bg-[#f5c32c]/25'
                        : 'bg-neutral-900/80 dark:bg-neutral-900/80 light:bg-neutral-100 text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-amber-400 dark:hover:text-amber-400 border-neutral-800 dark:border-neutral-800 light:border-neutral-300'
                    }`}
                  >
                    {social.highlight === 'whatsapp' && (
                      <svg
                        className="w-3.5 h-3.5 fill-current shrink-0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    )}
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-current" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-neutral-900/80 dark:bg-neutral-900/90 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 shadow-xl">
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-neutral-900 font-display mb-2">
                    Transmission Received
                  </h3>
                  <p className="text-neutral-300 dark:text-neutral-300 light:text-neutral-600 max-w-md mx-auto text-sm leading-relaxed mb-8">
                    Thank you, {formData.name}. Your concept inquiry has been logged. Priscilla will review your project parameters and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'AI Video Production',
                        details: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 font-semibold mb-2">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova or Apex Studios"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-50 text-white dark:text-white light:text-neutral-900 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-sm"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-50 text-white dark:text-white light:text-neutral-900 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-sm"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 font-semibold mb-2">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`p-2.5 rounded-lg text-xs font-medium transition-all text-left truncate cursor-pointer ${
                              isSelected
                                ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                                : 'bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-100 text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-white dark:hover:text-white light:hover:text-neutral-900 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 font-semibold mb-2">
                      Project Details & Vision
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Describe your desired mood, narrative, intended platforms, timeline, or reference aesthetics..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-50 text-white dark:text-white light:text-neutral-900 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm transition-all duration-200 shadow-md hover:shadow-amber-400/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Brief...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Transmission</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
