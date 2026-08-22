# Verification: aldeasinfantiles.org.py vs demo site assumptions
**Date:** 2026-08-22
**Verifier:** subagent (delegated)
**Scope:** RUC, aldeas list, aliados, current campanas, URL structure

## Sources compared
- **Live source** (`aldeasinfantiles.org.py`): 15 verbatim HTMLs in `/opt/data/scratchpad/aios_py_*.html`
- **Demo site**: `/opt/data/projects/aldea-sos-paraguay/public/` (HTML pages + `data/*.json`)
- **Demo docs** (cross-check): `/opt/data/projects/aldea-sos-paraguay/about/*.md`

## 1. RUC — ✅ MATCH
| Where | Value |
|---|---|
| Source `aios_py_ong.html:829` | `80016122` |
| Demo `prensa/index.html:101` | `(RUC 80016122)` |
| Demo `sobre-nosotros/index.html:78` | `(RUC 80016122)` |

The RUC is consistent and cited consistently in the demo's "neutral narrator" voice (with parentheses, not in first person).

## 2. Aldeas list — ✅ MATCH (5 aldeas)
Source (`aios_py_about.html:645`, `aios_py_home.html:837`, `aios_py_ong.html:24`):
> "5 Aldeas Infantiles SOS … Hohenau, Asunción, San Ignacio, Luque y Belén"

Demo `data/aldeas.json` — 5 entries: asuncion, luque, san-ignacio, hohenau, belen (+ 6th entry for Ojoykére prevention program). Names + departments match.

**Caveat to flag:** source has an internal inconsistency — `aios_py_about.html:548` says "4 Aldeas Infantiles SOS" (older copy), while line 645 says 5. Demo uses 5 ✅. Documented in `about/programs.md`.

**Demo-side invention (not source-backed):**
- `year_founded` per-aldea (1980, 1995, 2005, 2015) — source HTML does not list these years. Demo is honest-ish: `capacity` and `year_founded` look like best-guess placeholders, not assertions of fact. These should be labeled "demo placeholder" if shown to outsiders.
- Per-aldea `capacity` strings ("~120 niños y jóvenes", "~80 niños y jóvenes", "~60", "~50", "~40") — not in source. Source only states org-wide **1.000 niños** (`aios_py_about.html:645`, `aios_py_aliados.html:1081`, `aios_py_xq.html`).
- Per-aldea `contact_phone` `(021) 247 4000` for all 5 — plausible (this is the org-wide switchboard from source) but is duplicated rather than per-aldea; source doesn't publish per-aldea phones.

## 3. Aliados — ⚠️ PARTIAL MATCH (demo doesn't try to enumerate)
Source `aios_py_aliados.html` lists **21 aliados corporativos** (logos + h6 tags):
> Fundación José de la Sobera, Raatz, Remax Paraguay, Progresar Corporation, Argor, Axion, Ueno Bank, Supermercados Areté, Jagua'i Marketing Deportivo, Cooperativa La Holanda, Toyotoshi, Huawei, DHL, Fundación Itaú, Banco Familiar, Farmaoliva, Comercial El Torito II, Tupi S.A, Escribanía Wapenka, Grupo Laso

Demo site **does not enumerate** any of them — it links out:
- `recursos/index.html` → `aldeasinfantiles.org.py/como-ayudar/aliados-corporativos`
- `empresas/index.html:75` → same outbound link
- `transparencia/financiera/index.html:89` → "Aliados corporativos (18+)" (source has 21; demo rounds to 18+ — slight under-count, but defensible as "18+")

**No factual error** — the demo deliberately does not list individual aliados to avoid drift. ✅

## 4. Campañas — ⚠️ PARTIAL MATCH (one real discrepancy)

