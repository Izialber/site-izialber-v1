# Site pessoal — Izialber Santos

Site estático em Next.js (App Router, export estático), bilíngue PT/EN, construído para o COBENGE.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000 (redireciona para `/pt`). A versão em inglês fica em `/en`.

## Onde editar o conteúdo

Todo o conteúdo textual fica fora dos componentes, em `content/`:

| Arquivo | O que é |
|---|---|
| `content/site.ts` | E-mail de contato, link do LinkedIn, URL do site, endpoint do formulário, caminho da foto de perfil |
| `content/publications.ts` | Cards de publicações (título, veículo, ano, resumo, link) — PT e EN |
| `content/timeline.ts` | Entradas das duas trilhas da timeline (profissional/acadêmica) — PT e EN |
| `content/dictionaries/pt.ts` e `en.ts` | Textos fixos de interface (headline, botões, labels) |

Todos os campos que ainda precisam de dado real estão marcados com `TODO` ou `[texto entre colchetes]` — procure por `TODO` e por `a definir` nesses arquivos para encontrar tudo que falta.

### Pendências para você resolver antes de publicar

1. **Foto de perfil**: adicione o arquivo em `public/images/profile.jpg` (quadrada, mín. 400×400px) e troque `profileImage` em `content/site.ts` para `/images/profile.jpg`.
2. **E-mail público**: defina em `content/site.ts` (`email`) qual endereço deve aparecer no site.
3. **Publicações**: preencha `content/publications.ts` com os dados reais (dissertação, artigos do ResearchGate, COBENGE, Portugal) e ajuste os `status` (`published` / `in-progress` / `thesis`).
4. **Datas da timeline**: ajuste os períodos (`20XX`) em `content/timeline.ts` com os anos reais de cada etapa.
5. **Formulário de contato**: crie um formulário em [Formspree](https://formspree.io) (gratuito) e cole o endpoint em `content/site.ts` (`contactFormEndpoint`). Enquanto estiver vazio, o formulário fica visualmente pronto mas desabilitado, com um aviso.
6. **URL final do site**: depois do deploy, atualize `siteUrl` em `content/site.ts` (usado no SEO/sitemap).

## Deploy

O site é 100% estático (`next build` gera a pasta `out/`). Duas opções, ambas gratuitas:

### Opção A — Cloudflare Pages (via GitHub)

1. Suba o projeto para um repositório no GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/site-izialber.git
   git push -u origin main
   ```
2. No painel da Cloudflare, vá em **Workers & Pages → Create → Pages → Connect to Git** e selecione o repositório.
3. Configure o build:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. Deploy. A cada `git push` na branch `main`, o Cloudflare Pages rebuilda e publica automaticamente.
5. Em **Custom domains**, aponte seu domínio (se tiver um).

### Opção B — Vercel

1. Suba o projeto para o GitHub (mesmos passos acima).
2. Em [vercel.com](https://vercel.com), **Add New → Project**, importe o repositório.
3. A Vercel detecta Next.js automaticamente — não precisa mudar nada (o `output: 'export'` no `next.config.js` já faz o build estático).
4. Deploy. Cada push subsequente gera um novo deploy automaticamente.

Ambas as opções servem os arquivos de `public/_redirects` (Cloudflare) e `vercel.json` (Vercel) que já redirecionam `/` → `/pt/` automaticamente.

## Estrutura

```
app/
  layout.tsx          — layout raiz (fontes, html/body)
  page.tsx             — redireciona "/" para "/pt"
  sitemap.ts, robots.ts
  [lang]/
    layout.tsx         — metadata por idioma, header/footer
    page.tsx            — página única: hero + publicações + timeline + contato
components/            — componentes de UI
content/                — todo o conteúdo (textos, publicações, timeline, config)
public/                 — imagens e arquivos estáticos
```
