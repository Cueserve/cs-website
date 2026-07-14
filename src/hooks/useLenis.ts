"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export interface UseLenisOptions {
  enabled?: boolean;
  duration?: number;
}

export function useLenis({ enabled = true, duration = 1.2 }: UseLenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    ScrollTrigger.clearScrollMemory("manual");

    const lenis = new Lenis({
      duration,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis scroll events with GSAP ScrollTrigger updates
    lenis.on("scroll", ScrollTrigger.update);

    // Feed GSAP ticker time into Lenis rAF for frame-perfect synchronization
    const onTickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTickerUpdate);

    // Disable lag smoothing to prevent visual stutter during fast scroll scrubbing
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTickerUpdate);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled, duration]);

  return lenisRef;
}
