# Header Hybrid Architecture — Design Spec

**Date:** 2026-05-13
**Author:** Viral Parikh
**Status:** Approved

---

## Context

`src/components/Header.tsx` is a 492-line monolithic `'use client'` component containing mega-menu dropdowns, mobile accordion navigation, scroll effects, and all associated state in a single file. Four pain points driving this rebuild:

1. File too large to navigate and reason about
2. Six independent `useState` hooks with no coordination abstraction
3. Desktop hover-dropdown logic and mobile click-accordion logic duplicated
4. Navigation data hard-coded inside the component

`handleNavClick` also uses `window.location.href` instead of Next.js `<Link>` — bypasses prefetching and breaks analytics.

**Content source:** `docs/cs-content/megamenu.md` defines 4 mega-menu nav items — About Us, Services, Solutions, Our Work. The old nav structure (`[Services, Case Studies, About Us, Contact]`) is replaced entirely.

---

## Visual Design

### Nav Bar

| Zone | Detail |
|---|---|
| Logo | Far left, no margin |
| Spacer | `flex: 1` — pushes nav items + CTA to the right |
| Nav items | About Us · Services · Solutions · Our Work — right-aligned, before CTA |
| CTA | "Talk to Us" — `#0C385A` fill, far right |
| Height | 56px, sticky, `z-index: 50` |
| Scroll effect | On scroll > 12px: `bg-cs-surface/95 backdrop-blur-md shadow-cs-sm` |

**Active nav item state:** `#2384C6` text + 3px `#2384C6` bottom border + chevron rotates 180°. Inactive items: `#0C385A`, downward chevron.

### Desktop Mega Menu Panel

| Property | Value |
|---|---|
| Trigger | `mouseenter` on nav item / `mouseleave` on both nav item and panel, 80ms close delay |
| Width | 920px, `margin-left: auto` (right-aligned under nav) |
| Position | Floating card, 6px gap below nav bar, `position: absolute`, `z-index: 40` |
| Corners | All 4 rounded (`border-radius: 14px`) — not flush with nav bar |
| Shadow | `0 8px 32px rgba(12,56,90,0.10), 0 2px 8px rgba(12,56,90,0.06)` |

**3-column layout:**

| Column | Width | Content |
|---|---|---|
| Left | 38% | Panel title + 3 Showcase items (icon + bold title + description) |
| Center | 28% | Panel title + SubMenu link list |
| Right | 34% | Panel title + Static Info cards |
| Footer | full-width | Punchline + description + CTA button |

**Panel title style (uniform across all 3 columns):** `font-size: 11px`, `font-weight: 700`, `color: #0C385A`, `border-bottom: 2px solid #2384C6`, `display: inline-block`, `padding-bottom: 8px`, `margin-bottom: 14px`.

### Content Mapping (from `megamenu.md`)

| Nav item | Left title | Center title | Right title |
|---|---|---|---|
| About Us | What Defines Us | More about Company | Quick Facts |
| Services | Engagement Models | Featured Services | Our Achievements |
| Solutions | Solution Approaches | Solutions | Accelerators |
| Our Work | How We Work | Browse By | Featured Work |

- **Left column titles** are derived from the `#### Showcase` sub-heading in `megamenu.md`
- **Center column titles** are the text after `SubMenu —` in `megamenu.md`
- **Right column titles** are the text after `Static Info —` in `megamenu.md`
- **Footer Strip** content (punchline, description, CTA label + href) maps directly from each menu's `### Footer Strip` section

### Mobile Navigation

- Hamburger icon (top right, visible at `md:hidden`)
- Tap opens accordion inline below the header (not a drawer, not overlay)
- Each nav item is a toggle row with a chevron; tap expands its SubMenu links
- Only one accordion section open at a time — controlled by `openMobileMenu: MenuKey | null`
- "Talk to Us" CTA button at the bottom of the mobile nav list
- Mobile accordion shows **SubMenu links only** (not Showcase items, not Static Info)

---

## Layer Model

