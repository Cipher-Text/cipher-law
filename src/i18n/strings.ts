export type Lang = "bn" | "en";

type Dict = Record<string, { bn: string; en: string }>;

const STRINGS: Dict = {
  home: { bn: "হোম", en: "Home" },
  advocates: { bn: "অ্যাডভোকেট", en: "Advocates" },
  chambers: { bn: "চেম্বার", en: "Chambers" },
  firms: { bn: "ফার্ম", en: "Firms" },
  verified: { bn: "যাচাইকৃত", en: "Verified" },
  call: { bn: "কল", en: "Call" },
  whatsapp: { bn: "হোয়াটসঅ্যাপ", en: "WhatsApp" },
  email: { bn: "ইমেইল", en: "Email" },
  book: { bn: "বুকিং", en: "Book" },
  courts: { bn: "কোর্টসমূহ", en: "Courts" },
  practiceAreas: { bn: "প্র্যাকটিস এরিয়া", en: "Practice Areas" },
  services: { bn: "সেবাসমূহ", en: "Services" },
  location: { bn: "অবস্থান", en: "Location" },
  verification: { bn: "যাচাই তথ্য", en: "Verification" },
  lastChecked: { bn: "সর্বশেষ যাচাই", en: "Last checked" },
  disclaimer: { bn: "ডিসক্লেইমার", en: "Disclaimer" },
  requestConsultation: { bn: "পরামর্শের অনুরোধ", en: "Request Consultation" },
  documentReview: { bn: "ডকুমেন্ট রিভিউ", en: "Document Review" }
};

export function t(lang: Lang, key: string): string {
  const entry = STRINGS[key];
  if (!entry) return key;
  return entry[lang];
}
