import type { Dictionary, Locale } from '@/content/dictionaries';
import type { Publication } from '@/content/publications';

const statusStyles: Record<Publication['status'], string> = {
  published: 'text-accent-light border-accent/40',
  'in-progress': 'text-amber-300/90 border-amber-300/30',
  thesis: 'text-graphite-200 border-graphite-500/40',
};

export default function PublicationCard({
  lang,
  dict,
  publication,
}: {
  lang: Locale;
  dict: Dictionary;
  publication: Publication;
}) {
  const statusLabel =
    publication.status === 'published'
      ? dict.publications.statusPublished
      : publication.status === 'in-progress'
        ? dict.publications.statusInProgress
        : dict.publications.statusThesis;

  const title = lang === 'pt' ? publication.titlePt : publication.titleEn;
  const summary = lang === 'pt' ? publication.summaryPt : publication.summaryEn;

  return (
    <article className="card flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${statusStyles[publication.status]}`}
        >
          {statusLabel}
        </span>
        <span className="text-sm text-graphite-400">{publication.year}</span>
      </div>

      <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-graphite-50">
        {title}
      </h3>
      <p className="mt-1 text-sm text-graphite-400">{publication.venue}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite-200">
        {summary}
      </p>

      <div className="mt-5">
        {publication.link ? (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent-light hover:underline"
          >
            {dict.publications.viewLink} &rarr;
          </a>
        ) : (
          <span className="text-sm text-graphite-600">
            {dict.publications.linkPending}
          </span>
        )}
      </div>
    </article>
  );
}
