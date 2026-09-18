import Image from 'next/image';
import { asset } from '@/config/emporio';
import { HeroLine, HeroSequence } from './Reveal';
import { Container } from './ui';

// Abertura das páginas internas: faixa escura com título, lead e imagem opcional.
export default function PageHero({
  title,
  text,
  image,
  imageAlt,
}: {
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="bg-ebano-950 pt-[72px] text-osso-100">
      <Container className="py-16 lg:py-24">
        <HeroSequence className="max-w-[48rem]">
          <HeroLine>
            <h1 className="text-h1 text-osso-50 lg:text-display-sm">{title}</h1>
          </HeroLine>
          <HeroLine>
            <p className="mt-6 max-w-[58ch] text-lead text-osso-200">{text}</p>
          </HeroLine>
        </HeroSequence>
        {image ? (
          <HeroSequence className="mt-12 lg:mt-16">
            <HeroLine className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={asset(image)}
                alt={imageAlt ?? ''}
                fill
                priority
                sizes="(min-width: 1280px) 80rem, 100vw"
                className="object-cover"
              />
            </HeroLine>
          </HeroSequence>
        ) : null}
      </Container>
    </section>
  );
}
