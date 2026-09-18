import { href, whatsappUrl } from '@/config/emporio';
import { home } from '@/content/emporio/home';
import Photo from './Photo';
import { HeroLine, HeroSequence } from './Reveal';
import { ButtonLink, Container } from './ui';

export default function Hero() {
  const t = home.hero;
  return (
    <section className="bg-ebano-950 pt-[72px] text-osso-100">
      <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-24">
        <HeroSequence className="lg:col-span-7">
          <HeroLine>
            <p className="text-small text-dourado-light">{t.kicker}</p>
          </HeroLine>
          <HeroLine>
            <h1 className="mt-6 max-w-[14ch] text-display-sm text-osso-50 lg:text-display">{t.headline}</h1>
          </HeroLine>
          <HeroLine>
            <p className="mt-8 max-w-[52ch] text-lead text-osso-200">{t.text}</p>
          </HeroLine>
          <HeroLine className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={href('/contato')}>{t.primaryCta}</ButtonLink>
            <ButtonLink href={whatsappUrl()} variant="outline-dark" external>
              {t.secondaryCta}
            </ButtonLink>
          </HeroLine>
        </HeroSequence>

        <div className="relative aspect-[16/10] w-full overflow-hidden lg:col-span-5 lg:aspect-[4/5]">
          <Photo
            src="/images/hero-textura-couro.jpg"
            alt={t.imageAlt}
            width={1400}
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
