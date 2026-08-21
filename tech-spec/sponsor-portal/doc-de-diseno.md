# Documento de Diseño — Sponsor Portal

## Visión general

Portal que conecta a padrinos con casas/programas de Aldea SOS Paraguay.

## Usuarios

### Padrino (usuario primario)

- **Objetivo**: mantener relación significativa con la casa/programa apadrinado
- **Acciones típicas**: revisar actualizaciones, enviar mensajes, administrar suscripción, recibir reportes trimestrales
- **Cadencia típica**: revisita 1-2 veces por mes
- **Necesita**: dashboard simple, fotos de la casa, reportes trimestrales, contacto con el equipo

### Personal de Aldea SOS PY (admin)

- **Objetivo**: gestionar padrinos, casas, programas, actualizaciones
- **Acciones típicas**: redactar actualizaciones, subir fotos, responder consultas, generar reportes
- **Cadencia**: diaria
- **Necesita**: panel admin, flujo de aprobación, gestión de contenido

### Comité Nacional de Salvaguardia (supervisor)

- **Objetivo**: auditoría, aprobación de publicaciones, investigación de incidentes
- **Acciones**: revisar publicaciones antes de release, aprobar padrinos nuevos
- **Cadencia**: semanal
- **Necesita**: panel de auditoría, registro de aprobaciones

## Pantallas principales

### Padrino

| Pantalla | URL | Contenido |
|---|---|---|
| Login | `/portal/login` | Email + password / SSO |
| Dashboard | `/portal` | Resumen: próximas actualizaciones, suscripción, reporte más reciente |
| Mi casa apadrinada | `/portal/casa` | Info general + foto grupal + reporte trimestral |
| Actualizaciones | `/portal/updates` | Lista cronológica de newsletters |
| Mi suscripción | `/portal/subscription` | Monto, fecha, método de pago, cancelar |
| Reportes | `/portal/reports` | Reportes trimestrales descargables |
| Mensajes | `/portal/messages` | Comunicación con el equipo |
| Mi perfil | `/portal/profile` | Datos personales, preferencias de comunicación |

### Admin

| Pantalla | URL | Contenido |
|---|---|---|
| Dashboard | `/admin` | Métricas (padrinos activos, revenue, alertas) |
| Padrinos | `/admin/padrinos` | Lista, búsqueda, edición |
| Casas | `/admin/casas` | Lista de casas, asignación de padrinos |
| Actualizaciones | `/admin/updates` | Editor con preview, scheduling |
| Reportes | `/admin/reports` | Editor con upload de PDF |
| Donaciones | `/admin/donations` | Reconciliación, reembolsos |
| Incidentes | `/admin/incidents` | Log de eventos de salvaguarda, alertas |
| Auditoría | `/admin/audit` | Log de acciones por usuario |

### Comité

| Pantalla | URL | Contenido |
|---|---|---|
| Publicaciones pendientes | `/comite/pending` | Cola de aprobación |
| Reportes trimestrales | `/comite/reports` | Versión pública anonimizable |
| Incidentes | `/comite/incidents` | Cola de investigación |

## User flows

### Padrino nuevo

1. **Visita** aldeasinfantiles.org.py/como-ayudar
2. **Selecciona** "Apadrina una Aldea"
3. **Elige** monto (Gs. 50k, 100k, 200k, otro) y frecuencia (mensual, trimestral, anual)
4. **Completa** pago vía Donorbox / Stripe / Bancard
5. **Recibe** email de bienvenida con credenciales del portal
6. **Inicia sesión** y ve su dashboard
7. **Recibe** primera actualización (cuando el equipo la publique)

### Personal publica actualización

1. **Inicia sesión** en admin
2. **Click "Nueva actualización"**
3. **Selecciona** casa o programa
4. **Redacta** contenido (markdown, fotos, video)
5. **Adjunta** fotos (debe pasar por consent-form firmado)
6. **Envía a revisión** (Comité)
7. **Comité aprueba** o rechaza
8. **Si aprueba**: programado para enviar
9. **Sistema envía** email a padrinos a las 9:00h PY

### Padrino consulta

1. **Inicia sesión** en portal
2. **Click "Mensajes"**
3. **Escribe** mensaje al equipo
4. **Equipo recibe** email + dashboard
5. **Equipo responde** dentro de 48h hábiles
6. **Padrino recibe** email de respuesta

### Cancelación de suscripción

1. **Padrino** click "Cancelar suscripción"
2. **Confirmación** requerida (modal)
3. **Última donación** procesada ese mes
4. **Reporte final** se envía automáticamente
5. **Padrino** puede reactivar en cualquier momento
6. **Datos** retenidos por 7 años (auditoría)

## Requisitos no funcionales

### Seguridad

- **HTTPS obligatorio** en todo
- **Auth**: email + password + 2FA por SMS o app
- **Encriptación**: AES-256 en reposo, TLS en tránsito
- **Auditoría**: log de toda acción de admin
- **Compliance**: PCI DSS (si almacenamos datos de tarjeta), GDPR-K si padrino en UE

### Performance

- **Tiempo de carga**: < 2 segundos
- **Disponibilidad**: 99.5% (4h downtime/mes)
- **Backup**: diario, retención 30 días

### Internacionalización

- **Idiomas**: español (default), inglés
- **Multi-moneda**: Gs. (default), USD, EUR
- **Zona horaria**: PYT (UTC-4) para padrinos locales

### Accesibilidad

- **WCAG 2.1 AA** mínimo
- **Móvil responsive**: 95%+ de padrinos acceden desde móvil
- **Lectores de pantalla**: compatible

---

*Última actualización: 2026-08-21*