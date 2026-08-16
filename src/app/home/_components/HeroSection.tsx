"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LayersIcon, StarIcon } from "@/components/icons/HeroIcons";
import { AIDashboardVisual } from "./AIDashboardVisual";

const STATS = [
  ["50+", "Projects Delivered"],
  ["100%", "Client Satisfaction"],
  ["24×7", "Support"],
] as const;

const TESTIMONIALS = [
  {
    quote: "Reduced support workload by 62% in just 3 weeks.",
    author: "CTO, SaaS Company",
    avatar: "https://i.pravatar.cc/150?u=saas-cto",
  },
  {
    quote: "The AI accuracy is mind-blowing. Saved us 20hrs/week!",
    author: "Alex M., Product Lead",
    avatar: "https://i.pravatar.cc/150?u=product-lead",
  },
  {
    quote: "Finally, an AI that actually works out of the box.",
    author: "David K., Founder",
    avatar: "https://i.pravatar.cc/150?u=founder-ai",
  },
];

export function HeroSection() {
  const [testiIdx, setTestiIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestiIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-8 mt-5">
      {/* Hero Section Grid */}
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
        {/* Content - Leftside */}
        <div>
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cs-border-accent bg-cs-surface-accent px-3.5 py-1.5 text-[13px] font-semibold tracking-[0.04em] text-cs-light-blue">
            <LayersIcon className="h-3.5 w-3.5" />
            AI-First Technology Partner
          </div>
          {/* Main Headline */}
          <h1 className="mb-5 font-display font-bold leading-[1.08] tracking-[-0.03em] text-cs-dark-blue" style={{ fontSize: "clamp(2.75rem, 5vw, 3.5rem)" }}>
            Deliver Real
            <br />
            <span className="text-cs-light-blue">AI Outcomes</span>
            <br />
            at Enterprise Scale
          </h1>
          {/* Description Text */}
          <p className="mb-5 max-w-[480px] text-lg leading-[1.7] text-cs-ink-muted">
            GenAI, Agentic AI, and workflow automation that boosts efficiency
            and significantly reduces operational costs — delivered by a team
            that actually cares.
          </p>
          {/* CTA Buttons */}
          <div className="mb-5 flex flex-wrap gap-3">
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
          <dl className="mt-5 mb-5 flex flex-wrap gap-y-5 divide-x divide-cs-border border-t border-cs-border pt-5">
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
        <div className="relative flex items-center justify-center">
          <AIDashboardVisual />

          {/* Testimonial Card */}
          <div 
            className="absolute -bottom-12 right-30 z-20 w-[280px] rounded-2xl bg-white p-5 shadow-cs-xl border border-cs-border"
            style={{ animation: "var(--animate-cs-float-slow)" }}
          >
            <div className="flex gap-0.5 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} className="h-3.5 w-3.5 text-[#FFB800]" />
              ))}
            </div>
            
            <div className="relative min-h-[70px]">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 absolute inset-0 ${
                    i === testiIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <p className="text-[13px] font-bold leading-snug text-cs-dark-blue mb-2">
                        "{t.quote}"
                      </p>
                      <p className="text-[11px] text-cs-ink-muted">— {t.author}</p>
                    </div>
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-cs-border-accent">
                      <img src={t.avatar} alt={t.author} className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