### Source campanas (verified from `aios_py_campanas.html`)
**"Convertí tu vuelto en sonrisas"** — 6 supermarket chains:
1. **Kingo** (since marzo 2017 — San Lorenzo single store)
2. **Areté** (4 stores: Pinedo, Lambaré, Primer Presidente, Sausalito — since 2012/2013)
3. **Gran Vía** (sucursal Luque — alianza desde 8 mayo 2017)
4. **El Torito**
5. **Luisito Félix Bogado**
6. **El Ahorrazo**

Plus historic: "Moneditas que alimentan" (2011, alcancías).

**"Regalamos Sonrisas"** — TUPI annual:
- Source `aios_py_regalamos.html:544` — dated **agosto 5 2026**
- "sexta edición"
- Runs **4–16 de agosto 2026**
- URL: `/vuelve-regalamos-sonrisas-,-la-campana-solidaria-de-tupi-y-aldeas-infantiles-sos`

### Demo campanas
Demo mentions only **4 of the 6** supermarket chains: Tupi, Areté, Kingo, Gran Vía.
**Omitted:** El Torito, Luisito Félix Bogado, El Ahorrazo.

This is a partial list — not strictly a "false claim", but readers consulting the demo might assume these 4 are the complete set. The demo does include Tupi/Areté/Kingo/Gran Vía in news.json tags and the financiera table.

### Other campana facts
| Claim | Source | Demo | Status |
|---|---|---|---|
| Kingo joined marzo 2017, single San Lorenzo store | `aios_py_campanas.html:628` | README asserts same | ✅ |
| Tupi annual campaign in August | `aios_py_regalamos.html` dated agosto 5 2026 | `prensa/index.html:165`, `sobre-nosotros/index.html:205` say "Regalamos Sonrisas con Tupi en agosto" | ✅ |
| Demo's news.json `tupi-2025-campana` dated **2025-08-01** | n/a (demo invented entry) | OK — demo explicitly says "Esta entrada muestra el formato" | ✅ (honest placeholder) |

### ❌ DISCREPANCY: Tablada Nueva attendance
- **Source** `aios_py_home.html:1100` & `aios_py_news.html:541`: *"¡Feria de Servicios reunió a más de **300** personas en Tablada Nueva!"* (agosto 14 2026)
- **Demo** `data/news.json` (post `ojoykere-inauguracion`, summary): *"Programa Ojoykére realizó una feria comunitaria con **más de 3.000 asistentes**."*
- **Demo** `about/programs.md:44`: *"14 de agosto de 2026: Feria de Servicios en Tablada Nueva — **3.000+ asistentes**"*

Demo says **3.000+** in two places; source says **300+**. **10× error** introduced in the demo. ⚠️ Should be corrected to "300+" or "300 personas".

## 5. URL structure — ⚠️ MOSTLY MATCH (one invented URL)

### Source URL inventory (verbatim from HTML href/src)
- `/` (home)
- `/como-ayudar/dona`
- `/como-ayudar/aliados-corporativos`
- `/como-ayudar/campanas`
- `/conocenos/quienes-somos`
- `/conocenos/que-hacemos`
- `/conocenos/que-hacemos/bolsa-de-trabajo`
- `/conocenos/por-que-lo-hacemos`
- `/conocenos/historias-que-inspiran`
- `/noticias` (+ paginated variants)
- `/comunicado-de-prensa`
- `/rinconsolidario`
- `/informacion-publica`
- `/web/contactanos` (also referenced as `/contactanos`)
- `/web/declaracion-de-privacidad`
- `/transparencia` (in mailto links — possibly legacy)
- News slug examples: `/vuelve-regalamos-sonrisas-,-la-campana-solidaria-de-tupi-y-aldeas-infantiles-sos`, `/juan-de-dios-resiliencia,-disciplina-y-un-sueno-que-recien-comienza`, `/en-el-mes-del-nino,-arete-supermercados-duplica-la-solidaridad-de-sus-clientes`, `/¡feria-de-servicios-reunio-a-mas-de-300-personas-en-tablada-nueva!`

