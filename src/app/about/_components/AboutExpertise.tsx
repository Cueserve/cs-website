import Image from "next/image";
import Link from "next/link";
import { PulseIcon, ArrowRightIcon } from "@/components/icons/HeroIcons";

export function AboutExpertise() {
  return (
    <section id="expertise" className="scroll-mt-20 pt-12 pb-10 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">

          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cs-light-blue">
              <PulseIcon className="h-3.5 w-3.5" />
              WHO WE ARE
            </div>

            {/* Main Headline */}
            <h2 className="mb-6 font-display font-bold leading-[1.15] tracking-[-0.02em] text-cs-dark-blue">
              <span className="sm:hidden block text-[26px]">
                Experts in <span className="text-cs-light-blue">digital brand innovation</span>
              </span>
              <span className="hidden sm:block" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}>
                Experts in <span className="text-cs-light-blue">digital brand innovation</span>
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="mb-8 text-[12.5px] sm:text-base leading-relaxed text-cs-ink-muted">
              There are two critical variables of standard enterprise delivery: the technical complexity
              of the problem and the speed of execution by the engineering team. Cueserve has been proven
              to consistently solve mission-critical AI challenges while drastically reducing time-to-market.
            </p>

            {/* Sleek Feature Pills */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cs-surface-subtle/80 border border-cs-border/60 text-[11px] sm:text-xs font-semibold text-cs-dark-blue shadow-sm shadow-[#2384c6]/5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2384c6]" />
                Mission-Critical AI
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cs-surface-subtle/80 border border-cs-border/60 text-[11px] sm:text-xs font-semibold text-cs-dark-blue shadow-sm shadow-[#2384c6]/5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2384c6]" />
                3x Faster Execution
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cs-surface-subtle/80 border border-cs-border/60 text-[11px] sm:text-xs font-semibold text-cs-dark-blue shadow-sm shadow-[#2384c6]/5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2384c6]" />
                Enterprise Reliability
              </div>
            </div>

            {/* Editorial Founder Quote & Action Block */}
            <div className="relative pl-5 py-2 border-l-4 border-[#2384c6] bg-gradient-to-r from-cs-surface-subtle/40 to-transparent rounded-r-xl">
              <p className="font-display font-medium text-[11.5px] sm:text-base italic text-cs-dark-blue leading-relaxed mb-4">
                &ldquo;We don&apos;t just build software; we engineer sustainable competitive advantage.&rdquo;
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-[#0c385a] to-[#2384c6] flex items-center justify-center text-white font-display font-bold text-[12px] sm:text-sm shadow-md">
                    VP
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[12px] sm:text-sm text-cs-dark-blue leading-tight">
                      Viral Parikh
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-cs-ink-muted font-medium mt-0.5">
                      CEO & Founder
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0c385a] px-4 py-2 text-[11px] sm:text-xs font-semibold text-white transition-all hover:bg-[#2384c6] active:scale-95 shadow-md shadow-[#0c385a]/10"
                >
                  Contact Us
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 relative">

            {/* Soft radial blue glow behind both images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-[#2384c6] rounded-full opacity-[0.06] blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-bl from-cs-surface-accent via-cs-surface-tint to-transparent opacity-80 -z-10 blur-xl" />

            <div className="relative pt-0 sm:pt-8 pb-0 px-2">

              {/* Top Left Image Frame  */}
              <div className="w-[78%] aspect-[3/2] rounded-2xl border border-cs-border/60 shadow-md overflow-hidden bg-white/60 relative z-10 opacity-[0.93] transition-all">
                <Image
                  src="/warm_office.jpg"
                  alt="Digital Innovation Specialist at Work"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 500px"
                />
                {/* Soft brand overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0c385a]/25 via-[#2384c6]/10 to-[#63bceb]/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c385a]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#bce2ff]/30 rounded-2xl pointer-events-none shadow-[inset_0_0_20px_rgba(35,132,198,0.15)]" />
              </div>

              {/* Overlapping Bottom Right Image Frame */}
              <div className="w-[78%] ml-auto -mt-12 sm:-mt-16 aspect-[3/2] rounded-2xl border-4 border-white shadow-2xl shadow-[#0c385a]/15 overflow-hidden bg-cs-surface-tint relative z-20">
                <Image
                  src="/warm_office2.jpg"
                  alt="AI Strategy & Innovation"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 500px"
                />
                {/* Soft brand overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0c385a]/25 via-[#2384c6]/10 to-[#63bceb]/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c385a]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#bce2ff]/30 rounded-2xl pointer-events-none shadow-[inset_0_0_20px_rgba(35,132,198,0.15)]" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
