'use client';

import React from 'react';
import { Translations, Language } from '@/lib/translations';
import { MessageCircle, Send } from 'lucide-react';

interface QuickOrderBannerProps {
  t: Translations;
  currentLang: Language;
}

export function QuickOrderBanner({ t, currentLang }: QuickOrderBannerProps) {
  const whatsappNumber = '212669689856';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    currentLang === 'darija'
      ? 'السلام عليكم كولواي، بغيت ندوز كوموند دابا فـ تطوان فيسع'
      : currentLang === 'es'
      ? '¡Hola Koulway Tetuán! Tengo hambre y me gustaría hacer un pedido exprés ahora.'
      : currentLang === 'en'
      ? 'Hello Koulway Tetouan! I would like to place an express delivery order right now.'
      : 'Salam Koulway, je veux passer une commande en livraison express à Tétouan !'
  )}`;

  return (
    <section className="w-full bg-[#b7102a] text-white py-8 md:py-10 relative overflow-hidden">
      {/* Decorative background glow circle */}
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4 sm:gap-5 text-center md:text-left">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 flex items-center justify-center text-white shrink-0 shadow-inner">
            <MessageCircle size={28} className="fill-current animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {t.banner.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-xl">
              {t.banner.desc}
            </p>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-white text-[#b7102a] hover:bg-slate-50 text-sm sm:text-base font-extrabold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 transition-all shrink-0"
        >
          <Send size={18} className="text-[#b7102a] fill-current" />
          <span>{t.banner.btn}</span>
        </a>
      </div>
    </section>
  );
}
