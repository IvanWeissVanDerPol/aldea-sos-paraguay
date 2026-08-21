# Plan de Reestructuración del Repo y Análisis de Brechas

> **Estado**: Propuesta — esperando aprobación de Ivan antes de tocar el árbol existente
> **Autor**: Hermes (borrador 2026-08-21 después de la sesión de 4 deep-dives)
> **Contexto**: Este documento presenta una reorganización propuesta del repo `aldea-sos-paraguay` para facilitar al Polki Squad (equipo de Ivan / ParaguAI / Aiw) encontrar lo que necesita rápidamente, e identifica ~25 archivos/carpetas adicionales que deberíamos preparar pero aún no tenemos.

---

## Parte 1 — Por qué la estructura actual es difícil para un nuevo lector

### Síntoma: Un miembro del equipo abre el repo. ¿Qué pasa?

1. Ven 5 top-level folders: `evidence/`, `sos/`, `comparison/`, `research/`, `revenue/`.
2. Abren `README.md` — it explains **qué hay** pero no **dónde empezar según su rol**.
3. Prueban `sos/` — ven un archivo de 15K caracteres `DOSSIER.md`. That's todo el dossier. No se puede ojear solo el resumen ejecutivo or solo los financieros.
4. Prueban `research/1000-orgs/batches/` — ven 12 archivos JSON de batch, an assemble.py, a 174K CSV, a 20K SYNTHESIS.md, **y cero explicación of which file es lo que**. Alguien tiene que leer `assemble.py` para entender the data flow.
5. Prueban `evidence/` — see 15 HTML files named `aios_py_*.html`. They have no tienen idea cuál abrir. `SOURCES.md` es el único mapa.
6. Se rinden and Slack someone: "wtf is in here?"

### Problemas concretos

| # | Problem | Where it hurts |
|---|---|---|
| 1 | No subfolder README files | Every nuevo reader wastes 10 min figuring out el layout |
| 2 | Monolithic big files (DOSSIER.md, REVENUE-AVENUES.md, PEER-BENCHMARK.md, SYNTHESIS.md) | Can't skim; can't quote a section without scrolling; difícil actualizar piecemeal |
| 3 | No "start here for X role" guide | Ivan's team doesn't saben qué 3 archivos leer para obtener up to speed in 5 min |
| 4 | Source-of-truth son solo HTMLs crudos + 1 índice | No "extracted facts" view separate from raw |
| 5 | 12 batch JSONs without an index | `research/1000-orgs/batches/` parece caos |
| 6 | Missing personas/use-cases el repo serves | Not optimized for: (a) SOS Paraguay board reading it, (b) ParaguAI team building tech, (c) donor outreach |
| 7 | No drafts/working/ folder | Things we draft vs finalized aren't separated |
| 8 | No `outreach/` for email templates, call scripts | Critical for any future action |
| 9 | No `pitch/` folder for slides, one-pagers | We have research; nothing para enviar to SOS Paraguay |
| 10 | No version markers on documents | "Is this the latest? Did the scandal analysis update?" |
| 11 | No glossary / style guide | Spanish vs English, abbreviations (SNNA, Ojoykére, etc.) undefined |
| 12 | No `governance/` folder | Este documento had nowhere to live |
| 13 | No clear "evidence quality" markers | Some HTMLs are stale, some facts come from tercero-party profile, some from one-line search hit |
| 14 | Missing crítico documents (see Part 3) | Pitch deck, email templates, viaje del donante, safeguarding policy, stack tecnológico spec, budget, risk register, stakeholder map, competitive teardowns |
| 15 | No clear siguiente-actions tracker | "What's siguiente" is a list in README; should be an actionable board file |

---

## Parte 2 — Reestructuración propuesta

### 2.1 Layout de nivel superior

