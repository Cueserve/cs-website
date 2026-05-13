# CLAUDE.md

> Project-specific rules for Claude Code.
> Last updated: 2026-05-01
> Maintained by: Viral Parikh

---

## What this is

Cueserve corporate website rebuild — AI-native repositioning.
Currently **docs-only**; no implementation has started. See `README.md` for objectives.

## Read these when relevant

| When working on | Read |
| ---------------- | ------ |
| Anything | `README.md` — objectives, positioning |
| Tooling / library choices | `TECH-STACK.md` — stack + Decisions Log + Revisit Triggers |
| Routes, components, SEO, design tokens | `ARCHITECTURE.md` — structure, conventions, data flow |
| Roadmap items | `TODO.md` — open opportunities |

Do not duplicate facts from these files into `CLAUDE.md`. Link, don't copy.

## Stack — do not deviate without asking

Stack is defined in `TECH-STACK.md`. Do not introduce libraries, services, or patterns outside that list without flagging it first. See its "Revisit Triggers" for what would justify a change.

## Hard conventions — do not break

- **Server Components by default.** `'use client'` only on interactive leaves (form inputs, mobile menu toggle, Calendly trigger).
- **Images**: `next/image` only. No `<img>` tags. Exactly one `priority` image per route (the LCP element).
- **Fonts**: `next/font` only. No `<link href="fonts.googleapis.com">` or other CDN font links.
- **Colocation**: route-only UI lives in `app/<route>/_components/`. Promote to `src/components/` only when a 2nd route imports it.
- **Metadata**: every route exports `metadata` or `generateMetadata`. Root sets `title.template`; child routes supply only the page-specific portion. No untitled / undescribed pages.
- **Caching**: MDX rendering uses `use cache` + `cacheLife` + `cacheTag`. Invalidate via `updateTag` from Server Actions.
- **SEO files**: `app/sitemap.ts` and `app/robots.ts` are programmatic — do not introduce `next-sitemap` or static files.
- **Design tokens**: brand colors, fonts, spacing live in `src/app/globals.css` under Tailwind v4's `@theme` directive (CSS-first config — there is no `tailwind.config.ts`). No inline hex, no scattered CSS beyond `globals.css`.
- **File naming**: React component files use **PascalCase** (`Header.tsx`, `HeroSection.tsx`). Non-component files use **lowercase** (`page.tsx`, `layout.tsx`, `robots.ts`, `sitemap.ts`, utilities). PascalCase signals "importable component."
- **Comments**: write none by default. Names should explain *what*. Comments only for non-obvious *why* (constraint, workaround, invariant).

## Project state

- **Scaffolded.** Next.js 16 + React 19 + TypeScript 5 + Tailwind v4 in place via `create-next-app` (`--typescript --tailwind --app --src-dir --eslint --import-alias "@/*" --use-npm`).
- Layout: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `next-env.d.ts`, `.gitignore` at repo root; code under `src/app/` (currently the default Next.js starter — home page, layout, `globals.css`).
- Package manager: **npm**. Lockfile is `package-lock.json`. Do not introduce `pnpm-lock.yaml` / `yarn.lock`.
- Cueserve-specific implementation (routes, MDX content, design tokens, brand fonts, components from `ARCHITECTURE.md`) has **not yet replaced** the starter — that work is upcoming.

## Ask before doing

Pause and confirm before:

- Adding a new dependency
- Adding a new top-level route or page
- Changing design tokens (colors, fonts, spacing scale)
- Introducing a CMS or moving content out of MDX/Git
- Anything listed under `TECH-STACK.md` → "Revisit Triggers"
- Restructuring `app/` or `src/`

## Out of scope unless asked

- Authentication / login flows (no user accounts on this site)
- Database (content is MDX in Git)
- E-commerce / payments
- i18n / multi-locale
- Analytics beyond Vercel Analytics + Google Search Console

## Tone for in-code text

- **Marketing copy**: client-facing, professional, outcome-oriented (mirror `README.md` framing).
- **Code**: concise, no filler comments, no boilerplate JSDoc.
