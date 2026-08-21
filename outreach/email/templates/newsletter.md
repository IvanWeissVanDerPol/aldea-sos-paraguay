# Newsletter (Boletín) Template — Spanish

> Boletín mensual enviado a la lista de suscripción (newsletter + padrinos inactivos + simpatizantes).

---

## Plantilla — versión HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Boletín {{MES}} {{AÑO}} — Aldeas Infantiles SOS Paraguay</title>
</head>
<body style="margin:0; padding:0; background:#f5f5f5; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff; border-radius:8px;">

          <!-- header -->
          <tr>
            <td style="padding:32px 32px 16px 32px; background:#003B7A; color:#ffffff; border-radius:8px 8px 0 0;">
              <h1 style="margin:0; font-size:22px;">Boletín {{MES}} {{AÑO}}</h1>
              <p style="margin:8px 0 0 0; opacity:0.9; font-size:14px;">Aldeas Infantiles SOS Paraguay</p>
            </td>
          </tr>

          <!-- saludo -->
          <tr>
            <td style="padding:32px;">
              <p>Hola {{NOMBRE}},</p>
              <p>Te contamos lo que pasó este mes en las cinco aldeas y en el programa Ojoykére.</p>

              <!-- # 1 historia destacada -->
              <h2 style="margin:24px 0 8px 0; font-size:18px; color:#003B7A;">{{TITULO_HISTORIA_1}}</h2>
              <p>{{HISTORIA_1_PARRAFO}}</p>
              <p style="text-align:center; margin:16px 0;">
                <a href="{{LINK_HISTORIA_1}}" style="background:#003B7A; color:#ffffff; padding:10px 20px; border-radius:6px; text-decoration:none; display:inline-block;">Leer la historia completa</a>
              </p>

              <!-- # 2 métricas del mes -->
              <h2 style="margin:24px 0 8px 0; font-size:18px; color:#003B7A;">Números del mes</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f9f9f9; padding:16px; border-radius:6px;">
                <tr><td><strong>{{METRICA_1_LABEL}}</strong></td><td style="text-align:right;">{{METRICA_1_VALOR}}</td></tr>
                <tr><td><strong>{{METRICA_2_LABEL}}</strong></td><td style="text-align:right;">{{METRICA_2_VALOR}}</td></tr>
                <tr><td><strong>{{METRICA_3_LABEL}}</strong></td><td style="text-align:right;">{{METRICA_3_VALOR}}</td></tr>
                <tr><td><strong>{{METRICA_4_LABEL}}</strong></td><td style="text-align:right;">{{METRICA_4_VALOR}}</td></tr>
              </table>

              <!-- # 3 próximos eventos -->
              <h2 style="margin:24px 0 8px 0; font-size:18px; color:#003B7A;">Próximos eventos</h2>
              <ul>
                <li>{{EVENTO_1}} — {{FECHA_1}}</li>
                <li>{{EVENTO_2}} — {{FECHA_2}}</li>
                <li>{{EVENTO_3}} — {{FECHA_3}}</li>
              </ul>

              <!-- # 4 aliados destacados -->
              <h2 style="margin:24px 0 8px 0; font-size:18px; color:#003B7A;">Aliado del mes</h2>
              <p>{{HISTORIA_ALIADO}}</p>

              <!-- CTA -->
              <p style="text-align:center; margin:24px 0;">
                <a href="https://aldeasinfantiles.org.py/dona" style="background:#F4A100; color:#ffffff; padding:14px 28px; border-radius:6px; text-decoration:none; display:inline-block; font-weight:bold;">Sumate como Amigo SOS</a>
              </p>

              <p>Con cariño,<br><strong>El equipo de Aldeas Infantiles SOS Paraguay</strong></p>
            </td>
          </tr>

          <!-- footer -->
          <tr>
            <td style="padding:16px 32px; background:#f9f9f9; border-top:1px solid #eee; font-size:12px; color:#666;">
              <p>Aldeas Infantiles SOS Paraguay · Cerro Corá 1155 c/ Brasil, Asunción, Paraguay · (021) 247 4000</p>
              <p><a href="{{UNSUBSCRIBE_URL}}">Cancelar suscripción</a> · <a href="{{PREFERENCES_URL}}">Preferencias</a> · <a href="https://aldeasinfantiles.org.py">Sitio web</a></p>
              <p style="font-size:11px; color:#999;">RUC 80016122 · Miembro de SOS Children's Villages International</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

