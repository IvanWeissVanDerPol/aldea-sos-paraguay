# Wireframes — Sponsor Portal

> Bosquejos de las pantallas principales del portal de apadrinamiento.

## 1. Login (`/portal/login`)

```
+------------------------------------------+
|                                          |
|             Aldeas Infantiles             |
|             SOS Paraguay                  |
|                                          |
|         [ Portal de Padrinos ]            |
|                                          |
|     ┌──────────────────────────────┐     |
|     │ Email                         │     |
|     └──────────────────────────────┘     |
|     ┌──────────────────────────────┐     |
|     │ Contraseña                    │     |
|     └──────────────────────────────┘     |
|                                          |
|     [ Recordarme ]  [¿Olvidaste?]         |
|                                          |
|              [ Iniciar ]                 |
|                                          |
|     ¿Nuevo aquí? [Crear cuenta]           |
|                                          |
+------------------------------------------+
```

## 2. Dashboard Padrino (`/portal`)

```
+----------------------------------------------------------+
| HEADER: Aldea SOS Paraguay | [Mi cuenta] [Salir]        |
+----------------------------------------------------------+
|                                                          |
| [Foto grupal de la casa]                  Hola, {Nombre}  |
| Aldea Asunción - Casa 2                  Padrino desde 2024 |
|                                                          |
| Tab navigation:                                          |
| [Dashboard] [Mi casa] [Updates] [Suscripción] [Reportes] [Mensajes] |
|                                                          |
| ┌──────────────────────────┐ ┌────────────────────────┐ |
| │ SUSCRIPCIÓN              │ │ PRÓXIMA ACTUALIZACIÓN  │ |
| │                          │ │                        │ |
| │ Gs. 100.000 / mes        │ │ 15 de septiembre       │ |
| │ Activa desde 2024-03-15  │ │ [Ver preview]          │ |
| │ [Modificar] [Cancelar]  │ │                        │ |
| └──────────────────────────┘ └────────────────────────┘ |
|                                                          |
| ┌──────────────────────────┐ ┌────────────────────────┐ |
| │ ÚLTIMO REPORTE            │ │ MENSAJES               │ |
| │                          │ │                        │ |
| │ Q2 2026 (abril-junio)    │ │ Sin mensajes nuevos     │ |
| │ [Descargar PDF]          │ │ [Ver todos]             │ |
| └──────────────────────────┘ └────────────────────────┘ |
|                                                          |
+----------------------------------------------------------+
```

## 3. Mi Casa Apadrinada (`/portal/casa`)

```
+----------------------------------------------------------+
| HEADER: Aldea SOS Paraguay | [Mi cuenta] [Salir]        |
+----------------------------------------------------------+
|                                                          |
| [Atras al dashboard]                                      |
|                                                          |
| # Casa 2 - Aldea Asunción                                |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ [Foto grupal de actividades, niños de espaldas]    │  |
| │                                                    │  |
| │ "El día en la Casa 2 es un día lleno de..."         │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
| ## Sobre la Casa                                          |
| - Capacidad: 10 niños/as                                 |
| - Cuidadora principal: María (madre SOS)               |
| - Inaugurada: 2008                                      |
|                                                          |
| ## Necesidades actuales                                   |
| - Útiles escolares (septiembre)                        |
| - Ropa de cama (cualquier donación bien)             |
| - Material deportivo (a confirmar)                     |
|                                                          |
| ¿Quieres hacer una donación especial? [Donar ahora]       |
|                                                          |
| ## Actualizaciones recientes                               |
| - 15 ago 2026: Ferias de Servicios en Tablada Nueva      |
| - 14 jul 2026: Graduación de 3 adolescentes al colegio  |
| - 10 jun 2026: Programa de verano - taller de arte      |
| [Ver todas las actualizaciones]                           |
|                                                          |
| [Enviar mensaje al equipo]                              |
|                                                          |
+----------------------------------------------------------+
```

## 4. Mi Suscripción (`/portal/subscription`)

