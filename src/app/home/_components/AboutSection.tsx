"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { RollingButton } from "@/components/ui/RollingButton";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsParallaxRef = useRef<HTMLDivElement>(null);
  const projectsFloatRef = useRef<HTMLDivElement>(null);
  const completedParallaxRef = useRef<HTMLDivElement>(null);
  const completedFloatRef = useRef<HTMLDivElement>(null);
  const metricParallaxRef = useRef<HTMLDivElement>(null);
  const metricFloatRef = useRef<HTMLDivElement>(null);

  // High-performance quickTo setters for buttery-smooth interpolation without frame drop
  const xSetProjects = useRef<((val: number) => void) | null>(null);
  const ySetProjects = useRef<((val: number) => void) | null>(null);
  const xSetCompleted = useRef<((val: number) => void) | null>(null);
  const ySetCompleted = useRef<((val: number) => void) | null>(null);
  const xSetMetric = useRef<((val: number) => void) | null>(null);
  const ySetMetric = useRef<((val: number) => void) | null>(null);

  // 1. Initialize quickTo setters for buttery-smooth mouse parallax tracking
  useEffect(() => {
    if (projectsParallaxRef.current && completedParallaxRef.current && metricParallaxRef.current) {
      xSetProjects.current = gsap.quickTo(projectsParallaxRef.current, "x", { duration: 1.2, ease: "power3.out" });
      ySetProjects.current = gsap.quickTo(projectsParallaxRef.current, "y", { duration: 1.2, ease: "power3.out" });
      xSetCompleted.current = gsap.quickTo(completedParallaxRef.current, "x", { duration: 1.2, ease: "power3.out" });
      ySetCompleted.current = gsap.quickTo(completedParallaxRef.current, "y", { duration: 1.2, ease: "power3.out" });
      xSetMetric.current = gsap.quickTo(metricParallaxRef.current, "x", { duration: 1.2, ease: "power3.out" });
      ySetMetric.current = gsap.quickTo(metricParallaxRef.current, "y", { duration: 1.2, ease: "power3.out" });
    }
  }, []);

  // 2. Interactive Buttery-Smooth Mouse Parallax Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Normalized delta from -1 to 1 across the box
    const deltaX = (e.clientX - rect.left - centerX) / centerX;
    const deltaY = (e.clientY - rect.top - centerY) / centerY;

    // Deeper multi-layer parallax reaction using quickTo (no new tweens = zero stutter)
    xSetProjects.current?.(deltaX * -46);
    ySetProjects.current?.(deltaY * -36);

    xSetCompleted.current?.(deltaX * -36);
    ySetCompleted.current?.(deltaY * -30);

    xSetMetric.current?.(deltaX * 22);
    ySetMetric.current?.(deltaY * 18);
  };

  // 3. Ultra-Smooth Reset on Mouse Leave
  const handleMouseLeave = () => {
    xSetProjects.current?.(0);
    ySetProjects.current?.(0);
    xSetCompleted.current?.(0);
    ySetCompleted.current?.(0);
    xSetMetric.current?.(0);
    ySetMetric.current?.(0);
  };

  return (
    <section className="relative z-20 bg-white py-16 sm:py-24 xl:py-32 overflow-hidden border-b border-cs-border">
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
        {/* Top Section Pill Label aligned directly with container & navbar right across all breakpoints */}
        <div className="mb-8 sm:mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-label uppercase tracking-wider text-brand-default border border-brand-default/30 bg-[#f4f8ff]">
            About Us
          </span>
        </div>

        {/* Main Two-Column Layout Container matching exact Figma proportions (352px left vs 764px right, 30px gap) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[30px] items-center w-full">

          {/* Left Column: Image Slot / Graphic Container (4 cols ~ 352px) */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              data-about-image-slot
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[352/318] max-w-[420px] lg:max-w-none mx-auto flex items-center justify-center rounded-3xl bg-transparent cursor-pointer [perspective:1000px]"
            >
              {/* IMAGE SLOT: Place your custom image right here. E.g.: */}
              {/* <img src="/about_metric.png" alt="About Us Metric" className="w-full h-full object-contain" /> */}

              {/* Default Graphic Card Structure exactly matching the Figma design */}
              <div className="relative flex flex-col items-center justify-center select-none w-full h-full py-6 sm:py-8">
                {/* Top Right "Projects" Pill (Parallax Outer + GPU Elliptical Floating Inner) */}
                <div
                  ref={projectsParallaxRef}
                  className="absolute top-6 sm:top-8 right-4 sm:right-8 md:right-12 lg:right-6 z-20"
                >
                  <div
                    ref={projectsFloatRef}
                    className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-label text-cs-ink bg-[#e2edff] shadow-sm overflow-visible relative animate-cs-float-pill-a [will-change:transform]"
                  >
                    <span>Projects</span>
                    {/* Bottom-left speech tail pointing down toward 250+ */}
                    <svg
                      className="absolute -bottom-2 sm:-bottom-2.5 left-4 sm:left-5 w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#e2edff] fill-current pointer-events-none"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0 L14 0 L0 14 Z" />
                    </svg>
                  </div>
                </div>

                {/* Big Metric Number matching exact Figma specs: Poppins 400 Regular, 128px, #0040C1 */}
                <div ref={metricParallaxRef} className="z-10">
                  <div
                    ref={metricFloatRef}
                    className="font-paragraph font-normal text-brand-default tracking-tight leading-none flex items-center animate-cs-float-metric [will-change:transform]"
                    style={{ fontSize: "clamp(4.5rem, 8vw, 8rem)" }}
                  >
                    <span>250</span>
                    <span className="text-brand-default font-normal ml-1">+</span>
                  </div>
                </div>

                {/* Bottom Left "Completed" Pill (Parallax Outer + GPU Elliptical Floating Inner) */}
                <div
                  ref={completedParallaxRef}
                  className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 md:left-12 lg:left-6 z-20"
                >
                  <div
                    ref={completedFloatRef}
                    className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-label text-cs-ink bg-[#fef5d6] shadow-sm overflow-visible relative animate-cs-float-pill-b [will-change:transform]"
                  >
                    <span>Completed</span>
                    {/* Top-right speech tail pointing up toward 250+ */}
                    <svg
                      className="absolute -top-2 sm:-top-2.5 right-4 sm:right-5 w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#fef5d6] fill-current pointer-events-none"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 14 L0 14 L14 0 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Description & Paragraph block (8 cols ~ 764px fill) with crisp left border */}
          <div className="lg:col-span-8 lg:border-l lg:border-cs-border lg:pl-8 xl:pl-10 py-2 flex flex-col justify-start w-full">
            {/* Description Size / Subheading using official text-h3 token, wide 764px fill */}
            <h2 className="text-h3 font-display font-normal text-cs-ink mb-6 sm:mb-8 max-w-[764px] w-full">
              Our team of designers, developers, and thinkers driven by{" "}
              <span className="text-brand-default font-normal">
                one purpose — to craft digital experiences.
              </span>
            </h2>

            {/* Paragraph Size using official text-para token with restored text-neutral-900 (#111827), wide 764px fill */}
            <p className="text-para text-neutral-900 leading-[1.75] mb-8 sm:mb-10 max-w-[764px] w-full">
              We combine strategy, creativity and technology to help brands grow in the modern
              digital landscape. Every project we take on is fueled by curiosity guided by precision.
            </p>

            {/* CTA Button */}
            <div className="flex items-center justify-start">
              <RollingButton
                text="More About Us"
                href="/about"
                className="!bg-[#eef5ff] hover:!bg-[#e2edff] !text-brand-default !border-brand-default/20"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
