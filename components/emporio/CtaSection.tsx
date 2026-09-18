import { href, whatsappUrl } from '@/config/emporio';
import { Reveal } from './Reveal';
import { ButtonLink, Section } from './ui';

export default function CtaSection({
  title,
  text,
  primaryCta,
  secondaryCta = 'Falar no WhatsApp',
}: {
  title: string;
  text: string;
  primaryCta: string;
  secondaryCta?: string;
}) {
  return (
    <Section tone="dark">
      <Reveal className="max-w-[44rem]">
        <h2 className="text-h1 text-osso-50">{title}</h2>
        <p className="mt-6 max-w-[56ch] text-lead text-osso-200">{text}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href={href('/contato')}>{primaryCta}</ButtonLink>
          <ButtonLink href={whatsappUrl()} variant="outline-dark" external>
            {secondaryCta}
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
