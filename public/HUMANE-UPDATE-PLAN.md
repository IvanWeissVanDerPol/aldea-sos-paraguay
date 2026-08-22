# Making the Demo More Humane

**Date:** 2026-08-22
**Goal:** Move the site from "designed NGO template" to "feels like real people"

The current site is functional and clean but reads as a professional template. To make it feel **humane**, we need to add evidence of real life — faces, voices, places, time, warmth. Not more design. More humanity.

---

## 1. What "humane" means in web design

A site feels humane when it has:

| Element | Why it works | Where it lives |
|---|---|---|
| **Real faces, not icons** | Stock icons flatten. A photo of a person signals "this is about a person." | Hero, story pages |
| **First-person voice** | "We" feels like the org is talking. Specific names feel like the visitor matters. | Stories, donate success |
| **Time markers** | "Since 1970" is abstract. "María joined the program in March 2024" is concrete. | Stories, programs |
| **Place names** | Paraguay feels abstract. Zeballos Cué, Hohenau, Tablada Nueva feels local. | Aldeas, programs |
| **Imperfection as signal** | Photos with motion blur, handwriting, slightly crooked framing — all signal "this is real." | Photography, not illustrations |
| **Concrete actions, not abstractions** | "Help families stay together" is abstract. "Provide a weekly food package to a mother in crisis" is concrete. | Donate, volunteer |
| **Acknowledgment of difficulty** | Don't pretend the work is easy. Acknowledge the children, the grief, the context. | About, stories |
| **Spanish-first identity** | Use Paraguay-specific Spanish, not generic Latin American. | All copy |

The current demo has good bones but uses generic international-NGO Spanish and lacks most of these elements.

---

## 2. Concrete changes — 9 specific edits

### Change 1: Add a "Faces" hero section on the home page

Currently the home hero is text + stats. Add a placeholder face card. **Without real photography rights, use a tasteful color-block + quote pattern** that simulates the visual warmth of a face without impersonating anyone.

Where: home page hero.
Effort: ~30 min (just HTML/CSS).

### Change 2: Replace generic "Donar" CTA with a specific story hook

Currently the donate page says "Tu donación ayuda a niños en cuidado tipo familiar." Replace with: "Una familia SOS cuida a 8 niños. Gs. 100.000 al mes cubre su alimentación semanal."

Where: donate step 1.
Effort: ~20 min.

### Change 3: Add first-person voice to every story page

Currently stories open in third-person: "Un joven de 16 años llegó..." Add a first-person quote at the top of each story: "«Lo que más me gusta de la aldea es la rutina.» — Historia ilustrativa."

Where: each `/historias/historia-*/index.html`.
Effort: ~1 hr.

### Change 4: Add concrete impact figures to the donate page

Currently the donate step 1 has preset amounts (50k, 100k, 200k, 500k) with no context. Add: "Gs. 50.000 = una semana de útiles escolares para un niño."

Where: donate page step 1.
Effort: ~30 min.

### Change 5: Add named staff / villages to program pages

Programs currently say "modelo de cuidado tipo familiar." Replace with: "Cada aldea tiene una directora de aldea, una supervisora de casas, y madres SOS que cuidan a 8 niños cada una."

Where: `/programs/` page.
Effort: ~20 min.

### Change 6: Add a "Today at Aldea SOS" widget to home page

A small daily-rotating block showing what happened that day at the org: "Hoy: 3 nuevas familias empezaron el programa Ojoykére. Mañana: visita médica mensual en la aldea Hohenau."

This makes the org feel **alive** rather than institutional.

Where: home page, above the donation CTAs.
Effort: ~1 hr (just a few pre-written "today" entries that the org can update).

### Change 7: Acknowledge the post-scandal context honestly

Currently the site doesn't mention the 2025 scandal or the org's path forward. A humane site doesn't pretend the difficult context doesn't exist. Add a single, careful sentence in `/sobre-nosotros/`: "En 2025 atravesamos un momento difícil que la organización reconoció públicamente. Este sitio refleja el compromiso con la transparencia que siguió a ese proceso."

