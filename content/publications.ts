export type PublicationStatus = 'published' | 'in-progress' | 'accepted' | 'thesis';

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

// Fontes: Currículo Lattes (http://lattes.cnpq.br/3216603966162180, atualizado em 06/01/2026)
// e e-mails de aprovação COBENGE 2026 / ENEGEP 2026 (ABEPRO).
// TODO: adicionar links (DOI/ResearchGate/anais/repositório) quando disponíveis.
export const publications: Publication[] = [
  {
    id: 'dissertacao-mestrado',
    status: 'thesis',
    year: '2021 – em andamento',
    venue: 'CEFET/RJ, Programa de Pós-Graduação em Engenharia de Produção e Sistemas. Orientador: Prof. Igor Leão dos Santos.',
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
    venue: 'International Journal of Advanced Engineering Research and Science (IJAERS), ISSN 2456-1908, v. 9, p. 380-391',
    titlePt: 'Systematic Literature Review (SLR) Development of the IoT Industry in the South America Region',
    titleEn: 'Systematic Literature Review (SLR) Development of the IoT Industry in the South America Region',
    summaryPt:
      'Revisão sistemática da literatura sobre o desenvolvimento da indústria de IoT na América do Sul. Com Douglas Castro da Silva e Bryan Alexander Saravia.',
    summaryEn:
      'Systematic literature review on the development of the IoT industry in South America. Co-authored with Douglas Castro da Silva and Bryan Alexander Saravia.',
    link: 'https://doi.org/10.22161/ijaers.96.39',
  },
  {
    id: 'evasao-engenharia',
    status: 'published',
    year: '2023',
    venue: 'Anais do 51º Congresso Brasileiro de Educação em Engenharia (COBENGE 2023)',
    titlePt: 'Uma ferramenta auxiliar para a análise da evasão em cursos de engenharia utilizando simulação por eventos discretos',
    titleEn: 'A supporting tool for analyzing dropout in engineering programs using discrete-event simulation',
    summaryPt:
      'Trabalho sobre uma ferramenta de simulação por eventos discretos para apoiar a análise da evasão em cursos de engenharia. Com Uilton Cesar Peres Junior e Igor Leão dos Santos.',
    summaryEn:
      'Work on a discrete-event simulation tool to support the analysis of dropout rates in engineering programs. Co-authored with Uilton Cesar Peres Junior and Igor Leão dos Santos.',
    link: 'https://doi.org/10.37702/2175-957x.cobenge.2023.4598',
  },
  {
    id: 'capitulo-jornada-officeless',
    status: 'published',
    year: '2024',
    venue: 'Capítulo de livro: "Jornada Officeless" (Org. Antonio Muniz), Brasport Livros e Multimídia, p. 158-166',
    titlePt: 'Infraestrutura e tecnologias utilizadas',
    titleEn: 'Infrastructure and technologies used',
    summaryPt: 'Capítulo sobre infraestrutura e tecnologias utilizadas, publicado no livro "Jornada Officeless".',
    summaryEn: 'Book chapter on infrastructure and technologies used, published in "Jornada Officeless".',
    link: 'https://www.editorabrasport.com.br/jornada-officeless',
  },
  {
    id: 'cobenge-2026',
    status: 'accepted',
    year: '2026',
    venue: 'COBENGE 2026, Congresso Brasileiro de Educação em Engenharia (Sessões Técnicas)',
    titlePt: 'Alinhamento dos projetos pedagógicos dos cursos de engenharia de produção às Diretrizes Curriculares Nacionais de 2019: uma análise documental no município do Rio de Janeiro',
    titleEn: 'Alignment of production engineering pedagogical projects with the 2019 National Curriculum Guidelines: a documentary analysis in the city of Rio de Janeiro',
    summaryPt:
      'Trabalho aprovado pela Comissão Científica do COBENGE 2026 para apresentação em Sessão Técnica. Análise documental sobre a aderência dos projetos pedagógicos dos cursos de engenharia de produção às DCNs de 2019, com foco no município do Rio de Janeiro.',
    summaryEn:
      'Paper accepted by the COBENGE 2026 Scientific Committee for presentation in a Technical Session. Documentary analysis of how production engineering programs align with the 2019 National Curriculum Guidelines, focused on the city of Rio de Janeiro.',
    link: null,
  },
  {
    id: 'enegep-2026',
    status: 'accepted',
    year: '2026',
    venue: 'ENEGEP 2026, Encontro Nacional de Engenharia de Produção (ABEPRO)',
    titlePt: 'Curricularização da Indústria 4.0 nos cursos de engenharia de produção: análise documental ponderada à luz das DCNs de 2019',
    titleEn: 'Curricularization of Industry 4.0 in production engineering programs: a documentary analysis weighted against the 2019 National Curriculum Guidelines (DCNs)',
    summaryPt:
      'Trabalho aprovado pelo Comitê Científico do ENEGEP 2026 (ABEPRO). Análise documental sobre a curricularização da Indústria 4.0 nos cursos de engenharia de produção, ponderada à luz das DCNs de 2019.',
    summaryEn:
      'Paper accepted by the ENEGEP 2026 Scientific Committee (ABEPRO). Documentary analysis on the curricularization of Industry 4.0 in production engineering programs, weighted against the 2019 National Curriculum Guidelines.',
    link: null,
  },
];
