import Link from "next/link";
import { LayersIcon } from "@/components/icons/HeroIcons";
import { AIDashboardVisual } from "./AIDashboardVisual";

const STATS = [
  ["50+", "Projects Delivered"],
  ["100%", "Client Satisfaction"],
  ["24×7", "Support"],
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-8 mt-5">

      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cs-border-accent bg-cs-surface-accent px-3.5 py-1.5 text-[13px] font-semibold tracking-[0.04em] text-cs-light-blue">
            <LayersIcon className="h-3.5 w-3.5" />
            AI-First Technology Partner
          </div>

          <h1 className="mb-5 font-display font-bold leading-[1.08] tracking-[-0.03em] text-cs-dark-blue" style={{ fontSize: "clamp(2.75rem, 5vw, 3.5rem)" }}>
            Deliver Real
            <br />
            <span className="text-cs-light-blue">AI Outcomes</span>
            <br />
            at Enterprise Scale
          </h1>

          <p className="mb-5 max-w-[480px] text-lg leading-[1.7] text-cs-ink-muted">
            GenAI, Agentic AI, and workflow automation that boosts efficiency
            and significantly reduces operational costs — delivered by a team
            that actually cares.
          </p>

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

          <dl className="mt-5 mb-5 flex flex-wrap gap-x-10 gap-y-5 border-t border-cs-border pt-5">
            {STATS.map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-[28px] font-bold leading-none text-cs-dark-blue">
                  {value}
                </dt>
                <dd className="mt-1.5 text-[13px] text-cs-ink-faint">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex items-center justify-center">
          <AIDashboardVisual />
        </div>
      </div>
    </section>
  );
}
