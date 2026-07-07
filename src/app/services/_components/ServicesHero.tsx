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

/* Injected keyframes for animations */
const HERO_KEYFRAMES = `
@keyframes cardLightFloat {
  0%, 100% { transform: translateY(-5px); }
  50% { transform: translateY(5px); }
}
@keyframes driftBlob1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(45px, 25px) scale(1.06); }
  66% { transform: translate(-25px, 45px) scale(0.95); }
}
@keyframes driftBlob2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-35px, -35px) scale(1.05); }
  66% { transform: translate(35px, -15px) scale(0.92); }
}
@keyframes gridBreathe {
  0%, 100% { opacity: 0.07; }
  50% { opacity: 0.16; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-animate { animation: none !important; }
}
`;

function SystemConstellation({ isLoaded }: { isLoaded: boolean }) {
  const boxes = [
    {
      title: "GenAI & RAG",
      sub: "Enterprise AI Models",
      Icon: ZapIcon,
      posClass: "top-[15%] left-[4%] xl:left-[8%] w-[204px]",
      iconStyle: "text-[#7C3AED] bg-[#7C3AED]/12 border-[#7C3AED]/25",
      path: "M 160 105 L 320 105 Q 350 105 350 135 L 350 245 Q 350 275 380 275 L 500 275",
      startOffset: "translate-x-[200px] translate-y-[130px] scale-40 opacity-0",
      floatDuration: "5s",
      floatDelay: "0s",
    },
    {
      title: "Web & Mobile Dev",
      sub: "Enterprise Applications",
      Icon: MonitorIcon,
      posClass: "top-[15%] right-[4%] xl:right-[8%] w-[212px]",
      iconStyle: "text-[#0284C7] bg-[#0284C7]/12 border-[#0284C7]/25",
      path: "M 840 105 L 680 105 Q 650 105 650 135 L 650 245 Q 650 275 620 275 L 500 275",
      startOffset: "-translate-x-[200px] translate-y-[130px] scale-40 opacity-0",
      floatDuration: "5.7s",
      floatDelay: "-2s",
    },
    {
      title: "Cybersecurity",
      sub: "Zero Trust Security",
      Icon: ShieldIcon,
      posClass: "bottom-[18%] right-[5%] xl:right-[10%] w-[198px]",
      iconStyle: "text-[#0D9488] bg-[#0D9488]/12 border-[#0D9488]/25",
      path: "M 820 440 L 680 440 Q 650 440 650 410 L 650 305 Q 650 275 620 275 L 500 275",
      startOffset: "-translate-x-[200px] -translate-y-[130px] scale-40 opacity-0",
      floatDuration: "6.4s",
      floatDelay: "-4s",
    },
    {
      title: "Cloud & DevOps",
      sub: "Multi-Region Infrastructure",
      Icon: LayersIcon,
      posClass: "bottom-[18%] left-[5%] xl:left-[10%] w-[224px]",
      iconStyle: "text-[#1E40AF] bg-[#1E40AF]/12 border-[#1E40AF]/25",
      path: "M 180 440 L 320 440 Q 350 440 350 410 L 350 305 Q 350 275 380 275 L 500 275",
      startOffset: "translate-x-[200px] -translate-y-[130px] scale-40 opacity-0",
      floatDuration: "7s",
      floatDelay: "-6s",
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
            {/* 1. Softer neutral gray/blue connector lines with reduced opacity */}
            <path
              d={box.path}
              fill="none"
              stroke="#475569"
              strokeWidth="1"
              strokeDasharray="3 5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-1000 delay-[350ms] ${
                isLoaded ? "opacity-[0.11] scale-100" : "opacity-0 scale-90"
              }`}
            />
            {/* 2. Barely noticeable glowing dot traveling along the path every 5.5s */}
            {isLoaded && (
              <circle r="1.5" fill="#63bceb" className="opacity-45 shadow-[0_0_6px_rgba(99,188,235,0.8)]">
                <animateMotion dur="5.5s" repeatCount="indefinite" begin={`${i * 1.35}s`}>
                  <mpath href={`#route-${i}`} />
                </animateMotion>
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* 3. Floating badge cards */}
      {boxes.map(({ title, sub, Icon, posClass, iconStyle, startOffset, floatDuration, floatDelay }, i) => {
        return (
          /* Outer: entrance positioning */
          <div
            key={i}
            className={`absolute ${posClass} pointer-events-auto transition-all duration-[900ms] cubic-bezier(0.16,1,0.3,1) ${
              isLoaded ? "translate-x-0 translate-y-0 scale-100 opacity-95" : startOffset
            }`}
          >
        
            <div
              className="hero-animate"
              style={{
                animation: isLoaded
                  ? `cardLightFloat ${floatDuration} ease-in-out ${floatDelay} infinite`
                  : "none",
              }}
            >
              {/* Inner: visual card + hover state */}
              <div
                className="flex items-center gap-2.5 rounded-xl border border-dashed border-[#12619c]/25 bg-white/[0.94] backdrop-blur-[6px] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-cs-light-blue/45 cursor-pointer group hover:opacity-100 shadow-[0_6px_22px_rgba(15,45,90,0.06)] hover:shadow-[0_12px_32px_rgba(18,97,156,0.15)]"
              >
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-lg border border-dotted bg-white/80 transition-transform duration-300 group-hover:scale-105 shrink-0 shadow-sm ${iconStyle}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="text-left pr-1 overflow-hidden">
                  <div className="font-mono text-[11.5px] font-semibold text-cs-dark-blue/85 leading-tight group-hover:text-cs-dark-blue tracking-tight truncate">
                    {title}
                  </div>
                  <div className="text-[9.5px] font-normal text-cs-ink-muted/50 mt-0.5 group-hover:text-cs-ink-muted/70 truncate">
                    {sub}
                  </div>
                </div>
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
    <>
      <style dangerouslySetInnerHTML={{ __html: HERO_KEYFRAMES }} />
      <section
        id="services-hero"
        className="scroll-mt-20 relative overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-40 lg:pt-32 lg:pb-48 min-h-[76vh] flex flex-col justify-center"
        style={{
          background: `
            radial-gradient(1000px 500px at 50% 30%, rgba(35,132,198,0.07), transparent 70%),
            radial-gradient(800px 400px at 80% 20%, rgba(99,188,235,0.04), transparent 60%),
            linear-gradient(180deg, #fbfdfe 0%, #f7fbfe 50%, #ffffff 95%, #ffffff 100%)
          `,
        }}
      >
        {/* 2. Drifting background glow */}
        <div
          className="pointer-events-none absolute top-[15%] left-[10%] w-[600px] h-[450px] rounded-full bg-[#2384c6] opacity-[0.14] blur-[130px] z-0 hero-animate"
          style={{ animation: "driftBlob1 18s ease-in-out infinite" }}
        />
        <div
          className="pointer-events-none absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#63bceb] opacity-[0.12] blur-[140px] z-0 hero-animate"
          style={{ animation: "driftBlob2 20s ease-in-out -5s infinite" }}
        />

        {/* Subtle Engineering Grid  */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hero-animate"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(18,97,156,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(18,97,156,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 50% 35%, black 45%, transparent 85%)",
            animation: "gridBreathe 7s ease-in-out infinite",
          }}
        />

        {/* Clean lines & strategically placed nodes */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03] z-0" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <line x1="0" y1="150" x2="1200" y2="450" stroke="#12619c" strokeWidth="1" strokeDasharray="16 16" />
          <line x1="0" y1="450" x2="1200" y2="150" stroke="#63bceb" strokeWidth="1" strokeDasharray="16 16" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="#12619c" strokeWidth="1" strokeDasharray="10 10" />
        </svg>
        {/* blueprint nodes & particles */}
        <div className="pointer-events-none absolute top-[25%] left-[18%] w-1 h-1 rounded-full bg-[#12619c] opacity-25" />
        <div className="pointer-events-none absolute top-[68%] left-[26%] w-1.5 h-1.5 rounded-full border border-[#63bceb] opacity-20" />
        <div className="pointer-events-none absolute top-[32%] right-[22%] w-1.5 h-1.5 rounded-full bg-[#2384c6] opacity-25" />
        <div className="pointer-events-none absolute top-[58%] right-[14%] w-1 h-1 rounded-full bg-[#12619c] opacity-20" />
        <div className="pointer-events-none absolute top-[38%] left-[28%] w-1 h-1 rounded-full bg-[#63bceb] opacity-20 hero-animate" style={{ animation: "cardLightFloat 14s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute top-[72%] right-[32%] w-1.5 h-1.5 rounded-full border border-[#12619c] opacity-15 hero-animate" style={{ animation: "cardLightFloat 17s ease-in-out -4s infinite" }} />
        <div className="pointer-events-none absolute top-[22%] right-[38%] w-1 h-1 rounded-full bg-[#2384c6] opacity-20 hero-animate" style={{ animation: "cardLightFloat 19s ease-in-out -8s infinite" }} />

        {/* 3. Symmetrical Satellite Service Cards & Orthogonal Routing Ecosystem */}
        <SystemConstellation isLoaded={isLoaded} />

        {/* Centered Authority Typography Hierarchy */}
        <div className="relative z-10 mx-auto max-w-[940px] px-5 sm:px-8 text-center flex flex-col items-center">
          {/* Top Frosted Glass Chip - Styled exactly as the About Us capsule */}
          <div
            className={`mb-5 sm:mb-6 flex flex-col items-center transition-all duration-700 delay-[550ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-white/90 bg-gradient-to-r from-white/85 via-[#f0f8ff]/80 to-white/85 px-4.5 sm:px-5 py-2 text-[11px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_8px_30px_-4px_rgba(35,132,198,0.25)] backdrop-blur-xl ring-1 ring-[#bce2ff]/60 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_12px_36px_-4px_rgba(35,132,198,0.35)] hover:bg-white/95 active:scale-95">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cs-light-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cs-light-blue"></span>
              </span>
              <span className="bg-gradient-to-r from-[#0c385a] via-[#12619c] to-[#186499] bg-clip-text text-transparent font-extrabold tracking-widest">
                HOW WE ENGAGE • OUR SERVICES
              </span>
            </div>
          </div>

          {/* Soft Radial Blue Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] rounded-full blur-[130px] -z-10"
            style={{
              background: "radial-gradient(circle, rgba(99,188,235,0.11) 0%, rgba(18,97,156,0.04) 50%, transparent 80%)",
            }}
          />

          {/* Main Headline */}
          <h1
            className={`text-[36px] sm:text-[54px] md:text-[60px] lg:text-[66px] font-display font-bold text-cs-dark-blue leading-[1.06] tracking-[-0.025em] max-w-[860px] transition-all duration-700 delay-[700ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
            className={`mt-6 sm:mt-8 text-[15px] sm:text-[19px] text-cs-ink-muted leading-[1.7] max-w-[640px] sm:max-w-[700px] transition-all duration-700 delay-[850ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We combine AI, cloud, data, and modern software engineering to build intelligent digital solutions that streamline operations, enhance customer experiences, and accelerate growth.
          </p>
        </div>
      </section>
    </>
  );
}
