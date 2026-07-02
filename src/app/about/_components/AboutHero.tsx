import Image from "next/image";
import Link from "next/link";
import { LayersIcon, PulseIcon, ShieldIcon, CheckIcon, PersonIcon } from "@/components/icons/HeroIcons";
import { AboutStatsStrip } from "./AboutStatsStrip";

const MOBILE_STATS = [
  {
    value: "60+",
    label: "Projects",
    sublabel: "Delivered",
    icon: LayersIcon,
  },
  {
    value: "16+",
    label: "Years",
    sublabel: "Experience",
    icon: PulseIcon,
  },
  {
    value: "35+",
    label: "Global",
    sublabel: "Clients Served",
    icon: PersonIcon,
  },
  {
    value: "100%",
    label: "Client",
    sublabel: "Satisfaction",
    icon: PulseIcon,
  },
] as const;

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-8 sm:pt-12 sm:pb-12 border-b border-cs-border">
      {/* Desktop Background Illustration */}
      <div className="absolute inset-x-0 -top-[100px] -bottom-[40px] overflow-hidden pointer-events-none z-0 hidden sm:block">
        <Image
          src="/about_us_bg.png"
          alt="About Us Background"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />

        {/* Engineered Precision Tech Markers */}
        <div className="absolute top-[148px] left-10 text-cs-light-blue/40 font-mono text-xl select-none hidden md:block">+</div>
        <div className="absolute top-[148px] right-10 text-cs-light-blue/40 font-mono text-xl select-none hidden md:block">+</div>
        <div className="absolute bottom-16 left-10 text-cs-light-blue/30 font-mono text-sm select-none hidden md:block">[ AI_CORE ]</div>
        <div className="absolute bottom-16 right-10 text-cs-light-blue/30 font-mono text-sm select-none hidden md:block">[ v2.4_OPS ]</div>
      </div>

      {/* Mobile-only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 sm:hidden">
        <div className="absolute top-0 right-10 w-64 h-64 bg-gradient-to-br from-[#2384c6]/15 via-[#63bceb]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tr from-[#0c385a]/10 via-[#2384c6]/10 to-transparent rounded-full blur-3xl" />
        {/* Minimal Network Pattern / Dots */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(#0c385a 1px, transparent 1px)`,
            backgroundSize: "20px 20px"
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 text-center relative z-10">

        <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-white/90 bg-gradient-to-r from-white/85 via-[#f0f8ff]/80 to-white/85 px-4.5 sm:px-5 py-2 text-[11px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_8px_30px_-4px_rgba(35,132,198,0.25)] backdrop-blur-xl ring-1 ring-[#bce2ff]/60 mb-5 sm:mb-6 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_12px_36px_-4px_rgba(35,132,198,0.35)] hover:bg-white/95 active:scale-95">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cs-light-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cs-light-blue"></span>
          </span>
          <span className="bg-gradient-to-r from-[#0c385a] via-[#12619c] to-[#186499] bg-clip-text text-transparent font-extrabold tracking-widest">
            ABOUT CUESERVE • WHO WE ARE
          </span>
        </div>

        {/* Responsive Heading with Balanced Small Screen Line Breaks */}
        <h1 className="mx-auto max-w-4xl font-display text-[32px] sm:text-5xl md:text-6xl font-black tracking-tight text-cs-dark-blue leading-[1.14] sm:leading-[1.08] mb-4 sm:mb-6 drop-shadow-[0_4px_20px_rgba(35,132,198,0.12)]">
          <span className="sm:hidden block">
            Pioneering the <br />
            Next Era of Enterprise <br />
            <span className="bg-gradient-to-r from-[#12619c] via-[#2384c6] via-[#63bceb] to-[#0c385a] bg-clip-text text-transparent">
              AI Solutions
            </span>
          </span>
          <span className="hidden sm:inline">
            Pioneering the Next Era of <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#12619c] via-[#2384c6] via-[#63bceb] to-[#0c385a] bg-clip-text text-transparent">
              Enterprise AI Solutions
            </span>
          </span>
        </h1>

        {/*  Subtitle with Reduced Width on Mobile and reduced gap to chips */}
        <p className="mx-auto mb-4 sm:mb-10 max-w-[285px] sm:max-w-[680px] text-[12.5px] sm:text-lg leading-[1.65] sm:leading-[1.7] text-cs-ink-muted font-normal">
          We are an elite team of technologists, AI researchers, and systems engineers dedicated to delivering
          <span className="font-semibold text-cs-dark-blue"> GenAI, Agentic AI, and intelligent workflow automation </span>
          that drives measurable, exponential business growth.
        </p>

        {/* Horizontal Swipeable Chip List on Mobile, Flex Wrap on Desktop */}
        <div
          className="flex sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-4 mb-5 sm:mb-12 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="shrink-0 group flex items-center gap-1.5 sm:gap-2 rounded-full sm:rounded-xl border border-white/80 bg-white/90 sm:bg-white/70 backdrop-blur-md px-3 py-1.5 sm:px-4.5 sm:py-2.5 text-[10px] sm:text-sm font-bold text-cs-dark-blue shadow-[0_2px_10px_rgba(12,56,90,0.06)] sm:shadow-cs-md ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-cs-light-blue hover:shadow-[0_6px_18px_rgba(35,132,198,0.18)] active:scale-95">
            <span className="flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center rounded-full sm:rounded-lg bg-cs-success/10 text-cs-success group-hover:scale-110 transition-transform">
              <CheckIcon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
            </span>
            <span>AI-First Technology Partner</span>
          </div>
          <div className="shrink-0 group flex items-center gap-1.5 sm:gap-2 rounded-full sm:rounded-xl border border-white/80 bg-white/90 sm:bg-white/70 backdrop-blur-md px-3 py-1.5 sm:px-4.5 sm:py-2.5 text-[10px] sm:text-sm font-bold text-cs-dark-blue shadow-[0_2px_10px_rgba(12,56,90,0.06)] sm:shadow-cs-md ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-cs-light-blue hover:shadow-[0_6px_18px_rgba(35,132,198,0.18)] active:scale-95">
            <span className="flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center rounded-full sm:rounded-lg bg-cs-light-blue/10 text-cs-light-blue group-hover:scale-110 transition-transform">
              <PulseIcon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
            </span>
            <span>Enterprise Scale Execution</span>
          </div>
          <div className="shrink-0 group flex items-center gap-1.5 sm:gap-2 rounded-full sm:rounded-xl border border-white/80 bg-white/90 sm:bg-white/70 backdrop-blur-md px-3 py-1.5 sm:px-4.5 sm:py-2.5 text-[10px] sm:text-sm font-bold text-cs-dark-blue shadow-[0_2px_10px_rgba(12,56,90,0.06)] sm:shadow-cs-md ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-cs-light-blue hover:shadow-[0_6px_18px_rgba(35,132,198,0.18)] active:scale-95">
            <span className="flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center rounded-full sm:rounded-lg bg-purple-500/10 text-purple-600 group-hover:scale-110 transition-transform">
              <ShieldIcon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
            </span>
            <span>100% Client Satisfaction</span>
          </div>
        </div>

        {/* Mobile-Only: 2x2 Statistics Grid  */}
        <div className="grid grid-cols-2 gap-3 mb-7 sm:hidden text-left">
          {MOBILE_STATS.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="group flex flex-col justify-between rounded-2xl border border-cs-border-accent/70 bg-white/95 p-4 shadow-[0_4px_16px_rgba(12,56,90,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cs-light-blue/80 hover:shadow-[0_8px_24px_rgba(35,132,198,0.15)] active:scale-[0.98]"
              >
                <div className="mb-3 flex items-center justify-start">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#e6f4fe] to-[#f0f8ff] border border-[#bce2ff]/60 text-[#186499] shadow-inner transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="font-display font-black text-[22px] text-cs-dark-blue tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10.5px] font-bold text-cs-ink mt-1.5 leading-tight">
                    {stat.label} <span className="text-cs-ink-muted font-normal">{stat.sublabel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile-Only: Prominent Full-Width CTA Button with Smooth Micro-interactions */}
        <div className="sm:hidden w-full pb-2">
          <Link
            href="/contact"
            className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#0c385a] via-[#12619c] to-[#2384c6] px-6 py-4 font-display font-black text-base text-white shadow-[0_8px_24px_-4px_rgba(12,56,90,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-4px_rgba(35,132,198,0.4)] active:scale-[0.98] active:translate-y-0"
          >
            <span>Talk to Us</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>

      {/* Desktop-Only Stats Strip */}
      <AboutStatsStrip />
    </section>
  );
}
