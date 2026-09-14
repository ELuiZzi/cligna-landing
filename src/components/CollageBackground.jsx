import React from 'react';

const CollageBackground = () => {
  // We'll assume we have 25 images (image1.jpg to image25.jpg)
  const images = Array.from({ length: 25 }, (_, i) => `/collage/image${i + 1}.jpg`);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-brand-light pointer-events-auto select-none">
      {/* Light overlay to ensure text readability on top */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10 pointer-events-none"></div>
      
      {/* Rotated Container */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] grid grid-cols-5 gap-4 md:gap-8 rotate-[-15deg]"
      >
        {images.map((src, index) => (
          <div 
            key={index}
            className="relative w-full h-full overflow-hidden rounded-xl shadow-xl group bg-slate-800"
          >
            <img
              src={src}
              alt={`Evento ${index + 1}`}
              className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 opacity-70 group-hover:opacity-100 group-hover:z-10 relative"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollageBackground;
