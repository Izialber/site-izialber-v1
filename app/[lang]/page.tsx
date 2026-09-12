import { getDictionary, locales, type Locale } from '@/content/dictionaries';
import Hero from '@/components/Hero';
import PublicationsSection from '@/components/PublicationsSection';
import TimelineSection from '@/components/TimelineSection';
import ContactSection from '@/components/ContactSection';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LocalePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = getDictionary(params.lang);

  return (
    <>
      <Hero lang={params.lang} dict={dict} />
      <PublicationsSection lang={params.lang} dict={dict} />
      <TimelineSection lang={params.lang} dict={dict} />
      <ContactSection lang={params.lang} dict={dict} />
    </>
  );
}
