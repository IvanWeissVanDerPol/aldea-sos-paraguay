# Maintainers — Aldea SOS Paraguay demo

For whoever keeps the lights on. Assumes basic familiarity with HTML, CSS, JavaScript, GitHub, and static sites.

## Daily operations

### Update the demo banner
File: every `public/*/index.html` and `public/index.html`.

The banner HTML is identical across pages. To change it site-wide:

```bash
# Update one file
edit public/index.html

# Then copy the banner block to every other page
# (script not yet written — do manually for now, ~12 files)
```

Future improvement: lift the banner into a small JS injection that adds it to every page on load. Trivial; not done yet because the demo currently has no build step.

### Add a news post
1. Add the post object to `public/data/news.json`.
2. Run `python /opt/data/scratchpad/gen_news.py` from the repo root.
3. The script generates `public/noticias/<post-id>/index.html` and updates `public/noticias/index.html`.
4. Commit and push.

### Add a story
1. Add the story object to `public/data/stories.json` (the `_warning` field reminds you it's fictional).
2. Create `public/historias/<story-id>/index.html` by copying an existing one and updating the content.
3. Update `public/historias/index.html` to add the new card.
4. Commit and push.

### Update the aldeas table
Edit `public/data/aldeas.json`. The `/sobre-nosotros/` table populates from this file on page load.

### Update programs
Edit `public/data/programs.json`. The `/programs/` page lists them inline.

### Update the sitemap
Run a small script to crawl `public/` and generate `public/sitemap.xml`. There's no script checked in; do it inline:

```python
from pathlib import Path
# see the generator in this conversation; copy if needed
```

### Change the theme colors
File: `public/css/style.css`, top section, `:root { --c-primary: #...; ... }`. The whole theme is driven by these tokens.

## Deploy

```bash
git add -A
git commit -m "Your message here"
git push origin main
```

GitHub Actions deploys within ~30 seconds. Watch the run at `https://github.com/IvanWeissVanDerPol/aldea-sos-paraguay/actions`.

## Debugging

### A page is broken
1. Check `public/<page>/index.html` — the most common issues are:
   - Missing `<!DOCTYPE html>` declaration
   - Unclosed tags (`<div>...</p>` mismatches)
   - Wrong path in `href` or `src` (check `/public/` structure)
2. Hard-refresh the browser (Cmd+Shift+R) — GitHub Pages caches aggressively.

### A form doesn't work
1. Open the browser console.
2. Check if `Demo.submit` is defined. If not, `js/demo.js` failed to load. Check that every page includes `<script src="/js/demo.js" defer></script>` near the end of `<head>`.
3. Check that form inputs have `name="..."` attributes — `Demo.submit` reads from `FormData`.

### Theme toggle doesn't work
- Check that `<button class="theme-toggle">` exists in the nav.
- Check that `theme-toggle` is bound: `Demo.boot()` attaches the listener on `DOMContentLoaded`.

### Search returns nothing
- `Demo.search` loads `/data/*.json`. If a file fails to fetch, its entries are silently skipped. Check browser console for fetch errors.
- The demo's search is substring-match, not fuzzy. Misspellings return nothing.

## Common tasks

### Adding a new section
1. Create `public/<section-name>/index.html`.
2. Copy the canonical header and footer from any existing page.
3. Add a `<li>` link to the footer's "Navegación" list on every existing page.
4. Add the section to the sitemap generator.
5. Update the demo banner link if appropriate (it currently always points to aldeasinfantiles.org.py — leave as-is unless the org adopts).

### Adding a new data file
1. Add the JSON file to `public/data/`.
2. If pages should consume it, either inline the data or fetch it (see `/sobre-nosotros/` for the fetch pattern).
3. Add a header comment at the top of the JSON noting the source and any "this is demo data" caveats.

### Updating an existing form's fields
1. Find the form in the page.
2. Update fields and validation rules.
3. Update the `submit` handler if the data shape changes.

## When the org takes over

These things will need to change:

1. **Domain** — `aldea-sos.paragu-ai.com` redirects to whatever the org picks.
2. **Demo banner** — removed or replaced with the org's own banner.
3. **JS framework** — `Demo.submit` replaced with real fetch calls to the org's backend. See `docs/INTEGRATIONS.md`.
4. **Auth** — localStorage replaced with real auth (Auth0, Clerk, Supabase, etc.).
5. **CSS tokens** — updated to match the org's brand.
6. **Content** — every page's copy reviewed and approved by the org's communications team.
7. **Repo** — moved to the org's GitHub organization. Contributors become the org's team.