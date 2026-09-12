import Image from 'next/image';
import type { Dictionary, Locale } from '@/content/dictionaries';
import { siteConfig } from '@/content/site';

export default function Hero({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="border-b border-graphite-700/60 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="mx-auto flex max-w-content flex-col-reverse items-start gap-10 px-6 py-20 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div className="flex-1">
          <p className="section-kicker">{dict.hero.kicker}</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-graphite-50 sm:text-4xl lg:text-5xl">
            {dict.hero.headline}
          </h1>
          <p className="mt-4 text-base font-medium text-accent-light sm:text-lg">
            {dict.hero.subhead}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite-200">
            {dict.hero.intro}
          </p>
          <p className="mt-4 text-sm text-graphite-400">{dict.hero.role}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`/${lang}#publications`} className="btn-primary">
              {dict.hero.ctaPrimary}
            </a>
            <a href={`/${lang}#contact`} className="btn-secondary">
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-accent/40 sm:h-44 sm:w-44">
            <Image
              src={siteConfig.profileImage}
              alt={dict.hero.photoAlt}
              width={400}
              height={400}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
