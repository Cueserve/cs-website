const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We uncover your exact requirements, listing every detail and constraint to scope the work precisely.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "We map your concept using wireframes — outlining the skeleton before any design or code begins.",
  },
  {
    num: "03",
    title: "Execute",
    desc: "Design takes final shape, code is reviewed for 100% accuracy, and the idea comes to life.",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "We hand over all source files, assets, and resources — and stay on for maintenance and growth.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-cs-dark-blue px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-14 text-center">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-cs-light-blue-soft">
            How We Work
          </div>
          <h2 className="font-display text-4xl font-bold tracking-[-0.025em] text-white">
            Our Project Approach
          </h2>
        </header>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[52px] z-0 hidden h-px bg-cs-light-blue/25 lg:block"
          />
          {STEPS.map((step, i) => {
            const tinted = i % 2 === 0;
            return (
              <article
                key={step.num}
                className={[
                  "relative z-10 rounded-xl border p-7",
                  tinted
                    ? "border-cs-light-blue/25"
                    : "border-white/8",
                ].join(" ")}
                style={
                  tinted
                    ? { background: "linear-gradient(rgba(35,132,198,0.12), rgba(35,132,198,0.12)), #0c385a" }
                    : { 
                        background: "linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05)), #0c385a", 
                        borderColor: "rgba(255,255,255,0.08)" 
                      }
                }
              >
                <div
                  className={[
                    "mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 font-display text-base font-bold text-white",
                    tinted ? "border-cs-light-blue bg-cs-light-blue" : "border-white/20",
                  ].join(" ")}
                  style={!tinted ? { backgroundColor: "rgba(255,255,255,0.1)" } : undefined}
                >
                  {step.num}
                </div>
                <h3 className="mb-2.5 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-[1.65] text-white/60">{step.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
