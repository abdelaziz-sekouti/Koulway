'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/Logo';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Language, LANGUAGES, Translations } from '@/lib/translations';
import {
  MessageCircle,
  Menu as MenuIcon,
  X,
  Clock,
  Phone,
  UtensilsCrossed,
  Info,
  MapPin,
  Star,
  HelpCircle,
  Mail,
  ChevronRight,
} from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations;
}

export function Navbar({ currentLang, onLanguageChange, t }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const whatsappNumber = '212669689856';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    currentLang === 'darija'
      ? 'السلام عليكم كولواي، بغيت نكوموندي دابا فـ تطوان'
      : currentLang === 'es'
      ? '¡Hola Koulway! Me gustaría hacer un pedido en Tetuán.'
      : currentLang === 'en'
      ? 'Hello Koulway! I would like to place an order in Tetouan.'
      : 'Bonjour Koulway, je souhaite passer commande à Tétouan.'
  )}`;

  const navLinks = [
    { href: '#carte', label: t.nav.menu, icon: UtensilsCrossed },
    { href: '#a-propos', label: t.nav.about, icon: Info },
    { href: '#localisation', label: t.nav.location, icon: MapPin },
    { href: '#avis', label: t.nav.reviews, icon: Star },
    { href: '#faq', label: t.nav.faq, icon: HelpCircle },
    { href: '#contact', label: t.nav.contact, icon: Mail },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9ff]/95 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_2px_15px_rgba(20,27,43,0.05)]">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Brand Logo & Hours Pill */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 min-w-0">
            <a href="#" className="flex items-center transition-transform hover:scale-[1.02]">
              <Logo />
            </a>

            {/* Opening hours pill (hidden on small mobile & tablet) */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fea619]/15 text-[#855300] border border-[#fea619]/30 text-xs font-semibold shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Clock size={13} className="text-[#855300]" />
              <span>{t.nav.hoursBadge}</span>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/90 border border-slate-200/60">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#b7102a] hover:bg-white transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language Switcher, WhatsApp Button & Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Language Switcher Dropdown - Only shown on Desktop (hidden on mobile and tablet) */}
            <LanguageSwitcher
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
              className="hidden lg:block"
            />

            {/* Desktop / Tablet WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.nav.orderWhatsapp}
              title={t.nav.orderWhatsapp}
              className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#b7102a] hover:bg-[#db313f] text-white text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(183,16,42,0.3)] hover:shadow-[0_6px_20px_rgba(183,16,42,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <MessageCircle size={16} className="text-white fill-current shrink-0" />
              <span>{t.nav.orderWhatsapp}</span>
            </a>

            {/* Mobile-only compact WhatsApp icon button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Order"
              className="sm:hidden w-10 h-10 rounded-xl bg-[#b7102a] text-white flex items-center justify-center shadow-md active:scale-95 transition-all shrink-0"
            >
              <MessageCircle size={18} className="fill-current" />
            </a>

            {/* Mobile Menu Hamburger Button - ALWAYS SHOWN ON MOBILE / TABLET (< lg) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200/90 shadow-sm flex items-center justify-center shrink-0 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#b7102a]/30"
            >
              {mobileMenuOpen ? (
                <X size={22} className="stroke-[2.5] text-[#b7102a]" />
              ) : (
                <MenuIcon size={22} className="stroke-[2.5] text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 top-18 sm:top-20 bg-slate-950/40 backdrop-blur-xs z-40 transition-opacity animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation mobile"
          className="lg:hidden fixed top-18 sm:top-20 left-0 right-0 max-h-[calc(100vh-4.5rem)] overflow-y-auto bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl z-50 px-4 sm:px-6 pt-4 pb-8 animate-in slide-in-from-top-3 duration-200"
        >
          {/* Quick Info Header */}
          <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.nav.hoursBadge}</span>
            </div>
            <a
              href="tel:+212669689856"
              className="flex items-center gap-1.5 text-[#b7102a] font-bold px-2.5 py-1 rounded-full bg-[#ffdad8]/50"
            >
              <Phone size={13} />
              <span>+212 669 689 856</span>
            </a>
          </div>

          {/* Quick Language Switcher Pills inside Drawer */}
          <div className="  mb-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Langue / اللغة / Language
            </div>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES.map((lang) => {
                const isSelected = lang.code === currentLang;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => onLanguageChange(lang.code)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                      isSelected
                        ? 'bg-[#b7102a] text-white border-[#b7102a] shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-sm">{lang.flag}</span>
                    <span className="truncate">{lang.nativeLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3.5 py-3 rounded-2xl text-slate-800 hover:text-[#b7102a] hover:bg-slate-50 font-bold text-sm flex items-center justify-between transition-colors border border-transparent hover:border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                      <Icon size={16} />
                    </div>
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-400" />
                </a>
              );
            })}
          </div>

          {/* Call-to-action buttons in mobile drawer */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#b7102a] hover:bg-[#db313f] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle size={18} className="fill-current" />
              <span>{t.nav.orderWhatsapp} (+212 669 689 856)</span>
            </a>

            <a
              href="tel:+212669689856"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-sm transition-all"
            >
              <Phone size={16} className="text-[#b7102a]" />
              <span>Appeler le restaurant (+212 669 689 856)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
