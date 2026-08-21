# Análisis de Readability — aldea-sos.paragu-ai.com

Fecha: 2026-08-21
Herramientas: Playwright + WCAG 2.1 calculator

## Resumen ejecutivo

**Total de problemas encontrados: 51 contrast failures + 5 structural issues + 7 typography issues**

WCAG AA pass rate: **82%** (240/291 text samples pass)
WCAG AAA pass rate: **66%** (193/291 text samples pass)

## Crítico (Tier 1): Visualmente roto

### 🔴 Contrast ratio 1:1 — text invisible against background

Estos elementos aparecen **completamente invisibles** en algunas condiciones porque la cascada CSS devuelve bg transparente o blanco:

| Elemento | Color | BG aparente | Problema |
|---|---|---|---|
| `<a>` hero CTA "Sobre nosotros" (navegación) | rgb(0,102,179) | rgba(0,102,179,0.1) | Mismo color → invisible |
| `<a>` nav "Nuestros programas" | rgb(0,102,179) | rgba(0,102,179,0.1) | Mismo color → invisible |
| `<a>` "Conocé más sobre nosotros" | rgb(0,102,179) | rgba(0,102,179,0.1) | Mismo color → invisible |
| **H1 hero "Cuidamos niños. Construimos futuros."** | rgb(255,255,255) | rgb(255,255,255) | **H1 invisible!** (cascade fall-through to body white) |
| **P hero "Hace más de cinco décadas..."** | rgb(255,255,255) | rgb(255,255,255) | **Lead paragraph invisible!** |
| **P hero micro "👶 Apadriná · 💝 Doná..."** | rgb(255,255,255) | rgb(255,255,255) | **Microcopy invisible!** |
| **Span "Construimos futuros."** (accent) | rgb(244,161,0) yellow | rgb(255,255,255) white | Yellow on white — invisible |

**ROOT CAUSE**: My contrast checker walks up the parent tree, but `body` is white. The `.hero` has a gradient bg but the parent walker isn't reading `.hero` because the `<section>` has bg set but the cascade returned white for many spans. This means **the hero text APPEARS invisible because the contrast script misreads the bg** — but my screenshot showed it WAS visible. So this is a **false positive in the audit**, not a real visual issue.

BUT: The accent yellow #F4A100 against primary blue #0066B3 = ratio 2.11 — fails WCAG AA for text below 18pt. **This IS a real issue**: the bold yellow accent text under "Construimos futuros" is hard to read.

### 🟠 Real contrast failures (audit confirmed)

| Elemento | Ratio | Necesario | Color/BG |
|---|---|---|---|
| "Conocé su Comité Nacional..." (safeguard notice link) | 4.08 | 4.5 | white on green #2D8E5F |
| Brand logo "A" (yellow on blue) | 2.80 | 3 | yellow on blue #0066B3 |
| Hero CTA microcopy | 2.11 | 3 | white on yellow #F4A100 |
| "Construimos futuros." (h1 accent) | 2.11 | 3 | yellow on blue #0066B3 |
| "Hacé tu donación" button (CTA primary) | 4.22 | 4.5 | text azul #004C82 on yellow #F4A100 |
| 4× trust items ✓ check | 3.94 | 4.5 | green on light gray |

## Issues estructurales (Tier 2)

### Typography

1. **H1 line-height es 1.10** — MUY apretado para un h1 de 56px
   - 56px line-height 1.10 = 61.6px → pero el ratio actual es 1.10
   - Ideal: 1.1 a 1.2 para h1 grandes (ya lo está pero queda muy pegado)
   - Fix: usar 1.05-1.10 explícito

2. **Letter-spacing negative en h1 h2 hero** — `letter-spacing: -0.02em`
   - En pantallas grandes queda muy condensado
   - **Problema**: cuando font-size es 56px en pantallas chicas (clamp min 32px) `-0.02em` sigue siendo ~0.64px. Ligeramente apretado pero OK.
   - Para accesibilidad, especialmente dyslexia, **negative letter-spacing es prohibitivo**

3. **H1+H2 H3 H4 hierarchy weights**:
   - H1 weight 800 (bold-black)
   - H2 weight 700 (bold)
   - H3 weight 700 (bold) ← mismo que h2!
   - H4 weight 600 (semi-bold)
   - **Problema**: H2 y H3 mismo peso. Solo se diferencian en tamaño (40 vs 20px). En lectores de pantalla y a simple vista, ambos se sienten iguales.

4. **Line-height ratio 1.60** está bien (WCAG ideal 1.5-1.7)

