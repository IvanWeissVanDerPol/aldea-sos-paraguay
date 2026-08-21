# Aldeas Infantiles SOS Paraguay — Repositorio de Investigación Estratégica

> **Propietario**: IvanWeissVanDerPol (Ivan Weiss)
> **Visibilidad**: Público
> **Iniciado**: 2026-08-21
> **Propósito**: Dossier de investigación estratégica sobre Aldeas Infantiles SOS Paraguay — sus operaciones, benchmarks de pares, 939 proyectos similares, 65+ oportunidades de ingresos, y materiales de outreach para presentar a aliados/donantes.

**Todo el repositorio está en español.** El cliente (Aldea SOS Paraguay) no habla inglés.

---

## 🚀 Empezar aquí

- **[`start-here/5min-summary.md`](./start-here/5min-summary.md)** — una página, el panorama completo
- **[`start-here/30min-deep-dive.md`](./start-here/30min-deep-dive.md)** — orden de lectura anotado
- **[`start-here/`](./start-here/)** — todas las guías de entrada, incluyendo rutas por audiencia

Si sabés quién sos:
- 👥 **Soy del equipo de Ivan** → [`start-here/for-aiw-team.md`](./start-here/for-aiw-team.md)
- 🎯 **Voy a presentar a Aldea SOS Paraguay** → [`start-here/for-sos-py.md`](./start-here/for-sos-py.md)
- 💼 **Voy a hacer outreach a un donante / aliado corporativo** → [`start-here/for-donor-outreach.md`](./start-here/for-donor-outreach.md)

---

## 📧 Sistema de Email (Resend en `mail.paragu-ai.com`)

El sistema de email usa **Resend** sobre el dominio `mail.paragu-ai.com` (región `sa-east-1` para baja latencia desde Paraguay).

| Documento | Contenido |
|---|---|
| [`tech-spec/email/sender-config.md`](./tech-spec/email/sender-config.md) | Setup de Resend, identidad del remitente (en español) |
| [`tech-spec/email/dns-records.md`](./tech-spec/email/dns-records.md) | SPF + DKIM + DMARC records |
| [`tech-spec/email/api-integration.md`](./tech-spec/email/api-integration.md) | SDK Node/Python |
| [`outreach/email/`](./outreach/email/) | Plantillas de email en español |
| [`governance/email-policy.md`](./governance/email-policy.md) | Quién envía desde qué, idioma, frecuencia |

**Identidad del remitente por defecto**: `Aldeas Infantiles SOS Paraguay <amigos@paragu-ai.com>` (espeja el programa "Amigos SOS" existente).

Click tracking: habilitado. Open tracking: deshabilitado.

---

## 📁 Estructura del repositorio

El repo está organizado por **propósito**, alfabéticamente:

| Carpeta | Propósito | Qué contiene |
|---|---|---|
| **[`about/`](./about/)** | Quién/qué/dónde de Aldea SOS Paraguay | 8 archivos del dossier + resumen ejecutivo + identidad, programas, financiamiento, madurez digital, escándalo, personal, SWOT |
| **[`archive/`](./archive/)** | Archivos deprecados (actualmente vacía) | Reservada |
| **[`benchmark/`](./benchmark/)** | Comparación con pares | 9 pares internacionales + 8 PY + matriz comparativa + inspiration board + 5 PY deep-dives |
| **[`competitive/`](./competitive/)** | Análisis profundos de competidores (esqueleto) | Reservada |
| **[`evidence/`](./evidence/)** | Artefactos crudos (HTMLs de SOS PY) | 15 HTMLs + SOURCES.md + EXTRACTED-FACTS.md + guía de niveles de evidencia |
| **[`financial/`](./financial/)** | Modelo de ingresos + presupuestos (esqueleto) | Reservada |
| **[`governance/`](./governance/)** | Gobernanza del repo | INDEX, GLOSSARY, STYLE-GUIDE, RISK-REGISTER, STAKEHOLDER-MAP, ACTION-BOARD, CHANGELOG, email-policy, RESTRUCTURE-PLAN |
| **[`outreach/`](./outreach/)** | Scripts de email/llamada/redes | Plantillas de cold outreach (es), plantillas de email (es), scripts de llamada (planificados) |
| **[`pitch/`](./pitch/)** | Decks de presentación, one-pagers, FAQ (todo en español) | Estructura del pitch deck + resumen ejecutivo + 3 one-pagers + FAQ |
| **[`policy/`](./policy/)** | Protección infantil + ética (esqueleto — URGENTE) | Reservada |
| **[`research/`](./research/)** | Catálogo de 1000 ONGs + patrones | CATALOG.csv (939 ONGs × 12 cols) + SYNTHESIS.md + 9 slices + 4 patrones |
| **[`revenue/`](./revenue/)** | 65+ fuentes de ingreso | TOP 15 + rápido wins 90 días + apéndice de salvaguardia + 13 archivos por grupo |
| **[`start-here/`](./start-here/)** | Puntos de entrada por audiencia (en español) | Resumen 5 min + deep dive 30 min + guías por audiencia |
| **[`strategy/`](./strategy/)** | Planes 30/60/90 + viaje del donante (esqueleto) | Reservada |
| **[`tech-spec/`](./tech-spec/)** | Especificaciones técnicas | Email (sender config, DNS, API integration) — pasarela de donación/portal de apadrinamiento/transparency (esqueleto) |
| **[`_originals/`](./_originals/)** | Red de seguridad pre-restructuración | Originales de DOSSIER.md, PEER-BENCHMARK.md, REVENUE-AVENUES.md antes del split |