```
+----------------------------------------------------------+
| HEADER: Aldea SOS Paraguay | [Mi cuenta] [Salir]        |
+----------------------------------------------------------+
|                                                          |
| # Mi Suscripción                                        |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ Resumen                                              │  |
| │                                                    │  |
| │ Plan: Padrino Mensual                              │  |
| │ Casa apadrinada: Casa 2 - Aldea Asunción          │  |
| │ Monto: Gs. 100.000 / mes (~$13.70 USD)          │  |
| │ Método de pago: Tarjeta Visa •••• 4242          │  |
| │ Próxima facturación: 1 de septiembre 2026        │  |
| │ Total donado hasta hoy: Gs. 1.500.000            │  |
| │                                                      │  |
| │ [Modificar monto] [Cambiar tarjeta] [Pausar]      │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
| Historial de donaciones (últimos 12 meses)              |
| ┌─────────┬──────────┬─────────┬──────────┐             |
| │ Fecha   │ Monto    │ Estado  │ Recibo   │             |
| ├─────────┼──────────┼─────────┼──────────┤             |
| │ 01/08   │ 100.000  │ ✅ OK   │ [PDF]    │             |
| │ 01/07   │ 100.000  │ ✅ OK   │ [PDF]    │             |
| │ 01/06   │ 100.000  │ ✅ OK   │ [PDF]    │             |
| │ ...                                                    |
| └─────────┴──────────┴─────────┴──────────┘             |
|                                                          |
| ## Cancelar suscripción                                   |
| ¿Quieres pausar o cancelar tu suscripción?               |
| [Pausar 3 meses] [Cancelar definitivamente]               |
|                                                          |
| Si cancelas, enviaremos un reporte final del impacto     |
| de tu donación.                                          |
|                                                          |
+----------------------------------------------------------+
```

## 5. Mensajes (`/portal/messages`)

```
+----------------------------------------------------------+
| HEADER: Aldea SOS Paraguay | [Mi cuenta] [Salir]        |
+----------------------------------------------------------+
|                                                          |
| # Mensajes                                               |
|                                                          |
| [+ Nuevo mensaje]                                       |
|                                                          |
| Conversación activa:                                     |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ [Foto] María (cuidadora Casa 2) - 25 ago 2026         │  |
| │ Te envío la foto que tomaste hoy en la Aldea.       │  |
| │ Adela está muy feliz con tu carta.                     │  |
| │ ¡Gracias!                                              │  |
| │ 14:32                                                  │  |
| │                                       [Ver foto]       │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ [Tú] - 24 ago 2026                                    │  |
| │ Querida María, gracias por la foto. Adela es un sol.   │  |
| │ ¿Necesitan algo especial para el Día del Niño?       │  |
| │ 18:00                                                  │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ [Tú] - 24 ago 2026                                    │  |
| │ Quería contarles que aumenté mi donación a 200.000    │  |
| │ a partir de septiembre. ¡Espero que les sirva!    │  |
| │ 18:05                                                  │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ Escribir nuevo mensaje...                              │  |
| │                                                      │  |
| │ [Enviar]                                              │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
+----------------------------------------------------------+
```

## 6. Admin - Crear Actualización (`/admin/updates/new`)

```
+----------------------------------------------------------+
| HEADER: [Admin] Aldea SOS Paraguay | [Panel] [Salir]   |
+----------------------------------------------------------+
|                                                          |
| # Nueva Actualización                                    |
|                                                          |
| Casa / Programa: [Casa 2 - Aldea Asunción ▼]            |
|                                                          |
| Título: ____________________________________________ |
|                                                          |
| Contenido (Markdown):                                   |
| ┌────────────────────────────────────────────────────┐  |
| │ # Hola padrinos                                      │  |
| │ Esta semana la Casa 2 tuvo una actividad especial... │  |
| │                                                      │  |
| │ [B] [I] [link] [imagen]                               │  |
| ├────────────────────────────────────────────────────┤  |
| │                                                      │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
| Multimedia adjunta:                                      |
| [Subir foto] [Subir video]                               |
| - foto-1.jpg (consent-form signed: ✓)                  |
| - foto-2.jpg (consent-form signed: ✓)                  |
|                                                          |
| Programar para: [Hoy ▼] [Hora: 09:00]                  |
|                                                          |
| [Guardar borrador] [Enviar a revisión]                  |
|                                                          |
| ⚠️ Recordá: las fotos con rostros requieren consent-form |
|    firmado antes de publicar. Ver: policy/               |
|                                                          |
+----------------------------------------------------------+
```

## 7. Comité - Cola de Aprobación (`/comite/pending`)

