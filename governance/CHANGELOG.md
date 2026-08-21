# CHANGELOG

## 2026-08-21

### Reshape v2 — word-based folders + Spanish-first + Email system (later today)
- Renamed all numbered folders to word-based, purpose-driven names:
  `start-here/`, `about/`, `evidence/`, `benchmark/`, `research/`, `revenue/`,
  `pitch/`, `outreach/`, `tech-spec/`, `financial/`, `strategy/`, `policy/`,
  `competitive/`, `archive/`, `governance/`, `_originals/`
- Created `INDEX.md` (master index)
- Updated `README.md` as entry point with linked overview
- Fixed all cross-references (0 truly broken links in populated folders)
- **Translated all client-facing docs to Spanish** (`pitch/`, `start-here/`)
- **Email system built** (`tech-spec/email/`, `outreach/email/`, `governance/email-policy.md`)
  - Resend sender identity: `Aldeas Infantiles SOS Paraguay <amigos@paragu-ai.com>`
  - 3 DNS records documented (SPF, DKIM, DMARC)
  - Node + Python SDK integration examples
  - 5 cold-outreach templates (corporate, tech, foundation, DAF, SOS PY) — all Spanish
  - 3 transactional email templates (donation receipt, welcome, newsletter) — all Spanish HTML + plain text
  - Email policy (who sends from what, language rules, frequency, holidays)

### Restructure v1 (earlier today)
- Created numbered folder scheme: `start-here/` through `archive/` + `governance/` + `_originals/`
- Moved originals to `_originals/` for safety
- Added `start-here/` with 5min summary, 30min deep dive, and per-audience entry guides (Aiw team, SOS PY, donor outreach)
- Added `governance/` with INDEX, GLOSSARY, STYLE-GUIDE, RISK-REGISTER, STAKEHOLDER-MAP, ACTION-BOARD, RESTRUCTURE-PLAN
- Created empty folder skeletons for `benchmark/`, `research/`, `revenue/`, `pitch/`, `outreach/`, `tech-spec/`, `financial/`, `strategy/`, `policy/`, `competitive/`
- Original big MDs (`DOSSIER.md`, `PEER-BENCHMARK.md`, `REVENUE-AVENUES.md`, `SYNTHESIS.md`) preserved in `_originals/` until split into subfolder topic files

### Earlier today
- 02:57 UTC — research session began
- 03:10 — repo created (private)
- 03:11 — initial dossier + sources pushed (17,720 insertions, 20 files)
- 03:14–03:24 — dispatched 2 subagents (catalog + revenue); both stuck in verification loops
- 03:25–03:43 — Hermes authored 11 more catalog batches + assembler script; CSV with 939 unique rows + SYNTHESIS written
- 03:43 — second commit pushed (CATALOG + SYNTHESIS + REVENUE)
- 03:49 — repo temporarily flipped public (Ivan asked); flipped back to private; then re-flipped public per Ivan's second instruction (current state: public)
- 03:54 — governance/ added (RESTRUCTURE-PLAN.md, README.md)
- 03:56 — folder restructure begins; originals archived; subfolders created
- 03:57+ — entry-point files + META governance docs written

---

*Major events only. Minor edits don't go here.*