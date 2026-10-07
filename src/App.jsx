import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PathwaysSection from './components/PathwaysSection';
import MethodologySection from './components/MethodologySection';
import TimelineSection from './components/TimelineSection';
import EvaluationAndPartnersSection from './components/EvaluationAndPartnersSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-100/50 text-slate-800 antialiased selection:bg-[#0265dc] selection:text-white">
      {/* Global School Campus Watermark (Entire Page Background) */}
      <div
        className="school-page-watermark"
        aria-hidden="true"
      />

      {/* Main Page Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <AboutSection />
          <PathwaysSection />
          <MethodologySection />
          <TimelineSection />
          <EvaluationAndPartnersSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
