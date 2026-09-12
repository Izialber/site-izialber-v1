import type { Dictionary, Locale } from '@/content/dictionaries';
import { publications } from '@/content/publications';
import PublicationCard from './PublicationCard';

export default function PublicationsSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="publications" className="section scroll-mt-20">
      <p className="section-kicker">{dict.publications.kicker}</p>
      <h2 className="section-title mt-2">{dict.publications.title}</h2>
      <p className="mt-4 max-w-2xl text-graphite-300">{dict.publications.intro}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {publications.map((pub) => (
          <PublicationCard key={pub.id} lang={lang} dict={dict} publication={pub} />
        ))}
      </div>
    </section>
  );
}
