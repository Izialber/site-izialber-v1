# Empório do Couro, manual da seção

Site institucional B2B da EMPORIO DO COURO LTDA, hospedado temporariamente em `izialber.com.br/emporiodocouro/` dentro deste repositório. A seção é isolada do site pessoal e foi feita para ser copiada para um repositório próprio quando o domínio `emporiodocouro.com.br` estiver pronto.

## Onde ficam os arquivos

| Pasta ou arquivo | O que é |
|---|---|
| `app/emporiodocouro/` | Rotas, layout, CSS (`emporio.src.css`), sitemap e favicon da seção |
| `components/emporio/` | Componentes (navbar, rodapé, hero, formulário, cookies, analytics) |
| `content/emporio/` | Todos os textos, um arquivo por página |
| `config/emporio.ts` | Flags, dados institucionais, marcas, links e caminho base |
| `public/emporiodocouro/images/` | Imagens (hoje placeholders SVG) |
| `tailwind.emporio.config.ts` | Tailwind exclusivo da seção (tokens de cor, tipografia) |
| `.claude/skills/emporio-design/` | Design system para o Claude Code seguir ao editar a seção |
| `IMAGES.md` | Lista de fotos a produzir, com dimensões e enquadramento |

Arquivos do site pessoal tocados (todos de forma aditiva, sem mudar o comportamento atual):

- `app/robots.ts`: acrescenta `Disallow: /emporiodocouro/` enquanto `INDEXABLE` for false.
- `public/_redirects`: 301 de `/EmporioDoCouro` e `/EmporioDoCouro/*` para minúsculas.
- `tailwind.config.ts`: exclui as pastas da seção do scan (a seção usa o Tailwind próprio).
- `package.json`: dependência `framer-motion` e os scripts `emporio:css`, `prebuild` e `predev`, que geram `app/emporiodocouro/emporio.css` a partir de `emporio.src.css` com o Tailwind CLI antes de cada build e dev local. O arquivo gerado é versionado porque o Cloudflare Pages roda `npx next build` direto (sem o hook `prebuild`). Depois de editar `emporio.src.css` ou `tailwind.emporio.config.ts`, rode `npm run emporio:css` e faça commit do `emporio.css` junto.

## Como editar

### Marcas atendidas

Em `config/emporio.ts`:

- `SHOW_BRANDS`: `true` mostra a grade "Quem confia na nossa produção"; `false` remove a seção inteira da Home.
- `BRANDS`: lista de nomes. Só texto, nunca logotipo. Remova qualquer marca sem autorização contratual para exibição.

### Dados institucionais

Em `config/emporio.ts`, objeto `company`. Tudo marcado com `TODO` precisa de dado real antes de publicar no domínio definitivo:

- Endereço, cidade, estado e CEP
- Telefone, WhatsApp (só dígitos com DDI, ex. `5511999990000`) e e-mail comercial
- CNPJ, ano de fundação
- Números: anos de atuação, capacidade mensal, colaboradores, marcas atendidas, pedido mínimo, prazo médio
- Instagram e LinkedIn

Enquanto um número estiver como `TODO`, o site mostra "a definir" no lugar. Não invente números.

### Textos

Em `content/emporio/*.ts`. Regras: português do Brasil, frases curtas, sem travessão, sem preço, sem certificação ou prêmio sem documento. Procure por `TODO` para achar o que falta.

### Imagens

Siga `IMAGES.md`. Para trocar um placeholder, salve a foto com o mesmo nome em `public/emporiodocouro/images/` e ajuste a extensão no arquivo de conteúdo correspondente.

### Formulário de contato

O formulário envia por POST JSON para o endpoint definido em variável de ambiente (Formspree ou compatível). Variáveis, definidas no painel do Cloudflare Pages (Settings, Environment variables) ou em `.env.local`:

```
NEXT_PUBLIC_EMPORIO_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
NEXT_PUBLIC_EMPORIO_FORM_MODE=test
NEXT_PUBLIC_EMPORIO_FORM_TEST_EMAIL=seu@email.com
```

