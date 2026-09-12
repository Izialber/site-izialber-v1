import Link from 'next/link';
import type { Locale } from '@/content/dictionaries';

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const options: { code: Locale; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {options.map((opt, i) => (
        <span key={opt.code} className="flex items-center gap-1">
          {i > 0 && <span className="text-graphite-600">/</span>}
          <Link
            href={`/${opt.code}`}
            aria-current={lang === opt.code ? 'page' : undefined}
            className={
              lang === opt.code
                ? 'text-accent-light'
                : 'text-graphite-400 transition-colors hover:text-graphite-100'
            }
          >
            {opt.label}
          </Link>
        </span>
      ))}
    </div>
  );
}
