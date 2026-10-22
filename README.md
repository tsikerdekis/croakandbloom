# Croak and Bloom

Portfolio and shop site for **Croak and Bloom**, a small-batch pottery studio by
ceramic artist Anna Poupa in Bellingham, Washington.

Live at <https://new.croakandbloom.com>.

## Stack

| Layer | Technology |
|---|---|
| Static site generator | Jekyll 4.4 |
| Styling | SASS compiled by `jekyll-sass-converter` |
| JavaScript | Vanilla JS (`assets/js/site.js`), no dependencies |
| Forms | Formspree |
| SEO | `jekyll-seo-tag`, `jekyll-sitemap`, JSON-LD |
| Deployment | GitHub Actions → GitHub Pages |

## Local development

```bash
bundle install
bundle exec jekyll serve    # http://localhost:4000
bundle exec jekyll build    # production build → _site/
```

`Gemfile.lock` is committed so the build is reproducible; do not add it to
`.gitignore`.

## Content

| What | Where |
|---|---|
| Work pieces | `_works/` (layout `work-detail`, permalink `/work/:path/`) |
| Collections | `_collections_dir/` (layout `collection-detail`, `/collections/:path/`) |
| Journal posts | `_journal/` (layout `journal-detail`, `/journal/:path/`) |
| Standalone pages | `index.md`, `about.md`, `work.md`, `collections.md`, `process.md`, `contact.md` |

Images live in `assets/images/`. Photography specs are documented in
[`docs/IMAGE-BRIEF.md`](docs/IMAGE-BRIEF.md).

## Deployment

Pushing to `master` triggers `.github/workflows/github-pages.yml`, which builds
the site and deploys `_site/` to GitHub Pages. Pages is configured for the
GitHub Actions build type with the custom domain in `CNAME`.

Files listed under `exclude` in `_config.yml` are kept out of the published
build. Keep internal tooling, scratch files, and notes on that list.

## Credits

Design adapted from the **Forty** theme by [HTML5 UP](https://html5up.net/)
(`@ajlkn`), used under the
[Creative Commons Attribution 3.0 license](https://html5up.net/license).
Theme license text is retained in [`LICENSE.md`](LICENSE.md).
