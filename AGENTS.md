# Croak and Bloom — Agent Guidelines

## Project Overview

Personal portfolio and e-commerce website for **Croak and Bloom**, a small-batch pottery studio by ceramic artist Anna Poupa in Bellingham, Washington. Built as a static Jekyll site deployed to `new.croakandbloom.com`.

## Tech Stack

| Layer | Technology |
|---|---|
| Static site generator | Jekyll 4.4 |
| Styling | SASS → CSS via `jekyll-sass-converter` |
| JavaScript | Vanilla JS, ~2.5kb, no dependencies |
| Forms | Formspree.io (contact + newsletter) |
| SEO | `jekyll-seo-tag`, `jekyll-sitemap`, JSON-LD structured data |
| Fonts | Google Fonts (Cormorant Garamond, Inter) + local @font-face (Breathing) |
| CI/CD | GitLab CI |
| Package manager | Bundler (Ruby/Gemfile), no Node/npm |

## Content Structure

### Collections (in `_config.yml`)

| Collection | Directory | Layout | Permalink | Purpose |
|---|---|---|---|---|
| `works` | `_works/` | `work-detail` | `/work/:path/` | Individual pottery pieces |
| `collections_dir` | `_collections_dir/` | `collection-detail` | `/collections/:path/` | Category groupings (mugs, vases, etc.) |
| `journal` | `_journal/` | `journal-detail` | `/journal/:path/` | Blog posts (currently empty) |

### Static Pages

| Page | Layout | Key Front Matter |
|---|---|---|
| `index.md` | `home` | `image`, `hero-title`, `hero-sub` |
| `about.md` | `page` | `eyebrow`, `image` |
| `work.md` | `work-index` | — |
| `collections.md` | `collection-index` | — |
| `process.md` | `process` | `steps[]`, `intro`, `image` |
| `contact.md` | `page` | `eyebrow` |

### Adding New Content

**New work piece** — create markdown in `_works/` with front matter:
```yaml
---
title: Piece Name
category: Collection Category
materials: Clay type, glaze
dimensions: W × H · capacity
year: 2024
image: /assets/images/picXX.jpg
alt: Accessible description
order: 1
featured: true
etsy_url: https://www.etsy.com/...
---
```

**New collection** — create markdown in `_collections_dir/`:
```yaml
---
title: Collection Name
summary: Brief description
image: /assets/images/...
---
```

**New process step** — add to `process.md` `steps` array:
```yaml
  - title: Step Name
    image: /assets/images/process-XX-name.jpg
    alt: Accessible description
    description: Explanation text
```

## Design System

### Color Palette (CSS Custom Properties)

Warm, earthy "bisque / clay" palette. Defined in `_sass/_tokens.scss`.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAF7F2` | Page background (warm off-white) |
| `--bg-alt` | `#F1ECE3` | Alt sections, header band |
| `--ink` | `#1A1714` | Headings on light bg |
| `--fg` | `#2A2622` | Body text |
| `--accent` | `#8B5E3C` | Clay/terracotta, primary actions |
| `--accent-soft` | `#C89B7B` | Hover states, secondary |
| `--bg-inv` | `#1F1B16` | Dark/inverted sections |
| `--fg-inv` | `#F1ECE3` | Text on dark bg |

### Typography

| Role | Font | Weights |
|---|---|---|
| Display (headings) | Cormorant Garamond | 400, 500, 600, italic |
| Body | Inter | 400, 500, 600 |
| Decorative | Breathing (local) | 400 |
| Mono | System monospace stack | 400 |

Scale uses 1.333 modular ratio. Headings use `clamp()` for responsive sizing.

### Spacing

8pt grid via `--space-1` (4px) through `--space-10` (128px). Use utility classes like `mt-4`, `py-8`, `gap-6`.

### Component Classes

Key composables — all defined in `_sass/` partials:

- `.btn`, `.btn--accent`, `.btn--solid`, `.btn--link`, `.btn--small`, `.btn--block`
- `.section`, `.section--alt`, `.section--ink`, `.section--tight`, `.section--loose`
- `.container`, `.split`, `.split--narrow`, `.split--wide`
- `.work-card`, `.work-grid`, `.work-grid__item`
- `.figure`, `.prose`, `.eyebrow`, `.lead`
- `.grid-2`, `.grid-3`, `.flex`, `.flex-center`, `.flex-between`
- `.sr-only`, `.skip-link`, `.uppercase`, `.muted`, `.text-center`
- `.form`, `.field`, `.form__row--2`
- `.filter`, `.filter__chip`
- `.lightbox`

## Layout Architecture

All layouts extend `_layouts/default.html`, which provides:
- `<html lang="en-US">` document shell
- Skip-to-content link
- `{% include header.html %}` — sticky header with nav + mobile drawer
- `<main id="main" role="main">` — content slot
- `{% include footer.html %}` — 4-column footer with newsletter, social, links

`_includes/head.html` handles: meta tags, OG/Twitter cards, canonical URLs, JSON-LD (Person/Organization/WebSite/VisualArtwork), font preloading, stylesheet link.

## JavaScript (vanilla, `_assets/js/site.js`)

Five independent modules, no framework:
1. **Mobile nav toggle** — aria-expanded, focus trapping, Escape to close
2. **Work grid filter** — data-filter chips filter `.work-grid__item` by `data-collection`
3. **Lightbox** — triggered by `[data-lightbox]`, focus restoration, Escape to close
4. **Smooth scroll** — in-page anchor links
5. **Nav current-state** — marks active nav link based on URL path

## Accessibility

- Skip-to-content link, semantic landmarks (`banner`, `main`, `contentinfo`)
- `aria-current="page"` on active nav, `aria-label` on all nav regions
- `prefers-reduced-motion` kills all transitions/animations
- `:focus-visible` outline with accent color
- `role="list"` + `ul[role="list"]` removes list styling where appropriate
- `.sr-only` for visually hidden labels
- `data-open` attribute pattern for state-driven visibility

## SEO & Meta

- Page-level `title`, `description`, `image` in front matter
- Open Graph + Twitter Card meta in `_includes/head.html`
- JSON-LD: Person (artist), Organization, WebSite, VisualArtwork (per work piece)
- Sitemap via `jekyll-sitemap`
- Canonical URLs, `robots.txt`
- `manifest.webmanifest` for PWA basics
- CNAME → `new.croakandbloom.com`

## Build & Run

```bash
bundle install
bundle exec jekyll serve          # local dev server
bundle exec jekyll build          # production build → _site/
```

SASS is compiled and minified (`style: compressed`) by the Jekyll plugin. No separate build step needed.

## Conventions

- Use `{%- comment -%}` (whitespace-control) for Liquid comments
- Prefer `{% include %}` for reusable components (header, footer, work-card, lightbox)
- Use `relative_url` filter for all asset/permalink paths
- Keep inline styles minimal; prefer utility classes or `_sass/_components.scss`
- Image filenames follow `picXX.jpg` pattern for photos, `process-XX-name.jpg` for process steps
- Add `alt` text to all images; required for both accessibility and SEO
- Exclude development files in `_config.yml` `exclude` list before deploying

## Copywriting

- **No mid-sentence em dashes (—) in user-facing copy.** Use a comma, or split
  into two sentences. En dashes in ranges (`2400–1600`, `4 × 3.5 in`) and em dashes
  inside code comments are fine.
