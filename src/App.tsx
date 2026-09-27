/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { SelectedWork } from './components/SelectedWork.tsx';
import { FeaturedVideo } from './components/FeaturedVideo.tsx';
import { Services } from './components/Services.tsx';
import { Process } from './components/Process.tsx';
import { GalleryTestimonialSplit } from './components/GalleryTestimonialSplit.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { CallToAction } from './components/CallToAction.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [prefilledContactProject, setPrefilledContactProject] = useState<string>('');

  const handleInquireProject = (title: string) => {
    setPrefilledContactProject(title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#08080A] dark:bg-[#08080A] light:bg-[#FAF9F6] text-white dark:text-white light:text-neutral-900 transition-colors duration-300 font-sans selection:bg-amber-400 selection:text-neutral-950">
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

          {/* AI Image Gallery & Client Words Split Showcase */}
          <GalleryTestimonialSplit />

          {/* Featured AI Video Section */}
          <FeaturedVideo />

          {/* Services Section */}
          <Services onSelectService={handleInquireProject} />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Call To Action */}
          <CallToAction />

          {/* Contact Section */}
          <Contact prefilledProject={prefilledContactProject} />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
