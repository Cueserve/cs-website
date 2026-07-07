"use client";

import { PulseIcon, UsersIcon, TargetIcon, ZapIcon, ArrowRightIcon } from "@/components/icons/HeroIcons";

const ENGAGEMENT_MODELS = [
  {
    icon: UsersIcon,
    title: "Dedicated Team",
    description: "Embed senior engineers directly into your product team for long-term development and continuous innovation.",
  },
  {
    icon: TargetIcon,
    title: "End-to-End Project Delivery",
    description: "Complete ownership from planning and architecture through development, testing, deployment, and support.",
  },
  {
    icon: ZapIcon,
    title: "AI Innovation Sprint",
    description: "Rapid validation of AI ideas with production-ready prototypes and accelerated delivery.",
  },
];

export function EngagementModels() {
  return (
    <section className="relative bg-cs-dark-blue px-6 py-20 sm:py-24 text-white lg:px-8 overflow-hidden">
      {/* Subtle Brand Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cs-light-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cs-light-blue-soft/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-cs-light-blue-soft">
            <PulseIcon className="w-3.5 h-3.5 animate-pulse text-cs-light-blue-soft" />
            <span>FLEXIBLE DELIVERY MODELS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.025em] text-white mb-5">
            Tailored Engagement.{" "}
            <span className="text-cs-light-blue-soft">
              Engineered for Velocity.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-[1.65] font-normal">
            We adapt our engineering engagement to your exact strategic goals, business needs, and project scale—whether integrating seamlessly into existing product workflows or shipping autonomous platforms from scratch.
          </p>
        </header>

        {/* 3 Engagement Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {ENGAGEMENT_MODELS.map((model, i) => {
            const Icon = model.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 text-left hover:border-cs-light-blue/45 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.3)] group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.08] text-cs-light-blue-soft group-hover:bg-cs-light-blue group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cs-light-blue-soft transition-colors duration-300">
                    {model.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-white/70 font-normal">
                    {model.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle CTA Button */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.12] hover:border-cs-light-blue transition-all duration-300 shadow-sm group"
          >
            <span>Talk to Our Experts</span>
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
