# Cueserve Website — Architecture

> Last updated: May 2026  
> Maintained by: Viral Parikh

---

## Project Structure

```Text
/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Homepage
│   ├── services/             # Service pages
│   ├── case-studies/         # Case study pages
│   ├── about/                # About page
│   ├── blog/                 # Blog index & dynamic routes
│   ├── contact/              # Contact & booking page
│   └── layout.tsx            # Root layout
├── components/               # Reusable UI components
│   ├── Hero.tsx
│   ├── CTA.tsx
│   ├── Navigation.tsx
│   └── ...
├── content/                  # MDX content files
│   ├── blog/                 # Blog posts (.mdx)
│   └── case-studies/         # Case studies (.mdx)
├── public/                   # Static assets
│   ├── logos/
│   ├── images/
│   └── ...
├── styles/                   # Global CSS
│   └── globals.css           # Tailwind imports & globals
├── lib/                      # Utilities, helpers, types
│   ├── api/                  # Server functions, email handlers
│   └── ...
├── tailwind.config.ts        # Design tokens & Tailwind config
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── TECH-STACK.md             # Technology choices & rationale
├── ARCHITECTURE.md           # This file
└── README.md                 # Project overview & objectives
```

## Page Structure

### Dynamic Routes

- **Blog**: `app/blog/[slug]/page.tsx` — Renders MDX files from `/content/blog`
- **Case Studies**: `app/case-studies/[slug]/page.tsx` — Renders MDX files from `/content/case-studies`

### Static Pages

- **Homepage**: `app/page.tsx`
- **Services**: `app/services/page.tsx`
- **About**: `app/about/page.tsx`
- **Contact**: `app/contact/page.tsx` (includes Calendly embed)

## Content Strategy

### MDX Files

All blog posts and case studies are stored as `.mdx` files in Git under `/content/`. Each file includes:

```mdx
---
title: "Post Title"
date: "2026-05-01"
author: "Name"
description: "Short summary"
---

# Content here...
```

Files are parsed and rendered at build time via `getStaticProps` or server-side via `generateStaticParams`.

## Component Hierarchy

- **Layout**: Root layout, page-level layouts
- **Sections**: Hero, Features, CTA, Testimonials (reusable across pages)
- **UI**: Buttons, Cards, Forms, Navigation, Footer

## Data Flow

1. **Static Content** → MDX files in `/content/` → Parsed at build time → Rendered as pages
2. **Forms** → User submits → `lib/api/sendEmail.ts` → Resend API → Email to Cueserve
3. **Booking** → User clicks Calendly embed → Calendly handles scheduling
4. **SEO Metadata** → `next/head` Metadata API injects OG tags, structured data → Google/social platforms

## Key Architectural Decisions

For strategic tool choices and rationale, see [TECH-STACK.md](TECH-STACK.md).

| Decision | Rationale |
|----------|----------|
| App Router (not Pages Router) | Native async/await, RSCs, server components for security |
| MDX + Git workflow | All content authors are developers; Git-based workflow is sufficient |
| Static generation + ISR | Blog content is relatively stable; ISR enables incremental updates without full rebuilds |
| Tailwind tokens in config | Single source of truth for brand colors, fonts, spacing; no scattered CSS |

## Deployment & CI/CD

- **Platform**: Vercel
- **Trigger**: Push to `main` branch
- **Preview**: Automatic preview deployment per PR
- **Analytics**: Vercel Analytics + Google Search Console

## Design System

Design tokens are defined in `tailwind.config.ts` and map directly to the Cueserve Brand Style Guide.

| Token | Value |
|-------|-------|
| `cs-dark-blue` | `#0C385A` |
| `cs-light-blue` | `#2384C6` |
| Font — Display | Bebas Neue |
| Font — Primary | Outfit |
| Font — Mono | JetBrains Mono |

Full token reference: `cueserve-style-guide.html`

## Related Documentation

- [TECH-STACK.md](TECH-STACK.md) — Technology choices, tools, and strategic decisions
- [README.md](README.md) — Project objectives and business positioning
