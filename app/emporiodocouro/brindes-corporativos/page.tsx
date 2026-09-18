import Image from 'next/image';
import CtaSection from '@/components/emporio/CtaSection';
import PageHero from '@/components/emporio/PageHero';
import { Reveal, RevealGroup, RevealItem } from '@/components/emporio/Reveal';
import { Section, SectionHeading, SpecList } from '@/components/emporio/ui';
import { asset } from '@/config/emporio';
import { brindes } from '@/content/emporio/brindes';
import { pageMetadata } from '../_lib/seo';

export const metadata = pageMetadata({
  title: brindes.meta.title,
  description: brindes.meta.description,
  path: '/brindes-corporativos',
});

export default function BrindesPage() {
  const t = brindes;
  return (
    <>
      <PageHero title={t.hero.title} text={t.hero.text} image="/images/brindes-kit.svg" imageAlt={t.hero.imageAlt} />

      <Section tone="light">
        <Reveal>
          <SectionHeading title={t.line.title} text={t.line.text} />
        </Reveal>
        <RevealGroup
          as="ul"
          className="mt-12 grid gap-x-12 gap-y-0 border-t border-osso-300 md:grid-cols-2 lg:grid-cols-3"
        >
          {t.line.items.map((item) => (
            <RevealItem as="li" key={item.title} className="border-b border-osso-300 py-8">
              <h3 className="text-h3 text-ebano-900">{item.title}</h3>
              <p className="mt-2 max-w-[40ch] text-body text-couro-800">{item.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading title={t.customization.title} text={t.customization.text} />
            </Reveal>
            <Reveal className="relative mt-10 aspect-[4/3] overflow-hidden" delay={0.1}>
              <Image
                src={asset('/images/brindes-gravacao.svg')}
                alt={t.customization.imageAlt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7">
            <SpecList rows={t.customization.items} />
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading title={t.how.title} />
          </Reveal>
          <RevealGroup as="ol" className="border-t border-osso-300 lg:col-span-8">
            {t.how.steps.map((step, i) => (
              <RevealItem
                as="li"
                key={step}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-osso-300 py-6 sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-emporio-serif text-h3 leading-none text-dourado" aria-hidden="true">
                  {i + 1}
                </span>
                <p className="max-w-[56ch] text-lead text-ebano-900">{step}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaSection title={t.cta.title} text={t.cta.text} primaryCta={t.cta.primaryCta} />
    </>
  );
}
