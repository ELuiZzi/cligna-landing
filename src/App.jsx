import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import CollageBackground from './components/CollageBackground';
import data from './data.json';

function App() {
  return (
    <div className="font-inter antialiased text-brand-slate min-h-screen relative overflow-x-hidden">
      <CollageBackground />
      {/* Simple Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-end relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold font-montserrat tracking-tight text-brand-navy flex items-center pointer-events-auto">
            {data.logo && (
              <img src={data.logo} alt="Logo" className="h-14 w-auto mr-3" />
            )}
            {data.companyName}
          </div>
          <a
            href="#contacto"
            className="text-sm font-medium text-brand-electric hover:text-blue-700 transition-colors"
          >
            Contacto
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Experiences />
      </main>

      <Contact />
    </div>
  );
}

export default App;
