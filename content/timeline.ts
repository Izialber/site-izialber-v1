export interface TimelineEntry {
  id: string;
  /** Formato livre, ex.: "2021 – atual" ou "2016 – 2018". Ajustar com as datas reais. */
  period: string;
  current?: boolean;
  tbd?: boolean;
  titlePt: string;
  titleEn: string;
  descriptionPt?: string;
  descriptionEn?: string;
}

// Fonte: Currículo Lattes (http://lattes.cnpq.br/3216603966162180), atualizado em 06/01/2026.
// Ordem: do mais recente para o mais antigo (renderizada de cima para baixo).
// NOTA: o Lattes descreve o cargo atual com escopo de atuação em Houston (sede),
// mas ajustei a localização para Rio de Janeiro conforme informado diretamente —
// confirme qual está correta antes de publicar.

export const professionalTrack: TimelineEntry[] = [
  {
    id: 'shell-it-lead',
    period: '2024 – atual',
    current: true,
    titlePt: 'IT Site Operations Lead — Shell',
    titleEn: 'IT Site Operations Lead — Shell',
    descriptionPt: 'Rio de Janeiro, Brasil.',
    descriptionEn: 'Rio de Janeiro, Brazil.',
  },
  {
    id: 'shell-engenheiro-seguranca',
    period: '2019 – 2024',
    titlePt: 'Engenheiro de Segurança da Informação Industrial — Shell',
    titleEn: 'Industrial Information Security Engineer — Shell',
    descriptionPt: 'Sistemas de Controle e Automação Industrial (IACS) e cibersegurança. Rio de Janeiro, Brasil.',
    descriptionEn: 'Industrial Automation and Control Systems (IACS) and cybersecurity. Rio de Janeiro, Brazil.',
  },
  {
    id: 'pg-energia-controle',
    period: '2015 – 2019',
    titlePt: 'Energia, Controle, Instrumentação e Sistemas — Procter & Gamble',
    titleEn: 'Energy, Control, Instrumentation and Systems — Procter & Gamble',
    descriptionPt: 'Coordenação do sistema de segurança cibernética e projetos de automação. Dedicação exclusiva.',
    descriptionEn: 'Coordination of the cybersecurity system and automation projects. Full-time dedication.',
  },
  {
    id: 'pg-eletrica-instrumentacao',
    period: '2012 – 2015',
    titlePt: 'Elétrica e Instrumentação — Procter & Gamble',
    titleEn: 'Electrical and Instrumentation — Procter & Gamble',
    descriptionPt: 'Comissionamento e partida de projeto greenfield; automação industrial (Rockwell).',
    descriptionEn: 'Commissioning and start-up of a greenfield project; industrial automation (Rockwell).',
  },
  {
    id: 'michelin-estagio',
    period: '2011 – 2012',
    titlePt: 'Estagiário de Eletrotécnica — Michelin',
    titleEn: 'Electrical Engineering Intern — Michelin',
    descriptionPt: 'Manutenção preventiva e corretiva de máquinas industriais.',
    descriptionEn: 'Preventive and corrective maintenance of industrial machinery.',
  },
];

export const academicTrack: TimelineEntry[] = [
  {
    id: 'doutorado',
    period: '',
    tbd: true,
    titlePt: 'Doutorado (a definir)',
    titleEn: 'PhD (to be defined)',
  },
  {
    id: 'mestrado-cefet',
    period: '2021 – em andamento',
    titlePt: 'Mestrado em Engenharia de Produção e Sistemas — CEFET/RJ',
    titleEn: 'Master’s in Production Engineering and Systems — CEFET/RJ',
  },
  {
    id: 'mba-seguranca-informacao',
    period: '2020 – 2022',
    titlePt: 'MBA em Gestão da Segurança da Informação — Instituto Eficaz',
    titleEn: 'MBA in Information Security Management — Instituto Eficaz',
  },
  {
    id: 'graduacao-eng-eletrica',
    period: '2013 – 2021',
    titlePt: 'Graduação em Engenharia Elétrica — Universidade Estácio de Sá (CREA-RJ)',
    titleEn: 'Bachelor’s in Electrical Engineering — Universidade Estácio de Sá (CREA-RJ)',
  },
  {
    id: 'curso-tecnico',
    period: '2008 – 2012',
    titlePt: 'Técnico em Eletrotécnica — IFRJ',
    titleEn: 'Technical Degree in Electrical Engineering — IFRJ',
  },
];
