# Cueserve Website — Tech Stack

> Last updated: May 2026  
> Maintained by: Viral Parikh

---

## Core

- [Next.js](https://nextjs.org/) — 14+ (App Router)
  - SEO is a core requirement, not an add-on. Next.js has native SSR/SSG/ISR, routing, metadata API.
  - Next.js + Vercel is the industry standard for SEO-critical marketing sites.

- [TypeScript](https://www.typescriptlang.org/) — 5+
  - Type safety across the codebase.

- [Tailwind CSS](https://tailwindcss.com/) — 3+
  - Utility-first styling that maps to Cueserve design tokens.
  - Design tokens from the Cueserve style guide map directly to `tailwind.config.ts`.
  - Faster iteration. No context switching between component and stylesheet files.

## Content

- [MDX](https://mdxjs.com/) 
  - Blog posts and case studies — Markdown + JSX, stored in Git as `.mdx` files.
  - Content lives in `/content/blog` and `/content/case-studies` as `.mdx` files.
  - Avoids CMS overhead and monthly cost at this stage.
  - All content updates go through Git, which works for the current team of technical content authors. Revisit if non-technical editors are onboarded in the future.

## External Integrations

- [Resend](https://resend.com/) — Transactional email for lead gen form submissions
- [Calendly](https://calendly.com/) — Call booking; embedded inline on `/contact` page
- [Vercel](https://vercel.com/) — Deployment & Hosting; Zero-config deployment, edge CDN, preview deployments per PR, built-in performance monitoring.

## SEO

| Tool | Purpose |
|------|---------|
| Next.js App Router Metadata API | OG tags, Twitter cards, canonical URLs, structured data |
| [`next-sitemap`](https://github.com/iamvishnusankar/next-sitemap) | Auto-generates `sitemap.xml` and `robots.txt` on build |
| `next/image` | Automatic image optimization, lazy loading, WebP conversion |
| Google Search Console | Indexing status, keyword performance, crawl errors |
| Vercel Analytics | Core Web Vitals, real-user performance data |

---

## Decisions Log

### Resend over SendGrid / Mailchimp

- **Date**: May 2026
- **Why**: Simple API, generous free tier, purpose-built for transactional email from Next.js. No over-engineering for what is a basic lead form notification.

### Calendly over custom booking

- **Date**: May 2026
- **Why**: Zero backend. Embeds inline. Handles reminders, rescheduling, and calendar sync out of the box. Not worth building custom for v1.

### Vercel over AWS / self-hosted

- **Date**: May 2026
- **Why**: First-class Next.js support (same team). Preview deployments per PR are valuable for a small team. Edge CDN included. Revisit if cost becomes a factor at scale.

## Revisit Triggers

Flag these decisions for re-evaluation if:

- Non-technical editors need to update content → migrate to **Sanity**
- Form volume grows significantly → evaluate **HubSpot** integration
- Multi-region or compliance requirements → evaluate **AWS/GCP**
- Blog/SEO content scales → consider dedicated **content pipeline**

---

## Related Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) — Project structure, page routes, component hierarchy, data flow
- [README.md](README.md) — Project objectives and business positioning
