import { BRANDS, SHOW_BRANDS } from '@/config/emporio';
import { home } from '@/content/emporio/home';
import { Reveal, RevealGroup, RevealItem } from './Reveal';
import { Section, SectionHeading } from './ui';

export default function BrandsGrid() {
  if (!SHOW_BRANDS || BRANDS.length === 0) return null;
  const t = home.brands;
  return (
    <Section tone="alt" id="marcas">
      <Reveal>
        <SectionHeading title={t.title} text={t.text} />
      </Reveal>
      <RevealGroup
        as="ul"
        className="mt-12 grid grid-cols-2 border-l border-t border-osso-300 sm:grid-cols-3 lg:grid-cols-4"
      >
        {BRANDS.map((brand) => (
          <RevealItem
            as="li"
            key={brand}
            className="flex min-h-[7rem] items-center border-b border-r border-osso-300 px-5 py-6 sm:min-h-[8rem] sm:px-8"
          >
            <span className="font-emporio-serif text-h3 leading-tight text-ebano-900">{brand}</span>
          </RevealItem>
        ))}
      </RevealGroup>
      <p className="mt-6 max-w-[62ch] text-caption text-couro-700">{t.note}</p>
    </Section>
  );
}
