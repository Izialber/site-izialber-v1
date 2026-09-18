import CtaSection from '@/components/emporio/CtaSection';
import PageHero from '@/components/emporio/PageHero';
import Photo from '@/components/emporio/Photo';
import { Reveal, RevealGroup, RevealItem } from '@/components/emporio/Reveal';
import { Section, SectionHeading, SpecList } from '@/components/emporio/ui';
import { company } from '@/config/emporio';
import { privateLabel } from '@/content/emporio/private-label';
import { pageMetadata } from '../_lib/seo';

export const metadata = pageMetadata({
  title: privateLabel.meta.title,
  description: privateLabel.meta.description,
  path: '/private-label',
});

const termValue = (v: string) => {
  if (v === 'minimumOrder') return company.minimumOrder;
  if (v === 'averageLeadTime') return company.averageLeadTime;
  return v;
};

export default function PrivateLabelPage() {
  const t = privateLabel;
  return (
    <>
      <PageHero
        title={t.hero.title}
        text={t.hero.text}
        image="/images/private-label-amostra.jpg"
        imageAlt={t.hero.imageAlt}
      />

      <Section tone="light">
        <Reveal>
          <SectionHeading title={t.steps.title} text={t.steps.text} />
        </Reveal>
        <RevealGroup as="ol" className="mt-12 border-t border-osso-300">
          {t.steps.items.map((step, i) => (
            <RevealItem
              as="li"
              key={step.title}
              className="grid gap-4 border-b border-osso-300 py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span className="font-emporio-serif text-h3 leading-none text-dourado" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="text-h3 text-ebano-900">{step.title}</h3>
              </div>
              <p className="max-w-[56ch] text-body text-couro-800 md:col-span-5">{step.text}</p>
              <div className="md:col-span-3">
                <p className="text-small text-couro-700">Entrega desta etapa</p>
                <p className="mt-1 text-body text-ebano-900">{step.delivers}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading title={t.terms.title} text={t.terms.text} />
          </Reveal>
          <Reveal className="lg:col-span-7">
            <SpecList rows={t.terms.rows.map(([k, v]) => [k, termValue(v)] as const)} />
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading title={t.customization.title} text={t.customization.text} />
            </Reveal>
            <Reveal className="relative mt-10 aspect-[4/3] overflow-hidden" delay={0.1}>
              <Photo src="/images/private-label-gravacao.jpg" alt={t.customization.imageAlt} sizes="(min-width: 1024px) 40vw, 100vw" />
            </Reveal>
          </div>
          <RevealGroup as="ul" className="border-t border-osso-300 lg:col-span-7">
            {t.customization.items.map((item) => (
              <RevealItem as="li" key={item.title} className="border-b border-osso-300 py-6 lg:py-8">
                <h3 className="text-h3 text-ebano-900">{item.title}</h3>
                <p className="mt-2 max-w-[60ch] text-body text-couro-800">{item.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaSection title={t.cta.title} text={t.cta.text} primaryCta={t.cta.primaryCta} />
    </>
  );
}
