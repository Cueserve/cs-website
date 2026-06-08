import type { ReactNode } from "react";
import {
  ShieldIcon,
  ClockIcon,
  UsersIcon,
  PulseIcon,
  MonitorIcon,
  DollarIcon,
} from "@/components/icons/HeroIcons";

const PILLARS: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <ShieldIcon className="h-5 w-5 text-cs-light-blue" />,
    title: "Minimum Supervision",
    desc: "Once scoped, we execute independently. No daily hand-holding — you get transparent async updates and a team that takes ownership.",
  },
  {
    icon: <ClockIcon className="h-5 w-5 text-cs-light-blue" />,
    title: "Fast, Stable Delivery",
    desc: "We move quickly without sacrificing quality. Code is reviewed for 100% accuracy — no technical debt shipped to meet a deadline.",
  },
  {
    icon: <UsersIcon className="h-5 w-5 text-cs-light-blue" />,
    title: "20+ Expert Engineers",
    desc: "Cloud, DevOps, AI, Web, and Mobile specialists — a full-stack team so you never need to look elsewhere to scale.",
  },
  {
    icon: <PulseIcon className="h-5 w-5 text-cs-light-blue" />,
    title: "Honest Communication",
    desc: "We tell you what's feasible and what isn't. No overselling, no hidden surprises — just clear timelines and real numbers.",
  },
  {
    icon: <MonitorIcon className="h-5 w-5 text-cs-light-blue" />,
    title: "24×7 Support",
    desc: "Round-the-clock availability for maintenance and critical issues — because your product runs 24 hours and so do we.",
  },
  {
    icon: <DollarIcon className="h-5 w-5 text-cs-light-blue" />,
    title: "Cost-Competitive",
    desc: "India-based expert team means world-class engineering at a fraction of US/EU rates — without compromising on quality or communication.",
  },
];

const STATS = [
  ["50+", "Projects"],
  ["$6M+", "Revenue delivered"],
  ["20+", "Engineers"],
] as const;

export function WhySection() {
  return (
    <section className="bg-cs-bg-card px-8 py-24">
      <div className="mx-auto grid max-w-[1200px] items-start gap-20 lg:grid-cols-2">
        <div className="lg:sticky lg:top-24">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-cs-light-blue">
            Why Cueserve
          </div>
          <h2 className="mb-5 font-display text-4xl font-bold leading-[1.1] tracking-[-0.025em] text-cs-text-heading">
            A team that
            <br />
            delivers, not just
            <br />
            promises.
          </h2>
          <p className="mb-8 text-[17px] leading-[1.7] text-cs-text-secondary">
            We&apos;ve built software for clients across South Africa, Australia, the US, and India.
            The same commitment every time.
          </p>
          <dl className="flex gap-8">
            {STATS.map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-[26px] font-bold text-cs-text-heading">{value}</dt>
                <dd className="mt-1 text-xs text-cs-text-faint">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-cs-border bg-cs-bg-card p-5 transition-all duration-200 hover:border-cs-border-accent hover:bg-cs-bg-subtle hover:shadow-cs-md"
            >
              <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-lg bg-cs-bg-accent">
                {p.icon}
              </div>
              <h3 className="mb-2 font-display text-[15px] font-semibold text-cs-text-heading">
                {p.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-cs-text-muted">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
