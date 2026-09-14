import React from 'react';
import data from '../data.json';
import FadeInUp from './FadeInUp';

const Hero = () => {
  const { headline, subheadline, ctaText, ctaLink } = data.hero;

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden pointer-events-none">
      
      <FadeInUp>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pointer-events-auto bg-white/40 p-12 rounded-3xl backdrop-blur-sm shadow-2xl border border-white/50">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-navy leading-tight drop-shadow-sm">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-brand-slate max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
          {subheadline}
        </p>
        <div className="pt-8 pb-4">
          <a
            href={ctaLink}
            className="inline-block bg-brand-electric hover:bg-blue-700 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {ctaText}
          </a>
        </div>
      </div>
      </FadeInUp>
    </section>
  );
};

export default Hero;
