# Herramientas de Desarrollo — Infraestructura

> Stack de herramientas de desarrollo para Aldea SOS Paraguay.

## Resumen

| Capa | Herramienta | Costo |
|---|---|---|
| Frontend (Transparency) | Next.js | $0 |
| Backend (Sponsor Portal) | Python + FastAPI o Node.js + Express | $0 |
| DB | PostgreSQL (Supabase / Neon) | $0-25/mes |
| CRM | Salesforce NPSP | $0 |
| Auth | Auth0 / Clerk | $0 (tier free) |
| Storage | Cloudflare R2 o S3 | $0-5/mes |
| Email | (elegir: ver `recomendacion-email.md`) | $0-20/mes |
| Hosting Frontend | Vercel | $0 |
| Hosting Backend | Railway / Fly.io | $5-20/mes |
| CDN | Cloudflare | $0 |
| DNS | Cloudflare | $0 |
| Analytics | Plausible | $0 |
| CI/CD | GitHub Actions | $0 |
| Monitoring | Better Uptime / UptimeRobot | $0 |
| Logging | Sentry (free tier) | $0 |
| Docs | Notion / Outline | $0 |

**Costo total**: ~$10-50/mes

## Frontend

### Next.js (recomendado)

**Pros**:
- React + SSR + SSG
- Excelente para SEO (Ad Grants)
- Excelente para performance
- Hosting en Vercel gratis
- Gran ecosistema

**Stack relacionado**:
- **UI**: Tailwind CSS
- **Components**: shadcn/ui
- **Forms**: React Hook Form + Zod
- **State**: TanStack Query
- **Auth**: Auth0 o Clerk

## Backend

### Python + FastAPI (recomendado)

**Pros**:
- Rápido para desarrollar
- Type safety con Pydantic
- Async de fábrica
- Excelente para APIs
- Ecosistema de ML/scientific

### Alternativa: Node.js + Express

- Más familiar para devs web
- Gran ecosistema
- Streaming nativo

## Database

### PostgreSQL (recomendado)

**Por qué**:
- ACID compliant
- Soporta JSON (JSONB)
- Extensions poderosas (PostGIS, full-text search)
- Gratis y open source

**Hosting**:
- **Supabase**: $0-25/mes tier gratuito
- **Neon**: $0-25/mes serverless
- **Railway**: $5-15/mes

## Auth

### Auth0 (recomendado)

- **Free tier**: hasta 7,000 usuarios activos
- SSO (Google, Facebook, etc.)
- 2FA
- Logs de auditoría

### Alternativa: Clerk

- **Free tier**: hasta 10,000 usuarios
- Más moderna UI
- Mejor DX

## Storage

### Cloudflare R2 (recomendado)

- **$0.015/GB/mes**
- Sin costos de egreso
- S3-compatible

### Alternativa: AWS S3

- $0.023/GB/mes
- Costos de egreso
- Ecosistema

## Email

Ver `recomendacion-email.md` para el análisis completo.

## Hosting

### Vercel (frontend)

- **$0** hasta 100GB bandwidth
- Deploy automático desde GitHub
- Edge functions
- SSL automático

### Railway (backend)

- **$5/mes** plan hobby
- Auto-deploy desde GitHub
- Soporta Python, Node, Go, etc.

### Fly.io (alternativa)

- **$0-5/mes** plan free
- Global edge
- Excelente DX

## CDN

### Cloudflare (recomendado)

- **$0** plan gratuito
- CDN global
- DDoS protection
- SSL automático

## Monitoring

### Sentry (errors)

- **$0** plan free tier (5,000 events/mes)
- Error tracking de frontend y backend
- Excelente para debugging

### Plausible (analytics)

- **$0** para ONGs (<10k pageviews/mes)
- Privacy-first
- Sin cookies
- GDPR compliant

## CI/CD

### GitHub Actions

- **$0** para repos públicos
- $0 hasta 2000 minutos/mes para privados
- Excelente para testing + deploy

## Logging

### Sentry (logs)

- **$0** plan free
- Integración con backend

### Alternativa: Logtail

- $0 hasta 5GB/mes
- Excelente UI

## Diagrama

```
┌─────────────────────────────────────────────────────┐
│                    GitHub                            │
│      (código + GitHub Actions = CI/CD)              │
└──────────────────────┬──────────────────────────────┘
                       │ (push a main)
                       ▼
┌─────────────────────────────────────────────────────┐
│  Vercel (frontend)        Railway (backend)         │
│  Transparency site       Sponsor portal + APIs       │
└──────────────┬──────────────────────────────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌──────────────┐  ┌──────────────┐
│   Cloudflare │  │  Supabase     │
│   (CDN + DNS)│  │  (Postgres)   │
└──────────────┘  └──────────────┘
       │
┌──────▼───────────────────────────────┐
│ Cloudflare R2 (storage) + Sentry   │
└─────────────────────────────────────┘
```

## Costo de infraestructura estimado

| Concepto | Mensual |
|---|---|
| Vercel | $0 |
| Railway | $10 |
| Supabase | $0 |
| Cloudflare | $0 |
| Cloudflare R2 | $0-1 |
| Auth0 / Clerk | $0 |
| Sentry | $0 |
| Plausible | $0 |
| Solver / reCAPTCHA | $0 |
| **Total** | **~$10-15/mes** |

---

*Última actualización: 2026-08-21*