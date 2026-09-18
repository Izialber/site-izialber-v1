import type { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';
import { BASE_PATH as EMPORIO_BASE_PATH, INDEXABLE as EMPORIO_INDEXABLE } from '@/config/emporio';

// Seção Empório do Couro (hospedagem temporária): bloqueada enquanto não indexável.
const emporioDisallow =
  !EMPORIO_INDEXABLE && EMPORIO_BASE_PATH !== '/' ? [`${EMPORIO_BASE_PATH.replace(/\/+$/, '')}/`] : [];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      ...(emporioDisallow.length > 0 ? { disallow: emporioDisallow } : {}),
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
