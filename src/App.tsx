/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FavoritesSection from './components/FavoritesSection';
import DayFlowSection from './components/DayFlowSection';
import CharacterSection from './components/CharacterSection';
import FamilySection from './components/FamilySection';
import ChildhoodSection from './components/ChildhoodSection';
import AudioMemoriesSection from './components/AudioMemoriesSection';
import PhotoGallerySection from './components/PhotoGallerySection';
import LoveNotesSection from './components/LoveNotesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 font-sans overflow-x-hidden relative selection:bg-sky-200 selection:text-sky-900">
      {/* Background Cloud Layers */}
      <div className="absolute top-10 left-[-100px] w-96 h-48 bg-white opacity-40 blur-3xl rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-50px] w-80 h-40 bg-white opacity-60 blur-3xl rounded-full pointer-events-none z-0"></div>
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 1024 768" preserveAspectRatio="none">
          <path d="M100,100 Q250,50 400,100 T700,100" stroke="#0284C7" fill="none" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M200,600 Q400,550 600,600 T900,600" stroke="#0284C7" fill="none" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
        </svg>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <FavoritesSection />
        <DayFlowSection />
        <CharacterSection />
        <FamilySection />
        <ChildhoodSection />
        <AudioMemoriesSection />
        <PhotoGallerySection />
        <LoveNotesSection />
        <Footer />
      </div>
    </div>
  );
}
