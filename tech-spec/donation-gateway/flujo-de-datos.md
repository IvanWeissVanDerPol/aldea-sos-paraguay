# Flujo de Datos — Donation Gateway

> Cómo viaja una donación desde el donante hasta el sistema de Aldea SOS Paraguay.

## Diagrama de flujo

```
┌─────────────────────────────────────────────────────────────┐
│ 1. DONANTE                                                  │
│    Visita aldeasinfantiles.org.py/como-ayudar/dona          │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. PÁGINA DE DONACIÓN                                       │
│    - Título: "Hacete Amigo de Aldea SOS Paraguay"           │
│    - Descripción del impacto                                │
│    - Selector de método de pago:                            │
│       [Donorbox]  [Stripe]  [Bancard]                      │
│    - Campos: nombre, email, monto, frecuencia              │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. PAGO                                                     │
│    Donante completa pago en el proveedor seleccionado:      │
│      - Donorbox: tarjeta, PayPal, Google Pay, Apple Pay    │
│      - Stripe: tarjeta, Apple Pay, Google Pay              │
│      - Bancard: tarjeta PY, Tigo Money, Personal Pay       │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. WEBHOOK                                                 │
│    El proveedor notifica al backend:                        │
│      - Donación completada                                  │
│      - Suscripción creada                                   │
│      - Pago recurrente procesado                            │
│      - Reembolso o disputa                                 │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. BACKEND (nuestro sistema)                                │
│    - Recibe el webhook                                      │
│    - Registra la donación en el CRM (Salesforce NPSP)       │
│    - Envía recibo al donante (email)                        │
│    - Envía alerta al equipo de desarrollo de fondos (Slack) │
│    - Asocia al programa apadrinado (si aplica)              │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. CRM (Salesforce NPSP o similar)                          │
│    - Registro del padrino                                   │
│    - Historial de donaciones                                │
│    - Preferencias de comunicación                           │
│    - Datos fiscales (para recibos)                          │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│ 7. SISTEMA DE PADRINOS (portal)                             │
│    - Crea perfil del padrino                                 │
│    - Vincula con la casa/programa apadrinado                │
│    - Habilita acceso a reportes y comunicaciones            │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│ 8. REPORTES TRIMESTRALES (automáticos)                     │
│    - Email al padrino con update del niño/casa              │
│    - Dashboard de impacto agregado                          │
│    - Reporte público anonimizado (para donors pasivos)     │
└─────────────────────────────────────────────────────────────┘
```

## Detalles técnicos

### 1. Donante → Página

- **URL**: `aldeasinfantiles.org.py/como-ayudar/dona`
- **Página**: HTML con embed de Donorbox (iframe) + Stripe Checkout (modal) + Bancard VPOS (redirect)
- **Tracking**: Google Analytics, Meta Pixel, Donorbox pixels

### 2. Página → Pago

- **Donorbox**: el donante nunca abandona el sitio (iframe embedded)
- **Stripe**: modal overlay o redirect a Stripe-hosted page
- **Bancard**: redirect a VPOS (sitio del banco)

### 3. Pago → Webhook

**Donorbox**:
- Endpoint: `https://nuestro-dominio.com/api/webhook/donorbox`
- Eventos: `donation.created`, `recurring.created`, `recurring.cancelled`
- HMAC signature verification

**Stripe**:
- Endpoint: `https://nuestro-dominio.com/api/webhook/stripe`
- Eventos: `payment_intent.succeeded`, `invoice.paid`, `customer.subscription.created`
- Stripe-Signature header verification

**Bancard**:
- Endpoint: `https://nuestro-dominio.com/api/webhook/bancard`
- Eventos: configurable con el banco
- Verificación por IP + token

### 4. Webhook → Backend

```python
# Pseudocódigo
@router.post("/api/webhook/donorbox")
async def handle_donorbox_webhook(request: Request):
    payload = await request.body()
    sig = request.headers.get("Donorbox-Signature")
    
    # Verificar firma
    if not verify_donorbox_signature(payload, sig):
        raise HTTP401()
    
    event = json.loads(payload)
    
    if event["type"] == "donation.created":
        # Crear registro en CRM
        await crm.create_donation(
            donor_email=event["donor"]["email"],
            amount=event["amount"],
            currency=event["currency"],
            transaction_id=event["id"],
        )
        
        # Enviar recibo
        await send_receipt(
            donor_email=event["donor"]["email"],
            amount=event["amount"],
            payment_id=event["id"],
        )
        
        # Slack al equipo
        await slack.notify(f"💰 Nueva donación de {event['donor']['name']}: Gs. {event['amount']}")
    
    return {"status": "ok"}
```

### 5. Backend → CRM

- **CRM**: Salesforce NPSP (gratis para ONGs verificadas)
- **Método**: REST API desde backend
- **Datos sincronizados**: padrino, donación, suscripción, preferencias

### 6. CRM → Padrino

- **Email transaccional**: SendGrid (gratis hasta 100 emails/día) o Resend
- **Recibos**: automáticos en cada donación
- **Reportes**: trimestrales con info del niño/casa

### 7. Seguridad

- **HTTPS obligatorio** en todos los endpoints
- **HMAC signature verification** en cada webhook
- **Idempotency keys** para evitar duplicados
- **Rate limiting** en endpoints admin
- **Logs** de cada evento para auditoría

---

## Manejo de errores

| Escenario | Acción |
|---|---|
| Webhook llega pero CRM está caído | Guardar en cola, reintentar cada 5 min (hasta 24h) |
| Donación exitosa pero recibo no enviado | Enviar manualmente + log de incidente |
| Donante reclame chargeback | Reportar a Comité + notificar al banco |
| Error de Stripe processing | Stripe auto-reintenta; nosotros notificamos al donante |
| Doble webhook (mismo evento) | Usar idempotency key para evitar procesar dos veces |

---

## Privacidad y compliance

- **Datos personales**: encriptados en tránsito y reposo
- **Webhooks**: HTTPS only
- **Logs**: scrubbed de datos sensibles
- **Retención**: 7 años (para auditoría financiera)
- **GDPR**: si el padrino está en UE, cumplir GDPR-K

---

*Última actualización: 2026-08-21*