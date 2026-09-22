// Configuração da seção Empório do Couro.
// Tudo que muda entre a hospedagem temporária (izialber.com.br/emporiodocouro)
// e o domínio definitivo (emporiodocouro.com.br) fica neste arquivo.

// Caminho base de todas as rotas e assets da seção.
// Ao migrar para o domínio próprio, trocar para '/'.
export const BASE_PATH: string = '/emporiodocouro';

// URL pública usada em canonical, Open Graph, sitemap e JSON-LD.
// Ao migrar, definir NEXT_PUBLIC_EMPORIO_SITE_URL=https://emporiodocouro.com.br
export const SITE_URL =
  process.env.NEXT_PUBLIC_EMPORIO_SITE_URL ?? 'https://izialber.com.br';

// Enquanto false: meta robots noindex,nofollow em todas as páginas, sitemap
// vazio e bloqueio em robots.txt. Manter false enquanto a seção estiver
// hospedada em izialber.com.br. Ligar somente no domínio definitivo.
export const INDEXABLE = false as boolean;

// Exibição da seção "Produzimos para as melhores marcas do Brasil" na Home.
// Desligar remove a seção inteira.
export const SHOW_BRANDS = true as boolean;

// Marcas que produzem ou já produziram conosco. Mantido apenas como registro
// interno: a seção pública não exibe mais nomes individuais, só a declaração
// genérica em content/emporio/home.ts (brands.title / brands.text).
export const BRANDS: string[] = [
  'Brooksfield',
  'Via Veneto',
  'Reserva',
  'Osklen',
  'Calvin Klein',
  'Foxton',
  'Vila Romana',
  'Highstil',
  'Richards',
  'Ellus',
  'John John',
  'Sergio K',
  "L'Eroa",
  'Armadillo',
  'Zapalla',
  'Otto Faria',
];

// Formulário de contato (Formspree ou serviço compatível com POST + JSON).
// NEXT_PUBLIC_EMPORIO_FORM_ENDPOINT: ex. https://formspree.io/f/xxxxxxxx
// NEXT_PUBLIC_EMPORIO_FORM_MODE: 'test' (padrão) ou 'production'
// NEXT_PUBLIC_EMPORIO_FORM_TEST_EMAIL: e-mail interno que recebe os testes.
//   O destinatário real é definido no painel do Formspree; este valor serve
//   para deixar registrado no envio e no aviso do formulário.
export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_EMPORIO_FORM_ENDPOINT ?? '';
export const FORM_MODE: 'test' | 'production' =
  process.env.NEXT_PUBLIC_EMPORIO_FORM_MODE === 'production' ? 'production' : 'test';
export const FORM_TEST_EMAIL = process.env.NEXT_PUBLIC_EMPORIO_FORM_TEST_EMAIL ?? '';

// Analytics, carregados somente após consentimento no banner de cookies.
export const GA4_ID = process.env.NEXT_PUBLIC_EMPORIO_GA4_ID ?? '';
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_EMPORIO_META_PIXEL_ID ?? '';

// Dados institucionais. Tudo marcado com TODO precisa de dado real antes de
// ligar INDEXABLE.
export const company = {
  name: 'Empório do Couro',
  legalName: 'EMPORIO DO COURO LTDA',
  cnpj: '00.000.000/0001-00', // TODO: CNPJ real
  foundedYear: 'TODO', // TODO: ano de fundação (ex. '1998')
  address: {
    street: 'TODO: rua e número',
    district: 'TODO: bairro',
    city: 'TODO: cidade',
    state: 'TODO: UF',
    postalCode: 'TODO: CEP',
  },
  phone: '+55 00 0000-0000', // TODO: telefone comercial
  whatsapp: '5500000000000', // TODO: WhatsApp comercial, só dígitos com DDI (ex. 5511999990000)
  whatsappMessage:
    'Olá, gostaria de solicitar um orçamento para produção de artigos de couro.',
  email: 'comercial@emporiodocouro.com.br', // TODO: e-mail comercial real
  instagram: 'https://instagram.com/TODO', // TODO
  linkedin: 'https://linkedin.com/company/TODO', // TODO
  // Números institucionais exibidos na Home e em A fábrica.
  // Não inventar. Deixar em TODO até ter o dado.
  stats: {
    yearsActive: 'TODO', // ex. '25'
    monthlyCapacity: 'TODO', // ex. '40 mil'
    employees: 'TODO', // ex. '80'
    brandsServed: 'TODO', // ex. '60'
  },
  minimumOrder: 'TODO', // ex. '300 peças por modelo'
  averageLeadTime: 'TODO', // ex. '30 a 45 dias'
};

// Navegação da seção. Caminhos relativos ao BASE_PATH.
export const NAV = [
  { label: 'A fábrica', path: '/a-fabrica' },
  { label: 'Private label', path: '/private-label' },
  { label: 'Produtos', path: '/produtos' },
  { label: 'Couro e qualidade', path: '/couro-e-qualidade' },
  { label: 'Brindes corporativos', path: '/brindes-corporativos' },
  { label: 'Contato', path: '/contato' },
] as const;

const base = BASE_PATH.replace(/\/+$/, '');

// Rota interna com BASE_PATH e barra final (o projeto usa trailingSlash).
export function href(path: string = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  const joined = `${base}${p}` || '/';
  return joined.endsWith('/') ? joined : `${joined}/`;
}

// Caminho de asset (imagem, documento) com BASE_PATH, sem barra final.
export function asset(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

// URL absoluta de uma rota da seção.
export function absoluteUrl(path: string = '/'): string {
  return `${SITE_URL.replace(/\/+$/, '')}${href(path)}`;
}

export function whatsappUrl(message: string = company.whatsappMessage): string {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
