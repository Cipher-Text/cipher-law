import { defineCollection, z } from "astro:content";

// ============================================
// SHARED SCHEMAS
// ============================================

const locationSchema = z.object({
  country: z.literal("Bangladesh"),
  city: z.string().optional(),
  district: z.string().optional(),
  thana: z.string().optional(),
  address: z.string().optional(),
  mapUrl: z.string().url().optional()
});

const contactSchema = z.object({
  phone: z.string().optional(),
  mobile: z.string().optional(),
  email: z.string().email().optional(),
  whatsapp: z.string().optional(),
  bookingUrl: z.string().url().optional(),
  wechat: z.string().optional(),
  hours: z.string().optional(),
  emergencyPhone: z.string().optional()
});

const verificationSchema = z.object({
  tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  barCouncilId: z.string().optional(),
  barCouncilVerified: z.boolean().optional(),
  barAssociationMember: z.boolean().optional(),
  chamberVerified: z.boolean().optional(),
  lastCheckedAt: z.string().optional()
});

const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  canonical: z.string().url().optional()
});

const showSchema = z.object({
  verification: z.boolean().optional(),
  services: z.boolean().optional(),
  expertise: z.boolean().optional(),
  courts: z.boolean().optional(),
  locations: z.boolean().optional(),
  faqs: z.boolean().optional(),
  qr: z.boolean().optional(),
  vcard: z.boolean().optional(),
  quickContact: z.boolean().optional(),
  socialLinks: z.boolean().optional(),
  stats: z.boolean().optional(),
  team: z.boolean().optional(),
  whyChooseUs: z.boolean().optional(),
  credentials: z.boolean().optional()
});

const socialSchema = z.object({
  website: z.string().url().optional(),
  facebook: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  youtube: z.string().url().optional(),
  twitter: z.string().url().optional()
});

// ============================================
// HERO & STATS SCHEMAS
// ============================================

const statItemSchema = z.object({
  number: z.string(),
  label: z.string()
});

const heroSchema = z.object({
  badge: z.string().optional(),
  tagline: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional()
});

// ============================================
// SERVICE & PRACTICE SCHEMAS
// ============================================

const serviceSchema = z.object({
  icon: z.string().optional(),
  title: z.string(),
  description: z.string().optional()
});

const practiceAreaSchema = z.object({
  icon: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  services: z.array(z.string()).default([])
});

const expertiseItemSchema = z.object({
  title: z.string(),
  description: z.string().optional()
});

// ============================================
// CREDENTIALS SCHEMA
// ============================================

const credentialSchema = z.object({
  icon: z.string().optional(),
  title: z.string(),
  detail: z.string().optional()
});

// ============================================
// TEAM & PARTNER SCHEMAS
// ============================================

const teamMemberSchema = z.object({
  name: z.string(),
  role: z.string().optional(),
  credentials: z.string().optional(),
  specialties: z.array(z.string()).default([]),
  photo: z.string().optional()
});

const partnerSchema = z.object({
  name: z.string(),
  title: z.string().optional(),
  credentials: z.string().optional(),
  expertise: z.array(z.string()).default([]),
  photo: z.string().optional()
});

// ============================================
// WHY CHOOSE US / VALUE SCHEMAS
// ============================================

const valueItemSchema = z.object({
  icon: z.string().optional(),
  title: z.string(),
  description: z.string().optional()
});

const featureItemSchema = z.object({
  icon: z.string().optional(),
  text: z.string()
});

// ============================================
// ABOUT SECTION SCHEMA
// ============================================

const aboutSchema = z.object({
  heading: z.string().optional(),
  paragraphs: z.array(z.string()).default([]),
  features: z.array(featureItemSchema).default([]),
  values: z.array(valueItemSchema).default([])
});

// ============================================
// FOOTER SCHEMA
// ============================================

const footerLinksSchema = z.object({
  practiceAreas: z.array(z.string()).default([]),
  firm: z.array(z.string()).default([]),
  resources: z.array(z.string()).default([])
});

// ============================================
// LOGO SCHEMA (for firms)
// ============================================

