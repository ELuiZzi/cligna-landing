import React from 'react';
import { ClipboardCheck, Building2, Clock } from 'lucide-react';
import data from '../data.json';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'clipboard-check':
      return <ClipboardCheck className="w-10 h-10 text-brand-electric" />;
    case 'building':
      return <Building2 className="w-10 h-10 text-brand-electric" />;
    case 'clock':
      return <Clock className="w-10 h-10 text-brand-electric" />;
    default:
      return <div className="w-10 h-10 bg-brand-electric rounded-full" />;
  }
};

const Services = () => {
  const { title, subtitle, items } = data.services;

  return (
    <section className="py-24 px-6 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-brand-electric font-bold">{title}</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-brand-navy max-w-2xl mx-auto leading-snug">
            {subtitle}
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                {getIcon(item.icon)}
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4">{item.title}</h4>
              <p className="text-brand-slate leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
