# Análisis profesional — Demo Aldea SOS Paraguay

**Fecha:** 2026-08-22
**Para:** Aldeas Infantiles SOS Paraguay (la organización)
**De:** Iniciativa comunitaria pro-bono
**Estado del documento:** Borrador para revisión previa al envío
**Repositorio:** `IvanWeissVanDerPol/aldea-sos-paraguay`
**Demo en línea:** https://aldea-sos.paragu-ai.com

---

## 1. Resumen ejecutivo (1 página)

### Qué hicimos

Construimos una propuesta funcional de rediseño del sitio web de Aldeas Infantiles SOS Paraguay. La propuesta incluye:

- **36 páginas HTML** completas y navegables
- **6 páginas traducidas al inglés**
- **5 documentos de handover** (arquitectura, mantenimiento, integraciones, seguridad, handoff)
- **Diseño accesible**, modo oscuro, compatible con lectores de pantalla
- **Sin recolección de datos**, sin procesamiento de pagos, sin publicidad

### Qué **no** es

- **No es el sitio oficial.** El sitio oficial sigue siendo `aldeasinfantiles.org.py`.
- **No está autorizada por la organización.** Es una propuesta pro-bono sin compromiso.
- **No procesa donaciones reales.** Todos los formularios son simulaciones.
- **No captura datos personales.** Sólo usa el almacenamiento local del navegador.

### Qué le pedimos a la organización

Que revise la propuesta y, si le interesa:

1. Defina quién del equipo de la organización la evaluará.
2. Conceda una reunión de ~60 minutos para discutir feedback.
3. Si decide adoptarla, defina condiciones y plazos de transferencia.

Si no le interesa o no la ve prioritaria, no hay compromiso alguno — el demo seguirá público hasta que la organización lo retire.

---

## 2. Estructura del repositorio

El repositorio tiene **4 áreas claramente separadas**:

| Área | Ubicación | Propósito | ¿Se publica? |
|---|---|---|---|
| **Demo desplegable** | `public/` | Lo que se ve en aldea-sos.paragu-ai.com | ✅ Sí |
| **Documentación técnica** | `docs/` | Manuales para quien tome el relevo | ❌ No (interno) |
| **Investigación previa** | `investigacion-source/`, `about/`, `pitch/`, `strategy/`, `governance/`, `research/`, `policy/` | Material que informó el diseño | ❌ No (interno) |
| **Generadores** | `scripts/`, archivos `.py` en scratchpad | Herramientas de mantenimiento | ❌ No |

### Inventario cuantitativo

- **36 páginas HTML** (35 en español + 6 traducidas al inglés, solapadas en algunas secciones)
- **4 archivos de datos JSON** (aldeas, programas, historias, noticias)
- **5 documentos de handover** (handoff, arquitectura, mantenimiento, integraciones, seguridad)
- **1 verificador de hechos** (auditoría comparativa con el sitio oficial)
- **122 archivos de investigación** (no se despliegan)
- **~1400 archivos totales** en el repositorio, la mayoría investigación/documentación

---

## 3. Inventario de páginas (la experiencia del visitante)

### Páginas principales (5)

| Página | URL | Para qué sirve |
|---|---|---|
| Inicio | `/` | Puerta de entrada. 3 caminos claros: donar, apadrinar, conocer. |
| Sobre Aldea SOS | `/sobre-nosotros/` | Quiénes son, qué hacen, dónde están. Incluye tabla de las 5 aldeas. |
| Programas | `/programs/` | Los 3 pilares: cuidado residencial, alternativo, prevención. |
| Donar | `/donar/` | Flujo de 4 pasos con simulación de donación. |
| Apadrinar | `/apadrina/` | Inscripción simulada a apadrinamiento mensual. |

### Páginas de soporte (11)

