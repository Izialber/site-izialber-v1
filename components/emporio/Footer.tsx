import Link from 'next/link';
import { NAV, company, href, whatsappUrl } from '@/config/emporio';
import { Container } from './ui';

export default function Footer() {
  const year = new Date().getFullYear();
  const a = company.address;
  return (
    <footer className="bg-ebano-950 text-osso-200">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-emporio-serif text-h3 text-osso-50">Empório do Couro</p>
            <p className="mt-4 max-w-[36ch] text-small text-osso-200/80">
              Indústria de artigos de couro em private label para marcas de moda, redes de varejo e
              empresas.
            </p>
            <address className="mt-6 not-italic text-small text-osso-200/80">
              {a.street}
              <br />
              {a.district}, {a.city}, {a.state}
              <br />
              CEP {a.postalCode}
            </address>
          </div>

          <nav aria-label="Páginas">
            <p className="text-small font-medium text-osso-50">Páginas</p>
            <ul className="mt-4 space-y-3">
              {NAV.map((item) => (
                <li key={item.path}>
                  <Link
                    href={href(item.path)}
                    className="text-small text-osso-200/80 transition-colors duration-150 hover:text-osso-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-small font-medium text-osso-50">Contato</p>
            <ul className="mt-4 space-y-3 text-small text-osso-200/80">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-osso-50"
                >
                  WhatsApp comercial
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors duration-150 hover:text-osso-50">
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\D/g, '')}`}
                  className="transition-colors duration-150 hover:text-osso-50"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-osso-50"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-osso-50"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-small font-medium text-osso-50">Legal</p>
            <ul className="mt-4 space-y-3 text-small text-osso-200/80">
              <li>
                <Link href={href('/privacidade')} className="transition-colors duration-150 hover:text-osso-50">
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-osso-100/10 pt-6 text-caption text-osso-200/60">
          <p>
            {company.legalName}. CNPJ {company.cnpj}.
          </p>
          <p className="mt-1">
            {year} Empório do Couro. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
