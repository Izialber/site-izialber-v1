import Image from 'next/image';
import Link from 'next/link';
import { asset, href } from '@/config/emporio';
import { home } from '@/content/emporio/home';
import { Reveal, RevealGroup, RevealItem } from './Reveal';
import { Section, SectionHeading, SpecList } from './ui';

export default function CategoryCards() {
  const t = home.categories;
  return (
    <Section tone="light" id="produtos">
      <Reveal>
        <SectionHeading title={t.title} text={t.text} />
      </Reveal>
      <RevealGroup as="ul" className="mt-16 border-t border-osso-300">
        {t.items.map((item) => (
          <RevealItem as="li" key={item.slug} className="group border-b border-osso-300">
            <Link
              href={`${href('/produtos')}#${item.slug}`}
              className="grid gap-8 py-10 transition-colors duration-150 md:grid-cols-12 md:items-center lg:py-12"
            >
              <div className="relative aspect-[4/5] max-w-[20rem] overflow-hidden md:col-span-4 lg:col-span-3">
                <Image
                  src={asset(item.image)}
                  alt={item.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-8 lg:col-span-5">
                <h3 className="text-h3 text-ebano-900 transition-colors duration-150 group-hover:text-couro-700">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[48ch] text-body text-couro-800">{item.text}</p>
              </div>
              <div className="md:col-span-8 md:col-start-5 lg:col-span-4 lg:col-start-auto">
                <SpecList rows={item.specs} />
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
