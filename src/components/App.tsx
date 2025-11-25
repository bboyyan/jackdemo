import React from 'react';
import Navigation from './ui/Navigation';
import HeroSection from './sections/HeroSection';
import ValueProposition from './sections/ValueProposition';
import ServicesSection from './sections/ServicesSection';
import CurationSection from './sections/CurationSection';
import ContactSection from './sections/ContactSection';

const App = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900 font-sans selection:bg-amber-200 selection:text-amber-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <CurationSection />
      <ContactSection />
    </div>
  );
};

export default App;
