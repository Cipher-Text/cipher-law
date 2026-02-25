# Cipher Law

A static legal directory for Bangladesh built with Astro. All content is managed by editing markdown files — no CMS, no database, no server.

**Live:** https://cipher-text.github.io/cipher-law/

---

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321/cipher-law/
npm run build     # outputs to /dist/
npm run preview   # preview /dist/ locally
```

---

## Project structure

```
cipher-law/
├── src/
│   ├── content/                  # Markdown profiles (edit these to add listings)
│   │   ├── en_advocates/
│   │   ├── bn_advocates/
│   │   ├── en_chambers/
│   │   ├── bn_chambers/
│   │   ├── en_firms/
│   │   ├── bn_firms/
│   │   └── config.ts             # Zod validation schemas
│   ├── data/                     # Reference JSON (districts, courts, thanas, practice areas)
│   ├── components/               # 19 reusable Astro components
│   ├── layouts/                  # AdvocateLayout, ChamberLayout, FirmLayout
│   ├── pages/                    # Routes — auto-generated from content
│   ├── i18n/strings.ts           # Bengali / English UI labels
│   └── styles/global.css         # CSS custom properties and base styles
├── docs/                         # Documentation
└── .github/workflows/deploy.yml  # GitHub Actions → GitHub Pages
```

---

## Adding a profile

The filename becomes the URL slug. Create the file, add frontmatter, push to `main`.

| Profile type | Folder | URL |
|---|---|---|
| English advocate | `src/content/en_advocates/name.md` | `/cipher-law/en/a/name` |
| Bengali advocate | `src/content/bn_advocates/name.md` | `/cipher-law/bn/a/name` |
| English chamber | `src/content/en_chambers/name.md` | `/cipher-law/en/c/name` |
| Bengali chamber | `src/content/bn_chambers/name.md` | `/cipher-law/bn/c/name` |
| English firm | `src/content/en_firms/name.md` | `/cipher-law/en/f/name` |
| Bengali firm | `src/content/bn_firms/name.md` | `/cipher-law/bn/f/name` |

Use the same filename in both `en_` and `bn_` folders to enable the language toggle.

See `docs/CONTENT-GUIDE.md` for the frontmatter reference and writing guidelines.
See `docs/DATA-MODELS.md` for all available fields.

---

## Page types

### Advocate (`/en/a/[slug]`)
Single lawyer portfolio. Sections: hero · stats · services grid · expertise list · credentials · contact · footer.

### Chamber (`/en/c/[slug]`)
Legal chamber with team. Sections: navbar · hero · about with mini-stats · practice areas · team · why choose us · contact · footer.

### Firm (`/en/f/[slug]`)
Full-service law firm. Sections: fixed navbar with logo · animated hero · stats · about with values · practice groups · managing partners · why choose us · contact · multi-column footer.

---

## Design system

| Token | Value | Use |
|-------|-------|-----|
| `--bg-primary` | `#0a0a0a` | Page background |
| `--bg-secondary` | `#141e30` | Section background |
| `--accent` | `#c5a367` | Gold — headings, borders, highlights |
| `--accent-light` | `#d4af37` | Bright gold — hover states |
| `--text-primary` | `#ffffff` | Headings |
| `--text-muted` | `rgba(255,255,255,0.6)` | Body text |
| `--border` | `rgba(197,163,103,0.2)` | Card and section borders |

**Font:** Segoe UI / Inter, system sans-serif fallback.
**Hero headings:** `clamp(42px, 8vw, 82px)`, weight 900.
**Section titles:** `clamp(36px, 5vw, 56px)`, weight 800.

---

## Deployment

Push to `main` → GitHub Actions builds → deploys to GitHub Pages automatically. See `docs/DEPLOYMENT.md`.

---

## Docs

| File | Contents |
|------|----------|
| `docs/CONTENT-GUIDE.md` | How to add and edit profiles |
| `docs/DATA-MODELS.md` | Complete frontmatter field reference |
| `docs/ARCHITECTURE.md` | System design and technical decisions |
| `docs/DEPLOYMENT.md` | CI/CD, GitHub Pages, custom domains |
| `docs/ROADMAP.md` | Planned features by phase |
| `docs/PRICING.md` | Business model and subscription tiers |
