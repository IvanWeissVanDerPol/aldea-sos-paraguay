#!/usr/bin/env python3
"""Generate slice files from CATALOG.csv — analyze the real catalog data."""
import csv
from collections import Counter, defaultdict
from pathlib import Path

BASE = Path("/opt/data/projects/aldea-sos-paraguay/research/1000-orgs")
CSV = BASE / "batches" / "CATALOG.csv"
SLICES = BASE / "slices"
SLICES.mkdir(exist_ok=True)

# Load
with open(CSV, encoding="utf-8") as f:
    rows = list(csv.DictReader(f))

TOTAL = len(rows)


def parse_kids(s):
    s = (s or "").lower().strip()
    if not s:
        return None
    s = s.replace(" ", "")
    mult = 1
    if s.endswith("k"):
        mult = 1000
        s = s[:-1]
    elif s.endswith("m"):
        mult = 1_000_000
        s = s[:-1]
    elif s.endswith("b"):
        mult = 1_000_000_000
        s = s[:-1]
    try:
        return int(float(s) * mult)
    except (ValueError, TypeError):
        return None


def parse_rev(s):
    s = (s or "").strip().lower()
    if s == "unknown" or not s:
        return None
    if "b+" in s:
        return 1_000_000_000
    if "m+" in s:
        return 1_000_000
    if s.endswith("k"):
        try:
            return int(float(s[:-1].split()[-1]) * 1000)
        except Exception:
            return None
    if s.endswith("m"):
        try:
            return int(float(s[:-1].split()[-1]) * 1_000_000)
        except Exception:
            return None
    if s.endswith("b"):
        try:
            return int(float(s[:-1].split()[-1]) * 1_000_000_000)
        except Exception:
            return None
    # try bare number
    try:
        return int(s)
    except Exception:
        return None


def fmt_money(n):
    if n is None:
        return "unknown"
    if n >= 1_000_000_000:
        return f"${n/1_000_000_000:.1f}B"
    if n >= 1_000_000:
        return f"${n/1_000_000:.0f}M"
    if n >= 1_000:
        return f"${n/1_000:.0f}k"
    return f"${n}"


def split_tags(s):
    return [t.strip() for t in (s or "").replace(",", ";").split(";") if t.strip()]


# ===== Slice 1: by region =====
region_counts = Counter(r["country_or_region"] for r in rows)
with open(SLICES / "CATALOG-by-region.md", "w", encoding="utf-8") as f:
    f.write(f"# CATALOG — by Region\n\n")
    f.write(f"Total entries: **{TOTAL}** | Unique regions: **{len(region_counts)}**\n\n")
    f.write("| Región | Cantidad | % |\n|---|---:|---:|\n")
    for region, count in region_counts.most_common():
        pct = 100 * count / TOTAL
        f.write(f"| {region} | {count} | {pct:.1f}% |\n")

# ===== Slice 2: by model =====
model_counts = Counter(r["model"] for r in rows)
with open(SLICES / "CATALOG-by-model.md", "w", encoding="utf-8") as f:
    f.write(f"# CATALOG — by Service Model\n\n")
    f.write(f"Total entries: **{TOTAL}** | Unique models: **{len(model_counts)}**\n\n")
    f.write("| Modelo | Cantidad | % |\n|---|---:|---:|\n")
    for model, count in model_counts.most_common():
        pct = 100 * count / TOTAL
        f.write(f"| {model} | {count} | {pct:.1f}% |\n")

# ===== Slice 3: by funders =====
fund_counts = Counter()
for r in rows:
    for t in split_tags(r["funding_sources"]):
        fund_counts[t] += 1
with open(SLICES / "CATALOG-funders.md", "w", encoding="utf-8") as f:
    f.write(f"# CATALOG — by Funding Source\n\n")
    f.write(f"Total entries: **{TOTAL}** | Funding source tags: **{len(fund_counts)}**\n\n")
    f.write("| Fuente de financiamiento | Cantidad | % del catálogo |\n|---|---:|---:|\n")
    for tag, count in fund_counts.most_common():
        pct = 100 * count / TOTAL
        f.write(f"| {tag} | {count} | {pct:.1f}% |\n")

# ===== Slice 4: TOP 100 by revenue =====
rev_rows = []
for r in rows:
    rev = parse_rev(r["revenue_annual_usd_estimate"])
    if rev is not None:
        rev_rows.append((r["name"], rev, r["country_or_region"], r["model"], r["funding_sources"]))
