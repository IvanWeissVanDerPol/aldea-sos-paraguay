# Crítica visual completa — aldea-sos.paragu-ai.com

Fecha: 2026-08-21
Audited via Playwright + vision analysis

## CRÍTICA CRÍTICA (top 12 issues, urgent)

### 1. **Sin imágenes / arte — todo emoji** 🔴🔴🔴
El sitio NO TIENE UNA SOLA IMAGEN. Todo está rendereado con emojis grandes (👶 🏠 💙) sobre gradients. Esto es **el mayor problema visual** y lo hace parecer un prototipo de estudiante, no un sitio de una ONG de 55 años.

**Comparación**:
- Oficial aldeasinfantiles.org.py: HERO con foto real de niña SOS en primer plano, iconos profesionales, fotos de historias
- Nosotros: emojis + CSS gradient = "template clínico"

**Fix**: Integrar imágenes reales de stock (niños jugando, manos, aulas) o generar hero con SVG illustration. Mínimo necesitamos SVG illustrations por sección.

### 2. **Botón "Conoce Aldeas Infantiles SOS Paraguay" en hero MAL UBICADO** 🟠
En el hero, debajo de los stats, hay un botón "Conocé Aldeas Infantiles SOS Paraguay" que NO existe en el flujo natural. El usuario no espera un botón "Conocé" en el hero — espera un CTA primario (Doná/Apadriná). Ya tenemos esos botones arriba, este se ve redundante y confuso.

**Fix**: Eliminar o reemplazar con link secundario menos prominente.

### 3. **Donación card: alert placeholder TORPE** 🔴
```js
alert('Para procesar donaciones reales necesitás ir al sitio oficial: www.aldeasinfantiles.org.py/donaciones');
```
Usar `alert()` para explicar que la donación no funciona es **el peor patrón de UX**. El usuario pone sus datos, click, y recibe un mensaje torpe.

**Fix**: Reemplazar el donation form completo con un CTA directo al sitio oficial. O construir un modal "Estamos en preview, redirigí..."

### 4. **Newsletter form también usa `alert()`** 🟠
Mismo problema. "Para suscribirte al newsletter oficial..."

**Fix**: Mismo approach.

### 5. **Story cards demasiado cortas / no engagement** 🟠
3 cards con:
- emoji (no imagen)
- tag (link)
- título
- un párrafo muy corto
- link "Leer historia →" → a sitio externo

Esto se siente como un placeholder incompleto. Falta una foto, falta contexto, falta el "qué aprendiste" o el "qué pasó después".

**Fix**: Reemplazar con un componente más rico o eliminar la sección.

### 6. **Padding/aspect ratio del "por qué lo hacemos"** 🟠
3 problem-stats cards pero solo hay 3 stats: 1.000+, 5, 135. Las 3 cards tienen exactamente el MISMO tipo de contenido — no hay ninguna rompe el rhythm visual. El framework-quote card con cita es un buen ancla visual, pero los 3 cards above son demasiado similares en tamaño y peso.

### 7. **Donación card: hero CTAs dicen "/donar/" pero ese URL no existe** 🔴
Hay 6+ CTAs que apuntan a `/donar/` pero ese path NO existe como página física. Van a devolver 404 (o caer en el homepage como fallback).

**Fix**: Crear la página `/donar/` con todo el flujo, o cambiar todos los CTAs a apuntar al sitio oficial.

### 8. **WhatsApp FAB no es verde WhatsApp** 🔴
El FAB usa color `#25D366` que es correcto, pero el tooltip dice "¡Hola! ¿Querés hablar con nosotros?" que copia textualmente al widget del sitio oficial. **Esto puede ser infringement visual** — estamos copiando exactamente el patrón único del sitio oficial.

**Fix**: Cambiar tooltip a algo nuestro: "¿Hablamos sobre cómo ayudar?" o similar.

### 9. **Conflicto entre resguarda-notice y theme bar** 🟠
El "salvaguardia-notice" arriba del header es una banda verde con texto blanco. En dark mode, queda como una banda brillante bien visible. Esto está OK pero el mensaje adentro dice "Comité Nacional de Salvaguardia Infantil activo" — un claim fuerte. Si SOS Paraguay oficial verifica este sitio, podrían cuestionar si estamos presentándolo como un sitio oficial.

