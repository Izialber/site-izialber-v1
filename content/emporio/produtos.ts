export const produtos = {
  meta: {
    title: 'Produtos',
    description:
      'Cintos, carteiras, bolsas, acessórios e brindes corporativos em couro, desenvolvidos e produzidos em private label para marcas e empresas.',
  },
  hero: {
    title: 'Cinco linhas de produto, um mesmo padrão de fábrica.',
    text: 'Cada categoria tem equipe, maquinário e processo próprios. Todas seguem a mesma regra: amostra aprovada pela marca antes da produção.',
  },
  categories: [
    {
      slug: 'cintos',
      title: 'Cintos',
      lead: 'Nossa maior linha de produção. Cintos sociais, casuais, tressê e reversíveis, masculinos e femininos, em larguras e acabamentos definidos no briefing.',
      details: [
        ['Larguras', 'TODO: ex. 2,5 cm a 4,0 cm'],
        ['Construção', 'Inteiro, forrado, dublado ou tressê'],
        ['Fivelas', 'Fornecidas pela fábrica ou pela marca'],
        ['Personalização', 'Gravação no couro ou na fivela, etiqueta interna, embalagem'],
      ] as const,
      gallery: [
        { src: '/images/prod-cintos-1.jpg', alt: 'Cinto social de couro preto com fivela prateada' },
        { src: '/images/prod-cintos-2.jpg', alt: 'Cinto tressê em couro conhaque' },
        { src: '/images/prod-cintos-3.jpg', alt: 'Cinto reversível mostrando os dois lados' },
      ],
    },
    {
      slug: 'carteiras',
      title: 'Carteiras e porta-cartões',
      lead: 'Peças pequenas exigem corte preciso e costura fina. Produzimos carteiras, porta-cartões e porta-documentos em couro inteiro ou com forro.',
      details: [
        ['Modelos', 'Carteira dobrável, porta-cartões, porta-documentos, porta-moedas'],
        ['Forro', 'Couro, tecido ou sintético, conforme a marca'],
        ['Personalização', 'Gravação a quente, etiqueta interna, embalagem'],
      ] as const,
      gallery: [
        { src: '/images/prod-carteiras-1.jpg', alt: 'Carteira de couro fechada com gravação discreta' },
        { src: '/images/prod-carteiras-2.jpg', alt: 'Porta-cartões de couro com cartões inseridos' },
      ],
    },
    {
      slug: 'bolsas',
      title: 'Bolsas e mini bags',
      lead: 'Desenvolvimento sob medida para coleções de moda. Do molde à ferragem, construímos a peça com a equipe de estilo da marca.',
      details: [
        ['Modelos', 'Bolsa tiracolo, mini bag, necessaire, clutch'],
        ['Ferragens', 'Corrente, mosquetão, fecho magnético, zíper'],
        ['Personalização', 'Forro estampado, gravação, etiqueta, embalagem'],
      ] as const,
      gallery: [
        { src: '/images/prod-bolsas-1.jpg', alt: 'Clutch de couro marrom sobre superfície de madeira' },
        { src: '/images/prod-bolsas-2.jpg', alt: 'Necessaire de couro conhaque com o compartimento aberto' },
      ],
    },
    {
      slug: 'acessorios',
      title: 'Chaveiros, pulseiras e pequenos acessórios',
      lead: 'Complementos de coleção e itens de ação de marca, feitos com o mesmo couro e o mesmo acabamento das peças principais.',
      details: [
        ['Modelos', 'Chaveiro, pulseira, tag de bagagem, porta-fone, porta-caneta'],
        ['Ferragens', 'Argola, mosquetão, botão de pressão'],
        ['Personalização', 'Gravação, cor do couro, embalagem individual'],
      ] as const,
      gallery: [
        { src: '/images/prod-acessorios-1.jpg', alt: 'Chaveiros de couro em cores variadas' },
        { src: '/images/prod-acessorios-2.jpg', alt: 'Detalhe do couro marrom escuro usado nos acessórios' },
      ],
    },
    {
      slug: 'brindes',
      title: 'Brindes corporativos',
      lead: 'Linha para empresas que querem presentear com identidade: kits, carteiras, chaveiros e porta-cartões com a logo gravada.',
      details: [
        ['Modelos', 'Kit executivo, carteira, chaveiro, porta-cartões, porta-crachá'],
        ['Personalização', 'Gravação de logo, embalagem, cartão de mensagem'],
        ['Volumes', 'De pequenas tiragens a campanhas nacionais'],
      ] as const,
      gallery: [
        { src: '/images/prod-brindes-1.jpg', alt: 'Kit corporativo em couro com carteira e chaveiro' },
        { src: '/images/prod-brindes-2.jpg', alt: 'Porta-cartões com logotipo de empresa gravado' },
      ],
    },
  ],
  cta: {
    title: 'Precisa de um produto que não está aqui?',
    text: 'Desenvolvemos peças fora dessas categorias sob briefing. Conte o que você precisa.',
    primaryCta: 'Solicitar orçamento',
  },
};