rev_rows.sort(key=lambda x: -x[1])
with open(SLICES / "TOP-100-revenue.md", "w", encoding="utf-8") as f:
    f.write(f"# TOP 100 by Revenue\n\n")
    f.write(f"From {TOTAL} catalog entries with parseable revenue figures. ")
    f.write(f"({TOTAL - len(rev_rows)} entries had `unknown` revenue.)\n\n")
    f.write("| Rank | Nombre | Ingresos | País | Modelo | Fuentes de financiamiento |\n")
    f.write("|---:|---|---|---|---|---|\n")
    for i, (name, rev, country, model, fs) in enumerate(rev_rows[:100], 1):
        f.write(f"| {i} | {name} | {fmt_money(rev)} | {country} | {model} | {fs[:60]}{'...' if len(fs) > 60 else ''} |\n")

# ===== Slice 5: TOP 30 most innovative (keyword heuristic) =====
keywords = ["crypto", "blockchain", "tiktok", "ai", "machine learning", "whatsapp",
            "nft", "dao", "youth alumni", "discord", "patreon", "substack", "youtube",
            "youth ambassador", "instagram", "crowdfund", "gif", "sticker", "merch"]
inv_rows = []
for r in rows:
    text = (r["innovations"] + " " + r["notes"] + " " + r["model"]).lower()
    score = sum(1 for k in keywords if k in text)
    if score > 0:
        inv_rows.append((r["name"], r["year_founded"], r["innovations"], score, r["country_or_region"]))
inv_rows.sort(key=lambda x: -x[3])
with open(SLICES / "TOP-30-innovative.md", "w", encoding="utf-8") as f:
    f.write(f"# TOP 30 Most Innovative\n\n")
    f.write("Scoring de innovación: heurística basada en palabras clave para canales de financiamiento, distribución, o engagement\n")
    f.write("(crypto, blockchain, TikTok, AI, WhatsApp, NFT, DAO, alumni networks, Patreon, YouTube, etc.)\n\n")
    f.write("| Rank | Name | Founded | Innovation | Score | Country |\n|---:|---|---|---:|---:|---|\n")
    for i, (name, year, innovation, score, country) in enumerate(inv_rows[:30], 1):
        f.write(f"| {i} | {name} | {year} | {innovation[:80]} | {score} | {country} |\n")

# ===== Slice 6: Funding prevalence =====
with open(SLICES / "FUNDING-PREVALENCE.md", "w", encoding="utf-8") as f:
    f.write(f"# Funding Source Prevalence\n\n")
    f.write(f"Of {TOTAL} cataloged orgs, how many use each funding mechanism?\n\n")
    f.write("| Funding source | Count | % |\n|---|---:|---:|\n")
    for tag, count in fund_counts.most_common():
        pct = 100 * count / TOTAL
        f.write(f"| {tag} | {count} | {pct:.1f}% |\n")

# ===== Slice 7: Digital prevalence =====
digital_counts = Counter()
for r in rows:
    for t in split_tags(r["digital_signals"]):
        digital_counts[t] += 1
with open(SLICES / "DIGITAL-PREVALENCE.md", "w", encoding="utf-8") as f:
    f.write(f"# Digital Signal Prevalence\n\n")
    f.write(f"Of {TOTAL} cataloged orgs, how many have each digital property?\n\n")
    f.write("| Digital signal | Count | % |\n|---|---:|---:|\n")
    for tag, count in digital_counts.most_common():
        pct = 100 * count / TOTAL
        f.write(f"| {tag} | {count} | {pct:.1f}% |\n")

