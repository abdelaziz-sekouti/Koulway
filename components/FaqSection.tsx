'use client';

import React, { useState } from 'react';
import { Translations } from '@/lib/translations';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  t: Translations;
}

export function FaqSection({ t }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(t.faq.items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-[#b7102a] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
            <HelpCircle size={16} />
            <span>{t.faq.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141b2b] tracking-tight">
            {t.faq.title}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {t.faq.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#f9f9ff] border border-slate-200/80 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-900 gap-4 hover:text-[#b7102a] transition-colors"
                >
                  <span className="leading-snug">{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200/80 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#b7102a] text-white border-transparent' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown size={16} className={isOpen ? 'text-white' : 'text-slate-600'} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 leading-relaxed animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
