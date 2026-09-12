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

// Fontes: LinkedIn (www.linkedin.com/in/izialber) e Currículo Lattes
// (http://lattes.cnpq.br/3216603966162180). Datas com precisão de mês conforme LinkedIn.
// Ordem: do mais recente para o mais antigo (renderizada de cima para baixo).

export const professionalTrack: TimelineEntry[] = [
  {
    id: 'shell-ics-cyber-2',
    period: 'fev 2026 – atual',
    current: true,
    titlePt: 'Engenheiro de Cibersegurança de Sistemas de Controle Industrial, Shell',
    titleEn: 'Industrial Control Systems Cyber Security Engineer, Shell',
    descriptionPt: 'Rio de Janeiro, Brasil (híbrido).',
    descriptionEn: 'Rio de Janeiro, Brazil (hybrid).',
  },
  {
    id: 'shell-it-lead',
    period: 'ago 2024 – jan 2026',
    titlePt: 'IT Site Operations Lead, Shell',
    titleEn: 'IT Site Operations Lead, Shell',
    descriptionPt: 'Atribuição temporária na sede. Houston, Texas, Estados Unidos.',
    descriptionEn: 'Temporary assignment at headquarters. Houston, Texas, United States.',
  },
  {
    id: 'shell-ics-cyber-1',
    period: 'mai 2019 – set 2024',
    titlePt: 'Engenheiro de Cibersegurança de Sistemas de Controle Industrial, Shell',
    titleEn: 'Industrial Control Systems Cyber Security Engineer, Shell',
    descriptionPt: 'Sistemas de Controle e Automação Industrial (IACS) e cibersegurança. Rio de Janeiro, Brasil.',
    descriptionEn: 'Industrial Automation and Control Systems (IACS) and cybersecurity. Rio de Janeiro, Brazil.',
  },
  {
    id: 'pg-power-control-cyber',
    period: 'jul 2015 – mai 2019',
    titlePt: 'Líder de Energia, Controle e Sistemas de Informação / Cibersegurança, Procter & Gamble',
    titleEn: 'Power, Control and Information Systems / Cyber Security Leader, Procter & Gamble',
    descriptionPt: 'Coordenação do sistema de segurança cibernética e projetos de automação. Rio de Janeiro.',
    descriptionEn: 'Coordination of the cybersecurity system and automation projects. Rio de Janeiro.',
  },
  {
    id: 'pg-eletrica-instrumentacao',
    period: 'jul 2012 – jul 2015',
    titlePt: 'Técnico de Elétrica e Instrumentação, Procter & Gamble',
    titleEn: 'Electrical and Instrumentation Technician, Procter & Gamble',
    descriptionPt: 'Comissionamento e partida de projeto greenfield; automação industrial (Rockwell).',
    descriptionEn: 'Commissioning and start-up of a greenfield project; industrial automation (Rockwell).',
  },
  {
    id: 'michelin-estagio',
    period: 'fev 2012 – jun 2012',
    titlePt: 'Estagiário Técnico em Eletrotécnica, Michelin',
    titleEn: 'Electrical Technician Intern, Michelin',
    descriptionPt: 'Manutenção preventiva e corretiva de máquinas industriais. Rio de Janeiro.',
    descriptionEn: 'Preventive and corrective maintenance of industrial machinery. Rio de Janeiro.',
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
    titlePt: 'Mestrado em Engenharia de Produção e Sistemas, CEFET/RJ',
    titleEn: 'Master’s in Production Engineering and Systems, CEFET/RJ',
  },
  {
    id: 'mba-seguranca-informacao',
    period: 'ago 2021 – mar 2022',
    titlePt: 'MBA em Gestão da Segurança da Informação, Uniciv',
    titleEn: 'MBA in Information Security Management, Uniciv',
  },
  {
    id: 'graduacao-eng-eletrica',
    period: '2013 – 2021',
    titlePt: 'Graduação em Engenharia Elétrica, UNESA (CREA-RJ)',
    titleEn: 'Bachelor’s in Electrical Engineering, UNESA (CREA-RJ)',
  },
  {
    id: 'curso-tecnico',
    period: '2008 – 2012',
    titlePt: 'Técnico em Eletrotécnica, IFRJ',
    titleEn: 'Technical Degree in Electrical Engineering, IFRJ',
  },
];
