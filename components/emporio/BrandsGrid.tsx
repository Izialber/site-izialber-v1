import { SHOW_BRANDS } from '@/config/emporio';
import { home } from '@/content/emporio/home';
import { Reveal } from './Reveal';
import { Section, SectionHeading } from './ui';

export default function BrandsGrid() {
  if (!SHOW_BRANDS) return null;
  const t = home.brands;
  return (
    <Section tone="alt" id="marcas">
      <Reveal>
        <SectionHeading title={t.title} text={t.text} />
      </Reveal>
      {t.note ? (
        <Reveal className="mt-6">
          <p className="max-w-[62ch] text-caption text-couro-700">{t.note}</p>
        </Reveal>
      ) : null}
    </Section>
  );
}
