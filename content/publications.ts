export type PublicationStatus = 'published' | 'in-progress' | 'thesis';

export interface Publication {
  id: string;
  status: PublicationStatus;
  year: string;
  venue: string;
  titlePt: string;
  titleEn: string;
  summaryPt: string;
  summaryEn: string;
  link: string | null;
}

// TODO: substituir todos os itens abaixo pela lista real de publicações
// (título, veículo/evento, ano, resumo e link). Estrutura já pronta para
// dissertação, artigos publicados (ResearchGate) e artigos em andamento
// (COBENGE, Portugal).
export const publications: Publication[] = [
  {
    id: 'dissertacao-mestrado',
    status: 'thesis',
    year: '20XX',
    venue: 'CEFET/RJ — Programa de Pós-Graduação em Engenharia de Produção (PPPRO)',
    titlePt: '[Título da dissertação de mestrado — a definir]',
    titleEn: '[Master’s thesis title — to be defined]',
    summaryPt: '[Resumo da dissertação a ser adicionado.]',
    summaryEn: '[Thesis abstract to be added.]',
    link: null,
  },
  {
    id: 'researchgate-iot',
    status: 'published',
    year: '20XX',
    venue: 'ResearchGate',
    titlePt: '[Título do artigo sobre IoT — a definir]',
    titleEn: '[IoT article title — to be defined]',
    summaryPt: '[Resumo do artigo sobre IoT a ser adicionado.]',
    summaryEn: '[Summary of the IoT article to be added.]',
    link: null,
  },
  {
    id: 'researchgate-evasao-engenharia',
    status: 'published',
    year: '20XX',
    venue: 'ResearchGate',
    titlePt: '[Título do artigo sobre evasão na engenharia — a definir]',
    titleEn: '[Article title on engineering dropout/evasion — to be defined]',
    summaryPt: '[Resumo do artigo sobre evasão na engenharia a ser adicionado.]',
    summaryEn: '[Summary of the engineering-evasion article to be added.]',
    link: null,
  },
  {
    id: 'cobenge-artigo',
    status: 'in-progress',
    year: '2026',
    venue: 'COBENGE — Congresso Brasileiro de Educação em Engenharia',
    titlePt: '[Título do artigo do COBENGE — a definir]',
    titleEn: '[COBENGE paper title — to be defined]',
    summaryPt: '[Resumo do artigo do COBENGE a ser adicionado.]',
    summaryEn: '[Summary of the COBENGE paper to be added.]',
    link: null,
  },
  {
    id: 'artigo-portugal',
    status: 'in-progress',
    year: '20XX',
    venue: '[Veículo/evento em Portugal — a definir]',
    titlePt: '[Título do artigo sobre Portugal — a definir]',
    titleEn: '[Portugal-related paper title — to be defined]',
    summaryPt: '[Resumo do artigo a ser adicionado.]',
    summaryEn: '[Paper summary to be added.]',
    link: null,
  },
];
