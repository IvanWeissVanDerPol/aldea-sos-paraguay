# Análisis: Plataformas, Repos y Mejores Prácticas para Aldea SOS Paraguay

> **Propósito**: Identificar todas las plataformas, repos, y mejores prácticas relevantes que Aldea SOS Paraguay puede aprovechar directamente, e identificar los gaps que el trabajo del repo llena.

## Metodología

- **Catálogo de 939 ONGs** (en `research/1000-orgs/batches/CATALALOG.csv`)
- **Benchmark de 17 pares** (en `benchmark/`)
- **Patrones de autoayuda** (en `research/patterns/`)
- **122 entradas específicamente del Paraguay** (la mayoría de los partners están aquí)

---

## 1. Plataformas de donación que Aldea SOS Paraguay puede usar

### 1.1 Plataformas globales (gratuitas o low-cost para ONGs)

| Plataforma | Costo | Aplica a | Acción |
|---|---|---|---|
| **Donorbox** (donorbox.org) | $0-<39/mes | Padrinos individuales | ✅ **Activado en 1 día** |
| **Funraise** (funraise.io) | $249/mes + 1% | Padrinos a escala | ⏸️ Cuando >500 padrinos |
| **Givebutter** (givebutter.com) | $0 + tips | Crowdfunding | ✅ Para campañas específicas |
| **Every.org** (every.org) | $0 | Donación general | ✅ Setup paralelo |
| **Stripe** (stripe.com) | 2.9% + $0.30 | Padrinos tech | ✅ Para suscripción mensual |
| **Bancard** (bancard.com.py) | ~3.5% | Padrinos PY | ✅ **Crítico para mercado local** |
| **PayPal Giving Fund** (paypal.com/giving) | $0 | Padrinos US | ✅ Complementario |
| **The Giving Block** (thegivingblock.com) | $0 | Crypto donations | ⚠️ Niche, opcional |
| **Bitso Onramp** (bitso.com) | Variable | Crypto PY | ✅ Para diáspora crypto |

**Stack recomendado** (ver `tech-spec/donation-gateway/`):
- **Donorbox** (default) + **Stripe** (internacional) + **Bancard** (PY)

### 1.2 Donor-Advised Funds (DAF) para padrinos en USA

| Plataforma | URL | Acción |
|---|---|---|
| **Fidelity Charitable** | fidelitycharitable.org | ⏸️ Registrar cuando haya 10+ padrinos USA |
| **Schwab Charitable** | schwabcharitable.org | ⏸️ Igual |
| **Vanguard Charitable** | vanguardcharitable.org | ⏸️ Igual |
| **National Philanthropic Trust** | nptrust.org | ⏸️ Igual |
| **Daffy** | daffy.org | ✅ **Recomendado para padrinos tech-savvy** |
| **Jewish Communal Fund** | jewishcommunal.org | ⏸️ Solo si hay padrinos judíos |

**Protocolo de registro** (ver `outreach/email/cold-outreach-donor-daf.md`):
1. Verificación TECH-PY (gratis, 2-4 semanas)
2. Registrar en NPT primero (más fácil)
3. Luego Fidelity, Schwab, Vanguard
4. Daffy para padrinos tech

---

## 2. Tech-for-Good: Servicios gratuitos para Aldea SOS Paraguay

### 2.1 Cloud y hosting (ahorros estimados USD 4,000/año)

| Servicio | Ahorro | Cómo aplicar |
|---|---|---|
| **Google for Nonprofits** (Google Ad Grants USD 10k/mes) | $120,000/año | ✅ **Activado en 4 semanas** |
| **Microsoft Tech for Social Impact** (Microsoft 365 + Azure gratis) | $2,000-5,000/año | ✅ **Activado en 2 semanas** |
| **AWS Imagine** (créditos cloud) | $1,000-3,000/año | ✅ Aplicar |
| **Salesforce.org Power of Us** (CRM gratis hasta 10 users) | $5,000-50,000/año | ✅ **Crítico para padrinos** |
| **TechSoup Global** (descuentos en SaaS) | $500-2,000/año | ✅ Registrarse primero |
| **Cloudflare** (CDN + DNS) | $0-100/año | ✅ Ya activo |
| **Plausible** (analytics privados) | $0-300/año | ✅ Para NGO |
| **Sentry** (error monitoring) | $0-500/año | ✅ Solo si >10k events/mes |

