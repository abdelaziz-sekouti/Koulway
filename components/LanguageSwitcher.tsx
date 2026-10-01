'use client';

import React, { useState, useRef, useEffect } from 'react';
import { LANGUAGES, Language, LanguageOption } from '@/lib/translations';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
}

export function LanguageSwitcher({ currentLang, onLanguageChange, className = '' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeOption = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full border border-slate-200/80 bg-white/90 hover:bg-white text-slate-800 text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#b7102a]/30"
      >
        <span className="text-base leading-none" role="img" aria-label={activeOption.label}>
          {activeOption.flag}
        </span>
        <span className="hidden md:inline font-medium text-slate-700">{activeOption.nativeLabel}</span>
        <span className="md:hidden uppercase text-[11px] font-bold text-slate-700">{activeOption.code}</span>
        <ChevronDown
          size={14}
          className={`text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 rounded-2xl bg-white border border-slate-100 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
            Language / اللغة / Idioma
          </div>
          <ul role="listbox" className="py-1">
            {LANGUAGES.map((option: LanguageOption) => {
              const isSelected = option.code === currentLang;
              return (
                <li key={option.code}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option.code)}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm transition-colors text-left ${
                      isSelected
                        ? 'bg-[#b7102a]/10 text-[#b7102a] font-bold'
                        : 'text-slate-700 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base" role="img" aria-label={option.label}>
                        {option.flag}
                      </span>
                      <span>{option.nativeLabel}</span>
                    </div>
                    {isSelected && <Check size={14} className="text-[#b7102a]" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
