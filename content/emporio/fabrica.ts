export const fabrica = {
  meta: {
    title: 'A fábrica',
    description:
      'Conheça a estrutura, a capacidade produtiva e o controle de qualidade da Empório do Couro, indústria de artigos de couro em private label.',
  },
  hero: {
    title: 'Uma fábrica feita para produzir com padrão de marca.',
    text: 'Estrutura industrial, equipe especializada e revisão peça a peça. É assim que sustentamos o mesmo acabamento do primeiro ao último lote.',
    imageAlt: 'Bancada de trabalho com peça de couro, linha e ferramentas de corte',
  },
  history: {
    title: 'Nossa história',
    paragraphs: [
      'TODO: parágrafo de origem. Quem fundou, em que cidade, em que ano (usar company.foundedYear) e com qual produto a fábrica começou.',
      'TODO: parágrafo de evolução. Quando entrou o primeiro cliente de moda, quando a produção passou a ser majoritariamente private label e como a estrutura cresceu.',
      'TODO: parágrafo de hoje. O que a fábrica é agora, para quem produz e o que guia as decisões (qualidade, prazo, relação de longo prazo com as marcas).',
    ],
  },
  capacity: {
    title: 'Capacidade produtiva',
    text: 'Dimensionada para atender coleções sazonais e reposição contínua, com flexibilidade para lotes de tamanhos diferentes.',
    rows: [
      ['Produção mensal', 'monthlyCapacity', 'peças'],
      ['Colaboradores', 'employees', 'pessoas em produção, desenvolvimento e revisão'],
      ['Pedido mínimo', 'minimumOrder', ''],
      ['Prazo médio', 'averageLeadTime', ''],
    ] as const,
  },
  structure: {
    title: 'Estrutura',
    items: [
      {
        title: 'Corte e preparação',
        text: 'Corte do couro por modelo, chanfro e preparação das peças para montagem. TODO: descrever equipamentos reais (balancim, chanfradeira, etc.).',
      },
      {
        title: 'Costura e montagem',
        text: 'Linhas de costura dedicadas por categoria de produto, com costureiras especializadas em cintos, pequenas peças e bolsas.',
      },
      {
        title: 'Acabamento e gravação',
        text: 'Pintura de borda, gravação a quente ou em baixo relevo, aplicação de ferragens e etiquetas.',
      },
      {
        title: 'Revisão e expedição',
        text: 'Revisão individual de cada peça antes da embalagem, com conferência de medida, acabamento e personalização.',
      },
    ],
    imageAlt: 'Máquina de costura industrial trabalhando em um cinto de couro',
  },
  team: {
    title: 'Equipe',
    text: 'TODO: descrever a equipe de forma real. Quantas pessoas no desenvolvimento, quantas na produção, tempo médio de casa, formação dos responsáveis técnicos.',
    imageAlt: 'Mãos riscando o molde sobre o couro na bancada',
  },
  quality: {
    title: 'Qualidade',
    text: 'Controle em todas as etapas, do recebimento do couro à expedição.',
    items: [
      'Seleção e conferência do couro no recebimento',
      'Peça piloto aprovada pela marca antes da produção',
      'Conferência de medidas e acabamento por lote',
      'Revisão individual de cada peça antes da embalagem',
    ],
  },
  cta: {
    title: 'Quer conhecer a fábrica?',
    text: 'Recebemos visitas técnicas de compradores e equipes de desenvolvimento. Agende pelo formulário ou pelo WhatsApp.',
    primaryCta: 'Agendar visita ou orçamento',
  },
};
