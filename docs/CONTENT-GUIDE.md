# Content Guide

All profiles are markdown files with YAML frontmatter. To add or update a profile, edit the `.md` file and push to `main` — GitHub Actions builds and deploys automatically (~60 seconds).

---

## Collection folders

```
src/content/
├── en_advocates/    →  /cipher-law/en/a/[filename]
├── bn_advocates/    →  /cipher-law/bn/a/[filename]
├── en_chambers/     →  /cipher-law/en/c/[filename]
├── bn_chambers/     →  /cipher-law/bn/c/[filename]
├── en_firms/        →  /cipher-law/en/f/[filename]
└── bn_firms/        →  /cipher-law/bn/f/[filename]
```

The filename (without `.md`) becomes the URL slug. Use lowercase letters, numbers, and hyphens only.

---

## Adding a new profile

### 1. Create the file

```
src/content/en_advocates/jane-doe.md
```

### 2. Add frontmatter

Every profile requires at minimum `title` and `type`:

```yaml
---
title: "Advocate Jane Doe"
type: advocate
location:
  country: Bangladesh
  district: dhaka
---
```

### 3. Add the Bengali version (optional)

Create the same filename in the `bn_` collection:

```
src/content/bn_advocates/jane-doe.md
```

The `LanguageToggle` on the profile page links to the counterpart automatically because the slugs match.

### 4. Validate locally before pushing

```bash
npm run build
```

Zod validates all frontmatter at build time. Invalid or missing fields produce a clear error. Fix the error, then commit and push.

---

## Minimal frontmatter examples

### Advocate

```yaml
---
title: "Advocate Jane Doe"
type: advocate
location:
  country: Bangladesh
  district: dhaka
  thana: dhanmondi
hero:
  badge: "HIGH COURT ADVOCATE"
  tagline: "Criminal Defence | Family Law"
  description: "Experienced High Court advocate with 10+ years in criminal and family matters."
stats:
  - number: "300+"
    label: "Cases Won"
  - number: "10+"
    label: "Years Experience"
contact:
  phone: "+880-2-000-0000"
  mobile: "+880-1700-000000"
  email: "jane@example.com"
  hours: "Sun–Thu 9:00–18:00"
verification:
  tier: 2
  barCouncilVerified: true
  lastCheckedAt: "2025-01-01"
practiceAreaIds:
  - criminal-law
  - family-law
seo:
  title: "Advocate Jane Doe | Criminal Defence | Dhaka High Court"
  description: "High Court advocate in Dhaka specialising in criminal defence and family law. 10+ years experience."
---
```

### Chamber

```yaml
---
title: "Doe & Partners Chamber"
type: chamber
location:
  country: Bangladesh
  district: dhaka
  address: "Supreme Court Bar Association, Chamber 12, Dhaka"
hero:
  badge: "ESTABLISHED 2015 | DHAKA"
  tagline: "Your Trusted Legal Partner"
about:
  heading: "About the Chamber"
  paragraphs:
    - "Doe & Partners is a Dhaka-based chamber specialising in corporate and civil matters."
contact:
  phone: "+880-2-000-0000"
  email: "info@doepartners.com"
  hours: "Sun–Thu 9:00–18:00"
seo:
  title: "Doe & Partners Chamber | Corporate & Civil Law | Dhaka"
  description: "Dhaka chamber specialising in corporate and civil litigation. Bar Council verified team."
---
```

### Firm

```yaml
---
title: "Doe Legal Associates"
type: firm
location:
  country: Bangladesh
  city: Dhaka
  district: dhaka
  thana: gulshan
logo:
  icon: "DL"
  main: "DOE LEGAL"
  sub: "ASSOCIATES"
navLinks: ["FIRM", "PRACTICE AREAS", "PARTNERS", "CONTACT"]
hero:
  badge: "FULL-SERVICE LAW FIRM | DHAKA"
  tagline: "Strategic Legal Solutions"
contact:
  phone: "+880-2-000-0000"
  email: "info@doelegal.com"
  hours: "Sun–Thu 9:00–19:00"
seo:
  title: "Doe Legal Associates | Full-Service Law Firm | Dhaka"
  description: "Full-service law firm in Gulshan, Dhaka. Corporate, litigation, and advisory services."
---
```