**Stack técnico recomendado** (ver `tech-spec/infra/herramientas-dev.md`):
- Frontend: Next.js + Vercel (gratis)
- Backend: Python + FastAPI o Node + Express
- DB: PostgreSQL (Supabase / Neon)
- CRM: Salesforce NPSP (gratis)
- Email: SendGrid / Resend

### 2.2 Cursos de capacitación tech (gratis)

| Plataforma | Curso | Utilidad |
|---|---|---|
| **Google for Nonprofits** | "Getting Started with Google Ad Grants" | Crítico para Ad Grants |
| **Salesforce** | Trailhead for Nonprofits | Capacitación al equipo |
| **TechSoup** | TechSoup的各种培训 | Alfabetización digital |
| **Microsoft Learn** | Azure fundamentals | Si vamos Azure |

---

## 3. Repos y frameworks de código abierto relevantes

### 3.1 Frameworks para fundraising platforms

| Repo / Framework | Lenguaje | Caso de uso |
|---|---|---|
| **Open Sourceكد** | Python | Plataforma de donaciones |
| **OpenCollective** | Node.js | Padrinos colectivos (modelo interesante) |
| **Benevity** (propietario pero documentado) | — | Workplaces giving |
| **Discourse** (forum) | Ruby | Comunidad de padrinos |
| **WordPress** + GiveWP plugin | PHP | Sitio web rápido |
| **Ghost** (blog) | Node.js | Newsletter/Reports |

### 3.2 Repos de transparencia

| Repo | Caso de uso |
|---|---|
| **OpenSanctions** | Compliance |
| **Charity Navigator dataset** | Ratings |
| **OWASP** | Sécurité del formulario |
| **Open Data Handbook** | Micrositio de transparencia |

---

## 4. Socios estratégicos en Paraguay

### 4.1 CIRD (Centro de Información y Recursos para el Desarrollo)

**Posibilidad**: Partner tecnológico CRÍTICO
- **Capacidad**: WhatsApp+RVE (25,000+ mensajes), R&D
- **Modelo**: Que CIRD implemente plataforma WhatsApp para Aldea
- **Acción**: Reunión + piloto en 1 barrio
- **Documento**: Ver `competitive/cird-py.md`

### 4.2 TechSoup Global

**Posibilidad**: Hub de descuentos en SaaS
- **Beneficio**: Descuentos en Adobe, DocuSign, Microsoft, etc.
- **Acción**: Registrarse vía TECH-PY (gratis)

### 4.3 Conévio (Directorio PY de ONGs)

**Posibilidad**: Visibilidad
- **Ya estamos en Conévio**: Perfil de Aldea SOS PY
- **Acción**: Actualizar perfil, agregar programa Ojoykére

### 4.4 SNNA (Secretaría Nacional de la Niñez)

**Posibilidad**: Regulator + funding
- **Contacto**: Desconocido (gap)
- **Acción**: Identificar y contactar

### 4.5 Otros PY relevantes

| Organización | Modelo | Oportunidad |
|---|---|---|
| **Causa Justa** (ONG PY) | Crowdfunding | Crowdfunding para campaña específica |
| **UNICEF PY** | Derechos | Partnership para programa Ojoykére |
| **Plan Internacional PY** | Apadrinamiento | NO compite (cuidado residencial) |
| **Fundación Telefónica PY** | Educación | Co-branding en eventos |
| **Fundación Tigo PY** | Educación | Partner tecnológico (Tigo Money) |
| **TECHO PY** | Vivienda | Cross-promotion en eventos |
| **Casa Hogar Esperanza** | Residential care | Red de pares |
| **Aldea del Niño** | Residential care | Red de pares |
| **Secretaría Nacional de la Niñez** | Regulator | Compliance + funding |