| Layer | Responsibility | Location |
|---|---|---|
| **Data** | Types + nav constants | `src/lib/navigation.ts` |
| **Logic** | All state + handlers | `src/components/Header/useHeaderState.ts` |
| **Primitives** | Reusable dropdown wrapper | `src/components/Header/DropdownPanel.tsx` |
| **Generic panel** | Renders any `MegaMenuConfig` | `src/components/Header/MegaMenu.tsx` |
| **Desktop nav** | Iterates all 4 items | `src/components/Header/DesktopNav.tsx` |
| **Mobile nav** | Accordion, 4 items | `src/components/Header/MobileMenu.tsx` |
| **Orchestrator** | Wires state to children | `src/components/Header/index.tsx` |

---

## Folder Structure

```
src/
├── lib/
│   └── navigation.ts
└── components/
    └── Header/
        ├── index.tsx
        ├── useHeaderState.ts
        ├── DropdownPanel.tsx
        ├── MegaMenu.tsx
        ├── DesktopNav.tsx
        └── MobileMenu.tsx
```

Existing import `@/components/Header` in `app/layout.tsx` resolves to `index.tsx` — **no change to callers**.

---

## File Responsibilities

### `src/lib/navigation.ts`

- `MenuKey` type: `"about" | "services" | "solutions" | "ourWork"`
- Interfaces: `ShowcaseItem`, `SubMenuItem`, `StaticInfoCard`, `FooterStrip`, `MegaMenuConfig`
  - `ShowcaseItem`: `{ Icon: React.ComponentType<{ className?: string }>, title: string, description: string }` — icon is a Lucide component imported in `navigation.ts` and passed as a prop, not a string name. This follows `megamenu.md`'s note: "add icon support in UI layer, not in content file."
- `MEGA_MENU_MAP: Record<MenuKey, MegaMenuConfig>` — full content for all 4 menus from `megamenu.md`
- `MEGA_MENU_ORDER: MenuKey[]` — render order: `["about", "services", "solutions", "ourWork"]`
- `NAV_LABELS: Record<MenuKey, string>` — display labels: `{ about: "About Us", ... }`
- No React imports — pure data/type module

**`MegaMenuConfig` shape:**
```ts
interface MegaMenuConfig {
  leftTitle: string
  showcaseItems: ShowcaseItem[]  // exactly 3 per menu
  centerTitle: string         // SubMenu — <title>
  subMenuLinks: SubMenuItem[] // { label: string, href: string }[]
  rightTitle: string          // Static Info — <title>
  staticInfoCards: StaticInfoCard[]  // { heading: string, body: string }[]
  footer: FooterStrip         // { punchline: string, description: string, ctaLabel: string, ctaHref: string }
}
```

### `Header/useHeaderState.ts`

- `scrolled: boolean` + scroll `useEffect`
- `mobileNavOpen: boolean` — hamburger open/closed
- `openMenu: MenuKey | null` — active desktop mega menu (hover-driven)
- `openMobileMenu: MenuKey | null` — active mobile accordion (tap-driven, only one at a time)
- Handlers: `openDesktopMenu(key)`, `closeDesktopMenu()`, `toggleMobileNav()`, `closeMobileNav()`, `toggleMobileAccordion(key)`
- No JSX, no DOM refs

### `Header/DropdownPanel.tsx`

- Wrapper: absolute positioning, open/close visibility
- Owns **click-outside detection** (currently missing from header — added here)
- Props: `isOpen`, `onClose`, `children`, `className?`

### `Header/MegaMenu.tsx`

- Generic 3-column + footer panel
- Props: `config: MegaMenuConfig`, `isOpen: boolean`, `onClose: () => void`
- Left column: `config.leftTitle` + 3 `ShowcaseItem` rows (icon + bold title + description)
- Center column: `config.centerTitle` + `config.subMenuLinks` as `<Link>` list
- Right column: `config.rightTitle` + `config.staticInfoCards` as cards
- Footer: punchline + description + `<Link>` CTA
- Uses `DropdownPanel` for positioning and click-outside
- All `<Link>` items call `onClose` on click

### `Header/DesktopNav.tsx`