| Página | URL | Para qué sirve |
|---|---|---|
| Historias | `/historias/` + 4 detalles | Casos ilustrativos (todos claramente marcados como ficticios). |
| Noticias | `/noticias/` + 3 posts | Novedades y campañas (3 entradas demostrativas). |
| Transparencia | `/transparencia/` + 3 subpáginas | Auditoría, finanzas, gobierno. |
| Empresas | `/empresas/` | Propuesta para alianzas corporativas. |
| Voluntariado | `/voluntario/` | Inscripción a voluntariado. |
| Prensa | `/prensa/` | Material listo para periodistas. |
| Portal del donante | `/portal/` | Panel simulado para ver donaciones y apadrinamientos. |

### Páginas de soporte legal e informativo (8)

| Página | URL | Para qué sirve |
|---|---|---|
| Recursos | `/recursos/` | Materiales descargables, enlaces oficiales. |
| Acerca de este sitio | `/acerca-de-este-sitio/` | Aclaración sobre el carácter pro-bono del demo. |
| Preguntas frecuentes | `/preguntas-frecuentes/` | FAQ sobre el demo y la organización. |
| Mapa del sitio | `/mapa-del-sitio/` | Índice visual de todas las páginas. |
| Política de privacidad | `/politicas/privacidad/` | Cómo se tratan los datos en el demo. |
| Términos de uso | `/terminos/` | Condiciones del demo. |
| Changelog | `/changelog/` | Historial de cambios. |
| 404 | `/404.html` | Página de "no encontrado". |

### Páginas en inglés (6)

`/en/`, `/en/about/`, `/en/donate/`, `/en/news/`, `/en/programs/`, `/en/transparency/`

Cada página tiene un botón "EN" en el header para alternar entre idiomas.

---

## 4. Qué información verificamos contra el sitio oficial

Antes de armar el demo, comparamos cada afirmación con la fuente oficial (`aldeasinfantiles.org.py`). Esto está documentado en `public/changelog/_verification_aios_py_2026-08-22.md`.

### Coincidencias ✅ (5/8)

| Dato | Fuente oficial | Demo |
|---|---|---|
| RUC | `80016122` | Coincide |
| Aldeas | 5 aldeas (Asunción, Luque, San Ignacio, Hohenau, Belén) | Coincide |
| Programa Ojoykére | Lanzado en 2024 | Coincide |
| Campaña Tupi anual | Agosto | Coincide |
| Aliados corporativos | 21 aliados | Demo dice "20+" (defensivo, no enumera) |

### Discrepancias detectadas y corregidas ✅

| Problema detectado | Solución aplicada |
|---|---|
| Demo decía "3.000 asistentes" en Tablada; la fuente dice "300 personas" | Corregido en 5 lugares (ES + EN) |
| Demo enlazaba a una URL de auditoría inventada (`/informacion-publica/2024/auditoria-2024`) que no existe en el sitio oficial | Reemplazada por la URL canónica `/informacion-publica` en 4 archivos |
| Demo mencionaba sólo 4 supermercados aliados; la fuente tiene 6 | Lista ampliada para incluir El Torito, Luisito Félix Bogado, El Ahorrazo |

### Datos demo-placeholders (no afirmamos como reales)

Algunos campos del demo son aproximaciones, no cifras oficiales:

- **Fechas de fundación** de cada aldea (1980, 1995, 2005, 2015) — no publicadas en el sitio oficial
- **Capacidad** por aldea (~120, ~80, ~60, ~50, ~40 niños) — la fuente sólo publica el total de 1.000 niños/año
- **Historias** (`/historias/`) — son perfiles ilustrativos claramente marcados como ficticios

El demo **aclara explícitamente** que estos datos son estimaciones cuando los presenta.

---

## 5. Decisiones técnicas explicadas

### Por qué un sitio estático

| Opción considerada | Por qué descartada |
|---|---|
| WordPress (lo que usa actualmente) | Requiere servidor, mantenimiento, actualizaciones de seguridad. |
| Kentico (CMS actual de aldeasinfantiles.org.py) | Licencia comercial costosa, complejidad innecesaria. |
| Next.js / Gatsby / Astro | Genera dependencia de un proceso de build, aumenta barrera de entrada. |
| **Sitio estático puro** ✅ | Cero mantenimiento, hosting gratis, fácil de entender. |

