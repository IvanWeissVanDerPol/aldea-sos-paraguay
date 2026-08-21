# Email API Integration — Resend

> **Propósito**: how para enviar email from the app/website using Resend's SDK with the `mail.paragu-ai.com` domain.
>
> **Última actualización**: 2026-08-21

---

## Instalar

```bash
# Node
npm install resend

# Python
pip install resend
```

## Configurar el API key

```bash
# .env (do not commit)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=amigos@paragu-ai.com
RESEND_FROM_NAME=Aldeas Infantiles SOS Paraguay
RESEND_REPLY_TO=sos.py@aldeasinfantiles.org.py
```

---

## Node.js — envío básico

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ to, subject, html, text }) {
  const { data, error } = await resend.emails.send({
    from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
    to: Array.isArray(to) ? to : [to],
    replyTo: process.env.RESEND_REPLY_TO,
    subject,
    html,
    text,
  });

  if (error) {
    console.error('Resend error:', error);
    throw error;
  }

  return data; // { id: '...' }
}
```

## Python — envío básico

```python
import os
import resend

resend.api_key = os.environ['RESEND_API_KEY']

def send_email(to, subject, html, text=None):
    params = {
        "from": f"{os.environ['RESEND_FROM_NAME']} <{os.environ['RESEND_FROM_EMAIL']}>",
        "to": to if isinstance(to, list) else [to],
        "reply_to": os.environ['RESEND_REPLY_TO'],
        "subject": subject,
        "html": html,
    }
    if text:
        params["text"] = text
    return resend.Emails.send(params)
```

---

## Tipos de envío a implementar

| Email type | Trigger | Template | Sender |
|---|---|---|---|
| **Donation receipt** | Donation éxito webhook from Donorbox/Stripe | `templates/receipt.html` | `amigos@paragu-ai.com` |
| **Amigos SOS welcome** | New recurring donor signup | `templates/amigos-welcome.html` | `amigos@paragu-ai.com` |
| **Donor mensual update** | 1st of month | `templates/mensual-update.html` | `amigos@paragu-ai.com` |
| **Newsletter** | Manual send | `templates/boletin.html` | `boletin@paragu-ai.com` |
| **Internal ops alert** | System event | `templates/ops-alert.html` | `no-reply@paragu-ai.com` |
| **Corporate outreach response** | Reply from a aliado corporativo | `templates/corporate-reply.html` | `alianzas@paragu-ai.com` |

---

## Reglas de solo español para todas las plantillas

| What | Rule |
|---|---|
| **Subject lines** | Always Spanish. Examples: "¡Gracias por tu donación!", "Tu recibo de donación — Aldeas Infantiles SOS Paraguay" |
| **Body** | Always Spanish (es-PY preferred, es-ES acceptable, never en) |
| **Sender name** | Always Spanish — see `sender-config.md` |
| **Date format** | DD/MM/YYYY (Paraguayan / Latin American convention) |
| **Currency** | Gs. (Guaraníes) primary, USD in parentheses for international audiences |
| **Phone numbers** | +595 21 XXX XXXX or +595 9XX XXX XXX (mobile) |
| **Sign-off** | "Con cariño, [Name]" or "Un abrazo, [Name]" — Paraguay is warm and personal |

---

## Tracking

For now, click tracking is enabled at the domain level. Resend's tracking subdomain (opcional) lets you host tracking links on a subdomain. Recommended: leave blank initially.

## Webhooks

Set up webhooks for:

- `email.delivered` — log to DB
- `email.opened` — opt-in only (no track by default)
- `email.clicked` — log to DB for engagement tracking
- `email.bounced` — mark recipient as invalid
- `email.complained` — immediately unsubscribe (CAN-SPAM / GDPR)

Webhook URL: `https://your-app.com/api/resend/webhook`
Secret: store in env, verify signature with `resend.webhooks.verify()`

---

## Manejo de errores

| Resend error code | What it means | Action |
|---|---|---|
| `rejected` | Email blocked by Resend policy | Log + alert |
| `queued` | In sending queue (éxito path) | Log only |
| `validation_error` | Bad payload (missing field etc.) | Fix bug, retry |
| `unauthorized` | API key invalid | Check env, rotate key |
| `rate_limit_exceeded` | Too many sends | Backoff + retry with jitter |

---

## Dónde poner esto en el repo

- `tech-spec/email/integracion-api.md` (este archivo)
- `outreach/email/` — Spanish templates (HTML + plain text)
- `governance/politica-de-email.md` — who/what/when rules

---

*Last updated: 2026-08-21*