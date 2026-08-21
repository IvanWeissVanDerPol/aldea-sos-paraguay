# Tech Spec — Infraestructura

> Especificaciones para la infraestructura técnica de Aldea SOS Paraguay.

## Resumen

Esta carpeta contiene decisiones de infraestructura compartida entre donation-gateway, sponsor-portal, transparency-microsite, y CRM.

## Archivos

- **[`arquitectura.md`](./arquitectura.md)** — diagrama de la arquitectura general
- **[`recomendacion-crm.md`](./recomendacion-crm.md)** — Salesforce NPSP vs HubSpot vs Airtable
- **[`recomendacion-email.md`](./recomendacion-email.md)** — Resend vs SendGrid vs Mailgun

## Arquitectura simplificada

```
        ┌─────────────────────────────┐
        │      Cloudflare (CDN + DNS)      │
        └──────────────┬──────────────────┘
                       │
        ┌──────────────▼──────────────────┐
        │   Vercel (Transparency Site)     │
        └──────────────────────────────────┘
                       │
        ┌──────────────▼──────────────────┐
        │ Railway / Fly.io (Sponsor Portal)│
        └──────────────┬──────────────────┘
                       │
        ┌──────────────▼──────────────────┐
        │   PostgreSQL (Supabase o Neon)    │
        └──────────────────────────────────┘
                       │
        ┌──────────────▼──────────────────┐
        │ Salesforce NPSP (CRM - free tier) │
        └──────────────────────────────────┘
```

## Por qué este stack

- **Cloudflare**: CDN global + DDoS + SSL
- **Vercel**: hosting gratuito o bajo costo para frontend
- **Railway/Fly.io**: backend simple + escalable
- **PostgreSQL**: robusto, código abierto, gratuito
- **Salesforce NPSP**: CRM gratuito para ONGs

## Costo total estimado

| Servicio | Costo |
|---|---|
| Cloudflare | $0 |
| Vercel | $0 |
| Railway | $5-20/mes |
| PostgreSQL | $0-25/mes |
| Salesforce NPSP | $0 |
| **Total** | **$5-45/mes** |

---

*Última actualización: 2026-08-21*