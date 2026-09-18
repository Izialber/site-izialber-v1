---
name: emporio-design
description: Design system da seção Empório do Couro (app/emporiodocouro, components/emporio). Use ao criar ou alterar qualquer página ou componente da fábrica: tokens de cor, escala tipográfica, grid de 8px, padrões de botão, card e formulário, regras de movimento e o que evitar.
---

# Empório do Couro, design system

Indústria B2B de couro premium. Público: comprador, estilista e gerente de produto de marcas de moda, redes de varejo e empresas (brindes). O site vende confiança industrial, não emoção de consumo. Tom visual: sóbrio, técnico, artesanal com escala.

Esta skill complementa `frontend-design`. Leia as duas.

## O que torna esta identidade própria

- A peça memorável é o contraste entre tipografia serifada grande (Fraunces) e blocos de informação em formato de ficha técnica (linhas finas, dados em colunas), o vocabulário de quem fecha pedido com tech pack.
- Fotos grandes de material e processo (textura, costura, corte, ferragem) fazem o trabalho emocional. Nada de ilustração, ícone flat ou imagem 3D.
- Fundo escuro (ebano) só onde o couro aparece em destaque: hero, processo e CTA final. O restante é claro (osso) para leitura longa.
- Alinhamento à esquerda em tudo. Grid assimétrico (5/7 ou 4/8 colunas) em desktop, uma coluna no mobile.

## Tokens de cor (tailwind.config.ts)

Nunca usar hex solto em componente. Sempre classe de token.

| Token | Papel |
|---|---|
| `couro-950` a `couro-300` | Marrom conhaque. `couro-600` é a cor de ação. `couro-700/800` para texto secundário sobre claro. |
| `ebano-950/900/800/700` | Marrom profundo (não preto). Fundos escuros e texto principal sobre claro (`ebano-900`). Nunca usar preto puro ou near-black como fundo. |
| `osso-50/100/200/300` | Off-white. `osso-50` fundo padrão, `osso-100` fundo alternado, `osso-200/300` linhas e divisores. |
| `dourado`, `dourado-light`, `dourado-dark` | Acento dourado fosco. Uso pontual: foco, marcador ativo, detalhe de linha. Nunca como fundo de área grande. |
| `erro` | Vermelho terroso para validação. |

Contraste verificado: texto `ebano-900` e `couro-800` sobre `osso-50` passam AA para corpo. `couro-500` sobre claro só em texto grande (acima de 24px). `dourado` sobre `ebano-950` passa AA para corpo.

## Tipografia

Duas famílias, no máximo.

- Títulos e números de destaque: **Fraunces** (`font-emporio-serif`), pesos 400 e 500, com `opsz` automático. Itálico permitido em uma palavra por página no máximo, e apenas se tiver função.
- Corpo, UI, formulários, rodapé: **Work Sans** (`font-emporio-sans`), pesos 400 e 500.

Escala (classes `text-*` em tailwind.config.ts):

| Classe | Tamanho | Uso |
|---|---|---|
| `text-caption` | 13px | legendas, notas, rodapé |
| `text-small` | 15px | texto auxiliar, labels de formulário |
| `text-body` | 17px | corpo padrão |
| `text-lead` | 21px | primeiro parágrafo de página, intro de seção |
| `text-h3` | 27px | subtítulo de seção, título de card |
| `text-h2` | 34px | título de seção |
| `text-h1` | 42px | título de página interna |
| `text-display-sm` | 53px | hero no mobile |
| `text-display` | 66px | hero no desktop |

Regras: parágrafo com `max-w-[62ch]`. Títulos nunca em caixa alta. Sem eyebrow em caixa alta com tracking largo acima de cada título; quando houver um rótulo de seção, é em `text-small`, sentence case, cor `couro-700`.

## Espaçamento

Grid base 8px. Usar somente estas classes de espaçamento: `2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40` (múltiplos de 8px) e `1` ou `3` apenas para ajuste ótico dentro de um componente. Seções: `py-20` no mobile, `py-32` em desktop. Container: `max-w-[80rem]` com `px-6 sm:px-8 lg:px-12`.

