# Torvani — Premium Automotive Detailing Website

A production-ready, luxury multi-page website for **Torvani**, a premium automotive detailing and ceramic coating brand. Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd torvani

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar, Footer, fonts, metadata)
│   ├── page.tsx                  # Homepage
│   ├── booking/page.tsx          # Booking page (multi-step form)
│   ├── services/
│   │   ├── page.tsx              # Services overview
│   │   ├── auto-detailing/page.tsx
│   │   └── ceramic-coating/page.tsx
│   ├── gallery/page.tsx          # Gallery with category filters
│   ├── testimonials/page.tsx     # Client testimonials
│   ├── terms-of-service/page.tsx
│   ├── privacy-policy/page.tsx
│   └── api/
│       ├── leads/route.ts        # Lead capture API
│       └── bookings/route.ts     # Booking submission API
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── ui/                       # Reusable UI components
│   └── booking/                  # Multi-step booking form
└── lib/
    ├── data.ts                   # Site content and data
    ├── types.ts                  # TypeScript types
    └── schemas.ts                # Zod validation schemas
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/services` | Services overview |
| `/services/auto-detailing` | Auto Detailing service page |
| `/services/ceramic-coating` | Ceramic Coating service page |
| `/gallery` | Gallery with category filters |
| `/testimonials` | Client testimonials |
| `/booking` | 6-step premium booking flow |
| `/terms-of-service` | Terms of Service |
| `/privacy-policy` | Privacy Policy |

## Booking Flow

1. **Service Selection** — Choose Auto Detailing or Ceramic Coating
2. **Vehicle Info** — Year, make, model, color, size, condition
3. **Contact / Lead Capture** — Lead is captured via `/api/leads`
4. **Package Selection** — Choose package tier and add-ons
5. **Appointment** — Select date and time
6. **Review & Confirm** — Final submission via `/api/bookings`

## Placeholders to Replace Before Launch

- Phone number (currently `(555) 123-4567`)
- Email (currently `info@torvani.com`)
- Address / City
- Social media links
- Gallery images (`/public/images/gallery/`)
- OG Image (`/public/og-image.jpg`)
- Site URL in metadata

## API Integration Points

The API routes include TODO comments for connecting:
- Database (Prisma, Supabase, MongoDB)
- Email notifications (Resend, SendGrid)
- CRM (HubSpot, GoHighLevel)
- Calendar (Google Calendar, Calendly)
- Payments (Stripe)
- Analytics (Google Analytics, Mixpanel)

## Legal Notice

Terms of Service and Privacy Policy are templates — have them reviewed by a legal professional before launch.

## License

All rights reserved. © 2026 Torvani Detailing.
