# Roadmap & Future Tasks

## Phase 1 — Foundation (Current)

- [x] Astro project setup with TypeScript
- [x] Three layout types (Advocate, Chamber, Firm)
- [x] Bilingual routing (bn/en)
- [x] Zod content validation schemas
- [x] 19 reusable components
- [x] Design system (dark + gold theme)
- [x] Directory listing with client-side search
- [x] Demo content for all three types
- [x] Lookup data (districts, courts, thanas, practice areas)
- [x] SEO component with OpenGraph + structured data
- [x] Verification badge system (3 tiers)

## Phase 2 — Content & Polish

- [ ] **Expand lookup data** — Add all 64 Bangladesh districts, major courts nationwide, all thanas
- [ ] **Photo/image support** — Profile photos, firm logos, gallery section
- [ ] **FAQs section component** — Per-profile FAQ accordion
- [ ] **QR code generation** — Auto-generate QR linking to profile
- [ ] **vCard download** — Generate .vcf file from contact data
- [ ] **404 page** — Custom not-found page matching design system
- [ ] **Sitemap generation** — Auto XML sitemap for SEO
- [ ] **RSS feed** — For legal news/blog if added
- [ ] **Print stylesheet** — Clean print layout for profiles
- [ ] **Accessibility audit** — WCAG 2.1 AA compliance, ARIA labels, keyboard navigation
- [ ] **Performance optimization** — Image optimization, critical CSS, lazy loading
- [ ] **Social sharing** — OpenGraph images auto-generated per profile

## Phase 3 — Dynamic Features

- [ ] **Admin dashboard** — Manage profiles, verifications, billing
- [ ] **Self-service profile editor** — Lawyers create/edit their own profiles
- [ ] **Authentication system** — Login for profile owners and admin
- [ ] **Payment integration** — bKash, Nagad, SSLCommerz for subscriptions
- [ ] **Verification workflow** — Submit → Review → Approve pipeline
- [ ] **Analytics** — Profile views, contact clicks, search appearances
- [ ] **Contact form** — Inquiry form on profiles (store in DB or forward via email)
- [ ] **Appointment booking** — Calendar integration for consultations
- [ ] **Review/rating system** — Client testimonials on profiles

## Phase 4 — Scale & Marketplace

- [ ] **Full-text search** — Server-side search with Algolia or Meilisearch
- [ ] **Map view** — Interactive map of legal professionals by location
- [ ] **Legal blog/news** — Content marketing with Astro content collections
- [ ] **Document templates** — Downloadable legal document templates (paid)
- [ ] **Consultation marketplace** — Online booking + video consultation
- [ ] **Lawyer comparison** — Side-by-side profile comparison tool
- [ ] **Mobile app** — React Native or PWA for client access
- [ ] **API** — Public API for profile data (for integrations)
- [ ] **White-label** — Custom branded sites for large firms
- [ ] **Multi-country expansion** — India, Pakistan, Myanmar legal markets

## Technical Debt & Improvements

- [ ] **Component tests** — Unit tests for Astro components
- [ ] **E2E tests** — Playwright tests for critical user flows
- [ ] **CI/CD pipeline** — GitHub Actions for build + deploy
- [ ] **Content linting** — Validate markdown frontmatter in CI
- [ ] **Bundle analysis** — Monitor CSS/JS size
- [ ] **Error tracking** — Client-side error reporting (Sentry)
- [ ] **Staging environment** — Preview deployments for content review
- [ ] **Image CDN** — Cloudinary or similar for responsive images
- [ ] **CSS refactor** — Extract global.css into component-scoped styles
- [ ] **i18n expansion** — Add more UI string translations as features grow

## Migration Path (Static → Dynamic)

When Phase 3 features require a backend:

```
Current:  Astro (static) → Netlify/Vercel (CDN)

Future:   Astro (hybrid/SSR mode)
          ├── Static pages: profiles, directory (pre-built)
          ├── Server pages: dashboard, editor, auth
          ├── API routes: /api/profiles, /api/auth
          └── Database: PostgreSQL or Supabase
```

Astro supports hybrid rendering — static pages stay fast, dynamic pages get server-side rendering. No framework migration needed.