## Componentes

**Botão primário** (`.btn-couro`): fundo `couro-600`, texto `osso-50`, `rounded-sm`, `px-8 py-4`, `text-small font-medium`. Hover `couro-500`. Ativo `couro-700`. Foco visível: `ring-2 ring-dourado ring-offset-2`. Desabilitado: `opacity-40 cursor-not-allowed`. Texto do botão diz a ação: "Solicitar orçamento", "Enviar pedido de orçamento".

**Botão secundário** (`.btn-couro-outline`): borda `couro-600/50`, texto `couro-800` (sobre claro) ou `osso-100` (sobre escuro), hover preenche `couro-950/5`. Mesmo foco e tamanho do primário.

**Card de categoria**: sem sombra, sem borda arredondada grande. Imagem no topo (proporção 4:5), título `text-h3`, uma linha de descrição e uma "ficha" com duas ou três linhas de dado separadas por `border-t border-osso-300`. Hover: só a cor da linha superior muda para `dourado`.

**Ficha técnica** (`<dl>`): pares termo/valor em linhas com `border-b border-osso-300`, termo em `text-small text-couro-700`, valor em `text-body text-ebano-900`.

**Formulário**: label sempre visível acima do campo (`text-small font-medium`), campo com `border border-couro-900/20 bg-osso-50 rounded-sm px-4 py-3`, foco `border-couro-600 ring-2 ring-dourado/30`, erro `border-erro` com mensagem em `text-caption text-erro` abaixo do campo. Placeholder não substitui label. Campos obrigatórios marcados no label.

**Navbar**: fixa, altura 72px, transparente sobre o hero escuro, ganha `bg-ebano-950/95 backdrop-blur` ao rolar. Link ativo com sublinhado `dourado` de 2px.

**Rodapé**: fundo `ebano-950`, quatro colunas em desktop (marca e endereço, páginas, contato, legal), texto `osso-200` e `text-small`. Razão social e CNPJ em `text-caption`.

## Movimento (Framer Motion)

- Uma orquestração na carga do hero (headline, parágrafo, botões em sequência, 80ms entre eles).
- Reveal de seção: opacidade 0 para 1 e 12px para 0, 0.5s, `once: true`. Só no bloco da seção, não em cada parágrafo.
- Reveal escalonado em grades e listas: 60ms entre itens.
- Hover: só transição de cor e borda, 150ms.
- Transição de página: fade de 0.25s no `template.tsx`.
- Sempre passar por `useReducedMotion`. Com movimento reduzido, nenhum deslocamento, só opacidade ou nada.
- Proibido: parallax, cursor customizado, bounce, spring exagerado, animação em loop, qualquer efeito que atrase a leitura.

## O que evitar (estética genérica de IA)

- Gradientes decorativos, glassmorphism, sombras cinzas iguais em todos os cards, tudo com o mesmo raio de borda.
- Ícones de linha genéricos ao lado de cada título. Se precisar de ícone, é um único glifo desenhado à mão para a marca, ou nenhum.
- Eyebrow em caixa alta acima de cada título, "→" no fim de links, strings com "·" separando metadados.
- Fundo creme com acento terracota (`#D97757` ou próximo). O acento aqui é dourado fosco e é raro.
- Frases de marketing vazias ("soluções inovadoras", "excelência"). Falar em produto, processo, prazo e padrão de qualidade.
- Travessão em qualquer texto. Usar vírgula, ponto ou parênteses.
- Números, certificações ou prêmios inventados. Sem dado real, é `TODO` em config/emporio.ts.

## Isolamento

Tudo vive em `app/emporiodocouro`, `components/emporio`, `content/emporio`, `config/emporio.ts`, `public/emporiodocouro`. Links e assets sempre por `href()` e `asset()` de `config/emporio.ts`. Nunca importar de `components/` do site pessoal nem usar os tokens `navy`, `graphite`, `accent`.
