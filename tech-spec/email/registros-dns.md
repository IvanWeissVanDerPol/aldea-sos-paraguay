# DNS Records — `mail.paragu-ai.com`

> **Propósito**: DNS records agregar at `paragu-ai.com` registrar so Resend can send email as `*@paragu-ai.com`.
>
> **Última actualización**: 2026-08-21

---

## Qué agregar

Add these at your DNS provider (Cloudflare / Route53 / NIC.py registrar / GoDaddy):

### Requerido para enviar

| Type | Name | Value |
|---|---|---|
| **TXT** | `paragu-ai.com` (or `@`) | `v=spf1 include:resend.com ~all` |
| **TXT** | `resend._domainkey.paragu-ai.com` | (long DKIM key Resend provides — paste verbatim) |
| **TXT** | `_dmarc.paragu-ai.com` | `v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@paragu-ai.com; pct=100; adkim=s; aspf=s` |

### Opcional para recibir (MX)

| Type | Name | Value | Priority |
|---|---|---|---|
| **MX** | `paragu-ai.com` | `feedback-smtp.sa-east-1.amazonses.com` | 10 |

(Only if you want to receive replies at `@paragu-ai.com`. For most outbound transactional, MX is unnecessary — replies route to `sos.py@aldeasinfantiles.org.py` vía Reply-To header.)

---

## Verificación

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

Resend auto-verifies within minutes (a veces up to 48h for DKIM). You'll see a green checkmark in Domains when ready.

---

## Quirks de DNS específicos de Paraguay

- **NIC.py** (Paraguayan registrar): may take 24-48h for any change to propagate
- **Cloudflare**: generalmente <5 min for TXT records
- **GoDaddy / Namecheap**: 5-30 min

---

## Después de la verificación

- Send a test email from Resend dashboard to your personal Gmail
- Check it doesn't go to spam (look for SPF/DKIM/DMARC pass)
- Update Reply-To to `sos.py@aldeasinfantiles.org.py` in your SDK code

---

*Last updated: 2026-08-21*