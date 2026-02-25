# Architecture

Cipher Law is a static site with zero server runtime. All pages are generated at build time from markdown files and output as plain HTML/CSS/JS.

---

## System overview

```
src/content/**/*.md       →  Astro Content Collections (validated by Zod)
src/data/*.json           →  Reference data (districts, courts, thanas, practice areas)
src/pages/**/[slug].astro →  getStaticPaths() → one HTML page per profile
src/layouts/*.astro       →  Layout composition per type (Advocate / Chamber / Firm)
src/components/*.astro    →  Shared UI components
                                      ↓
                               /dist/  (static HTML/CSS/JS)
                                      ↓
                          GitHub Pages — cipher-text.github.io/cipher-law/
```

---

## Directory structure

```
src/
├── content/
│   ├── config.ts             # Zod schemas for all collections
│   ├── en_advocates/         # English advocate .md files
│   ├── bn_advocates/         # Bengali advocate .md files
│   ├── en_chambers/
│   ├── bn_chambers/
│   ├── en_firms/
│   └── bn_firms/
├── data/                     # Plain JSON — imported directly, not via content API
│   ├── districts.json
│   ├── courts.json
│   ├── practice-areas.json
│   └── thanas.json
├── components/               # 19 Astro components
├── layouts/
│   ├── BaseLayout.astro      # HTML shell, SeoHead, LanguageToggle
│   ├── AdvocateLayout.astro  # Advocate page composition
│   ├── ChamberLayout.astro   # Chamber page composition
│   └── FirmLayout.astro      # Firm page composition
├── pages/
│   ├── index.astro           # Meta-refresh redirect to /cipher-law/en/
│   ├── en/
│   │   ├── index.astro       # English directory home
│   │   ├── a/[slug].astro    # Advocate profile route
│   │   ├── c/[slug].astro    # Chamber profile route
│   │   └── f/[slug].astro    # Firm profile route
│   └── bn/                   # Mirrors en/ with bn_ collections
├── i18n/strings.ts           # All UI labels in Bengali and English
└── styles/global.css         # CSS custom properties and base styles
```

---

## Component dependency graph

```
BaseLayout
├── SeoHead          ← canonical, hreflang, JSON-LD structured data
└── LanguageToggle   ← switches /en/ ↔ /bn/ preserving slug

AdvocateLayout (wraps BaseLayout)
├── Hero
├── StatsBar
├── ServicesGrid
├── ExpertiseSection
├── CredentialsGrid
├── ContactSection
├── QuickContact
├── VerifiedBadge
└── PremiumFooter

ChamberLayout (wraps BaseLayout)
├── Navbar
├── Hero
├── AboutSection
├── PracticeGrid
├── TeamGrid
├── WhyChooseUs
├── ContactSection
├── QuickContact
└── PremiumFooter

FirmLayout (wraps BaseLayout)
├── Navbar           ← with logo and navLinks
├── Hero
├── StatsBar
├── AboutSection
├── PracticeGrid
├── PartnersGrid
├── WhyChooseUs
├── ContactSection
└── PremiumFooter

Directory home (en/index.astro, bn/index.astro)
├── Navbar
├── CardsGrid        ← client-side search with data-* attributes
└── PremiumFooter
```

---

## Data flow

### Build time

1. Astro reads all `.md` files from the six content collection folders
2. Zod validates each file's frontmatter against the schema in `config.ts` — invalid files fail the build with a descriptive error
3. `getStaticPaths()` in each `[slug].astro` generates one HTML page per entry
4. The correct layout is selected based on the `type` field in frontmatter (`advocate` / `chamber` / `firm`)
5. The layout renders components using data from `entry.data` (validated frontmatter)
6. Static HTML is output to `/dist/`

### Client side (minimal JS)

- **Directory search:** A plain `<input>` filters cards by comparing against `data-search` attributes — no fetch, no JS framework
- **Language toggle:** Navigates from `/en/…` to `/bn/…` (or back), using the same slug
- **Navbar scroll effect:** Adds `.scrolled` CSS class on scroll — one `addEventListener`

No API calls. No client-side data fetching.

---

## Bilingual architecture

Two independent sets of content collections mirror each other by route:

| Language | Collections | Route pattern |
|----------|------------|---------------|
| English | `en_advocates`, `en_chambers`, `en_firms` | `/cipher-law/en/{a|c|f}/[slug]` |
| Bengali | `bn_advocates`, `bn_chambers`, `bn_firms` | `/cipher-law/bn/{a|c|f}/[slug]` |

When the same `slug` exists in both the `en_` and `bn_` collection, the `LanguageToggle` links between them. If the Bengali version doesn't exist, the toggle falls back to the language home page.

UI strings (button labels, section headings, etc.) are centralised in `src/i18n/strings.ts` and resolved via `t(lang, key)` at build time.

---

## Base path

The site is deployed at `/cipher-law/` under the GitHub Pages domain. `astro.config.mjs` sets `base: '/cipher-law'`, so:

- Astro prefixes all generated routes: `/cipher-law/en/`, `/cipher-law/bn/`, etc.
- All internal hrefs use `import.meta.env.BASE_URL` (resolves to `/cipher-law/` at build time) — no hardcoded `/en/` paths anywhere in the source
- Absolute canonical/hreflang URLs are constructed from `Astro.site` (`https://cipher-text.github.io`) plus the base-prefixed path

If you set up a custom domain at the root, remove `base` from `astro.config.mjs` and update `site` to the custom domain.

---

## Section visibility

Each profile can show or hide individual sections via the `show` field in frontmatter:

```yaml
show:
  stats: true
  services: true
  expertise: false   # hides this section entirely
  credentials: true
```

Layouts check `show.sectionName !== false` before rendering each section, so sections are visible by default when `show` is omitted.

---

## Lookup data

Four JSON files in `src/data/` provide reference values for districts, courts, thanas, and practice areas. They are imported directly as JSON modules — they are not Astro content collections and do not live in `src/content/`.

```ts
import districts from "../../data/districts.json";
const name = districts.find(d => d.id === entry.data.location.district)?.name_en;
```

Each entry follows `{ id, name_bn, name_en }`. Profile frontmatter stores the `id`; the human-readable name is resolved at build time.

---

## Build pipeline

```
npm run dev      →  astro dev     →  HMR dev server at localhost:4321/cipher-law/
npm run build    →  astro build   →  /dist/ (static HTML/CSS/JS)
npm run preview  →  astro preview →  local preview of /dist/
```

No environment variables needed. No database. No external API keys.

---

## Key design decisions

| Decision | Reason |
|----------|--------|
| Astro over Next.js / Remix | No server runtime needed; pure static output |
| Markdown + YAML frontmatter | Git-native content; no vendor lock-in; diff-friendly |
| Route-based i18n (not i18n plugin) | Independent content per language; simpler architecture; better SEO |
| Zod validation in `config.ts` | Catch data errors at build time, not in production |
| Single global CSS file | Shared design tokens via custom properties; no JS overhead |
| No JS framework (React / Vue) | Astro components compile to HTML; near-zero client JS |
| JSON in `src/data/` not `src/content/` | Lookup data is reference data, not editorial content |
| `import.meta.env.BASE_URL` for paths | Works correctly under any base path; no hardcoded `/en/` strings |
