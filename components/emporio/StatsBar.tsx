import { company } from '@/config/emporio';
import { home } from '@/content/emporio/home';
import { Reveal, RevealGroup, RevealItem } from './Reveal';
import { Section, Stat } from './ui';

export default function StatsBar() {
  const t = home.stats;
  return (
    <Section tone="light" className="!py-16 lg:!py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <p className="max-w-[44ch] text-lead text-couro-800">{t.intro}</p>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-osso-300 pt-8 lg:col-span-7 lg:grid-cols-4 lg:border-t-0 lg:pt-0">
          {t.items.map((item) => (
            <RevealItem key={item.key}>
              <Stat value={company.stats[item.key]} label={item.label} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
