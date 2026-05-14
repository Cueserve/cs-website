# Header Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 492-line monolithic `Header.tsx` with a layered, data-driven header: `navigation.ts` (data) → `useHeaderState.ts` (state) → `DropdownPanel`, `MegaMenu`, `DesktopNav`, `MobileMenu` (UI) → `Header/index.tsx` (orchestrator).

**Architecture:** All nav content comes from `src/lib/navigation.ts` — a pure data module populated from `docs/cs-content/megamenu.md`. The desktop mega menu is hover-triggered with an 80ms close delay and renders as a floating 3-column card. Mobile nav is an inline accordion. All state lives in `useHeaderState.ts`; leaf components are stateless.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 5, Tailwind v4 (CSS-first tokens in `globals.css`), `next/link`, `next/navigation`.

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Modify | `src/components/icons/HeroIcons.tsx` | Add 12 nav showcase icons + ChevronDownIcon |
| Create | `src/lib/navigation.ts` | Types + all 4 menu configs from megamenu.md |
| Create | `src/components/Header/useHeaderState.ts` | All state and handlers |
| Create | `src/components/Header/DropdownPanel.tsx` | Click-outside wrapper |
| Create | `src/components/Header/MegaMenu.tsx` | Generic 3-column + footer panel |
| Create | `src/components/Header/DesktopNav.tsx` | Hover-triggered desktop nav |
| Create | `src/components/Header/MobileMenu.tsx` | Accordion mobile nav |
| Create | `src/components/Header/index.tsx` | Orchestrator — wires state to children |
| Delete | `src/components/Header.tsx` | Replaced by Header/index.tsx |

**Module resolution note:** TypeScript prefers `Header.tsx` over `Header/index.tsx` when both exist. Delete `Header.tsx` in Task 8 after all new files are in place.

---

## Task 1: Add Nav Icons to HeroIcons.tsx

**Files:**
- Modify: `src/components/icons/HeroIcons.tsx`

Existing icons you can reuse in `navigation.ts`: `UsersIcon` (Senior-Heavy Delivery), `MonitorIcon` (Build With Us). Add the rest below.

- [ ] **Step 1: Append the following 12 icon exports to the bottom of `src/components/icons/HeroIcons.tsx`**

```tsx
export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

export function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx={12} cy={12} r={10} />
      <circle cx={12} cy={12} r={6} />
      <circle cx={12} cy={12} r={2} />
    </svg>
  );
}

export function UserPlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx={9} cy={7} r={4} />
      <line x1={19} y1={8} x2={19} y2={14} />
      <line x1={22} y1={11} x2={16} y2={11} />
    </svg>
  );
}

export function BookOpenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

export function ZapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function BarChart2Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1={18} y1={20} x2={18} y2={10} />
      <line x1={12} y1={20} x2={12} y2={4} />
      <line x1={6} y1={20} x2={6} y2={14} />
    </svg>
  );
}

export function TrendingUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export function ClipboardCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

export function UploadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1={12} y1={3} x2={12} y2={15} />
    </svg>
  );
}
```

- [ ] **Step 2: Verify TypeScript is happy**

```bash
cd d:/repo-cs/cs-website && npx tsc --noEmit
```

Expected: no errors related to `HeroIcons.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/components/icons/HeroIcons.tsx
git commit -m "feat: add nav showcase icons and ChevronDownIcon to HeroIcons"
```

---

## Task 2: Create `src/lib/navigation.ts`

**Files:**
- Create: `src/lib/navigation.ts`

This is the single source of truth for all nav content. No JSX — just types, data, and constants. Icons are imported as component references (their `className` prop maps to Tailwind classes).

- [ ] **Step 1: Create `src/lib/navigation.ts` with the full content below**

