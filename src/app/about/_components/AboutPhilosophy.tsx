import Image from "next/image";
import { CheckIcon, PulseIcon } from "@/components/icons/HeroIcons";

export function AboutPhilosophy() {
  return (
    <section className="py-24 bg-white overflow-hidden">

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(-4px); }
          50% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: floatSlow 5.5s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cs-light-blue">
              <PulseIcon className="h-3.5 w-3.5" />
              High Standard & Innovation
            </div>

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

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/90 bg-gradient-to-br from-[#e6f4fe] via-[#f0f8ff] to-white text-[#186499] shadow-md shadow-[#2384c6]/10 backdrop-blur-md ring-1 ring-[#bce2ff]/50">
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

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/90 bg-gradient-to-br from-[#e6f4fe] via-[#f0f8ff] to-white text-[#186499] shadow-md shadow-[#2384c6]/10 backdrop-blur-md ring-1 ring-[#bce2ff]/50">
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
            {/* Subtle Blue Glow Behind Image */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-[#2384c6]/30 via-[#7db8d8]/25 to-[#0c385a]/15 -z-10 blur-3xl" />
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-cs-light-blue/25 rounded-full -z-10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#12619c]/20 rounded-full -z-10 blur-2xl" />

            {/* 3. shadow-xl + subtle blue shadow */}
            <div className="relative rounded-2xl border border-cs-border/80 shadow-xl shadow-[#2384c6]/20 overflow-hidden bg-cs-surface-tint aspect-[4/5] max-w-[500px] mx-auto lg:ml-auto">
              <Image
                src="/aboutus1.png"
                alt="Cueserve Team Collaborating on Digital Innovation"
                fill
                quality={100}
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              {/* Very soft brand blue gradient overlay + tiny glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0c385a]/25 via-[#2384c6]/10 to-[#63bceb]/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c385a]/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#bce2ff]/30 rounded-2xl pointer-events-none shadow-[inset_0_0_20px_rgba(35,132,198,0.15)]" />
            </div>

            {/* 4. Floating Badge with actual 5.5s slow floating animation */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3.5 rounded-xl border border-white/90 bg-white/90 backdrop-blur-md p-4 shadow-xl shadow-[#186499]/15 max-w-[260px] animate-float-slow z-20">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cs-dark-blue text-white font-display font-bold text-lg shadow-sm">
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
