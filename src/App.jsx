import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import CollageBackground from './components/CollageBackground';
import IvoLanding from './components/IvoLanding';
import data from './data.json';

function App() {
  const [activeView, setActiveView] = useState('cligna');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      // Extract the base hash before any query params or deeper paths if any
      if (hash.startsWith('#ivo')) {
        setActiveView('ivo');
      } else {
        setActiveView('cligna');
      }
    };

    // Initialize state based on current hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (activeView === 'ivo') {
    return <IvoLanding />;
  }

  return (
    <div className="font-inter antialiased text-brand-slate min-h-screen relative overflow-x-hidden">
      <CollageBackground />
      {/* Simple Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo a la izquierda */}
          <div className="text-xl md:text-2xl font-bold font-montserrat tracking-tight text-brand-navy flex items-center">
            {data.logo && (
              <img src={data.logo} alt="Logo" className="h-10 md:h-14 w-auto mr-3" />
            )}
            <span className="hidden md:inline">{data.companyName}</span>
          </div>

          {/* Switcher / Selector Central */}
          <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-full border border-slate-200">
            <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-white text-brand-navy shadow-sm">
              Cligna
            </span>
            <a 
              href="#ivo" 
              className="px-4 py-1.5 text-sm font-medium rounded-full text-slate-500 hover:text-brand-electric transition-colors"
            >
              IVO Audiovisuales
            </a>
          </div>

          {/* Acciones derecha */}
          <div className="flex items-center gap-4">
             {/* Switcher simplificado para móviles */}
             <a 
              href="#ivo" 
              className="sm:hidden text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
            >
              Ver IVO &rarr;
            </a>

            <a
              href="#contacto"
              className="text-sm font-medium bg-brand-electric text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              Contacto
            </a>
          </div>

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
