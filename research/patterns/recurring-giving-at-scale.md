# Recurring Giving at Scale — Pattern Synthesis

> Drawn from 939-org catalog. Patterns observed in how child-welfare orgs structure recurring-donor programs.

## What works

### Tied to specific beneficiary
- **Compassion**: $43/mo per child, quarterly photo + letter exchange
- **Plan International**: sponsor a child, can visit in person
- **ChildFund**: per-child sponsorship
- **WWF**: symbolic adoption of specific animals (panda, elephant)

**Why it works**: emotional investment → high retention

### Tied to specific program or house
- **SOS Children's Villages Spain**: "Apadrina una casa" — sponsor a house, not a child (better safeguarding)
- **Sponsor a Bed** (hospitals)
- **Sponsor a School Day** (Education Cannot Wait)

**Why it works**: less safeguarding risk; tangible outcome

### Tiered monthly amounts
- Most orgs offer Gs. 50k / 100k / 200k / 500k tiers
- "Custom amount" always available
- Average sponsor = $25-45/mo globally

### Pad-rinazgo (sponsorship) framework
- Spanish/LatAm equivalent
- "Padrino" is a godparent metaphor
- Long-term cultural resonance in Catholic LatAm
- Periodic updates (monthly / quarterly)

## How to ship

For Aldea SOS Paraguay specifically:

1. **"Apadrina una Aldea"** (sponsor a house) — biggest single revenue stream
2. **"Apadrina una mamá SOS"** (sponsor a caregiver) — emotional hook
3. **"Amigo SOS"** (recurring donor — generic, existing)
4. **"Padrino del programa Ojoykére"** (sponsor a specific prevention program)

For each, ship:
- Login portal (sponsor dashboard)
- Monthly update email
- Annual impact report tied to the sponsorship

## Tech stack for recurring giving

- **Donorbox** (recommended for <1k donors)
- **Funraise** (recommended for >1k donors)
- **Givebutter** (free, with caveats)
- **Stripe** + custom build (for advanced)
- **Bancard VPOS** (PY local, for recurring via local cards)

## Revenue potential

- **Conservative**: 100 sponsors × $10/mo = $1,000/mo = $12k/yr
- **Realistic**: 200 sponsors × $25/mo = $5,000/mo = $60k/yr
- **Aspirational**: 500 sponsors × $40/mo = $20,000/mo = $240k/yr

---

*Sources: catalog entries tagged "recurring-giving" + "sponsor-portal". See [`../1000-orgs/slices/FUNDING-PREVALENCE.md`](../1000-orgs/slices/FUNDING-PREVALENCE.md) for prevalence data.*