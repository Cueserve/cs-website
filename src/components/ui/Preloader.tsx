"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";

const BOOT_MESSAGES = [
  "Initializing Platform...",
  "Connecting Services...",
  "Loading Assets...",
  "Preparing Experience...",
  "Almost Ready...",
];

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Fake progress counter
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 2;
      if (currentProgress > 95) currentProgress = 95;
      setProgress(currentProgress);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Boot text rotation logic
    let messageInterval: NodeJS.Timeout;

    const startBootText = () => {
      let idx = 0;
      messageInterval = setInterval(() => {
        idx++;
        if (idx >= BOOT_MESSAGES.length - 1) {
          clearInterval(messageInterval);
        }

        // Crossfade text using GSAP
        gsap.to(textRef.current, {
          opacity: 0,
          duration: 0.25,
          onComplete: () => {
            setCurrentMessageIndex(idx);
            gsap.to(textRef.current, { opacity: 1, duration: 0.3 });
          }
        });
      }, 700); // 700ms rotation
    };

    // Main GSAP Timeline
    const tl = gsap.timeline();

    const logoPaths = logoRef.current ? Array.from(logoRef.current.querySelectorAll("path, polygon")) : [];

    // Setup initial states
    gsap.set(logoPaths, { strokeDashoffset: 3000, fill: "transparent", opacity: 0 });

    // Step 1: Background & Grid Breathing
    tl.fromTo(gridRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 0.07, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    // Continuous grid breathing
    gsap.to(gridRef.current, {
      scale: 1.02,
      opacity: 0.05,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Start boot sequence messages parallel to timeline
    tl.add(startBootText, 0);

    // Step 2: Logo Construction (Drawing) - Start immediately along with grid
    tl.to(logoPaths, {
      opacity: 1,
      duration: 0.1
    }, 0);

    tl.to(logoPaths, {
      strokeDashoffset: 0,
      duration: 2.2,
      ease: "power4.inOut",
      stagger: 0.05
    }, 0);



    // Step 4: Gradient Fill & Soft Glow
    tl.to(logoPaths, {
      fill: "url(#logoGradient)",
      stroke: "transparent",
      duration: 1,
      ease: "power2.inOut"
    });

    // Step 6: Transition Phase
    // Simulate waiting for actual assets load here by using a nested promise logic if needed, 
    // but for the cinematic feel we lock the minimum timeline duration.

    const transitionOut = () => {
      const outTl = gsap.timeline();

      outTl.to(gridRef.current, {
        opacity: 0,
        duration: 0.5
      }, "<");

      outTl.to([textRef.current, progressRef.current], {
        opacity: 0,
        y: 10,
        duration: 0.4
      }, "<");

      // Shrink logo and move to navbar position, then fade out preloader container
      outTl.to(logoRef.current, {
        scale: 0.3,
        y: "-40vh", // approximate translation up to header
        duration: 1.2,
        ease: "expo.inOut"
      }, "-=0.2");

      outTl.to(containerRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.6,
        ease: "power2.inOut"
      }, "-=0.4");
    };

    // Ensure minimum display time of the full sequence (approx 3.5s total)
    // plus wait for assets if they are slow.
    Promise.all([
      document.fonts.ready,
      new Promise(res => {
        if (document.readyState === "complete") res(null);
        else window.addEventListener("load", () => res(null));
      }),
      new Promise(res => setTimeout(res, 3500)) // Adjusted cinematic duration
    ]).then(() => {
      setProgress(100);
      setTimeout(() => transitionOut(), 300);
    });

    return () => {
      clearInterval(messageInterval);
      window.removeEventListener("load", () => { });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center pointer-events-auto overflow-hidden"
      style={{ touchAction: "none" }}
    >
      {/* Step 1: Blueprint Grid Background */}
      <div
        ref={gridRef}
        className="absolute inset-0 z-0 opacity-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(12, 56, 90, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(12, 56, 90, 0.15) 1px, transparent 1px),
            linear-gradient(rgba(12, 56, 90, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(12, 56, 90, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
          backgroundPosition: "center center"
        }}
      />



      {/* Step 2 & 4: Animated Logo */}
      <div className="relative z-20 w-[60vw] max-w-[600px] h-auto drop-shadow-2xl">
        <AnimatedLogo ref={logoRef} className="w-full h-auto drop-shadow-[0_0_15px_rgba(35,132,198,0.3)]" />
      </div>

      {/* Step 5: Boot Sequence Text & Percentage */}
      <div className="absolute bottom-[10vh] left-0 right-0 z-20 px-8 md:px-16 flex justify-between items-end">
        {/* Boot Text */}
        <div
          ref={textRef}
          className="text-[#0C385A]/80 font-mono text-xs sm:text-sm tracking-widest uppercase font-medium max-w-[200px]"
        >
          {BOOT_MESSAGES[currentMessageIndex]}
        </div>

        {/* Percentage Counter */}
        <div
          ref={progressRef}
          className="text-[#0C385A]/90 text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter flex items-end font-mono"
        >
          {progress.toString().padStart(2, "0")}
          <span className="text-lg sm:text-xl md:text-2xl mb-1 md:mb-2 ml-1 text-[#0C385A]/60">%</span>
        </div>
      </div>
    </div>
  );
}
