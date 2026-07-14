"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useLenis } from "@/hooks/useLenis";
import { VisionTypographyIntro } from "./VisionTypographyIntro";
import { VisionHeroMedia } from "./VisionHeroMedia";
import { VisionHeroContent } from "./VisionHeroContent";

export interface VisionHeroWrapperProps {
  mediaUrl?: string;
  scrollDurationVh?: number; // Total scroll track height in VH units
}

export const VisionHeroWrapper: React.FC<VisionHeroWrapperProps> = ({
  mediaUrl,
  scrollDurationVh = 300,
}) => {
  useLenis();

  const containerRef = useRef<HTMLDivElement>(null);
  const stickyViewportRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !stickyViewportRef.current || !mediaRef.current) return;

      const mediaEl = mediaRef.current;
      const introEl = introRef.current;
      const contentEl = contentRef.current;

      const textLeft = introEl?.querySelector("[data-text-left]");
      const textRight = introEl?.querySelector("[data-text-right]");
      const introFooter = introEl?.querySelector("[data-intro-footer]");
      const mediaOverlay = mediaEl?.querySelector("[data-media-overlay]");

      const heroTitle = contentEl?.querySelector("[data-hero-title]");
      const heroDesc = contentEl?.querySelector("[data-hero-desc]");
      const heroCta = contentEl?.querySelectorAll("[data-hero-cta]");

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const scaleX = (viewportWidth / 280) * 1.15;
      const scaleY = (viewportHeight / 135) * 1.15;
      const targetScale = Math.max(scaleX, scaleY, 7.2);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.15,
          invalidateOnRefresh: true,
        },
      });

      // 1. Move & fade out initial VISION letters and bottom intro
      if (textLeft) {
        tl.to(
          textLeft,
          {
            xPercent: -130,
            opacity: 0,
            duration: 0.45,
            ease: "power2.inOut",
          },
          0
        );
      }

      if (textRight) {
        tl.to(
          textRight,
          {
            xPercent: 130,
            opacity: 0,
            duration: 0.45,
            ease: "power2.inOut",
          },
          0
        );
      }

      if (introFooter) {
        tl.to(
          introFooter,
          {
            y: 40,
            opacity: 0,
            duration: 0.35,
            ease: "power2.inOut",
          },
          0
        );
      }

      // 2. Expand the Media Pill ("O") to fill the entire viewport
      tl.to(
        mediaEl,
        {
          scale: targetScale,
          borderRadius: "0px",
          borderWidth: "0px",
          duration: 0.7,
          ease: "power2.inOut",
        },
        0
      );

      if (introEl) {
        tl.to(
          introEl,
          {
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
          },
          0.45
        );
      }

      // 3. Fade in cinematic dark overlay for hero text legibility
      if (mediaOverlay) {
        tl.to(
          mediaOverlay,
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0.55
        );
      }

      // 4. Reveal Hero Content smoothly once zoom completes
      if (contentEl) {
        tl.fromTo(
          contentEl,
          { opacity: 0 },
          { opacity: 1, duration: 0.35, ease: "power2.out" },
          0.65
        );
      }

      if (heroTitle) {
        tl.fromTo(
          heroTitle,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
          0.68
        );
      }

      if (heroDesc) {
        tl.fromTo(
          heroDesc,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" },
          0.73
        );
      }

      if (heroCta && heroCta.length > 0) {
        heroCta.forEach((el, idx) => {
          tl.fromTo(
            el,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" },
            0.76 + idx * 0.04
          );
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: `${scrollDurationVh}vh` }}
    >
      {/* Layer 1: Pure White Base */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-white" />

      {/* Layer 2: Hero Background Image (/hero_bg.jpg) – shifted slightly lower down */}
      <div
        className="absolute top-0 left-0 right-0 h-[115vh] pointer-events-none z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.png')`,
          backgroundPosition: "center -15vh",
        }}
      />

      {/* Layer 3: Natural White Transition downward when scrolling past hero */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            linear-gradient(180deg,
              transparent 0%,
              transparent 45%,
              rgba(255, 255, 255, 0.6) 70%,
              #ffffff 88%,
              #ffffff 100%
            )
          `,
        }}
      />

      {/* Sticky Viewport Container */}
      <div
        ref={stickyViewportRef}
        className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center z-10"
      >
        {/* Layer 1: Massive VISION Intro Typography with Flexible Architectural Box */}
        <VisionTypographyIntro
          ref={introRef}
          mediaSlot={<VisionHeroMedia ref={mediaRef} mediaUrl={mediaUrl} />}
        />

        {/* Layer 2: Revealed Hero Content */}
        <VisionHeroContent ref={contentRef} />
      </div>
    </section>
  );
};
