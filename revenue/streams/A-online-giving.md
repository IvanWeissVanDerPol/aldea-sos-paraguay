# Stream A. Online giving expansion

## A. Online giving expansion

### A1. Online donation gateway — Donorbox / Payway / Stripe
**What**: Replace the donation form (which captures intent but routes to "Pago Ocasional") with a real card/wallet gateway.
**Evidence**:
- Donorbox serves 80,000+ NGOs globally with Spanish-language product (donorbox.org/es)
- Cáritas Argentina uses Mercado Pago (caritas.org.ar/mercado-pago/)
- DonarOnline.org is the established Argentine NGO donation gateway
- Bancard VPOS is Paraguay's local payment processor (Bancard.com.py)
- Pix, Tigo Money, Personal Pay, Wally, Ueno Pay all operate in PY
**Market size**: PY e-commerce market USD ~1.2B; digital payment adoption 55.5%; NGO digital giving estimated USD 5-15M/yr total in PY
**Why SOS PY positioned**: They have the intent-capture form already; 23k Facebook followers; established brand
**Risks**: Brand ambiguity if processor fails (mitigate: white-label Stripe)
**30/60/90 plan**:
- Day 1-30: Sign up Donorbox (free for PY nonprofits under 1k donors); integrate with `/como-ayudar/dona`
- Day 30-60: Add Pix + Tigo Money + Personal Pay; wire WhatsApp link
- Day 60-90: Launch with email blast to newsletter subscribers + Facebook campaign
**Revenue potential**: Gs. 50-200M/yr (USD 7-27k)
**Partners needed**: Donorbox (free tier), Bancard (PY merchant account), Bitso (for crypto)
**Tech**: Donorbox or Funraise
**Safeguarding**: Strong — no child exposure

### A2. Recurring online giving at scale
**What**: Default to "monthly" rather than one-time on the donate page. Monthly giving has 2-5x LTV of one-time.
**Evidence**: Donorbox data shows recurring donations account for ~30% of online giving but 50%+ of revenue.
**Market size**: Same as A1
**Why positioned**: Same as A1
**Risks**: Donor fatigue
**Plan**: Same as A1 but with monthly-first defaults
**Revenue potential**: Gs. 50-150M/yr
**Tech**: Donorbox recurring feature

### A3. Cryptocurrency donations (BTC/ETH/stablecoins)
**What**: Add Bitso Paraguay / Coinbase Commerce / The Giving Block widget
**Evidence**: UNICEF, Save the Children, Red Cross accept crypto. The Giving Block has 1,000+ NGO partners. PY has Bitso as major exchange.
**Market size**: PY crypto market growing; USD 100k-1M/yr conservative for NGOs
**Why positioned**: They could be first PY charity to accept crypto — PR win
**Risks**: Reputation risk if mismanaged; volatile donations
**Plan**: 30 days: signup with The Giving Block; 60 days: add Bitso widget; 90 days: PR campaign
**Revenue potential**: Gs. 10-50M/yr
**Partners**: Bitso, The Giving Block, Engiven
**Tech**: Coinbase Commerce widget
**Safeguarding**: Strong — no child exposure; flag for governance review

### A4. Donation from abroad in USD/EUR
**What**: Accept international credit card donations on aldeasinfantiles.org.py via Stripe
**Evidence**: Plan USA, Compassion, SOS USA all accept foreign donations; Paraguay diaspora uses these
**Market size**: PY diaspora: 162k in Spain; large communities in Argentina (600k), Brazil, USA (NY/Miami/LA); estimated USD 1-5M/yr to PY NGOs from abroad
**Why positioned**: They have diaspora in target markets
**Risks**: FX, tax receipt complexity
**Plan**: 30 days: Stripe account; 60 days: embed in EN version; 90 days: diaspora outreach
**Revenue potential**: Gs. 100-500M/yr (USD 14-70k)
**Tech**: Stripe
**Partners**: Stripe

### A5. Round-up apps (Pennies / DreamUps) as POS alternative
**What**: Bank-linked apps that round up purchases to the nearest Gs. 1,000 with the difference going to charity
**Evidence**: Pennies (UK) processes £60M+/yr for charities; analogous in PY with Zimple, Tigo Money
**Market size**: PY consumer spend on cards Gs. ~10T (USD 1.4B); even 0.01% = USD 140k
**Why positioned**: Kingo already in supermarket space — could deepen
**Risks**: Low transaction value per donor
**Plan**: Partner with Zimple or Tigo Money for branded round-up feature
**Revenue potential**: Gs. 50-200M/yr
**Tech**: Bank API integration

### A6. Crowdfunding campaigns (GoFundMe-style PY equivalents)
**What**: "Donate to a specific need" — e.g., "buy 50 beds for Aldea Luque"
**Evidence**: GoFundMe Charity handles USD 1B+/yr globally. GoFundMe Brazil is significant. PY has no dominant equivalent yet.
**Market size**: USD 200k-1M/yr for PY causes on international platforms
**Why positioned**: They have specific, tangible projects (Ojoykére, beds, scholarships)
**Risks**: None significant
**Plan**: Use GoFundMe Charity or Causa Justa (PY); launch 1 campaign/quarter
**Revenue potential**: Gs. 50-200M/yr
**Tech**: GoFundMe Charity (free)

### A7. Donor-Advised Funds (DAFs)
**What**: Register as eligible recipient on major DAF platforms (Fidelity Charitable, Schwab Charitable, NPT, Daffy)
**Evidence**: US DAF grants to international causes total >USD 3B/yr; Daffy has 1.7M charities on platform
**Market size**: USD 50-500k/yr to PY NGOs via DAFs
**Why positioned**: Diaspora + US donors use DAFs
**Risks**: None
**Plan**: 30 days: register on NPT, Schwab, Fidelity, Daffy; 90 days: diaspora outreach
**Revenue potential**: Gs. 100-500M/yr (USD 14-70k)
**Tech**: Just registration

### A8. Stock / appreciated securities donations
**What**: Accept stock donations (US donors can donate appreciated stock tax-free)
**Evidence**: Daffy, Donorbox support stock gifts; major US nonprofits accept
**Market size**: PY diaspora stock donations — small but meaningful; USD 100k-1M/yr globally
**Why positioned**: Diaspora angle
**Risks**: Legal complexity
**Plan**: Register with Daffy (handles stock donations automatically)
**Revenue potential**: Gs. 50-200M/yr
**Tech**: Daffy widget

### A9. Facebook / Instagram "Donate" button
**What**: Activate Meta's built-in donate button on their pages
**Evidence**: Available globally, free for nonprofits. Mexican NGOs widely use it.
**Market size**: PY 23k FB likes × donation conversion
**Why positioned**: They have 23k FB likes — direct audience
**Risks**: Meta fees 0%
**Plan**: 7 days: activate donate button; A/B test
**Revenue potential**: Gs. 20-50M/yr

### A10. WhatsApp Donate (Brazil model)
**What**: PIX-style donate button in WhatsApp Business chat
**Evidence**: Brazil launched WhatsApp Pay 2024; NGOs like CUFA use it heavily
**Market size**: Paraguay WhatsApp penetration >90%
**Why positioned**: They could be first PY NGO to do it
**Risks**: Regulatory uncertainty
**Plan**: Watch the BR rollout; pilot when PY regulator approves
**Revenue potential**: Gs. 10-50M/yr

---
