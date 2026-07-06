"use client";

import { useEffect, useState } from "react";
import {
  SparkIcon,
  ZapIcon,
  BarChart2Icon,
  MonitorIcon,
  ShieldIcon,
  LayersIcon,
} from "@/components/icons/HeroIcons";

export const SERVICE_ITEMS = [
  { id: "ai-ml", label: "AI & Machine Learning", icon: SparkIcon },
  { id: "cloud-devops", label: "Cloud & DevOps", icon: ZapIcon },
  { id: "data-engineering", label: "Data Analytics & Eng", icon: BarChart2Icon },
  { id: "iot-smart-tech", label: "IoT & Smart Tech", icon: MonitorIcon },
  { id: "cybersecurity", label: "Cybersecurity & Risk", icon: ShieldIcon },
  { id: "custom-dev", label: "Custom Dev & Mobile", icon: LayersIcon },
] as const;

export function ServicesNav() {
  const [activeId, setActiveId] = useState<string>("ai-ml");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // Offset for headers

      for (const item of SERVICE_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset by ~140px (main header + floating glass nav + breathing room)
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 140;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`sticky top-[68px] sm:top-[74px] z-40 mx-auto max-w-[1200px] px-4 sm:px-8 -mt-8 mb-12 transition-all duration-[850ms] cubic-bezier(0.16,1,0.3,1) ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <div className="rounded-2xl border border-cs-border/80 bg-white/80 backdrop-blur-md p-2 sm:p-2.5 shadow-[0_10px_35px_rgba(12,56,90,0.14)] transition-all duration-300 hover:bg-white/95 hover:shadow-[0_14px_40px_rgba(12,56,90,0.2)]">
        <div
          className="flex items-center justify-start lg:justify-between gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {SERVICE_ITEMS.map(({ id, label, icon: Icon }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-3.5 py-2.5 sm:py-3 text-[11px] lg:text-[11.5px] xl:text-[12px] font-bold tracking-tight transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#0c385a] via-[#12619c] to-[#2384c6] text-white shadow-[0_4px_14px_rgba(18,97,156,0.35)] scale-[1.02]"
                    : "bg-transparent text-cs-dark-blue hover:bg-cs-surface-tint hover:text-cs-light-blue"
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-md transition-colors shrink-0 ${
                    isActive ? "bg-white/20 text-white" : "bg-[#EBF4FB] text-cs-light-blue"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