**Risk**: We're claiming activos del Comité sin ser la organización. Esto es borderline infringement.

**Fix**: Reformular como "Iniciativa comunitaria que respeta los estándares de Aldeas Infantiles SOS Paraguay" o reducir el claim.

### 10. **Hero stats y CTA competición** 🟠
El hero tiene:
- Eyebrow "55 años..."
- H1 (corto: "Cuidamos niños / Construimos futuros")
- Lead paragraph
- 2 CTAs
- 4 stats con borders

Es un hero DEMASIADO cargado. Los 4 stats con línea divisoria arriba compiten por atención con el H1.

**Fix**: Mover stats a una section dedicada ("Por qué confiar en nosotros" o "Nuestros números"), dejar el hero solo con CTA.

### 11. **Job tiles mal estructurados** 🟠
3 job tiles con texto absoluto fechas (jun 23 2026, jun 2 2026). Esto se siente stale y rápido de actualizar. La data es estática y se va a quedar vieja.

**Fix**: Hacer un embed/feed dinámico o al menos mostrar "Reciente" en vez de fechas absolutas.

### 12. **Footer brand section** 🔴
El footer dice "Aldeas Infantiles SOS Paraguay" como si FUERA Aldeas, pero abajo dice "Sitio operado como iniciativa comunitaria". **Es contradictorio** — reclama la marca y luego se deslinda. Confuso.

**Fix**: Hacer footer 100% consistente con la marca comunitaria (ej: "Iniciativa Aldea SOS Paraguay") en lugar de usar "Aldeas Infantiles SOS Paraguay".

## VISUAL DESIGN ISSUES

### Paleta de colores

| Color | Uso actual | Problema |
|---|---|---|
| `#0066B3` azul SOS | Primary buttons, links, hero gradient | OK |
| `#F4A100` amarillo | CTAs (btn-primary), acentos | Demasiado saturado / naranja-feel |
| `#2D8E5F` verde | Solo en safeguardia-notice | Inconsistente con CTA success states |
| `#D32F2F` rojo | Definido pero NO usado | Dead color |
| `#FFD966` yellow-light | Solo CTA hover state | OK |
| `#1A1A1A` gris text | Text primary | OK |

**Mejor uso**: El verde éxito debe usarse en más lugares (form success, micro-interactions, status indicators). El rojo definido pero sin uso = código muerto.

### Typography

- Hero h1: `clamp(2rem, 5vw, 3.5rem)` → 32-56px (OK)
- Section h2: `clamp(1.75rem, 4vw, 2.5rem)` → 28-40px (OK)
- Body: 16px (ideal para mobile)
- Line-height: 25.6px = ratio 1.6 (✓ WCAG AA, ideal para dyslexia)
- Font: System sans stack (✓ rápido, pero no tiene personalidad de marca)

**Problema**: NO HAY Typography hierarchy clara entre H1/H2/H3. Las secciones tienen H2s y H3s pero el peso visual es casi idéntico. Necesita más contraste: H2 super-bold + H3 medium con weight differentiation.

### Whitespace

- Section padding: `5rem 0` (80px top/bottom) — generous
- Card padding: `2rem` (32px) — OK
- Container max-width: 1280px (✓ standard)

**Problema**: Los problem-stats card padding es 2rem (`padding: 2rem`) pero las cards regulares son 2rem también — no hay differentiation visual. El headline section padding es 5rem pero el framework-quote margin es 2rem dentro de un section de 5rem — puede verse disconexo.

### Image / icon strategy

- 0 imágenes reales
- 23+ emojis usados como iconos
- 22 partner logos (en realidad texto plano)
- 3 story cards sin fotos

**Veredicto**: El sitio tiene sensación de MAQUETTE / WIREFRAME TERMINADO, no de sitio final profesional. La ausencia de fotografía humana real es el deal-breaker.

### Spacing issues

- Hero padding `5rem 0 4rem` — asymmetrical, debería ser `5rem 0 5rem`
- Section h2 margin-bottom: `1rem` — OK
- Card h3 margin-bottom: `0.75rem` — muy poco para algunos

## ACCESIBILIDAD

