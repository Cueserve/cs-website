import Image from "next/image";
import { CheckIcon, PulseIcon, LayersIcon } from "@/components/icons/HeroIcons";

export function AboutMissionVision() {
  return (
    <section className="py-24 bg-cs-surface-subtle border-y border-cs-border">
      <div className="mx-auto max-w-[1200px] px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cs-light-blue">
            <PulseIcon className="h-3.5 w-3.5" />
            OUR APPROACH
          </div>
          <h2 
            className="font-display font-bold leading-[1.15] tracking-[-0.02em] text-cs-dark-blue"
            style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}
          >
            Crafting <span className="text-cs-light-blue">impactful</span> digital experiences
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-cs-border bg-white p-6 sm:p-8 shadow-cs-md hover:shadow-cs-lg transition-all duration-300">
            <div>
              {/* Image Banner */}
              <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden mb-6 bg-cs-surface-accent border border-cs-border-accent">
                <Image
                  src="/ourvalue.png"
                  alt="Digital Technology and AI Innovation"
                  fill
                  quality={100}
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cs-dark-blue/80 via-cs-dark-blue/20 to-transparent" />
                
                {/* Floating Tag over Image */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-cs-dark-blue shadow-cs-sm">
                  <LayersIcon className="h-3.5 w-3.5 text-cs-light-blue" />
                  Our Value
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-bold text-cs-dark-blue mb-4 leading-snug">
                Investigate Our One-of-a-Kind Incentive & How We Drive Enterprise Growth
              </h3>
              <p className="text-sm leading-relaxed text-cs-ink-muted">
                We pride ourselves on delivering an undeniable value proposition for ambitious enterprises. 
                Our approach is deeply rooted in understanding your core business objectives, identifying 
                operational friction, and deploying custom AI architectures that yield immediate efficiency gains.
              </p>
            </div>

            {/* Bottom Highlight box inside Left Card */}
            <div className="mt-8 rounded-xl bg-cs-surface-tint border border-cs-border p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-cs-dark-blue">Enterprise Ready</p>
                <p className="text-[11px] text-cs-ink-muted">Tailored AI workflows & automation</p>
              </div>
              <span className="text-xs font-semibold text-cs-light-blue bg-white px-2.5 py-1 rounded-md border border-cs-border shadow-cs-sm">
                100% Custom
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Card 1: Our Mission */}
            <div className="flex-1 rounded-2xl border border-cs-border bg-white p-6 sm:p-8 shadow-cs-md hover:border-cs-light-blue/40 hover:shadow-cs-lg transition-all duration-300">
              <div className="mb-3 inline-block rounded-md bg-cs-surface-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-cs-light-blue border border-cs-border-accent">
                Our Mission
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-cs-dark-blue mb-4">
                We aim to be more than a service provider—your trusted AI & technology growth partner.
              </h3>
              
              {/* Mission Bullet Points */}
              <ul className="grid sm:grid-cols-2 gap-3.5 mt-6">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cs-success-tint text-cs-success">
                    <CheckIcon className="h-3 w-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-cs-ink-muted leading-snug">
                    Engineer robust, scalable AI platforms that drive measurable ROI.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cs-success-tint text-cs-success">
                    <CheckIcon className="h-3 w-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-cs-ink-muted leading-snug">
                    Accelerate enterprise growth through intelligent automation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cs-success-tint text-cs-success">
                    <CheckIcon className="h-3 w-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-cs-ink-muted leading-snug">
                    Eliminate operational bottlenecks with custom agentic workflows.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cs-success-tint text-cs-success">
                    <CheckIcon className="h-3 w-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-cs-ink-muted leading-snug">
                    Empower teams with secure, future-ready digital foundations.
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2: Our Vision */}
            <div className="flex-1 rounded-2xl border border-cs-border bg-white p-6 sm:p-8 shadow-cs-md hover:border-cs-light-blue/40 hover:shadow-cs-lg transition-all duration-300">
              <div className="mb-3 inline-block rounded-md bg-cs-surface-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-cs-light-blue border border-cs-border-accent">
                Our Vision
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-cs-dark-blue mb-3">
                We strive to be more than a vendor—we aim to lead long-term digital innovation.
              </h3>
              <p className="text-sm leading-relaxed text-cs-ink-muted mt-2">
                At Cueserve, our vision is a modern technology landscape where ambitious enterprises operate 
                at peak efficiency without technical friction. We envision a future where custom AI systems 
                and human ingenuity work seamlessly together enabling organizations to innovate faster, 
                scale smarter, and dominate their industries with absolute confidence.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
