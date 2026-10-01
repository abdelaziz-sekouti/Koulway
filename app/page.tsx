'use client';

import React, { useState, useEffect } from 'react';
import { Language, LANGUAGES, translations } from '@/lib/translations';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { MenuSection } from '@/components/MenuSection';
import { QuickOrderBanner } from '@/components/QuickOrderBanner';
import { LocationSection } from '@/components/LocationSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');

  useEffect(() => {
    // Check URL search parameters or localStorage preference
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as Language;
    const savedLang = localStorage.getItem('koulway_lang') as Language;
    const target =
      urlLang && ['darija', 'fr', 'es', 'en'].includes(urlLang)
        ? urlLang
        : savedLang && ['darija', 'fr', 'es', 'en'].includes(savedLang)
        ? savedLang
        : null;

    if (target && target !== currentLang) {
      queueMicrotask(() => {
        setCurrentLang(target);
      });
    }
  }, [currentLang]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('koulway_lang', lang);

      // Update URL query parameter smoothly without reload for SEO and bookmarking
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());

      // Update document direction and lang attribute
      const langConfig = LANGUAGES.find((l) => l.code === lang);
      if (langConfig) {
        document.documentElement.dir = langConfig.dir;
        document.documentElement.lang =
          lang === 'darija' ? 'ar-MA' : lang === 'es' ? 'es-ES' : lang === 'fr' ? 'fr-MA' : 'en-US';
      }
    }
  };

  const t = translations[currentLang] || translations.fr;
  const isRtl = currentLang === 'darija';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen flex flex-col bg-[#f9f9ff] text-[#141b2b] ${
        isRtl ? 'font-arabic text-right' : 'text-left'
      }`}
    >
      {/* Top Header Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        t={t}
      />

      {/* Main Content Sections with Top Offset for Fixed Header */}
      <main className="flex-1 pt-20">
        <Hero t={t} currentLang={currentLang} />
        <Features t={t} />
        <MenuSection t={t} currentLang={currentLang} />
        <QuickOrderBanner t={t} currentLang={currentLang} />
        <LocationSection t={t} currentLang={currentLang} />
        <ReviewsSection t={t} />
        <FaqSection t={t} />
        <ContactSection t={t} currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer t={t} currentLang={currentLang} />

      {/* Floating Interactive Controls */}
      <ScrollToTop label={t.common.scrollTop} />
      <FloatingWhatsApp currentLang={currentLang} t={t} />
    </div>
  );
}
