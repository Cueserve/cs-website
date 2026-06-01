# Cueserve Website — Todos

## Opportunities for Best/Latest

- [x] **Ensure React 19 Integration**: Verify and update to React 19 for concurrent features (smoother interactions, better performance).
  - **Check current version**: Run `npm list react` to confirm if React 19 is installed (Next.js 16 should include it, but verify).
  - **Update if needed**: If not at 19, run `npm update react react-dom` (or `npm install react@latest react-dom@latest`).
  - **Validate**: Restart dev server (`npm run dev`) and check console for React 19 features (e.g., concurrent rendering logs).

- [ ] **Add AI-native visitor experience**: Build a polished AI-guided discovery widget to show that AI is a core capability.
  - **Install Vercel AI SDK**: Run `npm install @vercel/ai`.
  - **Add AI Advisor widget**: Create `src/components/AIAdvisor.tsx` and embed it in `src/app/home/page.tsx` or `src/app/layout.tsx`.
  - **Guide visitors**: Use prompts like “What problem are you solving?”, “Which outcome matters most?”, and “Recommended AI solution”.
  - [ ] **Lead-gen / conversion with AI**: Convert AI interactions into qualified leads and measurable funnel improvements.
    - **Smart contact flow**: Capture visitor intent in the AI Advisor and auto-summarize into a sales-ready note attached to the contact Server Action (`src/app/contact/_actions.ts`).
    - **Free audit CTA**: Offer an `AI Readiness Snapshot` or short audit gated behind an email; generate a lightweight PDF or summary on submit.
    - **Sales metadata**: Auto-extract `industry`, `challenge`, `priority`, and `estimated impact` fields and include in lead emails (Resend) for faster qualification.
    - **Conversion tracking**: Add UTM-tagged CTAs and record events to Vercel Analytics / Google Analytics for A/B testing impact.
  - **Test**: Run `npm run dev`, verify the widget loads cleanly, and confirm mobile and desktop behavior.

- [ ] **AI-backed credibility and proof**: Surface measurable AI outcomes, case studies, and concise tooling signals.
  - **Add capability band**: Add an `AI Capabilities` band on the Home or About page listing pillars (GenAI engineering, agentic automation, AI‑driven workflows, data-to-decision systems).
  - **Publish an AI case study**: Add `/content/case-studies/ai-<slug>.mdx` with before/after metrics (time saved, error reduction, revenue uplift) and include structured data (`articleJsonLd`).
  - **Tooling & stack strip**: Add a non-technical "We build on" row (OpenAI, Anthropic, LangChain, Vercel AI, Kubernetes) to signal engineering depth.
  - **Artifacts & proofs**: Link to a short architecture diagram, sample prompt or model card, and a brief experiment note under an `AI Lab` or `Insights` page.
  - **Validate**: Run `npm run dev`, confirm the case-study appears in the sitemap and renders meta/JSON-LD correctly.

- [ ] **AI-first content and SEO**: Create a content program and SEO pipeline that surfaces AI-native authority and long-tail organic traffic.
  - **Content pillars**: Publish 6–8 cornerstone pieces (AI strategy, GenAI engineering, agentic automation, AI ethics, data pipelines, AI ops) and map them to service pages.
  - **Case-study SEO**: For each case study, add strong headers, keyword-rich summaries, and explicit outcome metrics; ensure `generateMetadata` uses frontmatter for titles/descriptions.
  - **Structured data**: Ensure articles emit `articleJsonLd` and `breadcrumbJsonLd`; include `mainEntity` where applicable for experiments and demos.
  - **OG and previews**: Auto-generate route-specific OG images via `app/opengraph-image.tsx` for AI posts; include author and outcome badges on images.
  - **Content calendar & distribution**: Create a 3‑month calendar with topics, publish cadence, and syndication plan (LinkedIn, DEV, Hacker News, newsletter).
  - **Lead magnets**: Offer a downloadable `AI Readiness Snapshot` or `Opportunity Audit` gating the case-study download to capture qualified leads.
  - **Validate**: Run `npm run dev`, confirm content pages render metadata, appear in `/sitemap.xml`, and open graph previews render in social debuggers.

- [ ] **Leverage Advanced Caching**: Use Next.js cache components for fine-grained invalidation on content updates.
  - **Update cache usage**: In dynamic routes (e.g., `src/app/blog/[slug]/page.tsx`), add `use cache` and `cacheLife` directives for content caching.
  - **Implement cache tags**: Use `cacheTag` in Server Actions (e.g., `src/app/contact/_actions.ts`) for invalidation on updates.
  - **Validate**: Run `npm run build` and check cache headers in network tab. Test invalidation by updating content.

- [ ] **Integrate Web Vitals Monitoring**: Add Web Vitals library for real-time performance tracking beyond Vercel Analytics.
  - **Install library**: Run `npm install web-vitals`.
  - **Add to app**: Create `src/lib/web-vitals.ts` to track metrics. Import and call in `src/app/layout.tsx`.
  - **Send to analytics**: Integrate with Vercel Analytics or custom endpoint for real-time data.
  - **Test**: Run `npm run dev` and check browser console for vitals logs. Monitor via Vercel dashboard.

- [ ] **Implement Edge Computing**: Use Vercel's edge functions for dynamic SEO (e.g., personalized metadata).
  - **Create edge function**: Add `src/app/api/dynamic-seo/route.ts` as an edge function (export `runtime: 'edge'`).
  - **Personalize metadata**: Use request data to generate dynamic SEO (e.g., user-specific titles).
  - **Deploy**: Run `npm run build && npm run start` on Vercel. Test via preview URL.
  - **Validate**: Check response times and SEO tools for dynamic changes.
