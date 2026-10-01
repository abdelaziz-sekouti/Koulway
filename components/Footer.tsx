'use client';

import React from 'react';
import { Logo } from '@/components/Logo';
import { Translations, Language } from '@/lib/translations';
import {
  Clock,
  Bike,
  MapPin,
  Compass,
  Phone,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

interface FooterProps {
  t: Translations;
  currentLang: Language;
}

export function Footer({ t }: FooterProps) {
  const whatsappNumber = '212669689856';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=35.5809907,-5.3534907';

  // Animated Social Icons as requested: Facebook, Instagram, YouTube, TikTok, Pinterest
  const socialNetworks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      hoverBg: 'hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/koulway',
      hoverBg: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      hoverBg: 'hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@koulway',
      hoverBg: 'hover:bg-[#000000] hover:text-white hover:border-[#000000]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      url: 'https://pinterest.com',
      hoverBg: 'hover:bg-[#bd081c] hover:text-white hover:border-[#bd081c]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.224-.176.271-.406.165-1.514-.705-2.46-2.915-2.46-4.693 0-3.824 2.779-7.337 8.016-7.337 4.208 0 7.481 2.999 7.481 7.009 0 4.184-2.637 7.551-6.297 7.551-1.23 0-2.387-.64-2.784-1.398l-.758 2.894c-.274 1.049-1.018 2.365-1.517 3.167 1.129.351 2.336.541 3.589.541 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638 0 12.017 0z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-[#f1f3ff] text-[#141b2b] border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.footer.brandDesc}
            </p>

            {/* Animated Social Icons */}
            <div className="flex items-center flex-wrap gap-2 pt-2">
              {socialNetworks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={`${t.footer.socialTooltip} ${social.name}`}
                  className={`w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all duration-200 ${social.hoverBg}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-slate-900">
              {t.footer.navTitle}
            </h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-600">
              <li>
                <a href="#carte" className="hover:text-[#b7102a] transition-colors">
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-[#b7102a] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#localisation" className="hover:text-[#b7102a] transition-colors">
                  {t.nav.location}
                </a>
              </li>
              <li>
                <a href="#avis" className="hover:text-[#b7102a] transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#b7102a] transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#b7102a] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Service */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-slate-900">
              {t.footer.hoursTitle}
            </h3>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <Clock size={18} className="text-[#b7102a] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900">{t.footer.service7j}</p>
                <p>{t.footer.serviceHours}</p>
                <p className="text-[#855300] font-semibold mt-1">{t.footer.lastOrder}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 mt-2">
              <Bike size={18} className="text-[#b7102a] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900">{t.footer.deliveryExpress}</p>
                <p>{t.footer.deliveryCities}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Localisation & Direct Contacts */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-slate-900">
              {t.footer.locationTitle}
            </h3>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <MapPin size={18} className="text-[#b7102a] shrink-0 mt-0.5" />
              <p>{t.footer.addressLine}</p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
              <Compass size={15} className="text-[#855300] shrink-0" />
              <span>{t.footer.gpsLine}</span>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#b7102a] hover:underline"
              >
                <span>{t.footer.openMaps}</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 hover:text-[#b7102a] font-bold text-xs shadow-sm hover:shadow transition-all w-fit"
              >
                <MessageCircle size={15} className="text-emerald-600 fill-current" />
                <span>{t.footer.phoneText}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-1.5 font-semibold text-[#855300]">
            <span>{t.footer.madeWithLove}</span>
            <span role="img" aria-label="Morocco">🇲🇦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