For all fields see `docs/DATA-MODELS.md`.

---

## Lookup IDs

Use these `id` values in profile frontmatter fields like `district`, `thana`, `courts`, and `practiceAreaIds`.

### Districts (`src/data/districts.json`)

| id | Bengali | English |
|----|---------|---------|
| `dhaka` | ঢাকা | Dhaka |
| `gazipur` | গাজীপুর | Gazipur |
| `narayanganj` | নারায়ণগঞ্জ | Narayanganj |
| `munshiganj` | মুন্সীগঞ্জ | Munshiganj |

### Courts (`src/data/courts.json`)

| id | Bengali | English |
|----|---------|---------|
| `dhaka-judge-court` | ঢাকা জজ কোর্ট | Dhaka Judge Court |
| `dhaka-high-court` | ঢাকা হাই কোর্ট | Dhaka High Court |
| `appellate-division` | আপিল বিভাগ | Appellate Division |
| `labour-court-dhaka` | শ্রম আদালত ঢাকা | Labour Court Dhaka |
| `women-children-tribunal` | নারী ও শিশু ট্রাইব্যুনাল | Women and Children Tribunal |

### Thanas (`src/data/thanas.json`)

| id | Bengali | English |
|----|---------|---------|
| `dhanmondi` | ধানমন্ডি | Dhanmondi |
| `gulshan` | গুলশান | Gulshan |
| `tejturi-bazar` | তেজগাঁও | Tejgaon |
| `mirpur` | মিরপুর | Mirpur |
| `shahbagh` | শাহবাগ | Shahbagh |

### Practice areas (`src/data/practice-areas.json`)

| id | Bengali | English |
|----|---------|---------|
| `family-law` | পারিবারিক আইন | Family Law |
| `criminal-law` | ফৌজদারি আইন | Criminal Law |
| `civil-litigation` | সিভিল লিটিগেশন | Civil Litigation |
| `ni-act-138` | এনআই অ্যাক্ট ১৩৮ | NI Act 138 |
| `company-law` | কোম্পানি আইন | Company Law |
| `labour-law` | শ্রম আইন | Labour Law |
| `land-law` | ভূমি আইন | Land Law |

---

## Adding lookup entries

Edit the relevant JSON file in `src/data/` and add an entry following the same shape:

```json
{ "id": "chattogram", "name_bn": "চট্টগ্রাম", "name_en": "Chattogram" }
```

Rules:
- `id` must be lowercase, hyphenated, and unique within the file
- Both `name_bn` and `name_en` are required
- After adding, the new `id` can be used in any profile frontmatter

---

## Writing guidelines

**Badges:** ALL CAPS — e.g., `"SUPREME COURT ADVOCATE"`, `"ESTABLISHED 2010 | DHAKA"`.

**Stats:** Realistic figures, use `+` for approximations — e.g., `"500+"`, `"15+"`.

**Descriptions:** 1–2 sentences per service or practice area, specific to the legal work involved.

**Bengali content:** Write naturally. Do not machine-translate English content.

**SEO `description`:** Under 160 characters. Mention location and practice areas.

**Titles:** Use correct legal titles — "Advocate", "Barrister", "Senior Advocate".

---

## Hiding sections

Use the `show` field to turn off sections you haven't filled in:

```yaml
show:
  stats: false        # hide the stats bar
  expertise: false    # hide the expertise section
  credentials: false  # hide the credentials grid
```

All sections default to visible when `show` is omitted.

---

## Directory card display

Each profile appears as a card on `/cipher-law/en/` and `/cipher-law/bn/`. Cards display:

- Title
- Type badge (Advocate / Chamber / Law Firm)
- "Verified" badge when `verification.barCouncilVerified: true`
- District name
- Up to 3 practice areas (from `practiceAreaIds`)
- "View Profile" link

Cards are sorted by `verification.lastCheckedAt` descending — most recently verified profiles appear first.

---

## Bulk onboarding

To add many profiles at once:

1. Prepare each profile's data (spreadsheet or notes)
2. Create one `.md` file per profile in the correct folder
3. Run `npm run build` — all files are validated together
4. Fix any Zod errors
5. Commit and push — GitHub Actions deploys all new pages in one build
