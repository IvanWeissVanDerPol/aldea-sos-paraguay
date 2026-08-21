# Estimación de Costos — Pasarela de Donación

## Costos de plataforma (SaaS fees)

| Plataforma | Costo mensual | Costo por transacción |
|---|---|---|
| Donorbox (Free) | $0 | 0% |
| Donorbox (Standard) | $39 | 1.95% + $0.20 |
| Stripe | $0 | 2.9% + $0.30 |
| Bancard | $0 | ~3.5% |
| SendGrid (email) | $0 (hasta 100/día) | $0 |
| Salesforce NPSP (CRM) | $0 | $0 |

**Costo fijo mensual**: $0–$39/mes

## Costos de transacción (variables)

Para una donación típica de **Gs. 100.000** (~$13.70 USD):

| Plataforma | Fee | Neto recibido |
|---|---|---|
| Donorbox Standard | $0.27 + $0.20 = $0.47 (~3.4%) | $13.23 |
| Stripe | $0.40 + $0.30 = $0.70 (~5.1%) | $13.00 |
| Bancard | ~$0.48 (~3.5%) | $13.22 |

**Blended rate**: ~3-4% del volumen total

## Proyección de costos para el primer año

**Supuestos**:
- Mes 1: 50 donaciones × $13 = $650
- Mes 6: 200 donaciones × $13 = $2,600
- Mes 12: 500 donaciones × $13 = $6,500
- **Total año 1**: ~$40,000 en donaciones

**Fees estimados**:
- **Donorbox Standard**: $39/mes × 12 = $468
- **Transacciones fees**: $40,000 × 3.5% = $1,400
- **Total fees año 1**: ~$1,868 (~4.7% del volumen)

## Costos de implementación

### Recursos humanos (interno)

| Actividad | Horas | Quién |
|---|---|---|
| Setup cuentas (Donorbox, Stripe, Bancard) | 4-8 h | Backend |
| Setup email service (SendGrid) | 2 h | Backend |
| Diseño página de donación | 4-8 h | Frontend |
| Integración webhooks | 8-16 h | Backend |
| Testing E2E | 4-8 h | QA |
| Launch + monitoring | 8-16 h | DevOps |
| **Total** | **30-56 h** | **~1 semana trabajo** |

**Costo interno**: $0 (ya en planilla)

### Recursos externos (si aplica)

| Necesidad | Costo estimado |
|---|---|
| Consultor Stripe (si se atascamos) | $200-500 |
| Verificación ONG Bancard | $0 (es para ONGs) |
| Diseño landing page (Figma) | $0 (in-house) |
| **Total externo** | **$0–$500** |

**Costo total de implementación**: $0–$500 (si todo sale bien)

## Costos operacionales recurrentes

| Concepto | Mensual | Anual |
|---|---|---|
| Donorbox Standard | $39 | $468 |
| SendGrid (upgrade pro) | $0-20 | $0-240 |
| Salesforce NPSP (escala) | $0 (usuario actual) hasta $25 (crecimiento) | $0-300 |
| **Total** | **$39-79** | **$468-1008** |

## Ingresos esperados vs costos

**Supuesto conservador**: 500 padrinos activos cada uno donando Gs. 100.000/mes (~$13.70)

- **Ingreso mensual**: 500 × $13.70 = $6,850
- **Fee donation gateway**: $6,850 × 3.5% = $240
- **Costo fijo**: $39
- **Margen**: $6,850 - $240 - $39 = **$6,571/mes** (96% neto)

**Comparación con no tener pasarela**:
- Si solo el 1% de los visitantes convierten a donación → pocas donaciones
- Sin pasarela, ~70% de visitantes abandonan en el formulario
- **Con pasarela, se capturan financiaciones antes perdidas**

## Conclusión

**La pasarela de donación es una inversión de bajo costo y alto retorno**:

- **Setup**: $0-500
- **Operación**: $39-79/mes
- **Fees**: ~3-4% del volumen
- **Beneficio**: habilita ~95% de las donaciones que antes se perdían

**Recomendación**: implementar ASAP (5-7 días al MVP).

---

*Última actualización: 2026-08-21*