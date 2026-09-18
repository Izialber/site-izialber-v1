import type { MetadataRoute } from 'next';
import { INDEXABLE, NAV, absoluteUrl } from '@/config/emporio';

// Sitemap da seção. Vazio enquanto INDEXABLE for false.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!INDEXABLE) return [];
  const now = new Date();
  return [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...NAV.map((item) => ({
      url: absoluteUrl(item.path),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: item.path === '/contato' ? 0.9 : 0.8,
    })),
    { url: absoluteUrl('/privacidade'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
