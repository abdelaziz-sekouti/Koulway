'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  subText?: string;
}

export function Logo({ className = '', variant = 'dark', subText = 'TÉTOUAN • RESTAURANT' }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 shrink-0 select-none ${className}`}>
      {/* Icon emblem matching Image 1 & 2 */}
      <div className="relative w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#ff2a55] via-[#e6163e] to-[#b7102a] shadow-[0_4px_14px_rgba(183,16,42,0.35)] flex flex-col items-center justify-center p-1 sm:p-1.5 shrink-0 overflow-hidden">
        {/* Subtle glossy sheen */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/25 pointer-events-none rounded-xl sm:rounded-2xl" />
        
        {/* Yellow diamond accent on top of burger */}
        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#fea619] rotate-45 mb-0.5 sm:mb-1 shadow-[0_0_4px_#fea619]" />
        
        {/* Burger layers in white */}
        <div className="w-4 sm:w-6 h-1 sm:h-1.5 bg-white rounded-t-full mb-0.5" />
        <div className="w-4 sm:w-6 h-1 sm:h-1.5 bg-white rounded-full mb-0.5" />
        <div className="w-3.5 sm:w-5 h-0.5 sm:h-1 bg-white rounded-b-full opacity-95" />
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline leading-none tracking-tight">
          <span className={`text-lg sm:text-2xl font-black ${isLight ? 'text-white' : 'text-[#141b2b]'}`}>
            KOUL
          </span>
          <span className="text-lg sm:text-2xl font-black text-[#b7102a]">
            WAY
          </span>
        </div>
        <span className={`text-[9px] sm:text-[11px] uppercase tracking-wider font-bold mt-0.5 truncate max-w-[130px] sm:max-w-none ${isLight ? 'text-slate-300' : 'text-[#64748b]'}`}>
          {subText}
        </span>
      </div>
    </div>
  );
}
