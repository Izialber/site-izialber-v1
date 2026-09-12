import Link from 'next/link';
import type { Dictionary, Locale } from '@/content/dictionaries';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const navItems = [
    { href: `/${lang}#publications`, label: dict.nav.publications },
    { href: `/${lang}#trajectory`, label: dict.nav.trajectory },
    { href: `/${lang}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-graphite-700/60 bg-navy-950/90 backdrop-blur">
      <div className="mx-auto max-w-content px-6 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <Link
            href={`/${lang}`}
            className="font-serif text-lg font-semibold tracking-tight text-graphite-50"
          >
            Izialber Santos
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-graphite-200 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-accent-light"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <LanguageSwitcher lang={lang} />
        </div>

        <nav className="mt-2 flex items-center gap-5 overflow-x-auto text-xs text-graphite-300 sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-accent-light"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
