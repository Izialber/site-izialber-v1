import type { Metadata } from 'next';
import { getDictionary, locales, type Locale } from '@/content/dictionaries';
import { siteConfig } from '@/content/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocaleHtmlLang from '@/components/LocaleHtmlLang';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(params.lang);
  const url = `${siteConfig.siteUrl}/${params.lang}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: url,
      languages: {
        pt: `${siteConfig.siteUrl}/pt`,
        en: `${siteConfig.siteUrl}/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      siteName: siteConfig.name,
      locale: params.lang === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = getDictionary(params.lang);

  return (
    <>
      <LocaleHtmlLang lang={params.lang} />
      <Header lang={params.lang} dict={dict} />
      <main>{children}</main>
      <Footer lang={params.lang} dict={dict} />
    </>
  );
}
