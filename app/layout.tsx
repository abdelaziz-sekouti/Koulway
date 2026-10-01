import type { Metadata, Viewport } from 'next';
import './globals.css';

const appUrl = process.env.APP_URL || 'https://koulway.ma';

export const viewport: Viewport = {
  themeColor: '#b7102a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: 'Koulway Restaurant Tetouan – Fast Food Gourmand & Grill Artisanal',
  description:
    'Koulway Grill & Fast Food Tétouan - Smash burgers croustillants, tacos gratinés, paninis artisanaux et livraison rapide. Commandez sur WhatsApp au +212669689856.',
  keywords: [
    'Koulway',
    'Koulway Tetouan',
    'Restaurant Tetouan',
    'Fast food Tetouan',
    'Smash burger Tetouan',
    'Tacos Tetouan',
    'Livraison Tetouan',
    'Grillades Tetouan',
    'Martil food delivery',
  ],
  authors: [{ name: 'Koulway Tetouan' }],
  creator: 'Koulway',
  publisher: 'Koulway Fast Food & Grill',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: appUrl,
    languages: {
      'fr-MA': `${appUrl}?lang=fr`,
      'ar-MA': `${appUrl}?lang=darija`,
      'es-ES': `${appUrl}?lang=es`,
      'en-US': `${appUrl}?lang=en`,
    },
  },
  openGraph: {
    title: 'Koulway Restaurant Tetouan – Fast Food Gourmand & Grill Artisanal',
    description:
      'Smash burgers croustillants, tacos généreusement gratinés, paninis artisanaux et sauces signatures à Tétouan. Livraison express via WhatsApp au +212669689856.',
    url: appUrl,
    siteName: 'Koulway Tétouan',
    locale: 'fr_FR',
    alternateLocale: ['ar_MA', 'es_ES', 'en_US'],
    type: 'website',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6j5BT498n8WFEuzRCLLJW5wZ_W8bHL_voZ8pROXRfIwBoH5_BSKv77v7S9dkZk2_mnDwlyS-ZrWUnJAHv9YFwGg4aL_GAJx7So5qvYWdIRNwm6DjS4vV5gUPAU3KMjsOK_x-YCpaBZF_IVWSK2XkHuXCxgfTCo6bjjAux4nJ_6WfjCCt3WYracGT_00fkjHIqSLLJVxqYofO5eTPC3R4BFObeCTmo1__GSTlzjsZlalrzFlmm7XXh',
        width: 1200,
        height: 630,
        alt: 'Koulway Tetouan Smash Burger and Grill Platter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koulway Restaurant Tetouan – Fast Food Gourmand & Grill Artisanal',
    description:
      'Le meilleur du fast food gourmand à Tétouan. Commandez directement sur WhatsApp au +212669689856.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6j5BT498n8WFEuzRCLLJW5wZ_W8bHL_voZ8pROXRfIwBoH5_BSKv77v7S9dkZk2_mnDwlyS-ZrWUnJAHv9YFwGg4aL_GAJx7So5qvYWdIRNwm6DjS4vV5gUPAU3KMjsOK_x-YCpaBZF_IVWSK2XkHuXCxgfTCo6bjjAux4nJ_6WfjCCt3WYracGT_00fkjHIqSLLJVxqYofO5eTPC3R4BFObeCTmo1__GSTlzjsZlalrzFlmm7XXh',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const restaurantStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FastFoodRestaurant',
  name: 'Koulway Restaurant Tétouan',
  image: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB6j5BT498n8WFEuzRCLLJW5wZ_W8bHL_voZ8pROXRfIwBoH5_BSKv77v7S9dkZk2_mnDwlyS-ZrWUnJAHv9YFwGg4aL_GAJx7So5qvYWdIRNwm6DjS4vV5gUPAU3KMjsOK_x-YCpaBZF_IVWSK2XkHuXCxgfTCo6bjjAux4nJ_6WfjCCt3WYracGT_00fkjHIqSLLJVxqYofO5eTPC3R4BFObeCTmo1__GSTlzjsZlalrzFlmm7XXh',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBHVksTLQUxOivddgXd1DaTvcw9j3WzEDjZIeqbgHPmLJAZpY2Ej6CmjN7jfohC15wLLpPtnEevfHU06ZaqxHdkEoczUqiXN_kHDiIwg-hNrIBaHPVTfN279qgnUp6pgjb5FQSUzGeIjGQ9pUuimuK9jvA2pp0ZoS99iiHLqh96MUyu7WN6-AWDiPUw5JmHliCOEGRMR11w_9L4yWRrXAOiy69eHBDcHFb_9g8n6-wRh6p_pimE5tnO',
  ],
  '@id': 'https://koulway.ma',
  url: 'https://koulway.ma',
  telephone: '+212669689856',
  priceRange: '20 DH - 70 DH',
  servesCuisine: ['Fast Food', 'Burgers', 'Tacos', 'Grill', 'Moroccan Street Food'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenue des FAR, Centre-ville',
    addressLocality: 'Tétouan',
    addressRegion: 'Tanger-Tétouan-Al Hoceïma',
    postalCode: '93000',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.5809907,
    longitude: -5.3534907,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '12:00',
      closes: '01:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '350',
    bestRating: '5',
    worstRating: '1',
  },
  potentialAction: {
    '@type': 'OrderAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://wa.me/212669689856?text=Bonjour%20Koulway',
      inLanguage: ['fr', 'ar', 'es', 'en'],
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModeOwnFleet',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantStructuredData),
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
