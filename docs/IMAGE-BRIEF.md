# Image Brief — Photography for the New Site

> Goal: replace placeholder pottery images (currently `pic01.jpg` – `pic11.jpg` and `banner.jpg`) with a cohesive, high-quality set shot for the new design.

---

## General specs

| Spec | Value |
|---|---|
| **Longest edge** | ≥ 2400 px (hero) / ≥ 1600 px (work) |
| **Color space** | sRGB |
| **Format** | JPEG (sRGB, q85+) and WebP (q80) |
| **Aspect ratios** | Hero: 3:2. Work cards: 4:5. Collection cover: 4:3. Portrait: 4:5. Process: 4:3. |
| **Lighting** | Soft, diffused natural light. Avoid direct sun and harsh shadows. |
| **Backdrop** | Neutral, warm off-white (bisque / cream) seamless paper. Avoid busy surfaces. |
| **Style** | Minimal, calm, editorial. Less is more. |

---

## Required shots

### 1. Hero — `_images/hero.jpg` (used in `index.md`)
- Wide shot of finished work, ideally 2–3 pieces grouped
- Tall objects (vases) work well at this aspect
- Lots of negative space; warm background

### 2. Studio portrait — `_images/portrait.jpg` (used in `about.md`)
- Anna at the wheel or at the bench
- 3/4 or side lighting, candid feel
- Hands + wheel + a piece in progress is a strong image

### 3. Work — 8–12 pieces, one shot each
Naming: `work-<slug>-<palette>.jpg`
- One per featured piece (mug, vase, planter, bowl, etc.)
- Soft top-front lighting, slight off-center framing
- Single piece per frame, on the bisque backdrop
- 4:5 aspect

### 4. Collection cover — 6 images, one per collection
Naming: `collection-<slug>.jpg`
- Wider, lifestyle-style: a couple of pieces grouped, perhaps with a stem or simple prop
- 4:3 aspect

### 5. Process — 6 images, one per step
Naming: `process-<NN>-<step>.jpg` (e.g., `process-01-wedging.jpg`)
- 01 wedging · 02 throwing · 03 trimming · 04 drying · 05 glazing · 06 firing
- Authentic, in-progress shots; hands visible
- 4:3 aspect

### 6. Studio wide — `_images/studio-wide.jpg`
- One wide shot of the studio interior (wheel, shelves, kiln if visible)
- Useful for the About page or future Journal posts

---

## Color & tone guidance

- The new design uses a warm bisque background (`#FAF7F2`) and a clay/terracotta accent (`#8B5E3C`). Photography should sit naturally in this palette.
- Avoid pure black backgrounds. Deepest shadow should be a warm charcoal (`#2A2622`), not neutral black.
- Pastel pottery (pinks, mints, lavenders, yellows) should remain legible — avoid underexposing whites.
- Glaze variation and texture (speckles, satin matte, brush strokes) is the brand — keep it visible.

---

## File delivery

Drop the finished JPEGs into `assets/images/_new/` (a directory the new site build will read from). A follow-up pass will rename and generate responsive `srcset` variants (640 / 1024 / 1600 / 2400).

If shooting in batches, prioritize in this order:
1. **Hero (1 shot)** — highest-impact
2. **Work shots (8)** — populate the homepage and Work page
3. **Portrait (1)** — the About page
4. **Process (6)** — the Process page
5. **Collection covers (6)** — the Collections grid
6. **Studio wide (1)** — for future use

---

## Quick checklist before delivery

- [ ] Longest edge ≥ spec
- [ ] sRGB color space
- [ ] No copyrighted music/branding visible
- [ ] Pieces are clean (no dust, fingerprints, sticker residue)
- [ ] Background is consistent
- [ ] Files renamed according to convention above
