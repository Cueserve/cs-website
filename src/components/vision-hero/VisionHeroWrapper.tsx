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

      {/* Layer 2: Brand Blue Atmospheric Layering – top corners & illumination blending naturally into white */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(130% 90% at 50% 0%, rgba(35, 132, 198, 0.22) 0%, rgba(35, 132, 198, 0.12) 35%, rgba(125, 184, 216, 0.05) 65%, transparent 90%),
            linear-gradient(180deg, rgba(238, 246, 252, 0.9) 0%, rgba(245, 249, 253, 0.6) 50%, #ffffff 88%, #ffffff 100%)
          `,
        }}
      />

      {/* Layer 3: Atmospheric Center Illumination Behind Typography */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 45% at 50% 45%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 80%)
          `,
        }}
      />

      {/* Layer 4: Precise Reference Grid – 1px lines rendering underneath typography and fading naturally into white */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(35, 132, 198, 0.075) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(35, 132, 198, 0.065) 1px, transparent 1px)
          `,
          backgroundSize: "76px 76px",
        }}
      />

      {/* Layer 5: Natural White Transition – no hard separation, dissolving into white */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `
            linear-gradient(180deg,
              transparent 0%,
              transparent 60%,
              rgba(255, 255, 255, 0.45) 75%,
              rgba(255, 255, 255, 0.85) 88%,
              #ffffff 100%
            )
          `,
        }}
      />

      {/* Sticky Viewport Container */}
      <div
        ref={stickyViewportRef}
        className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center"
      >
        {/* Bento Box Architectural Guide Lines (z-[5]) */}
        <div className="absolute inset-0 pointer-events-none z-[5]">
          {/* Outer Left Vertical Line (full height 0 to 100%, near V) */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: "15%", width: "1px", background: "rgba(255, 255, 255, 0.85)" }}
          />
          {/* Outer Right Vertical Line (full height 0 to 100%, near N) */}
          <div
            className="absolute top-0 bottom-0"
            style={{ right: "15%", width: "1px", background: "rgba(255, 255, 255, 0.85)" }}
          />

          {/* Top horizontal divider line (ends at outer vertical lines) */}
          <div
            className="absolute"
            style={{ top: "136px", left: "15%", right: "15%", height: "1px", background: "rgba(255, 255, 255, 0.85)" }}
          />
          {/* Bottom horizontal divider line (ends at outer vertical lines) */}
          <div
            className="absolute"
            style={{ bottom: "370px", left: "15%", right: "15%", height: "1px", background: "rgba(255, 255, 255, 0.85)" }}
          />

          {/* Left inner vertical guide line (strictly between 136px and 370px) */}
          <div
            className="absolute"
            style={{ top: "136px", bottom: "370px", left: "32.5%", width: "1px", background: "rgba(255, 255, 255, 0.75)" }}
          />
          {/* Center inner vertical guide line (strictly between 136px and 370px) */}
          <div
            className="absolute"
            style={{ top: "136px", bottom: "370px", left: "50%", width: "1px", background: "rgba(255, 255, 255, 0.65)" }}
          />
          {/* Right inner vertical guide line (strictly between 136px and 370px) */}
          <div
            className="absolute"
            style={{ top: "136px", bottom: "370px", left: "67.5%", width: "1px", background: "rgba(255, 255, 255, 0.75)" }}
          />
        </div>

        {/* Layer 1: Massive VISION Intro Typography */}
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
