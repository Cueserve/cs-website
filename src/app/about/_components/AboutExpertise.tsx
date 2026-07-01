import Image from "next/image";
import Link from "next/link";
import { PulseIcon, ArrowRightIcon } from "@/components/icons/HeroIcons";

export function AboutExpertise() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">

          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cs-light-blue">
              <PulseIcon className="h-3.5 w-3.5" />
              WHO WE ARE
            </div>

            {/* Main Headline */}
            <h2
              className="mb-6 font-display font-bold leading-[1.15] tracking-[-0.02em] text-cs-dark-blue"
              style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}
            >
              Experts in <span className="text-cs-light-blue">digital brand innovation</span>
            </h2>

            {/* Description Paragraph */}
            <p className="mb-8 text-base leading-relaxed text-cs-ink-muted">
              There are two critical variables of standard enterprise delivery: the technical complexity
              of the problem and the speed of execution by the engineering team. Cueserve has been proven
              to consistently solve mission-critical AI challenges while drastically reducing time-to-market.
            </p>

            {/* Progress Bar */}
            <div className="mb-10 rounded-xl border border-cs-border bg-cs-surface-subtle p-5 shadow-cs-sm">
              <div className="flex justify-between items-center mb-2.5 text-sm font-bold text-cs-dark-blue">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cs-light-blue animate-pulse" />
                  We Are AI & Digital Engineering Experts
                </span>
                <span className="text-cs-light-blue font-display text-base">90%</span>
              </div>

              {/* Progress Bar Track */}
              <div className="h-2.5 w-full bg-cs-border rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cs-dark-blue to-cs-light-blue rounded-full w-[90%] transition-all duration-1000" />
              </div>
            </div>

            {/* Mini Founder Card with Contact Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cs-border bg-white p-4 sm:p-5 shadow-cs-md">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden border-2 border-cs-border-accent">
                  {/* <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                    alt="Viral Parikh - CEO & Founder"
                    fill
                    quality={100}
                    className="object-cover"
                  /> */}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-cs-dark-blue leading-snug">
                    Viral Parikh
                  </h4>
                  <p className="text-xs text-cs-ink-muted font-medium">
                    CEO & Founder
                  </p>
                </div>
              </div>

              {/* Contact Us Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-cs-dark-blue px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-cs-light-blue active:scale-95 shadow-cs-sm"
              >
                Contact Us
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 relative">

            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-bl from-cs-surface-accent via-cs-surface-tint to-transparent opacity-80 -z-10 blur-xl" />

            <div className="relative pt-2 pb-6 px-2">

              {/* Top Left Image Frame */}
              <div className="w-[80%] aspect-[4/3] rounded-2xl border border-cs-border shadow-cs-md overflow-hidden bg-cs-surface-tint relative z-10">
                <Image
                  src="/cloud_ai.png"
                  alt="Digital Innovation Specialist at Work"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cs-dark-blue/20 via-transparent to-transparent" />
              </div>

              {/* Stacked Bottom Row */}
              <div className="flex items-end justify-between gap-4 -mt-16 sm:-mt-24 relative z-20">

                {/* 14 Years Badge  */}
                <div className="rounded-2xl border border-cs-border bg-white/80 backdrop-blur-md p-5 sm:p-6 shadow-cs-xl flex flex-col justify-center text-center w-[135px] sm:w-[160px] shrink-0 self-end mb-2 sm:mb-4 z-20">
                  <span className="font-display font-black text-4xl sm:text-5xl tracking-tight text-cs-dark-blue leading-none">
                    14+
                  </span>
                  <span className="mt-1.5 font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-cs-light-blue">
                    Years
                  </span>
                  <span className="text-[10px] sm:text-xs text-cs-ink-muted font-medium">
                    Experience
                  </span>
                </div>

                {/* Bottom Right Image Frame */}
                <div className="w-[68%] aspect-[4/3] rounded-2xl border border-cs-border shadow-cs-xl overflow-hidden bg-cs-surface-tint relative z-10">
                  <Image
                    src="/services.png"
                    alt="AI Strategy & Innovation"
                    fill
                    quality={100}
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cs-dark-blue/20 via-transparent to-transparent" />
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
