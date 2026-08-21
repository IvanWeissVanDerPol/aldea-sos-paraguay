# STYLE GUIDE — Conventions for the Repo

> Keep these conventions consistent across all docs in this repo. Update this file when conventions change.

---

## Languages

- **Primary**: Spanish (es). The client is Paraguayan. Most audiences speak Spanish.
- **Secondary**: English (en). For sharing with international donors or global partners.
- **Tertiary**: Guaraní (gn). For names and culturally specific terms (e.g., "Ojoykére"). Don't translate these.

When unsure, write in **Spanish** by default. Translate to English only when explicitly serving an English-speaking audience.

## Naming conventions

- **Folders**: lowercase, hyphen-separated (`revenue/`, `donation-gateway/`)
- **Files**: `kebab-case.md` (`executive-summary.md`, `top-15-recommended.md`)
- **Subfolder indexes**: `README.md` (always)
- **Numeric prefixes on top-level folders**: 2-digit + dash + name (`start-here/`)

## Currency

- **Default**: Guaraníes (Gs. or ₲). Always with currency marker.
- **USD**: When citing for international context, include USD alongside Gs. with conversion rate at time of writing.
- **FX convention**: USD 1 ≈ Gs. 7,300 (2026). Put the rate + date in the citation if it's not obvious.
- **Examples**: 
  - ✅ "Gs. 1,391,035,000 (USD ~190k, Comilona 2026)"
  - ❌ "$190k" (when Gs. is the source of truth)

## Numbers

- **Locale**: thousands separator = comma (`1,000`), decimal = period (`1.5`).
- **Large amounts**: write out fully (`Gs. 50,000`) for transparency.
- **Round amounts**: only for ballpark figures (`USD ~190k`).

## Dates

- **Format**: ISO 8601 (`2026-08-21`).
- **Date + time**: `2026-08-21 03:43 UTC`. We're on PYT (UTC-4 year-round).

## Citations

When citing a source:
- Inline: `[source: aldeasinfantiles.org.py/home]`
- URL: full URL in markdown link format: `[A24 Teletón coverage](https://a24.com.py/teleton-logra-recaudacion-historica-de-g-1-391-millones-en-la-comilona-2026/)`

## Evidence levels

Use these tags in `[evidence: …]` brackets when facts matter:

- `[evidence: official]` — verified on official SOS PY or SOS Intl websites
- `[evidence: third-party]` — verified through third-party (Wikipedia, news, Conévio)
- `[evidence: ddgs]` — only from one search hit; treat as tentative
- `[evidence: unknown]` — explicit gap; needs primary research
- `[evidence: estimate]` — derived by us, not from a source

Examples:
- ✅ `[evidence: official]`
- ✅ `[evidence: ddgs — needs verification]`

## Safeguarding flagging

When mentioning the 2025 Austrian scandal:
- Use the phrase **"2025 Gmeiner scandal"** or **"Oct 2025 international crisis"** — not just "scandal"
- Always specify that **Paraguay was not implicated** and that the **Austrian branch** is what was suspended
- Always cite the **Oct 23, 2025 Paraguay press release** as evidence of their distancing
- Never name **Hermann Gmeiner** in pitch materials without explicit review
- Always include safeguarding context when talking about child-related programs

## Code blocks

- Use `\`\`\`bash` for shell commands
- Use `\`\`\`python` for scripts
- Use `\`\`\`json` for data
- Use `\`\`\`csv` for tabular data
- Use `\`\`\`yaml` for config

## File headers

Markdown files longer than 200 lines should start with:

```markdown
# Title

> **Purpose**: what this doc does
> **Audience**: who should read this
> **Status**: draft / final / archived
> **Last updated**: YYYY-MM-DD by [name]
```

## Tone

- Direct, no fluff
- Tables over prose where possible
- Numbers > adjectives
- Acknowledge uncertainty explicitly
- Always cite, never invent

## Voice (when writing outbound)

- For SOS PY (formal): usted, business formal
- For donors / corporates: warm professional
- For Ivan's team: casual direct

---

*Last updated: 2026-08-21.*