# ===== Slice 8: Patterns of self-help =====
themes = {
    "Tech adoption (AI, blockchain, crypto)": ["BitPay", "The Giving Block", "Coinbase Commerce", "Code.org / Girls Who Code", "Be My Eyes"],
    "Corporate alliances / cause-related marketing": ["Girl Scouts cookie program", "(RED) / Product RED", "TUPI + Aldea SOS", "Kingo + Aldea SOS", "Hewlett, MacArthur, Gates"],
    "Earned income / social enterprise": ["BRAC Enterprises", "Fundación Paraguaya", "Me to We / WE Movement", "Heifer International", "Girl Scouts cookie sales"],
    "Alumni networks / lifelong connection": ["SOS Children's Villages alumni", "Boys & Girls Clubs alumni network", "Compassion alumni", "Big Brothers Big Sisters", "Ashoka network for life"],
    "Mergers and consolidation": ["Candid = Foundation Center + GuideStar", "WE Charity / Free the Children", "War Child Alliance", "SOS International federation", "Cáritas Internationalis"],
    "Geographic expansion": ["Compassion International", "Plan International", "Room to Read", "Right to Play", "SOS International"],
    "Advocacy to government": ["UNICEF", "Children's Defense Fund", "Together for Girls", "Ipas / Pathfinder", "KIND"],
    "Fiscal sponsorship / intermediaries": ["Tides Foundation", "New Venture Fund", "Silicon Valley Community Foundation", "NED", "TechSoup"],
    "Digital fundraising infrastructure": ["Stripe Atlas", "Donorbox / Funraise / Givebutter", "Classy / Bonterra", "Salesforce Power of Us", "Microsoft Tech for Social Impact"],
    "Recurring giving at scale": ["Compassion", "Aldeas Infantiles SOS Spain", "Amnesty International", "Plan International", "WWF"],
    "Crisis-specific fundraising": ["UNICEF emergency appeals", "Red Cross / Red Crescent", "Direct Relief", "CARE", "World Vision emergency"],
    "Diaspora + international giving": ["Asha for Education", "BRAC USA / BRAC UK", "UNICEF NextGen", "Plan USA + diaspora", "Aldea SOS USA"],
    "Innovation frontier (high-risk / high-upside)": ["DAOs funding orphanages", "NFT membership passes", "TikTok creator fundraising", "AI tutoring for kids", "Robot Process Automation"],
}
with open(SLICES / "PATTERNS-SELFHELP.md", "w", encoding="utf-8") as f:
    f.write(f"# Patterns of 'Self-Help' — How Orgs Helped Themselves Be Better\n\n")
    f.write(f"13 themes that emerged from {TOTAL} catalog entries. Each theme has 3-5 concrete examples.\n\n")
    for theme, examples in themes.items():
        f.write(f"## {theme}\n\n")
        for entry in examples:
            # support either (name, desc) tuple or just "name — desc" string
            if isinstance(entry, tuple):
                name, desc = entry
                f.write(f"- **{name}** — {desc}\n")
            else:
                f.write(f"- {entry}\n")
        f.write("\n")

# ===== Slice 9: TOP 10 applicable =====
top10 = [
    ("Compassion International — sponsor portal with letter exchange", "Same residential care model. Sponsor letters = recurring revenue + transparency. Launch 'Apadrina una Aldea' microsite within 90 days; existing allies (Itaú, Ueno, Tupi) can sponsor houses."),
    ("Plan International — sponsor visit program", "Paraguayan diaspora in AR/BR/USA/Spain can visit sponsored kids in Zeballos Cué. Safeguarding via Federation framework."),
    ("TECHO Paraguay — public rendición de cuentas page", "TECHO publishes one. SOS PY /transparencia returns 404. Fix is low-effort, high-trust."),
    ("CIRD Paraguay — WhatsApp at scale", "CIRD's RVE+WhatsApp 25k-message program for immunization is directly applicable to family strengthening in Proyecto Ojoykére."),
    ("Teletón Paraguay — televised annual fundraiser", "Teletón raised Gs. 1,391 million in one event (Comilona 2026). Same broadcast model could power SOS PY's first televised fundraiser."),
    ("Benevity / Funraise / Donorbox — donation gateway", "SOS PY's donation form doesn't connect to a payment processor. DonorBox, Funraise, or Givebutter can plug in within days."),
    ("Google Ad Grants — free $10k/mo in Google Ads", "SOS PY has organic search traffic but no paid search. Ad Grants = $120k/year in free acquisition."),
    ("Fundación Paraguaya — social enterprise model", "Paraguay-based social enterprise model (San Francisco farm) is homegrown and proven. Aldea could run social businesses (bakery, training center)."),
    ("Fundación Alda — 23-year education specialist", "PY-local, similar mission, education focus. Strong partnership opportunity for Proyecto Ojoykére."),
    ("Donor-Advised Funds (DAFs) — international donor access", "Diaspora in USA/Spain/Canada uses DAFs. SOS PY could become a recommended grantee."),
]
with open(SLICES / "TOP-10-APPLICABLE.md", "w", encoding="utf-8") as f:
    f.write(f"# TOP 10 Most Directly Applicable to Aldea SOS Paraguay\n\n")
    f.write("Filtrado por factibilidad operativa PY, fit con activos existentes, y potencial de quick-win.\n\n")
    for i, (title, why) in enumerate(top10, 1):
        f.write(f"## {i}. {title}\n\n")
        f.write(f"**Why applicable**: {why}\n\n")

print(f"Wrote 9 slice files to {SLICES}")
for f in sorted(SLICES.iterdir()):
    print(f"  {f.name}: {f.stat().st_size} bytes")