import type { Dictionary, Locale } from '@/content/dictionaries';
import {
  academicTrack,
  professionalTrack,
  type TimelineEntry,
} from '@/content/timeline';

function TimelineColumn({
  label,
  entries,
  variant,
  lang,
  dict,
}: {
  label: string;
  entries: TimelineEntry[];
  variant: 'professional' | 'academic';
  lang: Locale;
  dict: Dictionary;
}) {
  const isProfessional = variant === 'professional';

  return (
    <div
      className={`relative border-l border-graphite-700/60 pl-6 ${
        isProfessional ? 'lg:border-l-0 lg:border-r lg:pl-0 lg:pr-8' : 'lg:pl-8'
      }`}
    >
      <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.15em] text-graphite-300">
        {label}
      </h3>

      <ol className="space-y-8">
        {entries.map((entry) => {
          const title = lang === 'pt' ? entry.titlePt : entry.titleEn;
          const description =
            lang === 'pt' ? entry.descriptionPt : entry.descriptionEn;

          return (
            <li key={entry.id} className={`relative ${isProfessional ? 'lg:text-right' : ''}`}>
              <span
                className={`absolute top-1.5 h-2.5 w-2.5 rounded-full ${
                  entry.tbd ? 'border-2 border-dashed border-accent/60 bg-transparent' : 'bg-accent'
                } -left-[calc(1.5rem+5px)] ${
                  isProfessional
                    ? 'lg:left-auto lg:-right-[calc(2rem+5px)]'
                    : 'lg:-left-[calc(2rem+5px)]'
                }`}
                aria-hidden
              />

              <p className="text-xs font-medium uppercase tracking-wide text-graphite-500">
                {entry.tbd ? dict.timeline.periodTbd : entry.period}
                {entry.current && (
                  <span className="ml-2 rounded-full border border-accent/40 px-2 py-0.5 text-accent-light">
                    {dict.timeline.present}
                  </span>
                )}
              </p>
              <h4
                className={`mt-1 font-serif text-base font-semibold ${
                  entry.tbd ? 'text-graphite-400' : 'text-graphite-50'
                }`}
              >
                {title}
              </h4>
              {description && (
                <p className="mt-1 text-sm text-graphite-400">{description}</p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function TimelineSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section
      id="trajectory"
      className="scroll-mt-20 border-t border-graphite-800/60 bg-navy-900/40"
    >
      <div className="section">
        <p className="section-kicker">{dict.timeline.kicker}</p>
        <h2 className="section-title mt-2">{dict.timeline.title}</h2>
        <p className="mt-4 max-w-2xl text-graphite-300">{dict.timeline.intro}</p>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-0">
          <TimelineColumn
            label={dict.timeline.trackProfessional}
            entries={professionalTrack}
            variant="professional"
            lang={lang}
            dict={dict}
          />
          <TimelineColumn
            label={dict.timeline.trackAcademic}
            entries={academicTrack}
            variant="academic"
            lang={lang}
            dict={dict}
          />
        </div>
      </div>
    </section>
  );
}
