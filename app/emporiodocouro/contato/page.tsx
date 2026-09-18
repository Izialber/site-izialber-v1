import ContactForm from '@/components/emporio/ContactForm';
import PageHero from '@/components/emporio/PageHero';
import { Reveal } from '@/components/emporio/Reveal';
import { Section } from '@/components/emporio/ui';
import { company, whatsappUrl } from '@/config/emporio';
import { contato } from '@/content/emporio/contato';
import { pageMetadata } from '../_lib/seo';

export const metadata = pageMetadata({
  title: contato.meta.title,
  description: contato.meta.description,
  path: '/contato',
});

export default function ContatoPage() {
  const t = contato;
  const a = company.address;
  const link = 'text-body text-ebano-900 underline-offset-2 transition-colors duration-150 hover:text-couro-700 hover:underline';
  return (
    <>
      <PageHero title={t.hero.title} text={t.hero.text} />

      <Section tone="light">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <h2 className="text-h3 text-ebano-900">{t.aside.title}</h2>
            <dl className="mt-6 divide-y divide-osso-300 border-y border-osso-300">
              <div className="py-4">
                <dt className="text-small text-couro-700">{t.aside.whatsappLabel}</dt>
                <dd className="mt-1">
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={link}>
                    Abrir conversa
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-small text-couro-700">{t.aside.emailLabel}</dt>
                <dd className="mt-1">
                  <a href={`mailto:${company.email}`} className={link}>
                    {company.email}
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-small text-couro-700">{t.aside.phoneLabel}</dt>
                <dd className="mt-1">
                  <a href={`tel:${company.phone.replace(/\D/g, '')}`} className={link}>
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-small text-couro-700">{t.aside.hoursLabel}</dt>
                <dd className="mt-1 text-body text-ebano-900">{t.aside.hours}</dd>
              </div>
              <div className="py-4">
                <dt className="text-small text-couro-700">{t.aside.addressLabel}</dt>
                <dd className="mt-1 text-body text-ebano-900">
                  <address className="not-italic">
                    {a.street}
                    <br />
                    {a.district}, {a.city}, {a.state}
                    <br />
                    CEP {a.postalCode}
                  </address>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
