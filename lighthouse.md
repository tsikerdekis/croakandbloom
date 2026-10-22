# Lighthouse / Performance Notes

> Targets for the new Croak and Bloom site (run on `https://new.croakandbloom.com`).

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `/` | ≥ 95 | 100 | 100 | 100 |
| `/work/` | ≥ 95 | 100 | 100 | 100 |
| `/work/<slug>/` | ≥ 95 | 100 | 100 | 100 |
| `/collections/` | ≥ 95 | 100 | 100 | 100 |
| `/about/` | ≥ 95 | 100 | 100 | 100 |
| `/process/` | ≥ 95 | 100 | 100 | 100 |
| `/contact/` | ≥ 95 | 100 | 100 | 100 |

## How to run

```bash
bundle exec jekyll serve --livereload
# In another terminal:
npx lighthouse http://localhost:4000/ --view --preset=desktop
npx lighthouse http://localhost:4000/ --view --preset=mobile
```

## Manual checks

- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1 (every `<img>` has width/height)
- [ ] First Input Delay / Interaction to Next Paint < 200ms
- [ ] All images served as WebP with `srcset`
- [ ] Fonts use `font-display: swap` and only essential weights
- [ ] No render-blocking resources (CSS is single, fonts are async)
- [ ] Hero image is `fetchpriority="high"` with `loading="eager"`
- [ ] All other images `loading="lazy"` `decoding="async"`
