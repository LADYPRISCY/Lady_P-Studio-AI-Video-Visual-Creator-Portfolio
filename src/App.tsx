/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { SelectedWork } from './components/SelectedWork.tsx';
import { FeaturedVideo } from './components/FeaturedVideo.tsx';
import { Services } from './components/Services.tsx';
import { Process } from './components/Process.tsx';
import { CallToAction } from './components/CallToAction.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

function AppContent() {
  const { theme } = useTheme();
  const [prefilledContactProject, setPrefilledContactProject] = useState<string>('');

  const handleInquireProject = (title: string) => {
    setPrefilledContactProject(title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLight = theme === 'light';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-amber-400 selection:text-neutral-950 ${
        isLight ? 'bg-[#FAF9F6] text-neutral-900' : 'bg-[#08080A] text-white'
      }`}
    >
      {/* Sticky Minimal Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Selected Work Portfolio Showcase */}
        <SelectedWork onSelectProjectForContact={handleInquireProject} />

        {/* Intro / About Section */}
        <About />

        {/* Creative Process Section - How I Work */}
        <Process />

        {/* Featured AI Video Section */}
        <FeaturedVideo />

        {/* Services Section */}
        <Services onSelectService={handleInquireProject} />

        {/* Call To Action */}
        <CallToAction />

        {/* Contact Section */}
        <Contact prefilledProject={prefilledContactProject} />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
