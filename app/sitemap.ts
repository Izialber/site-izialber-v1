import type { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';
import { locales } from '@/content/dictionaries';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteConfig.siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));
}