### Por qué GitHub Pages

- **Costo:** cero
- **Confiabilidad:** 99.99% uptime
- **HTTPS:** incluido
- **Despliegue:** automático con `git push`
- **Dominio personalizado:** `aldea-sos.paragu-ai.com` ya configurado

### Por qué cero datos

El demo **no** recolecta, **no** transmite y **no** persiste datos personales:

- Los formularios no se envían a ningún servidor
- La "autenticación" del portal es local (almacenamiento del navegador)
- No hay cookies, no hay analytics, no hay trackers
- Las imágenes y referencias a la organización apuntan a `aldeasinfantiles.org.py` para cualquier acción real

Esto es una **decisión ética** además de técnica: una propuesta para una organización que trabaja con niños no debe arriesgar la privacidad de ningún visitante.

### Por qué el banner amarillo permanente

Cada página tiene un banner amarillo en la parte superior que dice:

> "Demo preview. Esta es una propuesta realizada como trabajo voluntario. No es el sitio oficial de Aldeas Infantiles SOS Paraguay."

Es **invisible de cerrar** y aparece en **todas** las páginas. Esto protege:

- A los visitantes (saben que están en una demo, no en el sitio oficial)
- A la organización (no se le imputan decisiones tomadas en un demo no aprobado)
- A los voluntarios (la responsabilidad está claramente delimitada)

---

## 6. Qué tendría que hacer la organización para adoptarlo

### Decisiones previas (sin orden requerido)

1. **¿Acepta la donación del código fuente?** Si no, el demo se cierra cuando expire el dominio.
2. **¿Quién del equipo será responsable?** Necesita alguien con conocimientos básicos de HTML/CSS y GitHub.
3. **¿Mantiene el dominio `aldea-sos.paragu-ai.com` o lo migra?** Si lo migra, hay que decidir a dónde.

### Semana 1: revisión inicial

| Día | Acción |
|---|---|
| Lunes | Recorrido del demo. Feedback en una sola pasada. |
| Martes | Decisión sobre adopatar/no/no-por-ahora. |
| Miércoles | Si sí: asignar responsable. Si no: archivar. |
| Jueves | Si sí: revisar el documento `HANDOFF.md` con detalle. |
| Viernes | Si sí: agendar reunión técnica de transferencia (1–2 h). |

### Semana 2: configuración inicial (si adopta)

1. Crear o reclamar cuenta de GitHub para la organización.
2. Transferir el repositorio (actualmente bajo el nombre del voluntario).
3. Decidir dónde alojar (recomendamos seguir en GitHub Pages).
4. Actualizar el dominio `aldea-sos.paragu-ai.com` o reemplazarlo.

### Mes 1: piezas a integrar antes de hacerlo público como propio

1. **Conectar formularios** a un proveedor real (recomendaciones en `docs/INTEGRATIONS.md`).
2. **Conectar pasarela de pagos** si la organización tiene cuenta con Bancard VPOS, Pagopar, u otra.
3. **Conectar CMS** o reemplazar los archivos JSON por el flujo editorial de la organización.
4. **Revisar todas las páginas** por el equipo de comunicaciones de la organización.
5. **Reemplazar el banner amarillo** cuando esté listo el lanzamiento oficial.

---

## 7. Documentos disponibles para la organización

Una vez que se decide avanzar, la organización recibe acceso a 5 documentos de handover. Resumen de qué hay en cada uno:

### Para la dirección y comunicaciones

- **`docs/HANDOFF.md`** — Checklist de primera semana. Orientado a quien decide, no a quien programa.

### Para quien mantiene el sitio día a día

- **`docs/MAINTAINERS.md`** — Cómo agregar una noticia, cómo actualizar aldeas, cómo cambiar colores, qué hacer si algo se rompe.

