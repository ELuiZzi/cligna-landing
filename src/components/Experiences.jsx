import React from 'react';
import data from '../data.json';
import FadeInUp from './FadeInUp';

const Experiences = () => {
  const { title, subtitle, reels } = data.experiences;

  return (
    <section className="py-24 px-6 bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="text-center mb-16 space-y-4 pointer-events-auto bg-white/40 p-8 rounded-3xl backdrop-blur-sm shadow-xl inline-block">
            <h2 className="text-sm uppercase tracking-widest text-brand-electric font-bold">{title}</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-brand-navy max-w-2xl mx-auto leading-snug">
              {subtitle}
            </h3>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {reels.map((reel, index) => (
            <FadeInUp key={reel.id} delay={index * 150}>
              <div className="w-full flex flex-col items-center group pointer-events-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-black/5 w-[267px] h-[476px] transition-transform duration-500 group-hover:scale-105">
                  <video 
                    src={reel.videoSrc}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                </div>
                <p className="mt-4 px-4 py-2 bg-white/75 backdrop-blur-sm rounded-xl font-semibold text-brand-navy text-center shadow-md border border-white/60 text-sm">
                  {reel.title}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