Where: `/sobre-nosotros/` near the "Lo que no sabemos" section.
Effort: ~30 min.

### Change 8: Use Paraguay-specific Spanish

Some current copy is generic Latin American. Paraguay-specific terms:
- "guaraníes" (currency, with the diéresis)
- "aldea" not "hogar" or "centro"
- "amigos SOS" (the org's own term for monthly donors)
- "madre SOS" (the org's own term for house mothers)
- "compañero permanente" (a Paraguayan term for long-term partner)
- Use "vos" forms sparingly — Paraguay Spanish is voseante but formal org copy usually uses "usted" or third-person

Audit the copy for any clearly non-Paraguayan Spanish.
Where: all copy, especially donate, sponsor, volunteer pages.
Effort: ~1 hr.

### Change 9: Add a "Direct contact" footer with a real human name

Currently the footer has generic "Sitio oficial" links. Add a small block: "¿Hablás con una persona? +595 21 247 4000 (oficina nacional, Zeballos Cué)."

This makes the org feel reachable.
Where: footer.
Effort: ~10 min.

---

## 3. Tone adjustments — across the whole site

Some copy is too "corporate newsletter." Make it conversational:

| Current (too corporate) | Replacement (more humane) |
|---|---|
| "El modelo de cuidado..." | "Cada aldea es una pequeña comunidad. Ocho o diez niños viven en una casa, con una madre SOS que se queda con ellos el tiempo que hace falta." |
| "La organización ofrece..." | "Cuando un niño llega a una aldea, lo primero que recibe es una mochila con su nombre. Después, una familia." |
| "Para más información..." | "Si querés saber más, llamanos o escribinos. Una persona real te responde." |
| "Hacé tu donación" | "Acompañá a una familia SOS" |
| "Conocé nuestros programas" | "Conocé cómo cuidamos a los niños" |

Where: replace throughout. Pick the 5 most visible first.
Effort: ~2 hrs of careful copy editing.

---

## 4. Visual elements to add (lower priority)

- **Real "from the aldea" photo placeholders**: stylized cards with a colored gradient + icon that says "Foto: María, 9 años, aldea Asunción. [Foto pendiente de sustitución]". When the org adopts, they replace with real photos. ~2 hrs.
- **A handwritten-style quote**: SVG with handwriting-style font. Use for story quotes. ~1 hr.
- **A "letter from a mother SOS" section**: fictional but warm letter from a house mother. ~2 hrs.

These are nice-to-have, not must-have.

---

## 5. What I'd recommend doing now

The 9 changes above are ranked by impact:

| # | Change | Effort | Impact |
|---|---|---|---|
| 7 | Acknowledge scandal | 30 min | **High** (credibility) |
| 1 | Faces hero block | 30 min | High |
| 4 | Concrete impact figures | 30 min | **High** (donor trust) |
| 9 | Direct contact in footer | 10 min | Medium |
| 6 | "Today at Aldea SOS" widget | 1 hr | High |
| 2 | Specific story hook on donate | 20 min | Medium |
| 8 | Paraguay-specific Spanish audit | 1 hr | Medium |
| 3 | First-person quotes on stories | 1 hr | Medium |
| 5 | Named staff/villages on programs | 20 min | Low |

**Total: ~5 hrs of work. Net result: a site that feels like real people.**

I'd start with #7, #4, #9 (highest impact, lowest effort, ~1.5 hrs) and see how the site feels after that.

The visual elements (#4 in section 4) are optional polish. Skip for v1.

---

## 6. What this is NOT

This plan does not propose:

- ❌ Adding real photos we don't have rights to. The site stays text-and-color-driven.
- ❌ Changing the existing fictional stories. They're already labeled as illustrative.
- ❌ Removing any of the demo disclaimers or the yellow banner. Transparency stays.
- ❌ Pretending the org has endorsed this site.

This plan only **adds texture** to make the demo feel more like a real org's site.

---

*Drafted 2026-08-22. Awaiting decision on which changes to execute.*
