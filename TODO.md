# Cueserve Website — Todos

## Opportunities for Best/Latest

- [ ] **Ensure React 19 Integration**: Verify and update to React 19 for concurrent features (smoother interactions, better performance).
  - **Check current version**: Run `npm list react` to confirm if React 19 is installed (Next.js 16 should include it, but verify).
  - **Update if needed**: If not at 19, run `npm update react react-dom` (or `npm install react@latest react-dom@latest`).
  - **Validate**: Restart dev server (`npm run dev`) and check console for React 19 features (e.g., concurrent rendering logs).

- [ ] **Add AI Integration**: Implement subtle AI features (e.g., chatbot or AI-generated OG images) to align with AI-native positioning and boost engagement/SEO.
  - **Install Vercel AI SDK**: Run `npm install @vercel/ai`.
  - **Implement AI-generated OG images**: Edit `src/app/opengraph-image.tsx` to use AI SDK for dynamic image generation (e.g., based on page content).
  - **Add chatbot**: Create a new component `src/components/Chatbot.tsx` using Vercel AI for basic Q&A. Embed in `src/app/layout.tsx`.
  - **Test**: Run `npm run dev` and verify AI features load without errors. Monitor for SEO impact via Google Search Console.

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
