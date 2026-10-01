'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  label?: string;
}

export function ScrollToTop({ label = 'Remonter en haut' }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-[#b7102a] border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#b7102a]/30 animate-in fade-in zoom-in-75 duration-200"
    >
      <ArrowUp size={20} className="stroke-[2.5]" />
    </button>
  );
}
