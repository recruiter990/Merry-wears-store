# Merry wears.

Editorial website for **Merry & Cozy** — Christmas and seasonal lifestyle recommendations. Independent affiliate publication. Not a store.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS
- Lucide icons
- Structured content in `content/`

## Develop

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add Amazon affiliate links

1. Join Amazon Associates and wait for approval. Do not set the site as an Amazon partner until then.
2. In `.env.local`, set `NEXT_PUBLIC_AMAZON_ASSOCIATES_ACTIVE=true` so the required statement appears: *As an Amazon Associate I earn from qualifying purchases.*
3. Open `content/products.ts`.
4. For each product, set `amazonUrl` to your Associates link (or SiteStripe short link). Leave `null` until you have a real URL.
5. Replace editorial placeholder art only with Amazon-approved image methods once you are allowed to use them. Do not scrape Amazon images or reviews.
6. Never add invented prices, star ratings, stock or discounts. Optional `priceNote` can say to check the live Amazon price.

## Add articles, categories and collections

- Articles: `content/articles-part-a.ts`, `content/articles-part-b.ts` (exported via `content/articles.ts`)
- Products: `content/products.ts`
- Gift guides: `content/gift-guides.ts`
- Category pages: `content/categories.ts`
- Seasonal collections: `content/collections.ts` (`active: false` hides a season as “coming later”)
- Navigation: `content/site.ts`

## Publishing

1. Set `NEXT_PUBLIC_SITE_URL` to the public HTTPS origin (required for canonical tags, sitemap and Pinterest share URLs).
2. Set `CONTACT_EMAIL`. Optionally set `RESEND_API_KEY` so the contact form actually emails you.
3. Set `NEWSLETTER_WEBHOOK_URL` to Buttondown, Loops, Mailchimp or another list endpoint.
4. Set `NEXT_PUBLIC_PINTEREST_PROFILE` when the Pinterest account exists.
5. Deploy to Vercel, Netlify or any Node host:

```bash
npm run build
npm start
```

On Vercel: import the GitHub repo, add the environment variables, deploy.

## Remaining configuration

- Legal placeholders: `[SITE OWNER NAME]`, `[CONTACT EMAIL]`, analytics and cookie tools in Privacy, Cookies and Terms.
- Cookie consent banner if you add analytics.
- Real Associates links and (only if approved) Amazon image tools.
- Pinterest profile URL.
- Review all policy pages with counsel before treating them as compliance.

Photography on editorial pages uses Unsplash (licence allows commercial use). Product cards use original placeholder illustrations, not marketplace photography.
