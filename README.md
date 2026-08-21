# Aldeas Infantiles SOS Paraguay — Strategic Research Repository

> **Owner**: IvanWeissVanDerPol (Ivan Weiss)
> **Status**: Private repo, active research
> **Started**: 2026-08-21
> **Purpose**: Build a complete research dossier on Aldeas Infantiles SOS Paraguay and discover every avenue for them to grow revenue, increase impact, and modernize digitally.

---

## Why this repo exists

1. **Aldea SOS Paraguay** is a 55-year-old Paraguayan NGO serving 1,000+ children through 5 aldeas (Asunción, Luque, San Ignacio, Hohenau, Belén).
2. They are **digitally behind** (broken pages, no online donation, no public annual report, no sponsor portal).
3. They are recovering from a **2025 founder-abuse scandal** in Austria (founder Hermann Gmeiner accused of historical sexual abuse; the Austrian branch was suspended Oct 23, 2025).
4. They have a solid existing model (corporate allies, supermarket round-ups, TUPI campaign, monthly donors) but **leave a lot of revenue on the table**.
5. The repo's job is to **map every opportunity** — peer org patterns, 1,000-project research, and 60+ potential revenue streams — so we can build a proper proposal or partnership pitch.

---

## Structure

```
aldea-sos-paraguay/
├── README.md                  ← you are here
├── source-of-truth/           ← raw artifacts (HTML downloads of every page we cited)
│   ├── SOURCES.md             ← catalog of every file + URL + what we extracted
│   ├── aios_py_home.html
│   ├── aios_py_contact.html
│   ├── aios_py_about.html
│   ├── aios_py_qhacemos.html
│   ├── aios_py_xq.html
│   ├── aios_py_dona2.html
│   ├── aios_py_aliados.html
│   ├── aios_py_campanas.html
│   ├── aios_py_news.html
│   ├── aios_py_jobs.html
│   ├── aios_py_comunicado.html
│   ├── aios_py_ong.html
│   ├── aios_py_regalamos.html
│   ├── aios_intl.html
│   └── aios_intl_urgent.html
│
├── sos/                       ← deep dossier on the organization
│   └── DOSSIER.md             ← identity, mission, programs, funding, scandal timeline, SWOT
│
├── comparison/                ← benchmark vs peer organizations
│   └── PEER-BENCHMARK.md      ← 9 international + 8 Paraguayan peers, feature matrix, inspiration board
│
├── research/1000-similar-projects/   ← broad pattern research
│   ├── CATALOG.csv            ← ~1000 distinct child-welfare orgs with 12 columns each
│   └── SYNTHESIS.md           ← distributions, top lists, prevalence %, themes
│
└── revenue-avenues/           ← catalog of every revenue stream they could activate
    └── REVENUE-AVENUES.md     ← 60+ streams with evidence, market size, 30/60/90 plan, score matrix
```

---

## Key findings (TL;DR)

1. **No aldea in San Lorenzo.** Paraguay's 5 aldeas are Asunción, Luque, San Ignacio, Hohenau, Belén. The only operational touchpoint in San Lorenzo is the Kingo supermarket "Convertí tu vuelto en sonrisas" since March 2017. Aldea Asunción is in Zeballos Cué, near the Central dept / San Lorenzo border.
2. **Aldea SOS PY serves 1,000+ children** in 5 aldeas + the prevention program "Proyecto Ojoykére" launched 2024.
3. **They are recovering from the 2025 Gmeiner scandal** — Austrian branch suspended; Paraguay issued a distancing press release Oct 23, 2025.
4. **Digital maturity: 4/10.** No online donation, broken /transparencia page, no annual report, no sponsor portal, no TikTok, no Google Ad Grants detected.
5. **Existing funding**: monthly "Amigos SOS" (Gs. 50k–200k+), 18+ corporate allies, supermarket round-up, TUPI "Regalamos Sonrisas" (6th edition Aug 2026).
6. **Biggest gaps**: online donation gateway (Tigo Money, Pix, Personal Pay, Ueno Pay), sponsor portal (Compassion model), public annual report, donor CRM, multilingual for diaspora.
7. **2024 SOS International combined revenue**: €1.72B; 76% to programs. PY is one of 137 national associations.

See `sos/DOSSIER.md` for the full picture.

---

## Ethics

- All research based on **public information only**.
- No personal data, no donor lists, no child names or photos.
- No children were contacted for this research.
- When approaching SOS Paraguay with anything based on this research, do so via official channels (Cerro Corá 1155, sos.py@aldeasinfantiles.org.py, or Ana Medina Zorrilla for sustainability / Zunilda Baruja for corporate).

---

## Status

| Folder | Status |
|---|---|
| `source-of-truth/` | ✅ Complete — 15 HTML artifacts + SOURCES.md |
| `sos/` | ✅ Complete — DOSSIER.md (~15k chars) |
| `comparison/` | ✅ Complete — PEER-BENCHMARK.md (~11k chars) |
| `research/1000-similar-projects/` | 🔄 In progress (delegated) |
| `revenue-avenues/` | 🔄 In progress (delegated) |

Live transcript files (read-only) at:
- `/opt/data/cache/delegation/live/deleg_7ebbe53d/task-0.log` (catalog)
- `/opt/data/cache/delegation/live/deleg_d718ade7/task-0.log` (revenue)

---

## What's next (after research lands)

1. **Quick wins doc** — top 5 revenue streams with concrete next actions.
2. **Pitch deck outline** — for presenting to SOS Paraguay or ParaguAI.
3. **Tech stack spec** — what we'd build if green-lit (donation gateway, sponsor portal, transparency microsite).
4. **Safeguarding section** — explicit child-protection framing given the scandal.

---

*This is a living document. Edit, update, expand.*