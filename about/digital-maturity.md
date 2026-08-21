# Evaluación de Madurez Digital

## Puntuación: **4/10**

Lo que está funciona pero está incompleto. Lo que falta representa la mayor oportunidad de ingresos.

---

## ✅ Lo que está (funciona)

- Sitio web funcional en aldeasinfantiles.org.py
- Formulario de donación ("Hacete Amigo SOS")
- Página de bolsa de trabajo / voluntariado (40 vacantes activas)
- Presencia en redes sociales: FB, IG, LinkedIn, X, YouTube
- Feed de Twitter embebido
- Formulario de suscripción al newsletter
- Diseño responsive (CMS Duda)

## ⚠️ Lo que está roto

| Issue | Impacto |
|---|---|
| URL `/transparencia` devuelve 404 | Señal de confianza rota — los donantes no pueden verificar el impacto |
| URL `/dona` devuelve 404 (correcto: `/como-ayudar/dona`) | Fricción para el donante |
| `/conocenos/que-hacemos/bolsa-de-trabajo` devuelve 404 | Fricción para aplicar |
| Sin pasarela de pago | Solo formulario — requiere seguimiento humano |
| Sin reporte anual público | Problema de confianza, especialmente post-escándalo |
| Sin composición pública del directorio | Opacidad de gobernanza |
| Sin política publicada de salvaguardia | Riesgo reputacional |

## ❌ Lo que falta por completo

### Recaudación online (la brecha #1)
- Sin donación online vía tarjeta (Stripe/Bancard/etc.)
- Sin Pix, Tigo Money, Personal Pay
- Sin donaciones en crypto
- Sin infraestructura de donación recurrente online
- Sin portal de apadrinamiento (modelo Compassion/Plan)
- Sin integración con apps de redondeo
- Sin registro DAF (bloquea donaciones con ventaja fiscal US)

### Transparencia
- Sin página `/transparencia` funcionando
- Sin PDF de reporte anual
- Sin dashboard de KPIs
- Sin rating de caridad (Charity Navigator o equivalente PY)

### Engagement
- Sin TikTok
- Sin contenido de YouTube (canal existe pero sin contenido visible)
- Sin widget de WhatsApp Business
- Sin chatbot
- Sin venta de entradas para eventos
- Sin portal de inscripción de voluntarios
- Sin tienda online / merchandising
- Sin donaciones conmemorativas "en memoria de"

### Operaciones
- Sin CRM para donantes (los donantes no pueden ver su historial)
- Sin microsite de RSE (los aliados corporativos no pueden descargar reportes de impacto)
- Sin FAQ / centro de ayuda
- Sin multi-idioma (es + en como mínimo)

### Stack técnico (inferido)
- Sitio web: **Duda CMS** (referencia de copyright en footer) — template básico
- Sin SPA, sin headless CMS, sin interacciones JS más allá de formularios
- Sin CRM confirmado, sin email marketing tool, sin procesador de donaciones

---

## Comparación con pares

De nuestro análisis del catálogo de 939 ONGs:

| Capacidad | Aldea PY | Top 30% de pares |
|---|---|---|
| Donación online | ❌ | ✅ (99% tienen) |
| Donación recurrente | ⚠️ solo formulario | ✅ (34% tienen) |
| Reporte anual público | ❌ | ✅ (27% tienen) |
| Sitio multi-idioma | ❌ (solo es) | ✅ (14% tienen) |
| Rating de caridad | ❌ | ✅ (10% tienen) |
| App móvil | ❌ | ⚠️ |
| TikTok | ❌ | ⚠️ (~5-10% emergente) |

**Veredicto**: están 1-2 generaciones atrás en tecnología de recaudación, transparencia y UX del donante.

---

## Por qué importan las brechas

- **Brecha de donación online** = mayor desbloqueo único de ingresos. El 99% de los pares aceptan donaciones online. La fricción de conversión = donaciones perdidas.
- **Brecha de transparencia** = bloquea donantes institucionales que requieren prueba de impacto antes de dar. Probablemente Gs. 100M-300M/año en grants perdidos.
- **Brecha de portal de apadrinamiento** = bloquea el modelo recurrente que Compassion/Plan/ChildFund usan para retener donantes por años.

## Qué enviar (90 días)

Prioridad 1 (arreglar lo roto):
- Arreglar URL `/transparencia` → renderizar reporte anual
- Arreglar URL `/dona` → redirigir a `/como-ayudar/dona`
- Activar Google Ad Grants ($10k/mes gratis)

Prioridad 2 (agregar lo que falta):
- Pasarela de donación (Donorbox + Tigo Money + Pix)
- Micrositio de transparencia (reporte anual + KPIs)
- CRM básico (Salesforce NPSP gratis)

Prioridad 3 (mediano plazo):
- Canal de TikTok
- Portal de apadrinamiento (modelo sponsor-a-house)
- Landing page multi-idioma

---

*Ver [`../revenue/`](../revenue/) para oportunidades de ingresos vinculadas a estas brechas.*
*Ver [`../tech-spec/`](../tech-spec/) para especificaciones técnicas.*