### Demo outbound URLs (all verified present in source)
| Demo URL | In source? |
|---|---|
| `aldeasinfantiles.org.py/` | ✅ |
| `aldeasinfantiles.org.py/como-ayudar/dona` | ✅ |
| `aldeasinfantiles.org.py/como-ayudar/aliados-corporativos` | ✅ |
| `aldeasinfantiles.org.py/conocenos/que-hacemos` | ✅ |
| `aldeasinfantiles.org.py/conocenos/que-hacemos/bolsa-de-trabajo` | ✅ |
| `aldeasinfantiles.org.py/conocenos/quienes-somos` | ✅ |
| `aldeasinfantiles.org.py/conocenos/historias-que-inspiran` | ✅ |
| `aldeasinfantiles.org.py/informacion-publica` | ✅ |
| `aldeasinfantiles.org.py/noticias` | ✅ |
| `aldeasinfantiles.org.py/web/contactanos` | ✅ |
| `aldeasinfantiles.org.py/informacion-publica/2024/auditoria-2024` | ❌ **INVENTED** |

### ❌ DISCREPANCY: invented auditoría URL
- `data/news.json` post `auditoria-2024-publicada` has `external_link: "https://www.aldeasinfantiles.org.py/informacion-publica/2024/auditoria-2024"`
- `noticias/auditoria-2024-publicada/index.html`, `prensa/index.html`, `recursos/index.html`, `transparencia/auditoria/index.html` all link to the same path.
- **Source has only `/informacion-publica`** — no `/2024/auditoria-2024` slug exists in any of the 15 source HTMLs. Source HTMLs contain **zero** mentions of "auditoría" (search returned empty).

This is a confidently-stated URL that 404s on the live site. ⚠️ Should be removed or replaced with the bare `/informacion-publica` link until the actual slug is verified.

## Summary scorecard

| Item | Status |
|---|---|
| RUC | ✅ match |
| Aldeas list (5) | ✅ match |
| Aldeas year_founded/capacity per-aldea | ⚠️ demo-invented, not in source |
| Aliados list | ✅ demo doesn't enumerate (defensible) |
| Campañas names + dates | ✅ mostly match |
| Campañas supermarket chains | ⚠️ demo lists 4/6 (omits El Torito, Luisito Félix Bogado, El Ahorrazo) |
| **Tablada Nueva attendance** | ❌ **demo says 3.000+, source says 300+** |
| URL structure | ✅ mostly match |
| **`/informacion-publica/2024/auditoria-2024`** | ❌ **invented — does not exist on live site** |

## Recommended fixes (priority order)

1. **HIGH** — Fix `data/news.json` `ojoykere-inauguracion.summary` and `about/programs.md:44`: change **3.000+** → **300+** (or "más de 300 personas"). Source is unambiguous.
2. **HIGH** — Fix or remove `external_link: "https://www.aldeasinfantiles.org.py/informacion-publica/2024/auditoria-2024"` and all four HTML pages that link to it (`noticias/auditoria-2024-publicada/index.html`, `prensa/index.html`, `recursos/index.html`, `transparencia/auditoria/index.html`). Replace with `https://www.aldeasinfantiles.org.py/informacion-publica` or remove the link entirely.
3. **MEDIUM** — Either add El Torito / Luisito Félix Bogado / El Ahorrazo to the demo's supermarket-chain references, or add a note "además de otros supermercados aliados" to avoid implying the list is exhaustive.
4. **LOW** — Flag in demo docs that `year_founded` and per-aldea `capacity` in `data/aldeas.json` are demo placeholders, not source-verified. (Defensible — the demo's `acerca-de-este-sitio` already disclaims that it reproduces "lo que publica" the org, and these specific fields aren't claimed in source.)
5. **LOW** — Demo's `transparencia/financiera/index.html` says "Aliados corporativos (18+)" — source has 21. Adjust to "20+" or "21 aliados corporativos" for accuracy.

## Files written
- `/opt/data/projects/aldea-sos-paraguay/public/changelog/_verification_aios_py_2026-08-22.md` (this report)
