# Tech Spec — Donation Gateway

> Especificaciones para construir la pasarela de donación en línea de Aldea SOS Paraguay.

## Archivos

- **[`comparacion-de-procesadores.md`](./comparacion-de-procesadores.md)** — 6 procesadores comparados (Donorbox, Funraise, Givebutter, Bancard, Stripe, Tigo Money)
- **[`stack-recomendado.md`](./stack-recomendado.md)** — decisión arquitectónica + por qué
- **[`flujo-de-datos.md`](./flujo-de-datos.md)** — diagrama de cómo viaja una donación
- **[`estimacion-de-costos.md`](./estimacion-de-costos.md)** — SaaS fees, transaction fees, costo total

## Resumen ejecutivo

SOS PY actualmente recibe donaciones vía formulario manual (sin pasarela de pago). El objetivo es **shippear una pasarela de donación en menos de 7 días** que acepte:

- Tarjetas de crédito/débito internacionales (Visa, Mastercard, Amex)
- Pix (sistema brasileño de pagos instantáneos)
- Tigo Money (billetera electrónica paraguaya)
- Personal Pay (otra billetera)
- Transferencia bancaria (CBU/ALIAS)

**Decisión inicial recomendada**: **Donorbox** (gratis para <1k donantes) + **Stripe** (padrinos internacionales) + **Pix nativo** (Brasil y Paraguay).

## Plazo

| Hito | Plazo |
|---|---|
| Setup cuenta Donorbox | 1 día |
| Setup cuenta Stripe | 1 día |
| Diseño formulario web | 1 día |
| Integración en `/como-ayudar/dona` | 2 días |
| Testing E2E | 1 día |
| **Total** | **5-7 días** |

## Métricas de éxito

- **Tasa de conversión** (donaciones / visitantes únicos): meta 2-5%
- **Valor promedio** de donación: meta Gs. 100.000-200.000
- **Donaciones recurrentes** (% del total): meta 50%+
- **% que completa el flujo** desde visita hasta recibo: meta 70%+

---

*Última actualización: 2026-08-21*