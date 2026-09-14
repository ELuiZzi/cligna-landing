import React from 'react';
import { ClipboardCheck, Building2, Clock } from 'lucide-react';
import data from '../data.json';
import FadeInUp from './FadeInUp';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'clipboard-check':
      return <ClipboardCheck className="w-8 h-8 text-brand-electric" />;
    case 'building':
      return <Building2 className="w-8 h-8 text-brand-electric" />;
    case 'clock':
      return <Clock className="w-8 h-8 text-brand-electric" />;
    default:
      return <div className="w-8 h-8 bg-brand-electric rounded-full" />;
  }
};

const Services = () => {
  const { title, subtitle, items, image } = data.services;

  return (
    <section className="py-24 px-6 bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Encabezado y Tarjetas de Backstage */}
          <div className="lg:col-span-7 space-y-8">
            <FadeInUp>
              <div className="space-y-4 pointer-events-auto bg-white/50 p-8 rounded-3xl backdrop-blur-sm shadow-xl border border-white/60">
                <h2 className="text-sm uppercase tracking-widest text-brand-electric font-bold">{title}</h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-brand-navy leading-snug">
                  {subtitle}
                </h3>
              </div>
            </FadeInUp>

            <div className="space-y-5">
              {items.map((item, index) => (
                <FadeInUp key={item.id} delay={index * 120}>
                  <div 
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 pointer-events-auto flex items-start gap-6 group hover:-translate-y-1"
                  >
                    <div className="shrink-0 bg-blue-50/90 w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-100">
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy mb-2">{item.title}</h4>
                      <p className="text-brand-slate leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Sección de Imagen */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center">
            <FadeInUp delay={200}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 group pointer-events-auto min-h-[420px] lg:min-h-[580px] flex items-center">
                <img
                  src={image || "/backstage.jpg"}
                  alt="Backstage y Producción"
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative z-10 p-8 mt-auto text-white">
                  <span className="inline-block px-3 py-1 bg-brand-electric/90 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                    En sitio
                  </span>
                  <h4 className="text-xl font-bold font-montserrat drop-shadow-md !text-white">
                    Coordinación & Logística en Vivo
                  </h4>
                  <p className="text-slate-200 text-sm mt-1 drop-shadow">
                    Presencia y soporte continuo en cada etapa del evento.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