- Sem `FORM_ENDPOINT`, o formulário mostra um aviso e não envia.
- `FORM_MODE=test` (padrão) exibe um aviso de modo de teste, prefixa o assunto com `[TESTE]` e registra o e-mail de teste no envio. O destinatário real é configurado no painel do Formspree: crie um formulário de teste apontando para o seu e-mail pessoal e use o ID dele aqui.
- Para produção, crie outro formulário no Formspree apontando para o e-mail comercial, troque o endpoint e defina `FORM_MODE=production`.
- Honeypot: campo `_gotcha` (o Formspree descarta envios com ele preenchido).
- Página de obrigado: `/emporiodocouro/contato/obrigado/`.

### Analytics

Só carregam depois que o visitante aceita no banner de cookies, e só se houver ID:

```
NEXT_PUBLIC_EMPORIO_GA4_ID=G-XXXXXXX
NEXT_PUBLIC_EMPORIO_META_PIXEL_ID=000000000000000
```

A escolha fica em `localStorage` na chave `emporio_cookie_consent`. Não há relação com qualquer analytics do site pessoal.

## Como ligar INDEXABLE

Manter `false` enquanto a seção estiver em `izialber.com.br`. Só ligar no domínio definitivo.

Em `config/emporio.ts`, troque `export const INDEXABLE = false as boolean;` por `true`. Isso:

- Remove `noindex,nofollow` de todas as páginas (a página de obrigado continua `noindex`).
- Preenche o sitemap (`/sitemap.xml` no domínio próprio).
- Adiciona `canonical` apontando para `SITE_URL`.
- Injeta JSON-LD Organization e LocalBusiness com os dados de `company`.
- Remove o `Disallow` do robots.txt (só relevante enquanto estiver neste repositório).

Antes de ligar, confira: todos os `TODO` resolvidos, `og-default.png` real, `SITE_URL` correto.

## Checklist do que falta você fornecer

