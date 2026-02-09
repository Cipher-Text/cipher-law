# Content Guide

How to add and manage legal professional profiles.

## Adding a New Profile

### 1. Create Markdown File

Place in the correct collection folder:

| Type | Bengali | English |
|------|---------|---------|
| Advocate | `src/content/bn_advocates/` | `src/content/en_advocates/` |
| Chamber | `src/content/bn_chambers/` | `src/content/en_chambers/` |
| Firm | `src/content/bn_firms/` | `src/content/en_firms/` |

**Filename = URL slug.** Use lowercase, hyphenated names:
- `john-doe.md` → `/en/a/john-doe`
- `rahman-associates.md` → `/en/c/rahman-associates`

### 2. Bilingual Profiles

For bilingual support, create **two files with the same filename** in both language folders:

```
src/content/en_advocates/john-doe.md    → /en/a/john-doe
src/content/bn_advocates/john-doe.md    → /bn/a/john-doe
```

The LanguageToggle component switches between these by swapping the URL prefix.

### 3. Minimal Required Fields

```yaml
---
title: "Advocate Name"
type: "advocate"
---
```

Everything else is optional. Sections with missing data simply won't render.

### 4. Validation

Build will fail if content doesn't match Zod schema:

```bash
npm run build
```

Common validation errors:
- `type` must be exactly `"advocate"`, `"chamber"`, or `"firm"`
- `verification.tier` must be `1`, `2`, or `3`
- `stats` items need both `number` and `label`
- Lookup IDs (district, courts) must match entries in JSON files

## Content Guidelines

### Profile Quality Checklist

- [ ] Title uses proper legal title format ("Advocate", "Barrister")
- [ ] Badge text is ALL CAPS
- [ ] Stats use realistic, verifiable numbers
- [ ] Services have clear, non-overlapping descriptions
- [ ] Contact includes at least phone and email
- [ ] Location has valid district ID from `districts.json`
- [ ] SEO title is under 60 characters
- [ ] SEO description is 150-160 characters
- [ ] Verification tier matches actual verification status

### Writing Style

- **Formal but accessible** — legal professionals expect gravitas
- **Third person** for descriptions ("Advocate Rahman specializes in...")
- **Bengali content** should be natural Bengali, not machine-translated
- **Avoid superlatives** without evidence ("best", "top", "number one")
- **Practice areas** should use standard legal terminology

### Photo Requirements (Future)

- Minimum 400x400px, square aspect ratio
- Professional headshot on neutral background
- File format: JPEG or WebP
- Max file size: 200KB (optimize before adding)
- Place in `public/photos/{type}/{slug}.jpg`

## Lookup Data Management

To add new reference entries, edit the JSON files in `src/content/lookups/`:

### Adding a District

```json
// districts.json
{ "id": "chittagong", "name_bn": "চট্টগ্রাম", "name_en": "Chittagong" }
```

### Adding a Court

```json
// courts.json
{ "id": "chittagong-judge-court", "name_bn": "চট্টগ্রাম জজ কোর্ট", "name_en": "Chittagong Judge Court" }
```

### Adding a Practice Area

```json
// practice-areas.json
{ "id": "immigration-law", "name_bn": "অভিবাসন আইন", "name_en": "Immigration Law" }
```

After adding lookups, profiles can reference the new IDs in their frontmatter.

## Directory Card Appearance

Each profile appears as a card on the directory page (`/bn` or `/en`). The card displays:

- Title (name)
- Type badge (Advocate/Chamber/Firm)
- Verification badge (if tier 2+)
- Location (district)
- Up to 3 practice areas
- Contact quick-links

Cards are sorted by `lastCheckedAt` date (newest first). Profiles with recent verification appear higher.

## Bulk Content Operations

For onboarding multiple profiles:

1. Prepare a spreadsheet with all fields
2. Convert each row to YAML frontmatter format
3. Save as individual `.md` files in correct folders
4. Run `npm run build` to validate all at once
5. Fix any schema errors, commit, deploy
