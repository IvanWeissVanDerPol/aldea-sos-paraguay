# Stack Recomendado — Pasarela de Donación SOS PY

> Decisión técnica sobre qué construir para la pasarela de donación en línea de Aldea SOS Paraguay.

## Decisión

**Stack MVP**: **Donorbox + Stripe + Bancard**

```
+----------+ +-----------+ +----------+
|Donorbox | +|  Stripe   | +|  Bancard  |
+----------+ +-----------+ +----------+
   │            │             │
   │            │             │
   ▼            ▼             ▼
Internacional  Tech-savvy   Paraguay
+Tarjetas    +Tarjetas    +Tarjetas
+Recurrente  +Recurrente  +Tigo Money
+PayPal      +Apple Pay   +Personal Pay
+Google Pay  +Google Pay  +Wally
+Apple Pay
```

## Por qué este stack

### Cobertura de mercado

- **Donorbox**: padrinos globales, USA, Europa, angloparlantes
- **Stripe**: padrinos tech-savvy, suscripciones internacionales
- **Bancard**: padrinos paraguayos, donaciones corporativas locales

Entre los 3, cubrimos **>95%** de los casos de uso.

### Costo total

| Plataforma | Tarifa mensual | Tarifa por tx |
|---|---|---|
| Donorbox | $0 (plan Free) o $39 (Standard) | 1.95% + $0.20 |
| Stripe | $0 | 2.9% + $0.30 |
| Bancard | $0 | ~3.5% |
| **Total** | **$0–$39/mes** | **~3% blended** |

Vs el costo de oportunidad de **no tener pasarela** (donaciones potenciales que no se concretan): mucho mayor.

### Time to ship

- **Donorbox**: 1 día (es solo embed un formulario)
- **Stripe**: 1 día (similar)
- **Bancard**: 3-5 días (requiere cuenta bancaria, proceso de aprobación)

**Total**: 5-7 días al MVP funcional.

### Riesgo

**Diversificación**: si una plataforma cae, las otras siguen funcionando. Esto es crítico post-escándalo.

---

## Cómo interactúan los 3

```
DONANTE ENTRANTE
       │
       ▼
  ┌─────────────────────────────────────────────────────────┐
  │                 /como-ayudar/dona                          │
  │                                                          │
  │   "Doná a Aldea SOS Paraguay"                             │
  │   [Selecciona método de pago]                            │
  │                                                          │
  │   ┌────────────┬────────────┬────────────┐               │
  │   │  Donorbox  │   Stripe   │  Bancard   │               │
  │   │ (default)  │ (opcional) │ (Paraguay) │               │
  │   └────────────┴────────────┴────────────┘               │
  └─────────────────────────────────────────────────────────┘
       │
       ▼
   Webhook al backend
       │
       ├── Recibo automático al donante
       ├── CRM (Salesforce, HubSpot, etc.)
       ├── Sistema de padrinos (portal)
       └── Reportes trimestrales
```

Donante en PY → ve Bancard como opción
Donante en USA → ve Donorbox o Stripe
Donante recurrente → cualquiera de los 3

---

## Implementación paso a paso

### Semana 1: Setup

| Día | Acción |
|---|---|
| 1 | Crear cuenta Donorbox (verificar RUC 80016122) |
| 1 | Crear cuenta Stripe (necesita verificación de ONG) |
| 2 | Crear cuenta Bancard (proceso PY, requiere banco PY) |
| 3-4 | Diseñar formulario unificado en aldeasinfantiles.org.py/como-ayudar/dona |
| 5 | Integrar Donorbox iframe |
| 6 | Integrar Stripe Checkout |
| 7 | Testing E2E |

### Semana 2: Lanzamiento

| Día | Acción |
|---|---|
| 8 | Comunicación a padrinos actuales (email) |
| 9 | Publicar transparencia microsite (link post-donación) |
| 10 | Activar campañas de marketing |
| 11 | Activar Ad Grants |
| 12 | Reportar métricas semanales |
| 13-14 | Iterar basado en feedback |

### Post-lanzamiento

- **Monitoreo diario**: donaciones, rechazos, errores
- **Reporte semanal**: métricas (volumen, ticket promedio, recurrencia)
- **Iteración mensual**: basado en patrones

---

## Detalles técnicos

### Donorbox

- **Tipo**: SaaS
- **Integración**: iframe embed (no código backend)
- **Webhooks**: disponibles para eventos (donación completada, recurrente creada, etc.)
- **Idiomas**: español, inglés, portugués
- **URL**: https://donorbox.org

### Stripe

- **Tipo**: SaaS + API
- **Integración**: Stripe Checkout (más simple) o Elements (más custom)
- **Webhooks**: sí, detallados
- **Subscription API**: sí, robusta
- **URL**: https://stripe.com

### Bancard

- **Tipo**: Procesador local PY
- **Integración**: requiere VPOS (Virtual Point of Sale)
- **Webhooks**: limitados (depende del contrato)
- **Idiomas**: español
- **URL**: https://www.bancard.com.py

---

## Consideraciones especiales

### Compliance

- **Donorbox**: cumple PCI DSS Level 1
- **Stripe**: cumple PCI DSS Level 1
- **Bancard**: cumple estándares locales

### Reportes fiscales

- **Donorbox**: emite recibos automáticos
- **Stripe**: emite recibos + integración con QuickBooks
- **Bancard**: emite facturas (factura legal PY)

### Multi-moneda

- **Donorbox**: USD, EUR, PYG, etc.
- **Stripe**: 135+ monedas
- **Bancard**: solo PYG

### Multi-idioma

- **Donorbox**: español, inglés, portugués
- **Stripe**: configurable
- **Bancard**: español

---

## Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| Bancard tarda en aprobar | Empezar el proceso ya; mientras tanto, Donorbox cubre |
| Stripe no acepta ONG de Paraguay | Usar Stripe Atlas para entidad US; o registrarse como Beneficiary en país aceptado |
| Donante no tiene método compatible | Siempre ofrecer 3 métodos |
| Fraude de tarjeta | Donorbox + Stripe tienen antifraude integrado |
| Webhook falla | Implementar retry logic + monitoreo |

---

## Siguientes pasos

1. **Inmediato**: configurar cuentas en las 3 plataformas
2. **Día 1-7**: implementación + testing
3. **Día 8-14**: lanzamiento + marketing
4. **Mes 2**: optimizar + expansión

---

*Última actualización: 2026-08-21*