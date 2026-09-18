import CtaSection from '@/components/emporio/CtaSection';
import PageHero from '@/components/emporio/PageHero';
import Photo from '@/components/emporio/Photo';
import { Reveal, RevealGroup, RevealItem } from '@/components/emporio/Reveal';
import { Section, SectionHeading, SpecList, Stat } from '@/components/emporio/ui';
import { company } from '@/config/emporio';
import { fabrica } from '@/content/emporio/fabrica';
import { pageMetadata } from '../_lib/seo';

export const metadata = pageMetadata({
  title: fabrica.meta.title,
  description: fabrica.meta.description,
  path: '/a-fabrica',
});

const statValue = (key: string) => {
  if (key === 'minimumOrder') return company.minimumOrder;
  if (key === 'averageLeadTime') return company.averageLeadTime;
  return company.stats[key as keyof typeof company.stats];
};

export default function FabricaPage() {
  return (
    <>
      <PageHero
        title={fabrica.hero.title}
        text={fabrica.hero.text}
        image="/images/fabrica-galpao.jpg"
        imageAlt={fabrica.hero.imageAlt}
      />

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading title={fabrica.history.title} />
          </Reveal>
          <Reveal className="space-y-6 lg:col-span-8">
            {fabrica.history.paragraphs.map((p) => (
              <p key={p} className="max-w-[62ch] text-body text-couro-800">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section tone="alt">
        <Reveal>
          <SectionHeading title={fabrica.capacity.title} text={fabrica.capacity.text} />
        </Reveal>
        <RevealGroup className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {fabrica.capacity.rows.map(([label, key, unit]) => {
            const v = statValue(key);
            return (
              <RevealItem key={key}>
                <Stat value={v} label={unit ? `${label}, ${unit}` : label} />
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading title={fabrica.structure.title} />
            </Reveal>
            <Reveal className="relative mt-10 aspect-[4/3] overflow-hidden" delay={0.1}>
              <Photo src="/images/fabrica-maquina.jpg" alt={fabrica.structure.imageAlt} sizes="(min-width: 1024px) 40vw, 100vw" />
            </Reveal>
          </div>
          <RevealGroup as="ul" className="border-t border-osso-300 lg:col-span-7">
            {fabrica.structure.items.map((item) => (
              <RevealItem as="li" key={item.title} className="border-b border-osso-300 py-6 lg:py-8">
                <h3 className="text-h3 text-ebano-900">{item.title}</h3>
                <p className="mt-2 max-w-[60ch] text-body text-couro-800">{item.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading title={fabrica.team.title} text={fabrica.team.text} />
          </Reveal>
          <Reveal className="relative aspect-[4/3] overflow-hidden lg:col-span-7" delay={0.1}>
            <Photo src="/images/fabrica-equipe.jpg" alt={fabrica.team.imageAlt} sizes="(min-width: 1024px) 55vw, 100vw" />
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading title={fabrica.quality.title} text={fabrica.quality.text} />
          </Reveal>
          <Reveal className="lg:col-span-7">
            <SpecList
              rows={fabrica.quality.items.map((item, i) => [`Etapa ${i + 1}`, item] as const)}
            />
          </Reveal>
        </div>
      </Section>

      <CtaSection title={fabrica.cta.title} text={fabrica.cta.text} primaryCta={fabrica.cta.primaryCta} />
    </>
  );
}
