"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { LayersIcon } from "@/components/icons/HeroIcons";

export interface VisionHeroContentProps {
  className?: string;
}

const STATS = [
  ["50+", "Projects Delivered"],
  ["100%", "Client Satisfaction"],
  ["24×7", "Support"],
] as const;

export const VisionHeroContent = forwardRef<HTMLDivElement, VisionHeroContentProps>(
  ({ className = "" }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute inset-0 z-30 flex flex-col justify-between p-6 sm:p-10 md:p-16 lg:p-20 pointer-events-none opacity-0 ${className}`}
      >
        {/* Top spacing where navbar was removed */}
        <div className="w-full h-8" />

        {/* Main Hero Reveal Content with CueServe Brand Tokens */}
        <div className="max-w-3xl my-auto text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cs-light-blue/40 bg-cs-dark-blue/60 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider text-cs-light-blue-soft uppercase shadow-lg">
            <LayersIcon className="h-4 w-4 text-cs-light-blue" />
            AI-First Technology Partner
          </div>

          {/* Main Headline */}
          <h1
            data-hero-title
            className="font-display font-bold leading-[1.08] tracking-[-0.03em] text-white mb-6 drop-shadow-sm"
            style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)" }}
          >
            Deliver Real <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cs-light-blue-soft via-white to-cs-light-blue">
              AI Outcomes
            </span>{" "}
            <br />
            at Enterprise Scale
          </h1>

          {/* Description Text */}
          <p
            data-hero-desc
            className="mb-8 max-w-xl text-base sm:text-lg leading-relaxed text-blue-100/90 font-normal"
          >
            GenAI, Agentic AI, and workflow automation that boosts efficiency and significantly
            reduces operational costs — delivered by a team at CueServe that actually cares.
          </p>

          {/* CTA Buttons */}
          <div data-hero-cta className="mb-10 flex flex-wrap items-center gap-4">
            {/* Book a Free Call — commented out
            <Link
              href="/contact"
              className="rounded-full bg-cs-light-blue hover:bg-cs-light-blue-hover px-8 py-4 text-base font-bold text-white transition-all shadow-xl shadow-cs-light-blue/30 flex items-center gap-2 group"
            >
              Book a Free Call
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            */}
            <Link
              href="/services"
              className="rounded-full border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-4 text-base font-semibold text-white transition-all"
            >
              See Our Services
            </Link>
          </div>

          {/* Stats Section */}
          <dl
            data-hero-cta
            className="flex flex-wrap gap-y-4 divide-x divide-white/20 border-t border-white/20 pt-6"
          >
            {STATS.map(([value, label]) => (
              <div key={label} className="px-8 first:pl-0">
                <dt className="font-display text-2xl sm:text-3xl font-bold leading-none text-white">
                  {value}
                </dt>
                <dd className="mt-1.5 text-xs sm:text-sm text-blue-200/80">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Bottom Metadata Strip */}
        <div className="w-full flex items-center justify-between text-xs text-white/70 border-t border-white/15 pt-6">
          <span className="font-mono tracking-widest">CUESERVE // AI INNOVATION</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>
    );
  }
);

VisionHeroContent.displayName = "VisionHeroContent";
