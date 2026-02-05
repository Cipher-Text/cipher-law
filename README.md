# Cipher Law

Premium single-page portfolio platform for Bangladesh legal professionals. Three page types — **Advocate**, **Chamber**, and **Firm** — each with a distinct design tailored to their scale and audience.

Built with Astro for static generation. Bilingual (Bengali/English). No CMS, no database, no runtime.

## Page Types

### Advocate (`/a/[slug]`)
Single lawyer portfolio with personal branding focus.

**Sections:**
- Hero (badge, name, tagline, description, CTA buttons)
- Stats bar (cases won, years experience, success rate, clients)
- Services grid (6 practice areas)
- Expertise list (specialized areas with descriptions)
- Credentials (education, bar enrollment, memberships)
- Contact CTA
- Footer

### Chamber (`/c/[slug]`)
Small-to-medium legal chamber with team focus.

**Sections:**
- Navigation bar
- Hero (establishment badge, chamber name, tagline)
- About section with mini-stats overlay
- Practice areas grid (6 areas with service lists)
- Team section (partners/associates with specialties)
- Why choose us (6 differentiators)
- Contact with address/phone/email/hours
- Footer with links

### Firm (`/f/[slug]`)
Full-service law firm with corporate presence.

**Sections:**
- Fixed navigation with logo
- Animated hero (grid background, badge, headline, subtitle)
- Stats bar (cases, years, clients, practice groups)
- About section with firm values
- Practice groups grid (9 specialized areas)
- Managing partners (senior leadership profiles)
- Why choose us (competitive advantages)
- Contact container (details + map placeholder)
- Multi-column footer

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0a` | Page background |
| `--bg-secondary` | `#141e30` | Section backgrounds |
| `--accent` | `#c5a367` | Gold accent, highlights |
| `--accent-light` | `#d4af37` | Gradients, hover states |
| `--text-primary` | `#ffffff` | Headings |
| `--text-muted` | `rgba(255,255,255,0.7)` | Body text |
| `--border` | `rgba(197,163,103,0.2)` | Card borders |

**Typography:**
- Font: `'Segoe UI', 'Inter', sans-serif`
- Hero headings: 68-82px, weight 900
- Section titles: 48-56px, weight 800-900
- Body: 15-17px, line-height 1.8

**Common UI Patterns:**
- Gradient text: `linear-gradient(135deg, #fff, #c5a367)`
- Card hover: translateY(-10px) + border glow
- Buttons: 50px border-radius, gradient or outline
- Stats: Large numbers with small caps labels

## Routes

```
/bn                 # Bengali home (directory listing)
/en                 # English home (directory listing)
/bn/a/[slug]        # Bengali advocate page
/en/a/[slug]        # English advocate page
/bn/c/[slug]        # Bengali chamber page
/en/c/[slug]        # English chamber page
/bn/f/[slug]        # Bengali firm page
/en/f/[slug]        # English firm page
```

## Content Structure

```
src/content/
├── bn_advocates/       # Bengali advocate profiles
├── en_advocates/       # English advocate profiles
├── bn_chambers/        # Bengali chamber profiles
├── en_chambers/        # English chamber profiles
├── bn_firms/           # Bengali firm profiles
└── en_firms/           # English firm profiles
```

## Frontmatter Schema

### Advocate

