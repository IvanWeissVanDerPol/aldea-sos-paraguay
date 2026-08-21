# Comparación de Procesadores de Pago

> Evaluación de plataformas de pago para la pasarela de donación de Aldea SOS Paraguay.

## Resumen

| Procesador | Tarifa | Pago recurrente | PY disponible | Internacional | Recomendado |
|---|---|---|---|---|---|
| **Donorbox** | 0% en plan Free / 1.95%+$0.20 en plan Standard | ✅ Sí | ❌ Necesita banco PY | ✅ Sí | ✅ **Sí** |
| **Funraise** | 1% transacción + $249/mes en plan Starter | ✅ Sí | ❌ Necesita billetera global | ✅ Sí | ⚠️ Costo alto |
| **Givebutter** | 0% con tips voluntarios | ✅ Sí | ❌ Necesita banco PY | ✅ Sí | ⚠️ Depende de propinas |
| **Every.org** | 0% siempre | ✅ Sí | ❌ Necesita banco PY | ✅ Sí | ⚠️ Limitado |
| **Bancard VPOS** | ~3.5% transacción | ✅ Sí | ✅ Sí (local) | ❌ Limitado | ✅ **Sí para PY** |
| **Stripe** | 2.9% + $0.30 por transacción | ✅ Sí | ❌ Limitado en PY | ✅ Sí | ✅ **Sí para internacional** |
| **Tigo Money** | Variable (~1-3%) | ✅ Sí | ✅ Sí (local) | ❌ No | ⚠️ Solo PY |
| **Personal Pay** | Variable (~1-3%) | ✅ Sí | ✅ Sí (local) | ❌ No | ⚠️ Solo PY |
| **Pix** | 0% para el receptor | ✅ Sí | ⚠️ Limitado a PY | ⚠️ Limitado | ✅ **Sí para PY** |

## Detalles

### Donorbox (RECOMENDADO para MVP)

**Pros**:
- Plan gratuito para <1k donantes
- Soporta donaciones recurrentes
- Excelente UX móvil
- Múltiples métodos de pago (tarjeta, PayPal, Google Pay, Apple Pay)
- Excelente soporte en español
- Webhooks para integrar con CRM

**Contras**:
- No procesa Pix directamente
- No soporta Tigo Money / Personal Pay directamente
- Necesita integración con Stripe para pagos latinoamericanos
- 2.5% estándar + $0.20 en plan Standard (sin plan Free más allá de 1k donantes)

**Precio**: Gratis hasta 1k donantes; US$ 39/mes plan Standard después

**Recomendado para**: MVP, padrinos individuales, angloparlantes

### Funraise

**Pros**:
- Plataforma moderna para ONGs
- Excelente UX
- CRM integrado
- AI para donor stewardship

**Contras**:
- Caro ($249/mes + 1% por transacción)
- Curva de aprendizaje
- No soporta Tigo Money / Personal Pay

**Recomendado para**: escalar (>1k donantes) si crecimiento se valida

### Givebutter

**Pros**:
- Plan gratuito (sin tarifa de plataforma)
- Donaciones recurrentes
- Múltiples métodos de pago

**Contras**:
- Depende de propinas voluntarias (modelo inestable)
- No soporta wallets PY

### Every.org

**Pros**:
- 100% gratis para ONGs
- Recibos fiscales automáticos (para padrinos US)
- Donaciones recurrentes

**Contras**:
- Soporte limitado
- Menos flexible

### Bancard VPOS (RECOMENDADO para PY)

**Pros**:
- Procesador local líder en PY
- Acepta tarjetas paraguayas (Cabales, bonificaciones)
- Acepta Tigo Money, Personal Pay, Wally
- Proceso familiar para donantes PY

**Contras**:
- ~3.5% de comisión
- Requiere cuenta bancaria PY
- Limitado para padrinos internacionales

**Recomendado para**: donantes paraguayos, pagos recurrentes locales

### Stripe (RECOMENDADO para internacional)

**Pros**:
- Líder global
- Excelente API
- Subscriptions robustas
- Stripe Atlas para abrir cuentas en otros países

**Contras**:
- 2.9% + $0.30 por transacción
- Limitado en PY (Stripe Atlas ayuda)
- No soporta Pix/Tigo Money directamente

**Recomendado para**: padrinos en USA, Europa

### Tigo Money

**Pros**:
- Billetera dominante en Paraguay
- Muchos paraguayos la usan
- Procesa instantáneamente

**Contras**:
- Solo PY
- Requiere integración directa con Tigo

### Personal Pay

Similar a Tigo Money, otra billetera dominante.

### Pix

**Pros**:
- 0% para el receptor (comprador paga fee)
- Instantáneo
- Creciendo en PY

**Contras**:
- Asociado a Brasil, aunque BCBP lo habilitó en PY
- Requiere integración con un adquirente compatible

## Recomendación final

**Stack recomendado para MVP**:

1. **Donorbox** (gratis, padrinos globales + tarjetas)
2. **Stripe** (padrinos tech-savvy + internacionales)
3. **Bancard** (donantes paraguayos + Tigo Money / Personal Pay)
4. **Pix** (cuando se habilite completamente en PY)

**Costo total estimado** (primer año):
- Donorbox: $0 (plan Free) o $468/año (Standard)
- Stripe: 2.9% + $0.30 por tx
- Bancard: 3.5% por tx
- **Total fees**: ~3-4% del volumen de donaciones

**Tiempo de setup**: 5-7 días

---

*Última actualización: 2026-08-21*