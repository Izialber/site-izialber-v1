export const contato = {
  meta: {
    title: 'Solicitar orçamento',
    description:
      'Solicite um orçamento para produção de artigos de couro em private label. Informe categoria, volume estimado e prazo desejado.',
  },
  hero: {
    title: 'Solicitar orçamento',
    text: 'Preencha o formulário com o que você já sabe sobre o produto. Retornamos em até dois dias úteis com pedido mínimo, prazo e orçamento. TODO: confirmar prazo de resposta.',
  },
  aside: {
    title: 'Outros canais',
    whatsappLabel: 'Falar no WhatsApp',
    emailLabel: 'E-mail comercial',
    phoneLabel: 'Telefone',
    addressLabel: 'Fábrica',
    hoursLabel: 'Atendimento',
    hours: 'TODO: ex. Segunda a sexta, das 8h às 17h',
  },
  form: {
    fields: {
      name: 'Nome',
      company: 'Empresa',
      cnpj: 'CNPJ',
      email: 'E-mail',
      phone: 'Telefone ou WhatsApp',
      category: 'Categoria de produto',
      volume: 'Volume estimado',
      deadline: 'Prazo desejado',
      message: 'Mensagem',
      messageHelp:
        'Descreva o produto, a referência ou o briefing. Se tiver desenho ou foto, mencione e pediremos por e-mail.',
      consent:
        'Autorizo o uso destes dados para responder ao meu pedido de orçamento, conforme a política de privacidade.',
    },
    categories: [
      'Cintos',
      'Carteiras e porta-cartões',
      'Bolsas e mini bags',
      'Chaveiros, pulseiras e acessórios',
      'Brindes corporativos',
      'Mais de uma categoria',
      'Outro produto em couro',
    ],
    volumes: [
      'Até 500 peças',
      'De 500 a 2.000 peças',
      'De 2.000 a 10.000 peças',
      'Acima de 10.000 peças',
      'Ainda não sei',
    ],
    deadlines: [
      'Até 30 dias',
      'De 30 a 60 dias',
      'De 60 a 90 dias',
      'Acima de 90 dias',
      'Ainda não definido',
    ],
    selectPlaceholder: 'Selecione',
    submit: 'Enviar pedido de orçamento',
    submitting: 'Enviando',
    errors: {
      required: 'Campo obrigatório.',
      email: 'Informe um e-mail válido.',
      cnpj: 'Informe um CNPJ com 14 dígitos.',
      phone: 'Informe um telefone com DDD.',
      consent: 'É preciso autorizar o uso dos dados para enviar.',
      submit: 'Não foi possível enviar. Tente de novo ou fale conosco pelo WhatsApp.',
      noEndpoint:
        'O formulário ainda não está conectado a um serviço de envio. Fale conosco pelo WhatsApp ou por e-mail.',
    },
    testNotice:
      'Formulário em modo de teste. As mensagens vão para um endereço interno até a publicação no domínio definitivo.',
  },
  thanks: {
    meta: {
      title: 'Pedido recebido',
      description: 'Recebemos o seu pedido de orçamento.',
    },
    title: 'Pedido recebido.',
    text: 'Obrigado pelo contato. Vamos analisar o briefing e retornar com pedido mínimo, prazo e orçamento.',
    next: 'Enquanto isso, você pode conhecer a fábrica ou ver os tipos de couro que trabalhamos.',
    backHome: 'Voltar para a página inicial',
  },
};
