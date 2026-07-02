import Image from "next/image";
import { LayersIcon, PulseIcon, ShieldIcon, CheckIcon } from "@/components/icons/HeroIcons";
import { AboutStatsStrip } from "./AboutStatsStrip";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-12 border-b border-cs-border">
      <div className="absolute inset-x-0 -top-[100px] -bottom-[40px] overflow-hidden pointer-events-none z-0">
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

      {/* Hero Content Container */}
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 text-center relative z-10">

        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/90 bg-gradient-to-r from-white/85 via-[#f0f8ff]/80 to-white/85 px-5 py-2 text-xs font-bold tracking-widest uppercase shadow-[0_8px_30px_-4px_rgba(35,132,198,0.25)] backdrop-blur-xl ring-1 ring-[#bce2ff]/60 mb-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_-4px_rgba(35,132,198,0.35)] hover:bg-white/95">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cs-light-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cs-light-blue"></span>
          </span>
          <span className="bg-gradient-to-r from-[#0c385a] via-[#12619c] to-[#186499] bg-clip-text text-transparent font-extrabold tracking-widest">
            ABOUT CUESERVE • WHO WE ARE
          </span>
        </div>

        <h1 className="mx-auto max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-cs-dark-blue leading-[1.08] mb-6 drop-shadow-[0_4px_20px_rgba(35,132,198,0.12)]">
          Pioneering the Next Era of <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#12619c] via-[#2384c6] via-[#63bceb] to-[#0c385a] bg-clip-text text-transparent">
            Enterprise AI Solutions
          </span>
        </h1>

        {/* Refined Subtitle */}
        <p className="mx-auto mb-10 max-w-[680px] text-base sm:text-lg leading-[1.7] text-cs-ink-muted font-normal">
          We are an elite team of technologists, AI researchers, and systems engineers dedicated to delivering
          <span className="font-semibold text-cs-dark-blue"> GenAI, Agentic AI, and intelligent workflow automation </span>
          that drives measurable, exponential business growth.
        </p>

        {/* 4. Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <div className="group flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/70 backdrop-blur-md px-4.5 py-2.5 text-xs sm:text-sm font-bold text-cs-dark-blue shadow-cs-md ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:border-cs-light-blue hover:shadow-cs-lg">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cs-success/10 text-cs-success group-hover:scale-110 transition-transform">
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            AI-First Technology Partner
          </div>
          <div className="group flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/70 backdrop-blur-md px-4.5 py-2.5 text-xs sm:text-sm font-bold text-cs-dark-blue shadow-cs-md ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:border-cs-light-blue hover:shadow-cs-lg">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cs-light-blue/10 text-cs-light-blue group-hover:scale-110 transition-transform">
              <PulseIcon className="h-3.5 w-3.5" />
            </span>
            Enterprise Scale Execution
          </div>
          <div className="group flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/70 backdrop-blur-md px-4.5 py-2.5 text-xs sm:text-sm font-bold text-cs-dark-blue shadow-cs-md ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:border-cs-light-blue hover:shadow-cs-lg">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 group-hover:scale-110 transition-transform">
              <ShieldIcon className="h-3.5 w-3.5" />
            </span>
            100% Client Satisfaction
          </div>
        </div>

      </div>

      <AboutStatsStrip />
    </section>
  );
}
