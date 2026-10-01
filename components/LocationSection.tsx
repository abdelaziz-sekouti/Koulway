'use client';

import React, { useState } from 'react';
import { Translations, Language } from '@/lib/translations';
import {
  MapPin,
  Clock,
  Compass,
  Navigation,
  Phone,
  Star,
  ExternalLink,
  Layers,
} from 'lucide-react';

interface LocationSectionProps {
  t: Translations;
  currentLang: Language;
}

export function LocationSection({ t }: LocationSectionProps) {
  const [mapType, setMapType] = useState<'embed' | 'satellite'>('embed');
  const lat = '35.5809907';
  const lng = '-5.3534907';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const embedUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=${mapType === 'satellite' ? 'k' : 'm'}&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="localisation" className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-[#b7102a] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
            <MapPin size={16} />
            <span>{t.location.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141b2b] tracking-tight">
            {t.location.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {t.location.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Detail Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            {/* Card 1: Name, Address, GPS */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#f9f9ff] border border-slate-200/80 shadow-sm flex flex-col gap-2.5">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-11 h-11 rounded-2xl bg-[#ffdad8] flex items-center justify-center text-[#b7102a] shrink-0 shadow-sm">
                  <MapPin size={22} className="fill-current" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    {t.location.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {t.location.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs sm:text-sm text-slate-700 font-semibold border-t border-slate-200/60">
                <Compass size={16} className="text-[#855300] shrink-0" />
                <span>
                  {t.location.gpsLabel} :{' '}
                  <strong className="text-slate-900 font-black">{lat}, {lng}</strong>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.location.accessDesc}
              </p>
            </div>

            {/* Card 2: Operating Hours */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#f9f9ff] border border-slate-200/80 shadow-sm flex flex-col gap-2.5">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-11 h-11 rounded-2xl bg-[#ffddb8] flex items-center justify-center text-[#855300] shrink-0 shadow-sm">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    {t.location.hoursTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 font-semibold">
                    {t.location.hoursBadge}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200/60 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">{t.location.hoursDays}</span>
                  <span className="font-bold text-slate-900">{t.location.hoursTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">{t.location.hoursLastOrderLabel}</span>
                  <span className="text-[#b7102a] font-bold">{t.location.hoursLastOrderTime}</span>
                </div>
              </div>
            </div>

            {/* Card 3: Action CTAs */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#f9f9ff] border border-slate-200/80 shadow-sm flex flex-col gap-3">
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                {t.location.needHelpTitle}
              </h4>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-xs sm:text-sm font-bold shadow-sm transition-all"
                >
                  <Navigation size={16} className="text-[#b7102a]" />
                  <span>{t.location.btnDirections}</span>
                </a>
                <a
                  href="tel:+212669689856"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#b7102a] hover:bg-[#db313f] text-white text-xs sm:text-sm font-bold shadow transition-all"
                >
                  <Phone size={16} />
                  <span>{t.location.btnCall}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Free Google Maps with Interactive Overlay */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[420px] lg:h-full min-h-[420px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              {/* Free Embedded Interactive Google Maps */}
              <iframe
                title="Koulway Restaurant Tetouan Location Map"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[420px]"
              />

              {/* Map Layer Switcher in Corner */}
              <div className="absolute top-4 right-4 z-10 flex items-center bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-md border border-slate-200 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setMapType('embed')}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    mapType === 'embed'
                      ? 'bg-[#141b2b] text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Plan
                </button>
                <button
                  type="button"
                  onClick={() => setMapType('satellite')}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    mapType === 'satellite'
                      ? 'bg-[#141b2b] text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Satellite
                </button>
              </div>

              {/* Floating Info Card in Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-80 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/80 z-10">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-extrabold text-[#b7102a] text-sm sm:text-base">
                    Koulway Tétouan
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                    {t.location.mapBadgeStatus}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-2 leading-tight">
                  {t.location.mapDesc}
                </p>

                <div className="flex items-center gap-1 text-[#fea619] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-800 ml-1">
                    {t.location.mapRating}
                  </span>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#b7102a] hover:bg-[#db313f] text-white text-xs font-bold shadow transition-colors"
                >
                  <Navigation size={14} />
                  <span>{t.location.mapGpsBtn}</span>
                  <ExternalLink size={12} className="ml-1 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
