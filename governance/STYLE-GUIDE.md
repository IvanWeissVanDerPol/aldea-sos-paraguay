# STYLE GUIDE — Convenciones del Repositorio

> Mantener estas convenciones consistentes en todos los docs de este repo. Actualizar este archivo cuando cambien las convenciones.

---

## Idiomas

- **Primario**: Español (es). El cliente es paraguayo. La mayoría de las audiencias habla español.
- **Secundario**: Inglés (en). Para compartir con donantes internacionales o aliados globales.
- **Terciario**: Guaraní (gn). Para nombres y términos culturalmente específicos (ej: "Ojoykére"). No traducir estos.

Cuando tengas dudas, escribí en **español** por defecto. Traducí a inglés solo cuando sirvas a una audiencia explícitamente angloparlante.

## Convenciones de nombres

- **Carpetas**: lowercase, separadas por guión (`05-revenue/`, `donation-gateway/`)
- **Archivos**: `kebab-case.md` (`executive-summary.md`, `top-15-recommended.md`)
- **Índices de subcarpeta**: `README.md` (siempre)
- **Prefijos numéricos en carpetas top-level**: 2 dígitos + guión + nombre (`00-start-here/`)

## Moneda

- **Default**: Guaraníes (Gs. o ₲). Siempre con marcador de moneda.
- **USD**: Cuando cites para contexto internacional, incluí USD junto con Gs. con la tasa de conversión al momento de escribir.
- **Convención FX**: USD 1 ≈ Gs. 7,300 (2026). Poné la tasa + fecha en la cita si no es obvio.
- **Ejemplos**:
  - ✅ "Gs. 1.391.035.000 (USD ~190k, Comilona 2026)"
  - ❌ "$190k" (cuando Gs. es la fuente de verdad)

## Números

- **Localización**: separador de miles = punto (`1.000`), decimal = coma (`1,5`).
- **Montos grandes**: escribir completo (`Gs. 50.000`) para transparencia.
- **Montos redondos**: solo para estimaciones aproximadas (`USD ~190k`).

## Fechas

- **Formato**: ISO 8601 (`2026-08-21`).
- **Fecha + hora**: `2026-08-21 03:43 PYT`. Estamos en PYT (UTC-4 todo el año).

## Citaciones

Al citásar una fuente:
- Inline: `[fuente: aldeasinfantiles.org.py/home]`
- URL: link markdown completo: `[Cobertura Teletón A24](https://a24.com.py/teleton-logra-recaudacion-historica-de-g-1-391-millones-en-la-comilona-2026/)`

## Niveles de evidencia

Usá estas etiquetas en `[evidencia: …]` cuando importan los datos:

- `[evidencia: official]` — verificado en sitios oficiales de SOS PY o SOS Intl
- `[evidencia: tercero-party]` — verificado vía Wikipedia, noticias, Conévio
- `[evidencia: ddgs]` — solo de un resultado de búsqueda; tratar como tentativo
- `[evidencia: estimate]` — derivado por nosotros, no de una fuente
- `[evidencia: unknown]` — brecha explícita; necesita investigación primaria

Ejemplos:
- ✅ `[evidencia: official]`
- ✅ `[evidencia: ddgs — necesita verificación]`

## Marcado del escándalo

Al mencionar el escándalo austriaco 2025:
- Usá la frase **"escándalo Gmeiner 2025"** o **"crisis internacional de octubre 2025"** — no solo "escándalo"
- Siempre especificá que **Paraguay no estuvo implicado** y que **la rama austriaca** fue suspendida
- Siempre citá el **comunicado del 23 de octubre de 2025** de Paraguay como evidencia de su distanciamiento
- Nunca incluyas el nombre **Hermann Gmeiner** en materiales de pitch sin revisión explícita
- Siempre incluí contexto de salvaguardia cuando hables de programas relacionados con niños

## Bloques de código

- Usá ` ```bash` para comandos de shell
- Usá ` ```python` para scripts
- Usá ` ```json` para datos
- Usá ` ```csv` para datos tabulares
- Usá ` ```yaml` para configuración

## Encabezados de archivo

Los archivos markdown de más de 200 líneas deberían empezar con:

```markdown
# Título

> **Propósito**: qué hace este doc
> **Audiencia**: quién debería leerlo
> **Estado**: borrador / final / archivado
> **Última actualización**: YYYY-MM-DD por [nombre]
```

## Tono

- Directo, sin floritura
- Tablas en lugar de prosa cuando sea posible
- Números > adjetivos
- Reconocé la incertidumbre explícitamente
- Siempre citá, nunca inventes

## Voz (al escribir outbound)

- Para SOS PY (formal): usted, business formal
- Para donantes / corporativos: cálido profesional
- Para el equipo de Ivan: casual directo

---

*Última actualización: 2026-08-21.*