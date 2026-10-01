import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://koulway.ma';
  const lastModified = new Date();

  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
      alternates: {
        languages: {
          fr: `${baseUrl}?lang=fr`,
          ar: `${baseUrl}?lang=darija`,
          es: `${baseUrl}?lang=es`,
          en: `${baseUrl}?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}#carte`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}#a-propos`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}#localisation`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}#avis`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}#faq`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  return routes;
}
