'use client';

import React from 'react';
import { Translations } from '@/lib/translations';
import { Beef, CookingPot, Zap, PiggyBank } from 'lucide-react';

interface FeaturesProps {
  t: Translations;
}

export function Features({ t }: FeaturesProps) {
  const features = [
    {
      icon: Beef,
      title: t.features.f1Title,
      desc: t.features.f1Desc,
      iconBg: 'bg-[#ffdad8] text-[#b7102a]',
    },
    {
      icon: CookingPot,
      title: t.features.f2Title,
      desc: t.features.f2Desc,
      iconBg: 'bg-[#ffddb8] text-[#855300]',
    },
    {
      icon: Zap,
      title: t.features.f3Title,
      desc: t.features.f3Desc,
      iconBg: 'bg-[#e1e8fd] text-[#141b2b]',
    },
    {
      icon: PiggyBank,
      title: t.features.f4Title,
      desc: t.features.f4Desc,
      iconBg: 'bg-[#ffdad5] text-[#b81313]',
    },
  ];

  return (
    <section id="a-propos" className="w-full py-12 md:py-16 bg-[#f1f3ff]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-md border border-slate-100 flex flex-col gap-2.5 transition-all duration-200 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-1 shrink-0`}
                >
                  <Icon size={26} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
