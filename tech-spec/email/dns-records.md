# DNS Records — `mail.paragu-ai.com`

> **Purpose**: DNS records to add at `paragu-ai.com` registrar so Resend can send email as `*@paragu-ai.com`.
>
> **Last updated**: 2026-08-21

---

## What to add

Add these at your DNS provider (Cloudflare / Route53 / NIC.py registrar / GoDaddy):

### Required for sending

| Type | Name | Value |
|---|---|---|
| **TXT** | `paragu-ai.com` (or `@`) | `v=spf1 include:resend.com ~all` |
| **TXT** | `resend._domainkey.paragu-ai.com` | (long DKIM key Resend provides — paste verbatim) |
| **TXT** | `_dmarc.paragu-ai.com` | `v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@paragu-ai.com; pct=100; adkim=s; aspf=s` |

### Optional for receiving (MX)

| Type | Name | Value | Priority |
|---|---|---|---|
| **MX** | `paragu-ai.com` | `feedback-smtp.sa-east-1.amazonses.com` | 10 |

(Only if you want to receive replies at `@paragu-ai.com`. For most outbound transactional, MX is unnecessary — replies route to `sos.py@aldeasinfantiles.org.py` via Reply-To header.)

---

## Verification

After DNS propagates:

```bash
# SPF
dig TXT paragu-ai.com +short

# DKIM
dig TXT resend._domainkey.paragu-ai.com +short

# DMARC
dig TXT _dmarc.paragu-ai.com +short

# MX (if used)
dig MX paragu-ai.com +short
```

Resend auto-verifies within minutes (sometimes up to 48h for DKIM). You'll see a green checkmark in Domains when ready.

---

## Paraguay-specific DNS quirks

- **NIC.py** (Paraguayan registrar): may take 24-48h for any change to propagate
- **Cloudflare**: usually <5 min for TXT records
- **GoDaddy / Namecheap**: 5-30 min

---

## After verification

- Send a test email from Resend dashboard to your personal Gmail
- Check it doesn't go to spam (look for SPF/DKIM/DMARC pass)
- Update Reply-To to `sos.py@aldeasinfantiles.org.py` in your SDK code

---

*Last updated: 2026-08-21*