```
+----------------------------------------------------------+
| HEADER: [Comité] Aldea SOS Paraguay | [Salir]          |
+----------------------------------------------------------+
|                                                          |
| # Cola de Aprobación                                    |
|                                                          |
| 3 actualizaciones pendientes, 0 con observaciones          |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ 📝 "Casa 2 - Ferias de Servicios"                    │  |
| │    Por: Ana Pérez (Casa 2) | 26 ago 2026 09:15     │  |
| │    Casa: Casa 2 - Aldea Asunción                     │  |
| │                                                      │  |
| │    Vista previa: [Expandir]                          │  |
| │    Fotos: 3 (todas con consent-form ✓)              │  |
| │                                                      │  |
| │    [Aprobar] [Aprobar + publicar] [Rechazar] [Ver foto]│  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ 📝 "Aldea Hohenau - Programa de verano"              │  |
| │    Por: Carlos (Hohenau) | 25 ago 2026 14:30       │  |
| │    Programa: Becas escolares                         │  |
| │                                                      │  |
| │    [Aprobar] [Rechazar]                              │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
+----------------------------------------------------------+
```

## 8. Admin - Dashboard (`/admin`)

```
+----------------------------------------------------------+
| HEADER: [Admin] Aldea SOS Paraguay | [Salir]            |
+----------------------------------------------------------+
|                                                          |
| # Panel de Administración                                |
|                                                          |
| ┌──────────────────────────┐ ┌────────────────────────┐ |
| │ PADRINOS ACTIVOS         │ │ REVENUE ESTE MES      │ |
| │                          │ │                        │ |
| │        247               │ │   Gs. 24.700.000        │ |
| │  (↑ 12% vs mes pasado)   │ │  (↑ 8% vs mes pasado)  │ |
| └──────────────────────────┘ └────────────────────────┘ |
|                                                          |
| ┌──────────────────────────┐ ┌────────────────────────┐ |
| │ ALERTAS DE SALVAGUARDIA   │ │ ACTUALIZACIONES        │ |
| │                          │ │                        │ |
| │        0 pendientes       │ │   3 pendientes        │ |
| │                          │ │   1 borrador           │ |
| └──────────────────────────┘ └────────────────────────┘ |
|                                                          |
| Tab navigation: [Padrinos] [Donaciones] [Casas] [Updates] [Reportes] [Incidentes] |
|                                                          |
| Actividad reciente:                                     |
| - 26 ago 09:15 - Ana creó borrador "Casa 2 - Ferias"   |
| - 26 ago 08:30 - Nueva donación MR. JL: Gs. 100.000    |
| - 25 ago 16:45 - Carlos publicó "Hohenau - Verano"        |
| - 25 ago 14:00 - Comité aprobó 2 actualizaciones          |
|                                                          |
+----------------------------------------------------------+
```

## 9. Padrino - Mi Cuenta (`/portal/profile`)

```
+----------------------------------------------------------+
| HEADER: Aldea SOS Paraguay | [Mi cuenta] [Salir]        |
+----------------------------------------------------------+
|                                                          |
| # Mi Cuenta                                              |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ Información Personal                                  │  |
| │                                                      │  |
| │ Nombre: María González                                │  |
| │ Email: maria.gonzalez@example.com                   │  |
| │ Teléfono: +595 9XX XXX XXX                          │  |
| │ País: Paraguay                                       │  |
| │ Idioma: Español                                      │  |
| │ [Editar]                                              │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ Preferencias de Comunicación                         │  |
| │                                                      │  |
| │ ☑ Quiero recibir actualizaciones por email            │  |
| │ ☐ Quiero recibir SMS                                 │  |
| │ ☑ Quiero recibir reportes trimestrales                │  |
| │ ☐ Acepto invitaciones a eventos                       │  |
| │                                                      │  |
| │ [Guardar]                                             │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ Seguridad                                            │  |
| │                                                      │  |
| │ Contraseña: [••••••••] [Cambiar]                   │  |
| │ 2FA: Activado vía SMS al +595 9XX                    │  |
| │ Sesiones activas: 2 (cerrar otras)                   │  |
| │ Último acceso: hoy 09:15                              │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
| ┌────────────────────────────────────────────────────┐  |
| │ Zona peligrosa                                        │  |
| │                                                      │  |
| │ [Cancelar mi suscripción]                            │  |
| │ [Eliminar mi cuenta (derecho al olvido)]             │  |
| └────────────────────────────────────────────────────┘  |
|                                                          |
+----------------------------------------------------------+
```

## Notas técnicas

- **Mobile-first**: >95% de padrinos acceden desde móvil
- **Responsive**: todos los wireframes funcionan en 360px y 1024px+
- **Accesibilidad**: WCAG 2.1 AA
- **Performance**: <2s de tiempo de carga
- **Privacidad**: zero info identificable del niño en ningún wireframe

---

*Última actualización: 2026-08-21*