import Image from 'next/image';
import CtaSection from '@/components/emporio/CtaSection';
import PageHero from '@/components/emporio/PageHero';
import { Reveal, RevealGroup, RevealItem } from '@/components/emporio/Reveal';
import { Section, SectionHeading } from '@/components/emporio/ui';
import { asset } from '@/config/emporio';
import { couro } from '@/content/emporio/couro';
import { pageMetadata } from '../_lib/seo';

export const metadata = pageMetadata({
  title: couro.meta.title,
  description: couro.meta.description,
  path: '/couro-e-qualidade',
});

export default function CouroPage() {
  const t = couro;
  return (
    <>
      <PageHero title={t.hero.title} text={t.hero.text} image="/images/couro-tipos.svg" imageAlt={t.hero.imageAlt} />

      <Section tone="light">
        <Reveal>
          <SectionHeading title={t.types.title} />
        </Reveal>
        <RevealGroup as="ul" className="mt-12 grid gap-x-12 gap-y-0 border-t border-osso-300 md:grid-cols-2">
          {t.types.items.map((item) => (
            <RevealItem as="li" key={item.title} className="border-b border-osso-300 py-8">
              <h3 className="text-h3 text-ebano-900">{item.title}</h3>
              <p className="mt-2 max-w-[52ch] text-body text-couro-800">{item.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading title={t.origin.title} text={t.origin.text} />
          </Reveal>
          <Reveal className="relative aspect-[4/3] overflow-hidden lg:col-span-7" delay={0.1}>
            <Image
              src={asset('/images/couro-origem.svg')}
              alt={t.origin.imageAlt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <Reveal>
          <SectionHeading title={t.finishing.title} text={t.finishing.text} />
        </Reveal>
        <RevealGroup as="ul" className="mt-12 grid gap-x-12 gap-y-0 border-t border-osso-300 md:grid-cols-2">
          {t.finishing.items.map((item) => (
            <RevealItem as="li" key={item.title} className="border-b border-osso-300 py-8">
              <h3 className="text-h3 text-ebano-900">{item.title}</h3>
              <p className="mt-2 max-w-[52ch] text-body text-couro-800">{item.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading title={t.control.title} text={t.control.text} dark />
            </Reveal>
            <Reveal className="relative mt-10 aspect-[4/3] overflow-hidden" delay={0.1}>
              <Image
                src={asset('/images/couro-controle.svg')}
                alt={t.control.imageAlt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
          <RevealGroup as="ol" className="border-t border-osso-100/15 lg:col-span-7">
            {t.control.steps.map((step, i) => (
              <RevealItem
                as="li"
                key={step}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-osso-100/15 py-6 sm:grid-cols-[4rem_1fr] lg:py-8"
              >
                <span className="font-emporio-serif text-h3 leading-none text-dourado-light" aria-hidden="true">
                  {i + 1}
                </span>
                <p className="max-w-[56ch] text-body text-osso-200">{step}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section tone="alt">
        <Reveal>
          <SectionHeading title={t.sustainability.title} text={t.sustainability.text} />
        </Reveal>
      </Section>

      <CtaSection title={t.cta.title} text={t.cta.text} primaryCta={t.cta.primaryCta} />
    </>
  );
}
