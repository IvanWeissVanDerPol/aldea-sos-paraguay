# Digital Maturity Assessment

## Score: **4/10**

What's there works but is incomplete. What's missing represents the biggest revenue opportunity.

---

## ✅ What's there (works)

- Functional website at aldeasinfantiles.org.py
- Donation intent form ("Hacete Amigo SOS")
- Volunteer / bolsa de trabajo page (40 vacancies active)
- Social media presence: FB, IG, LinkedIn, X, YouTube
- Embedded Twitter feed
- Email subscription form
- Newsletter signup
- Mobile-responsive design (Duda CMS)

## ⚠️ What's broken

| Issue | Impact |
|---|---|
| `/transparencia` URL returns 404 | Major trust signal broken — donors can't verify impact |
| `/dona` URL returns 404 (correct: `/como-ayudar/dona`) | Donor friction |
| `/conocenos/que-hacemos/bolsa-de-trabajo` returns 404 | Application friction |
| No donation payment gateway | Form only — requires human follow-up |
| No public annual report | Trust issue, especially post-scandal |
| No public board composition | Governance opacity |
| No published safeguarding policy | Reputational risk |

## ❌ What's missing entirely

### Online fundraising (the #1 gap)
- No online donation via card (Stripe/Bancard/etc.)
- No Pix, Tigo Money, Personal Pay integration
- No crypto donations
- No recurring online donation infrastructure
- No sponsor portal (Compassion/Plan model)
- No "Donate your FX gain" or round-up app integration
- No DAF registration (US tax-advantaged giving blocked)

### Transparency
- No `/transparencia` page working
- No annual report PDF
- No KPIs dashboard
- No charity rating (Charity Navigator or PY equivalent)

### Engagement
- No TikTok
- No YouTube content (channel exists but no uploads visible)
- No WhatsApp Business widget
- No chatbot
- No event ticketing
- No volunteer signup portal (separate from job board)
- No online store / merchandise
- No "donate in someone's honor" memorial giving

### Operations
- No donor CRM (donors can't see their history)
- No CSR microsite (corporate partners can't download impact reports)
- No FAQ / help center
- No multilingual (es + en at minimum)

### Tech stack (inferred)
- Website: **Duda CMS** (template footer reference) — basic template-based
- No SPA, no headless CMS, no JS interactions beyond forms
- No confirmed CRM, email marketing tool, donation processor

---

## Where they rank vs peers

From our 939-org catalog analysis:

| Capability | Aldea PY | Top 30% of peers |
|---|---|---|
| Online donation | ❌ | ✅ (99% have it) |
| Recurring giving | ⚠️ form only | ✅ (34% have it) |
| Annual report public | ❌ | ✅ (27% have it) |
| Multilingual site | ❌ (es only) | ✅ (14% have it) |
| Charity rating | ❌ | ✅ (10% have it) |
| Mobile app | ❌ | ⚠️ |
| TikTok | ❌ | ⚠️ (~5-10% emerging) |

**Verdict**: they are 1-2 generations behind in fundraising tech, governance transparency, and donor UX.

---

## Why the gaps matter

- **Online donation gap** = largest single revenue unlock. 99% of peers accept online donations. Conversion friction = lost donations.
- **Transparency gap** = blocks institutional donors who require proof of impact before giving. Probably Gs. 100M-300M/yr in lost grants.
- **Sponsor portal gap** = blocks recurring padrino model that Compassion/Plan/ChildFund use to retain donors for years.

## What they need to ship (90 days)

Priority 1 (fix what's broken):
- Fix `/transparencia` URL → render annual report
- Fix `/dona` URL → redirect to `/como-ayudar/dona`
- Activate Google Ad Grants ($10k/mo free)

Priority 2 (add what's missing):
- Donation gateway (Donorbox + Tigo Money + Pix)
- Transparency microsite (annual report + KPIs)
- Basic CRM (Salesforce NPSP free)

Priority 3 (medium-term):
- TikTok channel
- Sponsor portal (sponsor-a-house model)
- Multilingual landing page

---

*See [`../05-revenue/`](../05-revenue/) for revenue opportunities tied to these gaps.*
*See [`../08-tech-spec/`](../08-tech-spec/) for technical specifications.*