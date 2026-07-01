import { LayersIcon, PulseIcon, PersonIcon } from "@/components/icons/HeroIcons";

const STATS = [
  {
    value: "50+",
    label: "Projects",
    sublabel: "Delivered",
    icon: LayersIcon,
  },
  {
    value: "14+",
    label: "Years",
    sublabel: "Experience",
    icon: PulseIcon,
  },
  {
    value: "30+",
    label: "Global",
    sublabel: "Clients Served",
    icon: PersonIcon,
  },
] as const;

export function AboutStatsStrip() {
  return (
    <section className="pb-24 pt-6 bg-white">
      <div className="mx-auto max-w-[1200px] px-8">
        
        <div className="rounded-3xl bg-cs-dark-blue border border-cs-border-accent/30 p-8 sm:p-12 shadow-cs-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cs-light-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7db8d8]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Stats Grid */}
          <div className="relative z-10 grid gap-8 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {STATS.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className="flex items-center justify-center gap-4 sm:gap-5 pt-6 sm:pt-0"
                >
                  {/* Icon Badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-cs-light-blue shadow-inner">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <span className="font-display font-black text-4xl sm:text-5xl text-cs-light-blue tracking-tight leading-none">
                      {stat.value}
                    </span>
                    <div className="flex flex-col text-xs sm:text-sm font-semibold text-white/90 leading-tight justify-center">
                      <span>{stat.label}</span>
                      <span className="text-cs-ink-ghost font-normal">{stat.sublabel}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
