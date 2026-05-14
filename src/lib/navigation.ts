import type { SVGProps, ReactNode } from "react";
import {
  SparkIcon,
  UsersIcon,
  TargetIcon,
  MonitorIcon,
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
  Icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
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
  href?: string;
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
    centerTitle: "Our Background",
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
        href: "/about",
      },
      {
        heading: "50+ Projects Delivered",
        body: "AI-native solutions · 10+ yrs avg experience",
        href: "/about",
      },
      {
        heading: "SMBs & Mid-market",
        body: "ISO-aligned · Cloud & AI certified",
        href: "/about",
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
    leftTitle: "How We Engage",
    showcaseItems: [
      {
        Icon: MonitorIcon,
        title: "Build With Us",
        description:
          "Full-cycle delivery. We own the outcome, you own the product.",
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
      { label: "Custom Software & Product Development", href: "/services" },
      { label: "Mobile & Web Application Development", href: "/services" },
      { label: "Legacy System Modernization & Migration", href: "/services" },
      { label: "AI-Powered Workflow & Process Automation", href: "/services" },
      { label: "AI Agent Development & Deployment", href: "/services" },
      { label: "Data Engineering & Analytics Solutions", href: "/services" },
      { label: "Cloud Infrastructure & DevSecOps", href: "/services" },
    ],
    rightTitle: "Proof Points",
    staticInfoCards: [
      {
        heading: "Senior Heavy",
        body: "4/5 devs with 10+ yrs experience",
        href: "/services",
      },
      {
        heading: "AI-Native Delivery",
        body: "50–70% reduction in manual processes",
        href: "/services",
      },
      {
        heading: "20+ AI Agents Deployed",
        body: "For day-to-day business operations",
        href: "/services",
      },
      {
        heading: "95% On-Time",
        body: "Milestone-driven execution",
        href: "/services",
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
    leftTitle: "Where We Focus",
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
    centerTitle: "Explore Solutions",
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
    rightTitle: "Starter Kits",
    staticInfoCards: [
      { heading: "AI Agent Starter Kit", body: "Deploy fast, iterate faster", href: "/solutions" },
      {
        heading: "Document Intelligence Accelerator",
        body: "Intelligent document processing",
        href: "/solutions",
      },
      {
        heading: "Workflow Automation Blueprints",
        body: "Pre-built automation templates",
        href: "/solutions",
      },
      {
        heading: "Unified Data Layer Accelerator",
        body: "Consolidate & activate your data",
        href: "/solutions",
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
    leftTitle: "Why It Works",
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
    rightTitle: "Featured Works",
    staticInfoCards: [
      {
        heading: "AI Document Processor",
        body: "70% reduction in manual review time",
        href: "/case-studies",
      },
      {
        heading: "Cloud Migration",
        body: "Zero downtime, 40% cost reduction",
        href: "/case-studies",
      },
      { heading: "LLM Support Bot", body: "55% ticket deflection", href: "/case-studies" },
      { heading: "Mobile Commerce App", body: "4.8★ launch rating", href: "/case-studies" },
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
