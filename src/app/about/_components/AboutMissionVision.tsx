import Image from "next/image";
import { CheckIcon, PulseIcon, LayersIcon } from "@/components/icons/HeroIcons";

export function AboutMissionVision() {
  return (
    <section className="pt-12 pb-10 sm:py-24 bg-cs-surface-subtle border-y border-cs-border relative overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.09]"
        style={{
          backgroundImage: `radial-gradient(#0c385a 1.2px, transparent 1.2px)`,
          backgroundSize: "24px 24px"
        }}
      />
      <div className="mx-auto max-w-[1200px] px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cs-light-blue">
            <PulseIcon className="h-3.5 w-3.5" />
            OUR APPROACH
          </div>
          <h2 className="font-display font-bold leading-[1.15] tracking-[-0.02em] text-cs-dark-blue">
            <span className="sm:hidden block text-[26px]">
              Crafting <span className="text-cs-light-blue">impactful</span> digital experiences
            </span>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}>
              Crafting <span className="text-cs-light-blue">impactful</span> digital experiences
            </span>
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

                <div className="absolute inset-0 bg-gradient-to-tr from-[#0c385a]/25 via-[#2384c6]/10 to-[#63bceb]/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c385a]/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#bce2ff]/30 rounded-xl pointer-events-none shadow-[inset_0_0_20px_rgba(35,132,198,0.15)]" />
                
                {/* Floating Tag over Image */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-cs-dark-blue shadow-cs-sm">
                  <LayersIcon className="h-3.5 w-3.5 text-cs-light-blue" />
                  Our Value
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-[14px] sm:text-2xl font-bold text-cs-dark-blue mb-3 leading-snug">
                Investigate Our One-of-a-Kind Incentive & How We Drive Enterprise Growth
              </h3>
              <p className="text-[11px] sm:text-sm leading-relaxed text-cs-ink-muted">
                We pride ourselves on delivering an undeniable value proposition for ambitious enterprises. 
                Our approach is deeply rooted in understanding your core business objectives, identifying 
                operational friction, and deploying custom AI architectures that yield immediate efficiency gains.
              </p>
            </div>

            {/* Bottom Highlight box inside Left Card */}
            <div className="mt-8 rounded-xl bg-cs-surface-tint border border-cs-border p-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-cs-dark-blue">Enterprise Ready</p>
                <p className="text-[9.5px] sm:text-[11px] text-cs-ink-muted">Tailored AI workflows & automation</p>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-cs-light-blue bg-white px-2.5 py-1 rounded-md border border-cs-border shadow-cs-sm">
                100% Custom
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Card 1: Our Mission */}
            <div className="flex-1 rounded-2xl border border-cs-border bg-white p-5 sm:p-8 shadow-cs-md hover:border-cs-light-blue/40 hover:shadow-cs-lg transition-all duration-300">
              <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-md bg-cs-surface-accent px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cs-light-blue border border-cs-border-accent">
                <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx={12} cy={12} r={10} />
                  <circle cx={12} cy={12} r={6} />
                  <circle cx={12} cy={12} r={2} />
                </svg>
                <span>OUR MISSION</span>
              </div>
              <h3 className="font-display text-[14px] sm:text-2xl font-bold text-cs-dark-blue mb-3 max-w-[95%] sm:max-w-[90%] leading-snug">
                We aim to be more than a service provider—your trusted AI & technology growth partner.
              </h3>
              
              {/* Mission Bullet Points */}
              <ul className="grid sm:grid-cols-2 gap-2.5 sm:gap-3.5 mt-4 sm:mt-6 max-w-[95%] sm:max-w-[92%]">
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-cs-success-tint text-cs-success">
                    <CheckIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </div>
                  <span className="text-[11px] sm:text-sm text-cs-ink-muted leading-snug">
                    Engineer robust, scalable AI platforms that drive measurable ROI.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-cs-success-tint text-cs-success">
                    <CheckIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </div>
                  <span className="text-[11px] sm:text-sm text-cs-ink-muted leading-snug">
                    Accelerate enterprise growth through intelligent automation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-cs-success-tint text-cs-success">
                    <CheckIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </div>
                  <span className="text-[11px] sm:text-sm text-cs-ink-muted leading-snug">
                    Eliminate operational bottlenecks with custom agentic workflows.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-cs-success-tint text-cs-success">
                    <CheckIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </div>
                  <span className="text-[11px] sm:text-sm text-cs-ink-muted leading-snug">
                    Empower teams with secure, future-ready digital foundations.
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2: Our Vision */}
            <div className="flex-1 rounded-2xl border border-cs-border bg-white p-5 sm:p-8 shadow-cs-md hover:border-cs-light-blue/40 hover:shadow-cs-lg transition-all duration-300">
              <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-md bg-cs-surface-accent px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cs-light-blue border border-cs-border-accent">
                <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z" />
                </svg>
                <span>OUR VISION</span>
              </div>
              <h3 className="font-display text-[14px] sm:text-2xl font-bold text-cs-dark-blue mb-2.5 max-w-[95%] sm:max-w-[90%] leading-snug">
                We strive to be more than a vendor—we aim to lead long-term digital innovation.
              </h3>
              <p className="text-[11px] sm:text-sm leading-relaxed text-cs-ink-muted mt-2 max-w-[95%] sm:max-w-[90%]">
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
