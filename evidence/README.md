# 01-evidence — Source-of-Truth

This folder holds **raw evidence** — verbatim downloads of every Aldea SOS Paraguay web page we cited in our analysis. We do not edit these files. They are evidence.

If you want to **verify any claim** in this repo, open the HTML file in this folder.

## Files

### Paraguay National Office (aldeasinfantiles.org.py)

| File | URL | Topic |
|---|---|---|
| `aios_py_home.html` | https://www.aldeasinfantiles.org.py/ | Homepage — mission, programs, hero content |
| `aios_py_contact.html` | https://www.aldeasinfantiles.org.py/web/contactanos | Contact form + HQ address |
| `aios_py_about.html` | https://www.aldeasinfantiles.org.py/conocenos/quienes-somos | "Quiénes somos" — history + programs |
| `aios_py_qhacemos.html` | https://www.aldeasinfantiles.org.py/conocenos/que-hacemos | "Qué hacemos" — program details |
| `aios_py_xq.html` | https://www.aldeasinfantiles.org.py/conocenos/por-que-lo-hacemos | "Por qué lo hacemos" — stats |
| `aios_py_dona2.html` | https://www.aldeasinfantiles.org.py/como-ayudar/dona | "Hacete Amigo SOS" — donation form |
| `aios_py_aliados.html` | https://www.aldeasinfantiles.org.py/como-ayudar/aliados-corporativos | 18+ corporate allies |
| `aios_py_campanas.html` | https://www.aldeasinfantiles.org.py/como-ayudar/campanas | "Convertí tu vuelto en sonrisas" — supermarket roundup |
| `aios_py_regalamos.html` | https://www.aldeasinfantiles.org.py/vuelve-regalamos-sonrisas-,-la-campana-solidaria-de-tupi-y-aldeas-infantiles-sos | TUPI 6th edition campaign |
| `aios_py_news.html` | https://www.aldeasinfantiles.org.py/noticias | News index (160+ entries) |
| `aios_py_jobs.html` | https://www.aldeasinfantiles.org.py/bolsa-de-trabajo | Job postings (40 active vacancies) |
| `aios_py_comunicado.html` | https://www.aldeasinfantiles.org.py/comunicado-de-prensa | Oct 23, 2025 distancing press release |
| `aios_py_ong.html` | http://ong.com.py/organizacion/aldeas-infantiles-sos-paraguay/ | Conévio/PRO ONG profile — RUC + 5 aldeas |

### International Federation (aldeasinfantiles.org)

| File | URL | Topic |
|---|---|---|
| `aios_intl.html` | https://www.aldeasinfantiles.org/ | Global landing — references 2025 scandal |
| `aios_intl_urgent.html` | https://www.aldeasinfantiles.org/anuncio-urgente-sobre-decisiones-de-la-junta-internacional-de-aldeas-infantiles-sos | Oct 24, 2025 — Austrian branch suspended |

## Catalogs and extracted views

- `SOURCES.md` — original index (kept for backward compat)
- `EXTRACTED-FACTS.md` — distilled facts from all these HTMLs, organized by topic
- `evidence-levels.md` — how to read these files + reliability notes

---

## ⚠️ Notes on reliability

- All Paraguay pages scraped **2026-08-21**. They may have been edited since.
- The HTML files include Duda CMS scaffolding (template engine references). Ignore the noise.
- The `SOURCES.md` and `EXTRACTED-FACTS.md` are derived; treat the raw HTMLs as ground truth.
- The `/transparencia`, `/dona` (without `/como-ayudar/`), and `/conocenos/que-hacemos/bolsa-de-trabajo` URLs all return **404**. Evidence: `[evidence: official]` via curl 2026-08-21.

---

*Last updated: 2026-08-21*