# Repo Restructure Plan & Gap Analysis

> **Status**: Proposal — awaiting Ivan's approval before I touch the existing tree
> **Author**: Hermes (drafted 2026-08-21 after the 4-deep-dive session)
> **Context**: This document lays out a proposed reorganization of the `aldea-sos-paraguay` repo to make it easy for the Polki Squad (Ivan's team / ParaguAI / Aiw crew) to find what they need quickly, and identifies ~25 additional files/folders we should prepare but don't have yet.

---

## Part 1 — Why the current structure is hard for a new reader

### Symptom: A teammate opens the repo. What happens?

1. They see 5 top-level folders: `source-of-truth/`, `sos/`, `comparison/`, `research/`, `revenue-avenues/`.
2. They open `README.md` — it explains **what's there** but not **where to start for their role**.
3. They try `sos/` — see one 15K-char file `DOSSIER.md`. That's the whole dossier. No way to skim just the executive summary or just the financials.
4. They try `research/1000-similar-projects/` — see 12 batch JSON files, an assemble.py, a 174K CSV, a 20K SYNTHESIS.md, **and zero explanation of which file is what**. Someone has to read `assemble.py` to understand the data flow.
5. They try `source-of-truth/` — see 15 HTML files named `aios_py_*.html`. They have no idea which one to open. `SOURCES.md` is the only map.
6. They give up and Slack someone: "wtf is in here?"

### Concrete problems

| # | Problem | Where it hurts |
|---|---|---|
| 1 | No subfolder README files | Every new reader wastes 10 min figuring out the layout |
| 2 | Monolithic big files (DOSSIER.md, REVENUE-AVENUES.md, PEER-BENCHMARK.md, SYNTHESIS.md) | Can't skim; can't quote a section without scrolling; hard to update piecemeal |
| 3 | No "start here for X role" guide | Ivan's team doesn't know which 3 files to read to get up to speed in 5 min |
| 4 | Source-of-truth is just raw HTML + 1 index | No "extracted facts" view separate from raw |
| 5 | 12 batch JSONs without an index | `research/1000-similar-projects/` looks like chaos |
| 6 | Missing personas/use-cases the repo serves | Not optimized for: (a) SOS Paraguay board reading it, (b) ParaguAI team building tech, (c) donor outreach |
| 7 | No drafts/working/ folder | Things we draft vs finalized aren't separated |
| 8 | No `outreach/` for email templates, call scripts | Critical for any future action |
| 9 | No `pitch/` folder for slides, one-pagers | We have research; nothing to send to SOS Paraguay |
| 10 | No version markers on documents | "Is this the latest? Did the scandal analysis update?" |
| 11 | No glossary / style guide | Spanish vs English, abbreviations (SNNA, Ojoykére, etc.) undefined |
| 12 | No `META/` folder | This document had nowhere to live |
| 13 | No clear "evidence quality" markers | Some HTMLs are stale, some facts come from third-party profile, some from one-line search hit |
| 14 | Missing critical documents (see Part 3) | Pitch deck, email templates, donor journey, safeguarding policy, tech stack spec, budget, risk register, stakeholder map, competitive teardowns |
| 15 | No clear next-actions tracker | "What's next" is a list in README; should be an actionable board file |

---

## Part 2 — Proposed restructure

### 2.1 Top-level layout

```
aldea-sos-paraguay/
├── README.md                         (rewritten as the entry point — 1 screen max)
├── META/                             (NEW — repo governance)
│   ├── README.md
│   ├── RESTRUCTURE-PLAN.md           (this doc)
│   ├── INDEX.md                      (master index of every file with 1-line description)
│   ├── GLOSSARY.md                   (acronyms + jargon)
│   ├── STYLE-GUIDE.md                (es vs en, citation conventions, evidence levels)
│   ├── RISK-REGISTER.md              (risk tracking, including scandal relapse)
│   ├── STAKEHOLDER-MAP.md            (who is who at SOS PY, gov, partners)
│   ├── ACTION-BOARD.md               (live Kanban: to-do / doing / done / blocked)
│   └── CHANGELOG.md                  (what changed, when)
│
├── 00-start-here/                    (NEW — guided entry point)
│   ├── README.md                     (decision tree: who are you? read these 3 files)
│   ├── for-aiw-team.md               (what Aiw/ParaguAI team should know)
│   ├── for-sos-paraguay.md           (what SOS PY would see if they got this)
│   ├── for-donor-outreach.md         (for future donor-side use)
│   ├── 5min-summary.md               (one-pager for executives)
│   └── 30min-deep-dive.md            (reading list for a half-hour read)
│
├── 01-evidence/                      (RENAME: source-of-truth/ → 01-evidence/)
│   ├── README.md                     (how to navigate this folder)
│   ├── SOURCES.md                    (existing — keep)
│   ├── EXTRACTED-FACTS.md            (NEW — distilled facts from the HTMLs, not raw)
│   ├── aios_py_home.html
│   ├── aios_py_contact.html
│   ├── ... (all 14 HTMLs)
│   └── evidence-levels.md            (NEW — explains how to interpret reliability)
│
├── 02-dossier/                       (RENAME: sos/ → 02-dossier/)
│   ├── README.md
│   ├── DOSSIER.md                    (existing — keep, but split below)
│   ├── executive-summary.md          (NEW — 1-page exec summary extracted from DOSSIER)
│   ├── identity.md                   (NEW — extracted from DOSSIER §1)
│   ├── programs.md                   (NEW — extracted from DOSSIER §4)
│   ├── funding-model.md              (NEW — extracted from DOSSIER §5)
│   ├── digital-maturity.md           (NEW — extracted from DOSSIER §7)
│   ├── scandal-timeline.md           (NEW — extracted from DOSSIER §8, dated)
│   ├── staffing-org.md               (NEW — who's who at SOS PY)
│   └── SWOT.md                       (NEW — pulled from DOSSIER §10)
│
├── 03-benchmark/                     (RENAME: comparison/ → 03-benchmark/)
│   ├── README.md
│   ├── framework/
│   │   └── how-to-compare.md         (NEW — rubric)
│   ├── peers/
│   │   ├── README.md                 (NEW — index)
│   │   ├── latam-peers.md            (NEW — extracted from PEER-BENCHMARK §A1, §B)
│   │   ├── international-peers.md    (NEW — extracted from PEER-BENCHMARK §A)
│   │   ├── paraguay-peers.md         (NEW — extracted from PEER-BENCHMARK §B)
│   │   ├── feature-matrix.md         (NEW — extracted from PEER-BENCHMARK §C)
│   │   └── inspiration-board.md      (NEW — extracted from PEER-BENCHMARK §D)
│   └── PY-deep-dives/                (NEW)
│       ├── compassion-py.md          (NEW — focused teardown)
│       ├── world-vision-py.md        (NEW)
│       ├── cird-py.md                (NEW)
│       ├── techo-py.md               (NEW)
│       └── teleton-py.md             (NEW — important benchmark for one-event revenue)
│
├── 04-research/                      (RESTRUCTURE: research/1000-similar-projects/ → 04-research/1000-orgs/)
│   ├── README.md                     (NEW — how to navigate research outputs)
│   ├── 1000-orgs/
│   │   ├── README.md                 (NEW — explains the 12 batches, the CSV, the synthesis)
│   │   ├── CATALOG.csv               (existing — keep)
│   │   ├── CATALOG-by-region.md      (NEW — slice the CSV by region)
│   │   ├── CATALOG-by-model.md       (NEW — slice by service model)
│   │   ├── CATALOG-funders.md        (NEW — slice by funding sources)
│   │   ├── SYNTHESIS.md              (existing — keep)
│   │   ├── TOP-100-revenue.md        (NEW — extract from SYNTHESIS §2)
│   │   ├── TOP-30-innovative.md      (NEW — extract from SYNTHESIS §3)
│   │   ├── FUNDING-PREVALENCE.md     (NEW — extract from SYNTHESIS §4)
│   │   ├── DIGITAL-PREVALENCE.md     (NEW — extract from SYNTHESIS §5)
│   │   ├── PATTERNS-SELFHELP.md      (NEW — extract from SYNTHESIS §6)
│   │   ├── TOP-10-APPLICABLE.md      (NEW — extract from SYNTHESIS §7)
│   │   ├── batches/                  (NEW — moved from current root)
│   │   │   ├── batch01_americas_mega.json
│   │   │   ├── ... batch12_final.json
│   │   │   └── README.md             (explains the batching)
│   │   └── assemble.py               (existing — keep)
│   └── patterns/                     (NEW — thematic deep dives)
│       ├── recurring-giving-at-scale.md   (from CATALOG patterns)
│       ├── digital-fundraising-trends.md
│       ├── federation-model.md            (SOS International + others)
│       └── diaspora-giving-models.md
│
├── 05-revenue/                       (RENAME: revenue-avenues/ → 05-revenue/)
│   ├── README.md
│   ├── REVENUE-AVENUES.md            (existing — keep as master index)
│   ├── top-15-recommended.md         (NEW — extract TOP 15 from REVENUE)
│   ├── 90-day-quick-wins.md          (NEW — extract from REVENUE §)
│   ├── safeguarding-appendix.md      (NEW — pull out the safeguarding checklist)
│   └── streams/                      (NEW — one file per stream group, easier to update)
│       ├── A-online-giving.md
│       ├── B-sponsorship.md
│       ├── C-corporate.md
│       ├── D-government-multilateral.md
│       ├── E-earned-income.md
│       ├── F-events.md
│       ├── G-digital-content.md
│       ├── H-real-estate.md
│       ├── I-financial-instruments.md
│       ├── J-technology-data.md
│       ├── K-diaspora.md
│       ├── L-crisis.md
│       └── M-innovation-frontier.md
│
├── 06-pitch/                         (NEW — outbound deliverables)
│   ├── README.md
│   ├── pitch-deck-outline.md         (NEW — slide-by-slide outline)
│   ├── executive-summary-pdf.md      (NEW — content for a 2-pager PDF)
│   ├── one-pager-paraguai.md         (NEW — what's in it for ParaguAI)
│   ├── one-pager-sos-py.md           (NEW — what's in it for SOS Paraguay)
│   ├── one-pager-corporate-ally.md   (NEW — for pitching Tigo / Itaú / Ueno)
│   └── FAQ.md                        (NEW — anticipated questions + answers)
│
├── 07-outreach/                      (NEW — outbound scripts/templates)
│   ├── README.md
│   ├── email/
│   │   ├── cold-outreach-corporate.md
│   │   ├── cold-outreach-tech-partner.md
│   │   ├── cold-outreach-foundation.md
│   │   ├── cold-outreach-donor-daf.md
│   │   ├── cold-outreach-sos-py.md
│   │   └── followup-template.md
│   ├── call/
│   │   ├── discovery-call-script.md
│   │   ├── pitch-call-script.md
│   │   └── objection-handling.md
│   └── social/
│       ├── linkedin-templates.md
│       ├── twitter-templates.md
│       └── instagram-launch-plan.md
│
├── 08-tech-spec/                     (NEW — for tech team to build)
│   ├── README.md
│   ├── donation-gateway/
│   │   ├── README.md
│   │   ├── processor-comparison.md   (Donorbox vs Funraise vs Bancard vs Stripe vs Pix)
│   │   ├── recommended-stack.md
│   │   ├── data-flow.md
│   │   ├── wireframes.md
│   │   └── cost-estimate.md
│   ├── transparency-microsite/
│   │   ├── README.md
│   │   ├── wireframes.md
│   │   ├── content-map.md
│   │   └── tech-stack.md
│   ├── sponsor-portal/
│   │   ├── README.md
│   │   ├── design-doc.md            (Compassion-style sponsor portal)
│   │   ├── data-model.md
│   │   └── wireframes.md
│   └── infra/
│       ├── CRM-recommendation.md    (Salesforce NPSP, HubSpot Nonprofit, Airtable)
│       ├── email-stack.md
│       └── hosting-domain.md
│
├── 09-financial/                     (NEW — financial modeling)
│   ├── README.md
│   ├── revenue-model-baseline.md    (current revenue estimate)
│   ├── revenue-model-projected.md   (with new streams)
│   ├── cost-estimate.md
│   ├── budget-90-day.md
│   ├── budget-12-month.md
│   └── fx-notes.md                  (Gs. ↔ USD, conversion conventions)
│
├── 10-strategy/                      (NEW — strategy & planning)
│   ├── README.md
│   ├── 30-day-quick-wins.md
│   ├── 90-day-plan.md
│   ├── 12-month-roadmap.md
│   ├── donor-journey-map.md
│   ├── competitor-strategy.md
│   └── branding-positioning.md
│
├── 11-policy/                        (NEW — child protection)
│   ├── README.md
│   ├── safeguarding-charter.md       (model child protection policy)
│   ├── safeguarding-incident-protocol.md
│   ├── data-privacy-children.md      (GDPR-K equivalent, COPPA equivalents)
│   ├── sponsor-ethics.md             (rules for sponsor communications)
│   └── image-consent-policy.md
│
├── 12-competitive/                   (NEW — deep competitive teardowns)
│   ├── README.md
│   ├── compassion-py.md
│   ├── world-vision-py.md
│   ├── cird-py.md
│   ├── techo-py.md
│   ├── teleton-py.md
│   ├── fundacion-huesped-ar.md
│   └── casa-de-esperanza-ar.md
│
├── 99-archive/                       (NEW — superseded/deprecated files)
│   ├── README.md
│   └── (anything we abandon moves here, never deleted)
│
└── _archive-pre-restructure/         (NEW — safety net)
    ├── README.md
    ├── source-of-truth/              (full original 932K)
    ├── sos/                          (original DOSSIER.md)
    ├── comparison/                   (original PEER-BENCHMARK.md)
    ├── research/                     (original 1000-similar-projects/)
    └── revenue-avenues/              (original REVENUE-AVENUES.md)
```

### 2.2 Why this layout

- **Numbered prefixes** (`00-`, `01-`, ...): sort order matches reading order. ` `00-start-here` is the entry point. Then evidence → dossier → benchmark → research → revenue → outward deliverables → tech → financial → strategy → policy → competitive → archive.
- **Split big files into small subfolder files**: each big MD gets `README.md`, `executive-summary.md`, `topic.md` extracted sections. Easier to update, easier to cite.
- **One clear "audience" hub** (`00-start-here/`): Ivan's team reads `for-aiw-team.md`. Whoever pitches SOS Paraguay reads `for-sos-py.md`. The 5-minute and 30-minute reading lists anchor everyone.
- **Separation of evidence and synthesis**: `01-evidence/` is the raw HTMLs + extracted facts. `02-dossier/` is our interpretation. This makes evidence auditable.
- **Outbound deliverables** (`06-pitch/`, `07-outreach/`, `08-tech-spec/`) live separately from research. This is what we *send* to people vs what we *learned*.
- **`99-archive/` and `_archive-pre-restructure/`**: nothing is ever deleted; deprecated content is moved to archives with a README.
- **One META layer**: governance (glossary, style, risk register, stakeholder map, action board, changelog).

### 2.3 What I'd do today (Day 1 of the restructure)

1. **Create the full directory skeleton** — empty folders, no content moves yet
2. **Move source-of-truth/, sos/, comparison/, research/1000-similar-projects/, revenue-avenues/ → _archive-pre-restructure/** for safety
3. **Split each big MD into the new subfolder structure**:
   - `DOSSIER.md` (15K) → 6 small files in `02-dossier/`
   - `PEER-BENCHMARK.md` (11K) → 5 small files in `03-benchmark/peers/`
   - `REVENUE-AVENUES.md` (25K) → 13 small files in `05-revenue/streams/`
   - `SYNTHESIS.md` (20K) → 7 small files in `04-research/1000-orgs/`
4. **Create new docs** (executive summary, 5/30-min guides, glossary, etc.) — ~20 new files
5. **Rewrite README.md** as a tight entry point
6. **Add new content folders** (06-pitch/, 07-outreach/, 08-tech-spec/, 09-financial/, 10-strategy/, 11-policy/, 12-competitive/) with stubs + first-draft content for the critical ones
7. **Single atomic commit** titled "Restructure: numbered folders, subfolder READMEs, audience-keyed entry point" — so the history stays clean
8. **Push to GitHub**

### 2.4 What I'd do Day 2 (this isn't asking for now, just listing)

- Fill out the pitch deck outline into a real slide structure
- Write the email templates in `07-outreach/`
- Build the donation gateway processor comparison
- Write the safeguarding charter

---

## Part 3 — Additional files/folders we should prepare (gap list)

This is the catalog of **missing** deliverables that any serious partner / donor / SOS board member would expect to find.

### A. Decision-support (high priority — block pitching until done)

1. **`META/ACTION-BOARD.md`** — Kanban of next actions with owners
2. **`META/RISK-REGISTER.md`** — Scandal relapse, donor flight, regulatory, key-person dependency, etc.
3. **`META/STAKEHOLDER-MAP.md`** — Who's who at SOS Paraguay (Ana Medina Zorrilla, Zunilda Baruja, others), at SNNA, at partner orgs, at media
4. **`00-start-here/5min-summary.md`** — One-pager: who is SOS PY, what's broken, what we propose, what we need
5. **`00-start-here/30min-deep-dive.md`** — Annotated reading order
6. **`06-pitch/executive-summary-pdf.md`** — Content for a 2-pager PDF
7. **`06-pitch/pitch-deck-outline.md`** — Slide structure (problem, opportunity, evidence, plan, ask)
8. **`06-pitch/FAQ.md`** — 20 questions we'd be asked, with answers

### B. Tech & product (medium priority — blocks implementation)

9. **`08-tech-spec/donation-gateway/processor-comparison.md`** — Donorbox vs Funraise vs Bancard vs Stripe vs Pix vs Tigo Money
10. **`08-tech-spec/donation-gateway/recommended-stack.md`** — Concrete choice + why
11. **`08-tech-spec/donation-gateway/data-flow.md`** — Donor → checkout → PSP → webhook → CRM → email → receipt
12. **`08-tech-spec/donation-gateway/wireframes.md`** — Donation form, recurring toggle, thank-you page
13. **`08-tech-spec/donation-gateway/cost-estimate.md`** — SaaS fees, transaction fees, build-vs-buy
14. **`08-tech-spec/transparency-microsite/wireframes.md`** — Annual report rendering, KPI dashboard
15. **`08-tech-spec/sponsor-portal/design-doc.md`** — Sponsor a house: letter exchange model
16. **`08-tech-spec/infra/CRM-recommendation.md`** — Salesforce NPSP vs HubSpot Nonprofit vs Airtable

### C. Outreach scripts (medium priority — needed for any contact)

17. **`07-outreach/email/cold-outreach-corporate.md`** — For Tigo/Personal/Ueno/Areté/Tupi/etc.
18. **`07-outreach/email/cold-outreach-tech-partner.md`** — For Donorbox/Funraise/Bancard
19. **`07-outreach/email/cold-outreach-foundation.md`** — For TechSoup/Google/Microsoft
20. **`07-outreach/email/cold-outreach-donor-daf.md`** — For Daffy/Fidelity/Schwab
21. **`07-outreach/email/cold-outreach-sos-py.md`** — First contact email to Ana Medina or Zunilda Baruja
22. **`07-outreach/call/discovery-call-script.md`** — 30-min discovery call template
23. **`07-outreach/call/objection-handling.md`** — Common objections + responses

### D. Financial modeling (medium priority)

24. **`09-financial/revenue-model-baseline.md`** — Estimate current revenue from clues + SOS PY federation
25. **`09-financial/revenue-model-projected.md`** — 18-month projection with each new stream enabled
26. **`09-financial/cost-estimate.md`** — Cost to implement each new revenue stream
27. **`09-financial/budget-90-day.md`** — What does the first quarter cost?
28. **`09-financial/budget-12-month.md`** — Full first-year budget

### E. Strategy & planning (medium priority)

29. **`10-strategy/30-day-quick-wins.md`** — Concrete actions, owners, deadlines
30. **`10-strategy/90-day-plan.md`** — Quarterly plan
31. **`10-strategy/12-month-roadmap.md`** — Annual plan
32. **`10-strategy/donor-journey-map.md`** — Touchpoints from awareness to recurring giver
33. **`10-strategy/competitor-strategy.md`** — How we differentiate from Compassion PY / WV PY

### F. Policy & safeguarding (high priority given scandal)

34. **`11-policy/safeguarding-charter.md`** — Model child protection policy
35. **`11-policy/safeguarding-incident-protocol.md`** — What to do if allegation surfaces
36. **`11-policy/data-privacy-children.md`** — Image consent, COPPA-style rules
37. **`11-policy/sponsor-ethics.md`** — Rules for sponsor communications (no identifying info, etc.)
38. **`11-policy/image-consent-policy.md`** — Template consent forms

### G. Competitive deep-dives (medium priority)

39. **`12-competitive/compassion-py.md`** — Operational model + revenue model + digital stack
40. **`12-competitive/world-vision-py.md`** — Same
41. **`12-competitive/cird-py.md`** — WhatsApp at scale — replicable model
42. **`12-competitive/techo-py.md`** — Rendición de cuentas template
43. **`12-competitive/teleton-py.md`** — Comilona model = USD190k single event benchmark
44. **`12-competitive/fundacion-huesped-ar.md`** — Health/welfare crossover
45. **`12-competitive/casa-de-esperanza-ar.md`** — Argentina children home reference

### H. Research extension (lower priority)

46. **`04-research/patterns/recurring-giving-at-scale.md`** — Synthesis of how top 10 sponsorships work
47. **`04-research/patterns/digital-fundraising-trends.md`** — Web3, AI, etc. trends
48. **`04-research/patterns/federation-model.md`** — How SOS International + others federate
49. **`04-research/patterns/diaspora-giving-models.md`** — How diaspora orgs fund home countries
50. **`04-research/datasets/`** — Structured subsets of CATALOG.csv for easy slicing (Paraguay only, residential care only, top 100 revenue, etc.)

### I. Visual & presentation (lower priority but helpful)

51. **`06-pitch/slides/01-problem.md`** etc. — Slide-by-slide content
52. **Diagrams** — Donation flow, donor journey, stakeholder map, competitive positioning — as PNG/SVG
53. **One-pager PDF** — Generated from `06-pitch/executive-summary-pdf.md`

---

## Part 4 — Key questions for you

Before I touch anything, I want to make sure I'm aligned:

1. **Are you OK with this restructure** (numbered prefixes, archive of originals in `_archive-pre-restructure/`, atomic commit)? It's reversible — nothing is deleted, just moved.
2. **Polki Squad = your internal team** (ParaguAI / Aiw / etc.), right? Or is "polki squad" something else (e.g., a dedicated subgroup I'm not aware of)?
3. **Which of the ~50 missing files would be MOST useful** for the next 2 weeks? I can prioritize those first (vs trying to do all 50 at once).
4. **Do you want me to ACT today** (do the restructure + write the most critical missing files), or just DELIVER THIS PROPOSAL and let you decide?

---

## Part 5 — Estimated effort

| Phase | Effort | Output |
|---|---|---|
| Restructure skeleton + subfolder READMEs | 1 hour | 12 numbered folders, ~30 READMEs |
| Split big MDs into topical subfiles | 2 hours | ~30 new topical files extracted from existing |
| Write META + 00-start-here | 1 hour | ~10 governance + entry-point files |
| Write top-priority missing files (A items: 1-8) | 2 hours | Decision-support docs |
| Write top tech & outreach (B + C items: 9-23) | 3 hours | Tech specs + email templates |
| Write policy/competitive (E + F items: 34-45) | 2 hours | Safeguarding + competitive teardowns |
| Push + verify | 30 min | One atomic commit, pushed to GitHub |
| **Total** | **~12 hours** | 50+ new files, single atomic commit |

I can do this in one session today if you greenlight.

---

*Next step: tell me which of Part 4's questions to address, and whether to proceed with the restructure now.*