- Iterates `MEGA_MENU_ORDER` — data-driven, no per-menu JSX
- Each item: `div` with `onMouseEnter` / `onMouseLeave` → `<Link>` trigger (navigates on click, opens menu on hover) + `<MegaMenu>`
- Props: `openMenu: MenuKey | null`, `onMenuEnter: (key: MenuKey) => void`, `onMenuLeave: () => void`
- 80ms close delay lives in `useHeaderState` — `DesktopNav` just calls the handlers
- No state of its own

### `Header/MobileMenu.tsx`

- Iterates `MEGA_MENU_ORDER` — 4 accordion rows
- Each row: toggle button (nav label + chevron) that expands `config.subMenuLinks`
- Only one section open at a time — controlled by `openMobileMenu` prop
- Props: `mobileNavOpen`, `openMobileMenu`, `onAccordionToggle(key)`, `onCloseNav()`
- All `<Link>` items call `onCloseNav` on click
- "Talk to Us" `<Link>` at bottom

### `Header/index.tsx`

- `'use client'` — scroll effect requires it
- Calls `useHeaderState()`, passes props to `DesktopNav` and `MobileMenu`
- Renders sticky `<header>` shell: Logo `<Link>` + `<DesktopNav>` + "Talk to Us" CTA + hamburger button + `<MobileMenu>`
- No logic beyond wiring

---

## Key Design Decisions

**No Server Component outer shell.** The scroll effect (`scrolled` state) forces `index.tsx` to be `'use client'`. Wrapping it in a Server Component shell adds complexity with no measurable gain on a static marketing site.

**`openMenu: MenuKey | null` replaces 6+ boolean flags.** One value tracks which desktop menu is open; `null` means none. Same pattern for mobile: `openMobileMenu: MenuKey | null`. Accurate (only one can be open at a time) and dramatically reduces state surface.

**Generic `MegaMenu` — no per-panel components.** All 4 menus share an identical 3-column + footer layout. One component driven by `MegaMenuConfig` data. Adding a 5th nav item = one new key in `MEGA_MENU_MAP` and `MEGA_MENU_ORDER`, zero new files.

**80ms hover close delay in `useHeaderState`.** Gives the mouse time to travel from the nav item into the panel without the menu collapsing. Implemented as a `closeTimer` ref that is cleared on `mouseenter` of either the nav item or the panel.

**Click-outside in `DropdownPanel`.** Currently absent from the header. Adding it here means every dropdown gets it automatically.

**`window.location.href` removed.** All nav triggers replaced with `<Link>` (desktop) or `<Link onClick={onCloseNav}>` (mobile). Restores Next.js prefetching and fixes analytics.

**Chevron icons** move to `src/components/icons/` (existing file).

---

## What Does NOT Change

- Tailwind class names and design tokens — no visual changes to existing styles
- `@/components/Header` import in `layout.tsx`
- `Logo` component (stays a Server Component)
- Any route-level components under `app/`

## What Changes Beyond the Refactor

Driven by `megamenu.md` content, not just code organisation:

- Nav items: `[Services, Case Studies, About Us, Contact]` → `[About Us, Services, Solutions, Our Work]`
- "Case Studies" plain link → absorbed into "Our Work" mega menu (Browse By → Case Studies)
- "Contact" plain link removed from main nav; CTA "Talk to Us" button remains
- "Solutions" is a new nav item — route `/solutions` does not yet exist; sub-links are placeholders until pages are built

---

## Verification Checklist

1. `npm run build` — zero TypeScript errors, zero ESLint errors
2. `npm run dev` — all 4 mega menus open on hover, close on mouse-away
3. Mouse bridge: move from nav item to panel — menu stays open
4. Switch menus: hover About Us → hover Services — switches instantly
5. Click-outside closes open desktop menu
6. All 3 column titles render with `#2384C6` underline
7. Footer strip CTA renders on all 4 menus
8. Mobile: hamburger opens accordion nav
9. Mobile: only one accordion section open at a time
10. Mobile: all sub-links close nav on click
11. Scroll: backdrop blur triggers at scroll > 12px
12. Active route: current path highlights matching nav item via `usePathname()`
13. All nav `<Link>` triggers produce prefetch requests in DevTools Network on hover
14. `npm run build` again after all changes — no regressions
