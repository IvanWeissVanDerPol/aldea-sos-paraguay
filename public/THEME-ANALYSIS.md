# Theme Analysis & Update Plan

**Date:** 2026-08-22
**For:** Aldea SOS Paraguay demo redesign
**Trigger:** User reports current theme is "too dark" and wants a complete theme audit + update plan

---

## 1. The Problem

The current theme uses a heavy dark navy as the dominant brand color:

```css
--c-primary: #0066B3;        /* navy blue */
--c-primary-dark: #004C82;   /* darker navy */
--c-primary-light: #4DB8FF;  /* light blue */
--c-bg: #FFFFFF;             /* light background */
--c-bg-alt: #F5F5F5;         /* off-white */
--c-text: #1A1A1A;           /* near-black text */
```

**What's wrong with this:**
1. **It's not actually the org's brand color.** The live aldeasinfantiles.org.py uses **#009EE0 / #00A7E4 / #129BF4** — a brighter, more vibrant cyan-blue. Our `#0066B3` is darker and more corporate-feeling.
2. **The contrast against orange accent feels off.** The orange (`#F4A100`) was chosen as a complementary accent but the navy + orange combination reads as "logistics company" not "children's welfare NGO."
3. **No real warmth.** Children's welfare orgs typically use a warmer primary or a warmer accent combination. Our combination reads cold.
4. **The dark mode toggle adds complexity** that may not be needed if the default theme is well-designed for daylight reading.

## 2. What SOS Children's Villages Paraguay Actually Uses

From the scraped home page (`evidence/aios_py_home.html`):

| Color | Use |
|---|---|
| **#009EE0** | Primary brand — top nav, links, buttons |
| **#00A7E4** | Secondary blue — accents, hover states |
| **#129BF4** | Tertiary blue — gradients, highlights |
| **#FFFFFF** | Background |
| **#000000–#333333** | Body text |

**Pattern:** a single hue (cyan-blue) used in 3 lightness variants. No secondary accent color. Clean, monochrome-with-shades approach.

## 3. What the Global SOS Children's Villages Brand Says

Even though the Paraguay site is autonomous, the international federation has published brand guidelines that member organizations typically follow:

- **Primary SOS Blue:** close to `#0099D4` (their published PMS-equivalent)
- **Secondary colors:** warm sand/yellow tones for warmth (PMS 7409 / `#F5C700`-ish)
- **Photography over illustration** — children, families, real places, not stylized
- **Rounded, friendly typography** — not sharp geometric

The international brand is **warmer and more humane** than our current navy + orange. Our orange accent (`#F4A100`) is in the right hue family but the saturation makes it feel "construction worker" rather than "children's advocate."

## 4. What the Current Logo Says

Our `logo.svg` uses `#F4A100` (orange) as the background and `#1A1A1A` (near-black) for the "A" letter. This was a placeholder logo, not the official mark.

If we're redesigning the theme, the logo color should change to match the new palette.

## 5. Recommended New Theme

### Core palette (light-mode-first, no dark mode needed)

| Token | Old value | New value | Rationale |
|---|---|---|---|
| `--c-primary` | `#0066B3` (navy) | **`#0099D4`** (SOS cyan-blue) | Matches the org's actual site color |
| `--c-primary-dark` | `#004C82` | **`#0078A6`** | Hover state, deeper than primary but not navy |
| `--c-primary-light` | `#4DB8FF` | **`#7CCDE6`** | Tints, hover backgrounds |
| `--c-accent` | `#F4A100` (orange) | **`#F5C700`** (SOS warm yellow) | Warmer, more humane, matches international SOS brand |
| `--c-accent-dark` | `#C57F00` | **`#D9AC00`** | Hover/pressed state |
| `--c-text` | `#1A1A1A` | **`#1F2937`** | Slightly softer than near-black, easier on eyes |
| `--c-text-muted` | `#595959` | **`#5B6573`** | Warmer than pure gray |
| `--c-bg` | `#FFFFFF` | **`#FAFBFC`** | Not pure white — easier on eyes, looks "designed" |
| `--c-bg-alt` | `#F5F5F5` | **`#F0F4F8`** | Subtle blue-tinted background |
| `--c-border` | `#E0E0E0` | **`#E5EAF0`** | Subtle blue-tinted border |

### Status colors (add these — currently missing)

| Token | Value | Use |
|---|---|---|
| `--c-success` | `#16A34A` | Confirmation messages, success states |
| `--c-warning` | `#D97706` | Warning panels (already used inline) |
| `--c-danger` | `#DC2626` | Error states, destructive actions |