```ts
import type { SVGProps } from "react";
import {
  SparkIcon,
  UsersIcon,
  TargetIcon,
  MonitorIcon,
  UserPlusIcon,
  BookOpenIcon,
  ZapIcon,
  BarChart2Icon,
  TrendingUpIcon,
  CheckCircleIcon,
  ClipboardCheckIcon,
  UploadIcon,
} from "@/components/icons/HeroIcons";

// ── Types ──────────────────────────────────────────────────────────────────

export type MenuKey = "about" | "services" | "solutions" | "ourWork";

export interface ShowcaseItem {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  description: string;
}

export interface SubMenuItem {
  label: string;
  href: string;
}

export interface StaticInfoCard {
  heading: string;
  body: string;
}

export interface FooterStrip {
  punchline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface MegaMenuConfig {
  leftTitle: string;
  showcaseItems: ShowcaseItem[]; // exactly 3
  centerTitle: string;
  subMenuLinks: SubMenuItem[];
  rightTitle: string;
  staticInfoCards: StaticInfoCard[];
  footer: FooterStrip;
}

// ── Constants ──────────────────────────────────────────────────────────────

export const MEGA_MENU_ORDER: MenuKey[] = [
  "about",
  "services",
  "solutions",
  "ourWork",
];

export const NAV_LABELS: Record<MenuKey, string> = {
  about: "About Us",
  services: "Services",
  solutions: "Solutions",
  ourWork: "Our Work",
};

export const NAV_HREFS: Record<MenuKey, string> = {
  about: "/about",
  services: "/services",
  solutions: "/solutions",
  ourWork: "/case-studies",
};

// ── Menu Data (source: docs/cs-content/megamenu.md) ───────────────────────

export const MEGA_MENU_MAP: Record<MenuKey, MegaMenuConfig> = {
  about: {
    leftTitle: "What Defines Us",
    showcaseItems: [
      {
        Icon: SparkIcon,
        title: "AI-Native from Day Zero",
        description:
          "AI shapes how we architect, automate, and deliver every solution.",
      },
      {
        Icon: UsersIcon,
        title: "Senior-Heavy Delivery",
        description:
          "No layers. No handoffs. The people who scope it are the ones who build it.",
      },
      {
        Icon: TargetIcon,
        title: "Outcome Accountability",
        description:
          "We measure success by business impact, not hours or tickets.",
      },
    ],
    centerTitle: "More about Company",
    subMenuLinks: [
      { label: "Our Story", href: "/about" },
      { label: "Mission & Values", href: "/about" },
      { label: "The Team", href: "/about" },
      { label: "Where We Work", href: "/about" },
      { label: "Careers", href: "/about" },
    ],
    rightTitle: "Quick Facts",
    staticInfoCards: [
      {
        heading: "Founded 2010",
        body: "India · Remote-first, globally distributed",
      },
      {
        heading: "50+ Projects Delivered",
        body: "AI-native solutions · 10+ yrs avg experience",
      },
      {
        heading: "SMBs & Mid-market",
        body: "ISO-aligned · Cloud & AI certified",
      },
    ],
    footer: {
      punchline: "Built by people who care, for teams who expect more.",
      description: "Come see what we've shipped.",
      ctaLabel: "See Our Team →",
      ctaHref: "/about",
    },
  },

  services: {
    leftTitle: "Engagement Models",
    showcaseItems: [
      {
        Icon: MonitorIcon,
        title: "Build With Us",
        description:
          "Full-cycle delivery. We own the outcome, you own the product.",
      },
      {
        Icon: UserPlusIcon,
        title: "Augment Your Team",
        description:
          "Drop in pre-vetted senior engineers exactly when you need them.",
      },
      {
        Icon: BookOpenIcon,
        title: "Advisory & Architecture",
        description:
          "Hands-on guidance to design scalable systems and evaluate AI readiness.",
      },
    ],
    centerTitle: "Featured Services",
    subMenuLinks: [
      { label: "Custom Software Development", href: "/services" },
      { label: "Product Development", href: "/services" },
      { label: "Mobile & Web Application Development", href: "/services" },
      { label: "Legacy System Modernization & Migration", href: "/services" },
      { label: "AI-Powered Workflow & Process Automation", href: "/services" },
      { label: "Generative AI Integration Services", href: "/services" },
      { label: "AI Agent Development & Deployment", href: "/services" },
      { label: "Data Engineering & Analytics Solutions", href: "/services" },
      { label: "Cloud Infrastructure & DevSecOps", href: "/services" },
      { label: "Hire Dedicated Developers & Engineering Teams", href: "/services" },
    ],
    rightTitle: "Our Achievements",
    staticInfoCards: [
      {
        heading: "Senior Heavy",
        body: "4/5 devs with 10+ yrs experience",
      },
      {
        heading: "AI-Native Delivery",
        body: "50–70% reduction in manual processes",
      },
      {
        heading: "20+ AI Agents Deployed",
        body: "For day-to-day business operations",
      },
      {
        heading: "95% On-Time",
        body: "Milestone-driven execution",
      },
    ],
    footer: {
      punchline: "Not sure where to start?",
      description:
        "Book a free 30-minute discovery call. No pitch, no fluff.",
      ctaLabel: "Book a Discovery Call →",
      ctaHref: "/contact",
    },
  },

  solutions: {
    leftTitle: "Solution Approaches",
    showcaseItems: [
      {
        Icon: ZapIcon,
        title: "Automate the Repetitive",
        description:
          "Reclaim hours lost to manual processes — without babysitting.",
      },
      {
        Icon: BarChart2Icon,
        title: "Accelerate Decisions",
        description: "Real-time intelligence powered by your own data.",
      },
      {
        Icon: TrendingUpIcon,
        title: "Scale the Ambitious",
        description:
          "Build the platform backbone that grows without rebuilding.",
      },
    ],
    centerTitle: "Solutions",
    subMenuLinks: [
      { label: "AI-Powered Workflow Automation", href: "/solutions" },
      { label: "Intelligent Document Processing", href: "/solutions" },
      { label: "AI-Augmented Customer Support", href: "/solutions" },
      { label: "Predictive Operations & Analytics", href: "/solutions" },
      { label: "Unified Data & Analytics Platform", href: "/solutions" },
      { label: "Platform & Infrastructure Modernisation", href: "/solutions" },
      { label: "Legacy System Transformation", href: "/solutions" },
      { label: "Customer Experience Engineering", href: "/solutions" },
      { label: "Startup MVP & Rapid Product Launch", href: "/solutions" },
    ],
    rightTitle: "Accelerators",
    staticInfoCards: [
      { heading: "AI Agent Starter Kit", body: "Deploy fast, iterate faster" },
      {
        heading: "Document Intelligence Accelerator",
        body: "Intelligent document processing",
      },
      {
        heading: "Workflow Automation Blueprints",
        body: "Pre-built automation templates",
      },
      {
        heading: "Unified Data Layer Accelerator",
        body: "Consolidate & activate your data",
      },
    ],
    footer: {
      punchline: "See AI in action — not in theory.",
      description:
        "Explore real-world use cases and accelerators we've built across industries.",
      ctaLabel: "Explore Case Studies →",
      ctaHref: "/case-studies",
    },
  },

  ourWork: {
    leftTitle: "How We Work",
    showcaseItems: [
      {
        Icon: CheckCircleIcon,
        title: "Discovery to Delivery",
        description:
          "We stay in it — from first whiteboard to post-launch tuning.",
      },
      {
        Icon: ClipboardCheckIcon,
        title: "Proof Over Promise",
        description:
          "Real constraints, real decisions, real results — not polished stories.",
      },
      {
        Icon: UploadIcon,
        title: "Built to Transfer",
        description:
          "Documentation, runbooks, and onboarding included.",
      },
    ],
    centerTitle: "Browse By",
    subMenuLinks: [
      { label: "AI & Automation", href: "/case-studies" },
      { label: "Custom Software Development", href: "/case-studies" },
      { label: "Product Launches", href: "/case-studies" },
      { label: "Web & Mobile Development", href: "/case-studies" },
      { label: "Legacy System Modernisation", href: "/case-studies" },
      { label: "Client Testimonials", href: "/case-studies" },
    ],
    rightTitle: "Featured Work",
    staticInfoCards: [
      {
        heading: "AI Document Processor",
        body: "70% reduction in manual review time",
      },
      {
        heading: "Cloud Migration",
        body: "Zero downtime, 40% cost reduction",
      },
      { heading: "LLM Support Bot", body: "55% ticket deflection" },
      { heading: "Mobile Commerce App", body: "4.8★ launch rating" },
    ],
    footer: {
      punchline: "Want to see the full picture?",
      description:
        "Browse our case studies — no gated PDFs, no sales calls required.",
      ctaLabel: "View Case Studies →",
      ctaHref: "/case-studies",
    },
  },
};
```

