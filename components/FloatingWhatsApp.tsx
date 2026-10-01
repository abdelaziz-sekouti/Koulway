'use client';

import React from 'react';
import { Language, Translations } from '@/lib/translations';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentLang: Language;
  t: Translations;
}

export function FloatingWhatsApp({ currentLang, t }: FloatingWhatsAppProps) {
  const whatsappNumber = '212669689856';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    currentLang === 'darija'
      ? 'السلام عليكم كولواي تطوان، بغيت نكوموندي دابا'
      : currentLang === 'es'
      ? '¡Hola Koulway Tetuán! Me gustaría hacer un pedido ahora.'
      : currentLang === 'en'
      ? 'Hello Koulway Tetouan! I would like to place an order now.'
      : 'Salam Koulway Tetouan, je souhaite commander tout de suite !'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Commander sur WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#b7102a] hover:bg-[#db313f] text-white shadow-[0_8px_30px_rgba(183,16,42,0.45)] hover:shadow-[0_12px_36px_rgba(183,16,42,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle size={22} className="fill-current shrink-0" />
        <span className="text-xs sm:text-sm font-extrabold hidden sm:inline whitespace-nowrap">
          {t.nav.orderWhatsapp}
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#fea619] animate-pulse shrink-0" />
      </a>
    </div>
  );
}