---

## 🔥 Hallazgos principales

1. **No hay aldea en San Lorenzo, Paraguay.** Las 5 aldeas de Paraguay son Asunción, Luque, San Ignacio, Hohenau, Belén. El único punto operativo en San Lorenzo es la campaña "Convertí tu vuelto en sonrisas" del supermercado Kingo desde marzo de 2017.
2. **Aldea SOS PY sirve a 1.000+ niños** con marca de 55 años, 18+ aliados corporativos, y el programa de prevención "Proyecto Ojoykére" de 2024.
3. **Escándalo Gmeiner 2025** (Austria) — Paraguay fue *más rápida* que la Federación en responder públicamente. Tienen un Comité Nacional de Salvaguardia. Oportunidad: liderar en transparencia post-escándalo.
4. **Madurez digital: 4/10.** Sin donación online, `/transparencia` roto, sin reporte anual, sin portal de apadrinamiento, sin TikTok, sin Google Ad Grants.
5. **TOP 5 rápido wins de ingresos** (90 días): pasarela de donación Donorbox, Google Ad Grants, arreglar `/transparencia` + reporte anual, "Apadrina una Aldea" sponsor-a-house, donaciones vía Tigo/Personal. Aumento potencial: USD 70-275k/año.
6. **Benchmark de 939 ONGs** confirma: 99% de los pares aceptan donaciones online, 34% tienen donación recurrente, 27% publican reportes anuales. Aldea PY está atrás en los tres.

---

## 🔗 Archivos más útiles (por tema)

### ¿Querés la historia de la org?
→ [`about/executive-summary.md`](./about/executive-summary.md)
→ [`about/identity.md`](./about/identity.md)
→ [`about/programs.md`](./about/programs.md)
→ [`about/scandal-timeline.md`](./about/scandal-timeline.md)

### ¿Querés saber qué hacen otras ONGs?
→ [`benchmark/peers/international-peers.md`](./benchmark/peers/international-peers.md)
→ [`benchmark/peers/paraguay-peers.md`](./benchmark/peers/paraguay-peers.md)
→ [`benchmark/peers/feature-matrix.md`](./benchmark/peers/feature-matrix.md)
→ [`benchmark/PY-deep-dives/`](./benchmark/PY-deep-dives/)

### ¿Querés una lista de ideas de ingresos?
→ [`revenue/top-15-recommended.md`](./revenue/top-15-recommended.md)
→ [`revenue/90-day-rápido-wins.md`](./revenue/90-day-rápido-wins.md)
→ [`revenue/streams/`](./revenue/streams/)

### ¿Querés el catálogo de 939 ONGs?
→ [`research/1000-orgs/batches/CATALOG.csv`](./research/1000-orgs/batches/CATALOG.csv)
→ [`research/1000-orgs/batches/SYNTHESIS.md`](./research/1000-orgs/batches/SYNTHESIS.md)
→ [`research/1000-orgs/slices/`](./research/1000-orgs/slices/)

### ¿Querés las páginas crudas de SOS Paraguay?
→ [`evidence/`](./evidence/)

### ¿Querés materiales de pitch?
→ [`pitch/`](./pitch/)

### ¿Querés plantillas de email?
→ [`outreach/`](./outreach/) — plantillas de email en español

### ¿Querés specs técnicas?
→ [`tech-spec/`](./tech-spec/)

