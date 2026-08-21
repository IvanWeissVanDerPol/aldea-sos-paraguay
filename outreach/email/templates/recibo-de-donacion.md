# Donation Receipt Template — Spanish

> Recibo automático que se envía cada vez que un padrino completa una donación vía pasarela online (Donorbox / Stripe / Tigo Money / Pix).

---

## `donation-receipt.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gracias por tu donación — Aldeas Infantiles SOS Paraguay</title>
</head>
<body style="margin:0; padding:0; background:#f5f5f5; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff; border-radius:8px;">
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 16px 0; font-size:24px; color:#003B7A;">¡Gracias, {{NOMBRE}}!</h1>
              <p>Tu donación de <strong>{{MONTO}} {{MONEDA}}</strong> ya está haciendo una diferencia en la vida de niños, niñas y jóvenes en Paraguay.</p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f9f9f9; padding:16px; border-radius:6px; margin:24px 0;">
                <tr>
                  <td>
                    <p style="margin:0; font-size:14px; color:#666;">Recibo Nº {{RECIBO_ID}}</p>
                    <p style="margin:8px 0 0 0;"><strong>Monto:</strong> {{MONTO}} {{MONEDA}}</p>
                    <p style="margin:8px 0 0 0;"><strong>Fecha:</strong> {{FECHA}}</p>
                    <p style="margin:8px 0 0 0;"><strong>Método de pago:</strong> {{METODO_PAGO}}</p>
                    <p style="margin:8px 0 0 0;"><strong>ID de transacción:</strong> {{TXN_ID}}</p>
                  </td>
                </tr>
              </table>

              <p><strong>¿A dónde va tu donación?</strong></p>
              <ul>
                <li>Atención integral a 1.000+ niños, niñas y jóvenes</li>
                <li>Alimentación, salud, educación y desarrollo</li>
                <li>Fortalecimiento de familias en barrios vulnerables</li>
                <li>Programa de prevención comunitaria "Ojoykére"</li>
              </ul>

              <p style="text-align:center; margin:24px 0;">
                <a href="https://aldeasinfantiles.org.py/transparencia" style="background:#003B7A; color:#ffffff; padding:12px 24px; border-radius:6px; text-decoration:none; display:inline-block;">Ver reporte trimestral</a>
              </p>

              <p>Tu donación llega directamente a las cinco aldeas en Paraguay (Asunción, Luque, San Ignacio, Hohenau y Belén), al programa de prevención "Ojoykére" en barrios vulnerables, y a los servicios de cuidado alternativo para niños que han perdido el cuidado familiar.</p>

              <p>Si querés hacerlo mensual y unirte al programa <strong>Amigos SOS</strong>, podés configurarlo <a href="https://aldeasinfantiles.org.py/dona">aquí</a>. Tu compromiso mensual de Gs. 50.000+ nos ayuda a planificar mejor el cuidado de los niños.</p>

              <p>Con cariño,<br><strong>El equipo de Aldeas Infantiles SOS Paraguay</strong></p>

              <p style="font-size:12px; color:#999;">PD: Si tenés alguna pregunta sobre tu donación, escribinos a <a href="mailto:amigos@paragu-ai.com">amigos@paragu-ai.com</a> y te respondemos personalmente.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px; background:#f9f9f9; border-top:1px solid #eee; font-size:12px; color:#666;">
              <p>Aldeas Infantiles SOS Paraguay · Cerro Corá 1155 c/ Brasil, Asunción, Paraguay · (021) 247 4000 · <a href="mailto:sos.py@aldeasinfantiles.org.py">sos.py@aldeasinfantiles.org.py</a></p>
              <p>RUC 80016122 · Recibo válido para fines fiscales (Paraguay)</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

## `donation-receipt.txt` (plain text fallback)

```
¡Gracias, {{NOMBRE}}!

Tu donación de {{MONTO}} {{MONEDA}} ya está haciendo una diferencia en la vida de niños, niñas y jóvenes en Paraguay.

--- Detalle de la donación ---
Recibo Nº: {{RECIBO_ID}}
Monto: {{MONTO}} {{MONEDA}}
Fecha: {{FECHA}}
Método de pago: {{METODO_PAGO}}
ID de transacción: {{TXN_ID}}

--- ¿A dónde va tu donación? ---
- Atención integral a 1.000+ niños, niñas y jóvenes
- Alimentación, salud, educación y desarrollo
- Fortalecimiento de familias en barrios vulnerables
- Programa de prevención comunitaria "Ojoykére"

Tu donación llega directamente a las cinco aldeas en Paraguay (Asunción, Luque, San Ignacio, Hohenau y Belén), al programa de prevención "Ojoykére" en barrios vulnerables, y a los servicios de cuidado alternativo para niños que han perdido el cuidado familiar.

Ver reporte trimestral: https://aldeasinfantiles.org.py/transparencia

Si querés hacerlo mensual y unirte al programa Amigos SOS, podés configurarlo en https://aldeasinfantiles.org.py/dona. Tu compromiso mensual de Gs. 50.000+ nos ayuda a planificar mejor el cuidado de los niños.

Con cariño,
El equipo de Aldeas Infantiles SOS Paraguay

PD: Si tenés alguna pregunta sobre tu donación, escribinos a amigos@paragu-ai.com y te respondemos personalmente.

---
Aldeas Infantiles SOS Paraguay
Cerro Corá 1155 c/ Brasil, Asunción, Paraguay
(021) 247 4000 · sos.py@aldeasinfantiles.org.py
RUC 80016122 · Recibo válido para fines fiscales (Paraguay)
```

---

## Variables de plantilla

| Variable | Tipo | Ejemplo |
|---|---|---|
| `{{NOMBRE}}` | string | "María González" |
| `{{MONTO}}` | number | "100.000" |
| `{{MONEDA}}` | string | "Gs" o "USD" |
| `{{RECIBO_ID}}` | string | "REC-2026-001234" |
| `{{FECHA}}` | string | "21/08/2026" |
| `{{METODO_PAGO}}` | string | "Tarjeta de crédito Visa •••• 4242" |
| `{{TXN_ID}}` | string | "ch_3Qq..." (Stripe) |

## Reglas

- **Envío inmediato** post-donación (<1 minuto).
- **Idempotente**: si se re-envía el webhook, no duplicar — usar `RECIBO_ID` único.
- **Asunto**: "Gracias por tu donación — Aldeas Infantiles SOS Paraguay"
- **Reply-To**: `sos.py@aldeasinfantiles.org.py` (no `amigos@paragu-ai.com`)
- **Idioma**: solo español.
- **Recibo fiscal** válido en Paraguay (RUC 80016122).
- **Incluir dirección física** (Cerro Corá 1155) — requerido por CAN-SPAM y similares.

---

*Last updated: 2026-08-21*