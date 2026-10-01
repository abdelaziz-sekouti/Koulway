'use client';

import React from 'react';
import Image from 'next/image';
import { Translations, Language } from '@/lib/translations';
import {
  MapPin,
  Star,
  Flame,
  MessageCircle,
  ArrowRight,
  Utensils,
  Clock,
  ShieldCheck,
  Wheat,
  Bike,
} from 'lucide-react';

interface HeroProps {
  t: Translations;
  currentLang: Language;
}

export function Hero({ t, currentLang }: HeroProps) {
  const whatsappNumber = '212669689856';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    currentLang === 'darija'
      ? 'السلام عليكم كولواي، بغيت نكوموندي دابا فـ تطوان'
      : currentLang === 'es'
      ? '¡Hola Koulway! Me gustaría hacer un pedido de entrega rápida en Tetuán.'
      : currentLang === 'en'
      ? 'Hello Koulway! I would like to order fast delivery in Tetouan.'
      : 'Bonjour Koulway, je souhaite commander en livraison rapide à Tétouan !'
  )}`;

  return (
    <section className="relative w-full overflow-hidden bg-[#f9f9ff] pt-6 pb-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Location & Rating Pill */}
        <div className="inline-flex items-center flex-wrap gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 border border-slate-200/60 shadow-sm mb-6 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-1.5 text-[#b7102a]">
            <MapPin size={16} className="fill-current" />
            <span>{t.hero.cityBadge}</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1">
            <Star size={15} className="fill-[#fea619] text-[#fea619]" />
            <span className="font-bold text-slate-900">4.8 / 5</span>
            <span className="text-slate-500 font-normal text-xs">{t.hero.ratingText}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines, Value Props & CTAs */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdad8] text-[#92001c] w-fit text-xs font-bold uppercase tracking-wider">
              <Flame size={14} className="fill-current text-[#b7102a]" />
              <span>{t.hero.kicker}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141b2b] leading-[1.15]">
              {t.hero.titleStart}{' '}
              <span className="text-[#b7102a] italic underline decoration-[#fea619] decoration-wavy decoration-2 underline-offset-4">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#b7102a] hover:bg-[#db313f] text-white text-base font-bold shadow-[0_8px_24px_rgba(183,16,42,0.32)] hover:shadow-[0_12px_28px_rgba(183,16,42,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
              >
                <MessageCircle size={20} className="fill-current" />
                <span>{t.hero.ctaWhatsapp}</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#carte"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-base font-bold shadow-sm hover:shadow transition-all duration-150"
              >
                <Utensils size={18} className="text-[#b7102a]" />
                <span>{t.hero.ctaMenu}</span>
              </a>
            </div>

            {/* Micro Proof Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-slate-200/60">
              {/* Proof 1 */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#fea619]/20 flex items-center justify-center text-[#855300] shrink-0">
                  <Clock size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs uppercase text-slate-500 font-bold">
                    {t.hero.deliveryLabel}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-900 font-bold">
                    {t.hero.deliveryTime}
                  </span>
                </div>
              </div>

              {/* Proof 2 */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#ffdad8] flex items-center justify-center text-[#92001c] shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs uppercase text-slate-500 font-bold">
                    {t.hero.qualityLabel}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-900 font-bold">
                    {t.hero.qualityValue}
                  </span>
                </div>
              </div>

              {/* Proof 3 */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                  <Wheat size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs uppercase text-slate-500 font-bold">
                    {t.hero.breadLabel}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-900 font-bold">
                    {t.hero.breadValue}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Visual Showcase */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-100">
              {/* Main Feast Image */}
              <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6j5BT498n8WFEuzRCLLJW5wZ_W8bHL_voZ8pROXRfIwBoH5_BSKv77v7S9dkZk2_mnDwlyS-ZrWUnJAHv9YFwGg4aL_GAJx7So5qvYWdIRNwm6DjS4vV5gUPAU3KMjsOK_x-YCpaBZF_IVWSK2XkHuXCxgfTCo6bjjAux4nJ_6WfjCCt3WYracGT_00fkjHIqSLLJVxqYofO5eTPC3R4BFObeCTmo1__GSTlzjsZlalrzFlmm7XXh"
                  alt="Koulway Tetouan Smash Burger and Tacos Platter"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Floating Top Pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg flex items-center gap-2 border border-white/60">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b7102a] animate-ping" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {t.hero.floatingMeat}
                </span>
              </div>

              {/* Floating Bottom Delivery Glass Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl shadow-xl flex items-center justify-between gap-3 border border-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#b7102a] flex items-center justify-center text-white shrink-0 shadow-md">
                    <Bike size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                      {t.hero.floatingDeliveryTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t.hero.floatingDeliverySub}
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#b7102a] hover:bg-[#db313f] text-white text-xs sm:text-sm font-bold shadow transition-colors shrink-0"
                >
                  {t.hero.floatingOrder}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
