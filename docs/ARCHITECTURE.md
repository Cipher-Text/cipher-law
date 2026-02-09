# Architecture

## System Overview

Cipher Law is a **static-first, content-driven** legal directory. No server runtime, no database, no CMS. Everything compiles to static HTML at build time via Astro.

```
Content (Markdown + YAML)
    ↓
Zod Validation (config.ts)
    ↓
Astro Content Collections API
    ↓
Dynamic Route Generation ([slug].astro)
    ↓
Layout Selection (type → Layout)
    ↓
Component Composition
    ↓
Static HTML/CSS Output (/dist/)
```

## Component Dependency Graph

```
BaseLayout
├── SeoHead
├── LanguageToggle
│
├── AdvocateLayout
│   ├── Hero
│   ├── StatsBar
│   ├── ServicesGrid
│   ├── ExpertiseSection
│   ├── CredentialsGrid
│   ├── ContactSection
│   ├── QuickContact
│   ├── VerifiedBadge
│   └── PremiumFooter
│
├── ChamberLayout
│   ├── Navbar
│   ├── Hero
│   ├── AboutSection (+ miniStats)
│   ├── PracticeGrid
│   ├── TeamGrid
│   ├── WhyChooseUs
│   ├── ContactSection
│   ├── QuickContact
│   ├── VerifiedBadge
│   └── PremiumFooter
│
├── FirmLayout
│   ├── Navbar (+ logo)
│   ├── Hero (+ grid animation)
│   ├── StatsBar
│   ├── AboutSection (+ values)
│   ├── PracticeGrid
│   ├── PartnersGrid
│   ├── WhyChooseUs
│   ├── ContactSection
│   ├── QuickContact
│   ├── VerifiedBadge
│   └── PremiumFooter (+ footerLinks)
│
└── Directory Home (bn/en index)
    ├── CardsGrid (search + filter)
    └── PremiumFooter
```

## Data Flow

### Build-Time (Static Generation)

1. **Content Loading** — Astro reads `src/content/{lang}_{type}/*.md`
2. **Schema Validation** — Zod schemas in `config.ts` validate every field
3. **Route Generation** — `[slug].astro` pages call `getStaticPaths()` to enumerate all entries
4. **Layout Binding** — Each entry's `type` field maps to a layout:
   - `advocate` → `AdvocateLayout`
   - `chamber` → `ChamberLayout`
   - `firm` → `FirmLayout`
5. **Component Rendering** — Layout passes `entry.data` fields to child components
6. **Output** — Static HTML per page in `/dist/`

### Client-Side (Runtime)

- **Directory Search** — `CardsGrid` uses `data-*` attributes for JS-based filtering (name, district, practice areas)
- **Language Toggle** — Swaps `/bn/` ↔ `/en/` in URL path
- **Navbar Scroll** — Dynamic padding/background on scroll event
- No API calls. No client-side data fetching.

## Bilingual Architecture

Route-based i18n with mirrored content collections:

```
/bn/a/demo-advocate  →  src/content/bn_advocates/demo-advocate.md
/en/a/demo-advocate  →  src/content/en_advocates/demo-advocate.md
```

UI strings use `t(lang, key)` from `src/i18n/strings.ts`. The `lang` parameter is extracted from the URL path segment.

Each language has **independent content files**. This means Bengali and English profiles can differ in content — they are not auto-translated.

## Section Visibility System

The `show` field in frontmatter controls which sections render:

```yaml
show:
  stats: true
  services: true
  expertise: false    # hides expertise section
  credentials: true
  verification: true
  quickContact: true
```

Components check `show.{section}` before rendering. This allows each profile to customize its layout without code changes.

## Lookup Data

Reference data in `src/content/lookups/*.json` provides standardized IDs for:
- **Districts** — Location filtering on directory page
- **Courts** — Court association display on profiles
- **Thanas** — Granular location data
- **Practice Areas** — Categorization and search filtering

These are consumed by content files via ID references (e.g., `district: "dhaka"`) and resolved at build time.

## Build Pipeline

```
npm run dev     →  astro dev     →  HMR dev server (localhost:4321)
npm run build   →  astro build   →  /dist/ (static files)
npm run preview →  astro preview →  local preview of /dist/
```

**Zero external services required.** No database, no API keys, no environment variables.

## Key Architectural Decisions

| Decision | Rationale |
|----------|-----------|
| Astro over Next.js | No runtime needed; pure static output; smaller bundle |
| Markdown over CMS | Git-native content; no vendor lock-in; version controlled |
| Route-based i18n over library | Simpler architecture; better SEO; independent content per language |
| Zod validation | Catch content errors at build time, not runtime |
| Single CSS file over CSS-in-JS | Simpler toolchain; shared design tokens; no JS overhead |
| No component framework (React/Vue) | Astro components are sufficient; zero client JS by default |