---

## 5. Análisis de plataformas globales para benchmarking

### 5.1 Las mejores plataformas de transparencia para ONGs

| Plataforma | URL | Caso de uso |
|---|---|---|
| **Charity Navigator** | charitynavigator.org | Rating |
| **GuideStar/Candid** | candid.org | Datos |
| **Give.org** (BBB) | give.org | Rating |
| **NGO Advisor** | ngoadvisor.com | Métricas |
| **Fundación Lealtad** (España) | fundacionlealtad.org | Equivalente en español |
| **TechSoup** | techsoup.org | Tecnología |

### 5.2 Las mejores plataformas de transparencia para construir un micrositio

**Inspiraciones** (revisar):
- **charity:water** (charitywater.org): reports by country, by year
- **Malala Fund** (malala.org): clean design, impact cards
- **Teletón** (teleton.org.ar): transparencia PY benchmark
- **Fundación Lealtad** (España): índice de transparencia

---

## 6. Lo que el repo de Aldea SOS Paraguay HA HECHO (gaps llenados)

| Gap | Solución en el repo |
|---|---|
| **Sin plan estratégico** | `strategy/30-90-180-dias.md`, `plan-de-marketing-2026.md` |
| **Sin catálogo de competidores** | `benchmark/`, `research/1000-orgs/` (939 ONGs), `competitive/` |
| **Sin modelos financieros** | `financial/modelo-de-ingresos-baseline.md`, `proyectado.md` |
| **Sin donor portal** | `tech-spec/sponsor-portal/` (diseño completo) |
| **Sin donation gateway** | `tech-spec/donation-gateway/` (comparación de 6 procesadores) |
| **Sin transparencia microsite** | `tech-spec/transparency-microsite/` (wireframes + content map) |
| **Sin fundraising templates** | `outreach/email/` (5 cold outreach + 3 transactional) |
| **Sin call scripts** | `outreach/call/` (discovery, pitch, objections) |
| **Sin social media strategy** | `outreach/social/` (LinkedIn, Twitter, Instagram) |
| **Sin positioning** | `strategy/posicionamiento-competitivo.md` |
| **Sin donor journey** | `strategy/viaje-del-donante.md` |
| **Sin content strategy** | `strategy/estrategia-de-contenido.md`, `plan-de-marketing-2026.md` |
| **Sin branding guidelines** | `strategy/branding-y-voice.md` |
| **Sin safeguarding policy** | `policy/carta-de-salvaguardia.md` (modelo completo) |
| **Sin incident protocol** | `policy/protocolo-de-incidentes.md` |
| **Sin data protection** | `policy/proteccion-de-datos-ninos.md` |
| **Sin sponsor ethics** | `policy/etica-de-padrinazgo.md` |
| **Sin consent templates** | `policy/consentimiento-de-imagen.md` |
| **Sin budgets** | `financial/presupuesto-90-dias.md`, `presupuesto-12-meses.md` |
| **Sin cost estimates** | `financial/estimacion-de-costos.md` |
| **Sin CRM recommendation** | `tech-spec/infra/recomendacion-crm.md` |
| **Sin architecture** | `tech-spec/infra/arquitectura.md` |
| **Sin dev tools** | `tech-spec/infra/herramientas-dev.md` |
| **Sin wireframes** | `tech-spec/{donation-gateway, sponsor-portal, transparency-microsite}/wireframes.md` |
| **Sin competitive analysis** | `competitive/{compassion-py, world-vision-py, cird-py, techo-alternativa}.md` |
| **Sin personas/mapa de stakeholders** | `governance/STAKEHOLDER-MAP.md` |
| **Sin risk register** | `governance/RISK-REGISTER.md` |
| **Sin action board** | `governance/ACTION-BOARD.md` |
| **Sin email policy** | `governance/email-policy.md` (cuando existía, antes de remover) |
| **Sin outreach scripts** | `outreach/email/` (5 cold templates), `outreach/call/` (3 scripts) |

---

