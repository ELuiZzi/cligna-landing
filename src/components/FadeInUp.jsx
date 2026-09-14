import React, { useEffect, useRef, useState } from 'react';

// Tracker global de dirección de scroll (singleton pasivo y ultra ligero)
let globalScrollDirection = 'down';
let lastScrollY = typeof window !== 'undefined' ? (window.pageYOffset || document.documentElement.scrollTop || 0) : 0;

if (typeof window !== 'undefined') {
  window.addEventListener(
    'scroll',
    () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const diff = currentScrollY - lastScrollY;
      if (Math.abs(diff) > 3) {
        globalScrollDirection = diff > 0 ? 'down' : 'up';
        lastScrollY = currentScrollY;
      }
    },
    { passive: true }
  );
}

/**
 * FadeInUp / Directional Scroll Reveal
 * Animación bidireccional consciente de la dirección de scroll:
 * - Scroll hacia abajo: Fade In Up (entra desde abajo hacia arriba)
 * - Scroll hacia arriba: Fade In Down (entra cayendo desde arriba hacia abajo)
 * - Se reinicia al salir del viewport para permitir re-animación bidireccional en móvil y desktop
 */
const FadeInUp = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  // 'down' = entra desde abajo (translate-y-10), 'up' = entra desde arriba (-translate-y-10)
  const [direction, setDirection] = useState('down');
  const domRef = useRef(null);

  useEffect(() => {
    const element = domRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.08) {
            // Al entrar en pantalla, confirmamos la dirección de entrada
            if (globalScrollDirection === 'up') {
              setDirection('up');
            } else if (globalScrollDirection === 'down') {
              setDirection('down');
            }
            setIsVisible(true);
          } else if (!entry.isIntersecting || entry.intersectionRatio <= 0) {
            // Al salir completamente de pantalla, reseteamos visibilidad
            setIsVisible(false);
            const rect = entry.boundingClientRect;
            // Si quedó por arriba del viewport, la próxima vez que entre vendrá desde arriba
            // Si quedó por abajo del viewport, vendrá desde abajo
            if (rect.top < 0) {
              setDirection('up');
            } else {
              setDirection('down');
            }
          }
        });
      },
      {
        threshold: [0, 0.08]
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Clases dinámicas según estado de visibilidad y dirección
  const offsetClass = isVisible
    ? 'opacity-100 translate-y-0'
    : direction === 'up'
    ? 'opacity-0 -translate-y-10'
    : 'opacity-0 translate-y-10';

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform-gpu will-change-[transform,opacity] ${offsetClass} ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
