import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData.ts';
import ladyPLogoImg from '../assets/images/lady_p_studio_logo_1790370855063.jpg';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'work', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-neutral-950/80 dark:bg-[#08080A]/85 light:bg-white/85 backdrop-blur-md border-b border-neutral-800/60 dark:border-neutral-800/80 light:border-neutral-200/80 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Zone: Lady_P Studio Logo */}
        <a
          href="#home"
          aria-label="LADY_P STUDIO"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
        >
          {/* Logo Mark Emblem Thumbnail */}
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-lg overflow-hidden border border-amber-400/40 bg-neutral-950 shadow-sm shadow-amber-400/10 group-hover:border-amber-400 group-hover:shadow-amber-400/30 transition-all duration-300 shrink-0">
            <img
              src={ladyPLogoImg}
              alt="LADY_P STUDIO Emblem"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Typography: LADY_P & — STUDIO — */}
          <div className="flex flex-col text-left leading-none">
            <span className="font-display font-black text-base md:text-lg tracking-[0.16em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 group-hover:from-amber-200 group-hover:to-amber-400 transition-all duration-200">
              LADY_P
            </span>
            <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase text-amber-400/90 dark:text-amber-400/90 light:text-amber-600 mt-1 flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-[1px] bg-amber-400/70" />
              STUDIO
              <span className="inline-block w-2.5 h-[1px] bg-amber-400/70" />
            </span>
          </div>
        </a>

        {/* Navigation Links: 1-row, single-line text with golden hover */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className={`relative py-1 transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-amber-400 font-semibold'
                    : 'text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white light:text-neutral-600 light:hover:text-neutral-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full animate-in fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Zone: Theme Toggle & Let's Work Together */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Toggle Button with polished micro-animation */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="relative p-2.5 rounded-full text-neutral-300 dark:text-neutral-300 light:text-neutral-700 bg-neutral-900/80 dark:bg-neutral-900/90 light:bg-neutral-100 hover:text-amber-400 dark:hover:text-amber-400 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/50 cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-300 -rotate-12 hover:rotate-0" />
            )}
          </button>

          {/* Primary Action Button: Rounded-full yellow pill matching screenshot */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold rounded-full bg-[#f5c32c] hover:bg-[#eab308] text-neutral-950 transition-all duration-200 shadow-md shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-lg text-neutral-300 dark:text-neutral-300 light:text-neutral-800 hover:bg-neutral-800/40 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-neutral-950/95 dark:bg-[#08080A]/95 light:bg-white/95 backdrop-blur-xl border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className={`text-left text-base font-medium py-2 transition-colors ${
                  activeSection === link.id
                    ? 'text-amber-400 font-semibold pl-2 border-l-2 border-amber-400'
                    : 'text-neutral-300 dark:text-neutral-300 light:text-neutral-700'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-all shadow-sm"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
