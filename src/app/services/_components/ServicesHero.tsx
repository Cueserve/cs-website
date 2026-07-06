"use client";

import { useEffect, useState } from "react";
import {
  PulseIcon,
  ZapIcon,
  LayersIcon,
  TrendingUpIcon,
  ShieldIcon,
  MonitorIcon,
} from "@/components/icons/HeroIcons";

function SystemConstellation({ isLoaded }: { isLoaded: boolean }) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPulsing, setIsPulsing] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % 4);
      setIsPulsing(true);
    }, 8500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPulsing) {
      const timer = setTimeout(() => {
        setIsPulsing(false);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [isPulsing, activeIdx]);

  const boxes = [
    {
      title: "GenAI & RAG",
      sub: "Enterprise AI Models",
      Icon: ZapIcon,
      posClass: "top-[15%] left-[4%] xl:left-[8%] w-[188px]",
      iconStyle: "text-[#7C3AED] bg-[#7C3AED]/12 border-[#7C3AED]/25",
      path: "M 160 105 L 350 105 L 350 275 L 500 275",
      startOffset: "translate-x-[200px] translate-y-[130px] scale-40 opacity-0",
    },
    {
      title: "Web & Mobile Dev",
      sub: "Enterprise Applications",
      Icon: MonitorIcon,
      posClass: "top-[15%] right-[4%] xl:right-[8%] w-[196px]",
      iconStyle: "text-[#0284C7] bg-[#0284C7]/12 border-[#0284C7]/25",
      path: "M 840 105 L 650 105 L 650 275 L 500 275",
      startOffset: "-translate-x-[200px] translate-y-[130px] scale-40 opacity-0",
    },
    {
      title: "Cybersecurity",
      sub: "Zero Trust Security",
      Icon: ShieldIcon,
      posClass: "bottom-[18%] right-[5%] xl:right-[10%] w-[182px]",
      iconStyle: "text-[#0D9488] bg-[#0D9488]/12 border-[#0D9488]/25",
      path: "M 820 440 L 650 440 L 650 275 L 500 275",
      startOffset: "-translate-x-[200px] -translate-y-[130px] scale-40 opacity-0",
    },
    {
      title: "Cloud & DevOps",
      sub: "Multi-Region Infrastructure",
      Icon: LayersIcon,
      posClass: "bottom-[18%] left-[5%] xl:left-[10%] w-[208px]",
      iconStyle: "text-[#1E40AF] bg-[#1E40AF]/12 border-[#1E40AF]/25",
      path: "M 180 440 L 350 440 L 350 275 L 500 275",
      startOffset: "translate-x-[200px] -translate-y-[130px] scale-40 opacity-0",
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block z-[2] select-none overflow-hidden max-w-[1400px] mx-auto">
      <svg className="w-full h-full absolute inset-0" viewBox="0 0 1000 550" preserveAspectRatio="none">
        <defs>
          {boxes.map((box, i) => (
            <path key={`route-${i}`} id={`route-${i}`} d={box.path} fill="none" />
          ))}
        </defs>
        <circle cx="540" cy="275" r="180" fill="none" stroke="#12619c" strokeWidth="0.75" strokeDasharray="6 8" className="opacity-[0.045]" />
        <circle cx="540" cy="275" r="250" fill="none" stroke="#63bceb" strokeWidth="0.5" strokeDasharray="4 6" className="opacity-[0.035]" />
        <circle cx="500" cy="275" r="3.5" fill="none" stroke="#12619c" strokeWidth="1" className="opacity-25" />
        <circle cx="500" cy="275" r="1.5" fill="#12619c" className="opacity-30" />

        {boxes.map((box, i) => (
          <g key={i}>
            <path
              d={box.path}
              fill="none"
              stroke="#12619c"
              strokeWidth="0.65"
              strokeDasharray="3 5"
              className={`transition-all duration-1000 delay-[350ms] ${isLoaded ? "opacity-[0.11] scale-100" : "opacity-0 scale-90"
                }`}
            />
            {/* Extremely subtle data pulse traveling along the orthogonal routing path */}
            {activeIdx === i && isPulsing && (
              <circle r="2" fill="#2384c6" className="opacity-60 shadow-none">
                <animateMotion dur="2.2s" fill="freeze">
                  <mpath href={`#route-${i}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;0.7;0.7;0" dur="2.2s" fill="freeze" />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* 4 Floating Architectural Service Cards */}
      {boxes.map(({ title, sub, Icon, posClass, iconStyle, startOffset }, i) => {
        return (
          <div
            key={i}
            className={`absolute ${posClass} pointer-events-auto flex items-center gap-2.5 rounded-xl border border-dashed border-[#12619c]/25 bg-white/[0.93] backdrop-blur-[4px] px-3.5 py-2.5 transition-all duration-[900ms] cubic-bezier(0.16,1,0.3,1) hover:bg-white hover:border-cs-light-blue/40 cursor-pointer group hover:opacity-100 shadow-[0_4px_16px_rgba(18,97,156,0.05)] ${isLoaded ? "translate-x-0 translate-y-0 scale-100 opacity-95" : startOffset
              }`}
          >
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-lg border border-dotted bg-white/80 transition-transform duration-300 group-hover:scale-105 shrink-0 shadow-sm ${iconStyle}`}
            >
              <Icon className="h-3.5 w-3.5" />
            </div>
            <div className="text-left pr-1 overflow-hidden">
              <div className="font-mono text-[11px] font-semibold text-cs-dark-blue/85 leading-tight group-hover:text-cs-dark-blue tracking-tight truncate">
                {title}
              </div>
              <div className="text-[9px] font-normal text-cs-ink-muted/50 mt-0.5 group-hover:text-cs-ink-muted/70 truncate">
                {sub}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ServicesHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="services-hero"
      className="scroll-mt-20 relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-36 lg:pt-32 lg:pb-40 min-h-[76vh] flex flex-col justify-center"
      style={{
        background: `
          radial-gradient(1000px 500px at 50% 30%, rgba(35,132,198,0.07), transparent 70%),
          radial-gradient(800px 400px at 80% 20%, rgba(99,188,235,0.04), transparent 60%),
          linear-gradient(180deg, #fbfdfe 0%, #f7fbfe 50%, #ffffff 95%, #ffffff 100%)
        `,
      }}
    >
      {/* 1. Subtle Engineering Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(18,97,156,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(18,97,156,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 50% 35%, black 45%, transparent 85%)",
        }}
      />

      {/* 2. Clean Blueprint Construction Lines & Strategically Placed Nodes */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03] z-0" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <line x1="0" y1="150" x2="1200" y2="450" stroke="#12619c" strokeWidth="1" strokeDasharray="16 16" />
        <line x1="0" y1="450" x2="1200" y2="150" stroke="#63bceb" strokeWidth="1" strokeDasharray="16 16" />
        <line x1="600" y1="0" x2="600" y2="600" stroke="#12619c" strokeWidth="1" strokeDasharray="10 10" />
      </svg>
      {/* Asymmetrical, intentional blueprint nodes */}
      <div className="pointer-events-none absolute top-[25%] left-[18%] w-1 h-1 rounded-full bg-[#12619c] opacity-25" />
      <div className="pointer-events-none absolute top-[68%] left-[26%] w-1.5 h-1.5 rounded-full border border-[#63bceb] opacity-20" />
      <div className="pointer-events-none absolute top-[32%] right-[22%] w-1.5 h-1.5 rounded-full bg-[#2384c6] opacity-25" />
      <div className="pointer-events-none absolute top-[58%] right-[14%] w-1 h-1 rounded-full bg-[#12619c] opacity-20" />

      {/* 3. Symmetrical Satellite Service Cards & Orthogonal Routing Ecosystem */}
      <SystemConstellation isLoaded={isLoaded} />

      {/* Centered Authority Typography Hierarchy */}
      <div className="relative z-10 mx-auto max-w-[940px] px-5 sm:px-8 text-center flex flex-col items-center">

        {/* Top Frosted Glass Chip with Refined Engineering Accent Underneath */}
        <div
          className={`mb-6 sm:mb-7 flex flex-col items-center transition-all duration-700 delay-[550ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-dashed border-[#12619c]/30 bg-white/60 backdrop-blur-md px-4 py-1.5 shadow-none hover:bg-white transition-all duration-300">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-[#12619c] to-[#63bceb] text-white shadow-sm">
              <PulseIcon className="h-2.5 w-2.5 animate-pulse" />
            </span>
            <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-cs-dark-blue/80">
              HOW WE ENGAGE • OUR SERVICES
            </span>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 opacity-30">
            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#12619c]" />
            <div className="h-1.5 w-1.5 rounded-full border border-[#12619c]" />
            <div className="h-[1px] w-10 bg-gradient-to-r from-[#12619c] to-transparent" />
            <div className="h-[3px] w-[1px] bg-[#12619c]" />
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-[36px] sm:text-[54px] md:text-[60px] lg:text-[66px] font-display font-bold text-cs-dark-blue leading-[1.06] tracking-[-0.025em] max-w-[860px] transition-all duration-700 delay-[700ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span>Engineering AI Solutions</span>
          <br />
          <span className="bg-gradient-to-r from-[#12619c] via-[#2384c6] via-[#63bceb] to-[#0c385a] bg-clip-text text-transparent">
            That Scale Businesses
          </span>
          <span className="text-[#2384c6] inline-block">.</span>
        </h1>

        {/* Subtitle Paragraph */}
        <p
          className={`mt-6 sm:mt-8 text-[15px] sm:text-[19px] text-cs-ink-muted leading-[1.7] max-w-[640px] sm:max-w-[700px] transition-all duration-700 delay-[850ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          We combine AI, cloud, data, and modern software engineering to build intelligent digital solutions that streamline operations, enhance customer experiences, and accelerate growth.
        </p>

      </div>
    </section>
  );
}
