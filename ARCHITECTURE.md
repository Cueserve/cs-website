# Cueserve Website — Architecture

> Last updated: May 2026  
> Maintained by: Viral Parikh

---

## Project Structure

```Text
CS-Website/
├── .claude/
│   ├── commands/               # Claude Code slash commands (/arch-plan, /prd-generate, etc.)
│   ├── skills/                 # Custom Claude Code skills (cs-ui-dev-angular, cs-be-firebase, etc.)
│   └── hooks/                  # Claude Code event hooks
├── .github/
│   └── copilot-instructions.md # GitHub Copilot workspace instructions & coding standards
├── .vscode/
│   ├── extensions.json
│   ├── settings.json
│   └── launch.json
├── docs/                       # Project documentation
├── tools/
│   └── prompts/                # LLM prompt templates (source for slash commands)
├── src/
│   ├── app/                    # Routing & SEO (Server Components by default)
│   │   ├── layout.tsx          # Root layout — global metadata defaults, font variables, <html>/<body>
│   │   ├── fonts.ts            # next/font declarations (Space Grotesk, DM Sans, JetBrains Mono)
│   │   ├── globals.css         # Tailwind v4 import + @theme design tokens (brand colors, font vars)
│   │   ├── page.tsx            # Home route
│   │   ├── opengraph-image.tsx # Default OG image (used when a route doesn't override)
│   │   ├── icon.tsx            # Favicon
│   │   ├── manifest.ts         # Web app manifest
│   │   ├── sitemap.ts          # Programmatic sitemap (reads MDX frontmatter)
│   │   ├── robots.ts           # Search engine directives
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── metadata.ts     # Per-route SEO override
│   │   │   ├── opengraph-image.tsx  # (optional) route-specific OG
│   │   │   └── _components/    # Colocated route-only UI
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── metadata.ts
│   │   ├── contact/
│   │   │   ├── page.tsx
│   │   │   ├── metadata.ts
│   │   │   └── _actions.ts     # Server Action for lead form
│   │   ├── blog/
│   │   │   ├── page.tsx        # Blog index
│   │   │   ├── metadata.ts
│   │   │   └── [slug]/
│   │   │       ├── page.tsx    # Renders MDX from /content/blog
│   │   │       └── (uses generateMetadata for per-post SEO)
│   │   └── case-studies/
│   │       ├── page.tsx
│   │       ├── metadata.ts
│   │       └── [slug]/
│   │           └── page.tsx    # Renders MDX from /content/case-studies
│   ├── components/             # Reusable UI components
│   │   ├── Hero.tsx
│   │   ├── CTA.tsx
│   │   ├── Navigation.tsx
│   │   └── ...
│   ├── content/                # MDX content files
│   │   ├── blog/               # Blog posts (.mdx)
│   │   └── case-studies/       # Case studies (.mdx)
│   ├── lib/                    # Shared Logic (analytics, constants, utilities, helpers, types)
│   │   └── api/                # Server-side helpers (Resend client, email templates) — called from Server Actions / route handlers
│   └── ...
├── public/                     # Static Assets (logos, OG images, favicons)
│   ├── logos/
│   ├── images/
│   └── ...
├── postcss.config.mjs        # PostCSS config — loads @tailwindcss/postcss (Tailwind v4)
├── next.config.ts            # Next.js configuration
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

### Server-side handlers

- **Lead form submission**: Server Action in `src/app/contact/_actions.ts` → calls `src/lib/api/sendEmail.ts` → Resend
- **Route handlers** (if needed): `src/app/api/<route>/route.ts` (App Router convention)

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

Files are parsed and rendered as Server Components. Dynamic MDX routes use `generateStaticParams` to enumerate slugs at build time. The `use cache` directive (with `cacheLife` / `cacheTag`) controls revalidation — `updateTag` invalidates on demand when content changes.

## SEO Conventions

### Metadata sources

| Scope | Source | Purpose |
|-------|--------|---------|
| Site-wide defaults | `app/layout.tsx` → `export const metadata` | Default `<title>` template, OG site name, Twitter handle, canonical base URL, theme color |
| Static route override | `app/<route>/metadata.ts` → `export const metadata` | Per-route title, description, OG image override |
| Dynamic route (MDX) | `app/blog/[slug]/page.tsx` → `export async function generateMetadata` | Reads MDX frontmatter (`title`, `description`, `date`, `ogImage`) per post |

**Rule**: every route exports metadata. There is no untitled / undescribed page. The root `metadata` sets a `title.template` (e.g. `"%s | Cueserve"`) so child routes only supply the page-specific portion.

### Structured data (JSON-LD)

Helpers live in `src/lib/seo/jsonLd.ts`:

- `organizationJsonLd()` — emitted from `app/layout.tsx`
- `articleJsonLd(post)` — emitted from `app/blog/[slug]/page.tsx`
- `breadcrumbJsonLd(trail)` — emitted from any nested route

Each helper returns a string; pages render it as `<script type="application/ld+json">` inside the Server Component output.

### Open Graph images

- Default site image: `app/opengraph-image.tsx` (dynamic `ImageResponse` or static PNG).
- Route-specific overrides: drop an `opengraph-image.tsx` (or `.png`) in the route folder — Next.js auto-wires it into that route's metadata.

## Component Hierarchy

### Global vs colocated

| Lives in | Use for | Example |
|----------|---------|---------|
| `src/components/ui/` | Cross-route primitives reused on 3+ pages | `Button`, `Card`, `Input`, `Navigation`, `Footer` |
| `src/components/sections/` | Reusable composed sections referenced by 2+ routes | Generic `Hero`, `CTA`, `TestimonialGrid` |
| `app/<route>/_components/` | Route-specific UI — never imported from another route | `ServiceHero`, `ContactForm`, `BlogPostHeader` |

**Rule**: default to colocation in `_components/`. Promote to `src/components/` **only** when a second route needs to import it. Private folders (prefixed `_`) are excluded from routing by Next.js, so they're safe to nest freely.

**Why**: keeps route bundles small (heavy route-specific components don't ship with unrelated routes), and reduces the cognitive cost of finding a component — it's next to the page that uses it.

### Image conventions

All images use [`next/image`](https://nextjs.org/docs/app/api-reference/components/image). Direct `<img>` tags are not used.

| Scenario | Required props | Why |
|----------|----------------|-----|
| Above-the-fold hero / LCP candidate | `priority`, explicit `width`/`height` (or `fill` + parent sizing) | Skips lazy-loading and preloads the image — directly improves Largest Contentful Paint |
| Below-the-fold | Default lazy loading, explicit `width`/`height` (or `fill` + parent sizing) | Avoids layout shift; defers cost until needed |
| Decorative | `alt=""`, `aria-hidden="true"` | A11y — not announced by screen readers |
| Logo / SVG icon | Inline SVG component, not `next/image` | Smaller payload, themable via CSS |

**Rule of thumb**: exactly **one** image per route should have `priority` — the LCP element. Multiple `priority` images defeat the purpose (they all compete for early-bandwidth slots).

## Data Flow

1. **Static Content** → MDX files in `/content/` → parsed in Server Components, cached via `use cache` + `cacheTag`, rendered as static HTML at build (with PPR for dynamic islands)
2. **Forms** → user submits → Server Action `app/contact/_actions.ts` → `lib/api/sendEmail.ts` → Resend → email to Cueserve
3. **Booking** → user clicks Calendly embed → Calendly handles scheduling
4. **SEO Metadata** → App Router Metadata API (`export const metadata` / `generateMetadata` per route) injects `<title>`, OG tags, Twitter cards, canonical URLs; structured data emitted as JSON-LD `<script>` in Server Components → Google / social platforms

## Key Architectural Decisions

For strategic tool choices and rationale, see [TECH-STACK.md](TECH-STACK.md).

| Decision | Rationale |
|----------|----------|
| App Router (not Pages Router) | Native async/await, RSCs, Server Components for security |
| **Server Components by default** | `'use client'` is opt-in, applied only to interactive leaf nodes (mobile menu toggle, form inputs, Calendly trigger). Keeps the JS bundle minimal — directly serves LCP / TBT / INP scores. |
| **PPR + Cache Components** | Static shell (header, footer, hero) prerendered; dynamic islands (form state, personalization) stream in. `use cache` + `cacheLife` + `cacheTag` control freshness without full rebuilds. |
| MDX + Git workflow | All content authors are developers; Git-based workflow is sufficient |
| Native `app/sitemap.ts` over `next-sitemap` | Reuses MDX loader, type-safe, zero deps, framework-tracked |
| Tailwind v4 CSS-first tokens (`@theme` in `globals.css`) | Single source of truth for brand colors, fonts, spacing; no separate `tailwind.config.ts`; no scattered CSS |

## Deployment & CI/CD

- **Platform**: Vercel
- **Trigger**: Push to `main` branch
- **Preview**: Automatic preview deployment per PR
- **Analytics**: Vercel Analytics + Google Search Console

## Design System

Design tokens are defined in `src/app/globals.css` under Tailwind v4's `@theme` directive (CSS-first config) and map directly to the Cueserve Brand Style Guide. There is no `tailwind.config.ts` — v4 reads tokens from `@theme` and auto-generates the corresponding utility classes (`bg-cs-dark-blue`, `font-display`, etc.).

Brand primaries:

| Token | CSS variable | Value |
|-------|--------------|-------|
| `cs-dark-blue` | `--color-cs-dark-blue` | `#0C385A` |
| `cs-light-blue` | `--color-cs-light-blue` | `#2384C6` |

