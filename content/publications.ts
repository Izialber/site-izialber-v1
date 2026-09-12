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

// Fonte: Currículo Lattes (http://lattes.cnpq.br/3216603966162180), atualizado em 06/01/2026.
// TODO: os itens marcados com [a definir] ainda não constam no Lattes — atualizar
// quando o COBENGE 2026 e o artigo sobre Portugal tiverem título/resumo/link definidos.
// TODO: adicionar links (DOI/ResearchGate/repositório) quando disponíveis.
export const publications: Publication[] = [
  {
    id: 'dissertacao-mestrado',
    status: 'thesis',
    year: '2021 – em andamento',
    venue: 'CEFET/RJ — Programa de Pós-Graduação em Engenharia de Produção e Sistemas. Orientador: Prof. Igor Leão dos Santos.',
    titlePt: 'A aderência dos cursos de engenharia de produção do Rio de Janeiro à Indústria 4.0',
    titleEn: 'The alignment of production engineering programs in Rio de Janeiro with Industry 4.0',
    summaryPt:
      'Dissertação de mestrado sobre a aderência dos currículos de engenharia de produção do Rio de Janeiro à Indústria 4.0, analisando Diretrizes Curriculares Nacionais (DCNs) e competências profissionais.',
    summaryEn:
      'Master’s thesis examining how production engineering curricula in Rio de Janeiro align with Industry 4.0, analyzing national curriculum guidelines and professional competencies.',
    link: null,
  },
  {
    id: 'slr-iot-south-america',
    status: 'published',
    year: '2022',
    venue: 'International Journal of Advanced Engineering Research and Science (IJAERS), v. 9, p. 380–391',
    titlePt: 'Systematic Literature Review (SLR) Development of the IoT Industry in the South America Region',
    titleEn: 'Systematic Literature Review (SLR) Development of the IoT Industry in the South America Region',
    summaryPt:
      'Revisão sistemática da literatura sobre o desenvolvimento da indústria de IoT na América do Sul. Com Douglas Castro da Silva e Bryan Alexander Saravia.',
    summaryEn:
      'Systematic literature review on the development of the IoT industry in South America. Co-authored with Douglas Castro da Silva and Bryan Alexander Saravia.',
    link: null,
  },
  {
    id: 'evasao-engenharia',
    status: 'published',
    year: '2023',
    venue: 'Apresentação de trabalho em congresso',
    titlePt: 'Uma ferramenta auxiliar para a análise da evasão em cursos de engenharia utilizando simulação por eventos discretos',
    titleEn: 'A supporting tool for analyzing dropout in engineering programs using discrete-event simulation',
    summaryPt:
      'Trabalho sobre uma ferramenta de simulação por eventos discretos para apoiar a análise da evasão em cursos de engenharia. Com U. C. Peres Junior e Igor Leão dos Santos.',
    summaryEn:
      'Work on a discrete-event simulation tool to support the analysis of dropout rates in engineering programs. Co-authored with U. C. Peres Junior and Igor Leão dos Santos.',
    link: null,
  },
  {
    id: 'capitulo-jornada-officeless',
    status: 'published',
    year: '2024',
    venue: 'Capítulo de livro — "Jornada Officeless" (Org. Antonio Muniz), Brasport Livros e Multimídia, p. 158–166',
    titlePt: 'Infraestrutura e tecnologias utilizadas',
    titleEn: 'Infrastructure and technologies used',
    summaryPt: 'Capítulo sobre infraestrutura e tecnologias utilizadas, publicado no livro "Jornada Officeless".',
    summaryEn: 'Book chapter on infrastructure and technologies used, published in "Jornada Officeless".',
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
