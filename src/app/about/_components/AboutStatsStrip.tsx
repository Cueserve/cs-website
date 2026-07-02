import { LayersIcon, PulseIcon, PersonIcon } from "@/components/icons/HeroIcons";

export const STATS = [
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
  {
    value: "100%",
    label: "Client",
    sublabel: "Satisfaction",
    icon: PulseIcon,
  },
] as const;

export function AboutStatsStrip() {
  return (
    <div className="mt-4 sm:mt-6 pb-2 px-6 relative z-20 hidden sm:block">

      <div className="mx-auto max-w-[1080px]">
        
        <div className="rounded-2xl border border-cs-border-accent/60 bg-white/90 p-6 sm:p-8 shadow-cs-md backdrop-blur-md relative overflow-hidden">
        
          <div className="absolute top-0 right-1/3 w-72 h-72 bg-cs-light-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#7db8d8]/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Stats Grid spanning */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 divide-y-0 sm:divide-x divide-cs-border w-full">
            {STATS.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className={`flex items-center justify-center sm:justify-start gap-3.5 ${idx > 0 ? "sm:pl-8" : ""}`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cs-surface-accent border border-cs-border-accent/80 text-cs-light-blue shadow-inner">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-display font-black text-2xl sm:text-3xl text-cs-dark-blue tracking-tight leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold text-cs-ink mt-1 leading-tight">
                      {stat.label} <span className="text-cs-ink-muted font-normal">{stat.sublabel}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
