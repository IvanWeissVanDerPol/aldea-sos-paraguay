# Email Policy — Aldeas Infantiles SOS Paraguay

> **Quién puede enviar desde qué dirección, en qué idioma, con qué frecuencia.**
>
> **Last updated**: 2026-08-21

---

## Direcciones de envío (from)

Todas las direcciones usan el dominio `paragu-ai.com` configurado en Resend.

| Dirección | Uso | Quién envía | Plantillas |
|---|---|---|---|
| `amigos@paragu-ai.com` | **Por defecto** — donación, recibos, padrinos | Equipo Aldea SOS PY | `receipt`, `amigos-welcome`, `mensual-update`, `cold-outreach-*` |
| `boletin@paragu-ai.com` | Newsletter mensual | Equipo Aldea SOS PY | `boletin` |
| `alianzas@paragu-ai.com` | Outreach corporativo | Zunilda Baruja o equipo | `corporate-reply` |
| `prensa@paragu-ai.com` | Press / medios | Vocero oficial | `press-release` |
| `no-reply@paragu-ai.com` | Sistema (nunca humano) | Backend | `ops-alert` |

**Reply-To** siempre `sos.py@aldeasinfantiles.org.py` para que las respuestas lleguen al inbox real del equipo.

---

## Idioma

**Regla**: español en todo, sin excepciones.

| Elemento | Idioma |
|---|---|
| Nombre del remitente | Español (ej: "Aldeas Infantiles SOS Paraguay") |
| Local-part del email | Español (amigos, boletin, alianzas, prensa, no-reply) o neutro |
| Asunto | Español siempre |
| Cuerpo | Español siempre |
| Confirmaciones de lectura | Español |
| Links en el cuerpo | URLs en inglés (técnico) o español (humano), pero el anchor text en español |

**Excepción**: cold outreach a tech-for-good partners globales puede ser en inglés si el contacto es claramente US/EU (ej: Donorbox HQ). Ver `cold-outreach-tech-partner.md`.

---

## Frecuencia

| Tipo | Frecuencia máxima |
|---|---|
| Newsletter | 1x/mes |
| Amigos SOS update | 1x/mes (con opción de baja) |
| Confirmación de donación | inmediata (automática) |
| Outreach frío | 1 email + 3 seguimientos máximo (luego dejar ir 6 meses) |
| Alertas operativas internas | solo si es crítico |

---

## Privacidad y cumplimiento

- **Nunca compartir** emails de padrinos con terceros.
- **Nunca** usar padrinos para campañas que no autorizaron explícitamente.
- **GDPR / opt-in**: doble opt-in al newsletter (mandar email de confirmación).
- **CAN-SPAM**: dirección física en cada email comercial (Cerro Corá 1155 c/ Brasil, Asunción).
- **Link de baja** en cada email excepto los transaccionales (recibos, alertas).
- **Datos sensibles** (donaciones, padrinos): encriptar en tránsito y en reposo.

---

## Horario de envío

- **PY time** (UTC-4, no cambia con horario de verano).
- **Mejor abrir rate**: martes a jueves, 9-11h PY.
- **Evitar**: viernes después de 16h, sábados, domingos, lunes temprano, feriados paraguayos.

### Feriados paraguayos 2026
- 1 de enero — Año Nuevo
- 3 de febrero — Día de San Blas (Asunción)
- Variable — Carnaval
- Variable — Semana Santa (jueves + viernes)
- 1 de mayo — Día del Trabajador
- 14-15 de mayo — Independencia patria
- 12 de junio — Día de la Paz del Chaco
- 15 de agosto — Día de la Fundación de Asunción
- 29 de septiembre — Día de la Batalla de Boquerón
- 1 de octubre — Día del Niño Paraguayo
- 8 de diciembre — Día de la Virgen de Caacupé
- 25 de diciembre — Navidad

---

## Estilo

| Qué | Cómo |
|---|---|
| Saludo inicial | "Hola {{NOMBRE}}" (no "Estimado" — demasiado formal para outreach; "Estimado/a" sí para fundaciones) |
| Despedida | "Cordialmente," (formal) o "Un saludo," (informal) |
| Firma | Nombre + rol + email + teléfono |
| Longitud | Máximo 4 párrafos cortos en outreach; newsletters pueden ser más largos |
| Tono | Cercano pero profesional; Paraguay es cálido pero profesional |

---

## Lo que NO hacer

- ❌ Enviar emails en inglés (salvo excepciones documentadas)
- ❌ Usar "Hola!" o signos de exclamación excesivos
- ❌ Adjuntar archivos pesados
- ❌ Pedir demasiado en el primer contacto (solo generar interés)
- ❌ Hacer emails "de venta" agresivos
- ❌ Incluir links rotos o imágenes externas pesadas
- ❌ Ignorar la opción de baja
- ❌ Compartir datos de padrinos entre programas
- ❌ Asumir que el receptor sabe quién sos

---

## Métricas a trackear

- **Open rate** (objetivo: >40% en newsletter)
- **Click rate** (objetivo: >5%)
- **Conversion rate** (donación post-email)
- **Bounce rate** (objetivo: <2%)
- **Unsubscribe rate** (objetivo: <0.5%)

---

## Plantillas en el repo

| Plantilla | Archivo |
|---|---|
| Outreach corporativo | `outreach/email/cold-outreach-corporate.md` |
| Outreach tech-for-good | `outreach/email/cold-outreach-tech-partner.md` |
| Outreach fundaciones | `outreach/email/cold-outreach-foundation.md` |
| Outreach DAFs | `outreach/email/cold-outreach-donor-daf.md` |
| Outreach a Aldea SOS PY | `outreach/email/cold-outreach-sos-py.md` |
| Seguimientos | `outreach/email/followup-template.md` |
| Recibos + welcome + newsletter + ops | `outreach/email/templates/` (a crear) |

---

*Last updated: 2026-08-21*