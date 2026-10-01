export type Language = 'darija' | 'fr' | 'es' | 'en';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'darija', label: 'Darija', nativeLabel: 'الدارجة المغربية', flag: '🇲🇦', dir: 'rtl' },
  { code: 'fr', label: 'Français', nativeLabel: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'es', label: 'Español', nativeLabel: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧', dir: 'ltr' },
];

export interface MenuItem {
  id: string;
  category: 'burgers' | 'tacos' | 'paninis' | 'loaded';
  title: string;
  tag: string;
  tagColor: string;
  price: number;
  currency: string;
  badge: string;
  description: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  role: string;
  rating: number;
  comment: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Translations {
  nav: {
    menu: string;
    about: string;
    location: string;
    reviews: string;
    faq: string;
    contact: string;
    orderWhatsapp: string;
    orderShort: string;
    hoursBadge: string;
  };
  hero: {
    cityBadge: string;
    ratingText: string;
    kicker: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    ctaWhatsapp: string;
    ctaMenu: string;
    deliveryLabel: string;
    deliveryTime: string;
    qualityLabel: string;
    qualityValue: string;
    breadLabel: string;
    breadValue: string;
    floatingMeat: string;
    floatingDeliveryTitle: string;
    floatingDeliverySub: string;
    floatingOrder: string;
  };
  features: {
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
  };
  menu: {
    kicker: string;
    title: string;
    subtitle: string;
    tabAll: string;
    tabBurgers: string;
    tabTacos: string;
    tabPaninis: string;
    tabLoaded: string;
    btnOrder: string;
    groupBannerTitle: string;
    groupBannerDesc: string;
    groupBannerBtn: string;
    items: MenuItem[];
  };
  banner: {
    title: string;
    desc: string;
    btn: string;
  };
  location: {
    kicker: string;
    title: string;
    subtitle: string;
    name: string;
    address: string;
    gpsLabel: string;
    accessDesc: string;
    hoursTitle: string;
    hoursBadge: string;
    hoursDays: string;
    hoursTime: string;
    hoursLastOrderLabel: string;
    hoursLastOrderTime: string;
    needHelpTitle: string;
    btnDirections: string;
    btnCall: string;
    mapBadgeStatus: string;
    mapDesc: string;
    mapRating: string;
    mapGpsBtn: string;
  };
  reviews: {
    kicker: string;
    title: string;
    scoreLabel: string;
    items: ReviewItem[];
  };
  faq: {
    kicker: string;
    title: string;
    items: FaqItem[];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    bookingTypeLabel: string;
    bookingTypeTable: string;
    bookingTypeTakeaway: string;
    bookingTypeGroup: string;
    bookingTypeGeneral: string;
    guestsLabel: string;
    guestsOption1: string;
    guestsOption2: string;
    guestsOption3: string;
    guestsOption4: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendingBtn: string;
    successTitle: string;
    successDesc: string;
    whatsappBookingShortcut: string;
  };
  footer: {
    brandDesc: string;
    navTitle: string;
    hoursTitle: string;
    service7j: string;
    serviceHours: string;
    lastOrder: string;
    deliveryExpress: string;
    deliveryCities: string;
    locationTitle: string;
    addressLine: string;
    gpsLine: string;
    openMaps: string;
    phoneText: string;
    copyright: string;
    madeWithLove: string;
    socialTooltip: string;
  };
  common: {
    currency: string;
    scrollTop: string;
  };
}

const sharedImages = {
  smashBurger: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHVksTLQUxOivddgXd1DaTvcw9j3WzEDjZIeqbgHPmLJAZpY2Ej6CmjN7jfohC15wLLpPtnEevfHU06ZaqxHdkEoczUqiXN_kHDiIwg-hNrIBaHPVTfN279qgnUp6pgjb5FQSUzGeIjGQ9pUuimuK9jvA2pp0ZoS99iiHLqh96MUyu7WN6-AWDiPUw5JmHliCOEGRMR11w_9L4yWRrXAOiy69eHBDcHFb_9g8n6-wRh6p_pimE5tnO',
  tacos: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZlQotWrNE6gNaAvs7ULGJxh6xhGXaQIFka5h_x66oJl9WyE74XcMuLnSk7qtNWt2qw6dlPwXdFyyb98MwRkc78tmqaKbEM5DhGOfT0m4p4Vlcs4DLBkqAsq_K5PZqTuz9IZu5SQQA_Osw8fAgws4_dryqbrqotheUKGqS70P6uY3_jxkIc5rnQCbmD_Ylmfu9HRLUuhs6hUGOmjch_ipztPADdHoScidFU0muZmZYkVMJdNS0oEar',
  panini: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp79Y-GFbmlbnPe6pLcXHOKpxGP-CLRJE8dvqfAGsRsKlNY9D-6aY-tb4xCWWiOmX4lSf4mCryW4-4uLwlPj1Iot8iYuntU5w2hlRHorq6Ysit4oZ3aGbpSSSV1HcJQXoJimcOkAO3aAgxpH_R7K_IvauRHcVJmtMII1JxaDmdsOx1eU8BDxNJ2H1wIFdxcnEm_8aFt2AIPc8yJ869puZYw7P437O0QMxFXx7ALDQbI9YMxXu5nQkt',
  loadedFries: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA88DVkXYMwB_llN-l200YaZ807GS2z1d-AQGKZ_0iohjUwaC0YZL3dC-Kvo2bR__RLWn07JrR-iW4HcwG9xoTbkQqMY-jAV-XkjITBmp3a74v2Km2eXfaGEE6qf9VUSp-UHLuH11Jw28NSmWZlPoNM05VETblNT62aXExToKasP8gJZEi9HdEKkP5uctA47g1Owe8rxNbrghDTnWSeyV5edq96EvpvR0RC8bAWDJJ6CbYVp1dp20mh',
};

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      menu: 'Menu',
      about: 'À propos',
      location: 'Localisation',
      reviews: 'Avis Clients',
      faq: 'FAQ',
      contact: 'Contact & Réservation',
      orderWhatsapp: 'Commander sur WhatsApp',
      orderShort: 'Commander',
      hoursBadge: 'Ouvert 12:00 - 01:00',
    },
    hero: {
      cityBadge: 'Tétouan, Maroc',
      ratingText: '4.8 / 5 (350+ avis Google)',
      kicker: 'Street Craft & Grill Authentique',
      titleStart: 'Le Meilleur du Fast-Food',
      titleHighlight: 'Gourmand',
      titleEnd: 'à Tétouan.',
      description: 'Smash burgers crousti-fondants, tacos généreusement gratinés, paninis dorés et sauces signatures secrètes, préparés minute avec des ingrédients frais du terroir marocain.',
      ctaWhatsapp: 'Commander sur WhatsApp',
      ctaMenu: 'Découvrir la Carte',
      deliveryLabel: 'Livraison',
      deliveryTime: '20 - 35 min',
      qualityLabel: 'Qualité',
      qualityValue: '100% Viande Fraîche',
      breadLabel: 'Pain',
      breadValue: 'Brioché Artisanal',
      floatingMeat: '🔥 100% Viande Fraîche Grillée',
      floatingDeliveryTitle: 'Livraison Rapide',
      floatingDeliverySub: 'Tétouan Centre • Martil • Rincon',
      floatingOrder: 'Commander',
    },
    features: {
      f1Title: 'Ingrédients 100% Frais',
      f1Desc: 'Viandes de bœuf rigoureusement sélectionnées chaque matin, légumes croquants du jour et zéro produit congelé.',
      f2Title: 'Recettes Artisanales',
      f2Desc: "Pains briochés dorés au beurre léger, sauces signatures préparées sur place et mélanges d'épices du Nord.",
      f3Title: 'Service Rapide & Chaleureux',
      f3Desc: 'Que ce soit sur place dans notre salle moderne, à emporter ou livré chaud chez vous en un temps record.',
      f4Title: 'Générosité & Juste Prix',
      f4Desc: 'Des portions copieuses, du fromage dégoulinant et le meilleur rapport gourmandise-prix de Tétouan.',
    },
    menu: {
      kicker: 'Nos Best-Sellers Recommandés',
      title: 'Les Incontournables de Koulway',
      subtitle: 'Commandez vos plats préférés directement sur WhatsApp en un instant avec notre système de message pré-rempli.',
      tabAll: 'Tout',
      tabBurgers: 'Smash Burgers',
      tabTacos: 'Tacos Gratinés',
      tabPaninis: 'Paninis & Snacks',
      tabLoaded: 'Loaded Fries',
      btnOrder: 'Commander',
      groupBannerTitle: 'Vous avez un groupe ou une commande spéciale ?',
      groupBannerDesc: 'Menus étudiants, formules combos avec boisson & frites incluses, sauces en supplément à volonté.',
      groupBannerBtn: 'Demander le Menu Complet PDF',
      items: [
        {
          id: 'smash-double',
          category: 'burgers',
          title: 'Double Smash Koulway',
          tag: 'BEST-SELLER 🔥',
          tagColor: 'bg-primary text-white',
          price: 49,
          currency: 'DH',
          badge: 'Fait Maison',
          description: '2 steaks de bœuf frais smashés croustillants, double cheddar affiné fondant, oignons confits, sauce Koulway secrète, bun brioché artisanal doré.',
          image: sharedImages.smashBurger,
        },
        {
          id: 'tacos-supreme',
          category: 'tacos',
          title: 'Tacos Suprême Gratiné',
          tag: 'GRATINÉ XL 🧀',
          tagColor: 'bg-[#fea619] text-[#141b2b]',
          price: 42,
          currency: 'DH',
          badge: 'Double Viande',
          description: 'Poulet mariné paprika & fines herbes, viande hachée fraîche, sauce fromagère onctueuse maison, frites croustillantes et nappe mozzarella gratinée au four.',
          image: sharedImages.tacos,
        },
        {
          id: 'panini-royal',
          category: 'paninis',
          title: 'Panini Royal Crispy',
          tag: 'CROUSTILLANT 🥖',
          tagColor: 'bg-[#e1e8fd] text-[#141b2b]',
          price: 35,
          currency: 'DH',
          badge: '100% Poulet',
          description: 'Filets de tenders de poulet extra croustillants panés minute, mozzarella fondante, tomates fraîches, sauce Koulway douce et pain ciabatta pressé à chaud.',
          image: sharedImages.panini,
        },
        {
          id: 'loaded-fries',
          category: 'loaded',
          title: 'Loaded Fries Koulway',
          tag: 'À PARTAGER 🍟',
          tagColor: 'bg-[#ffdad5] text-[#b81313]',
          price: 28,
          currency: 'DH',
          badge: 'Snack Box',
          description: "Frites fraîches coupées main, sauce cheddar coulant à l'américaine, bacon de bœuf croustillant, rondelles de piments jalapeños et ciboulette fraîche.",
          image: sharedImages.loadedFries,
        },
      ],
    },
    banner: {
      title: 'Une fringale soudaine ?',
      desc: 'Envoyez-nous un simple message WhatsApp et recevez vos plats tout chauds chez vous à Tétouan !',
      btn: 'Commander sur WhatsApp (+212 669 689 856)',
    },
    location: {
      kicker: 'Emplacement Idéal & Facile d’Accès',
      title: 'Venez Nous Rendre Visite à Tétouan',
      subtitle: 'Situé au cœur de la ville, Koulway vous accueille dans un cadre moderne et climatisé, ou vous livre partout à Tétouan et ses alentours.',
      name: 'Restaurant Koulway',
      address: 'Tétouan Centre-Ville, Maroc',
      gpsLabel: 'Coordonnées GPS',
      accessDesc: 'Zone accessible à proximité des transports et des grands axes. Parking disponible à quelques pas.',
      hoursTitle: 'Horaires d’Ouverture',
      hoursBadge: 'Service continu 7 jours sur 7',
      hoursDays: 'Lundi – Dimanche :',
      hoursTime: '12:00 – 01:00 du matin',
      hoursLastOrderLabel: 'Dernière commande livraison :',
      hoursLastOrderTime: '00:30',
      needHelpTitle: 'Besoin d’aide ou commande ?',
      btnDirections: 'Itinéraire Google Maps',
      btnCall: 'Appeler le resto',
      mapBadgeStatus: 'Ouvert',
      mapDesc: 'Restaurant de grillades & fast-food artisanal',
      mapRating: '4.8 (350+ avis)',
      mapGpsBtn: 'Lancer le GPS (35.5809, -5.3534)',
    },
    reviews: {
      kicker: 'Ce Que Disent Nos Clients',
      title: 'Les Gourmands de Tétouan Témoignent',
      scoreLabel: 'Score Google Maps',
      items: [
        {
          id: '1',
          name: 'Yassine B.',
          initials: 'YB',
          role: 'Avis Local Guide • Il y a 1 semaine',
          rating: 5,
          comment: 'Franchement le meilleur smash burger de tout Tétouan ! Le bœuf est bien croustillant sur les bords, le fromage fond parfaitement et le bun brioché est un nuage. Livraison en 20 min chrono via WhatsApp.',
        },
        {
          id: '2',
          name: 'Salma L.',
          initials: 'SL',
          role: 'Cliente fidèle • Il y a 3 jours',
          rating: 5,
          comment: 'Le tacos suprême gratiné est une tuerie absolue ! La sauce fromagère n’est pas lourde et a un vrai goût maison. Équipe hyper polie et restaurant très propre. Incontournable lors de nos passages au nord.',
        },
        {
          id: '3',
          name: 'Mehdi T.',
          initials: 'MT',
          role: 'Avis vérifié Google • Il y a 2 semaines',
          rating: 5,
          comment: 'Rapport qualité-prix imbattable à Tétouan. Des tenders bien épicés, des loaded fries généreuses avec vrai cheddar et bacon de bœuf. Commande WhatsApp simple et rapide. Bravo !',
        },
      ],
    },
    faq: {
      kicker: 'Foire Aux Questions',
      title: 'Tout Ce Que Vous Devez Savoir',
      items: [
        {
          id: 'q1',
          question: 'Quels sont les quartiers de Tétouan couverts par la livraison ?',
          answer: 'Nous livrons sur l’ensemble de Tétouan : Centre-Ville, Wilaya, Ensanche, Touabel, Safir, ainsi que sur Martil et Cabo Negro sur demande spéciale. Les délais varient de 20 à 35 minutes selon l’affluence.',
        },
        {
          id: 'q2',
          question: 'Comment passer commande simplement par WhatsApp ?',
          answer: 'Cliquez simplement sur l’un de nos boutons "Commander sur WhatsApp". Un message pré-rempli s’ouvrira directement dans votre application avec les plats choisis. Il vous suffit d’indiquer votre adresse de livraison ou l’heure de retrait à emporter !',
        },
        {
          id: 'q3',
          question: 'Quels sont les moyens de paiement acceptés ?',
          answer: 'Nous acceptons le paiement en espèces (Cash on Delivery) à la réception de votre commande, ainsi que le paiement par carte bancaire sur place dans notre restaurant.',
        },
        {
          id: 'q4',
          question: 'Vos viandes sont-elles 100% fraîches et certifiées ?',
          answer: 'Absolument. Nous travaillons exclusivement avec des boucheries locales réputées de la région de Tétouan. Nos steaks de bœuf sont hachés et assaisonnés chaque jour, sans aucun produit surgelé.',
        },
      ],
    },
    contact: {
      kicker: 'Contactez-Nous & Réservations',
      title: 'Une Question, un Événement ou une Table ?',
      subtitle: 'Remplissez le formulaire ci-dessous pour nous envoyer une notification directe, ou contactez-nous directement sur WhatsApp.',
      formTitle: 'Envoyez-nous un message',
      nameLabel: 'Nom & Prénom',
      namePlaceholder: 'Votre nom complet',
      phoneLabel: 'Numéro de téléphone / WhatsApp',
      phonePlaceholder: '+212 6 XX XX XX XX',
      emailLabel: 'Adresse Email',
      emailPlaceholder: 'votre.email@exemple.com',
      bookingTypeLabel: 'Type de demande',
      bookingTypeTable: 'Réservation de table',
      bookingTypeTakeaway: 'Commande à emporter',
      bookingTypeGroup: 'Événement / Commande de groupe',
      bookingTypeGeneral: 'Question ou réclamation',
      guestsLabel: 'Nombre de personnes (si réservation)',
      guestsOption1: '1 à 2 personnes',
      guestsOption2: '3 à 4 personnes',
      guestsOption3: '5 à 8 personnes',
      guestsOption4: 'Plus de 8 personnes (Groupe)',
      messageLabel: 'Votre Message ou Détails de commande',
      messagePlaceholder: 'Indiquez la date, l’heure souhaitée ou toute précision pour notre équipe...',
      submitBtn: 'Envoyer ma notification',
      sendingBtn: 'Envoi en cours...',
      successTitle: 'Message reçu avec succès !',
      successDesc: 'Notre équipe Koulway Tétouan a bien reçu votre demande et vous répondra dans les plus brefs délais.',
      whatsappBookingShortcut: 'Ou réservez instantanément via WhatsApp',
    },
    footer: {
      brandDesc: 'Fast food raffiné et grillades authentiques à Tétouan. Ingrédients frais du terroir, saveurs fumées et livraison rapide sur toute la ville.',
      navTitle: 'Navigation',
      hoursTitle: 'Horaires & Service',
      service7j: 'Service Continu 7j/7',
      serviceHours: 'Lundi – Dimanche : 12:00 – 01:00',
      lastOrder: 'Dernière commande : 00:30',
      deliveryExpress: 'Livraison Express',
      deliveryCities: 'Tétouan Centre, Martil & Environs',
      locationTitle: 'Localisation',
      addressLine: 'Avenue des FAR, Centre-ville, Tétouan, Maroc',
      gpsLine: 'GPS: 35.5809907, -5.3534907',
      openMaps: 'Ouvrir sur Google Maps',
      phoneText: '+212 669 689 856',
      copyright: '© 2026 Koulway Fast Food & Grill Tétouan. Tous droits réservés.',
      madeWithLove: 'Fait avec passion au Nord du Maroc',
      socialTooltip: 'Suivez Koulway sur',
    },
    common: {
      currency: 'DH',
      scrollTop: 'Remonter en haut',
    },
  },

  darija: {
    nav: {
      menu: 'المينيو',
      about: 'شكون حنا',
      location: 'الموقع ديالنا',
      reviews: 'آراء الزبناء',
      faq: 'أسئلة شائعة',
      contact: 'تواصل وحجز',
      orderWhatsapp: 'كوموندي فـ واتساب',
      orderShort: 'كوموندي',
      hoursBadge: 'محلولين 12:00 - 01:00 د الليل',
    },
    hero: {
      cityBadge: 'تطوان، المغرب',
      ratingText: '4.8 / 5 (أكثر من 350 تقييم فـ گوگل)',
      kicker: 'ستريت فود وكريل أصيل فـ تطوان',
      titleStart: 'أحسن فاست فود',
      titleHighlight: 'كُورْمِي',
      titleEnd: 'فـ تطوان.',
      description: 'سماش برغر كايذوب فـ الفم ومقرمش من الجناب، طاكوس معلك بالفرماج سخون، بانيني دهبي وسوسات سرية ديالنا، طايبين بمكونات طرية من بلادنا كل نهار.',
      ctaWhatsapp: 'كوموندي دابا فـ واتساب',
      ctaMenu: 'اكتشف المينيو كامل',
      deliveryLabel: 'التوصيل',
      deliveryTime: '20 - 35 دقيقة',
      qualityLabel: 'الجودة',
      qualityValue: '100% لحم بقري طري',
      breadLabel: 'الخبز',
      breadValue: 'بريوش بلدي بالزبدة',
      floatingMeat: '🔥 100% لحم طري مشوي على الݣريل',
      floatingDeliveryTitle: 'توصيل سريع وسخون',
      floatingDeliverySub: 'تطوان سونتر • مرتيل • رينكون',
      floatingOrder: 'كوموندي',
    },
    features: {
      f1Title: 'سلعة طرية 100%',
      f1Desc: 'اللحم البقري كايتختار كل صباح عند الگزار، الخضرة مقرمشة وما كاين حتى شي حاجة مجمدة.',
      f2Title: 'وصفات بلدية أصيلة',
      f2Desc: 'خبز بريوش دهبي بالزبدة، سوسات الدار مصاوبين عندنا، وتتبيلة شمالية كاضرب فـ الراس.',
      f3Title: 'سربيس دغيا وبابتسامة',
      f3Desc: 'سواء جلستي فـ الصالة المريحة والمكيفة، ديتي الماكلة معاك، ولا وصلاتك تال الدار سخونة.',
      f4Title: 'التهلية وتمن مناسب',
      f4Desc: 'طباصل وسندويشات عامرين مزيان، فرماج كايسيل، وأحسن تمن مقابل المداق فـ تطوان كاملة.',
    },
    menu: {
      kicker: 'أكثر الأطباق طلباً فـ تطوان',
      title: 'كولواي الكلاسيك لي كايعجب الكل',
      subtitle: 'كوموندي ماكلتك ديريكت فـ واتساب فـ ثانية بميساج واجد بلا ما تعذب راسك.',
      tabAll: 'كلشي',
      tabBurgers: 'سماش برغر',
      tabTacos: 'طاكوس غراتيني',
      tabPaninis: 'بانيني وسناكس',
      tabLoaded: 'بطاطا لوديد',
      btnOrder: 'كوموندي دابا',
      groupBannerTitle: 'عندكم گروب ولا حفلة خاصة ولا عيد ميلاد؟',
      groupBannerDesc: 'عروض خاصة بالطلبة، كومبوات مع فريت ومشروب بارد، وسوسات فابور على حسابنا.',
      groupBannerBtn: 'طلب منيو الكروب PDF',
      items: [
        {
          id: 'smash-double',
          category: 'burgers',
          title: 'دوبل سماش كولواي',
          tag: 'الأكثر طلباً 🔥',
          tagColor: 'bg-primary text-white',
          price: 49,
          currency: 'درهم',
          badge: 'صنع منزلي',
          description: '2 كفتات بقرية مسماشية ومقرمشة، دوبل شيدار دايب معلك، بصلة معسلة، سوس كولواي السرية، وخبز بريوش طري بحال القطن.',
          image: sharedImages.smashBurger,
        },
        {
          id: 'tacos-supreme',
          category: 'tacos',
          title: 'طاكوس سوبريم غراتيني',
          tag: 'غراتيني XL 🧀',
          tagColor: 'bg-[#fea619] text-[#141b2b]',
          price: 42,
          currency: 'درهم',
          badge: 'دوبل لحم',
          description: 'دجاج متبل على الطريقة الشمالية، كفتة طرية، سوس فرماج خاثرة ديال الدار، فريت مقرمشة، ومغطس بالكامل بالموزاريلا فـ الفران.',
          image: sharedImages.tacos,
        },
        {
          id: 'panini-royal',
          category: 'paninis',
          title: 'بانيني رويال كريسبي',
          tag: 'مقرمش بزاف 🥖',
          tagColor: 'bg-[#e1e8fd] text-[#141b2b]',
          price: 35,
          currency: 'درهم',
          badge: '100% صدر دجاج',
          description: 'فيليه دجاج تندرز مقلي ومقرمش بزاف، موزاريلا دايبة، مطيشة طرية، سوس خفيفة بنينة، وخبز تشاباتا مپريسي ومحمر سخون.',
          image: sharedImages.panini,
        },
        {
          id: 'loaded-fries',
          category: 'loaded',
          title: 'لوديد فرايز كولواي',
          tag: 'للمشاركة 🍟',
          tagColor: 'bg-[#ffdad5] text-[#b81313]',
          price: 28,
          currency: 'درهم',
          badge: 'سناك بوكس',
          description: 'بطاطا مقلية طرية مقطعة باليد، سوس شيدار دايبة بزاف، طريفات بيكن بقري مقرمش، فليفلات هالابينو حارين ومعدنوس طري.',
          image: sharedImages.loadedFries,
        },
      ],
    },
    banner: {
      title: 'جاتك الجوعة دابا ودابا ؟',
      desc: 'صيفط لينا غير ميساج صغير فـ واتساب، وتوصلك الماكلة سخونة ومعلكة تال دارك فـ تطوان!',
      btn: 'كوموندي دابا فـ واتساب (0669689856 212+)',
    },
    location: {
      kicker: 'موقع ساهل وقريب ليك فـ قلب تطوان',
      title: 'أجي تفضل مرحبا بيك عندنا فـ تطوان',
      subtitle: 'فـ قلب المدينة، كولواي كايستقبلكم فـ صالة حديثة ومكيفة، وكنوصلو لكم فين ما كنتو فـ تطوان ونواحيها.',
      name: 'ريسطورو كولواي تطوان',
      address: 'شارع الجيش الملكي، وسط المدينة، تطوان، المغرب',
      gpsLabel: 'إحداثيات GPS',
      accessDesc: 'موقع ساهل حدا المواصلات والطرقات الكبيرة، وباركينغ متوفر غير فـ خطوات قليلة.',
      hoursTitle: 'أوقات الخدمة',
      hoursBadge: 'محلولين 7 أيام فـ السيمانة بلا انقطاع',
      hoursDays: 'من الإثنين حتى الأحد :',
      hoursTime: 'من 12:00 ديال النهار حتى 01:00 د الليل',
      hoursLastOrderLabel: 'آخر أجل لطلبات التوصيل :',
      hoursLastOrderTime: '00:30 د الليل',
      needHelpTitle: 'محتاج مساعدة ولا باغي تكوموندي؟',
      btnDirections: 'شوف الطريق فـ Google Maps',
      btnCall: 'عيط للمطعم ديريكت',
      mapBadgeStatus: 'محلولين دابا',
      mapDesc: 'مطعم مشاوي وفاست فود بلدي راقي',
      mapRating: '4.8 (أكثر من 350 تقييم)',
      mapGpsBtn: 'افتح الـ GPS (35.5809, -5.3534)',
    },
    reviews: {
      kicker: 'شنو كايقولو الزبناء لي داقو ماكلتنا',
      title: 'ولاد وبنات تطوان كايشهدو فـ حقنا',
      scoreLabel: 'نقطة تقييم گوگل',
      items: [
        {
          id: '1',
          name: 'ياسين ب.',
          initials: 'يب',
          role: 'مرشد محلي فـ گوگل • هادي سيمانة',
          rating: 5,
          comment: 'صراحة أحسن سماش برغر دوزتو فـ تطوان كاملة! اللحم مقرمش من الجناب والفرماج سايح بحال الزبدة والخبز رطب بزاف. التوصيل جاني فـ 20 دقيقة نيشان فـ واتساب.',
        },
        {
          id: '2',
          name: 'سلمى ل.',
          initials: 'سل',
          role: 'زبونة ديما • هادي 3 أيام',
          rating: 5,
          comment: 'طاكوس سوبريم غراتيني حاجة خيالية! السوس ديال الفرماج خفيفة ومصاوبة فـ الدار وما كاتقهرش فـ المعدة. الموظفين ضاحكين والريسطو نقي بزاف. ضروري نرجعو.',
        },
        {
          id: '3',
          name: 'مهدي ت.',
          initials: 'مت',
          role: 'تقييم مؤكد • هادي 2 سيمانات',
          rating: 5,
          comment: 'أحسن تمن مقابل الجودة فـ تطوان. التندرز متبلين واعرين، واللوديد فرايز بالفرماج والبيكن كايشبعو بصاح. الكوموند فـ واتساب ساهلة ومضبوطة. تبارك الله عليكم!',
        },
      ],
    },
    faq: {
      kicker: 'أسئلة كايسولوها لينا بزاف',
      title: 'كل ما تحتاج تعرفو قبل ما تكوموندي',
      items: [
        {
          id: 'q1',
          question: 'شنو هما الأحياء لي كايوصل ليهم ليفرور فـ تطوان؟',
          answer: 'كانوصلو لجميع أحياء تطوان: سونتر فيل، الولاية، إنسانتشي، التوابل، السفير، وحتى مرتيل وكابو نيكرو بطلب مسبق. الوقت ما بين 20 حتى 35 دقيقة على حسب الزحام.',
        },
        {
          id: 'q2',
          question: 'كيفاش نكوموندي ساهل بماهل فـ واتساب؟',
          answer: 'كليكي غير على زر "كوموندي فـ واتساب". غادي يتحل عندك تطبيق واتساب بميساج واجد فيه الأطباق ديالك. غير صيفط لادريسة ديالك ورقم التيليفون ويتحرك لعندك ليفرور!',
        },
        {
          id: 'q3',
          question: 'شنو هما طرق الخلاص لي كتقبلو؟',
          answer: 'كنقبلو الخلاص كاش (فلوس يد بيد) مع ليفرور ملي تستلم الكوموند ديالك سخونة، وكاين حتى الخلاص بالكارط بنكية إلى جيتي عندنا للمطعم.',
        },
        {
          id: 'q4',
          question: 'واش اللحوم ديالكم طرية ومضمونة 100%؟',
          answer: 'أكيد وبلا شك. كنتعاملو غير مع الگزارة المعروفين والموثوقين فـ تطوان ونواحيها. الكفتة واللحم كايتطحنو ويتبلو يومياً وما كاين حتى برودوي مكونجلي نهائياً.',
        },
      ],
    },
    contact: {
      kicker: 'تواصل معنا وحجز طاولتك',
      title: 'عندك سؤال، طلبية كبيرة ولا باغي تحجز طاولة؟',
      subtitle: 'عمر المعلومات فـ الفورمولير لتحت باش توصلنا رسالتك فـ الحين، ولا صيفط لينا ديريكت فـ واتساب.',
      formTitle: 'صيفط لينا رسالة',
      nameLabel: 'الاسم والنسب',
      namePlaceholder: 'الاسم الكامل ديالك',
      phoneLabel: 'نمرة التيليفون / واتساب',
      phonePlaceholder: '06 XX XX XX XX',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'example@gmail.com',
      bookingTypeLabel: 'نوع الطلب',
      bookingTypeTable: 'حجز طاولة فـ المطعم',
      bookingTypeTakeaway: 'طلبية واجدة ديديها معاك',
      bookingTypeGroup: 'طلبية گروب ولا حفلة',
      bookingTypeGeneral: 'استفسار أو ملاحظة',
      guestsLabel: 'عدد الأشخاص (إلى كان حجز)',
      guestsOption1: '1 حتى 2 أشخاص',
      guestsOption2: '3 حتى 4 أشخاص',
      guestsOption3: '5 حتى 8 أشخاص',
      guestsOption4: 'أكثر من 8 أشخاص (كروب كبير)',
      messageLabel: 'الرسالة ديالك أو تفاصيل الطلبية',
      messagePlaceholder: 'كتب لينا الوقت ولا الساعة لي باغي ولا أي ملاحظة تهمنا...',
      submitBtn: 'إرسال الرسالة دابا',
      sendingBtn: 'جاري الإرسال...',
      successTitle: 'توصلنا بالرسالة ديالك بنجاح!',
      successDesc: 'الفريق ديال كولواي تطوان غادي يجاوبك فـ أقرب وقت ممكن.',
      whatsappBookingShortcut: 'أو حجز فـ ثانية ديريكت عبر واتساب',
    },
    footer: {
      brandDesc: 'فاست فود راقي ومشاوي أصيلة فـ تطوان. مكونات طرية من بلادنا، مذاق مدخن وتوصيل سريع فـ تطوان كاملة.',
      navTitle: 'صفحات الموقع',
      hoursTitle: 'أوقات العمل والتوصيل',
      service7j: 'محلولين 7/7 أيام',
      serviceHours: 'من الإثنين للأحد : 12:00 – 01:00 د الليل',
      lastOrder: 'آخر كوموند للتوصيل : 00:30',
      deliveryExpress: 'توصيل إكسپريس',
      deliveryCities: 'تطوان سونتر، مرتيل والنواحي',
      locationTitle: 'فين كاينين',
      addressLine: 'شارع الجيش الملكي، وسط المدينة، تطوان، المغرب',
      gpsLine: 'GPS: 35.5809907, -5.3534907',
      openMaps: 'افتح فـ Google Maps',
      phoneText: '0669689856 212+',
      copyright: '© 2026 كولواي فاست فود و كريل تطوان. جميع الحقوق محفوظة.',
      madeWithLove: 'مصاوب بكل حب فـ شمال المغرب الغالي',
      socialTooltip: 'تابع كولواي فـ',
    },
    common: {
      currency: 'درهم',
      scrollTop: 'طلع للفوق',
    },
  },

  es: {
    nav: {
      menu: 'Menú',
      about: 'Nosotros',
      location: 'Ubicación',
      reviews: 'Opiniones',
      faq: 'Preguntas',
      contact: 'Contacto & Reserva',
      orderWhatsapp: 'Pedir por WhatsApp',
      orderShort: 'Pedir',
      hoursBadge: 'Abierto 12:00 - 01:00',
    },
    hero: {
      cityBadge: 'Tetuán, Marruecos',
      ratingText: '4.8 / 5 (+350 reseñas en Google)',
      kicker: 'Street Craft & Parrilla Auténtica',
      titleStart: 'El Mejor Fast-Food',
      titleHighlight: 'Gourmet',
      titleEnd: 'en Tetuán.',
      description: 'Smash burgers crujientes y jugosas, tacos franceses gratinados al horno, paninis dorados y salsas secretas caseras con ingredientes frescos del norte de Marruecos.',
      ctaWhatsapp: 'Pedir por WhatsApp',
      ctaMenu: 'Ver la Carta Completa',
      deliveryLabel: 'Envío',
      deliveryTime: '20 - 35 min',
      qualityLabel: 'Calidad',
      qualityValue: '100% Carne Fresca',
      breadLabel: 'Pan',
      breadValue: 'Brioche Artesano',
      floatingMeat: '🔥 100% Carne Fresca a la Parrilla',
      floatingDeliveryTitle: 'Entrega Rápida',
      floatingDeliverySub: 'Tetuán Centro • Martil • Rincón',
      floatingOrder: 'Pedir',
    },
    features: {
      f1Title: 'Ingredientes 100% Frescos',
      f1Desc: 'Carne vacuna seleccionada cada mañana, verduras crujientes del día y cero productos congelados.',
      f2Title: 'Recetas Artesanales',
      f2Desc: 'Panes brioche dorados con mantequilla ligera, salsas de la casa y especias tradicionales del norte.',
      f3Title: 'Servicio Ágil y Cercano',
      f3Desc: 'En nuestro moderno salón climatizado, para llevar o con entrega caliente a domicilio en tiempo récord.',
      f4Title: 'Generosidad y Precio Justo',
      f4Desc: 'Porciones copiosas, queso fundido desbordante y la mejor relación sabor-precio de toda la ciudad.',
    },
    menu: {
      kicker: 'Nuestros Platos Más Vendidos',
      title: 'Los Favoritos de Koulway',
      subtitle: 'Haz tu pedido directamente por WhatsApp en un instante con nuestro mensaje preconfigurado.',
      tabAll: 'Todo',
      tabBurgers: 'Smash Burgers',
      tabTacos: 'Tacos Gratinados',
      tabPaninis: 'Paninis & Snacks',
      tabLoaded: 'Patatas Loaded',
      btnOrder: 'Pedir',
      groupBannerTitle: '¿Tienes un grupo grande o un pedido especial?',
      groupBannerDesc: 'Menús para estudiantes, combos con bebida y patatas incluidas, salsas ilimitadas.',
      groupBannerBtn: 'Descargar Carta Completa PDF',
      items: [
        {
          id: 'smash-double',
          category: 'burgers',
          title: 'Double Smash Koulway',
          tag: 'MÁS VENDIDO 🔥',
          tagColor: 'bg-primary text-white',
          price: 49,
          currency: 'DH',
          badge: 'Casero',
          description: '2 filetes de ternera fresca aplastados y crujientes, doble cheddar fundido, cebolla caramelizada, salsa secreta Koulway en pan brioche artesano.',
          image: sharedImages.smashBurger,
        },
        {
          id: 'tacos-supreme',
          category: 'tacos',
          title: 'Tacos Supremo Gratinado',
          tag: 'GRATINADO XL 🧀',
          tagColor: 'bg-[#fea619] text-[#141b2b]',
          price: 42,
          currency: 'DH',
          badge: 'Doble Carne',
          description: 'Pollo marinado con pimentón dulce, ternera picada fresca, suave salsa de queso casera, patatas fritas y cubierta de mozzarella gratinada al horno.',
          image: sharedImages.tacos,
        },
        {
          id: 'panini-royal',
          category: 'paninis',
          title: 'Panini Royal Crispy',
          tag: 'CRUJIENTE 🥖',
          tagColor: 'bg-[#e1e8fd] text-[#141b2b]',
          price: 35,
          currency: 'DH',
          badge: '100% Pollo',
          description: 'Tiras de pollo extra crujientes recién rebozadas, mozzarella fundida, tomate fresco, salsa Koulway en pan ciabatta tostado a presión.',
          image: sharedImages.panini,
        },
        {
          id: 'loaded-fries',
          category: 'loaded',
          title: 'Loaded Fries Koulway',
          tag: 'PARA COMPARTIR 🍟',
          tagColor: 'bg-[#ffdad5] text-[#b81313]',
          price: 28,
          currency: 'DH',
          badge: 'Snack Box',
          description: 'Patatas frescas cortadas a mano, salsa cheddar fundente americana, virutas de bacon crujiente de ternera, jalapeños y cebollino fresco.',
          image: sharedImages.loadedFries,
        },
      ],
    },
    banner: {
      title: '¿Hambre repentina en Tetuán?',
      desc: '¡Mándanos un mensaje por WhatsApp y recibe tus platos recién hechos y calientes en tu puerta!',
      btn: 'Pedir por WhatsApp (+212 669 689 856)',
    },
    location: {
      kicker: 'Ubicación Inmejorable y Fácil Acceso',
      title: 'Ven a Visitarnos en Tetuán',
      subtitle: 'Ubicado en pleno centro de Tetuán, Koulway te recibe en un espacio moderno y climatizado, o te lo entrega en cualquier rincón de la ciudad.',
      name: 'Restaurante Koulway',
      address: 'Centro de Tetuán, Marruecos',
      gpsLabel: 'Coordenadas GPS',
      accessDesc: 'Fácil acceso junto a las arterias principales de transporte. Aparcamiento a solo unos pasos.',
      hoursTitle: 'Horario de Apertura',
      hoursBadge: 'Servicio continuo los 7 días de la semana',
      hoursDays: 'Lunes a Domingo :',
      hoursTime: '12:00 – 01:00 de la madrugada',
      hoursLastOrderLabel: 'Último pedido a domicilio :',
      hoursLastOrderTime: '00:30',
      needHelpTitle: '¿Preguntas o pedido inmediato?',
      btnDirections: 'Cómo llegar en Google Maps',
      btnCall: 'Llamar al restaurante',
      mapBadgeStatus: 'Abierto',
      mapDesc: 'Restaurante de parrilla & fast-food artesanal',
      mapRating: '4.8 (350+ valoraciones)',
      mapGpsBtn: 'Iniciar GPS (35.5809, -5.3534)',
    },
    reviews: {
      kicker: 'Lo Que Dicen Nuestros Clientes',
      title: 'Testimonios de los Gourmets de Tetuán',
      scoreLabel: 'Puntuación Google Maps',
      items: [
        {
          id: '1',
          name: 'Yassine B.',
          initials: 'YB',
          role: 'Guía Local Google • Hace 1 semana',
          rating: 5,
          comment: '¡Sinceramente la mejor smash burger de todo Tetuán! Carne bien crujiente en los bordes, queso perfectamente derretido y pan brioche esponjoso. Entrega en 20 minutos por WhatsApp.',
        },
        {
          id: '2',
          name: 'Salma L.',
          initials: 'SL',
          role: 'Clienta habitual • Hace 3 días',
          rating: 5,
          comment: '¡El tacos supremo gratinado es una maravilla! La salsa quesera no es nada pesada y tiene verdadero sabor casero. El personal es súper atento y el local impecable.',
        },
        {
          id: '3',
          name: 'Mehdi T.',
          initials: 'MT',
          role: 'Opinión verificada • Hace 2 semanas',
          rating: 5,
          comment: 'Relación calidad-precio insuperable en Tetuán. Tenders bien condimentados, patatas cargadas con auténtico cheddar y bacon. Pedido por WhatsApp facilísimo y rápido.',
        },
      ],
    },
    faq: {
      kicker: 'Preguntas Frecuentes',
      title: 'Todo Lo Que Necesitas Saber',
      items: [
        {
          id: 'q1',
          question: '¿Qué barrios de Tetuán cubre el reparto a domicilio?',
          answer: 'Repartimos en todo Tetuán: Centro, Wilaya, Ensanche, Touabel, Safir, así como en Martil y Cabo Negro bajo petición. El plazo habitual es de 20 a 35 minutos.',
        },
        {
          id: 'q2',
          question: '¿Cómo hacer un pedido fácilmente por WhatsApp?',
          answer: 'Simplemente pulsa cualquiera de nuestros botones "Pedir por WhatsApp". Se abrirá la app con el mensaje listo con tus platos. ¡Solo dinos tu dirección y listo!',
        },
        {
          id: 'q3',
          question: '¿Cuáles son los métodos de pago admitidos?',
          answer: 'Aceptamos pago en efectivo contra entrega al recibir tu pedido, así como tarjeta de crédito/débito directamente en nuestro restaurante.',
        },
        {
          id: 'q4',
          question: '¿La carne es 100% fresca y certificada?',
          answer: 'Por supuesto. Trabajamos exclusivamente con carnicerías locales reconocidas de la región de Tetuán. Picamos y sazonamos la carne a diario sin congelados.',
        },
      ],
    },
    contact: {
      kicker: 'Contáctanos y Reservas',
      title: '¿Tienes una Consulta, Evento o Mesa?',
      subtitle: 'Completa el formulario a continuación para enviarnos una notificación directa o escríbenos directamente por WhatsApp.',
      formTitle: 'Envíanos un mensaje',
      nameLabel: 'Nombre y Apellidos',
      namePlaceholder: 'Tu nombre completo',
      phoneLabel: 'Teléfono / WhatsApp',
      phonePlaceholder: '+212 6 XX XX XX XX',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'tu.correo@ejemplo.com',
      bookingTypeLabel: 'Tipo de solicitud',
      bookingTypeTable: 'Reserva de mesa',
      bookingTypeTakeaway: 'Pedido para llevar',
      bookingTypeGroup: 'Evento o pedido de grupo',
      bookingTypeGeneral: 'Consulta o comentario',
      guestsLabel: 'Número de comensales (si es reserva)',
      guestsOption1: '1 a 2 personas',
      guestsOption2: '3 a 4 personas',
      guestsOption3: '5 a 8 personas',
      guestsOption4: 'Más de 8 personas (Grupo)',
      messageLabel: 'Tu mensaje o detalles del pedido',
      messagePlaceholder: 'Indica la fecha, hora deseada o cualquier preferencia para nuestro equipo...',
      submitBtn: 'Enviar notificación',
      sendingBtn: 'Enviando...',
      successTitle: '¡Mensaje recibido con éxito!',
      successDesc: 'El equipo de Koulway Tetuán ha recibido tu mensaje y te responderá a la mayor brevedad posible.',
      whatsappBookingShortcut: 'O reserva al instante por WhatsApp',
    },
    footer: {
      brandDesc: 'Comida rápida gourmet y parrilladas auténticas en Tetuán. Ingredientes frescos de la región, sabor ahumado y entrega veloz en toda la ciudad.',
      navTitle: 'Navegación',
      hoursTitle: 'Horario y Servicio',
      service7j: 'Servicio Continuo 7/7',
      serviceHours: 'Lunes a Domingo : 12:00 – 01:00',
      lastOrder: 'Último pedido : 00:30',
      deliveryExpress: 'Reparto Express',
      deliveryCities: 'Tetuán Centro, Martil y Alrededores',
      locationTitle: 'Ubicación',
      addressLine: 'Avenue des FAR, Centro, Tetuán, Marruecos',
      gpsLine: 'GPS: 35.5809907, -5.3534907',
      openMaps: 'Abrir en Google Maps',
      phoneText: '+212 669 689 856',
      copyright: '© 2026 Koulway Fast Food & Grill Tetuán. Todos los derechos reservados.',
      madeWithLove: 'Hecho con pasión en el Norte de Marruecos',
      socialTooltip: 'Sigue a Koulway en',
    },
    common: {
      currency: 'DH',
      scrollTop: 'Volver arriba',
    },
  },

  en: {
    nav: {
      menu: 'Menu',
      about: 'About',
      location: 'Location',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact & Booking',
      orderWhatsapp: 'Order on WhatsApp',
      orderShort: 'Order',
      hoursBadge: 'Open 12:00 - 01:00',
    },
    hero: {
      cityBadge: 'Tetouan, Morocco',
      ratingText: '4.8 / 5 (350+ Google reviews)',
      kicker: 'Authentic Street Craft & Grill',
      titleStart: 'The Best of Gourmet',
      titleHighlight: 'Fast-Food',
      titleEnd: 'in Tetouan.',
      description: 'Crispy melt-in-your-mouth smash burgers, oven-baked cheesy tacos, golden paninis, and signature secret sauces prepared with fresh Moroccan local ingredients.',
      ctaWhatsapp: 'Order on WhatsApp',
      ctaMenu: 'Discover Menu',
      deliveryLabel: 'Delivery',
      deliveryTime: '20 - 35 min',
      qualityLabel: 'Quality',
      qualityValue: '100% Fresh Beef',
      breadLabel: 'Buns',
      breadValue: 'Artisanal Brioche',
      floatingMeat: '🔥 100% Fresh Grilled Meat',
      floatingDeliveryTitle: 'Fast Delivery',
      floatingDeliverySub: 'Tetouan Downtown • Martil • Rincon',
      floatingOrder: 'Order',
    },
    features: {
      f1Title: '100% Fresh Ingredients',
      f1Desc: 'Freshly sourced beef ground every morning, crispy daily vegetables, and zero frozen items.',
      f2Title: 'Artisanal Recipes',
      f2Desc: 'Toasted golden buttery brioche buns, house-crafted signature sauces, and northern spice blends.',
      f3Title: 'Warm & Rapid Service',
      f3Desc: 'Dine in our modern air-conditioned hall, take away, or get steaming delivery in record time.',
      f4Title: 'Generosity & Fair Price',
      f4Desc: 'Generous portions, dripping cheese, and the absolute best value-for-flavor in all of Tetouan.',
    },
    menu: {
      kicker: 'Our Recommended Best-Sellers',
      title: 'The Koulway Essentials',
      subtitle: 'Order your favorites directly via WhatsApp in seconds with our pre-formatted instant message.',
      tabAll: 'All',
      tabBurgers: 'Smash Burgers',
      tabTacos: 'Cheesy Tacos',
      tabPaninis: 'Paninis & Snacks',
      tabLoaded: 'Loaded Fries',
      btnOrder: 'Order',
      groupBannerTitle: 'Hosting a group or need a special event package?',
      groupBannerDesc: 'Student menus, meal combos with drinks and fries included, unlimited house sauces.',
      groupBannerBtn: 'Request Full Menu PDF',
      items: [
        {
          id: 'smash-double',
          category: 'burgers',
          title: 'Double Smash Koulway',
          tag: 'BEST-SELLER 🔥',
          tagColor: 'bg-primary text-white',
          price: 49,
          currency: 'DH',
          badge: 'Homemade',
          description: '2 crispy smashed fresh beef patties, melted aged cheddar, caramelized onions, secret Koulway sauce on a toasted artisanal brioche bun.',
          image: sharedImages.smashBurger,
        },
        {
          id: 'tacos-supreme',
          category: 'tacos',
          title: 'Tacos Supreme Gratiné',
          tag: 'GRATINÉ XL 🧀',
          tagColor: 'bg-[#fea619] text-[#141b2b]',
          price: 42,
          currency: 'DH',
          badge: 'Double Meat',
          description: 'Paprika marinated chicken, fresh ground beef, creamy homemade cheese sauce, golden fries, blanketed in oven-baked mozzarella cheese.',
          image: sharedImages.tacos,
        },
        {
          id: 'panini-royal',
          category: 'paninis',
          title: 'Panini Royal Crispy',
          tag: 'EXTRA CRISPY 🥖',
          tagColor: 'bg-[#e1e8fd] text-[#141b2b]',
          price: 35,
          currency: 'DH',
          badge: '100% Chicken',
          description: 'Freshly breaded extra crispy chicken tenders, gooey melted mozzarella, ripe tomatoes, gentle Koulway sauce on pressed hot ciabatta.',
          image: sharedImages.panini,
        },
        {
          id: 'loaded-fries',
          category: 'loaded',
          title: 'Loaded Fries Koulway',
          tag: 'TO SHARE 🍟',
          tagColor: 'bg-[#ffdad5] text-[#b81313]',
          price: 28,
          currency: 'DH',
          badge: 'Snack Box',
          description: 'Hand-cut fresh fries drenched in warm American cheddar cheese sauce, crispy beef bacon bits, spicy jalapeño slices, and fresh chives.',
          image: sharedImages.loadedFries,
        },
      ],
    },
    banner: {
      title: 'Craving an unforgettable meal right now?',
      desc: 'Send us a WhatsApp message and receive your steaming delicious food at your doorstep in Tetouan!',
      btn: 'Order on WhatsApp (+212 669 689 856)',
    },
    location: {
      kicker: 'Prime Location & Easy Access',
      title: 'Come Visit Us in Tetouan',
      subtitle: 'Located right in the center of Tetouan, Koulway welcomes you in a modern air-conditioned restaurant, or delivers across the city.',
      name: 'Koulway Restaurant',
      address: 'Downtown Tetouan, Morocco',
      gpsLabel: 'GPS Coordinates',
      accessDesc: 'Accessible central zone near public transportation and main avenues. Parking available within short walking distance.',
      hoursTitle: 'Opening Hours',
      hoursBadge: 'Continuous service 7 days a week',
      hoursDays: 'Monday – Sunday :',
      hoursTime: '12:00 PM – 01:00 AM',
      hoursLastOrderLabel: 'Last delivery order :',
      hoursLastOrderTime: '00:30 AM',
      needHelpTitle: 'Need assistance or ready to order?',
      btnDirections: 'Google Maps Directions',
      btnCall: 'Call the Restaurant',
      mapBadgeStatus: 'Open Now',
      mapDesc: 'Gourmet street food & artisanal grill restaurant',
      mapRating: '4.8 (350+ reviews)',
      mapGpsBtn: 'Open GPS (35.5809, -5.3534)',
    },
    reviews: {
      kicker: 'What Our Customers Say',
      title: 'Testimonials From Tetouan Gourmets',
      scoreLabel: 'Google Maps Score',
      items: [
        {
          id: '1',
          name: 'Yassine B.',
          initials: 'YB',
          role: 'Google Local Guide • 1 week ago',
          rating: 5,
          comment: 'Hands down the finest smash burger in Tetouan! Crispy beef edges, cheddar melted to perfection, and pillow-soft brioche bun. Delivery took just 20 minutes via WhatsApp.',
        },
        {
          id: '2',
          name: 'Salma L.',
          initials: 'SL',
          role: 'Regular customer • 3 days ago',
          rating: 5,
          comment: 'The tacos suprême gratiné is phenomenal! The cheese sauce is smooth and truly tastes homemade. Friendly staff, spotless dining room. Our go-to spot in the north.',
        },
        {
          id: '3',
          name: 'Mehdi T.',
          initials: 'MT',
          role: 'Verified Google Review • 2 weeks ago',
          rating: 5,
          comment: 'Unbeatable value in Tetouan. Flavorful spicy tenders, super generous loaded fries with real cheddar and beef bacon. Ordering via WhatsApp was seamless. Kudos!',
        },
      ],
    },
    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Everything You Need to Know',
      items: [
        {
          id: 'q1',
          question: 'Which neighborhoods in Tetouan are covered by delivery?',
          answer: 'We deliver throughout Tetouan: Downtown, Wilaya, Ensanche, Touabel, Safir, and to Martil and Cabo Negro upon request. Deliveries typically arrive in 20 to 35 minutes.',
        },
        {
          id: 'q2',
          question: 'How do I easily order through WhatsApp?',
          answer: 'Simply click any "Order on WhatsApp" button. A pre-filled message will open with your selected items. Send your delivery address or pickup time, and we start cooking!',
        },
        {
          id: 'q3',
          question: 'What payment methods do you accept?',
          answer: 'We accept Cash on Delivery upon receiving your meal, as well as credit/debit card payment in person at our restaurant counter.',
        },
        {
          id: 'q4',
          question: 'Are your meats 100% fresh and certified?',
          answer: 'Absolutely. We work exclusively with certified local butcheries in Tetouan. Our beef is freshly ground and seasoned every single day with zero frozen meats.',
        },
      ],
    },
    contact: {
      kicker: 'Get in Touch & Table Bookings',
      title: 'Questions, Group Events, or Table Reservation?',
      subtitle: 'Complete the form below to send an instant email notification to our management, or reach out to us on WhatsApp.',
      formTitle: 'Send us a message',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your full name',
      phoneLabel: 'Phone / WhatsApp Number',
      phonePlaceholder: '+212 6 XX XX XX XX',
      emailLabel: 'Email Address',
      emailPlaceholder: 'your.email@example.com',
      bookingTypeLabel: 'Request Type',
      bookingTypeTable: 'Table Reservation',
      bookingTypeTakeaway: 'Takeaway Order',
      bookingTypeGroup: 'Group / Catering Event',
      bookingTypeGeneral: 'General Inquiry / Feedback',
      guestsLabel: 'Party Size (for reservations)',
      guestsOption1: '1 to 2 people',
      guestsOption2: '3 to 4 people',
      guestsOption3: '5 to 8 people',
      guestsOption4: 'More than 8 people (Group)',
      messageLabel: 'Your Message or Order Notes',
      messagePlaceholder: 'Tell us your preferred date, time, or dietary notes...',
      submitBtn: 'Send Notification',
      sendingBtn: 'Sending...',
      successTitle: 'Message successfully sent!',
      successDesc: 'The Koulway Tetouan team has received your message and will get back to you shortly.',
      whatsappBookingShortcut: 'Or book instantly via WhatsApp',
    },
    footer: {
      brandDesc: 'Refined gourmet fast-food and authentic grill in Tetouan. Fresh local ingredients, smoky aromas, and fast city-wide delivery.',
      navTitle: 'Navigation',
      hoursTitle: 'Hours & Service',
      service7j: 'Continuous Service 7/7',
      serviceHours: 'Monday – Sunday : 12:00 PM – 01:00 AM',
      lastOrder: 'Last order : 00:30 AM',
      deliveryExpress: 'Express Delivery',
      deliveryCities: 'Tetouan Center, Martil & Environs',
      locationTitle: 'Location',
      addressLine: 'Avenue des FAR, Downtown, Tetouan, Morocco',
      gpsLine: 'GPS: 35.5809907, -5.3534907',
      openMaps: 'Open in Google Maps',
      phoneText: '+212 669 689 856',
      copyright: '© 2026 Koulway Fast Food & Grill Tetouan. All rights reserved.',
      madeWithLove: 'Crafted with passion in Northern Morocco',
      socialTooltip: 'Follow Koulway on',
    },
    common: {
      currency: 'DH',
      scrollTop: 'Back to top',
    },
  },
};
