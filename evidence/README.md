# 01-evidence — Fuente de Verdad

Esta carpeta contiene **evidencia cruda** — descargas verbatim de cada página web de Aldea SOS Paraguay que citamos en nuestro análisis. No editamos estos archivos. Son evidencia.

Si querés **verificar cualquier afirmación** en este repo, abrí el archivo HTML en esta carpeta.

## Archivos

### Oficina Nacional de Paraguay (aldeasinfantiles.org.py)

| Archivo | URL | Tema |
|---|---|---|
| `aios_py_home.html` | https://www.aldeasinfantiles.org.py/ | Homepage — misión, programas, contenido destacado |
| `aios_py_contact.html` | https://www.aldeasinfantiles.org.py/web/contactanos | Formulario de contacto + dirección HQ |
| `aios_py_about.html` | https://www.aldeasinfantiles.org.py/conocenos/quienes-somos | "Quiénes somos" — historia + programas |
| `aios_py_qhacemos.html` | https://www.aldeasinfantiles.org.py/conocenos/que-hacemos | "Qué hacemos" — detalles de programas |
| `aios_py_xq.html` | https://www.aldeasinfantiles.org.py/conocenos/por-que-lo-hacemos | "Por qué lo hacemos" — estadísticas |
| `aios_py_dona2.html` | https://www.aldeasinfantiles.org.py/como-ayudar/dona | "Hacete Amigo SOS" — formulario de donación |
| `aios_py_aliados.html` | https://www.aldeasinfantiles.org.py/como-ayudar/aliados-corporativos | 18+ aliados corporativos |
| `aios_py_campanas.html` | https://www.aldeasinfantiles.org.py/como-ayudar/campaps | | "Convertí tu vuelto en sonrisas" — redondeo en supermercado |
| `aios_py_regalamos.html` | https://www.aldeasinfantiles.org.py/vuelve-regalamos-sonrisas-,-la-campana-solidaria-de-tupi-y-aldeas-infantiles-sos | Campaña TUPI 6ª edición |
| `aios_py_news.html` | https://www.aldeasinfantiles.org.py/noticias | Índice de noticias (160+ entradas) |
| `aios_py_jobs.html` | https://www.aldeasinfantiles.org.py/bolsa-de-trabajo | Vacantes (40 activas) |
| `aios_py_comunicado.html` | https://www.aldeasinfantiles.org.py/comunicado-de-prensa | Comunicado de Paraguay del 23 oct 2025 |
| `aios_py_ong.html` | http://ong.com.py/organizacion/aldeas-infantiles-sos-paraguay/ | Perfil Conévio/PRO ONG — RUC + 5 aldeas |

### Federación Internacional (aldeasinfantiles.org)

| Archivo | URL | Tema |
|---|---|---|
| `aios_intl.html` | https://www.aldeasinfantiles.org/ | Homepage global — referencias al escándalo 2025 |
| `aios_intl_urgent.html` | https://www.aldeasinfantiles.org/anuncio-urgente-sobre-decisiones-de-la-junta-internacional-de-aldeas-infantiles-sos | 24 oct 2025 — rama austriaca suspendida |

## Catálogos y vistas extraídas

- `SOURCES.md` — índice original (mantenido por compatibilidad)
- `EXTRACTED-FACTS.md` — hechos destilados de todos los HTMLs, organizados por tema
- `evidence-levels.md` — cómo leer estos archivos + notas de confiabilidad

---

## ⚠️ Notas sobre confiabilidad

- Todas las páginas de Paraguay scrapeadas el **2026-08-21**. Pueden haber sido editadas desde entonces.
- Los archivos HTML incluyen andamiaje del CMS Duda (referencias del motor de template). Ignorar el ruido.
- `SOURCES.md` y `EXTRACTED-FACTS.md` son derivados; tratar los HTMLs crudos como verdad fundamental.
- Las URLs `/transparencia`, `/dona` (sin `/como-ayudar/`), y `/conocenos/que-hacemos/bolsa-de-trabajo` devuelven **404**. Evidencia: `[official]` vía curl 2026-08-21.

---

*Última actualización: 2026-08-21*