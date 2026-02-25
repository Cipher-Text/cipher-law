# Roadmap

---

## Phase 1 — Foundation (complete)

- [x] Astro 5 project with TypeScript strict mode
- [x] Three layout types: Advocate, Chamber, Firm
- [x] Bilingual routing (`/en/` and `/bn/`) with language toggle
- [x] Zod schema validation for all content collections
- [x] 19 reusable Astro components
- [x] Dark + gold design system with CSS custom properties
- [x] Directory home pages with client-side search (data-* attributes, no JS framework)
- [x] Demo content for all three profile types in English and Bengali
- [x] Lookup reference data: districts, courts, thanas, practice areas in `src/data/`
- [x] SEO component: canonical, hreflang alternates, JSON-LD structured data
- [x] Three-tier verification badge system
- [x] GitHub Actions CI/CD pipeline → GitHub Pages
- [x] `base: '/cipher-law'` configured for GitHub Pages sub-path
- [x] All internal paths use `import.meta.env.BASE_URL` — no hardcoded `/en/` strings

---

## Phase 2 — Content & polish

- [ ] Expand lookup data to all 64 Bangladesh districts
- [ ] Expand courts to cover major courts nationwide
- [ ] Expand thanas to all major urban areas
- [ ] Photo / image support for team members and partners
- [ ] FAQ accordion section per profile
- [ ] QR code generation (links to the profile URL)
- [ ] vCard download (`.vcf` from contact data)
- [ ] Custom 404 page matching the design system
- [ ] XML sitemap (`/sitemap.xml`) for SEO
- [ ] Print stylesheet for clean profile printing
- [ ] WCAG 2.1 AA accessibility audit (ARIA labels, keyboard navigation, colour contrast)
- [ ] Open Graph social sharing images per profile
- [ ] `public/robots.txt` and `public/favicon.ico`

---

## Phase 3 — Dynamic features

These require migrating from static to Astro hybrid/SSR mode with a database backend.

- [ ] Admin dashboard for profile management and verification
- [ ] Self-service profile editor (authenticated profile owners)
- [ ] Authentication system
- [ ] Payment integration: bKash, Nagad, SSLCommerz
- [ ] Verification workflow: document upload → review → approve
- [ ] Profile analytics: page views, contact clicks
- [ ] Contact form with email delivery
- [ ] Appointment / consultation booking
- [ ] Client reviews and ratings

---

## Phase 4 — Scale

- [ ] Full-text search (Algolia or Meilisearch)
- [ ] Interactive map view (district / thana filtering with pins)
- [ ] Legal blog / news section
- [ ] Lawyer comparison tool
- [ ] Consultation marketplace
- [ ] Mobile app (PWA or React Native)
- [ ] Public API for profile data
- [ ] White-label sites for large firms
- [ ] Multi-country expansion (India, Pakistan, Myanmar)

---

## Technical debt

- [ ] Replace `any` TypeScript types in layout files with proper interfaces
- [ ] Extract duplicated home page logic from `en/index.astro` and `bn/index.astro` into a shared component
- [ ] Add Playwright end-to-end tests for built output
- [ ] Add content linting step to CI (validate frontmatter in pull requests, not just on merge)
- [ ] Bundle size monitoring

---

## Migration path (Phase 2 → Phase 3)

When dynamic features are needed:

1. Add `output: 'hybrid'` to `astro.config.mjs`
2. Add a database adapter (Astro DB, Supabase, or similar)
3. Convert admin-facing routes to server-rendered endpoints
4. Keep all profile pages as static pre-rendered routes
5. Only the management and auth layer needs SSR — profiles stay fast

No framework migration is needed. Astro supports hybrid rendering natively.
