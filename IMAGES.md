# Fotos a produzir, Empório do Couro

Todas as imagens da seção ficam em `public/emporiodocouro/images/`. Hoje são fotos gratuitas do Unsplash (licença Unsplash, uso comercial permitido sem atribuição obrigatória), já recortadas nas proporções finais. Elas servem para a fase de staging; as fotos reais da fábrica devem substituí-las com o mesmo nome de arquivo, sem mexer em código.

## Fotos provisórias em uso (Unsplash)

| Arquivo | Foto de origem |
|---|---|
| `hero-textura-couro.jpg`, `og-default.jpg` | https://unsplash.com/photos/1716295177956-420a647c83ac (Jayanth Muppaneni) |
| `cat-cintos.jpg` | https://unsplash.com/photos/1711443982852-b3df5c563448 (saeed karimi) |
| `cat-carteiras.jpg` | https://unsplash.com/photos/1620109176813-e91290f6c795 (Kisetsu Co) |
| `cat-bolsas.jpg` | https://unsplash.com/photos/1598532163257-ae3c6b2524b6 (Irene Kredenets) |
| `cat-acessorios.jpg` | https://unsplash.com/photos/1676276550349-580c49631496 (Aleksandrs Karevs) |
| `cat-brindes.jpg`, `brindes-kit.jpg` | https://unsplash.com/photos/1599066852653-42826a50b163 (Logan Weaver) |
| `processo-corte.jpg` | https://unsplash.com/photos/1787005241178-c9006ea9610b (Cohen Berg) |
| `fabrica-galpao.jpg`, `private-label-amostra.jpg` | https://unsplash.com/photos/1628483211662-9bcc692c46dc (Konstantin Evdokimov) |
| `fabrica-maquina.jpg` | https://unsplash.com/photos/1534126511673-b6899657816a (devn) |
| `fabrica-equipe.jpg` | https://unsplash.com/photos/1787070534639-8fc823677aff (Cohen Berg) |
| `private-label-gravacao.jpg` | https://unsplash.com/photos/1763674292700-317879c2038c (Yehor Parkhomenko) |
| `couro-tipos.jpg` | https://unsplash.com/photos/1573227896778-8f378c4029d4 (Kelly Sikkema) |
| `couro-origem.jpg` | https://unsplash.com/photos/1573227897444-860137a0fe74 (Kelly Sikkema) |
| `couro-controle.jpg` | https://unsplash.com/photos/1755543041980-276589f8323c (The New York Public Library) |
| `brindes-gravacao.jpg` | https://unsplash.com/photos/1675582090584-4ae9400f7326 (Aleksandrs Karevs) |
| `prod-cintos-1.jpg` | https://unsplash.com/photos/1664286074176-5206ee5dc878 (seeetz) |
| `prod-cintos-2.jpg` | https://unsplash.com/photos/1624222247344-550fb60583dc (L S) |
| `prod-cintos-3.jpg` | https://unsplash.com/photos/1679759022456-a7eae2257ba2 (seeetz) |
| `prod-carteiras-1.jpg` | https://unsplash.com/photos/1531190260877-c8d11eb5afaf (Two Paddles Axe and Leatherwork) |
| `prod-carteiras-2.jpg` | https://unsplash.com/photos/1612023395494-1c4050b68647 (Oliur) |
| `prod-bolsas-1.jpg` | https://unsplash.com/photos/1603219527847-24c87f552a77 (Alexandr Sadkov) |
| `prod-bolsas-2.jpg` | https://unsplash.com/photos/1691480150204-66dd1eb77391 (personalgraphic.com) |
| `prod-acessorios-1.jpg` | https://unsplash.com/photos/1676276550322-7623a2545b24 (Aleksandrs Karevs) |
| `prod-acessorios-2.jpg` | https://unsplash.com/photos/1755541608110-3440a0f168ed (The New York Public Library) |
| `prod-brindes-1.jpg` | https://unsplash.com/photos/1650192923993-171bf25096c2 (Joel Lee) |
| `prod-brindes-2.jpg` | https://unsplash.com/photos/1637868796504-32f45a96d5a0 (Marcin Kempa) |

Atenção: são peças de outras marcas e oficinas. Nenhuma delas é produção da Empório do Couro. Trocar por fotos próprias antes de ligar `INDEXABLE`.

Cada foto tem duas variantes menores ao lado (`nome-400.webp` e `nome-800.webp`), usadas pelo componente `Photo` no `srcset` para celular. Ao trocar uma foto, gere também as duas variantes (por exemplo com `cwebp -q 60 -resize 800 0 nome.jpg -o nome-800.webp`, ou qualquer conversor) mantendo a mesma proporção.

## Fotos reais a produzir

Para trocar, salve a foto com o mesmo nome e extensão `.jpg` no mesmo tamanho indicado abaixo, mais as duas variantes WebP.

Regras gerais:

- Luz natural ou luz de bancada quente. Nada de flash direto.
- Fundo real da fábrica ou bancada de madeira/couro. Sem fundo branco de estúdio.
- Sem logotipo de cliente visível em nenhuma peça ou etiqueta.
- Sem rosto de colaborador sem autorização assinada.
- Exportar em JPG qualidade 80 ou WebP, no tamanho indicado. Peso alvo: abaixo de 250 KB para fotos grandes, 120 KB para as demais.
- O nome do arquivo já diz a proporção. Não recortar em outra proporção.