| Check | Status | Issue |
|---|---|---|
| `<html lang>` | ✓ `es` | OK |
| Skip link | ✓ | Presente |
| Headings hierarchy | ✓ | h1=1, h2=13, h3=33 — buena estructura |
| Images with alt | ✓ 0/0 | No images, irrelevant |
| Links have href | ✓ 56/56 | Todos tienen href |
| Empty links | ✓ 0 | OK |
| Theme toggle aria-label | ✓ | OK |
| FAQ aria-expanded | ✓ | OK |
| Donate form labels | ✓ | OK |
| **Color contrast (a11y)** | ❓ | No medido directamente |
| **Keyboard nav** | ❓ | No testeado |
| **Focus-visible** | ✓ | Presente en CSS |
| **prefers-reduced-motion** | ✓ | Presente en CSS |
| **Mobile responsive** | ✓ | OK en mobile screenshot |

**Issue missed**: Ningún `aria-live` para donations/newsletter. Cuando el form se submita (o falle), screen readers no tendrán feedback.

## ANIMATIONS

- Scroll animations (IntersectionObserver) ✓
- WhatsApp pulse ✓
- Hero-eyebrow dot pulse (delayed entry)
- FAQ accordion (smooth open/close)
- Hover effects (cards lift, buttons)
- Smooth scroll for anchor links

**Problemas**:
- Story cards no tienen entry animation consistente con las otras
- Las section headers y heroes aparece estáticos sin entrance
- Cards sin animation tienen "out of nowhere" reveal

## BRAND PROFESSIONALISM

### What's working
1. ✅ Branding colors oficiales del research
2. ✅ Mission statement real del research
3. ✅ Copy patterns oficial-aligned
4. ✅ WhatsApp number oficial
5. ✅ Real names (aldeas, aliados, equipo)
6. ✅ Schema.org JSON-LD
7. ✅ Responsive
8. ✅ Theme toggle

### What's amateur
1. ❌ Sin fotos reales / hero visual
2. ❌ Donation form con `alert()` (smell of placeholder)
3. ❌ Newsletter con `alert()` (mismo problema)
4. ❌ Contradicción brand claim (Somos Aldea Infantiles SOS Paraguay / pero somos iniciativa comunitaria)
5. ❌ 3+ claims que cruzan la línea de "somos la organización oficial" cuando NO lo somos
6. ❌ Story cards incompletas — sin foto, solo emojis
7. ❌ Job tiles con fechas absolutas (stale-able)

### What's borderline (legal/infringement)
1. ⚠️ Botón "Donar ahora" — si lo clickeas no funciona, va al sitio oficial
2. ⚠️ WhatsApp tooltip "¡Hola! ¿Querés hablar con nosotros?" idéntico al oficial
3. ⚠️ Salvaguardia notice claim "Comité activo" — terceros pueden leer como representación oficial
4. ⚠️ Sección "Auditoría 2024" linkea a un PDF del sitio oficial — pasamos por engaged partner
5. ⚠️ Newsletter form con email submit a nuestro dominio — claim implícito de recolección oficial

## RECOMENDACIONES PRIORITARIAS

### Tier 1: Eliminar riesgo legal/infringement (URGENTE)
1. Reemplazar WhatsApp tooltip por texto nuestro
2. Reformular safeguardia-notice como "Iniciativa comunitaria" no "Comité activo"
3. Footer brand name consistente (no "Aldeas Infantiles SOS Paraguay" oficial)
4. Donation form → redirigir claramente a oficial en lugar de pretender

### Tier 2: Hero visual (ALTA PRIORIDAD)
5. Agregar hero image / illustration
6. Reducir CTA stats en hero (mover a section dedicada)
7. Quitar botón "Conocé Aldeas Infantiles SOS Paraguay" del hero

### Tier 3: Polish
8. Reemplazar `alert()` placeholders con modales o mensajes inline
9. Arreglar story cards con fotos o quitar section
10. Diferenciar weights entre H2 y H3
11. Crear páginas reales para `/donar/`, `/apadrina/`, `/contacto/`, etc.

### Tier 4: Nice-to-have
12. Use color rojo para error states
13. Use color verde para success states (más allá de safeguardia)
14. Animation entry para section headers
15. `aria-live` para forms
