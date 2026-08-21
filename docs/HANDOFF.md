# Aldea SOS Paraguay — Handoff Package

**Status:** This is a demo preview, not the official site. Built pro-bono. Transferred to the organization upon acceptance.

## What the org receives

When this project is transferred, the organization receives:

- Complete source code (this repository).
- The deployed site at `aldea-sos.paragu-ai.com` until the org redirects the domain.
- All assets, documentation, deployment guides, and credentials we generated during the build.
- A clear hand-off checklist with what they need to do in their first week.

## What the org owns

After transfer, the org owns:

- The source code (it can modify, redistribute, or close-source it as they wish).
- The deployed site and all its content.
- The domain name (after they initiate a domain transfer).
- All third-party accounts we set up in their name (none currently — see below).

## What we did NOT set up

To avoid creating accounts or obligations in the org's name without their written consent, the demo does **not** include:

- A real payment processor account. The donate flow uses a mock endpoint that returns a fake success.
- A real email sender. Forms return a generic "received" message and store nothing.
- A real CRM. Submissions are local-only mock data.
- Real DNS records. The demo lives on the volunteer's `paragu-ai.com` infrastructure.
- Real authentication. Demo accounts are pre-baked and the password is public.

The architecture makes all of these pluggable. The org can wire in their real providers without rewriting any feature.

## First-week checklist (when the org accepts)

1. **Set up payment processor.** Apply for a Stripe or Bancard account under the org's RUC. Replace `public/js/donate-mock.js` with the real adapter. The interface is documented in `docs/INTEGRATIONS.md`.
2. **Transfer the domain.** Initiate a transfer from `paragu-ai.com` to the org's registrar. The current CNAME at Cloudflare will need to be updated.
3. **Set up email.** Sign up for Mailgun/SES/Resend under the org's domain. Replace the mock form handlers in `forms/` with real endpoints.
4. **Set up an authentication provider.** Replace the demo auth in `public/js/auth.js` with Auth0, Clerk, or a hosted Supabase.
5. **Replace placeholder content.** Swap the demo children's profiles, demo corporate partners, and demo donor accounts with real records.
6. **Update DNS for the new production deploy.** The org's new repo becomes the production source.
7. **Review the security headers in `public/_headers` and adapt them to the org's CSP needs.**
8. **Revoke access.** We rotate any credentials we generated. The org gets a fresh start with no shared secrets.

## What the org should NOT do

- Take over our payment processor account (we won't have one — there's nothing to take).
- Accept our terms of service as theirs (we don't write those; the org writes their own).
- Continue using our domain without a transfer (we keep control until they ask).

## Maintenance documentation

- `docs/MAINTAINERS.md` — how any developer can run, modify, and deploy the site.
- `docs/INTEGRATIONS.md` — how to swap mock adapters for real providers.
- `docs/ARCHITECTURE.md` — what's in the codebase and why.
- `docs/SECURITY.md` — what the demo does and doesn't protect against, and what to do before going live.

## Contact

If the org has questions during the hand-off process, they can reach the volunteer at the contact details in this repository's commit history and repository description.