- [ ] Endereço completo da fábrica
- [ ] Telefone, WhatsApp e e-mail comercial
- [ ] CNPJ e confirmação da razão social
- [ ] Ano de fundação e os três parágrafos de história (`content/emporio/fabrica.ts`)
- [ ] Capacidade mensal, número de colaboradores, pedido mínimo, prazo médio, prazo da amostra
- [ ] Larguras de cinto e acabamentos de couro realmente oferecidos (`content/emporio/produtos.ts`, `content/emporio/couro.ts`)
- [ ] Texto real de origem do couro e de sustentabilidade (sem certificação sem documento)
- [ ] Horário de atendimento e prazo de resposta do formulário
- [ ] Instagram e LinkedIn
- [ ] Autorização de cada marca da lista `BRANDS`
- [ ] Fotos de `IMAGES.md`
- [ ] Logotipo em SVG, se existir
- [ ] Data da política de privacidade e nome do serviço de formulário no texto (`content/emporio/privacidade.ts`)
- [ ] Endpoint do Formspree de teste (agora) e de produção (na migração)
- [ ] IDs de GA4 e Meta Pixel, se for usar

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000/emporiodocouro/`. O build (`npm run build`) gera tudo em `out/`.

## Migração para emporiodocouro.com.br

1. Crie um repositório novo e inicie um projeto Next.js com a mesma base deste (`next`, `react`, `tailwindcss`, `framer-motion`, TypeScript, `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`). Ou copie `package.json`, `next.config.js`, `tsconfig.json`, `postcss.config.js` deste repositório e remova o que for do site pessoal.
2. Copie estas pastas e arquivos:
   - `app/emporiodocouro/*` para `app/` (o conteúdo da pasta vai para a raiz de `app/`)
   - `components/emporio/` para `components/emporio/`
   - `content/emporio/` para `content/emporio/`
   - `config/emporio.ts` para `config/emporio.ts`
   - `public/emporiodocouro/images/` para `public/images/`
   - `tailwind.emporio.config.ts` como `tailwind.config.ts` (ajuste os globs de `content` para `./app/**`, `./components/**`, `./content/**`, `./config/**`)
   - `.claude/skills/frontend-design` e `.claude/skills/emporio-design`
   - `IMAGES.md` e este arquivo
3. No projeto novo o Tailwind pode rodar direto pelo PostCSS, sem o script de geração: renomeie `emporio.src.css` para `app/globals.css`, apague os scripts `emporio:css`, `prebuild` e `predev` do `package.json` e a linha de `.gitignore`. Se preferir manter o script, ajuste os caminhos nele.
4. Crie `app/layout.tsx` raiz com `<html lang="pt"><body>{children}</body></html>` e importe `./globals.css` nele. O layout que estava em `app/emporiodocouro/layout.tsx` vira o layout raiz (mova o conteúdo dele para o raiz e troque `import './emporio.css'` por `import './globals.css'`).
5. Em `config/emporio.ts`:
   - `BASE_PATH = '/'`
   - `INDEXABLE = true`
6. Variáveis de ambiente no Cloudflare Pages do projeto novo:
   - `NEXT_PUBLIC_EMPORIO_SITE_URL=https://emporiodocouro.com.br`
   - `NEXT_PUBLIC_EMPORIO_FORM_ENDPOINT` com o formulário de produção (e-mail comercial)
   - `NEXT_PUBLIC_EMPORIO_FORM_MODE=production`
   - IDs de analytics, se houver
7. Crie `app/robots.ts` no projeto novo:
   ```ts
   import type { MetadataRoute } from 'next';
   import { SITE_URL } from '@/config/emporio';
   export default function robots(): MetadataRoute.Robots {
     return { rules: { userAgent: '*', allow: '/' }, sitemap: `${SITE_URL}/sitemap.xml` };
   }
   ```
8. Rode `npm run build`, confira `out/robots.txt`, `out/sitemap.xml` e que nenhuma página tem `noindex`.
9. No Cloudflare Pages, crie o projeto apontando para o repositório novo (preset Next.js Static HTML Export, build `npm run build`, saída `out`) e adicione o domínio `emporiodocouro.com.br` em Custom domains.
10. Depois de o domínio novo estar no ar, neste repositório (`site-izialber`):
    - Remova `app/emporiodocouro/`, `components/emporio/`, `content/emporio/`, `config/emporio.ts`, `public/emporiodocouro/`, `tailwind.emporio.config.ts`, `IMAGES.md` e `EMPORIO_README.md`.
    - Em `app/robots.ts`, remova o import de `@/config/emporio` e a constante `emporioDisallow`.
    - Em `tailwind.config.ts`, remova as três linhas de exclusão.
    - Em `public/_redirects`, troque as duas regras da seção por redirecionamentos para o domínio novo, para não perder quem tiver o link antigo:
      ```
      /emporiodocouro https://emporiodocouro.com.br/ 301
      /emporiodocouro/* https://emporiodocouro.com.br/:splat 301
      /EmporioDoCouro https://emporiodocouro.com.br/ 301
      /EmporioDoCouro/* https://emporiodocouro.com.br/:splat 301
      ```
    - Opcional: `npm uninstall framer-motion`.

## Verificações depois de cada deploy

- `https://izialber.com.br/EmporioDoCouro/` deve redirecionar para `/emporiodocouro/`. Se o Cloudflare tratar o `_redirects` sem diferenciar maiúsculas e criar um loop, substitua as duas regras por uma Redirect Rule no painel (Rules, Redirect Rules) com a expressão `lower(http.request.uri.path) eq "/emporiodocouro/"` ou similar.
- `https://izialber.com.br/robots.txt` deve conter `Disallow: /emporiodocouro/`.
- Nenhuma página da seção aparece em `https://izialber.com.br/sitemap.xml`.
- O site pessoal e `izialber.com.br/app-lattes/` continuam iguais. Nada nesta seção aponta ou intercepta esses caminhos.
