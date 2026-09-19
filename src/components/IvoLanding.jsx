import React from 'react';

function IvoLanding() {
  return (
    <div className="font-inter antialiased text-brand-slate min-h-screen relative overflow-x-hidden bg-white">
      {/* Header IVO */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center text-xl font-bold font-montserrat tracking-tight text-brand-navy">
            {/* Asumiendo que ivo.png estará en public/ */}
            <img src="/ivo.png" alt="IVO Logo" className="h-12 w-auto mr-3 object-contain" onError={(e) => e.target.style.display = 'none'} />
            IVO Audiovisuales
          </div>
          <a
            href="#"
            className="text-sm font-medium text-slate-500 hover:text-brand-electric transition-colors flex items-center gap-1"
          >
            &larr; Volver a Cligna
          </a>
        </div>
      </header>

      {/* Main Content Placeholder */}
      <main className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-brand-navy mb-6">
          IVO Soluciones Audiovisuales
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl">
          Próximamente...
        </p>
      </main>
    </div>
  );
}

export default IvoLanding;