```
aldea-sos-paraguay/
├── README.md                         (rewritten as the entry point — 1 screen max)
├── governance/                             (NEW — repo governance)
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
├── start-here/                    (NEW — guided entry point)
│   ├── README.md                     (decision tree: who are you? read these 3 files)
│   ├── for-aiw-team.md               (what Aiw/ParaguAI team should know)
│   ├── for-sos-paraguay.md           (what SOS PY would see if they got this)
│   ├── for-donor-outreach.md         (for future donor-side use)
│   ├── 5min-summary.md               (one-pager for executives)
│   └── 30min-deep-dive.md            (reading list for a half-hour read)
│
├── evidence/                      (RENAME: evidence/ → evidence/)
│   ├── README.md                     (how to navigate this folder)
│   ├── SOURCES.md                    (existing — keep)
│   ├── EXTRACTED-FACTS.md            (NEW — distilled facts from the HTMLs, not raw)
│   ├── aios_py_home.html
│   ├── aios_py_contact.html
│   ├── ... (all 14 HTMLs)
│   └── evidence-levels.md            (NEW — explains how to interpret reliability)
│
├── about/                       (RENAME: sos/ → about/)
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
├── benchmark/                     (RENAME: comparison/ → benchmark/)
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
├── research/                      (RESTRUCTURE: research/1000-orgs/batches/ → research/1000-orgs/)
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
├── revenue/                       (RENAME: revenue/ → revenue/)
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
├── pitch/                         (NEW — outbound deliverables)
│   ├── README.md
│   ├── pitch-deck-outline.md         (NEW — slide-by-slide outline)
│   ├── executive-summary-pdf.md      (NEW — content for a 2-pager PDF)
│   ├── one-pager-paraguai.md         (NEW — what's in it for ParaguAI)
│   ├── one-pager-sos-py.md           (NEW — what's in it for SOS Paraguay)
│   ├── one-pager-corporate-ally.md   (NEW — for pitching Tigo / Itaú / Ueno)
│   └── FAQ.md                        (NEW — anticipated questions + answers)
│
├── outreach/                      (NEW — outbound scripts/templates)
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
├── tech-spec/                     (NEW — for tech team to build)
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
├── financial/                     (NEW — financial modeling)
│   ├── README.md
│   ├── revenue-model-baseline.md    (current revenue estimate)
│   ├── revenue-model-projected.md   (with new streams)
│   ├── cost-estimate.md
│   ├── budget-90-day.md
│   ├── budget-12-month.md
│   └── fx-notes.md                  (Gs. ↔ USD, conversion conventions)
│
├── strategy/                      (NEW — strategy & planning)
│   ├── README.md
│   ├── 30-day-quick-wins.md
│   ├── 90-day-plan.md
│   ├── 12-month-roadmap.md
│   ├── donor-journey-map.md
│   ├── competitor-strategy.md
│   └── branding-positioning.md
│
├── policy/                        (NEW — child protection)
│   ├── README.md
│   ├── safeguarding-charter.md       (model child protection policy)
│   ├── safeguarding-incident-protocol.md
│   ├── data-privacy-children.md      (GDPR-K equivalent, COPPA equivalents)
│   ├── sponsor-ethics.md             (rules for sponsor communications)
│   └── image-consent-policy.md
│
├── competitive/                   (NEW — deep competitive teardowns)
│   ├── README.md
│   ├── compassion-py.md
│   ├── world-vision-py.md
│   ├── cird-py.md
│   ├── techo-py.md
│   ├── teleton-py.md
│   ├── fundacion-huesped-ar.md
│   └── casa-de-esperanza-ar.md
│
├── archive/                       (NEW — superseded/deprecated files)
│   ├── README.md
│   └── (anything we abandon moves here, never deleted)
│
└── _originals/         (NEW — safety net)
    ├── README.md
    ├── evidence/              (full original 932K)
    ├── sos/                          (original DOSSIER.md)
    ├── comparison/                   (original PEER-BENCHMARK.md)
    ├── research/                     (original 1000-similar-projects/)
    └── revenue/              (original REVENUE-AVENUES.md)
```

### 2.2 Por qué este layout

