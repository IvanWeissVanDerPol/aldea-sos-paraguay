# Amigos SOS Welcome Template — Spanish

> Email que se envía cuando alguien se registra como Amigo SOS (donante recurrente).

---

## `amigos-welcome.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>¡Bienvenido/a a Amigos SOS!</title>
</head>
<body style="margin:0; padding:0; background:#f5f5f5; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff; border-radius:8px;">
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 16px 0; font-size:24px; color:#003B7A;">¡Bienvenido/a a la familia SOS, {{NOMBRE}}!</h1>

              <p>Gracias por sumarte al programa <strong>Amigos SOS</strong> con tu aporte mensual de <strong>{{MONTO}} Gs</strong>.</p>

              <p>Ahora sos parte de una comunidad de paraguayos comprometidos con el derecho de 1.000+ niños, niñas y jóvenes a crecer en familia.</p>

              <h2 style="margin:24px 0 12px 0; font-size:18px; color:#003B7A;">Qué hace tu aporte</h2>

              <p>Tu compromiso mensual llega directamente a las cinco aldeas en Paraguay y al programa de prevención comunitaria "Ojoykére" en barrios vulnerables. Cubre:</p>

              <ul>
                <li><strong>Alimentación diaria</strong> para los niños en las aldeas</li>
                <li><strong>Atención médica y psicológica</strong></li>
                <li><strong>Educación</strong> (útiles, uniformes, apoyo escolar)</li>
                <li><strong>Actividades recreativas y culturales</strong></li>
                <li><strong>Fortalecimiento familiar</strong> para familias en barrios vulnerables</li>
              </ul>

              <h2 style="margin:24px 0 12px 0; font-size:18px; color:#003B7A;">Qué vas a recibir</h2>

              <ul>
                <li>📊 <strong>Reporte trimestral de impacto</strong> — qué lográs con tu aporte</li>
                <li>📸 <strong>Historias anónimas</strong> de niños y familias que se benefician</li>
                <li>📅 <strong>Invitaciones</strong> a eventos especiales (cuando aplicable)</li>
                <li>🔔 <strong>Recibos automáticos</strong> cada mes después de tu aporte</li>
              </ul>

              <p style="text-align:center; margin:24px 0;">
                <a href="https://aldeasinfantiles.org.py/cuenta" style="background:#003B7A; color:#ffffff; padding:12px 24px; border-radius:6px; text-decoration:none; display:inline-block;">Mi cuenta Amigos SOS</a>
              </p>

              <h2 style="margin:24px 0 12px 0; font-size:18px; color:#003B7A;">Tres cosas que podés hacer ahora</h2>

              <ol>
                <li><strong>Contanos a un amigo</strong> sobre Amigos SOS — el boca a boca es nuestra mejor publicidad</li>
                <li><strong>Seguinos en redes</strong> para ver el día a día de las aldeas: <a href="https://www.facebook.com/aldeasinfantilessos.paraguay">Facebook</a> · <a href="https://www.instagram.com/aldeasparaguay/">Instagram</a></li>
                <li><strong>Actualizá tu método de pago</strong> o monto en cualquier momento desde tu cuenta</li>
              </ol>

              <p>Si tenés alguna pregunta, respondé este email o escribinos a <a href="mailto:amigos@paragu-ai.com">amigos@paragu-ai.com</a>.</p>

              <p>Con cariño,<br><strong>El equipo de Aldeas Infantiles SOS Paraguay</strong></p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px; background:#f9f9f9; border-top:1px solid #eee; font-size:12px; color:#666;">
              <p>Aldeas Infantiles SOS Paraguay · Cerro Corá 1155 c/ Brasil, Asunción, Paraguay · (021) 247 4000 · <a href="mailto:sos.py@aldeasinfantiles.org.py">sos.py@aldeasinfantiles.org.py</a></p>
              <p>Estás recibiendo este email porque te registraste como Amigo SOS. <a href="{{UNSUBSCRIBE_URL}}">Cancelar mi suscripción</a> · <a href="{{PREFERENCES_URL}}">Preferencias</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

## `amigos-welcome.txt`

```
¡Bienvenido/a a la familia SOS, {{NOMBRE}}!

Gracias por sumarte al programa Amigos SOS con tu aporte mensual de {{MONTO}} Gs.

Ahora sos parte de una comunidad de paraguayos comprometidos con el derecho de 1.000+ niños, niñas y jóvenes a crecer en familia.

QUÉ HACE TU APORTE

Tu compromiso mensual llega directamente a las cinco aldeas en Paraguay y al programa de prevención comunitaria "Ojoykére" en barrios vulnerables. Cubre:
  - Alimentación diaria para los niños en las aldeas
  - Atención médica y psicológica
  - Educación (útiles, uniformes, apoyo escolar)
  - Actividades recreativas y culturales
  - Fortalecimiento familiar para familias en barrios vulnerables

QUÉ VAS A RECIBIR

  - Reporte trimestral de impacto — qué lográs con tu aporte
  - Historias anónimas de niños y familias que se benefician
  - Invitaciones a eventos especiales (cuando aplicable)
  - Recibos automáticos cada mes después de tu aporte

Mi cuenta Amigos SOS: https://aldeasinfantiles.org.py/cuenta

TRES COSAS QUE PODÉS HACER AHORA

  1. Contanos a un amigo sobre Amigos SOS — el boca a boca es nuestra mejor publicidad
  2. Seguinos en redes: https://www.facebook.com/aldeasinfantilessos.paraguay · https://www.instagram.com/aldeasparaguay/
  3. Actualizá tu método de pago o monto en cualquier momento desde tu cuenta

Si tenés alguna pregunta, respondé este email o escribinos a amigos@paragu-ai.com.

Con cariño,
El equipo de Aldeas Infantiles SOS Paraguay

---
Aldeas Infantiles SOS Paraguay
Cerro Corá 1155 c/ Brasil, Asunción, Paraguay
(021) 247 4000 · sos.py@aldeasinfantiles.org.py

Estás recibiendo este email porque te registraste como Amigo SOS.
Cancelar mi suscripción: {{UNSUBSCRIBE_URL}}
Preferencias: {{PREFERENCES_URL}}
```

---

## Variables

| Variable | Tipo | Ejemplo |
|---|---|---|
| `{{NOMBRE}}` | string | "María González" |
| `{{MONTO}}` | number | "100.000" |

## Reglas

- **Asunto**: "¡Bienvenido/a a Amigos SOS!"
- **Envío**: inmediato al registrarse
- **Incluir link** a la cuenta del usuario
- **Incluir opciones de baja** (GDPR + CAN-SPAM)
- **Idioma**: solo español
- **Tono**: cálido, personal, no transaccional

---

*Last updated: 2026-08-21*