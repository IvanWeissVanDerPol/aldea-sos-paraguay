# Recomendación de Email — Aldea SOS Paraguay

> Evaluación de servicios de email transaccional para Aldea SOS Paraguay.

## Resumen

Para envío de emails transaccionales (recibos, reportes, bienvenida), recomendábamos evaluar estos servicios:

## Comparación

| Servicio | Plan Gratuito | Plan Pagado | Costo por 1k emails |
|---|---|---|---|
| **Resend** | 3,000 emails/mes, 100 emails/día | $20/mes + 50k emails | $0.40 |
| **SendGrid** | 100 emails/día | $20/mes + 50k emails | $0.40 |
| **Mailgun** | Trial 5,000 | $35/mes + 50k | $0.80 |
| **Amazon SES** | 62,000 emails/mes (desde EC2) | $0.10 por 1k | $0.10 |
| **Postmark** | 100 emails/mes | $15/mes + 10k | $1.50 |

## Recomendación

**Para empezar (bajo volumen)**: **SendGrid plan gratuito** (100 emails/día = 3000/mes).

**Para escalar (>3000/mes)**: **Amazon SES** (excelente relación precio/volumen).

**Para mejor DX**: **Resend** (más nueva, mejor UI, mejor DX).

## Implementación

### SendGrid

```python
import sendgrid
from sendgrid.helpers.mail import Mail

sg = sendgrid.SendGridAPIClient(api_key=os.environ['SENDGRID_API_KEY'])

def send_email(to, subject, html):
    message = Mail(
        from_email='amigos@paragu-ai.com',
        to_emails=to,
        subject=subject,
        html_content=html,
    )
    response = sg.send(message)
    return response.status_code
```

### Amazon SES

```python
import boto3
from botocore.exceptions import ClientError

ses = boto3.client('ses', region_name='us-east-1')

def send_email(to, subject, html):
    try:
        response = ses.send_email(
            Source='amigos@paragu-ai.com',
            Destination={'ToAddresses': [to]},
            Message={
                'Subject': {'Data': subject, 'Charset': 'UTF-8'},
                'Body': {'Html': {'Data': html, 'Charset': 'UTF-8'}},
            },
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response['MessageId']
```

## Tipos de emails

| Tipo | Volumen estimado | Necesidades |
|---|---|---|
| Recibos de donación | 1k/mes | Inmediato, alta confiabilidad |
| Bienvenida padrino | 50/mes | Personalizado, HTML |
| Actualización de casa | 200/mes | Imágenes, formato rico |
| Reporte trimestral | 500/trimestre | Personalizado, PDF |
| Verificación email | 200/mes | Inmediato, alta entregabilidad |
| Mensajes del portal | 200/mes | Estándar, notificación |

## Best practices

### Deliverability

- **SPF, DKIM, DMARC** configurados en el dominio
- **IP dedicada** (cuando el volumen lo justifique)
- **Warm-up** gradual del dominio (empezar con pocos emails)
- **Monitoreo** de bounce rate (mantener <5%)
- **Monitoreo** de complaint rate (mantener <0.1%)

### Compliance

- **CAN-SPAM** (US): dirección física obligatoria
- **GDPR**: doble opt-in (subscriptive confirmation)
- **LGPD** (Brazil): similar a GDPR
- **Ley 6534/2020** (Paraguay): protección de datos personales

### Sender identity

- **From**: `amigos@paragu-ai.com` (configurar en el servicio)
- **Reply-To**: `sos.py@aldeasinfantiles.org.py` (representante humano)
- **Nombre**: "Aldeas Infantiles SOS Paraguay"

---

*Última actualización: 2026-08-21*