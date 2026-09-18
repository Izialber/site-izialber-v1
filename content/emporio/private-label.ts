export const privateLabel = {
  meta: {
    title: 'Private label',
    description:
      'Produção de artigos de couro com a identidade da sua marca: briefing, amostra, aprovação, produção e entrega, com personalização completa.',
  },
  hero: {
    title: 'Sua marca na peça. Nossa fábrica por trás dela.',
    text: 'Desenvolvemos o produto a partir do seu briefing e produzimos com etiqueta, gravação e embalagem no padrão da sua marca. Nenhuma marcação nossa aparece na peça.',
    imageAlt: 'Amostra de cinto sendo comparada com o desenho técnico',
  },
  steps: {
    title: 'Do briefing à entrega',
    text: 'Cada etapa tem uma entrega clara e uma aprovação sua antes de seguirmos.',
    items: [
      {
        title: 'Briefing',
        text: 'Recebemos desenho, referência ou peça física, junto com volume estimado, prazo desejado e requisitos de personalização.',
        delivers: 'Proposta com pedido mínimo, prazo e orçamento.',
      },
      {
        title: 'Amostra',
        text: 'Desenvolvemos a peça piloto com o couro, a cor, a ferragem e o acabamento definidos no briefing.',
        delivers: 'Amostra física para aprovação, com ficha técnica.',
      },
      {
        title: 'Aprovação',
        text: 'Você avalia a amostra, pede ajustes se necessário e aprova por escrito. A produção só começa depois disso.',
        delivers: 'Ficha técnica final assinada pelas duas partes.',
      },
      {
        title: 'Produção',
        text: 'Fabricação em escala, com controle de qualidade por lote e revisão individual de cada peça.',
        delivers: 'Lote produzido conforme a ficha técnica aprovada.',
      },
      {
        title: 'Entrega',
        text: 'Embalagem no padrão da marca e despacho no prazo combinado, para o endereço definido no pedido.',
        delivers: 'Peças revisadas, embaladas e prontas para o ponto de venda.',
      },
    ],
  },
  terms: {
    title: 'Pedido mínimo e prazos',
    text: 'Os valores abaixo são referências. Cada orçamento informa o mínimo e o prazo exatos para o produto e o volume solicitados.',
    rows: [
      ['Pedido mínimo', 'minimumOrder'],
      ['Prazo médio de produção', 'averageLeadTime'],
      ['Prazo da amostra', 'TODO: ex. 10 a 15 dias úteis'],
      ['Reposição', 'TODO: descrever condição de reposição de modelo aprovado'],
    ] as const,
  },
  customization: {
    title: 'Personalização',
    text: 'Tudo que identifica a peça como da sua marca.',
    items: [
      {
        title: 'Gravação',
        text: 'A quente, em baixo relevo ou com pigmento, no couro ou na ferragem. Aplicamos a logo no ponto definido na ficha técnica.',
      },
      {
        title: 'Ferragens',
        text: 'Fivelas, mosquetões, argolas e rebites em acabamentos como níquel, ouro velho e preto fosco, de fornecedores homologados ou fornecidos pela marca.',
      },
      {
        title: 'Embalagem',
        text: 'Saco de TNT, caixa ou envelope com a identidade da marca. Podemos produzir com o seu fornecedor ou indicar um.',
      },
      {
        title: 'Etiqueta e tag',
        text: 'Etiqueta interna costurada ou gravada, tag externa com código e composição, e etiqueta de pré-preço quando solicitado.',
      },
    ],
    imageAlt: 'Costura contrastante em couro preto, detalhe de acabamento',
  },
  cta: {
    title: 'Tem um briefing pronto?',
    text: 'Envie pelo formulário com volume e prazo. Retornamos com pedido mínimo, orçamento e data de entrega da amostra.',
    primaryCta: 'Solicitar orçamento',
  },
};
