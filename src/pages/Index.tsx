import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GamesSection from '../components/GamesSection';
import ProductsShowcase from '../components/ProductsShowcase';
import WebAppsSection from '../components/WebAppsSection';
import DeveloperTools from '../components/DeveloperTools';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParallaxBackground from '../components/effects/ParallaxBackground';

const SectionDivider = ({ label }: { label: string }) => (
  <div className="py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-zinc-950"></div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-zinc-700"></div>
        <div className="px-3 py-1 bg-zinc-900 border border-zinc-800">
          <span className="text-zinc-600 font-mono text-[10px] font-bold tracking-[0.2em]">
            {label}
          </span>
        </div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-zinc-700"></div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 overflow-x-hidden relative">
      <ParallaxBackground />

      <div className="relative z-10">
        <Header />
        <main className="relative">
          <Hero />
          <Services />
          <SectionDivider label="GAME PORTFOLIO" />
          <GamesSection />
          <SectionDivider label="SOFTWARE PRODUCTS" />
          <ProductsShowcase />
          <SectionDivider label="WEB APPLICATIONS" />
          <WebAppsSection />
          <SectionDivider label="DEVELOPER TOOLS" />
          <DeveloperTools />
          <SectionDivider label="CONTACT" />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
