# 1000-orgs — Catalog

> A catalog of **939 distinct** child-welfare / child-protection / child-sponsorship organizations across **155 countries / regions**, with **12 columns** of structured data per row.

## Files in this folder

- **`batches/CATALOG.csv`** — the master file: 939 rows × 12 columns. Open in any spreadsheet.
- **`batches/SYNTHESIS.md`** — distributions, top 30 by revenue, top 30 most innovative, funding/digital prevalence, 12 self-help themes, top 10 most applicable to SOS PY.
- **`batches/assemble.py`** — Python script that regenerates CATALOG.csv + SYNTHESIS.md from the 12 batch JSONs.
- **`batches/batch01..batch12.json`** — 12 raw data files, one per region/topic. Total 992 entries; dedup to 939.

## Column schema (12)

| Column | Example | Type |
|---|---|---|
| id | "0001" | sequential |
| name | "Compassion International" | string |
| country_or_region | "USA" | string |
| url | "https://www.compassion.com" | URL |
| model | "sponsorship" / "residential care" / etc. | controlled vocab |
| year_founded | 1952 | int |
| beneficiaries_estimate | "2M" | int (k/M/B) |
| revenue_annual_usd_estimate | "USD 1B+" | string |
| funding_sources | "individuals;foundations;corporate" | semicolon-separated tags |
| digital_signals | "online-donation;recurring-giving" | semicolon-separated tags |
| innovations | "sponsor letter portal + photo quarterly" | string |
| notes | "largest sponsorship model globally" | string |

## Top-line numbers

- **939 unique orgs** (after dedup of 992 raw entries)
- **155 countries / regions**
- **12 service models**
- **13 funding-source tags**
- **12 digital-signal tags**

## Pre-computed slices

In [`./slices/`](./slices/):
- `CATALOG-by-region.md` — slice by country/region
- `CATALOG-by-model.md` — slice by service type
- `CATALOG-funders.md` — slice by funding sources
- `TOP-100-revenue.md` — biggest 100 by revenue
- `TOP-30-innovative.md` — most novel 30
- `FUNDING-PREVALENCE.md` — % of orgs using each funding type
- `DIGITAL-PREVALENCE.md` — % of orgs using each digital signal
- `PATTERNS-SELFHELP.md` — how they helped themselves (12 themes)
- `TOP-10-APPLICABLE.md` — most relevant to SOS PY

## Methodology

- Each entry = ONE distinct project, org, or initiative (not generic categories)
- Mix of well-known orgs (Compassion, Plan, UNICEF, SOS Intl) and a long tail of country-specific affiliates
- URLs chosen as canonical homepages or Wikipedia entries
- Revenue figures from publicly reported financials; "unknown" used when no reliable figure
- Funding-source and digital-signal tags use a controlled vocabulary for clean aggregation
- If a fact isn't findable, marked "unknown" or "needs primary research"

## Coverage by region (top 10)

| Region | Count |
|---|---:|
| USA | 309 |
| Paraguay | 98 |
| Spain | 73 |
| (other LatAm) | ~100 |
| EU (other) | ~120 |
| Asia/Pacific | ~140 |
| Africa | ~120 |
| Middle East | ~30 |
| Oceania | ~30 |
| Global/multilateral | 13 |

## Coverage by model

| Model | Count |
|---|---:|
| rights | 301 |
| residential care | 210 |
| education | 159 |
| mixed | 100 |
| health | 60 |
| sponsorship | 50 |
| foster | 30 |
| prevention | 15 |
| mentorship | 10 |
| (others) | small |

## How to use

1. **Pattern matching**: sort by funding_sources / digital_signals to find orgs using tactics Aldea PY could adopt
2. **Geography**: search by country for local peers
3. **Innovation hunting**: filter by innovation keywords
4. **Revenue model scouting**: cross-reference funding_source tags with revenue_annual_usd_estimate
5. **Partnership discovery**: orgs in PY are direct candidates; international orgs in LatAm are regional peers

---

*Last updated: 2026-08-21*