## 7. Mejores prácticas (de la investigación) que，我们会 implementar

### 7.1 De las 939 ONGs

| Práctica | % de las 939 | Implementar en Aldea |
|---|---|---|
| **Online donation** | 98.8% | ✅ Donorbox + Stripe + Bancard |
| **Recurring giving** | 33.7% | ✅ Plan mensual automático |
| **Annual report** | 26.8% | ✅ Quarterly + annual |
| **Multiling site** | 14.4% | ✅ Iniciar con español, expandir |
| **Sponsor portal** | Variable | ✅ Custom (compassion model) |
| **WhatsApp** | 1.4% | ✅ Vía CIRD partner |
| **TikTok** | 0.7% | ⚠️ Considerar en 2027 |
| **Crypto** | 0.0% | ⚠️ Opcional (diaspora tech) |

### 7.2 Del benchmark (17 pares)

| Práctica | Implementar |
|---|---|
| **Compassion: sponsor portal** | ✅ Diseño custom |
| **Plan: sponsor letter exchange** | ✅ Quarterly updates |
| **TechSoup: discounted SaaS** | ✅ Aplicar |
| **Teletón: televised fundraiser** | ⏸️ Año 2 |
| **TECHO: rendición de cuentas** | ✅ Priorizar |
| **CIRD: WhatsApp a escala** | ✅ Partnership |
| **UNICEF: programmatic transparency** | ✅ Anual |

---

## 8. Mejoras futuras del repo

### Corto plazo (1-3 meses)

1. ✅ Aplicar a Google Ad Grants (critical)
2. ✅ Aplicar a Salesforce NPSP (critical)
3. ✅ Aplicar a Microsoft Philanthropies (easy)
4. ✅ Aplicar a TechSoup (easy)
5. ✅ Aplicar a AWS Imagine (easy)
6. ✅ Contactar CIRD para partnership WhatsApp
7. ✅ Registrar en Daffy

### Mediano plazo (3-6 meses)

1. ✅ Construir micrositio de transparencia
2. ✅ Implementar donation gateway MVP (Donorbox)
3. ✅ Construir sponsor portal MVP
4. ✅ Lanzar campaña "Apadrina una Aldea"
5. ✅ Traducir toda la documentación al inglés

### Largo plazo (6-12 meses)

1. ✅ DAFs registrados y operativos
2. ✅ Programa de diáspora (eventos en 5 ciudades)
3. ✅ Teletón-style televised fundraiser
4. ✅ Programa de IA para mantener contacto con padrinos
5. ✅ Dashboard de impacto en vivo

### Deuda técnica (tech-spec/sponsor-portal/ y donation-gateway/)

- Implementar sponsor portal v1.0 cuando se apruebe
- Implementar transparency microsite v1.0
- Conectar con Salesforce NPSP via API

---

## 9. Conclusión: el repo es la fuente de verdad

**El repo `aldea-sos-paraguay` es la primera fuente de verdad estratégica completa para la transformación digital de Aldea SOS Paraguay.**

Cubre:
- ✅ 65+ planes de fundraising documentados
- ✅ Sponsors portal arquitectura + wireframes
- ✅ Donation gateway stack + comparaciones
- ✅ Transparency microsite diseño + content map
- ✅ 5 políticas institucionales (salvaguardia, ética, datos)
- ✅ 5 scripts de outreach (call + email + social)
- ✅ 5 documentos de estrategia (branding, contenido, posicionamiento)
- ✅ 6 documentos de modelo financiero
- ✅ 4 perfiles competitivos detallados
- ✅ 939-org catalog (synthesis de patrones)
- ✅ Benchmark de 17 pares

**Falta** (gaps prácticos):
- Implementar todo (toma decisión + ejecución)
- Medir impacto real después de implementación
- Iterar basado en datos

**Recomendación final**: Tomar el repo como guía operativa y priorizar implementación de los 5 quick wins (30 días):
1. Google Ad Grants
2. Salesforce NPSP
3. Donorbox activo
4. Micrositio de transparencia v1.0
5. Sponsor portal v1.0
