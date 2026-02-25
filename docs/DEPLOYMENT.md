# Deployment

Cipher Law is deployed to GitHub Pages via GitHub Actions. Every push to `main` triggers an automated build and deployment.

---

## Live site

```
https://cipher-text.github.io/cipher-law/
```

---

## How it works

The workflow at `.github/workflows/deploy.yml`:

1. Checks out the repository
2. Sets up Node 20 with npm cache
3. Runs `npm install` and `npm run build`
4. Uploads `/dist` as a GitHub Pages artifact
5. Deploys the artifact to GitHub Pages

The process takes under 2 minutes. Once pushed to `main`, the live site updates automatically.

---

## Workflow file

```yaml
name: Deploy Astro to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install deps
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## First-time GitHub Pages setup

If you fork this repo or set it up fresh:

1. Go to the repository **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the first deployment runs automatically

No further configuration needed. `astro.config.mjs` is already set up:

```js
export default defineConfig({
  site: 'https://cipher-text.github.io',
  base: '/cipher-law',
});
```

---

## Custom domain

To serve the site from a custom domain (e.g., `cipher-law.com.bd`):

**1.** Add a `CNAME` file to the `public/` folder:
```
cipher-law.com.bd
```

**2.** Configure DNS at your registrar:
```
@ CNAME cipher-text.github.io
```
For apex domains, use GitHub's IP addresses (see GitHub Pages documentation).

**3.** In repository **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS**.

**4.** Update `astro.config.mjs` — remove `base` and update `site`:
```js
export default defineConfig({
  site: 'https://cipher-law.com.bd',
});
```

With a custom domain the site lives at the root, so the `/cipher-law/` base prefix is no longer needed. All `import.meta.env.BASE_URL` references in the source will resolve to `/` automatically.

---

## Alternative hosting

The `/dist` output is standard static HTML/CSS/JS and works on any static host.

### Netlify

Connect the GitHub repo in the Netlify dashboard:
- Build command: `npm run build`
- Publish directory: `dist`

Remove `base` from `astro.config.mjs` and update `site` to your Netlify URL.

### Cloudflare Pages

Connect the GitHub repo in the Cloudflare Pages dashboard:
- Build command: `npm run build`
- Build output directory: `dist`

Cloudflare Pages offers unlimited bandwidth on the free tier.

### Manual

```bash
npm run build
# Upload /dist to any web server or CDN
```

---

## Content deployment workflow

```
Edit a .md file in src/content/
        ↓
git add  →  git commit  →  git push origin main
        ↓
GitHub Actions: install → build (Zod validates all frontmatter)
        ↓
Build passes → deploys to GitHub Pages (~60 seconds total)
        ↓
Live at https://cipher-text.github.io/cipher-law/
```

If the build fails (e.g., invalid frontmatter), GitHub Actions reports the error and the previous version stays live.

---

## Build validation

Run locally before pushing to catch errors early:

```bash
npm run build
```

A successful build outputs:

```
[build] output: "static"
[build] 9 page(s) built in ~4s
[build] Complete!
```

Each `.md` file in `src/content/` generates one HTML page. A Zod schema error prints the field name and the validation failure.

---

## Environment variables

None required. The site URL and base path are set in `astro.config.mjs`. Future phases may need:

| Variable | Phase | Purpose |
|----------|-------|---------|
| `SUPABASE_URL` | 3 | Database connection |
| `SUPABASE_KEY` | 3 | Database auth |
| `BKASH_API_KEY` | 3 | Payment processing |
| `SSLCOMMERZ_STORE_ID` | 3 | Payment processing |

---

## Performance targets

| Metric | Target |
|--------|--------|
| Lighthouse score | 95+ |
| First Contentful Paint | < 1.5s |
| Total Blocking Time | < 200ms |
| Cumulative Layout Shift | < 0.1 |
| Build time | < 30s |