### ¿Querés gobernanza del repo?
→ [`governance/`](./governance/)

---

## 🛣️ Rutas de lectura

### Equipo de Ivan
1. [`start-here/5min-summary.md`](./start-here/5min-summary.md)
2. [`start-here/for-aiw-team.md`](./start-here/for-aiw-team.md)
3. [`about/digital-maturity.md`](./about/digital-maturity.md)
4. [`revenue/90-day-rápido-wins.md`](./revenue/90-day-rápido-wins.md)
5. [`tech-spec/`](./tech-spec/)

### Presentando a Aldea SOS Paraguay
1. [`start-here/for-sos-py.md`](./start-here/for-sos-py.md)
2. [`about/executive-summary.md`](./about/executive-summary.md)
3. [`revenue/top-15-recommended.md`](./revenue/top-15-recommended.md)
4. [`pitch/executive-summary-pdf.md`](./pitch/executive-summary-pdf.md)
5. [`pitch/one-pager-sos-py.md`](./pitch/one-pager-sos-py.md)

### Outreach a donante / aliado corporativo
1. [`start-here/for-donor-outreach.md`](./start-here/for-donor-outreach.md)
2. [`about/executive-summary.md`](./about/executive-summary.md)
3. [`benchmark/`](./benchmark/)
4. [`pitch/one-pager-corporate-ally.md`](./pitch/one-pager-corporate-ally.md)

---

## 📚 Documentos de referencia

- **[`INDEX.md`](./INDEX.md)** — índice maestro de cada archivo del repo
- **[`governance/GLOSSARY.md`](./governance/GLOSSARY.md)** — acrónimos y jerga
- **[`governance/STYLE-GUIDE.md`](./governance/STYLE-GUIDE.md)** — convenciones de idioma y citación
- **[`governance/RISK-REGISTER.md`](./governance/RISK-REGISTER.md)** — seguimiento de riesgos
- **[`governance/STAKEHOLDER-MAP.md`](./governance/STAKEHOLDER-MAP.md)** — quién es quién
- **[`governance/ACTION-BOARD.md`](./governance/ACTION-BOARD.md)** — Kanban vivo
- **[`governance/CHANGELOG.md`](./governance/CHANGELOG.md)** — qué cambió cuándo

---

## 📐 Convenciones del repositorio

- **Carpetas**: lowercase, separadas por guión, con nombre de propósito (sin prefijos numéricos)
- **Índices de subcarpeta**: `README.md` (siempre)
- **Moneda**: Gs. (Guaraníes) primaria, USD entre paréntesis con conversión. ~Gs. 7,300 = USD 1.
- **Idiomas**: Español (default), inglés solo para audiencias internacionales
- **Niveles de evidencia**: `[official]` / `[tercero-party]` / `[ddgs]` / `[estimate]` / `[unknown]`
- **Sin secretos** — sin listas de donantes, sin nombres de niños, sin documentos internos

---

## 📊 Estado (2026-08-21)

| Carpeta | Estado |
|---|---|
| `start-here/` | ✅ Completo, todo en español (6 archivos) |
| `about/` | ✅ Completo (10 archivos) |
| `evidence/` | ✅ Completo (19 archivos) |
| `benchmark/` | ✅ Completo (13 archivos) |
| `research/` | ✅ Completo (31 archivos) |
| `revenue/` | ✅ Completo (19 archivos) |
| `pitch/` | ✅ Completo, todo en español (7 archivos) |
| `governance/` | ✅ Completo, incluye email-policy (10 archivos) |
| `outreach/email/` | ✅ Completo — 5 plantillas cold-outreach + 3 plantillas transaccionales + followup (español) |
| `tech-spec/email/` | ✅ Completo — sender-config + dns-records + api-integration (3 archivos) |
| `tech-spec/donation-gateway/` | ⚠️ Vacío |
| `tech-spec/transparency-microsite/` | ⚠️ Vacío |
| `tech-spec/sponsor-portal/` | ⚠️ Vacío |
| `tech-spec/infra/` | ⚠️ Vacío |
| `financial/` | ⚠️ Vacío |
| `strategy/` | ⚠️ Vacío |
| `policy/` | ⚠️ Vacío — **URGENTE**, necesita carta de salvaguardia |
| `competitive/` | ⚠️ Vacío |
| `archive/` | (Reservada) |
| `_originals/` | ✅ Red de seguridad |

---

*Última actualización: 2026-08-21 por Hermes.*
*Moneda: Gs. 7,300 = USD 1 (aprox. 2026).*