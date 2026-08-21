# Stack Técnico — Transparency Microsite

> Decisión técnica sobre qué construir para el micrositio de transparencia.

## Decisión

**Stack elegido**: **Next.js + Sanity.io + Vercel + Cloudflare**

```
┌─────────────────────────────────────────────┐
│              Cloudflare CDN                  │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│         Vercel (hosting Next.js)             │
└──────────────────┬──────────────────────────┘
                   │
       ┌───────────┴───────────┐
       │                       │
┌──────▼──────┐        ┌──────▼──────┐
│  Next.js   │        │  Sanity.io │
│  (static)  │◄──────►│  (CMS)     │
└────────────┘        └────────────┘
       │
┌──────▼────────────────────────────┐
│  Plausible Analytics (privacy)  │
└───────────────────────────────────┘
```

## Por qué este stack

### Next.js (React + Static Generation)

- **Performance**: pre-rendered HTML = carga sub-1s
- **SEO**: built-in (importante para Ad Grants)
- **Developer experience**: excelente para escalar
- **Costo**: $0 en Vercel (hasta 100GB bandwidth)

**Alternativas consideradas**: WordPress (menos performance, más plugins), Astro (similar, menos ecosistema).

### Sanity.io (CMS)

- **Gratuito** para ONGs verificadas
- **Editor amigable** para personal no técnico
- **Versionado** de contenido
- **API en tiempo real**
- **Imagenes optimizadas** automáticamente

**Por qué no WordPress**: requiere mantenimiento, plugins, seguridad.

### Vercel (hosting)

- **Gratis** para sitios con <100GB bandwidth/mes
- **HTTPS** automático
- **CDN global**
- **Despliegues** automáticos desde GitHub

### Cloudflare (CDN + DNS)

- **Gratis** para ONGs
- **CDN global** (importante para padrinos internacionales)
- **Protección DDoS**
- **SSL** automático

### Plausible (analytics)

- **Gratis** para ONGs (<10k pageviews/mes)
- **Privacy-first** (sin cookies, GDPR compliant)
- **Mejor que Google Analytics** para casos sensibles (privacidad)

## Alternativa más simple

Si se quiere **más simple** aún, **Astro + Markdown + Vercel**:

- **Cero CMS**: contenido en archivos Markdown
- **Cero BD**: todo estático
- **Cero mantenimiento**: deploy automático en push a GitHub
- **Costo**: $0
- **Voluntario**: cualquier dev puede actualizar el sitio

**Desventaja**: requiere alguien con conocimiento de Git para actualizar.

## Despliegue

```
git push origin main
       │
       ▼
Vercel detecta push
       │
       ▼
Build automático
       │
       ▼
Deploy
       │
       ▼
CDN actualiza
       │
       ▼
Sitio actualizado en 1-2 minutos
```

## CI/CD

- **GitHub Actions**: opcional para validaciones automáticas
- **Tests**: vitest para lógica, playwright para E2E

## Performance

- **Lighthouse score objetivo**: 95+
- **Tiempo de carga**: <1s
- **Mobile**: 100% responsive
- **SEO**: meta tags, sitemap, schema.org

## Seguridad

- **HTTPS**: automático
- **CSP**: Content Security Policy estricta
- **No datos sensibles**: cero info del niño
- **No almacena datos del padrino** (se procesan en otro sistema)

## Monitoreo

- **Plausible**: tráfico, fuentes de tráfico, páginas más vistas
- **Sentry** (opcional): errores de frontend
- **Alertas**: cuando el sitio cae o crece el tráfico 5x

## Internacionalización

- **Default**: español
- **Alternativa**: inglés (manual, no automático)
- **Multi-moneda**: Gs. en el sitio, traducciones a USD en PDFs

## Tiempo de setup

| Hito | Tiempo |
|---|---|
| Configurar Next.js + Vercel | 1 día |
| Configurar Sanity.io | 1 día |
| Migrar contenido inicial | 2 semanas |
| QA + accesibilidad | 1 semana |
| **Total** | **~3 semanas** |

## Costo

| Concepto | Mensual |
|---|---|
| Vercel | $0 |
| Sanity.io | $0 |
| Cloudflare | $0 |
| Plausible | $0 |
| Dominio | ~$15/año |
| **Total** | **$0–1/mes** |

---

*Última actualización: 2026-08-21*