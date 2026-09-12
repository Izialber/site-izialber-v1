import type { Dictionary, Locale } from '@/content/dictionaries';
import { siteConfig } from '@/content/site';
import ContactForm from './ContactForm';

export default function ContactSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="contact" className="section scroll-mt-20">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="section-kicker">{dict.contact.kicker}</p>
          <h2 className="section-title mt-2">{dict.contact.title}</h2>
          <p className="mt-4 max-w-lg text-graphite-300">{dict.contact.intro}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-primary"
            >
              {dict.contact.emailLabel}: {siteConfig.email}
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {dict.contact.linkedinLabel}
            </a>
          </div>
        </div>

        <div className="card">
          <h3 className="font-serif text-lg font-semibold text-graphite-50">
            {dict.contact.formTitle}
          </h3>
          <p className="mt-1 text-sm text-graphite-400">{dict.contact.formIntro}</p>
          <ContactForm dict={dict} />
        </div>
      </div>
    </section>
  );
}
