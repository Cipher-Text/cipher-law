# Pricing & Business Model

## Revenue Model

Cipher Law is a **B2B SaaS directory** for Bangladesh legal professionals. Revenue comes from profile subscriptions and verification services.

## Proposed Tier Structure

### Free Tier
- Basic directory listing (name, location, practice area)
- Standard card on directory page
- No dedicated portfolio page
- No verification badge

### Standard — ৳2,000/month (~$18 USD)
- Dedicated portfolio page (`/a/slug`, `/c/slug`, or `/f/slug`)
- Full sections: hero, services, expertise, contact
- Basic SEO (title, description, canonical)
- Bengali + English pages
- Tier 1 verification badge (self-reported)
- Email support

### Professional — ৳5,000/month (~$45 USD)
- Everything in Standard
- Tier 2 verification (Bar Council ID verified)
- Priority placement in directory search
- `show` toggle for all sections
- Social links, WhatsApp integration
- Team/partner profiles (chamber/firm)
- Court associations display
- Quick contact floating button

### Premium — ৳12,000/month (~$110 USD)
- Everything in Professional
- Tier 3 verification (full background check)
- Featured badge on directory card
- Top placement in search results
- Custom QR code and vCard download
- OpenGraph image generation
- Structured data (schema.org) for Google rich results
- Analytics dashboard (future)
- Dedicated account manager

## Verification Pricing (One-Time)

| Service | Price | Includes |
|---------|-------|----------|
| Bar Council ID check | ৳1,000 | Verify enrollment number against Bar Council records |
| Bar Association membership | ৳500 | Confirm active membership status |
| Chamber verification | ৳2,000 | Physical address + team confirmation |
| Full background check | ৳5,000 | All above + credential verification + reference check |

## Payment Considerations

- **Currency:** BDT (Bangladeshi Taka) primary, USD for international
- **Payment gateways:** bKash, Nagad, Rocket (mobile banking), bank transfer, card (SSLCommerz)
- **Billing cycle:** Monthly or annual (2 months free on annual)
- **Trial:** 14-day free trial on Standard tier

## Cost Structure

| Item | Monthly Cost | Notes |
|------|-------------|-------|
| Hosting (static) | $0–20 | Netlify/Vercel free tier covers most usage |
| Domain | ~$12/year | .com.bd or .law domain |
| SSL | $0 | Included with hosting |
| Build minutes | $0 | Well within free tier limits |
| CDN | $0 | Included with Netlify/Vercel |

**Gross margin is very high** — static hosting has near-zero variable cost per profile.

## Monetization Roadmap

### Phase 1 (Current)
- Manual content management via markdown files
- Direct client onboarding (manual profile creation)
- Payment via bank transfer / mobile banking

### Phase 2
- Self-service profile editor (authenticated)
- Online payment integration (bKash/SSLCommerz)
- Automated tier management

### Phase 3
- Lead generation (client inquiries routed to lawyers)
- Sponsored placements in directory
- Legal marketplace (document templates, consultation booking)
- White-label portfolio sites for firms

## Target Market Size

- **Bangladesh Bar Council** has ~80,000+ enrolled advocates
- **Active practicing lawyers** estimated at 40,000+
- **Law chambers** in Dhaka alone: 5,000+
- **Registered law firms:** 500+
- Even 1% penetration = 400+ paying subscribers
