"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LayersIcon } from "@/components/icons/HeroIcons";
import { AIDashboardVisual } from "./AIDashboardVisual";

const STATS = [
  ["50+", "Projects Delivered"],
  ["100%", "Client Satisfaction"],
  ["24×7", "Support"],
] as const;

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getRevealStyle = (delayMs: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(35px) scale(0.96)",
    filter: mounted ? "blur(0px)" : "blur(8px)",
    transition: "opacity 1400ms cubic-bezier(0.16, 1, 0.3, 1), transform 1400ms cubic-bezier(0.16, 1, 0.3, 1), filter 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delayMs}ms`,
    willChange: "opacity, transform, filter",
  });

  return (
    <section className="relative overflow-hidden bg-white px-8 mt-5">
      {/* Hero Section Grid */}
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
        {/* Content - Leftside */}
        <div>
          {/* Badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cs-border-accent bg-cs-surface-accent px-3.5 py-1.5 text-[13px] font-semibold tracking-[0.04em] text-cs-light-blue"
            style={getRevealStyle(100)}
          >
            <LayersIcon className="h-3.5 w-3.5" />
            AI-First Technology Partner
          </div>
          {/* Main Headline */}
          <h1
            className="mb-5 font-display font-bold leading-[1.08] tracking-[-0.03em] text-cs-dark-blue"
            style={{ ...getRevealStyle(200), fontSize: "clamp(2.75rem, 5vw, 3.5rem)" }}
          >
            Deliver Real
            <br />
            <span className="text-cs-light-blue">AI Outcomes</span>
            <br />
            at Enterprise Scale
          </h1>
          {/* Description Text */}
          <p
            className="mb-5 max-w-[480px] text-lg leading-[1.7] text-cs-ink-muted"
            style={getRevealStyle(350)}
          >
            GenAI, Agentic AI, and workflow automation that boosts efficiency
            and significantly reduces operational costs — delivered by a team
            that actually cares.
          </p>
          {/* CTA Buttons */}
          <div
            className="mb-5 flex flex-wrap gap-3"
            style={getRevealStyle(500)}
          >
            <Link
              href="/contact"
              className="rounded-md bg-cs-dark-blue px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-cs-dark-blue-hover active:scale-[0.98]"
            >
              Book a Free Call
            </Link>
            <Link
              href="/services"
              className="rounded-md border-[1.5px] border-cs-border-accent bg-transparent px-7 py-3.5 text-[15px] font-medium text-cs-dark-blue transition-colors hover:border-cs-light-blue hover:text-cs-light-blue"
            >
              See Our Services →
            </Link>
          </div>
          {/* Stats Section */}
          <dl
            className="mt-5 mb-5 flex flex-wrap gap-y-5 divide-x divide-cs-border border-t border-cs-border pt-5"
            style={getRevealStyle(650)}
          >
            {STATS.map(([value, label]) => (
              <div key={label} className="px-8 first:pl-0">
                <dt className="font-display text-[28px] font-bold leading-none text-cs-dark-blue">
                  {value}
                </dt>
                <dd className="mt-1.5 text-[13px] text-cs-ink-faint">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/* Content - Rightside */}
        <div
          className="relative flex items-center justify-center"
          style={getRevealStyle(300)}
        >
          <AIDashboardVisual />
        </div>
      </div>
    </section>
  );
}
