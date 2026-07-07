"use client";

import { useEffect, useState, useRef } from "react";
import {
  SparkIcon,
  ZapIcon,
  BarChart2Icon,
  MonitorIcon,
  ShieldIcon,
  LayersIcon,
} from "@/components/icons/HeroIcons";

export const SERVICE_ITEMS = [
  { id: "custom-software", label: "Custom Software", icon: LayersIcon },
  { id: "mobile-web", label: "Mobile & Web Apps", icon: MonitorIcon },
  { id: "legacy-modernization", label: "Legacy Modernization", icon: ShieldIcon },
  { id: "ai-automation", label: "AI Automation", icon: ZapIcon },
  { id: "ai-agents", label: "AI Agents", icon: SparkIcon },
  { id: "data-engineering", label: "Data Engineering", icon: BarChart2Icon },
  { id: "cloud-devops", label: "Cloud & DevSecOps", icon: ZapIcon },
] as const;

export function ServicesNav() {
  const [activeId, setActiveId] = useState<string>("custom-software");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = navContainerRef.current;
    const activeBtn = itemRefs.current[activeId];
    if (container && activeBtn) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const scrollLeft =
        container.scrollLeft +
        (btnRect.left - containerRect.left) -
        containerRect.width / 2 +
        btnRect.width / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  useEffect(() => {
    const handleScroll = () => {
      const lastElement = document.getElementById("cloud-devops");
      if (lastElement) {
        const lastRect = lastElement.getBoundingClientRect();
        // Hide nav when the bottom of the last service item scrolls up past 140px
        if (lastRect.bottom < 140) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      if (isScrollingRef.current) {
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
        return;
      }

      const focusY = window.innerHeight * 0.38;
      let bestId: string = SERVICE_ITEMS[0].id;
      let minDistance = Infinity;

      for (const item of SERVICE_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const itemFocusPoint = rect.top + rect.height * 0.25;
          const distance = Math.abs(itemFocusPoint - focusY);
          if (distance < minDistance) {
            minDistance = distance;
            bestId = item.id;
          }
        }
      }
      setActiveId(bestId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    isScrollingRef.current = true;
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 165;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 900);
    }
  };

  return (
    <div
      className={`sticky top-[68px] sm:top-[74px] z-40 mx-auto max-w-[1200px] px-4 sm:px-8 -mt-4 mb-2 sm:mb-4 transition-all duration-[600ms] cubic-bezier(0.16,1,0.3,1) ${
        !isLoaded
          ? "opacity-0 translate-y-12 pointer-events-none"
          : !isVisible
          ? "opacity-0 -translate-y-6 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      <div className="rounded-2xl border border-cs-border/80 bg-white/60 backdrop-blur-lg p-2 sm:p-2.5 shadow-[0_10px_35px_rgba(12,56,90,0.14)] transition-all duration-300 hover:bg-white/80 hover:shadow-[0_14px_40px_rgba(12,56,90,0.2)]">
        <div
          ref={navContainerRef}
          className="flex lg:grid lg:grid-cols-7 items-center justify-start gap-1 sm:gap-1.5 overflow-x-auto lg:overflow-visible no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x py-0.5"
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
                ref={(el) => {
                  itemRefs.current[id] = el;
                }}
                type="button"
                onClick={() => scrollToSection(id)}
                className={`flex items-center justify-center gap-1.5 rounded-xl px-2 sm:px-2.5 h-10 sm:h-11 text-[10.5px] xl:text-[11px] font-bold tracking-tight transition-all duration-300 cubic-bezier(0.16,1,0.3,1) shrink-0 lg:shrink w-auto lg:w-full cursor-pointer ${
                  isActive
                    ? "bg-[#12619c]/12 text-cs-dark-blue border border-[#12619c]/30 shadow-[0_4px_16px_rgba(18,97,156,0.08)] scale-[1.01]"
                    : "bg-transparent border border-transparent text-cs-dark-blue/80 hover:bg-cs-surface-tint hover:text-cs-light-blue"
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-md transition-all duration-300 shrink-0 ${
                    isActive ? "bg-[#12619c] text-white shadow-sm" : "bg-[#EBF4FB] text-cs-light-blue"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="leading-[1.15] text-left lg:text-center whitespace-nowrap lg:whitespace-normal">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