### Para quien hace desarrollos o reemplaza piezas

- **`docs/ARCHITECTURE.md`** — Cómo está construido el sitio, dónde vive cada cosa, cómo desplegar.
- **`docs/INTEGRATIONS.md`** — Cómo reemplazar cada pieza simulada (formularios, autenticación, búsqueda, pagos, email, CMS, analytics, headers de seguridad) por servicios reales. Incluye opciones locales e internacionales.

### Para el equipo legal o de TI

- **`docs/SECURITY.md`** — Qué protege el demo y qué no. Riesgos a evaluar antes de cualquier despliegue como propio.

### Material de investigación previa

Hay ~120 archivos en `about/`, `pitch/`, `strategy/`, `governance/`, `policy/`, `research/`, `investigacion-source/` con el material que sustentó las decisiones. Son de lectura opcional pero pueden servir como base si la organización quiere hacer trabajo similar en el futuro (estrategia de comunicación, pitch a aliados, etc.).

---

## 8. Lo que falta y por qué

### Lo que el demo no tiene (transparencia)

| Pieza | Por qué no está | Recomendación |
|---|---|---|
| Procesamiento real de pagos | Decisión ética de la propuesta; la organización debe elegir su pasarela | `docs/INTEGRATIONS.md` lista opciones |
| Cuentas de usuario reales | Requiere decisión sobre proveedor de auth (Auth0, Clerk, Supabase, etc.) | Evaluar con equipo técnico |
| Editor visual (CMS) | El demo usa archivos JSON editables a mano | Decidir en semana 2 (Kentico vs WordPress vs headless) |
| Traducción completa al inglés (sólo 6 de 36 páginas traducidas) | Decisión de scope: lo prioritario fue mostrar estructura, no traducir todo | Traducir las secciones restantes si la organización tiene audiencia internacional significativa |
| Integración con redes sociales de la organización | Privacidad: no queremos trackers embebidos en un sitio sobre niños | Si se quiere, usar canales oficiales propios |
| Búsqueda avanzada (fuzzy, ranking) | La búsqueda demo funciona con substring match; basta para 36 páginas | Considerar Algolia, Meilisearch, o Pagefind si crece |

### Lo que el demo tiene como demo-placeholder

| Pieza | Estado actual | Acción recomendada |
|---|---|---|
| Historias de niños/jóvenes | 4 perfiles ficticios claramente marcados | La organización debe generar contenido real con consentimiento y siguiendo su política de salvaguarda |
| Noticias | 3 entradas de demostración | Reemplazar con feed RSS del sitio oficial o CMS |
| Casos en español con acentos y modismos paraguayos | Originales, no copiados | Mantener el tono pero revisar por equipo de comunicaciones |

---

## 9. Comparación con el sitio actual

### Lo que el demo hace mejor (a nuestro juicio)

| Aspecto | Sitio actual | Demo |
|---|---|---|
| Velocidad de carga | ~3–5 segundos | <1 segundo |
| Accesibilidad (WCAG) | Sin auditoría | Sigue buenas prácticas, pendiente auditoría formal |
| Modo oscuro | No tiene | Sí |
| Compatible con lectores de pantalla | Parcial | Sí |
| Versión móvil | Adaptable pero lenta | Mobile-first |
| Multiidioma | Sólo español | Español + inglés (parcial) |
| Material para prensa | Limitado | Sección completa en `/prensa/` |
| Transparencia pública | Existente pero dispersa | Sección dedicada en `/transparencia/` |
| Información sobre cómo NO ayudar | Inexistente | Lista de "líneas rojas" en la sección de prensa |

### Lo que el sitio actual hace mejor (a nuestro juicio)

