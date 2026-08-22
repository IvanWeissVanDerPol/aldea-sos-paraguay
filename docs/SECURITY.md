# Security — Aldea SOS Paraguay demo

This document describes what the demo does and doesn't protect against. Important for the organization receiving it.

## Threat model

The demo is a **static site served on GitHub Pages** with no backend, no database, no authentication of its own. The threats it faces are different from a typical web app.

### What the demo does

- Serves static HTML/CSS/JS/images over HTTPS.
- Has a non-dismissible demo banner stating clearly that this is not the official site.
- Has a privacy policy that explicitly says no data is collected.
- Has terms of use that limit the demo's scope.
- Uses localStorage only for theme preference and the demo's mock authentication.
- Has no third-party trackers, analytics, or scripts.

### What the demo does not protect against

This list is honest. The org should know what they're getting.

**Not protected:**

- **No payment processing.** Forms are mock. No credit card data flows through this site. No transactions occur.
- **No identity verification.** The demo accepts any "login" because there's no real authentication. Anyone can claim to be "Cuenta Demo."
- **No content authenticity.** The demo's content is a redesign. It's not a verbatim copy of the org's communications. Information may be outdated.
- **No real-time updates.** When the org updates their site, the demo doesn't reflect that automatically.
- **No data backup.** localStorage clears when the browser cache is cleared. If a donor starts a donation in this demo and their browser loses state, the donation is gone.

**Risks to be aware of:**

- **Domain impersonation.** The domain `aldea-sos.paragu-ai.com` could be confused with the org's official `aldeasinfantiles.org.py`. The demo banner mitigates this but doesn't eliminate it. If the demo is shared widely before the org takes over, recipients may form a wrong impression.
- **Phishing risk.** A bad actor could clone this demo, remove the banner, and use it to phish donors. The org should monitor for unauthorized copies.
- **Donor confusion.** Donors landing on this site first may think donations here are processed by the org. The demo banner says otherwise, but conversion paths need to make this crystal clear.
- **Search engine indexing.** This demo is public on the internet. Search engines will index it. The org should know.
- **Disclosure of strategic plans.** Any content in this demo that's not from public sources could leak information the org isn't ready to share publicly.

### What the org needs to do before going live

If the org adopts this demo and replaces the demo banner with their own:

1. **Verify domain ownership.** Make sure `aldea-sos.paragu-ai.com` (or whatever domain is used) is owned by the org or transferred to them.
2. **Establish legal entity for payment processing.** Online donations require a registered entity in Paraguay with proper tax registration (SET) to issue valid donation receipts.
3. **Set up real authentication.** Replace the localStorage-based `Demo.auth` with a real auth provider (Auth0, Clerk, Supabase, etc.).
4. **Set up payment processing.** Replace `Demo.submit` with real adapters. See `docs/INTEGRATIONS.md`.
5. **Update privacy policy and terms.** The current versions are demo-specific. The org needs its own legal review.
6. **Set up email infrastructure.** Receipts, confirmations, sponsor letters — all need real email.
7. **Set up backups.** Static sites don't backup themselves. Decide where the source repo lives and how to recover from disasters.
8. **Establish incident response.** Who do donors contact if something goes wrong? How fast can the org respond?

## Reporting issues

If you find a security problem in this demo, please report it:

- Open an issue at the GitHub repository.
- Or email the volunteer maintainer (contact details in the repo description).

If you're reporting a phishing site or impersonation, please also contact Aldeas Infantiles SOS Paraguay directly.

## Disclaimer

This is a demo pro-bono project, not a commercial security audit. The information above reflects what the volunteer maintainers know about static site security as of the date of this document. It is not a comprehensive risk assessment.

For an organization handling donations and personal data of vulnerable populations, **a professional security audit before going live is strongly recommended**.