import Image from "next/image";
import { CheckIcon, PulseIcon } from "@/components/icons/HeroIcons";

export function AboutPhilosophy() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cs-light-blue">
              <PulseIcon className="h-3.5 w-3.5" />
              High Standard & Innovation
            </div>

            {/* Main Headline from Reference Image */}
            <h2 
              className="mb-6 font-display font-bold leading-[1.15] tracking-[-0.02em] text-cs-dark-blue"
              style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}
            >
              Building More Than <span className="text-cs-light-blue">Software</span> – We Architect Digital Innovation
            </h2>

            {/* Introductory Description */}
            <p className="mb-8 text-base leading-relaxed text-cs-ink-muted">
              In today&apos;s fast-evolving digital landscape, ordinary solutions are no longer enough. 
              At Cueserve, we architect custom GenAI and Agentic AI platforms that streamline 
              complex workflows, eliminate operational redundancies, and empower your enterprise 
              to scale effortlessly.
            </p>

            {/* Key Value Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cs-border-accent bg-cs-surface-accent text-cs-light-blue shadow-cs-sm">
                  <CheckIcon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-cs-dark-blue mb-1">
                    Your Success, Our Mission
                  </h3>
                  <p className="text-sm leading-relaxed text-cs-ink-muted">
                    We measure our achievement solely by the measurable success of our clients. 
                    Every solution we build is engineered with a focus on quality, ROI, and long-term business impact.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cs-border-accent bg-cs-surface-accent text-cs-light-blue shadow-cs-sm">
                  <CheckIcon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-cs-dark-blue mb-1">
                    Creators Of Digital Excellence
                  </h3>
                  <p className="text-sm leading-relaxed text-cs-ink-muted">
                    As pioneers of AI-first transformation, our team combines technical rigor with strategic 
                    design to deliver robust, secure, and intelligent digital platforms that stand the test of time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cs-surface-accent via-cs-surface-tint to-transparent opacity-80 -z-10 blur-xl" />

            <div className="relative rounded-2xl border border-cs-border shadow-cs-xl overflow-hidden bg-cs-surface-tint aspect-[4/5] max-w-[500px] mx-auto lg:ml-auto">
              <Image
                src="/aboutus1.png"
                alt="Cueserve Team Collaborating on Digital Innovation"
                fill
                quality={100}
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-dark-blue/20 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3.5 rounded-xl border border-cs-border bg-white p-4 shadow-cs-lg max-w-[260px]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cs-dark-blue text-white font-display font-bold text-lg">
                CS
              </div>
              <div>
                <p className="text-xs font-bold text-cs-dark-blue">Enterprise Scale</p>
                <p className="text-[11px] text-cs-ink-muted">Architected for growth & reliability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
