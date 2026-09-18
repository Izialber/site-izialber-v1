import { home } from '@/content/emporio/home';
import { Reveal, RevealGroup, RevealItem } from './Reveal';
import { Section, SectionHeading } from './ui';

export default function Faq() {
  const t = home.faq;
  return (
    <Section tone="alt" id="faq">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <SectionHeading title={t.title} />
        </Reveal>
        <RevealGroup className="border-t border-osso-300 lg:col-span-8">
          {t.items.map((item) => (
            <RevealItem key={item.q}>
              <details className="group border-b border-osso-300">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-body font-medium text-ebano-900 transition-colors duration-150 hover:text-couro-700 [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-4 w-4 shrink-0 text-couro-700 transition-transform duration-200 group-open:rotate-45"
                  >
                    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 2v12M2 8h12" />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-6 text-body text-couro-800">{item.a}</p>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