```yaml
title: "Advocate MD. Rahman"
slug: "md-rahman"
type: "advocate"

# Hero
badge: "SUPREME COURT ADVOCATE"
tagline: "Legal Excellence | Justice Delivered"
description: "Providing comprehensive legal solutions with 15+ years..."

# Stats
stats:
  casesWon: 500
  yearsExperience: 15
  successRate: 98
  corporateClients: 200

# Services (6 items)
services:
  - icon: "courthouse"
    title: "Supreme Court Litigation"
    description: "Expert representation in Appellate and High Court..."
  - icon: "building"
    title: "Corporate & Commercial Law"
    description: "Complete corporate legal support..."

# Expertise areas
expertise:
  - title: "Constitutional Law"
    description: "Writ petitions, fundamental rights, judicial review"
  - title: "Criminal Defense"
    description: "Trial, appeals, bail applications"

# Credentials
credentials:
  - icon: "graduation"
    title: "LL.M (Master of Laws)"
    detail: "University of Dhaka | International Law"
  - icon: "scale"
    title: "Supreme Court Enrollment"
    detail: "Roll No: XXXX | Year: 20XX"

# Location & Contact
location:
  country: "Bangladesh"
  city: "Dhaka"
  district: "dhaka"
  address: "Supreme Court Bar Association, Dhaka"
  mapUrl: "https://maps.google.com/..."
contact:
  phone: "+880 1XXX-XXXXXX"
  email: "advocate@lawfirm.com"
  whatsapp: "8801XXXXXXXXX"
  hours: "Sunday - Thursday: 9:00 AM - 6:00 PM"

# Verification
verification:
  tier: 2
  barCouncilId: "BC-12345"
  barCouncilVerified: true
  lastCheckedAt: "2026-01-15"

# Footer
motto: "Justice Delayed is Justice Denied"

# SEO
seo:
  title: "Advocate MD. Rahman - Supreme Court of Bangladesh"
  description: "15+ years experience in Supreme Court litigation..."
```

### Chamber

```yaml
title: "Rahman & Associates Chamber"
slug: "rahman-chamber"
type: "chamber"

# Hero
badge: "ESTABLISHED 2010 | DHAKA, BANGLADESH"
tagline: "Your Trusted Partner in Justice"
description: "Leading legal chamber in Bangladesh with 15+ years..."

# About
about:
  heading: "About Our Chamber"
  paragraphs:
    - "Rahman & Associates Chamber is one of Bangladesh's most respected..."
    - "Led by experienced advocates, our chamber houses a team of..."
  features:
    - icon: "courthouse"
      text: "Supreme Court Practice with High Court & Appellate Division"
    - icon: "users"
      text: "Team of 5 Senior Advocates + Junior Advocates"

# Mini stats (displayed on about visual)
miniStats:
  casesWon: 800
  years: 15
  successRate: 97

# Practice areas (6 items with service lists)
practiceAreas:
  - icon: "scale"
    title: "Supreme Court Litigation"
    description: "Expert representation in Bangladesh's highest courts"
    services:
      - "Appellate Division Appeals"
      - "High Court Division Writs"
      - "Constitutional Matters"

# Team members
team:
  - name: "Advocate MD. Rahman"
    role: "Founding Partner & Senior Advocate"
    credentials: "LL.M (Dhaka University) | Supreme Court Roll: XXXX"
    specialties: ["Constitutional Law", "Corporate Law", "Supreme Court"]
  - name: "Advocate Fatema Khatun"
    role: "Senior Associate"
    credentials: "LL.M (London) | Bar Council Enrolled"
    specialties: ["Banking Law", "Civil Litigation"]

# Why choose us (6 items)
whyChooseUs:
  - icon: "trophy"
    title: "Proven Track Record"
    description: "800+ cases successfully handled with 97% success rate"
  - icon: "users"
    title: "Expert Team"
    description: "Experienced advocates working collaboratively"

# Contact
contact:
  address: "Supreme Court Bar Association\nChamber No: XXX, 3rd Floor\nDhaka-1000"
  phone: "+880 2-XXXXXXXX"
  mobile: "+880 1XXX-XXXXXX"
  email: "info@rahmanchamber.com"
  hours: "Sunday - Thursday: 9:00 AM - 6:00 PM"

# Footer
motto: "Justice Delayed is Justice Denied - We Ensure Swift & Fair Legal Solutions"
```

### Firm

