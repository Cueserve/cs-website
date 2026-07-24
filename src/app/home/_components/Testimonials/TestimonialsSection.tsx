"use client";

import { useEffect, useState } from "react";
import { QuoteIcon } from "@/components/icons/HeroIcons";

const TESTIMONIALS = [
  {
    name: "Lindel Wabhembe",
    role: "Co-Founder",
    company: "The New Chapter Book Store",
    location: "South Africa",
    text: "If you want your job done professionally and on time, I highly recommend Team Cueserve. Very professional and will hire again in my future projects.",
    initials: "LW",
  },
  {
    name: "Michael T.",
    role: "CTO",
    company: "FinTech Startup",
    location: "Australia",
    text: "The team understood our complex requirements and delivered a world-class mobile app. Their 24×7 availability and honest communication made all the difference.",
    initials: "MT",
  },
  {
    name: "Sarah K.",
    role: "Head of Operations",
    company: "E-Commerce Platform",
    location: "United States",
    text: "Cueserve automated our entire order-processing workflow. What took a team of 6 people now runs in minutes. ROI was clear within the first month.",
    initials: "SK",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-cs-surface-tint px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-14 text-center">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-cs-light-blue">
            Client Stories
          </div>
          <h2 className="font-display text-4xl font-bold tracking-[-0.025em] text-cs-dark-blue">
            What Clients Say
          </h2>
        </header>

        <div className="grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => {
            const isActive = active === i;
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={[
                  "group rounded-xl border p-7 text-left transition-all duration-300",
                  isActive
                    ? "-translate-y-1 border-cs-dark-blue bg-cs-dark-blue shadow-cs-xl"
                    : "border-cs-border bg-white shadow-cs-sm",
                ].join(" ")}
              >
                <QuoteIcon
                  className={`mb-3.5 h-5 w-6 ${
                    isActive ? "text-cs-light-blue/50" : "text-cs-border-strong"
                  }`}
                />
                <p
                  className={`mb-5 italic leading-[1.7] ${
                    isActive ? "text-white/85" : "text-cs-ink"
                  }`}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-[13px] font-bold ${
                      isActive ? "bg-cs-light-blue/30 text-white" : "bg-cs-surface-accent text-cs-light-blue"
                    }`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className={`font-display text-sm font-semibold ${
                        isActive ? "text-white" : "text-cs-dark-blue"
                      }`}
                    >
                      {t.name}
                    </div>
                    <div
                      className={`mt-0.5 text-xs ${
                        isActive ? "text-white/55" : "text-cs-ink-faint"
                      }`}
                    >
                      {t.role}, {t.company} · {t.location}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-cs-light-blue" : "w-2 bg-cs-border-strong"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
