# Deployment Guide

## Current Setup

Static site — output is plain HTML/CSS/JS in `/dist/`. No server runtime required.

```bash
npm run build    # generates /dist/
```

## Hosting Options

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

- Zero config for Astro
- Automatic HTTPS
- Preview deployments per branch/PR
- Free tier: 100GB bandwidth, unlimited sites
- Bangladesh CDN edge locations

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

- Build command: `npm run build`
- Publish directory: `dist`
- Free tier: 100GB bandwidth, 300 build minutes/month

### GitHub Pages

In `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://username.github.io',
  base: '/cipher-law',
});
```

Deploy via GitHub Actions (see CI/CD section below).

### Cloudflare Pages

- Connect GitHub repo
- Build command: `npm run build`
- Output directory: `dist`
- Free tier: unlimited bandwidth

## Domain Setup

### Recommended Domains
- `cipher-law.com` or `cipherlaw.com`
- `cipher-law.com.bd` (Bangladesh ccTLD)
- Custom `.law` TLD if available

### DNS Configuration
Point domain to hosting provider:
- **Vercel:** Add CNAME to `cname.vercel-dns.com`
- **Netlify:** Add CNAME to `[site].netlify.app`
- **Cloudflare Pages:** Add CNAME to `[project].pages.dev`

SSL is automatic with all providers above.

## CI/CD Pipeline (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run build

      # Vercel
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Build Validation Step (Optional)

```yaml
      - name: Check build output
        run: |
          test -d dist
          test -f dist/index.html
          echo "Build successful: $(find dist -name '*.html' | wc -l) pages generated"
```

## Environment Variables

Currently none required. Future phases may need:

| Variable | Phase | Purpose |
|----------|-------|---------|
| `SITE_URL` | 2+ | Canonical URL for SEO |
| `SUPABASE_URL` | 3 | Database connection |
| `SUPABASE_KEY` | 3 | Database auth |
| `BKASH_API_KEY` | 3 | Payment processing |
| `SSLCOMMERZ_STORE_ID` | 3 | Payment processing |

## Content Deployment Workflow

Since content is in markdown files, the deployment flow is:

```
1. Create/edit .md file in src/content/{lang}_{type}/
2. Run `npm run build` locally to validate
3. Commit and push to main
4. CI builds and deploys automatically
5. New profile is live in ~60 seconds
```

## Performance Targets

| Metric | Target | How |
|--------|--------|-----|
| Lighthouse Performance | 95+ | Static HTML, minimal JS |
| First Contentful Paint | < 1.5s | No blocking resources |
| Total Blocking Time | < 200ms | Zero client framework JS |
| CLS | < 0.1 | No layout shifts (no dynamic content) |
| Build time | < 30s | Astro is fast; few pages currently |

## Monitoring

- **Uptime:** Use free tier of UptimeRobot or Better Stack
- **Analytics:** Plausible or Umami (privacy-friendly, no cookie banner needed)
- **Error tracking:** Not critical for static site; add Sentry if dynamic features added
