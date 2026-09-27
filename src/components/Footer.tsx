import React from 'react';
import ladyPLogoImg from '../assets/images/lady_p_studio_logo_1790370855063.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white relative border-t border-neutral-900 overflow-hidden font-sans">
      {/* Bottom Sub-footer Bar */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded overflow-hidden bg-neutral-900 border border-[#f5c32c]/50 shrink-0">
            <img
              src={ladyPLogoImg}
              alt="LADY_P Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display font-extrabold text-sm tracking-wider uppercase text-[#f5c32c]">
            LADY_P
          </span>
          <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-mono -ml-1">
            — STUDIO
          </span>
        </div>

        {/* Disciplines & Copyright */}
        <div className="flex flex-wrap items-center gap-4 text-[11px] text-neutral-400">
          <span className="hidden sm:inline">AI Video • AI Visuals • Creative Direction</span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span>© 2026 Lady_P Studio. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};