- [ ] **Step 2: Verify types compile**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/navigation.ts
git commit -m "feat: add navigation data module with 4 mega menu configs"
```

---

## Task 3: Create `Header/useHeaderState.ts`

**Files:**
- Create: `src/components/Header/useHeaderState.ts`

This hook owns all header state. No JSX. The `closeTimerRef` is a `useRef` (not state) so timer updates don't cause re-renders.

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p "d:/repo-cs/cs-website/src/components/Header"
```

Create `src/components/Header/useHeaderState.ts`:

```ts
"use client";

import { useEffect, useRef, useState } from "react";
import type { MenuKey } from "@/lib/navigation";

export interface HeaderState {
  scrolled: boolean;
  mobileNavOpen: boolean;
  openMenu: MenuKey | null;
  openMobileMenu: MenuKey | null;
  openDesktopMenu: (key: MenuKey) => void;
  closeDesktopMenu: () => void;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileAccordion: (key: MenuKey) => void;
}

export function useHeaderState(): HeaderState {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<MenuKey | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDesktopMenu = (key: MenuKey) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenMenu(key);
  };

  const closeDesktopMenu = () => {
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 80);
  };

  const toggleMobileNav = () => setMobileNavOpen((o) => !o);

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    setOpenMobileMenu(null);
  };

  const toggleMobileAccordion = (key: MenuKey) => {
    setOpenMobileMenu((prev) => (prev === key ? null : key));
  };

  return {
    scrolled,
    mobileNavOpen,
    openMenu,
    openMobileMenu,
    openDesktopMenu,
    closeDesktopMenu,
    toggleMobileNav,
    closeMobileNav,
    toggleMobileAccordion,
  };
}
```

