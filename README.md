# Rise Management & Coaching

A responsive coaching website for Rise Management & Coaching, with distinct writing-coaching and relationship/intimacy-coaching journeys.

## Develop and build

Use Node.js 22 and pnpm 10.18.0. Run `pnpm install --frozen-lockfile` to install dependencies, `pnpm dev:static` for local development, and `pnpm check` for TypeScript checks. `pnpm build:static` builds for a root-hosted deployment. `pnpm build:pages` builds the GitHub Pages project site under `/Risemanagement/`.

The static build is written to `dist/public`. The existing coach URLs `/ashely/` and `/coralie/` are retained. Verified coach portraits are included under `client/public/images/`, so the Pages site does not depend on Manus-managed storage.

## GitHub Pages

To publish the Pages site, set the repository's **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. When the workflow at `.github/workflows/pages.yml` is present on `main` and Pages is configured to use Actions, pushes to `main` build and deploy `dist/public` under `/Risemanagement/`. Without both the Pages setting and that workflow, the repository contains source code but has no live Pages deployment. See [GitHub's custom Pages workflow guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and the official [configure-pages](https://github.com/actions/configure-pages), [upload-pages-artifact](https://github.com/actions/upload-pages-artifact), and [deploy-pages](https://github.com/actions/deploy-pages) action documentation.

Page canonicals and the sitemap remain on the existing `risemanagementandcoaching.com` domain, the intended primary address for the brand site.
