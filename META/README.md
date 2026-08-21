# META — Repository Governance

This folder holds governance, planning, and decision-support documents for the `aldea-sos-paraguay` research repo.

## Files

- **[`RESTRUCTURE-PLAN.md`](./RESTRUCTURE-PLAN.md)** — the proposed new folder layout, gap analysis, and ~50 missing files we should prepare. **Read this first if you're wondering why the repo is structured the way it is, or how to reorganize it.**
- `INDEX.md` *(coming)* — master index of every file in the repo with one-line description
- `GLOSSARY.md` *(coming)* — acronyms (SNNA, Ojoykére, Gs.), jargon, people
- `STYLE-GUIDE.md` *(coming)* — Spanish vs English, citation conventions, evidence levels
- `RISK-REGISTER.md` *(coming)* — live risk tracking including scandal relapse
- `STAKEHOLDER-MAP.md` *(coming)* — who's who at SOS Paraguay, gov, partners
- `ACTION-BOARD.md` *(coming)* — live Kanban of next actions
- `CHANGELOG.md` *(coming)* — what changed when

## What this folder is NOT

- Not research (that lives in `02-dossier/`, `03-benchmark/`, `04-research/`, `05-revenue/` once the restructure happens)
- Not pitch / outbound (that lives in `06-pitch/` once added)
- Not tech specs (that lives in `08-tech-spec/` once added)

This folder is **about** the repo itself — its structure, plans, risks, people, glossary.

---

## Status (2026-08-21)

Currently in **PRE-RESTRUCTURE** state. The repo has:

```
aldea-sos-paraguay/
├── README.md              (top-level only — no subfolder READMEs)
├── .gitignore
├── source-of-truth/       (15 HTMLs + 1 SOURCES.md index)
├── sos/                   (1 DOSSIER.md, 15K chars)
├── comparison/            (1 PEER-BENCHMARK.md, 11K chars)
├── research/
│   └── 1000-similar-projects/   (12 batch JSONs + assemble.py + CATALOG.csv + SYNTHESIS.md)
└── revenue-avenues/       (1 REVENUE-AVENUES.md, 25K chars)
```

**Issues for a new reader**:
1. No subfolder READMEs → 10 min wasted figuring out layout
2. Monolithic big files → can't skim
3. No "start here for X role" guide
4. No master INDEX
5. No glossary / style guide
6. Missing ~50 additional docs (pitch, outreach, tech specs, financial, strategy, policy, competitive)

**Fix proposed**: see `RESTRUCTURE-PLAN.md`. Awaiting Ivan's approval before I move files.