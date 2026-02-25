# Data Models

Complete frontmatter field reference. All fields are optional unless marked **required**. See `src/content/config.ts` for the Zod source schemas.

---

## Top-level fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✓ | Display name — used in hero, footer, and directory cards |
| `type` | `"advocate"` \| `"chamber"` \| `"firm"` | ✓ | Determines which layout is rendered |
| `location` | object | | See [Location](#location) |
| `hero` | object | | See [Hero](#hero) |
| `stats` | array | | See [Stats](#stats) |
| `miniStats` | object | | See [Mini stats](#mini-stats) — chamber only |
| `about` | object | | See [About](#about) |
| `services` | array | | See [Services](#services) — advocate |
| `practiceAreas` | array | | See [Practice areas](#practice-areas) — chamber / firm |
| `practiceAreaIds` | string[] | | Lookup IDs used for directory card display and search |
| `expertise` | array | | See [Expertise](#expertise) — advocate |
| `credentials` | array | | See [Credentials](#credentials) — advocate |
| `team` | array | | See [Team](#team) — chamber |
| `partners` | array | | See [Partners](#partners) — firm |
| `whyChooseUs` | array | | See [Why choose us](#why-choose-us) |
| `contact` | object | | See [Contact](#contact) |
| `courts` | string[] | | Court lookup IDs — e.g., `["dhaka-high-court"]` |
| `serviceTypes` | string[] | | See [Service types](#service-types) |
| `verification` | object | | See [Verification](#verification) |
| `seo` | object | | See [SEO](#seo) |
| `show` | object | | See [Show toggles](#show-toggles) |
| `social` | object | | See [Social links](#social-links) |
| `motto` | string | | Short quote shown in footer |
| `tagline` | string | | One-line description used in footer |
| `footerLinks` | object | | See [Footer links](#footer-links) — firm |
| `logo` | object | | See [Logo](#logo) — firm |
| `navLinks` | string[] | | Navigation labels for firm navbar |
| `advocate` | object | | See [Advocate-specific](#advocate-specific) |
| `organization` | object | | See [Organization-specific](#organization-specific) |

---

## Location

```yaml
location:
  country: Bangladesh      # required — must be exactly "Bangladesh"
  city: Dhaka
  district: dhaka          # lookup ID from src/data/districts.json
  thana: dhanmondi         # lookup ID from src/data/thanas.json
  address: "House 12, Road 5, Dhanmondi"
  mapUrl: "https://maps.google.com/..."
```

---

## Hero

```yaml
hero:
  badge: "SUPREME COURT ADVOCATE"   # ALL CAPS, shown above the title
  tagline: "Criminal Law | Family Law"
  subtitle: "Serving Justice Since 2008"
  description: "A brief paragraph shown below the tagline."
```

---

## Stats

Array of number/label pairs for the stats bar. Any length is supported; 3–4 items are typical.

```yaml
stats:
  - number: "500+"
    label: "Cases Won"
  - number: "15+"
    label: "Years Experience"
  - number: "98%"
    label: "Success Rate"
  - number: "200+"
    label: "Corporate Clients"
```

---

## Mini stats

Compact stat overlay used inside the chamber `AboutSection`.

```yaml
miniStats:
  casesWon: 800
  years: 15
  successRate: 97
```

---

## About

```yaml
about:
  heading: "About the Chamber"
  paragraphs:
    - "First paragraph."
    - "Second paragraph."
  features:            # icon + text items (used in chamber about section)
    - icon: "⚖️"
      text: "Bar Council registered"
    - icon: "🏛️"
      text: "Supreme Court practice"
  values:              # icon + title + description items (used in firm about section)
    - icon: "🏛️"
      title: "Integrity"
      description: "We uphold the highest ethical standards."
```

---

## Services

Used in advocate profiles. Typically 4–6 items.

```yaml
services:
  - icon: "⚖️"
    title: "Criminal Defence"
    description: "Representation in sessions and high court criminal cases."
  - icon: "📋"
    title: "Civil Litigation"
    description: "Property disputes, recovery suits, and injunctions."
```

---

## Practice areas

Used in chamber and firm profiles. Each area can list sub-services.

```yaml
practiceAreas:
  - icon: "🏛️"
    title: "Corporate Law"
    description: "Full-cycle corporate advisory and compliance."
    services:
      - Company incorporation
      - Board advisory
      - Regulatory compliance
      - M&A due diligence
```

---

## Expertise

Used in advocate profiles. Shown as a sidebar-style list.

```yaml
expertise:
  - title: "Constitutional Law"
    description: "Writ petitions and fundamental rights."
  - title: "Criminal Defence"
    description: "Sessions court through appellate division."
```

---

## Credentials

Used in advocate profiles. Shown in a grid.

```yaml
credentials:
  - icon: "🎓"
    title: "LLB (Hons)"
    detail: "University of Dhaka, 2007"
  - icon: "⚖️"
    title: "Bar Council Enrollment"
    detail: "Bangladesh Bar Council, 2008"
```

---

## Team

Used in chamber profiles.

```yaml
team:
  - name: "Adv. Farhan Ahmed"
    role: "Senior Associate"
    credentials: "LLM, High Court Advocate"
    specialties:
      - Criminal Law
      - Labour Law
    photo: "/images/farhan.jpg"   # optional — photo support planned for Phase 2
```

---

## Partners

Used in firm profiles.

```yaml
partners:
  - name: "Barrister Nadia Islam"
    title: "Managing Partner"
    credentials: "LLM (London), Supreme Court Advocate"
    expertise:
      - Corporate Law
      - Arbitration
    photo: "/images/nadia.jpg"   # optional — photo support planned for Phase 2
```

---

## Why choose us

Used in all profile types. Typically 4–6 items.

```yaml
whyChooseUs:
  - icon: "✓"
    title: "Proven Track Record"
    description: "500+ cases resolved across all major courts."
  - icon: "🌐"
    title: "Bilingual Service"
    description: "Full service in English and Bengali."
```

---

## Contact

```yaml
contact:
  phone: "+880-2-000-0000"
  mobile: "+880-1700-000000"
  email: "info@example.com"
  whatsapp: "+880-1700-000000"
  wechat: "wechat-id"
  hours: "Sun–Thu 9:00–18:00"
  emergencyPhone: "+880-1700-999999"
  bookingUrl: "https://calendly.com/..."
```

---

## Service types

```yaml
serviceTypes:
  - online-consultation
  - chamber-meeting
  - document-review
  - full-representation
```

---

## Verification

```yaml
verification:
  tier: 2                         # 1 = self-reported, 2 = Bar Council verified, 3 = premium
  barCouncilId: "BD/12345/2008"
  barCouncilVerified: true        # displays "Verified" badge on directory card
  barAssociationMember: true
  chamberVerified: false
  lastCheckedAt: "2025-01-01"     # ISO date — used to sort directory cards (newest first)
```

| Tier | Meaning |
|------|---------|
| 1 | Self-reported — no independent check |
| 2 | Bar Council ID verified |
| 3 | Full background check |

---

## SEO

```yaml
seo:
  title: "Advocate Jane Doe | Criminal Defence | Dhaka High Court"
  description: "High Court advocate in Dhaka with 15+ years in criminal defence and family law."
  canonical: "https://cipher-text.github.io/cipher-law/en/a/jane-doe"
```

Used by `SeoHead.astro` to generate `<title>`, `<meta name="description">`, canonical link, `hreflang` alternates, and JSON-LD structured data.

---

## Show toggles

All sections are **visible by default**. Set to `false` to hide a section.

```yaml
show:
  verification: true
  services: true
  expertise: true
  credentials: true
  courts: true
  locations: true
  quickContact: true
  socialLinks: true
  stats: true
  team: true
  whyChooseUs: true
  faqs: false      # not yet implemented
  qr: false        # not yet implemented
  vcard: false     # not yet implemented
```

---

## Social links

```yaml
social:
  website: "https://janedoe.law"
  facebook: "https://facebook.com/janedoe"
  linkedin: "https://linkedin.com/in/janedoe"
  youtube: "https://youtube.com/@janedoe"
  twitter: "https://twitter.com/janedoe"
```

---

## Footer links

Used in firm profiles for the multi-column footer.

```yaml
footerLinks:
  practiceAreas:
    - Corporate Law
    - Criminal Defence
    - Family Law
  firm:
    - About Us
    - Our Team
    - Careers
  resources:
    - Legal Updates
    - Client Portal
    - Contact
```

---

## Logo

Used in firm profiles for the branded navbar.

```yaml
logo:
  icon: "R&A"                  # short text or symbol in the logo mark
  main: "RAHMAN & ASSOCIATES"  # primary text
  sub: "LEGAL"                 # subtitle
```

---

## Advocate-specific

```yaml
advocate:
  level: "Advocate (High Court)"
  # valid values: "Advocate (District Court)" | "Advocate (High Court)" | "Senior Advocate"
  enrollmentYear: 2008
  chamberName: "Rahman Law Chamber"
  specialtiesNote: "Specialising in NI Act 138 and land disputes"
```

---

## Organization-specific

```yaml
organization:
  foundedYear: 2010
  teamSize: 8
  multiLawyer: true
```

---

## Lookup data

All lookup files are in `src/data/`. Each entry follows `{ id, name_bn, name_en }`. Profiles store the `id` in frontmatter; names are resolved at build time.

| File | IDs |
|------|-----|
| `districts.json` | `dhaka`, `gazipur`, `narayanganj`, `munshiganj` |
| `courts.json` | `dhaka-judge-court`, `dhaka-high-court`, `appellate-division`, `labour-court-dhaka`, `women-children-tribunal` |
| `thanas.json` | `dhanmondi`, `gulshan`, `tejturi-bazar`, `mirpur`, `shahbagh` |
| `practice-areas.json` | `family-law`, `criminal-law`, `civil-litigation`, `ni-act-138`, `company-law`, `labour-law`, `land-law` |

To add a new entry, edit the JSON file and use the new `id` in profile frontmatter.

---

## Content file naming

Filename (without `.md`) becomes the URL slug:

```
src/content/en_advocates/jane-doe.md    →  /cipher-law/en/a/jane-doe
src/content/bn_chambers/my-chamber.md  →  /cipher-law/bn/c/my-chamber
src/content/en_firms/top-firm.md       →  /cipher-law/en/f/top-firm
```

Use lowercase letters, numbers, and hyphens. No spaces or special characters.
