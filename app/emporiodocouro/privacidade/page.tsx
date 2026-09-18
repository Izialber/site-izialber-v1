import PageHero from '@/components/emporio/PageHero';
import { Reveal } from '@/components/emporio/Reveal';
import { Section } from '@/components/emporio/ui';
import { company } from '@/config/emporio';
import { privacidade } from '@/content/emporio/privacidade';
import { pageMetadata } from '../_lib/seo';

export const metadata = pageMetadata({
  title: privacidade.meta.title,
  description: privacidade.meta.description,
  path: '/privacidade',
});

export default function PrivacidadePage() {
  const t = privacidade;
  return (
    <>
      <PageHero title={t.title} text={t.updated} />
      <Section tone="light">
        <Reveal className="max-w-[44rem]">
          {t.sections.map((s) => (
            <section key={s.title} className="border-t border-osso-300 py-8 first:border-t-0 first:pt-0">
              <h2 className="text-h3 text-ebano-900">{s.title}</h2>
              <div className="mt-4 space-y-4">
                {s.paragraphs.map((p) => (
                  <p key={p} className="max-w-[62ch] text-body text-couro-800">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
          <section className="border-t border-osso-300 py-8">
            <h2 className="text-h3 text-ebano-900">Contato do controlador</h2>
            <p className="mt-4 max-w-[62ch] text-body text-couro-800">
              {company.legalName}, CNPJ {company.cnpj}.{' '}
              <a href={`mailto:${company.email}`} className="underline underline-offset-2 hover:text-couro-700">
                {company.email}
              </a>
            </p>
          </section>
        </Reveal>
      </Section>
    </>
  );
}
