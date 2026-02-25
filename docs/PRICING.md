# Pricing & Business Model

---

## Revenue model

Cipher Law is a B2B SaaS directory for Bangladesh legal professionals. Revenue comes from profile subscriptions and one-time verification fees. The directory is free for the public to browse.

---

## Subscription tiers

### Free
- Basic listing in the directory (name, type, district only)
- No dedicated portfolio page
- No contact details
- No verification badge

### Standard — ৳2,000 / month (~$18)
- Dedicated portfolio page at `/cipher-law/en/a/[slug]` etc.
- Full sections: hero, stats, services, credentials, contact
- Bilingual (English + Bengali pages)
- Tier 1 verification badge (self-reported)
- Email support

### Professional — ৳5,000 / month (~$45)
- Everything in Standard
- Tier 2 verification (Bar Council ID checked)
- Priority placement in directory listings
- All `show` section toggles enabled
- Social links
- Team / partner profiles
- Court associations
- WhatsApp quick contact button
- Service type badges

### Premium — ৳12,000 / month (~$110)
- Everything in Professional
- Tier 3 verification (full background check)
- Featured badge on directory card
- Top placement in search results
- Custom QR code and vCard download *(Phase 2)*
- Open Graph social sharing image *(Phase 2)*
- Profile analytics dashboard *(Phase 3)*
- Dedicated account manager

---

## Verification fees (one-time)

| Check | Fee |
|-------|-----|
| Bar Council ID verification | ৳1,000 |
| Bar Association membership confirmation | ৳500 |
| Chamber registration check | ৳2,000 |
| Full background check (Tier 3) | ৳5,000 |

Verification is handled manually. After payment, the `verification` fields in the profile frontmatter are updated and the badge is displayed on the next deployment.

---

## Billing

- **Currency:** BDT primary, USD for international clients
- **Payment gateways:** bKash, Nagad, Rocket, bank transfer, SSLCommerz *(Phase 3)*
- **Billing cycles:** Monthly or annual (2 months free on annual)
- **Trial:** 14-day free trial on Standard tier

---

## Operating costs

| Item | Cost |
|------|------|
| Hosting (GitHub Pages) | Free |
| Domain (`cipher-law.com.bd` or similar) | ~৳1,200 / year |
| SSL certificate | Included with GitHub Pages |
| GitHub Actions build minutes | Free tier (2,000 min / month) |
| CDN | Included |
| **Total** | **~৳1,200 / year** |

Gross margins are very high in Phase 1 and 2 — static hosting has near-zero variable cost per additional profile.

---

## Target market

- ~80,000 enrolled advocates in Bangladesh (Bangladesh Bar Council)
- ~40,000 estimated active practitioners
- ~5,000 chambers in Dhaka division
- ~500 registered law firms

At 1% penetration of active practitioners ≈ 400 subscribers.
At an average of ৳3,500 / month per subscriber ≈ ৳1,400,000 / month (~$12,700).

---

## Monetisation roadmap

### Phase 1 (current)
- Manual content management via markdown files
- Direct client onboarding (manual profile creation)
- Payment via bank transfer or mobile banking

### Phase 2
- Self-service profile editor
- Online payment integration (bKash / SSLCommerz)
- Automated tier enforcement

### Phase 3
- Lead generation (client inquiries routed to lawyers)
- Sponsored placements in directory
- Legal marketplace (document templates, consultation booking)
- White-label portfolio sites for firms