const logoSchema = z.object({
  icon: z.string().optional(),
  main: z.string().optional(),
  sub: z.string().optional()
});

// ============================================
// ADVOCATE-SPECIFIC SCHEMA
// ============================================

const advocateSchema = z.object({
  level: z
    .enum(["Advocate (District Court)", "Advocate (High Court)", "Senior Advocate"])
    .optional(),
  enrollmentYear: z.number().int().optional(),
  chamberName: z.string().optional(),
  specialtiesNote: z.string().optional()
});

// ============================================
// ORGANIZATION-SPECIFIC SCHEMA
// ============================================

const organizationSchema = z.object({
  foundedYear: z.number().int().optional(),
  teamSize: z.number().int().optional(),
  multiLawyer: z.boolean().optional()
});

// ============================================
// BASE SCHEMA (shared by all types)
// ============================================

const baseSchema = z.object({
  // Required
  title: z.string(),
  type: z.enum(["advocate", "chamber", "firm"]),
  location: locationSchema,

  // Hero section
  hero: heroSchema.optional(),

  // Stats (array of number/label pairs)
  stats: z.array(statItemSchema).default([]),

  // Mini stats (for chamber about visual)
  miniStats: z.object({
    casesWon: z.number().optional(),
    years: z.number().optional(),
    successRate: z.number().optional()
  }).optional(),

  // About section
  about: aboutSchema.optional(),

  // Services (for advocate - 6 items typically)
  services: z.array(serviceSchema).default([]),

  // Practice areas (for chamber/firm - with sub-services)
  practiceAreas: z.array(practiceAreaSchema).default([]),

  // Practice area IDs (legacy - for lookups)
  practiceAreaIds: z.array(z.string()).default([]),

  // Expertise (for advocate sidebar)
  expertise: z.array(expertiseItemSchema).default([]),

  // Credentials (for advocate)
  credentials: z.array(credentialSchema).default([]),

  // Team members (for chamber)
  team: z.array(teamMemberSchema).default([]),

  // Partners (for firm)
  partners: z.array(partnerSchema).default([]),

  // Why choose us / differentiators
  whyChooseUs: z.array(valueItemSchema).default([]),

  // Contact
  contact: contactSchema.optional(),

  // Courts
  courts: z.array(z.string()).default([]),

  // Service types
  serviceTypes: z
    .array(
      z.enum([
        "online-consultation",
        "chamber-meeting",
        "document-review",
        "full-representation"
      ])
    )
    .default([]),

  // Verification
  verification: verificationSchema.optional(),

  // SEO
  seo: seoSchema.optional(),

  // Display toggles
  show: showSchema.optional(),

  // Social links
  social: socialSchema.optional(),

  // Footer
  motto: z.string().optional(),
  tagline: z.string().optional(),
  footerLinks: footerLinksSchema.optional(),

  // Logo (for firms with navigation)
  logo: logoSchema.optional(),
  navLinks: z.array(z.string()).default([]),

  // Legacy advocate/organization fields
  advocate: advocateSchema.optional(),
  organization: organizationSchema.optional()
});

// ============================================
// COLLECTION DEFINITIONS
// ============================================

const withLang = (lang: "bn" | "en") =>
  baseSchema.transform((data) => ({ ...data, lang }));

const bnAdvocates = defineCollection({
  type: "content",
  schema: withLang("bn")
});

const bnChambers = defineCollection({
  type: "content",
  schema: withLang("bn")
});

const bnFirms = defineCollection({
  type: "content",
  schema: withLang("bn")
});

const enAdvocates = defineCollection({
  type: "content",
  schema: withLang("en")
});

const enChambers = defineCollection({
  type: "content",
  schema: withLang("en")
});

const enFirms = defineCollection({
  type: "content",
  schema: withLang("en")
});

export const collections = {
  bn_advocates: bnAdvocates,
  bn_chambers: bnChambers,
  bn_firms: bnFirms,
  en_advocates: enAdvocates,
  en_chambers: enChambers,
  en_firms: enFirms
};
