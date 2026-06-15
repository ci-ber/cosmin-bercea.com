# cosmin-bercea.com

Personal academic website of **Dr. Cosmin I. Bercea** — Postdoctoral Researcher in
Generative AI & Medical Imaging at the Technical University of Munich (TUM).

The site showcases research areas, publications, CV, talks, and news. It is a static
site built with [Astro](https://astro.build), styled with Tailwind CSS + DaisyUI, and
deployed to GitHub Pages.

🔗 Live: https://cosmin-bercea.com

## Tech stack

- **Astro** — static site generator
- **Tailwind CSS + DaisyUI** — styling and theming (light `cosmin` / dark `cosmin-dark`)
- **React** — interactive islands where needed
- Sitemap + RSS generation

## Local development

Requires the Node version pinned in [`.nvmrc`](.nvmrc).

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
```

## Where the content lives

All site content is data-driven — edit these files, no component changes needed:

| What | File |
| --- | --- |
| Name, title, research areas, social links, SEO | [`src/settings.ts`](src/settings.ts) |
| Experience, education, publications, awards, etc. | [`src/data/cv.ts`](src/data/cv.ts) |
| Research detail pages | [`src/data/research.ts`](src/data/research.ts) |
| News / updates feed | [`src/data/news.ts`](src/data/news.ts) |
| Talks | [`src/data/talks.ts`](src/data/talks.ts) |
| Selected contributions | [`src/data/contributions.ts`](src/data/contributions.ts) |
| Blog posts | [`src/content/BlogPosts/*.md`](src/content/BlogPosts) |
| Legal notice | [`src/pages/impressum.astro`](src/pages/impressum.astro) |

## Deployment

Pushing to the default branch triggers the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site
and deploys it to GitHub Pages.

## Credits

Built on the [Astro Academia](https://github.com/maiobarbero/astro_academia) template
by Matteo Barbero, with substantial customization.