### Accent pairings (semantic, not decorative)

The current code uses color decorators on cards (aldea-tag, news-category, etc.) that mostly look the same. With the new palette we can give each section its own subtle accent:

| Section | Accent | Use |
|---|---|---|
| Donations / programs | SOS cyan-blue (primary) | Default brand |
| Stories / personal | Warm yellow (accent) | Human stories |
| News / announcements | SOS cyan-blue | Neutral, brand-aligned |
| Transparency / audit | Cool gray | Trust, formality |
| Press / media | Warm yellow | Engagement |

### Dark mode — recommendation: REMOVE

The toggle is currently in every page's nav. My recommendation:

**Remove the dark mode toggle entirely.** Reasons:
- The new palette is calibrated for daylight reading. A dark variant would need to be redesigned from scratch.
- Adds complexity to every page (`data-theme="dark"` overrides, body class, JS state).
- For a children's welfare org, the daytime clarity of the light theme is more appropriate than a "developer chic" dark mode.
- One less thing for the org to maintain when they take over.

If you absolutely want to keep dark mode, I'll design a proper one (not just invert). But for the v1 redesign, light-only is cleaner.

## 6. The Complete Update Plan

This is a 7-step plan, ordered by impact and dependency.

### Step 1: Define the new tokens (1 hour)

Edit `public/css/style.css` `:root` block with the new values above. Add status colors. Remove `--c-bg-alt` hue tint to match.

Add a comment block at the top of the CSS documenting the palette and its rationale.

### Step 2: Regenerate the logo SVG (30 min)

Replace `public/assets/logo.svg` with a new version using:
- Background: `#0099D4` (SOS cyan-blue)
- Letter "A": `#FFFFFF` (white) for highest contrast

This matches the new palette and is consistent with international SOS brand.

### Step 3: Regenerate the Open Graph image (1 hour)

Replace `public/assets/og-default.png` with a 1200×630 image that:
- Uses the new SOS cyan-blue as background
- Shows "Aldea SOS Paraguay" + tagline in white
- Includes the new logo

Use PIL (already used for the receipt PDF) to generate this programmatically so it's reproducible.

### Step 4: Audit and fix hardcoded colors (2 hours)

Many HTML pages have inline styles with the OLD primary color (`#0066B3`). Find and replace all of them:

```bash
grep -rln '#0066B3\|#004C82\|#4DB8FF\|#F4A100\|#FFD966\|#C57F00' public/
```

Each file needs a careful review (some color uses are intentional — e.g., warning panel backgrounds). Most can be replaced with the new tokens.

### Step 5: Update `theme-color` meta tag (15 min)

The `<meta name="theme-color">` tag in every page header tells mobile browsers what color to paint the address bar. Change from `#0066B3` to `#0099D4` across all 60 HTML files.

### Step 6: Remove dark mode (1 hour)

- Remove the `🌙` button from every nav
- Remove the dark mode CSS overrides from `style.css`
- Remove the `Demo.theme` JS code from `demo.js`
- Update `localStorage` keys (or just leave them — they'll be unused)

### Step 7: Verify and screenshot (1 hour)

- Run the full live site through Lighthouse (need a browser; might require your machine)
- Visually inspect every page
- Take screenshots at desktop and mobile widths
- Update `og-default.png` to match the new look
- Commit and push

**Total estimated time: ~7 hours**

## 7. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| I don't have the org's permission to use their exact brand color | `#0099D4` is close to but not identical to `#009EE0` (the org's site). This is intentional — it suggests "in the family" without claiming identity. |
| Removing dark mode annoys users who liked it | It's a demo. We can always re-add dark mode later if the org wants it. |
| Logo change might not match what the org actually uses | I'll generate a placeholder logo, clearly labeled as such in the SVG comment. The org replaces it when they take over. |
| Page count is high — many files to touch | I'll write a Python script to do bulk find-replace with safety checks (only replace in `style=""` attributes and similar). |
| Inline styles that are page-specific | I'll review each inline style individually. The script handles the systematic replacement; manual review handles the exceptions. |

## 8. What I'd Need From You

To start executing this plan, I need one decision:

**Q: Should we remove dark mode entirely, or keep it (and properly redesign it)?**

- **Option A: Remove dark mode.** Cleaner code, fewer files to touch, light-only is more appropriate for the org's audience. **My recommendation.**
- **Option B: Keep and redesign dark mode.** More work (~3 hrs additional), but serves users who prefer it.

Once you pick, I'll start with Step 1 (token replacement) and work through the rest.

---

*Drafted 2026-08-22. Awaiting decision before execution.*
