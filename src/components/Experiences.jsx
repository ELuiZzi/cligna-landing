import React from 'react';
import data from '../data.json';

const Experiences = () => {
  const { title, subtitle, reels } = data.experiences;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-brand-electric font-bold">{title}</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-brand-navy max-w-2xl mx-auto leading-snug">
            {subtitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {reels.map((reel) => (
            <div key={reel.id} className="w-full flex flex-col items-center group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-black/5 w-[267px] h-[476px] transition-transform duration-500 group-hover:scale-105">
                <iframe 
                  src={reel.iframeSrc}
                  width="267" 
                  height="476" 
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={reel.title}
                  className="absolute top-0 left-0"
                />
              </div>
              <p className="mt-6 font-medium text-brand-navy text-center">{reel.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