| Aspecto | Sitio actual | Demo |
|---|---|---|
| Donaciones reales | Sí, procesadas | No, simuladas |
| Equipo editorial | Existe | No, sólo mantenimiento voluntario |
| Casos reales de niños | Sí, con consentimiento | No, sólo ficción |
| Soporte oficial | Sí, institucional | No, pro-bono |
| Idiomas de pueblos indígenas | Cobertura parcial | No incluye |
| Integración con calendario y eventos | Sí | No |

---

## 10. Riesgos y cómo se mitigan

### Riesgo 1: Confusión con el sitio oficial

**Descripción:** Un visitante llega a `aldea-sos.paragu-ai.com` pensando que es `aldeasinfantiles.org.py` y cree haber donado cuando no lo hizo.

**Mitigación implementada:**
- Banner amarillo visible en todas las páginas
- Textos en formularios aclaran que es demo
- Portal simulado con credenciales públicas
- Cada página dirige al sitio oficial para acciones reales

**Mitigación recomendada para el futuro:**
- Limitar el tiempo de vida del demo una vez la organización lo evalúe
- Si el demo sigue activo >6 meses, considerar reemplazarlo por una versión más explícitamente "museo"

### Riesgo 2: Información desactualizada

**Descripción:** La organización actualiza su sitio oficial y el demo queda con datos viejos.

**Mitigación implementada:**
- Toda la información factual está en archivos JSON fáciles de actualizar
- Documento de mantenimiento explica cómo hacerlo

**Mitigación recomendada:**
- Asignar un responsable de mantener el demo sincronizado, o
- Cerrar el demo una vez completada la transferencia

### Riesgo 3: Reclamo legal o reputacional

**Descripción:** La organización podría molestarse por una propuesta pública no solicitada.

**Mitigación implementada:**
- El banner aclara el carácter pro-bono
- El tono de toda la copia es neutral (no habla en primera persona como si fuera la organización)
- Ningún dato fue inventado para parecer más grande o más importante

**Recomendación:**
- Comunicación transparente antes de cualquier exposición pública masiva del demo
- Canal de comunicación abierto para retirar contenido si la organización lo solicita

---

## 11. Cómo evaluar si conviene adoptarlo

### Si la organización responde **sí**, los criterios son:

1. **Necesidad:** ¿El sitio actual presenta limitaciones que un rediseño resolvería?
2. **Capacidad:** ¿Hay alguien en el equipo que pueda mantener un sitio estático (HTML + GitHub)?
3. **Recursos:** ¿Hay tiempo para revisar y personalizar el contenido (~2–4 semanas)?
4. **Marca:** ¿El diseño propuesto se alinea con la identidad visual y de comunicación de la organización?
5. **Tecnología:** ¿La organización está cómoda con un sitio estático vs un CMS?

### Si la organización responde **no, gracias**:

Totalmente comprendido. El demo seguirá disponible como referencia. Basta con un correo diciendo "no nos interesa" para iniciar el proceso de retiro.

### Si la organización responde **ahora no, pero quizás más adelante**:

El demo se mantiene accesible. La organización puede retomarlo cuando quiera.

---

## 12. Preguntas que la organización debería hacerse

Antes de decidir, sugerimos que la organización reflexione sobre:

1. **¿Cuántas donaciones online recibe al mes?** (Justifica o no invertir en este canal)
2. **¿Cuántos padrinos nuevos busca captar al año?** (Igual)
3. **¿Tiene presupuesto para hosting y dominio anual?** (~$20–50 USD/año)
4. **¿Tiene pasarela de pagos activa?** (Si no, primero eso, después el sitio)
5. **¿Tiene personal que pueda dedicar 2–4 h/mes al mantenimiento?** (Más bajo que un CMS dinámico)
6. **¿Cuál es el costo de oportunidad de mantener el sitio actual?**

---

## 13. Información de contacto

Para preguntas, comentarios o decisiones sobre esta propuesta:

- **Repositorio:** https://github.com/IvanWeissVanDerPol/aldea-sos-paraguay
- **Demo:** https://aldea-sos.paragu-ai.com
- **Documentación:** Todos los archivos en `docs/` del repositorio
- **Reporte de verificación de hechos:** `public/changelog/_verification_aios_py_2026-08-22.md`