## Home

| Arquivo | Tamanho | Proporção | O que fotografar | Enquadramento |
|---|---|---|---|---|
| `hero-textura-couro` | 1920x1200 | 16:10 | Close de couro conhaque com uma costura passando na diagonal | Macro, foco na costura, grão do couro nítido, sem borda de peça aparecendo |
| `cat-cintos` | 1200x1500 | 4:5 | Três ou quatro cintos enrolados ou alinhados sobre bancada | Vista de cima, leve ângulo, fivelas sem marca |
| `cat-carteiras` | 1200x1500 | 4:5 | Carteira aberta mostrando compartimentos | Ângulo de 45 graus, luz lateral |
| `cat-bolsas` | 1200x1500 | 4:5 | Mini bag em pé com alça de corrente | Frontal, fundo neutro escuro |
| `cat-acessorios` | 1200x1500 | 4:5 | Chaveiros e pulseiras espalhados | Vista de cima, fundo escuro |
| `cat-brindes` | 1200x1500 | 4:5 | Kit em caixa aberta com gravação genérica (sem logo real) | Vista de cima, caixa ocupando o quadro |
| `processo-corte` | 1600x1000 | 16:10 | Mesa de corte com couro e navalha ou balancim | Mãos em ação, sem rosto |

Conteúdo: `content/emporio/home.ts` (campo `image` de cada categoria) e `components/emporio/Hero.tsx`, `components/emporio/ProcessSteps.tsx`.

## A fábrica

| Arquivo | Tamanho | Proporção | O que fotografar | Enquadramento |
|---|---|---|---|---|
| `fabrica-galpao` | 1600x1000 | 16:10 | Vista geral do galpão com as linhas de costura | Do fundo para a frente, luz do dia, sem pessoa em primeiro plano |
| `fabrica-maquina` | 1200x900 | 4:3 | Máquina de costura trabalhando em um cinto | Close na agulha e no couro |
| `fabrica-equipe` | 1200x900 | 4:3 | Equipe em bancada de trabalho | Plano médio, de costas ou com autorização assinada |

Conteúdo: `app/emporiodocouro/a-fabrica/page.tsx`.

## Private label

| Arquivo | Tamanho | Proporção | O que fotografar | Enquadramento |
|---|---|---|---|---|
| `private-label-amostra` | 1600x1000 | 16:10 | Amostra de cinto ao lado do desenho técnico ou ficha | Vista de cima, papel e peça no mesmo quadro |
| `private-label-gravacao` | 1200x900 | 4:3 | Máquina de gravação a quente sobre couro | Close no momento da gravação, sem logo de cliente |

Conteúdo: `app/emporiodocouro/private-label/page.tsx`.

## Couro e qualidade

| Arquivo | Tamanho | Proporção | O que fotografar | Enquadramento |
|---|---|---|---|---|
| `couro-tipos` | 1600x1000 | 16:10 | Peles em três ou quatro acabamentos diferentes lado a lado | Vista de cima, cores variadas |
| `couro-origem` | 1200x900 | 4:3 | Rolo de couro sendo desenrolado ou pele em inspeção | Mãos em ação |
| `couro-controle` | 1200x900 | 4:3 | Peça sob luz de bancada em revisão | Close, luz dirigida |

Conteúdo: `app/emporiodocouro/couro-e-qualidade/page.tsx`.

## Brindes corporativos

| Arquivo | Tamanho | Proporção | O que fotografar | Enquadramento |
|---|---|---|---|---|
| `brindes-kit` | 1600x1000 | 16:10 | Kit executivo em caixa aberta | Vista de cima, gravação genérica |
| `brindes-gravacao` | 1200x900 | 4:3 | Porta-cartões com gravação genérica (símbolo neutro) | Close |

Conteúdo: `app/emporiodocouro/brindes-corporativos/page.tsx`.

## Produtos (galerias)

Todas quadradas, 1200x1200, fundo escuro ou bancada, uma peça por foto.

| Arquivo | O que fotografar |
|---|---|
| `prod-cintos-1` | Cinto social preto com fivela prateada |
| `prod-cintos-2` | Cinto tressê conhaque |
| `prod-cintos-3` | Cinto reversível mostrando os dois lados |
| `prod-carteiras-1` | Carteira fechada |
| `prod-carteiras-2` | Porta-cartões com cartões (sem dados legíveis) |
| `prod-bolsas-1` | Mini bag com alça de corrente |
| `prod-bolsas-2` | Necessaire aberta mostrando o forro |
| `prod-acessorios-1` | Chaveiros em cores variadas |
| `prod-acessorios-2` | Pulseira trançada com fecho |
| `prod-brindes-1` | Kit corporativo |
| `prod-brindes-2` | Porta-cartões com gravação genérica |

Conteúdo: `content/emporio/produtos.ts` (campo `gallery`).

## Open Graph

| Arquivo | Tamanho | O que é |
|---|---|---|
| `og-default.png` | 1200x630 | Imagem de compartilhamento. Hoje é um retângulo conhaque sólido. Ideal: foto de textura de couro com o nome Empório do Couro em Fraunces no canto inferior esquerdo |

Referência: `app/emporiodocouro/_lib/seo.ts`.

## Logotipo

O site usa o nome em texto (Fraunces) como marca. Se houver logotipo em SVG, substituir o texto em `components/emporio/Navbar.tsx` e `components/emporio/Footer.tsx`.
