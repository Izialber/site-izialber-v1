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

// TODO: ajustar os períodos ("20XX") com os anos reais de cada etapa.
// Ordem: do mais recente para o mais antigo (renderizada de cima para baixo).

export const professionalTrack: TimelineEntry[] = [
  {
    id: 'shell-rio-lead',
    period: '20XX – atual',
    current: true,
    titlePt: 'IT Site Operations Lead — Shell',
    titleEn: 'IT Site Operations Lead — Shell',
    descriptionPt: 'Rio de Janeiro, Brasil.',
    descriptionEn: 'Rio de Janeiro, Brazil.',
  },
  {
    id: 'shell-houston',
    period: '20XX – 20XX',
    titlePt: 'Atuação na sede global — Shell',
    titleEn: 'Assignment at global headquarters — Shell',
    descriptionPt: 'Houston, Estados Unidos.',
    descriptionEn: 'Houston, United States.',
  },
  {
    id: 'shell-rio-engenheiro',
    period: '20XX – 20XX',
    titlePt: 'Engenheiro — Shell',
    titleEn: 'Engineer — Shell',
    descriptionPt: 'Rio de Janeiro, Brasil.',
    descriptionEn: 'Rio de Janeiro, Brazil.',
  },
  {
    id: 'engenheiro-eletricista',
    period: '20XX – 20XX',
    titlePt: 'Engenheiro Eletricista',
    titleEn: 'Electrical Engineer',
    descriptionPt: 'Início da atuação como engenheiro, após a graduação.',
    descriptionEn: 'Start of engineering practice, following graduation.',
  },
  {
    id: 'tecnico',
    period: '20XX – 20XX',
    titlePt: 'Técnico',
    titleEn: 'Technician',
    descriptionPt: 'Primeira atuação profissional, em paralelo ao início dos estudos.',
    descriptionEn: 'First professional role, alongside the start of his studies.',
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
    period: '20XX – 20XX',
    titlePt: 'Mestrado em Engenharia de Produção — CEFET/RJ (PPPRO)',
    titleEn: 'Master’s in Production Engineering — CEFET/RJ (PPPRO)',
  },
  {
    id: 'mba-uniciv',
    period: '20XX – 20XX',
    titlePt: 'MBA em Gestão de Segurança da Informação — Uniciv',
    titleEn: 'MBA in Information Security Management — Uniciv',
  },
  {
    id: 'graduacao',
    period: '20XX – 20XX',
    titlePt: 'Graduação em Engenharia Elétrica (CREA-RJ)',
    titleEn: 'Bachelor’s in Electrical Engineering (CREA-RJ)',
  },
  {
    id: 'curso-tecnico',
    period: '20XX – 20XX',
    titlePt: 'Curso Técnico',
    titleEn: 'Technical School',
  },
];