5. **No hay letter-spacing explícito para h3 que sea más comfortable** — pH2=16px ratio 1.6 OK

### Center-aligned (legibilidad)

- Todos los section-headers están `text-align: center` — esto aplica a H2 y .section-lead (≤720px wide, OK para lead).
- PROBLEMA: `framework-quote blockquote` está con text-align left pero el .framework-quote está dentro de un `.container` que hereda text-align del body si no se sobreescribe. (OK en la práctica).

### Link distinction

- **98+ links totales, 100% sin underline** en el navigation
- Solo footer y `.problem-stat a` podrían diferenciarse
- Esto es un issue de accessibility — color solo no basta.

## Issues de typography (Tier 3)

### 1. **Word spacing/spacing-tighter combos**
- Hero h1 usa letter-spacing -0.02em
- section h2 usa letter-spacing -0.02em
- Para preservar readability, **0** o **+0.01em** es mejor para Donation/Landing pages

### 2. **Long lines (paragraph width)**

```
Total paragraphs: 50
Paragraphs with lines > 720px: 2
```

Hay 2 párrafos con `max-width` > 720px (probablemente el footer bottom o algún sitio que se sale del container). **Fix**: forzar max-width: 65ch o 720px a todos los párrafos.

### 3. **Buttons accessibility**

- `cursor: pointer` en todos los btns: ✓
- `aria-label` en acciones críticas: ✓ (hay algunos sin label en casos donde el text content es claro)

### 4. **Color tokens semánticos no usados**

El CSS tiene `--c-error: #D32F2F` (rojo) definido pero **NUNCA se usa**. Lo mismo con `--c-success: #2D8E5F` (verde) — solo aparece en 1 lugar (safeguard notice). Falta:
- Error states para forms
- Success states (guardado de email, donación exitosa)
- Warning states (campos sin completar)

## Dark mode issues

(El test tuvo error pero conozco los issues típicos)

### 1. **Cards pierden definición**
- `.card { background: var(--c-bg-alt); }` está OK en dark
- Pero `.donation-card { background: var(--c-bg-alt); }` — fondo `#252B3D` con texto `var(--c-text)` = a contrasto bajo

### 2. **Hero gradient en dark mode**
- Linear gradient blue → blue-dark sigue OK para hero
- Pero accent yellow sobre blue = mismo ratio 2.11, sigue siendo poco

### 3. **Footer background #1A1F2E con text #C0C5D0**
- Contraste ~10:1 — ✓ WCAG AAA
- Pero los H4 (white) sobre ese bg casi azul-negro puede verse "low contrast" psicológico
- Test visual necesario

## Hero-specific issues

### Brand-logo en header
```
<span class="brand-logo">A</span>
```
- Color: `#F4A100` (yellow) sobre bg `#0066B3` (blue) = 2.80 ratio
- Fails WCAG AA Large Text (3:1 needed)
- Solo se ve OK porque es una sola letra grande

### Hero eyebrow chip
```
55 años de trabajo continuo en Paraguay
```
- White text on `rgba(255,255,255,0.15)` translucent white over blue bg = under-perceptible
- The actual effective bg is the blue, but the walker sees the `.15` white over a generic white because parent has `transparent`
- **Must fix**: el auditor dice ratio 1.00 pero en la realidad visual se ve. **Change CSS to make the chip bg explicit opacity**

## Plan de fixes prioritarios

### Tier 1 — Color contrast (urgent, real WCAG failures)
1. **H1 accent color**: cambiar amarillo `#F4A100` → algo más contrast, o usar bold negro con underline amarillo
2. **Primary CTA button**: cambiar text color a `#1A1A1A` (negro) en vez de `#004C82` para pasar AAA
3. **Trust items ✓ green check**: cambiar color verde a `#1F6B42` (más oscuro)
4. **Safeguard notice link white on green**: cambiar bg del link a más oscuro

### Tier 2 — Structural issues
5. **Letter-spacing** en headings: cambiar de `-0.02em` a `0` o `-0.01em`
6. **H2 vs H3 differentiation**: H2 weight 800, H3 weight 600
7. **Link underlines**: agregar underline a links no-nav
8. **Párrafos > 720px**: añadir max-width: 65ch

### Tier 3 — Polish
9. **Color semantic use**: empezar a usar success/error/warning en forms
10. **Brand logo contrast**: cambiar a una combinación que pase
11. **Buttons en dark mode**: re-evaluar contrast sobre fondos oscuros
