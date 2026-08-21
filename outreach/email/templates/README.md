# Email Templates — Spanish

> Plantillas HTML + texto plano para los emails transaccionales y de comunicación.
>
> Todas en español. Diseño limpio, accesible, mobile-friendly.
>
> **Last updated**: 2026-08-21

## Templates

| # | Template | Trigger | File |
|---|---|---|---|
| 1 | **Donation receipt** | Donation success webhook | `templates/donation-receipt.html` + `.txt` |
| 2 | **Amigos SOS welcome** | New recurring donor signup | `templates/amigos-welcome.html` + `.txt` |
| 3 | **Donor monthly update** | 1st of month | `templates/donor-monthly-update.html` + `.txt` |
| 4 | **Newsletter (Boletín)** | Monthly manual send | `templates/newsletter.html` + `.txt` |
| 5 | **Corporate partner outreach response** | Reply from a corporate ally | `templates/corporate-response.html` + `.txt` |
| 6 | **Press release** | Major organizational news | `templates/press-release.html` + `.txt` |
| 7 | **Ops alert (internal)** | System event | `templates/ops-alert.html` + `.txt` |
| 8 | **Quarterly impact report** | Every 3 months | `templates/quarterly-impact.html` + `.txt` |
| 9 | **Safeguarding report (quarterly)** | Every 3 months | `templates/safeguarding-report.html` + `.txt` |

## Conventions

| Elemento | Regla |
|---|---|
| **Asunto** | < 50 caracteres, en español, sin emojis |
| **Preheader** | 80-130 caracteres, preview optimizado para móvil |
| **Logo** | SVG inline (no external hosting) |
| **Colors** | Paleta corporativa: `#003B7A` (azul SOS), `#F4A100` (amarillo cálido), `#FFFFFF` (fondo) |
| **Font** | Sistema (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`) |
| **Width** | 600px max para mobile-friendly |
| **Footer** | Dirección física (CAN-SPAM), link de baja, redes sociales, contacto |

## Layout base

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{TEMPLATE_TITLE}}</title>
</head>
<body style="margin:0; padding:0; background:#f5f5f5; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff; border-radius:8px;">
          <tr>
            <td style="padding:32px;">
              <!-- header con logo -->
              <h1 style="margin:0 0 16px 0; font-size:24px; color:#003B7A;">{{TEMPLATE_TITLE}}</h1>
              <!-- cuerpo -->
              <p>Hola {{NOMBRE}},</p>
              <p>{{CONTENIDO}}</p>
              <!-- CTA -->
              <p style="text-align:center; margin:24px 0;">
                <a href="{{CTA_URL}}" style="background:#003B7A; color:#ffffff; padding:12px 24px; border-radius:6px; text-decoration:none; display:inline-block;">{{CTA_TEXT}}</a>
              </p>
              <!-- firma -->
              <p>Con cariño,<br><strong>El equipo de Aldeas Infantiles SOS Paraguay</strong></p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px; background:#f9f9f9; border-top:1px solid #eee; font-size:12px; color:#666;">
              <!-- footer -->
              <p>Aldeas Infantiles SOS Paraguay · Cerro Corá 1155 c/ Brasil, Asunción, Paraguay · (021) 247 4000 · <a href="mailto:sos.py@aldeasinfantiles.org.py">sos.py@aldeasinfantiles.org.py</a></p>
              <p><a href="{{UNSUBSCRIBE_URL}}">Dar de baja</a> · <a href="{{PREFERENCES_URL}}">Preferencias</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

*Last updated: 2026-08-21*