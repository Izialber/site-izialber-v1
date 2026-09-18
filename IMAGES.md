# Fotos a produzir, Empório do Couro

Todas as imagens da seção ficam em `public/emporiodocouro/images/`. Hoje são placeholders SVG nas proporções finais. Para trocar, salve a foto com o mesmo nome e extensão `.jpg` (ou `.webp`) e atualize a extensão no arquivo de conteúdo indicado.

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
