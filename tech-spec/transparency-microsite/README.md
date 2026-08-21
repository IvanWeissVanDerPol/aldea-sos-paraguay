# Tech Spec — Transparency Microsite

> Especificaciones para el micrositio de transparencia de Aldea SOS Paraguay.

## Archivos

- **`mapa-de-contenido.md`** — qué se publica en cada sección
- **`stack-tecnico.md`** — solución técnica recomendada
- **`wireframes.md`** — bosquejos de las pantallas principales

## Resumen ejecutivo

El micrositio de transparencia es un **sitio web público** donde Aldea SOS Paraguay publica:

- **Métricas de impacto** (anuales, trimestrales)
- **Reportes financieros** auditados
- **Política de salvaguardia** (la carta de `policy/carta-de-salvanguardia.md`)
- **Reportes trimestrales** de salvaguardia
- **Casos de éxito** (anonimizados)
- **Cómo se usan las donaciones**

**Objetivo principal**: diferenciador competitivo post-escándalo. Ser la **primera ONG de bienestar infantil PY** con un micrositio de transparencia público.

## Por qué es importante

- **Confianza**: 73% de los donantes verifican la transparencia antes de donar
- **Compliance**: cada vez más fundaciones y padrinos exigen reportes
- **Donación promedio**: las ONGs con transparencia pública reciben 2-3x más donaciones
- **Reducción de fricción**: un buen micrositio reduce preguntas repetitivas
- **Marketing**: contenido ESG-friendly para aliados corporativos

## Plazo

| Hito | Plazo |
|---|---|
| Mapa de contenido | 1 semana |
| Diseño UI | 2 semanas |
| Implementación | 4 semanas |
| Datos (migración de reportes existentes) | 2 semanas |
| QA + launch | 1 semana |
| **Total** | **~10 semanas** |

## Stack técnico recomendado

- **Frontend**: Next.js (React) en Vercel
- **CMS**: Sanity.io o Contentful (gratis para ONGs pequeñas)
- **Hosting**: Vercel (gratis hasta 100GB bandwidth)
- **CDN**: Cloudflare
- **Analytics**: Plausible (gratis para ONGs) o Google Analytics
- **Embed**: PDFs via iframe; tablas via Markdown

---

*Última actualización: 2026-08-21*