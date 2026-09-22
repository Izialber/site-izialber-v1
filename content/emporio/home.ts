// Textos da Home do Empório do Couro.

export const home = {
  meta: {
    title: 'Empório do Couro, fábrica de artigos de couro para marcas',
    description:
      'Indústria de couro premium com produção private label de cintos, carteiras e acessórios para marcas de moda, varejo e brindes corporativos.',
  },
  hero: {
    kicker: 'Indústria de couro private label',
    headline: 'A fábrica por trás das grandes marcas.',
    text: 'Desenvolvemos e produzimos cintos, carteiras e acessórios de couro sob medida, com o padrão de qualidade que as marcas mais exigentes da moda brasileira já aprovaram.',
    primaryCta: 'Solicitar orçamento',
    secondaryCta: 'Falar no WhatsApp',
    imageAlt: 'Textura de couro conhaque em close, com costura visível',
  },
  stats: {
    intro:
      'Uma fábrica com estrutura industrial e acabamento de ateliê, preparada para desenvolver a peça com o seu time e produzir em escala.',
    items: [
      { key: 'yearsActive', label: 'anos de produção' },
      { key: 'monthlyCapacity', label: 'peças por mês' },
      { key: 'employees', label: 'colaboradores' },
      { key: 'brandsServed', label: 'marcas atendidas' },
    ] as const,
  },
  brands: {
    title: 'Produzimos para as melhores marcas do Brasil',
    text: 'Atendemos marcas de moda, varejo e brindes corporativos em todo o país, sempre em private label e sob acordo de confidencialidade.',
    note: 'Não divulgamos nomes, volumes ou dados de clientes sem autorização.',
  },
  categories: {
    title: 'O que fabricamos',
    text: 'Cinco linhas de produto, todas desenvolvidas sob o briefing da sua marca.',
    items: [
      {
        slug: 'cintos',
        title: 'Cintos',
        text: 'Social, casual, tressê e reversível, masculino e feminino. Nossa maior linha de produção, com constância de qualidade em grande escala.',
        image: '/images/cat-cintos.jpg',
        imageAlt: 'Cintos de couro alinhados sobre bancada',
        specs: [
          ['Modelos', 'Social, casual, tressê, reversível'],
          ['Personalização', 'Fivela, gravação, etiqueta, embalagem'],
        ] as const,
      },
      {
        slug: 'carteiras',
        title: 'Carteiras e porta-cartões',
        text: 'Peças pequenas com acabamento preciso, prontas para compor coleções completas.',
        image: '/images/cat-carteiras.jpg',
        imageAlt: 'Carteira de couro aberta mostrando os compartimentos',
        specs: [
          ['Modelos', 'Carteira, porta-cartões, porta-documentos'],
          ['Personalização', 'Gravação a quente, forro, etiqueta'],
        ] as const,
      },
      {
        slug: 'acessorios',
        title: 'Chaveiros, pulseiras e acessórios',
        text: 'Itens complementares de coleção e de ações de marca, produzidos com a mesma matéria-prima das peças principais.',
        image: '/images/cat-acessorios.jpg',
        imageAlt: 'Chaveiro e porta-cartões de couro sobre mesa de madeira',
        specs: [
          ['Modelos', 'Chaveiro, pulseira, tag, porta-fone'],
          ['Personalização', 'Gravação, ferragem, cor do couro'],
        ] as const,
      },
      {
        slug: 'brindes',
        title: 'Brindes corporativos',
        text: 'Peças de couro personalizadas com a logo da empresa, para presentear clientes e equipes com identidade.',
        image: '/images/cat-brindes.jpg',
        imageAlt: 'Kit de brindes em couro com chaveiros e porta-moedas',
        specs: [
          ['Modelos', 'Kits, carteiras, chaveiros, porta-cartões'],
          ['Personalização', 'Gravação de logo, embalagem, cartão'],
        ] as const,
      },
    ],
  },
  process: {
    title: 'Como produzimos para a sua marca',
    text: 'Um processo em cinco etapas, com aprovação sua antes de qualquer produção em escala.',
    steps: [
      {
        title: 'Briefing',
        text: 'Entendemos o produto, o volume, o prazo e a identidade da sua marca. Pode partir de um desenho, de uma referência ou de uma peça física.',
      },
      {
        title: 'Amostra',
        text: 'Desenvolvemos a peça piloto com o couro, a ferragem e o acabamento definidos. Você aprova antes de seguirmos.',
      },
      {
        title: 'Produção',
        text: 'Fabricamos em escala com controle de qualidade em cada etapa: corte, chanfro, costura, acabamento e revisão final.',
      },
      {
        title: 'Personalização',
        text: 'Gravação, ferragens, etiqueta interna, tag e embalagem seguem o padrão da sua marca.',
      },
      {
        title: 'Entrega',
        text: 'Despacho dentro do prazo combinado, com as peças revisadas e embaladas para o ponto de venda.',
      },
    ],
    imageAlt: 'Mesa de corte com couro sendo preparado para produção',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'Qual é o pedido mínimo?',
        a: 'Trabalhamos com pedido mínimo por modelo, que varia conforme a categoria e a complexidade da peça. Informamos o mínimo no orçamento, junto com o prazo. TODO: confirmar mínimo padrão em config/emporio.ts.',
      },
      {
        q: 'Como funciona a amostra antes da produção?',
        a: 'Depois do briefing, desenvolvemos uma peça piloto com o couro, a ferragem e o acabamento definidos. A produção em escala só começa depois da sua aprovação por escrito.',
      },
      {
        q: 'Quais tipos de couro vocês trabalham?',
        a: 'Couro bovino de curtumes nacionais, em diferentes acabamentos e espessuras, selecionado conforme o produto. Os detalhes estão na página Couro e qualidade.',
      },
      {
        q: 'As peças saem com a etiqueta e a identidade da minha marca?',
        a: 'Sim. Produzimos em private label, com gravação, etiqueta interna, tag e embalagem no padrão da sua marca. Nenhuma marcação nossa aparece na peça.',
      },
      {
        q: 'Qual é o prazo médio de produção?',
        a: 'O prazo depende do volume e da etapa de aprovação da amostra. Informamos a data de entrega no orçamento e a cumprimos. TODO: confirmar prazo médio em config/emporio.ts.',
      },
      {
        q: 'Vocês atendem empresas de todo o Brasil?',
        a: 'Sim. Atendemos marcas e empresas em todo o país, com envio para o endereço definido no pedido.',
      },
    ],
  },
  finalCta: {
    title: 'Pronto para desenvolver a linha de couro da sua marca?',
    text: 'Envie o briefing ou a referência da peça. Retornamos com orçamento, pedido mínimo e prazo.',
    primaryCta: 'Solicitar orçamento',
    secondaryCta: 'Falar no WhatsApp',
  },
};
