import Link from 'next/link';
import PageHero from '@/components/emporio/PageHero';
import { Reveal } from '@/components/emporio/Reveal';
import { ButtonLink, Section } from '@/components/emporio/ui';
import { href } from '@/config/emporio';
import { contato } from '@/content/emporio/contato';
import { pageMetadata } from '../../_lib/seo';

export const metadata = {
  ...pageMetadata({
    title: contato.thanks.meta.title,
    description: contato.thanks.meta.description,
    path: '/contato/obrigado',
  }),
  // Página de confirmação nunca entra no índice, mesmo com INDEXABLE ligado.
  robots: { index: false, follow: true },
};

export default function ObrigadoPage() {
  const t = contato.thanks;
  return (
    <>
      <PageHero title={t.title} text={t.text} />
      <Section tone="light">
        <Reveal className="max-w-[44rem]">
          <p className="text-lead text-couro-800">{t.next}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={href('/a-fabrica')} variant="outline">
              Conhecer a fábrica
            </ButtonLink>
            <ButtonLink href={href('/couro-e-qualidade')} variant="outline">
              Ver tipos de couro
            </ButtonLink>
          </div>
          <p className="mt-10">
            <Link href={href('/')} className="text-small text-couro-700 underline-offset-2 hover:underline">
              {t.backHome}
            </Link>
          </p>
        </Reveal>
      </Section>
    </>
  );
}
