import type { Dictionary, Locale } from '@/content/dictionaries';
import { siteConfig } from '@/content/site';

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="border-t border-graphite-700/60">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-graphite-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div>
          <p className="font-serif text-graphite-100">Izialber Santos</p>
          <p>{dict.footer.location}</p>
        </div>
        <div className="flex gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-accent-light"
          >
            {dict.contact.emailLabel}
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-light"
          >
            {dict.contact.linkedinLabel}
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Izialber Santos. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
