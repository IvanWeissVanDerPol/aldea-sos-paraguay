# Sender Identity — Resend Config for `mail.paragu-ai.com`

> **Propósito**: configure Resend para enviar all transactional + marketing email for Aldeas Infantiles SOS Paraguay from a Spanish sender identity on el cliente's branded domain.
>
> **Última actualización**: 2026-08-21

---

## Setup de Resend paso a paso

### 1. Agregar el dominio

En Resend → **Domains** → **Add domain**:

| Field | Value |
|---|---|
| **Name** | `mail.paragu-ai.com` |
| **Region** | `sa-east-1` (São Paulo — lowest latency for Paraguay) |
| **Custom Return-Path** | `send` (Resend default; sub for bounce handling) |
| **Tracking Subdomain** | _leave blank_ (opcional; enables `link.paragu-ai.com` for tracked links) |
| **Click tracking** | ✅ enabled |
| **Open tracking** | ❌ disabled (Resend warns abrir tracking is unreliable) |

### 2. Registros DNS para agregar en `paragu-ai.com`

Resend will return a list of records. Add these at your DNS provider (Cloudflare / Route53 / GoDaddy / NIC.py registrar):

| Type | Name | Value | Purpose |
|---|---|---|---|
| **TXT** | `paragu-ai.com` | `v=spf1 include:resend.com ~all` | SPF — authorizes Resend para enviar |
| **TXT** | `resend._domainkey.paragu-ai.com` | (long DKIM key from Resend) | DKIM — message signing |
| **TXT** | `_dmarc.paragu-ai.com` | `v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@paragu-ai.com` | DMARC — reporting + enforcement |

Resend also provides **MX records** if you want to receive at `@paragu-ai.com`. For outbound-only transactional, MX is opcional.

**Verification**: after adding DNS, Resend will auto-verify (generalmente within minutes, a veces up to 48h). It shows a green checkmark when ready.

### 3. Identidad del remitente (el from-line)

| Field | English placeholder shown | **Final Spanish value** |
|---|---|---|
| **From name** | `Your Name` | **`Aldeas Infantiles SOS Paraguay`** |
| **From email** | `youremail@mail.paragu-ai.com` | **`amigos@paragu-ai.com`** |

> Why `amigos@`: mirrors the existing `Amigos SOS` / `Hacete Amigo de VERDAD` program naming — instantly recognizable to existing donors. Alternative options: `donaciones@paragu-ai.com` (más transactional), `hola@paragu-ai.com` (casual), `contacto@paragu-ai.com` (neutral). Stick with `amigos@` for warmth.

**Reply-to**: `sos.py@aldeasinfantiles.org.py` (their existing inbox — they should keep ownership of replies)

### 4. API key para enviar

In Resend → **API Keys** → **Create API key**:

| Setting | Value |
|---|---|
| **Name** | `aldea-sos-paraguay-prod` |
| **Permission** | `Sending access` |
| **Domain** | `mail.paragu-ai.com` |

Store the key (`re_xxxx...`) in your secrets manager. **Never commit it.**

In `tech-spec/email/` (to be created) we'll document the integration pattern using `resend` Node/Python SDK.

---

## Variantes de identidad del remitente

For different email types, use different sender identities on the same domain:

| Use case | From name | From email | Notes |
|---|---|---|---|
| Donation receipts + Amigos SOS updates | `Aldeas Infantiles SOS Paraguay` | `amigos@paragu-ai.com` | Default — most used |
| Newsletter / campañas | `Aldeas Infantiles SOS Paraguay — Boletín` | `boletin@paragu-ai.com` | Spanish-friendly prefix |
| Corporate partnerships | `Aldeas Infantiles SOS Paraguay — Alianzas` | `alianzas@paragu-ai.com` | For Tigo, Itaú, Areté etc. |
| Press / media | `Aldeas Infantiles SOS Paraguay — Prensa` | `prensa@paragu-ai.com` | For journalists |
| Internal ops (no-reply) | (none) | `no-reply@paragu-ai.com` | System notifications only |

**Why solo en español sender identities**: el cliente doesn't read English. Anything they see in their inbox or send to their donors must be Spanish. Keeping English sender names (`"Aldea SOS PY Team"`) would feel foreign and break trust.

---

## Qué es solo en español en el sistema de email

| Component | Spanish requerido? |
|---|---|
| Resend UI (platform itself) | ❌ solo en inglés — podemos't change this |
| Sender name (from-line) | ✅ YES — `Aldeas Infantiles SOS Paraguay` |
| Sender email local-part | ✅ YES — `amigos@`, `boletin@`, etc. (Spanish words or neutral) |
| Email subject lines | ✅ YES — always Spanish |
| Email body | ✅ YES — always Spanish |
| Email templates | ✅ YES — see `outreach/email/` |
| Tracking subdomain names | ⚠️ Optional — neutral is fine |
| DNS records (SPF/DKIM/DMARC) | ❌ English protocol — must stay as is |
| API keys | ❌ Technical — `re_xxxx...` |

---

## Dónde poner estas cosas en el repo

| File | Purpose |
|---|---|
| `tech-spec/email/sender-config.md` | This doc — Resend setup |
| `tech-spec/email/api-integration.md` | SDK integration pattern (Node / Python) |
| `tech-spec/email/dns-records.md` | DNS records agregar |
| `outreach/email/` | Spanish email templates (cold outreach, donation, newsletter) |
| `governance/email-policy.md` | Who can send from what address, language rules, frequency |

---

*Last updated: 2026-08-21*