Surfaces, borders, ink scales, and semantic colors are extracted into `@theme` as well — see `src/app/globals.css` for the full token set (`cs-surface*`, `cs-border*`, `cs-ink*`, `cs-success*`).

Fonts:

| Token | CSS variable | Value |
|-------|--------------|-------|
| Font — Display | `--font-display` | Space Grotesk |
| Font — Primary | `--font-primary` | DM Sans |
| Font — Mono | `--font-mono` | JetBrains Mono |

Example shape:

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  --color-cs-dark-blue: #0C385A;
  --color-cs-light-blue: #2384C6;
  --font-display: var(--font-bebas-neue);
  --font-primary: var(--font-outfit);
  --font-mono: var(--font-jetbrains-mono);
}
```

Full token reference: `cueserve-style-guide.html`

### Font loading

Fonts are loaded via [`next/font`](https://nextjs.org/docs/app/api-reference/components/font) in `src/app/fonts.ts`, then exposed as CSS variables on `<html>` from `app/layout.tsx`.

| Font | Source | Variable |
|------|--------|----------|
| Bebas Neue | `next/font/google` | `--font-display` |
| Outfit | `next/font/google` | `--font-primary` |
| JetBrains Mono | `next/font/google` | `--font-mono` |

`src/app/globals.css` re-exposes these variables under `@theme` (e.g. `--font-display: var(--font-bebas-neue)`) so Tailwind v4 generates the matching utility classes (`font-display`, `font-mono`, etc.) automatically — no `tailwind.config.ts` needed.

**Why**:

- `next/font` self-hosts the font files at build time → zero requests to Google's CDN at runtime → no third-party DNS / TLS hop.
- Auto-generates a fallback font with adjusted metrics → eliminates Cumulative Layout Shift (CLS) when web fonts swap in.
- `font-display: swap` is set automatically — text is visible immediately with the fallback.

## Related Documentation

- [TECH-STACK.md](TECH-STACK.md) — Technology choices, tools, and strategic decisions
- [README.md](README.md) — Project objectives and business positioning
