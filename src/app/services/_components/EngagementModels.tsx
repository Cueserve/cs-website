"use client";

import { PulseIcon } from "@/components/icons/HeroIcons";

// Updated stats consistent with Cueserve home page & removing senior engineers
const STATS_DATA = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24×7", label: "Global Support" },
  { value: "15+", label: "Industries Served" },
];

export function EngagementModels() {
  return (
    <section className="relative bg-cs-dark-blue px-6 py-24 sm:py-32 text-white lg:px-8 overflow-hidden">
      {/* ── Engineered Enterprise Background Linework (Clean & Minimal) ── */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cs-light-blue/20 to-transparent pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cs-light-blue/20 to-transparent pointer-events-none"
      />

      {/* Subtle Brand Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cs-light-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cs-light-blue-soft/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px]">
        {/* ── Section Header & Stat Cards ── */}
        <header className="text-center max-w-3xl mx-auto">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-cs-light-blue-soft">
            <PulseIcon className="w-3.5 h-3.5 animate-pulse text-cs-light-blue-soft" />
            <span>Flexible Delivery Models</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.025em] text-white mb-6">
            Tailored Engagement.{" "}
            <span className="text-cs-light-blue-soft">
              Engineered for Velocity.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-[1.65] font-normal mb-8">
            Whether you need to scale an engineering team overnight, ship an autonomous AI platform from scratch, or architect an enterprise migration roadmap, we align our delivery to your exact strategic goals.
          </p>

          {/* Subtle Divider */}
          <div className="w-16 h-px bg-cs-light-blue/40 mx-auto mb-10" />

          {/* 4 Enterprise Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {STATS_DATA.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center hover:border-cs-light-blue/30 transition-all duration-[250ms]"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-cs-light-blue-soft mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </header>
      </div>
    </section>
  );
}
