'use client';

import React from 'react';
import { Translations } from '@/lib/translations';
import { MessageSquareQuote, Star } from 'lucide-react';

interface ReviewsSectionProps {
  t: Translations;
}

export function ReviewsSection({ t }: ReviewsSectionProps) {
  const avatarColors = [
    'bg-[#ffdad8] text-[#92001c]',
    'bg-[#ffddb8] text-[#855300]',
    'bg-[#ffdad5] text-[#b81313]',
  ];

  return (
    <section id="avis" className="w-full py-16 md:py-20 bg-[#f1f3ff]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with aggregate score badge */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#b7102a] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
              <MessageSquareQuote size={16} />
              <span>{t.reviews.kicker}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141b2b] tracking-tight">
              {t.reviews.title}
            </h2>
          </div>

          {/* Rating Aggregate Score */}
          <div className="flex items-center gap-3.5 px-5 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm shrink-0">
            <div className="flex flex-col items-end">
              <span className="text-xl sm:text-2xl font-black text-slate-900 leading-none">
                4.8 / 5
              </span>
              <span className="text-[11px] text-slate-500 font-bold">
                {t.reviews.scoreLabel}
              </span>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="flex text-[#fea619]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.reviews.items.map((review, idx) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-5"
            >
              <div className="flex flex-col gap-3">
                {/* 5 Stars */}
                <div className="flex text-[#fea619]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    avatarColors[idx % avatarColors.length]
                  }`}
                >
                  {review.initials}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 leading-tight">
                    {review.name}
                  </h5>
                  <span className="text-[11px] text-slate-500">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