- **Numbered prefixes** (`00-`, `01-`, ...): sort order matches reading order. ` `00-start-here` is the entry point. Then evidence → dossier → benchmark → research → revenue → outward deliverables → tech → financial → strategy → policy → competitive → archive.
- **Split big files into small subfolder files**: each big MD gets `README.md`, `executive-summary.md`, `topic.md` extracted sections. Easier actualizar, easier to cite.
- **One clear "audience" hub** (`start-here/`): Ivan's team reads `for-aiw-team.md`. Whoever pitches SOS Paraguay reads `for-sos-py.md`. The 5-minute and 30-minute reading lists anchor everyone.
- **Separation of evidence and synthesis**: `evidence/` is the raw HTMLs + extracted facts. `about/` is our interpretation. This makes evidence auditable.
- **Outbound deliverables** (`pitch/`, `outreach/`, `tech-spec/`) live separately from research. Este es what we *send* to people vs what we *learned*.
- **`archive/` and `_originals/`**: nothing is ever deleted; deprecado content is moved to archives with a README.
- **One META layer**: governance (glossary, style, risk register, stakeholder map, action board, changelog).

### 2.3 Qué haría hoy (Día 1 de la reestructuración)

1. **Create the full directory skeleton** — empty folders, no content moves yet
2. **Move evidence/, sos/, comparison/, research/1000-orgs/batches/, revenue/ → _originals/** for safety
3. **Split each big MD into the nuevo subfolder structure**:
   - `DOSSIER.md` (15K) → 6 small files in `about/`
   - `PEER-BENCHMARK.md` (11K) → 5 small files in `benchmark/peers/`
   - `REVENUE-AVENUES.md` (25K) → 13 small files in `revenue/streams/`
   - `SYNTHESIS.md` (20K) → 7 small files in `research/1000-orgs/`
4. **Create nuevo docs** (executive summary, 5/30-min guides, glossary, etc.) — ~20 nuevo files
5. **Rewrite README.md** as a tight entry point
6. **Add nuevo content folders** (pitch/, outreach/, tech-spec/, financial/, strategy/, policy/, competitive/) with stubs + primero-draft content for the crítico ones
7. **Single atomic commit** titled "Restructure: numbered folders, subfolder READMEs, audience-keyed entry point" — so the history stays clean
8. **Push to GitHub**

### 2.4 Qué haría el Día 2 (no estoy pidiendo esto ahora, solo listando)

- Fill out the pitch deck outline into a real slide structure
- Write the email templates in `outreach/`
- Build the pasarela de donación processor comparison
- Write the safeguarding charter

---

## Parte 3 — Archivos/carpetas adicionales que deberíamos preparar (lista de brechas)

Este es the catalog of **missing** deliverables that any serious partner / donor / SOS board member would expect para encontrar.

### A. Soporte de decisiones (alta prioridad — bloquea pitching hasta que esté hecho)

1. **`governance/tablero-de-acciones.md`** — Kanban of siguiente actions with owners
2. **`governance/registro-de-riesgos.md`** — Scandal relapse, donor flight, regulatory, key-person dependency, etc.
3. **`governance/mapa-de-stakeholders.md`** — Who's who at SOS Paraguay (Ana Medina Zorrilla, Zunilda Baruja, others), at SNNA, at partner orgs, at media
4. **`start-here/resumen-5-minutos.md`** — One-pager: who is SOS PY, what's broken, what we propose, what we need
5. **`start-here/deep-dive-30-minutos.md`** — Annotated reading order
6. **`pitch/resumen-ejecutivo-pdf.md`** — Content for a 2-pager PDF
7. **`pitch/estructura-del-pitch-deck.md`** — Slide structure (problem, opportunity, evidence, plan, ask)
8. **`pitch/preguntas-frecuentes.md`** — 20 questions we'd be asked, with answers

### B. Tecnología y producto (prioridad media — bloquea implementación)

9. **`tech-spec/donation-gateway/processor-comparison.md`** — Donorbox vs Funraise vs Bancard vs Stripe vs Pix vs Tigo Money
10. **`tech-spec/donation-gateway/recommended-stack.md`** — Concrete choice + why
11. **`tech-spec/donation-gateway/data-flow.md`** — Donor → checkout → PSP → webhook → CRM → email → receipt
12. **`tech-spec/donation-gateway/wireframes.md`** — Donation form, recurring toggle, thank-you page
13. **`tech-spec/donation-gateway/cost-estimate.md`** — SaaS fees, transaction fees, build-vs-buy
14. **`tech-spec/transparency-microsite/wireframes.md`** — Annual report rendering, KPI dashboard
15. **`tech-spec/sponsor-portal/design-doc.md`** — Sponsor a house: letter exchange model
16. **`tech-spec/infra/CRM-recommendation.md`** — Salesforce NPSP vs HubSpot Nonprofit vs Airtable

### C. Scripts de outreach (prioridad media — necesario para cualquier contacto)

17. **`outreach/email/cold-outreach-corporativo.md`** — For Tigo/Personal/Ueno/Areté/Tupi/etc.
18. **`outreach/email/cold-outreach-socio-tecnologico.md`** — For Donorbox/Funraise/Bancard
19. **`outreach/email/cold-outreach-fundacion.md`** — For TechSoup/Google/Microsoft
20. **`outreach/email/cold-outreach-donante-daf.md`** — For Daffy/Fidelity/Schwab
21. **`outreach/email/cold-outreach-sos-py.md`** — First contact email to Ana Medina or Zunilda Baruja
22. **`outreach/call/discovery-call-script.md`** — 30-min discovery call template
23. **`outreach/call/objection-handling.md`** — Common objections + responses

### D. Modelado financiero (prioridad media)

24. **`financial/revenue-model-baseline.md`** — Estimate actual revenue from clues + SOS PY federation
25. **`financial/revenue-model-projected.md`** — 18-month projection with each nuevo stream enabled
26. **`financial/cost-estimate.md`** — Cost to implement each nuevo fuente de ingreso
27. **`financial/budget-90-day.md`** — What does the primero quarter cost?
28. **`financial/budget-12-month.md`** — Full primero-year budget

### E. Estrategia y planificación (prioridad media)

29. **`strategy/30-day-rápido-wins.md`** — Concrete actions, owners, deadlines
30. **`strategy/90-day-plan.md`** — Quarterly plan
31. **`strategy/12-month-roadmap.md`** — Annual plan
32. **`strategy/donor-journey-map.md`** — Touchpoints from awareness to recurring giver
33. **`strategy/competitor-strategy.md`** — How we differentiate from Compassion PY / WV PY

### F. Política y salvaguarda (alta prioridad dado el escándalo)

34. **`policy/safeguarding-charter.md`** — Model protección infantil policy
35. **`policy/safeguarding-incident-protocol.md`** — What to do if allegation surfaces
36. **`policy/data-privacy-children.md`** — Image consent, COPPA-style rules
37. **`policy/sponsor-ethics.md`** — Rules for sponsor communications (no identifying info, etc.)
38. **`policy/image-consent-policy.md`** — Template consent forms

### G. Análisis profundos de competidores (prioridad media)

39. **`competitive/compassion-py.md`** — Operational model + modelo de ingresos + digital stack
40. **`competitive/world-vision-py.md`** — Same
41. **`competitive/cird-py.md`** — WhatsApp at scale — replicable model
42. **`competitive/techo-py.md`** — Rendición de cuentas template
43. **`competitive/teleton-py.md`** — Comilona model = USD190k single event benchmark
44. **`competitive/fundacion-huesped-ar.md`** — Health/welfare crossover
45. **`competitive/casa-de-esperanza-ar.md`** — Argentina children home reference

### H. Extensión de investigación (menor prioridad)

46. **`research/patterns/donacion-recurrente-a-escala.md`** — Synthesis of how top 10 sponsorships work
47. **`research/patterns/digital-recaudación de fondos-trends.md`** — Web3, AI, etc. trends
48. **`research/patterns/modelo-de-federacion.md`** — How SOS International + others federate
49. **`research/patterns/modelos-de-donacion-de-la-diaspora.md`** — How diaspora orgs fund home countries
50. **`research/datasets/`** — Structured subsets of CATALOG.csv for fácil slicing (Paraguay only, residential care only, top 100 revenue, etc.)

### I. Visual y presentación (menor prioridad pero útil)

51. **`pitch/slides/01-problem.md`** etc. — Slide-by-slide content
52. **Diagrams** — Donation flow, viaje del donante, stakeholder map, competitive positioning — as PNG/SVG
53. **One-pager PDF** — Generated from `pitch/resumen-ejecutivo-pdf.md`

---

## Parte 4 — Preguntas clave para vos

Before I touch anything, I want para hacer sure I'm aligned:

1. **Are you OK with this restructure** (numbered prefixes, archive of originals in `_originals/`, atomic commit)? Es reversible — nothing is deleted, just moved.
2. **Polki Squad = your interno team** (ParaguAI / Aiw / etc.), right? Or is "polki squad" something else (por ejemplo, a dedicated subgroup I'm not aware of)?
3. **Which of the ~50 missing files would be MOST útil** for the siguiente 2 weeks? I can prioritize those primero (vs trying to do all 50 at once).
4. **Do you want me to ACT today** (do the restructure + write the most crítico missing files), or just DELIVER THIS PROPOSAL and let you decide?

---

## Parte 5 — Esfuerzo estimado

| Fase | Esfuerzo | Entregable |
|---|---|---|
| Restructure skeleton + subfolder READMEs | 1 hour | 12 numbered folders, ~30 READMEs |
| Split big MDs into topical subfiles | 2 hours | ~30 nuevo topical files extracted from existing |
| Write META + 00-start-here | 1 hour | ~10 governance + entry-point files |
| Write top-priority missing files (A items: 1-8) | 2 hours | Decision-support docs |
| Write top tech & outreach (B + C items: 9-23) | 3 hours | Tech specs + email templates |
| Write policy/competitive (E + F items: 34-45) | 2 hours | Safeguarding + competitive teardowns |
| Push + verify | 30 min | One atomic commit, pushed to GitHub |
| **Total** | **~12 hours** | 50+ nuevo files, single atomic commit |

Puedo hacer esto en una sesión hoy si das luz verde.

---

*Next step: tell me which of Part 4's questions to address, and whether to proceed with the restructure now.*