- [ ] **Step 2: Verify types compile**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Header/useHeaderState.ts
git commit -m "feat: add useHeaderState hook with desktop hover delay and mobile accordion state"
```

---

## Task 4: Create `Header/DropdownPanel.tsx`

**Files:**
- Create: `src/components/Header/DropdownPanel.tsx`

Renders a `div` with a `ref`. When `isOpen`, attaches a `mousedown` listener to `document` and calls `onClose` if the click lands outside the ref. This is the click-outside behaviour missing from the old header.

- [ ] **Step 1: Create `src/components/Header/DropdownPanel.tsx`**

```tsx
"use client";

import { useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function DropdownPanel({
  isOpen,
  onClose,
  children,
  className,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Verify types compile**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Header/DropdownPanel.tsx
git commit -m "feat: add DropdownPanel with click-outside detection"
```

---

## Task 5: Create `Header/MegaMenu.tsx`

**Files:**
- Create: `src/components/Header/MegaMenu.tsx`

One generic component renders any of the 4 menus. When `isOpen` is false it returns `null` (not mounted). Positioned `absolute top-full right-0` relative to the `<header>` which carries `relative` in Task 8.

- [ ] **Step 1: Create `src/components/Header/MegaMenu.tsx`**

```tsx
import Link from "next/link";
import type { MegaMenuConfig } from "@/lib/navigation";
import { DropdownPanel } from "./DropdownPanel";

interface Props {
  config: MegaMenuConfig;
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ config, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <DropdownPanel
      isOpen={isOpen}
      onClose={onClose}
      className="absolute top-full right-0 z-40 mt-1.5 w-[920px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-[14px] border border-cs-border bg-white"
      style={{
        boxShadow:
          "0 8px 32px rgba(12,56,90,0.10), 0 2px 8px rgba(12,56,90,0.06)",
      }}
    >
      {/* 3-column body */}
      <div className="flex min-h-[220px]">
        {/* Left — Showcase */}
        <div className="flex-[0_0_38%] border-r border-cs-border p-5">
          <PanelTitle>{config.leftTitle}</PanelTitle>
          <ul className="space-y-1">
            {config.showcaseItems.map(({ Icon, title, description }) => (
              <li
                key={title}
                className="flex cursor-default items-start gap-2.5 rounded-xl p-2 hover:bg-cs-surface-tint"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#EBF4FB]">
                  <Icon className="h-4 w-4 text-cs-light-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-cs-dark-blue">{title}</p>
                  <p className="text-[10px] leading-snug text-cs-ink-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Center — SubMenu links */}
        <div className="flex-[0_0_28%] border-r border-cs-border p-5">
          <PanelTitle>{config.centerTitle}</PanelTitle>
          <ul className="space-y-0.5">
            {config.subMenuLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="block rounded-lg px-2 py-1.5 text-xs text-cs-ink-subtle transition-colors hover:bg-cs-surface-tint hover:text-cs-dark-blue"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Static Info */}
        <div className="flex-1 bg-cs-surface p-5">
          <PanelTitle>{config.rightTitle}</PanelTitle>
          <ul className="space-y-1.5">
            {config.staticInfoCards.map(({ heading, body }) => (
              <li
                key={heading}
                className="rounded-lg border border-cs-border bg-white p-2.5"
              >
                <p className="text-[11px] font-bold text-cs-dark-blue">
                  {heading}
                </p>
                <p className="text-[10px] leading-snug text-cs-ink-muted">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between border-t border-cs-border bg-cs-surface px-5 py-3">
        <div>
          <p className="text-[11px] font-bold text-cs-dark-blue">
            {config.footer.punchline}
          </p>
          <p className="text-[10px] text-cs-ink-muted">
            {config.footer.description}
          </p>
        </div>
        <Link
          href={config.footer.ctaHref}
          onClick={onClose}
          className="ml-4 shrink-0 rounded-md bg-cs-dark-blue px-4 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-cs-dark-blue-hover"
        >
          {config.footer.ctaLabel}
        </Link>
      </div>
    </DropdownPanel>
  );
}

function PanelTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3.5 inline-block border-b-2 border-cs-light-blue pb-2 text-[11px] font-bold text-cs-dark-blue">
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Verify types compile**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Header/MegaMenu.tsx
git commit -m "feat: add generic MegaMenu component with 3-column layout and footer strip"
```

---

## Task 6: Create `Header/DesktopNav.tsx`

**Files:**
- Create: `src/components/Header/DesktopNav.tsx`

Iterates `MEGA_MENU_ORDER` — zero per-menu JSX. The outer `div` has `onMouseLeave={onMenuLeave}`, which covers both the nav links and the `MegaMenu` panel inside it. Moving between siblings inside the div does NOT fire `onMouseLeave`; only leaving the div's bounding box does.

- [ ] **Step 1: Create `src/components/Header/DesktopNav.tsx`**

```tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MEGA_MENU_MAP,
  MEGA_MENU_ORDER,
  NAV_LABELS,
  NAV_HREFS,
} from "@/lib/navigation";
import type { MenuKey } from "@/lib/navigation";
import { ChevronDownIcon } from "@/components/icons/HeroIcons";
import { MegaMenu } from "./MegaMenu";

interface Props {
  openMenu: MenuKey | null;
  onMenuEnter: (key: MenuKey) => void;
  onMenuLeave: () => void;
}

export function DesktopNav({ openMenu, onMenuEnter, onMenuLeave }: Props) {
  const pathname = usePathname();

  return (
    <div
      className="relative hidden md:block"
      onMouseLeave={onMenuLeave}
    >
      <nav className="flex items-center" aria-label="Primary">
        {MEGA_MENU_ORDER.map((key) => {
          const isActive =
            openMenu === key || pathname.startsWith(NAV_HREFS[key]);
          return (
            <div key={key} onMouseEnter={() => onMenuEnter(key)}>
              <Link
                href={NAV_HREFS[key]}
                aria-haspopup="true"
                aria-expanded={openMenu === key}
                className={navItemClass(isActive)}
              >
                {NAV_LABELS[key]}
                <ChevronDownIcon
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    openMenu === key ? "rotate-180" : ""
                  }`}
                />
              </Link>
            </div>
          );
        })}
      </nav>

      {openMenu && (
        <MegaMenu
          config={MEGA_MENU_MAP[openMenu]}
          isOpen={true}
          onClose={onMenuLeave}
        />
      )}
    </div>
  );
}

function navItemClass(isActive: boolean) {
  return [
    "flex h-14 items-center gap-1 border-b-2 px-3.5 text-sm font-bold transition-colors duration-150",
    isActive
      ? "border-cs-light-blue text-cs-light-blue"
      : "border-transparent text-cs-dark-blue hover:text-cs-light-blue",
  ].join(" ");
}
```

- [ ] **Step 2: Verify types compile**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Header/DesktopNav.tsx
git commit -m "feat: add data-driven DesktopNav with hover mega menu"
```

---

## Task 7: Create `Header/MobileMenu.tsx`

**Files:**
- Create: `src/components/Header/MobileMenu.tsx`

Accordion, one open section at a time. Shows `subMenuLinks` only — no showcase items, no static info cards. Returns `null` when `mobileNavOpen` is false so it's not in the DOM.

- [ ] **Step 1: Create `src/components/Header/MobileMenu.tsx`**

```tsx
import Link from "next/link";
import {
  MEGA_MENU_MAP,
  MEGA_MENU_ORDER,
  NAV_LABELS,
} from "@/lib/navigation";
import type { MenuKey } from "@/lib/navigation";
import { ChevronDownIcon } from "@/components/icons/HeroIcons";

interface Props {
  mobileNavOpen: boolean;
  openMobileMenu: MenuKey | null;
  onAccordionToggle: (key: MenuKey) => void;
  onCloseNav: () => void;
}

export function MobileMenu({
  mobileNavOpen,
  openMobileMenu,
  onAccordionToggle,
  onCloseNav,
}: Props) {
  if (!mobileNavOpen) return null;

  return (
    <nav
      className="border-t border-cs-border bg-cs-surface md:hidden"
      aria-label="Mobile primary"
    >
      <ul className="mx-auto flex max-w-[1200px] flex-col gap-1 px-8 py-4">
        {MEGA_MENU_ORDER.map((key) => {
          const isOpen = openMobileMenu === key;
          const { subMenuLinks } = MEGA_MENU_MAP[key];
          return (
            <li key={key} className="space-y-1">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => onAccordionToggle(key)}
                className={[
                  "flex w-full items-center justify-between rounded px-2 py-2 text-left text-sm font-medium transition-colors",
                  isOpen
                    ? "bg-cs-surface-tint text-cs-dark-blue"
                    : "text-cs-ink-subtle hover:bg-cs-surface-tint hover:text-cs-dark-blue",
                ].join(" ")}
              >
                {NAV_LABELS[key]}
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <ul className="space-y-0.5 rounded-3xl border border-cs-border bg-white p-3">
                  {subMenuLinks.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        onClick={onCloseNav}
                        className="block rounded-2xl px-3 py-2 text-sm text-cs-ink-subtle transition-colors hover:bg-cs-surface-tint hover:text-cs-dark-blue"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}

        <li className="pt-2">
          <Link
            href="/contact"
            onClick={onCloseNav}
            className="block w-full rounded bg-cs-dark-blue px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            Talk to Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
```

- [ ] **Step 2: Verify types compile**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Header/MobileMenu.tsx
git commit -m "feat: add MobileMenu accordion — SubMenu links only, one section at a time"
```

---

## Task 8: Create `Header/index.tsx` and Delete `Header.tsx`

**Files:**
- Create: `src/components/Header/index.tsx`
- Delete: `src/components/Header.tsx`

`@/components/Header` in `layout.tsx` currently resolves to `Header.tsx`. TypeScript prefers a file over a same-name directory. Delete `Header.tsx` so the import resolves to `Header/index.tsx`. No change to `layout.tsx` needed.

The `<header>` element carries `relative` so `MegaMenu`'s `absolute top-full right-0` positions correctly inside it.

- [ ] **Step 1: Create `src/components/Header/index.tsx`**

```tsx
"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useHeaderState } from "./useHeaderState";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const {
    scrolled,
    mobileNavOpen,
    openMenu,
    openMobileMenu,
    openDesktopMenu,
    closeDesktopMenu,
    toggleMobileNav,
    closeMobileNav,
    toggleMobileAccordion,
  } = useHeaderState();

  return (
    <header
      className={[
        "sticky top-0 z-50 relative border-b border-cs-border transition-all duration-200",
        scrolled
          ? "bg-cs-surface/95 shadow-cs-sm backdrop-blur-md"
          : "bg-cs-surface",
      ].join(" ")}
    >
      <div className="mx-auto flex h-14 max-w-[1200px] items-center px-8">
        {/* Logo — far left */}
        <Link href="/" aria-label="Cueserve home">
          <Logo className="h-9 w-auto" />
        </Link>

        {/* Spacer pushes nav + CTA to the right */}
        <div className="flex-1" />

        {/* Desktop nav — hidden on mobile */}
        <DesktopNav
          openMenu={openMenu}
          onMenuEnter={openDesktopMenu}
          onMenuLeave={closeDesktopMenu}
        />

        {/* CTA — desktop only, far right */}
        <Link
          href="/contact"
          className="ml-5 hidden rounded bg-cs-dark-blue px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-cs-dark-blue-hover md:inline-flex"
        >
          Talk to Us
        </Link>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileNavOpen}
          onClick={toggleMobileNav}
          className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded text-cs-dark-blue md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {mobileNavOpen ? (
              <>
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </>
            ) : (
              <>
                <line x1={3} y1={6} x2={21} y2={6} />
                <line x1={3} y1={12} x2={21} y2={12} />
                <line x1={3} y1={18} x2={21} y2={18} />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile accordion nav */}
      <MobileMenu
        mobileNavOpen={mobileNavOpen}
        openMobileMenu={openMobileMenu}
        onAccordionToggle={toggleMobileAccordion}
        onCloseNav={closeMobileNav}
      />
    </header>
  );
}
```

- [ ] **Step 2: Delete the old monolith**

```bash
git rm src/components/Header.tsx
```

- [ ] **Step 3: Run build — verify zero errors**

```bash
npm run build
```

Expected: build completes with no TypeScript or ESLint errors. If it fails, check the error output — the most likely cause is a missing token (e.g., `bg-cs-dark-blue-hover` not defined in `globals.css`). Check `src/app/globals.css` for the exact token name and adjust the class.

- [ ] **Step 4: Commit**

```bash
git add src/components/Header/index.tsx
git commit -m "feat: wire Header orchestrator, retire Header.tsx — header rebuild complete"
```

---

## Task 9: Browser Verification

**Files:** none — manual checks only.

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Open `http://localhost:3000`.

- [ ] **Step 2: Desktop — mega menu hover**

Hover each of the 4 nav items (About Us, Services, Solutions, Our Work).

Check per item:
- Menu opens immediately on hover
- Left column shows panel title with `#2384C6` underline + 3 icon/title/description rows
- Center column shows panel title + link list
- Right column shows panel title + info cards (light bg)
- Footer strip shows punchline + description + CTA button
- Nav item text turns blue, 3px blue bottom border appears, chevron rotates up

- [ ] **Step 3: Desktop — mouse bridge**

Hover "Services" → slowly move mouse down into the mega menu panel. Menu must stay open. Move mouse back to nav bar. Menu must stay open. Move mouse off the entire header area. Menu must close (after ~80ms).

- [ ] **Step 4: Desktop — switch menus**

Hover "About Us" → slide mouse to "Services" without leaving the nav bar. Services menu must appear immediately (no flicker, no gap).

- [ ] **Step 5: Desktop — click-outside**

Open a menu by hovering. Click somewhere on the page body below the header. Menu must close.

- [ ] **Step 6: Desktop — active route highlight**

Navigate to `/about`. The "About Us" nav item must show blue text and blue bottom border (driven by `usePathname`).

- [ ] **Step 7: Desktop — prefetch**

Open DevTools → Network → filter "Fetch/XHR". Hover a nav item. Prefetch requests for the link's route must appear (Next.js `<Link>` behaviour).

- [ ] **Step 8: Mobile — accordion**

Resize browser to < 768px (or use DevTools device mode). Tap the hamburger. Accordion nav must open below the header. Tap "Services" — its SubMenu links expand. Tap "About Us" — Services collapses, About Us expands. Tap any link — nav closes.

- [ ] **Step 9: Scroll effect**

Scroll down > 12px. Header must gain backdrop blur and shadow. Scroll back to top — effect must clear.

- [ ] **Step 10: Final build check**

```bash
npm run build
```

Expected: no errors, no warnings beyond pre-existing ones.