## Versión texto plano

```
BOLETÍN {{MES}} {{AÑO}} — ALDEAS INFANTILES SOS PARAGUAY

Hola {{NOMBRE}},

Te contamos lo que pasó este mes en las cinco aldeas y en el programa Ojoykére.

== {{TITULO_HISTORIA_1}} ==
{{HISTORIA_1_PARRAFO}}
Leer la historia completa: {{LINK_HISTORIA_1}}

== NÚMEROS DEL MES ==
- {{METRICA_1_LABEL}}: {{METRICA_1_VALOR}}
- {{METRICA_2_LABEL}}: {{METRICA_2_VALOR}}
- {{METRICA_3_LABEL}}: {{METRICA_3_VALOR}}
- {{METRICA_4_LABEL}}: {{METRICA_4_VALOR}}

== PRÓXIMOS EVENTOS ==
- {{EVENTO_1}} — {{FECHA_1}}
- {{EVENTO_2}} — {{FECHA_2}}
- {{EVENTO_3}} — {{FECHA_3}}

== ALIADO DEL MES ==
{{HISTORIA_ALIADO}}

Sumate como Amigo SOS: https://aldeasinfantiles.org.py/dona

Con cariño,
El equipo de Aldeas Infantiles SOS Paraguay

---
Aldeas Infantiles SOS Paraguay
Cerro Corá 1155 c/ Brasil, Asunción, Paraguay
(021) 247 4000
RUC 80016122 · Miembro de SOS Children's Villages International

Cancelar suscripción: {{UNSUBSCRIBE_URL}}
Preferencias: {{PREFERENCES_URL}}
Sitio web: https://aldeasinfantiles.org.py
```

---

## Variables típicas por boletín

| Variable | Ejemplo |
|---|---|
| `{{MES}}` | "Agosto" |
| `{{AÑO}}` | "2026" |
| `{{NOMBRE}}` | "María González" |
| `{{TITULO_HISTORIA_1}}` | "La historia de Ana: de la Aldea a la Universidad" |
| `{{HISTORIA_1_PARRAFO}}` | 2-3 párrafos, anónimos si involucran niños |
| `{{METRICA_1_LABEL}}` | "Niños en las aldeas" |
| `{{METRICA_1_VALOR}}` | "1,023" |
| `{{METRICA_2_LABEL}}` | "Familias en Ojoykére" |
| `{{METRICA_2_VALOR}}` | "187" |
| `{{METRICA_3_LABEL}}` | "Donaciones recibidas" |
| `{{METRICA_3_VALOR}}` | "Gs. 234 millones" |
| `{{METRICA_4_LABEL}}` | "Padrinos activos" |
| `{{METRICA_4_VALOR}}` | "342" |
| `{{EVENTO_1}}` | "Feria de Servicios — Tablada Nueva" |
| `{{FECHA_1}}` | "14 de agosto, 9-13h" |
| `{{HISTORIA_ALIADO}}` | "2-3 oraciones sobre el aliado destacado del mes" |

---

## Reglas

- **Asunto**: "Boletín {{MES}} {{AÑO}} — Aldeas Infantiles SOS Paraguay"
- **De**: `boletin@paragu-ai.com`
- **Frecuencia**: 1x/mes
- **Hora de envío**: martes 10h PY (mejor abrir rate)
- **Idioma**: solo español
- **Incluir**: link de baja, link de preferencias, dirección física
- **NO incluir**: tracking pixels invasivos, links de redes sociales de empleados individuales
- **CTAs**: 1-2 máximo por email (no spammear botones)

---

*Last updated: 2026-08-21*