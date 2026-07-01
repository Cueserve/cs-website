import Link from "next/link";
import { LayersIcon, PulseIcon } from "@/components/icons/HeroIcons";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-12 border-b border-cs-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cs-surface-accent/60 rounded-full blur-3xl" />
      </div>

      {/* Centered Hero Content */}
      <div className="mx-auto max-w-[1200px] px-8 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cs-border-accent bg-cs-surface-accent px-4 py-1.5 text-[13px] font-semibold tracking-[0.04em] text-cs-light-blue shadow-cs-sm">
          <LayersIcon className="h-3.5 w-3.5" />
          WE ARCHITECT DIGITAL INNOVATION
        </div>

        {/* Main Bold Headline */}
        <h1 
          className="mb-6 font-display font-bold leading-[1.08] tracking-[-0.03em] text-cs-dark-blue"
          style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
        >
          About <span className="text-cs-light-blue">Us</span>
        </h1>

        {/* Subtitle / Description */}
        <p className="mx-auto mb-10 max-w-[640px] text-lg leading-[1.7] text-cs-ink-muted">
          We are a core team of technologists, engineers, and strategists dedicated to 
          delivering GenAI, Agentic AI, and enterprise workflow automation that boosts 
          efficiency and drives measurable business growth.
        </p>

        {/* Quick CTA or Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-cs-dark-blue/80">
          <span className="inline-flex items-center gap-1.5 bg-cs-surface-tint px-3.5 py-1.5 rounded-md border border-cs-border">
            <PulseIcon className="h-4 w-4 text-cs-success" /> AI-First Technology Partner
          </span>
          <span className="inline-flex items-center gap-1.5 bg-cs-surface-tint px-3.5 py-1.5 rounded-md border border-cs-border">
            ✦ Enterprise Scale Execution
          </span>
          <span className="inline-flex items-center gap-1.5 bg-cs-surface-tint px-3.5 py-1.5 rounded-md border border-cs-border">
            ★ 100% Client Satisfaction
          </span>
        </div>
      </div>

      <div className="mt-14 border-t border-cs-border-accent bg-cs-surface-accent py-3 px-6">
        <div className="mx-auto max-w-[1200px] flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13.5px] font-semibold text-cs-dark-blue">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-cs-light-blue px-2 py-0.5 text-[11px] uppercase tracking-wider text-white">Get Now</span>
            <span>Free AI Transformation Strategy Consultation</span>
            <Link href="/contact" className="text-cs-light-blue hover:underline font-bold ml-1">
              Book Call →
            </Link>
          </div>
          <span className="hidden md:inline text-cs-border-strong">•</span>
          <div className="flex items-center gap-2 text-cs-ink-muted">
            <span>⚡ Building More Than Software — We Architect Digital Innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