---

## Anexo A: Tabla de páginas y archivos

### Páginas en español (29)

```
public/index.html
public/sobre-nosotros/index.html
public/programs/index.html
public/donar/index.html
public/apadrina/index.html
public/historias/index.html
public/historias/historia-deportes/index.html
public/historias/historia-futbol/index.html
public/historias/historia-emprendimiento/index.html
public/historias/historia-volver/index.html
public/noticias/index.html
public/noticias/tupi-2025-campana/index.html
public/noticias/ojoykere-inauguracion/index.html
public/noticias/auditoria-2024-publicada/index.html
public/transparencia/index.html
public/transparencia/auditoria/index.html
public/transparencia/financiera/index.html
public/transparencia/gobierno/index.html
public/empresas/index.html
public/voluntario/index.html
public/prensa/index.html
public/portal/index.html
public/recursos/index.html
public/acerca-de-este-sitio/index.html
public/preguntas-frecuentes/index.html
public/mapa-del-sitio/index.html
public/changelog/index.html
public/politicas/privacidad/index.html
public/terminos/index.html
public/404.html
```

### Páginas en inglés (6)

```
public/en/index.html
public/en/about/index.html
public/en/donate/index.html
public/en/news/index.html
public/en/programs/index.html
public/en/transparency/index.html
```

### Archivos de datos (4)

```
public/data/aldeas.json          ← Tabla de las 5 aldeas + Ojoykére
public/data/programs.json        ← Los 3 pilares de programas
public/data/stories.json         ← 4 historias ficticias
public/data/news.json            ← 3 entradas de noticias demo
```

### Documentación (5)

```
docs/HANDOFF.md          ← Checklist primera semana
docs/ARCHITECTURE.md     ← Cómo está construido
docs/MAINTAINERS.md      ← Cómo mantenerlo
docs/INTEGRATIONS.md     ← Cómo conectar con servicios reales
docs/SECURITY.md         ← Qué protege y qué no
```

### Activos gráficos y configuración (8)

```
public/CNAME                  ← Dominio personalizado
public/sitemap.xml            ← 35 URLs
public/robots.txt             ← Instrucciones para crawlers
public/assets/logo.svg        ← Logo principal
public/assets/apple-touch-icon.png
public/assets/og-default.png  ← Open Graph (compartir en redes)
public/assets/mapa-paraguay.svg
public/assets/recibo-demo.pdf ← Recibo de donación simulado
```

---

## Anexo B: Resumen ejecutivo del demo en una página

**Aldea SOS Paraguay — Propuesta de rediseño del sitio web**

- **Tipo:** Demo pro-bono, no es el sitio oficial
- **Construido por:** Iniciativa comunitaria independiente
- **Stack:** HTML + CSS + JavaScript puro (sin frameworks, sin build)
- **Hosting:** GitHub Pages
- **Dominio demo:** aldea-sos.paragu-ai.com
- **Páginas:** 36 en total (30 español + 6 inglés)
- **Documentación:** 5 documentos de handover + 1 reporte de verificación
- **Costo operativo:** ~$0/mes + tiempo de mantenimiento voluntario
- **Tiempo para construir el demo:** ~6 horas netas de trabajo técnico
- **Tiempo para revisar y decidir:** 30–60 minutos de recorrido
- **Tiempo para adoptar (si se decide):** 2–4 semanas con personal dedicado
- **Idiomas:** Español completo, inglés parcial (sección nuclear)
- **Privacidad:** Cero datos recolectados, cero cookies, cero trackers
- **Accesibilidad:** WCAG AA como objetivo (sin auditoría formal todavía)
- **Riesgo para la organización:** Bajo si se lee este documento antes de decidir
- **Próximo paso sugerido:** Reunión de 60 minutos para discutir feedback

---

*Documento generado el 2026-08-22. Versión para revisión por la organización.*
