import { home } from '@/content/emporio/home';
import Photo from './Photo';
import { Reveal, RevealGroup, RevealItem } from './Reveal';
import { Section, SectionHeading } from './ui';

export default function ProcessSteps() {
  const t = home.process;
  return (
    <Section tone="dark" id="processo">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading title={t.title} text={t.text} dark />
          </Reveal>
          <Reveal className="relative mt-10 aspect-[16/10] overflow-hidden" delay={0.1}>
            <Photo src="/images/processo-corte.jpg" alt={t.imageAlt} sizes="(min-width: 1024px) 40vw, 100vw" />
          </Reveal>
        </div>
        <RevealGroup as="ol" className="border-t border-osso-100/15 lg:col-span-7">
          {t.steps.map((step, i) => (
            <RevealItem
              as="li"
              key={step.title}
              className="grid grid-cols-[3rem_1fr] gap-4 border-b border-osso-100/15 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6 lg:py-8"
            >
              <span className="font-emporio-serif text-h3 leading-none text-dourado-light" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="text-h3 text-osso-50">{step.title}</h3>
                <p className="mt-2 max-w-[56ch] text-body text-osso-200">{step.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
