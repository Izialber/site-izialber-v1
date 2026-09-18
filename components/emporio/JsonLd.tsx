import { INDEXABLE, absoluteUrl, asset, company } from '@/config/emporio';

// Organization e LocalBusiness. Só entra no HTML quando INDEXABLE for true.
export default function JsonLd() {
  if (!INDEXABLE) return null;

  const url = absoluteUrl('/');
  const logo = `${url.replace(/\/$/, '')}${asset('/images/og-default.jpg')}`;
  const sameAs = [company.instagram, company.linkedin].filter((u) => u && !u.includes('TODO'));

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    legalName: company.legalName,
    url,
    logo,
    email: company.email,
    telephone: company.phone,
    sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.postalCode,
      addressCountry: 'BR',
    },
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    url,
    image: logo,
    telephone: company.phone,
    email: company.email,
    address: organization.address,
    priceRange: '$$',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
