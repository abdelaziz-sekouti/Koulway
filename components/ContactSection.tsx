'use client';

import React, { useState } from 'react';
import { Translations, Language } from '@/lib/translations';
import {
  Mail,
  Send,
  Calendar,
  Users,
  Phone,
  User,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';

interface ContactSectionProps {
  t: Translations;
  currentLang: Language;
}

export function ContactSection({ t, currentLang }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bookingType: 'table',
    guests: '1-2',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const whatsappNumber = '212669689856';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage(
        currentLang === 'darija'
          ? 'عافاك عمر المعلومات الضرورية (الاسم، التيليفون، والرسالة)'
          : currentLang === 'es'
          ? 'Por favor, completa los campos requeridos (Nombre, Teléfono y Mensaje).'
          : currentLang === 'en'
          ? 'Please fill in all required fields (Name, Phone, and Message).'
          : 'Veuillez remplir tous les champs obligatoires (Nom, Téléphone et Message).'
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedData({ ...formData });
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Une erreur est survenue.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Erreur réseau. Veuillez réessayer ou nous contacter sur WhatsApp.');
    }
  };

  const getWhatsAppBookingUrl = () => {
    const data = submittedData || formData;
    const text =
      currentLang === 'darija'
        ? `السلام عليكم كولواي تطوان، باغي ندير حجز/طلب:
- الاسم: ${data.name}
- التيليفون: ${data.phone}
- نوع الطلب: ${data.bookingType}
- عدد الأشخاص: ${data.guests}
- التفاصيل: ${data.message}`
        : currentLang === 'es'
        ? `¡Hola Koulway Tetuán! Deseo confirmar mi reserva/solicitud:
- Nombre: ${data.name}
- Teléfono: ${data.phone}
- Tipo: ${data.bookingType}
- Comensales: ${data.guests}
- Detalles: ${data.message}`
        : currentLang === 'en'
        ? `Hello Koulway Tetouan! I would like to confirm my booking/inquiry:
- Name: ${data.name}
- Phone: ${data.phone}
- Type: ${data.bookingType}
- Party Size: ${data.guests}
- Message: ${data.message}`
        : `Bonjour Koulway Tétouan, je souhaite faire une demande :
- Nom: ${data.name}
- Téléphone: ${data.phone}
- Type: ${data.bookingType}
- Personnes: ${data.guests}
- Message: ${data.message}`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="w-full py-16 md:py-20 bg-[#f9f9ff]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-[#b7102a] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
            <Mail size={16} />
            <span>{t.contact.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141b2b] tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Card Container */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-8 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 shadow-sm">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                {t.contact.successTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg mb-8 leading-relaxed">
                {t.contact.successDesc}
              </p>

              {/* Direct WhatsApp Fast-Track confirmation */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#b7102a] hover:bg-[#db313f] text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle size={18} className="fill-current" />
                  <span>{t.contact.whatsappBookingShortcut}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      bookingType: 'table',
                      guests: '1-2',
                      message: '',
                    });
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors"
                >
                  Nouveau message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {status === 'error' && errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <User size={14} className="text-[#b7102a]" />
                    <span>{t.contact.nameLabel} *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9f9ff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b7102a]/30 focus:border-[#b7102a] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <Phone size={14} className="text-[#b7102a]" />
                    <span>{t.contact.phoneLabel} *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9f9ff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b7102a]/30 focus:border-[#b7102a] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Booking Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <Mail size={14} className="text-[#b7102a]" />
                    <span>{t.contact.emailLabel}</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9f9ff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b7102a]/30 focus:border-[#b7102a] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#b7102a]" />
                    <span>{t.contact.bookingTypeLabel}</span>
                  </label>
                  <select
                    name="bookingType"
                    value={formData.bookingType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9f9ff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b7102a]/30 focus:border-[#b7102a] transition-all"
                  >
                    <option value="table">{t.contact.bookingTypeTable}</option>
                    <option value="takeaway">{t.contact.bookingTypeTakeaway}</option>
                    <option value="group">{t.contact.bookingTypeGroup}</option>
                    <option value="general">{t.contact.bookingTypeGeneral}</option>
                  </select>
                </div>
              </div>

              {/* Party Size (only highlighted for table and group booking) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Users size={14} className="text-[#b7102a]" />
                  <span>{t.contact.guestsLabel}</span>
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9f9ff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b7102a]/30 focus:border-[#b7102a] transition-all"
                >
                  <option value="1-2">{t.contact.guestsOption1}</option>
                  <option value="3-4">{t.contact.guestsOption2}</option>
                  <option value="5-8">{t.contact.guestsOption3}</option>
                  <option value="8+">{t.contact.guestsOption4}</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-800">
                  {t.contact.messageLabel} *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9f9ff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b7102a]/30 focus:border-[#b7102a] transition-all resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#b7102a] hover:bg-[#db313f] text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  <Send size={18} />
                  <span>{status === 'submitting' ? t.contact.sendingBtn : t.contact.submitBtn}</span>
                </button>

                {/* Direct WhatsApp Alternative Link */}
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#b7102a] hover:underline"
                >
                  <MessageCircle size={16} className="fill-current" />
                  <span>{t.contact.whatsappBookingShortcut} (+212 669 689 856)</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
