# CHANGELOG

## 2026-08-21

### Removido: sistema de email / Resend

- Tras feedback del usuario: el repo debería contener solo cosas relevantes para el cliente (Aldea SOS Paraguay).
- Eliminado:
  - `tech-spec/email/` (sender-config, dns-records, api-integration)
  - `outreach/email/` (5 plantillas cold-outreach + 3 plantillas transaccionales + followup + templates/)
  - `governance/politica-de-email.md`
  - Sección "Sistema de Email" del README principal
  - Todas las referencias en start-here/, pitch/, governance/
- `outreach/` queda con solo subcarpetas `call/` y `social/` (esqueletos)
- `tech-spec/` queda con skeletal subcarpetas (donation-gateway, sponsor-portal, transparency-microsite, infra) — email/ removido
- `outreach/call/`, `outreach/social/`, `tech-spec/`, `financial/`, `strategy/`, `policy/`, `competitive/`, `archive/` siguen como esqueletos (con .gitkeep)

## (más temprano este día)

### Spanish-fy completo

- **Todo el repositorio en español**: README, INDICE, governance, evidence, research, benchmark, revenue, about.
- **Tres pasadas de traducción**:
  1. Encabezados y nombres de sección traducidos al español
  2. Cuerpo de los documentos traducido (frases, oraciones, jerga)
  3. Todos los archivos renombrados a equivalentes en español
- Subcarpetas renombradas previamente (palabras en lugar de números).
- Identificadores técnicos (URLs, código, headers CSV) y nombres de marcas (Tigo, Itaú, Areté, Compassion, Plan, etc.) se mantienen en su forma original.
- **Resultado**: 96 archivos markdown en español. 0 enlaces realmente rotos en carpetas pobladas. 2 enlaces intencionales (apuntan a esqueletos documentados en README).
- Aplica regla: "el cliente no habla inglés → toda comunicación al cliente es en español".


### Spanish-fy completo (más tarde hoy)

- **Todo el repositorio en español**: README, INDEX, governance, evidence, research, benchmark, revenue, about, META.
- Subcarpetas renombradas previamente (palabras en lugar de números).
- Identificadores técnicos (URLs, nombres de archivos, código) y nombres de marcas (Tigo, Itaú, Areté, etc.) se mantienen en su forma original.
- Aplica regla: "el cliente no habla inglés → toda comunicación al cliente es en español".

### Reshape v2 — carpetas por propósito + Email system (más tarde hoy)

- Renombradas todas las carpetas numeradas a nombres por propósito:
  `start-here/`, `about/`, `evidence/`, `benchmark/`, `research/`, `revenue/`,
  `pitch/`, `outreach/`, `tech-spec/`, `financial/`, `strategy/`, `policy/`,
  `competitive/`, `archive/`, `governance/`, `_originals/`
- Creado `INDEX.md` (índice maestro)
- Actualizado `README.md` como punto de entrada con vista enlazada
- Arregladas todas las referencias cruzadas (0 enlaces realmente rotos en carpetas pobladas)
  - 3 registros DNS documentados (SPF, DKIM, DMARC)
  - Ejemplos de integración SDK Node + Python
  - 5 plantillas de cold outreach (corporativo, tech, fundación, DAF, SOS PY) — todas en español
  - 3 plantillas de email transaccional (recibo de donación, bienvenida, newsletter) — todas en español HTML + texto plano
  - Política de email (quién envía desde qué, reglas de idioma, frecuencia, feriados)

### Reshape v1 (más temprano hoy)

- Creado esquema de carpetas numeradas: `start-here/` hasta `archive/` + `governance/` + `_originals/`
- Movidos originales a `_originals/` por seguridad
- Agregado `start-here/` con resumen 5min, deep dive 30min, y guías de entrada por audiencia (equipo Aiw, SOS PY, outreach a donantes)
- Agregado `governance/` con INDEX, GLOSSARY, STYLE-GUIDE, RISK-REGISTER, STAKEHOLDER-MAP, ACTION-BOARD, RESTRUCTURE-PLAN
- Creados esqueletos de carpetas vacías para `benchmark/`, `research/`, `revenue/`, `pitch/`, `outreach/`, `tech-spec/`, `financial/`, `strategy/`, `policy/`, `competitive/`
- Archivos MD grandes originales (`DOSSIER.md`, `PEER-BENCHMARK.md`, `REVENUE-AVENUES.md`, `SYNTHESIS.md`) preservados en `_originals/` hasta dividirlos en archivos temáticos de subcarpeta

### Más temprano en el día

- 02:57 UTC — comenzó la sesión de investigación
- 03:10 — repo creado (privado)
- 03:11 — dossier inicial + fuentes pusheadas (17.720 inserciones, 20 archivos)
- 03:14–03:24 — despachados 2 subagentes (catálogo + ingresos); ambos atascados en loops de verificación
- 03:25–03:43 — Hermes escribió 11 batches más de catálogo + script ensamblador; CSV con 939 filas únicas + SYNTHESIS escrito
- 03:43 — segundo commit pusheado (CATALOG + SYNTHESIS + REVENUE)
- 03:49 — repo temporalmente flipeado a público (Ivan pidió); flipeado de vuelta a privado; luego re-flippeado público por segunda instrucción de Ivan (estado actual: público)
- 03:54 — governance/ agregado (RESTRUCTURE-PLAN.md, README.md)
- 03:56 — comienza restructuración de carpetas; originales archivados; subcarpetas creadas
- 03:57+ — archivos de punto de entrada + documentos de gobernanza escritos

---

*Solo eventos mayores. Ediciones menores no van aquí.*