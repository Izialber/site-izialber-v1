import type { Metadata } from 'next';
import { Fraunces, Work_Sans } from 'next/font/google';
import Analytics from '@/components/emporio/Analytics';
import CookieBanner from '@/components/emporio/CookieBanner';
import Footer from '@/components/emporio/Footer';
import JsonLd from '@/components/emporio/JsonLd';
import Navbar from '@/components/emporio/Navbar';
import WhatsAppButton from '@/components/emporio/WhatsAppButton';
import { INDEXABLE, SITE_URL, company } from '@/config/emporio';
import './emporio.css';

const serif = Fraunces({
  subsets: ['latin'],
  variable: '--font-emporio-serif',
  display: 'swap',
  axes: ['opsz'],
});

const sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-emporio-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: company.name,
    template: `%s | ${company.name}`,
  },
  applicationName: company.name,
  robots: INDEXABLE
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function EmporioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`emporio-scope ${serif.variable} ${sans.variable} flex min-h-screen flex-col`}>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-osso-50 focus:px-4 focus:py-2 focus:text-ebano-900"
      >
        Ir para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <Analytics />
      <JsonLd />
    </div>
  );
}
