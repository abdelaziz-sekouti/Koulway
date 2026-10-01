'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Translations, Language, MenuItem } from '@/lib/translations';
import { BookOpen, ShoppingBag, Plus, Minus, FileText, Check } from 'lucide-react';

interface MenuSectionProps {
  t: Translations;
  currentLang: Language;
}

export function MenuSection({ t, currentLang }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const whatsappNumber = '212669689856';

  const filterTabs = [
    { key: 'all', label: t.menu.tabAll },
    { key: 'burgers', label: t.menu.tabBurgers },
    { key: 'tacos', label: t.menu.tabTacos },
    { key: 'paninis', label: t.menu.tabPaninis },
    { key: 'loaded', label: t.menu.tabLoaded },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? t.menu.items
      : t.menu.items.filter((item) => item.category === activeCategory);

  const getQty = (id: string) => quantities[id] || 1;

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, Math.min(20, current + delta));
      return { ...prev, [id]: next };
    });
  };

  const getWhatsAppOrderUrl = (item: MenuItem) => {
    const qty = getQty(item.id);
    const totalPrice = item.price * qty;
    
    let text = '';
    if (currentLang === 'darija') {
      text = `السلام عليكم كولواي، بغيت نكوموندي: ${qty}x ${item.title} (${totalPrice} ${item.currency}). العنوان: `;
    } else if (currentLang === 'es') {
      text = `¡Hola Koulway! Deseo pedir: ${qty}x ${item.title} (${totalPrice} ${item.currency}). Dirección de entrega: `;
    } else if (currentLang === 'en') {
      text = `Hello Koulway! I would like to order: ${qty}x ${item.title} (${totalPrice} ${item.currency}). Delivery address: `;
    } else {
      text = `Bonjour Koulway, je souhaite commander : ${qty}x ${item.title} (${totalPrice} ${item.currency}). Mon adresse : `;
    }

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const groupOrderUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    currentLang === 'darija'
      ? 'السلام عليكم كولواي، بغيت نسول على منيو الگروپات والطلبيات الخاصة للطلبة فـ تطوان'
      : currentLang === 'es'
      ? '¡Hola Koulway! Me gustaría consultar los menús para grupos y estudiantes en Tetuán.'
      : currentLang === 'en'
      ? 'Hello Koulway! I would like to inquire about group and student combo menus in Tetouan.'
      : 'Bonjour Koulway, je souhaite consulter la carte groupe et les formules étudiantes pour Tétouan.'
  )}`;

  return (
    <section id="carte" className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#b7102a] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
              <BookOpen size={16} />
              <span>{t.menu.kicker}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141b2b] tracking-tight">
              {t.menu.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1.5 leading-relaxed">
              {t.menu.subtitle}
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none shrink-0">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-[#141b2b] text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const qty = getQty(item.id);
            return (
              <div
                key={item.id}
                className="flex flex-col rounded-3xl bg-[#f9f9ff] border border-slate-200/80 p-4 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Image Container with Tag Badge */}
                <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden mb-3.5 bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span
                    className={`absolute top-2.5 left-2.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wide shadow-md ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#b7102a] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="text-xl sm:text-2xl font-black text-[#b7102a]">
                          {item.price}
                        </span>{' '}
                        <span className="text-xs font-bold text-slate-500">{item.currency}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Quantity and Order Action */}
                  <div className="pt-2 border-t border-slate-200/70 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between gap-2">
                      {/* Badge (e.g. Fait Maison) */}
                      <span className="px-2.5 py-0.5 rounded-md bg-[#ffddb8]/60 text-[#855300] text-[11px] font-bold">
                        {item.badge}
                      </span>

                      {/* Micro Stepper */}
                      <div className="flex items-center border border-slate-200 bg-white rounded-full p-0.5">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, -1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-slate-900">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* WhatsApp Direct Order Button */}
                    <a
                      href={getWhatsAppOrderUrl(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#b7102a] hover:bg-[#db313f] text-white text-xs sm:text-sm font-bold shadow transition-all duration-150 active:scale-95"
                    >
                      <ShoppingBag size={15} />
                      <span>
                        {t.menu.btnOrder} ({item.price * qty} {item.currency})
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Group / Special Order Promo Banner matching Image 4 */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#e1e8fd] border border-[#dce2f7] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#fea619] flex items-center justify-center text-[#141b2b] shrink-0 shadow-md">
              <FileText size={28} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#141b2b]">
                {t.menu.groupBannerTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {t.menu.groupBannerDesc}
              </p>
            </div>
          </div>

          <a
            href={groupOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141b2b] hover:bg-[#b7102a] text-white text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            <span>{t.menu.groupBannerBtn}</span>
            <span className="text-base">📥</span>
          </a>
        </div>
      </div>
    </section>
  );
}
