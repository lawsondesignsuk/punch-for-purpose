# Punch For Purpose

High-converting Next.js website for a UK-based charity boxing event brand.

## Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Stripe placeholder integration

## Local setup

1. Install Node.js 20+.
2. Install dependencies:

   npm install

3. Create `.env.local` (optional):

   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_GA_ID=
   STRIPE_SECRET_KEY=

4. Start dev server:

   npm run dev

## CMS-ready event model

Event data is currently mocked in `src/lib/events.ts` and structured for easy migration to a headless CMS such as Sanity or Strapi.

## Stripe

If `STRIPE_SECRET_KEY` is present, API routes create real Stripe Checkout sessions.
If not present, flows redirect to placeholder success pages for development.
