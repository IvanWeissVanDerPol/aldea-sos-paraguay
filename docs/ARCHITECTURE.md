# Architecture — Aldea SOS Paraguay demo

This document is a handoff reference. It explains how the demo is built so a maintainer can pick it up.

## Stack

- **Pure static site.** No build step, no framework, no runtime.
- **HTML + CSS + JavaScript** in `public/`.
- **Hosted on GitHub Pages.** Domain: `aldea-sos.paragu-ai.com`. CNAME at `public/CNAME`.
- **Auto-deploy:** GitHub Actions at `.github/workflows/deploy-pages.yml` deploys on every push to `main`.

## Layout

```
public/                            ← Deployable root (everything below goes live)
├── 404.html                       ← Not-found page
├── index.html                      ← Home
├── CNAME                           ← GitHub Pages custom domain
├── apple-touch-icon.png            ← iOS home screen
├── logo.svg                        ← 354 bytes, scalable logo
├── og-default.png                  ← 1200×630 Open Graph
├── mapa-paraguay.svg               ← Schematic map for /mapa-del-sitio/
├── recibo-demo.pdf                 ← Sample donation receipt (demo only)
├── robots.txt
├── sitemap.xml                     ← 28+ URLs
├── css/style.css                   ← 869 lines, 33 KB
├── js/demo.js                       ← 276 lines, 10 KB
├── js/                             ← (main.js historical, folded into demo.js)
├── data/                           ← Source-of-truth JSON
│   ├── programs.json               ← 3 program pillars
│   ├── aldeas.json                 ← 6 aldeas + Ojoykéré
│   ├── stories.json                ← 4 fictional personas
│   └── news.json                   ← 3 demo posts
├── assets/                         ← Logo, OG, Apple icon, map, receipt PDF
├── acerca-de-este-sitio/           ← About this site
├── apadrina/                       ← Sponsor signup demo
├── changelog/                      ← Version history
├── donar/                          ← Donate flow demo
├── empresas/                       ← Corporate partnerships
├── historias/                      ← 4 story detail pages
│   ├── historia-deportes/
│   ├── historia-futbol/
│   ├── historia-emprendimiento/
│   └── historia-volver/
├── mapa-del-sitio/                 ← HTML sitemap + map
├── noticias/                       ← News index + 3 posts
│   ├── auditoria-2024-publicada/
│   ├── ojoykere-inauguracion/
│   └── tupi-2025-campana/
├── politicas/privacidad/           ← Privacy policy (demo)
├── portal/                         ← Donor portal (localStorage auth)
├── preguntas-frecuentes/           ← FAQ (site-specific)
├── prensa/                         ← Press kit
├── programs/                       ← Programs index
├── recursos/                       ← Resources index
├── sobre-nosotros/                 ← About the org
├── terms/                          ← Terms of use
├── transparencia/                  ← Transparency index
│   ├── auditoria/
│   ├── financiera/
│   └── gobierno/
└── voluntario/                     ← Volunteer signup
docs/                               ← NOT deployable, repo-level only
├── HANDOFF.md                      ← First-week checklist for the org
├── ARCHITECTURE.md                 ← This file
├── MAINTAINERS.md                  ← Operations
├── INTEGRATIONS.md                 ← Plugging real providers
└── SECURITY.md                     ← What the demo does and doesn't protect against
investigacion-source/              ← Research material, NOT deployable
```

## Frontend patterns

### Demo banner
Every page starts with `.demo-banner` — visible amber bar at the top, non-dismissible. Critical for legal posture. Don't remove this in any handoff scenario unless the org explicitly approves a public release.

### Pages
- Every page has the canonical header (`<header class="site-header">`) with the same9 nav links.
- Every page has the canonical footer with 3 columns: "Sobre este sitio", "Navegación", "Sitio oficial".
- Every page references `demo.js` and inherits theme/nav/focus styles from `style.css`.

### Forms
All forms call `Demo.submit(formType, payload)` from `public/js/demo.js`. This is a mock that:
- Returns `{ ok: true, receiptId: 'DEMO-' + timestamp, ... }` after a simulated delay.
- Never persists data server-side.
- The `formType` argument names the form so the org can route real submits to different handlers when adopting.

### Search
`Demo.search.query(q)` loads `/data/*.json` and ranks results by term overlap. Available but not yet wired to a results page.

### Authentication
`Demo.auth` uses localStorage. Demo creds are public: `demo@aldeas-sos.paragu-ai.com` / `demo`. Real auth needs to be wired before handoff.

## CSS organization

`public/css/style.css` is single-file. Sections (search for `/* ===`):

1. `:root` — design tokens (colors, radii, shadows, container width)
2. Dark mode — both `prefers-color-scheme` and `[data-theme="dark"]` overrides
3. Skip link + base accessibility
4. Header + brand + nav
5. Hero
6. Buttons
7. Sections, grids, cards, stats, panels
8. Steps, donate flow, method cards, amount selector
9. Story cards, news cards, aldeas table/cards
10. Footer
11. Utilities (text muted, navy label, narrow/wide containers, etc.)
12. Print stylesheet
13. Demo banner

When the org adopts this site, they may want to split this into multiple files. The current single-file approach keeps the demo portable and zero-build.

## JavaScript

`public/js/demo.js` is single-file, II II wrapped, with these namespaces:

- `Demo.theme` — light/dark toggle with localStorage
- `Demo.nav` — mobile nav toggle, theme button binding, FAQ accordion
- `Demo.smoothScroll` — anchor link smooth scroll
- `Demo.submit(type, payload)` — mock form submit
- `Demo.auth` — localStorage-backed session for `/portal/`
- `Demo.search` — JSON-file client-side search
- `Demo.donate` — state holder for `/donar/` flow
- `Demo.boot()` — called on DOMContentLoaded

## Data flow

The demo has no backend. The "data layer" is four JSON files in `public/data/`. Pages can either:

1. **Inline the data** when the page is simple (e.g., `/transparencia/` lists audit docs).
2. **Fetch the JSON** when the page is dynamic (e.g., `/sobre-nosotros/` populates the aldeas table from `aldeas.json` via `fetch()`).

When the org adopts this site, they'll likely swap the JSON files for a CMS or database. The clean separation between markup and JSON keeps that migration simple.

## Build and deploy

- **No build step.** Edit HTML, refresh browser.
- **Deploy**: `git push origin main`. GitHub Actions runs `.github/workflows/deploy-pages.yml`. The workflow:
  1. Verifies deployable artifact
  2. Uploads `./public` as artifact
  3. Deploys to GitHub Pages

## What to read next

- `docs/HANDOFF.md` — first-week checklist for the org receiving this
- `docs/INTEGRATIONS.md` — how to swap mocks for real providers
- `docs/SECURITY.md` — what the demo does and doesn't protect against
- `docs/MAINTAINERS.md` — daily operations