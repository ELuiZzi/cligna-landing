import React from 'react';
import { Mail, Phone } from 'lucide-react';
import data from '../data.json';

const Contact = () => {
  const { title, subtitle, whatsappNumber, whatsappText, email, emailText, address } = data.contact;

  return (
    <section id="contacto" className="py-24 px-6 bg-brand-navy text-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 w-full md:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            {whatsappText}
          </a>
          
          <a 
            href={`mailto:${email}`}
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 w-full md:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            {emailText}
          </a>
        </div>
        
        <div className="pt-12 border-t border-white/10">
          <p className="text-slate-400 text-sm">{address}</p>
          <p className="text-slate-500 text-sm mt-4">© {new Date().getFullYear()} {data.companyName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
