# 1000-orgs — Catálogo

> Un catálogo de **939 organizaciones distintas** de bienestar infantil / protección infantil / apadrinamiento en **155 países/regiones**, con **12 columnas** de datos estructurados por fila.

## Archivos en esta carpeta

- **`batches/CATALOG.csv`** — el archivo maestro: 939 filas × 12 columnas. Abrir en cualquier hoja de cálculo.
- **`batches/SYNTHESIS.md`** — distribuciones, top 30 por ingresos, top 30 más innovadoras, prevalencia de financiamiento/digital, 12 temas de autoayuda, top 10 más aplicables a SOS PY.
- **`batches/assemble.py`** — script Python que regenera CATALOG.csv + SYNTHESIS.md desde los 12 batch JSONs.
- **`batches/batch01..batch12.json`** — 12 archivos de datos crudos, uno por región/tema. Total 992 entradas; dedup a 939.

## Esquema de columnas (12)

| Columna | Ejemplo | Tipo |
|---|---|---|
| id | "0001" | secuencial |
| name | "Compassion International" | string |
| country_or_region | "USA" | string |
| url | "https://www.compassion.com" | URL |
| model | "sponsorship" / "residential care" / etc. | vocabulario controlado |
| year_founded | 1952 | int |
| beneficiaries_estimate | "2M" | int (k/M/B) |
| revenue_annual_usd_estimate | "USD 1B+" | string |
| funding_sources | "individuals;foundations;corporate" | tags separados por ; |
| digital_signals | "online-donation;recurring-giving" | tags separados por ; |
| innovations | "sponsor letter portal + photo quarterly" | string |
| notes | "largest sponsorship model globally" | string |

## Números principales

- **939 ONGs únicas** (después de dedup de 992 entradas crudas)
- **155 países / regiones**
- **12 modelos de servicio**
- **13 etiquetas de fuente de financiamiento**
- **12 etiquetas de señal digital**

## Slices pre-calculados

En [`./slices/`](./slices/):
- `CATALOG-by-region.md` — vista por país
- `CATALOG-by-model.md` — vista por tipo de servicio
- `CATALOG-funders.md` — vista por fuente de financiamiento
- `TOP-100-revenue.md` — las 100 más grandes por ingresos
- `TOP-30-innovative.md` — las 30 más novedosas
- `FUNDING-PREVALENCE.md` — % de ONGs usando cada tipo de financiamiento
- `DIGITAL-PREVALENCE.md` — % de ONGs usando cada señal digital
- `PATTERNS-SELFHELP.md` — cómo se ayudaron a sí mismas
- `TOP-10-APPLICABLE.md` — las más relevantes para SOS PY

## Metodología

- Cada entrada = UN proyecto, ONG o iniciativa distinta (no categorías genéricas)
- Mezcla de ONGs conocidas (Compassion, Plan, UNICEF, SOS Intl) y una larga cola de afiliados específicos por país
- URLs elegidas como páginas principales canónicas o entradas de Wikipedia
- Cifras de ingresos de reportes financieros publicados; "unknown" cuando no hay cifra confiable
- Etiquetas de fuente de financiamiento y señal digital usan vocabulario controlado para agregación limpia
- Si un dato no se encuentra, marcado como "unknown" o "needs primary research"

## Cobertura por región (top 10)

| Región | Cantidad |
|---|---:|
| USA | 309 |
| Paraguay | 98 |
| España | 73 |
| (otro LatAm) | ~100 |
| EU (otro) | ~120 |
| Asia/Pacífico | ~140 |
| África | ~120 |
| Medio Oriente | ~30 |
| Oceanía | ~30 |
| Global/multilateral | 13 |

## Cobertura por modelo

| Modelo | Cantidad |
|---|---:|
| derechos | 301 |
| cuidado residencial | 210 |
| educación | 159 |
| mixto | 100 |
| salud | 60 |
| apadrinamiento | 50 |
| familias acogedoras | 30 |
| prevención | 15 |
| mentoría | 10 |
| (otros) | pequeño |

## Cómo usar

1. **Búsqueda de patrones**: ordenar por funding_sources / digital_signals para encontrar ONGs usando tácticas que Aldea PY podría adoptar
2. **Geografía**: buscar por país para pares locales
3. **Búsqueda de innovación**: filtrar por palabras clave de innovación
4. **Scouting de modelo de ingresos**: cruzar etiquetas de funding_source con revenue_annual_usd_estimate
5. **Descubrimiento de socios**: las ONGs en PY son candidatos directos; las ONGs internacionales en LatAm son pares regionales

---

*Última actualización: 2026-08-21*