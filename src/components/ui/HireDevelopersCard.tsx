import Link from "next/link";
import { ArrowRightIcon, UserPlusIcon } from "@/components/icons/HeroIcons";

interface Props {
  /**
   * compact — fits inside the MegaMenu left panel (small text, tight padding)
   * full    — standalone section card for use on pages
   */
  variant?: "compact" | "full";
  href?: string;
  onClick?: () => void;
}

export function HireDevelopersCard({
  variant = "full",
  href = "/services",
  onClick,
}: Props) {
  if (variant === "compact") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="mb-4 flex flex-col gap-2 rounded-xl border border-cs-border-accent bg-cs-surface-accent p-2.5 transition-colors hover:border-cs-dark-blue/30 hover:bg-cs-surface-tint"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cs-dark-blue">
            <UserPlusIcon className="h-4 w-4 text-white" />
          </div>
          <div className="flex items-center gap-1.5">
            <p className="text-xs font-bold text-cs-dark-blue">
              Hire Dedicated Developers
            </p>
            <span className="flex-shrink-0 whitespace-nowrap rounded bg-cs-light-blue px-1 py-px text-[9px] font-semibold uppercase tracking-wide text-white">
              On Demand
            </span>
          </div>
        </div>
        <p className="text-[10px] leading-snug text-cs-ink-muted">
          Pre-vetted senior engineers embedded directly in your team, aligned to your stack and sprint cadence.
        </p>
        <span className="text-[10px] font-semibold text-cs-light-blue">
          Explore hiring options →
        </span>
      </Link>
    );
  }

  return (
    <div className="rounded-2xl border border-cs-border-accent bg-cs-surface p-4 transition-shadow hover:shadow-cs-md">
      {/* Icon + headline side by side */}
      <div className="mb-3 flex items-start gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-cs-dark-blue" style={{ marginTop: "2px" }}>
          <UserPlusIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="font-display text-[0.9375rem] font-bold leading-snug tracking-[-0.02em] text-cs-dark-blue">
          Augment Your Team or<br />Hire Dedicated Developer
        </h3>
      </div>

      <p className="mb-3 text-[0.8125rem] leading-relaxed text-cs-ink-muted">
        Pre-vetted senior engineers embedded directly in your team. No recruiting overhead,
        no ramp-up lag, simply aligned to your stack and sprint cadence.
      </p>

      {/* Divider */}
      <div className="mb-3 h-px bg-cs-border" />

      {/* Proof stats */}
      <div className="mb-3 flex">
        <div className="flex-1 py-1.5 text-center">
          <p className="font-display text-lg font-bold leading-none tracking-[-0.02em] text-cs-dark-blue">
            72h
          </p>
          <p className="mt-0.5 text-[0.5rem] font-medium text-cs-ink-muted">
            Work-ready
          </p>
        </div>
        <div className="w-px bg-cs-border" />
        <div className="flex-1 py-1.5 text-center">
          <p className="font-display text-lg font-bold leading-none tracking-[-0.02em] text-cs-dark-blue">
            Day 1
          </p>
          <p className="mt-0.5 text-[0.5rem] font-medium text-cs-ink-muted">
            Sprint-ready
          </p>
        </div>
      </div>

      <Link
        href={href}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cs-light-blue px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-cs-light-blue-hover"
      >
        Explore Hiring Options
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