```yaml
title: "Rahman & Associates Legal"
slug: "rahman-associates"
type: "firm"

# Navigation
logo:
  icon: "R&A"
  main: "RAHMAN & ASSOCIATES"
  sub: "LEGAL"
navLinks: ["FIRM", "PRACTICE AREAS", "PARTNERS", "CONTACT"]

# Hero
badge: "BANGLADESH'S LEADING LAW FIRM"
headline: "Legal Excellence\nRedefined"
subtitle: "Strategic legal solutions for corporations, multinationals, and global businesses"
description: "A full-service law firm delivering sophisticated legal services..."

# Stats bar (4 items)
stats:
  - number: "1000+"
    label: "Cases Resolved"
  - number: "20+"
    label: "Years Established"
  - number: "50+"
    label: "Corporate Clients"
  - number: "15+"
    label: "Practice Groups"

# About
about:
  heading: "About Rahman & Associates Legal"
  paragraphs:
    - "Founded in 2005, Rahman & Associates Legal has emerged as..."
    - "Our firm operates through specialized practice groups..."
  values:
    - icon: "target"
      title: "Strategic Approach"
      description: "Business-focused legal strategies aligned with client objectives"
    - icon: "globe"
      title: "Global Standards"
      description: "International best practices with local market expertise"

# Practice groups (9 items)
practiceGroups:
  - icon: "building"
    title: "Corporate & M&A"
    description: "Comprehensive corporate advisory for businesses..."
    services: ["Mergers & Acquisitions", "Corporate Restructuring", "Due Diligence"]
  - icon: "briefcase"
    title: "Banking & Finance"
    description: "Expert counsel for financial institutions..."
    services: ["Project Finance", "Structured Finance", "Capital Markets"]

# Managing partners (3 items)
partners:
  - name: "Advocate MD. Rahman"
    title: "Managing Partner"
    credentials: "LL.M (Harvard) | LL.B (Dhaka University) | 25+ Years"
    expertise: ["CORPORATE LAW", "M&A", "SUPREME COURT"]
  - name: "Advocate Tasneem Ahmed"
    title: "Senior Partner"
    credentials: "LL.M (Oxford) | Barrister (Lincoln's Inn) | 20+ Years"
    expertise: ["BANKING", "FINANCE", "ARBITRATION"]

# Why choose us (6 items)
whyChooseUs:
  - icon: "trophy"
    title: "Market Leader"
    description: "Recognized as Bangladesh's top-tier firm by international directories"
  - icon: "globe"
    title: "Global Network"
    description: "Strategic alliances with leading law firms across jurisdictions"

# Contact
contact:
  heading: "Let's Discuss Your Legal Needs"
  subheading: "Our team is ready to provide strategic legal counsel..."
  address: "Gulshan Corporate Center\nPlot 32, Road 11, Gulshan-1\nDhaka-1212"
  phone: "+880 2-8833XXXX"
  mobile: "+880 1XXX-XXXXXX"
  email: "info@raassociates.com"
  hours: "Sunday - Thursday: 9:00 AM - 7:00 PM"

# Footer
tagline: "Strategic Legal Excellence | Trusted by Bangladesh's Leading Corporations"
footerLinks:
  practiceAreas: ["Corporate & M&A", "Banking & Finance", "Litigation"]
  firm: ["About Us", "Partners", "Careers", "Contact"]
  resources: ["Legal Insights", "Publications", "Client Portal"]
```

## Reference Data

Located in `src/content/lookups/`:

- `courts.json` - Court names and IDs
- `districts.json` - Bangladesh districts
- `thanas.json` - Police stations/areas
- `practice-areas.json` - Legal practice categories

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
```

## Constraints

- Static site only (no server runtime)
- Markdown/YAML content only (no CMS or database)
- Minimal dependencies (Astro only)
- Bilingual via route-based i18n (`/bn/*`, `/en/*`)
- Git push deploys

## Prototypes

HTML design prototypes are in `/ui`:
- `advocate.html` - Individual advocate portfolio
- `chamber.html` - Legal chamber with team
- `firm.html` - Full-service law firm

These serve as design references for Astro component implementation.
