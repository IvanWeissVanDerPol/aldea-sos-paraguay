# Integrations — Aldea SOS Paraguay demo

This document describes the mock adapters in `public/js/demo.js` and how to swap each for real providers when the org takes over.

The interface for each is intentionally minimal. Real adapters can be much more sophisticated — the goal here is to show what shape they need to take.

## 1. Form submissions: `Demo.submit`

**Current implementation:** returns a fake success after a simulated delay.

**Interface:**
```js
Demo.submit(formType, payload) -> Promise<{
  ok: boolean,
  receiptId: string,
  formType: string,
  payload: object,
  timestamp: ISO8601,
  message: string
}>
```

**Swap recipe for real provider:**

Most modern form services expose a POST endpoint that returns JSON. The adapter is straightforward:

```js
Demo.submit = async function(formType, payload) {
  const response = await fetch('/api/forms/' + formType, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    return { ok: false, error: 'Submission failed. Try again.' };
  }
  return await response.json();
};
```

**Real provider options in Paraguay:**

- **Mailgun** — easy API, sandbox tier free, good docs.
- **SendGrid** — mature, good deliverability.
- **AWS SES** — cheap, requires AWS account.
- **Resend** — modern API, good DX, paid.
- **Formspree / Web3Forms / Basin** — zero-code form endpoints; great for static sites.

For an organization that wants minimal ops overhead, a managed form service (Formspree, Basin, Web3Forms) is the easiest entry point.

For organizations that want to own the data, a small Node/Python/Go backend is the move.

**Considerations specific to Paraguay:**

- Anti-spam laws apply. Form submissions to a nonprofit that capture email addresses may need opt-in consent and easy unsubscribe.
- If the form produces a "tax receipt" the org needs to issue, the form submission must flow into an accounting system (or at minimum a CRM with an export to accounting).

## 2. Authentication: `Demo.auth`

**Current implementation:** localStorage with a single demo account.

**Interface:**
```js
Demo.auth.login(email, password) -> { ok: boolean, session?: object, error?: string }
Demo.auth.logout() -> void
Demo.auth.current() -> object | null
Demo.auth.isLoggedIn() -> boolean
```

**Swap recipe for real provider:**

```js
Demo.auth.login = async function(email, password) {
  const r = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!r.ok) return { ok: false, error: 'Invalid credentials' };
  const session = await r.json();
  localStorage.setItem('demo-portal-session', JSON.stringify(session));
  return { ok: true, session };
};
```

**Real provider options:**

- **Auth0** — easiest, free tier for small nonprofits, well-documented.
- **Clerk** — modern, React-friendly, free tier.
- **Supabase Auth** — if the org is also using Supabase for the database.
- **Cognito** — if the org is already on AWS.
- **Custom JWT** — if the org has in-house dev capacity.

For Paraguay-specific data residency: Auth0 supports regional deployments but the free tier is US. Supabase lets you self-host in any region. If the org has strict data residency requirements, self-hosted Supabase or Keycloak is the cleanest path.

## 3. Search: `Demo.search`

**Current implementation:** substring match against `/data/*.json`.

**Swap recipe for real provider:**

For a small static site, the simplest upgrade is **Pagefind** — a static-site search engine that runs at build time and generates a search index. With no build step here, the alternative is **client-side fuzzy search** with Fuse.js or MiniSearch.

If the org adopts a CMS or database, **Algolia** or **Meilisearch** are the right answers — both have generous free tiers for nonprofits.

For an org with strict privacy requirements, sticking with a static client-side search over public JSON files is fine — it's what we have now.

## 4. Donations: payment processing

**Current implementation:** mock that returns a fake receipt ID.

**Real provider considerations in Paraguay:**

- **Bancard VPOS** — local Paraguayan processor, supports credit/debit and most local banks. The right choice if the org already has a merchant account with a Paraguayan bank.
- **Pagopar** — Paraguayan alternative, growing support.
- **Tigo Money / Personal Pay** — mobile wallets with wide adoption. Process payments through their APIs.
- **Stripe** — international, not directly available in Paraguay but works via Stripe Atlas if the org has a US entity.
- **PayPal** — international, donor-facing UX familiar, lower conversion in Latin America than cards.
- **Pix (Brazil)** — instant transfer, growing in Paraguay. Mostly useful if the org also accepts Brazilian donors.

**A clean adapter pattern:**

```js
// /js/integrations/payments.js
Demo.donate.submit = async function(amount, frequency, method, donorInfo) {
  // Route by method
  if (method === 'card' || method === 'pix') {
    return await processViaBancard(amount, frequency, donorInfo);
  }
  if (method === 'tigo' || method === 'personalpay') {
    return await processViaWallet(amount, frequency, method, donorInfo);
  }
  if (method === 'bank') {
    return await generateBankTransferInstructions(donorInfo);
  }
  throw new Error('Unknown payment method: ' + method);
};
```

**Important legal considerations:**

- The org must be registered with the Paraguayan tax authority (SET) to issue valid donation receipts.
- Online donations may require BCP authorization depending on volume.
- Personal data captured during the donation flow (name, CI/RUC, email, payment info) falls under Ley 1682/2001 on personal data protection. The org needs a privacy notice (we already provide one) and consent flows.
- Recurring donations need explicit cancellation UX — the user must be able to cancel without friction. Don't bury the cancel button.

## 5. Email: notifications, receipts

**Current implementation:** no email is sent anywhere.

**What needs email when real:**

- Donation confirmation (always)
- Donation receipt PDF for tax purposes (always)
- Recurring donation receipt monthly (for recurring)
- Sponsorship confirmation + introduction letter from the sponsored child (eventually)
- Volunteer application confirmation (always)
- Press inquiry response (eventually)
- Audit results publication notification (eventually)

**Real provider options:** Same as form submissions. Mailgun/SendGrid/Resend/Postmark are all viable. Pick based on volume and deliverability needs.

## 6. CMS: content management

**Current implementation:** JSON files in `public/data/`.

**The org likely has a CMS already** (aldeasinfantiles.org.py runs Kentico). For handoff, the migration path is:

1. **Decide if the new site uses a CMS or stays static.** If static, content updates are pull requests.
2. **If CMS:** pick one that fits the org's existing workflow.
   - **Headless CMS** (Sanity, Contentful, Strapi, Directus) — clean separation, great for static frontends.
   - **Self-hosted WordPress** — if the org's team already knows WordPress.
   - **Same Kentico** as the existing site — if the org wants to reuse infrastructure.

3. **The JSON files in `public/data/` become the contract** between the CMS and the frontend.

## 7. Analytics

**Current implementation:** none. This is intentional.

If the org wants analytics, the simplest path that respects privacy:

- **Plausible** (self-hosted or cloud) — privacy-respecting, no cookies.
- **Fathom** — same idea, paid.
- **GoatCounter** — lightweight, free for small sites.

Avoid Google Analytics for a children's-welfare site. The privacy implications outweigh the analytical value.

## 8. Security headers

**Current implementation:** none — this is a static site served by GitHub Pages, which provides some defaults.

When the org moves to its own hosting:

- **HSTS** — force HTTPS.
- **CSP** — strict Content-Security-Policy that only allows scripts from the same origin.
- **X-Frame-Options: DENY** — prevent clickjacking.
- **Referrer-Policy: strict-origin-when-cross-origin** — privacy-respecting referrer.
- **Permissions-Policy** — disable unused browser features (microphone, geolocation, etc.).

A small `_headers` file in `public/` (Netlify-style) or server config (nginx, Apache) can set all of these.