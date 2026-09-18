import type { Metadata } from 'next';
import { INDEXABLE, absoluteUrl, asset, company } from '@/config/emporio';

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

// Metadata por página. Canonical, Open Graph e indexação seguem INDEXABLE.
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const ogImage = asset('/images/og-default.png');

  return {
    title,
    description,
    alternates: INDEXABLE ? { canonical: url } : undefined,
    robots: INDEXABLE
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
    openGraph: {
      title: title.includes(company.name) ? title : `${title} | ${company.name}`,
      description,
      url,
      siteName: company.name,
      locale: 'pt_BR',
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: company.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
