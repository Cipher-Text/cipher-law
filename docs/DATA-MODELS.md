# Data Models

Complete field reference for content schemas. See `src/content/config.ts` for Zod source.

## Common Fields (All Types)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | yes | Display name |
| `type` | `"advocate" \| "chamber" \| "firm"` | yes | Determines layout |
| `hero.badge` | string | no | Top badge text (e.g., "SUPREME COURT ADVOCATE") |
| `hero.tagline` | string | no | One-liner below title |
| `hero.subtitle` | string | no | Secondary line |
| `hero.description` | string | no | Paragraph description |
| `stats` | array | no | Array of `{ number: string, label: string }` |
| `services` | array | no | Array of `{ icon, title, description }` |
| `practiceAreas` | array | no | Array of `{ icon, title, description, services[] }` |
| `expertise` | array | no | Array of `{ title, description }` |
| `credentials` | array | no | Array of `{ icon, title, detail }` |
| `team` | array | no | Array of `{ name, role, credentials, specialties[], photo }` |
| `partners` | array | no | Array of `{ name, title, credentials, expertise[], photo }` |
| `whyChooseUs` | array | no | Array of `{ icon, title, description }` |
| `motto` | string | no | Footer motto text |
| `tagline` | string | no | Footer tagline |

## Location

```yaml
location:
  country: "Bangladesh"        # string, optional
  city: "Dhaka"                # string, optional
  district: "dhaka"            # lookup ID → districts.json
  thana: "dhanmondi"           # lookup ID → thanas.json
  address: "..."               # full address string
  mapUrl: "https://..."        # Google Maps embed URL
```

## Contact

```yaml
contact:
  phone: "+880 2-XXXXXXXX"     # landline
  mobile: "+880 1XXX-XXXXXX"   # mobile
  email: "email@example.com"
  whatsapp: "8801XXXXXXXXX"    # WhatsApp number (no +)
  wechat: "id"                 # WeChat ID
  hours: "Sunday - Thursday: 9:00 AM - 6:00 PM"
  emergencyPhone: "+880..."    # after-hours
  bookingUrl: "https://..."    # external booking link
```

## Verification

Three-tier trust system:

```yaml
verification:
  tier: 1 | 2 | 3
  barCouncilId: "BC-12345"
  barCouncilVerified: true | false
  barAssociationMember: true | false
  chamberVerified: true | false
  lastCheckedAt: "2026-01-15"   # ISO date string
```

| Tier | Meaning |
|------|---------|
| 1 | Basic listing — self-reported information |
| 2 | Bar Council verified — ID confirmed |
| 3 | Premium verified — full background check |

## Show Toggles

Controls section visibility per profile:

```yaml
show:
  verification: true
  services: true
  expertise: true
  courts: true
  locations: true
  faqs: true
  qr: true
  vcard: true
  quickContact: true
  socialLinks: true
  stats: true
  team: true
  whyChooseUs: true
  credentials: true
```

All booleans, all optional. Defaults to hidden if omitted.

## Social Links

```yaml
social:
  website: "https://..."
  facebook: "https://facebook.com/..."
  linkedin: "https://linkedin.com/in/..."
  youtube: "https://youtube.com/..."
  twitter: "https://twitter.com/..."
```

## SEO

```yaml
seo:
  title: "Page Title - For Search Engines"
  description: "Meta description for search results"
  canonical: "https://cipher-law.example/en/a/slug"
```

Consumed by `SeoHead.astro` to generate `<title>`, `<meta>`, OpenGraph, and JSON-LD structured data.

## Advocate-Specific Fields

```yaml
advocate:
  level: "Senior" | "Junior" | string
  enrollmentYear: 2010
  chamberName: "Rahman & Associates"
  specialtiesNote: "Additional context"

courts:
  - "dhaka-judge-court"        # lookup ID → courts.json
  - "dhaka-high-court"

serviceTypes:
  - "online-consultation"
  - "chamber-meeting"
  - "document-review"
  - "full-representation"
```

## Organization-Specific Fields (Chamber/Firm)

```yaml
organization:
  foundedYear: 2010
  teamSize: 12
  multiLawyer: true
```

## Navigation (Firm)

```yaml
logo:
  icon: "R&A"                  # short logo mark
  main: "RAHMAN & ASSOCIATES"  # primary text
  sub: "LEGAL"                 # subtitle text

navLinks:
  - "FIRM"
  - "PRACTICE AREAS"
  - "PARTNERS"
  - "CONTACT"

footerLinks:
  practiceAreas: ["Corporate & M&A", "Banking & Finance"]
  firm: ["About Us", "Partners", "Careers"]
  resources: ["Legal Insights", "Publications"]
```

## Lookup Data Format

All lookups follow the same shape:

```json
{ "id": "dhaka", "name_bn": "ঢাকা", "name_en": "Dhaka" }
```

| File | Current Entries | Used For |
|------|----------------|----------|
| `districts.json` | 4 | Location filter, profile display |
| `courts.json` | 5 | Court badges on profiles |
| `thanas.json` | 5 | Granular location |
| `practice-areas.json` | 7 | Category filter, directory search |

## Content File Naming

Filename becomes the URL slug:

```
src/content/en_advocates/john-doe.md  →  /en/a/john-doe
src/content/bn_chambers/my-chamber.md →  /bn/c/my-chamber
src/content/en_firms/top-firm.md      →  /en/f/top-firm
```
