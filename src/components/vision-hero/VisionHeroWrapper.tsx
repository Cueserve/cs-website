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
  scrollDurationVh = 1800,
}) => {
  useLenis({ duration: 0.6 });

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
      const mediaBorder = mediaEl?.querySelector("[data-media-border]");

      const introLines = introEl?.querySelectorAll(
        "[data-intro-fade]:not([data-text-left]):not([data-text-right]):not([data-intro-footer])"
      );

      const heroTitle = contentEl?.querySelector("[data-hero-title]");
      const heroDesc = contentEl?.querySelector("[data-hero-desc]");
      const heroCta = contentEl?.querySelectorAll("[data-hero-cta]");

      // Calculate exact offset to move the pill to viewport center, and the scale needed to fill the viewport from there
      const mediaRect = mediaEl.getBoundingClientRect();
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;
      const mediaCenterX = mediaRect.left + mediaRect.width / 2;
      const mediaCenterY = mediaRect.top + mediaRect.height / 2;
      const offsetX = viewportCenterX - mediaCenterX;
      const offsetY = viewportCenterY - mediaCenterY;

      // When scaling from viewport center, the max distance to any corner is the diagonal / 2
      const halfDiagonal = Math.hypot(window.innerWidth / 2, window.innerHeight / 2);
      const initialRadius = Math.max(Math.min(mediaRect.width, mediaRect.height) / 2, 40);
      const targetScale = Math.max((halfDiagonal * 1.2) / initialRadius, 16);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDurationVh}vh`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // 1a. Scale the pill in place from its original VISION position (0% to 45% scroll).
      // The pill grows but stays where the "O" is — no translation yet.
      tl.to(
        mediaEl,
        {
          scale: 3,
          duration: 0.45,
          ease: "power2.inOut",
          force3D: false,
        },
        0
      );

      // 1b. Begin horizontal centering early (20% scroll) so the pill is centered
      // by the time it becomes dominant. Only x-axis — no vertical shift yet.
      tl.to(
        mediaEl,
        {
          x: offsetX,
          duration: 0.35,
          ease: "power2.inOut",
          force3D: false,
        },
        0.20
      );

      // 1c. Once the pill is already large and horizontally centered, drift vertically
      // to viewport center while continuing to scale to fullscreen (45% to 92% scroll).
      tl.to(
        mediaEl,
        {
          y: offsetY,
          scale: targetScale,
          duration: 0.47,
          ease: "power3.in",
          force3D: false,
        },
        0.45
      );

      // 1d. Gradually morph from pill to rounded rectangle.
      // 150px = still a perfect pill on this element (half-height is ~123px max),
      // but unlike 9999px, GSAP can interpolate 150→40 and every frame shows visible change.
      tl.fromTo(
        mediaEl,
        { borderRadius: "150px" },
        {
          borderRadius: "40px",
          duration: 0.45,
          ease: "none",
        },
        0
      );

      if (mediaBorder) {
        tl.fromTo(
          mediaBorder,
          { borderRadius: "150px" },
          {
            borderWidth: "10px",
            borderRadius: "40px",
            duration: 0.45,
            ease: "none",
          },
          0
        );
      }

      // 2. Push VISION letters outside the viewport smoothly right beside the expanding O.
      // Both start at 0 with exact same duration (0.45) and ease (power2.inOut) as the O's scale,
      // keeping them locked right next to the circle's growing edges without touching or flying away too fast.
      if (textRight) {
        tl.to(
          textRight,
          {
            xPercent: 220,
            opacity: 0,
            duration: 0.45,
            ease: "power2.inOut",
          },
          0
        );
      }

      // "VISI" moves left right beside the circle's left edge
      if (textLeft) {
        tl.to(
          textLeft,
          {
            xPercent: -165,
            opacity: 0,
            duration: 0.45,
            ease: "power2.inOut",
          },
          0
        );
      }

      // 3. Smoothly recede bottom description/CTA and architectural lines
      if (introFooter) {
        tl.to(
          introFooter,
          {
            y: 45,
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0.05
        );
      }

      if (introLines && introLines.length > 0) {
        tl.to(
          introLines,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0.05
        );
      }

      // 4. Smoothly fade in cinematic dark overlay inside the expanding pill so text will be legible when fullscreen is reached
      if (mediaOverlay) {
        tl.to(
          mediaOverlay,
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0.5
        );
      }

      // 5. Only AFTER fullscreen is reached (progress 0.92), reveal Hero Content inside the fullscreen portal
      if (contentEl) {
        gsap.set(contentEl, { opacity: 0, pointerEvents: "none" });

        // Enable pointer events right when content reveals inside the fullscreen portal
        tl.set(contentEl, { pointerEvents: "auto" }, 0.92);

        tl.fromTo(
          contentEl,
          { opacity: 0 },
          { opacity: 1, duration: 0.08, ease: "power2.out" },
          0.92
        );
      }

      if (heroTitle) {
        tl.fromTo(
          heroTitle,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.06, ease: "power2.out" },
          0.93
        );
      }

      if (heroDesc) {
        tl.fromTo(
          heroDesc,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.05, ease: "power2.out" },
          0.94
        );
      }

      if (heroCta && heroCta.length > 0) {
        heroCta.forEach((el, idx) => {
          tl.fromTo(
            el,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" },
            0.95 + idx * 0.01
          );
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Layer 1: Pure White Base */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-white" />

      {/* Layer 2: Hero Background Image (/hero.png) – shifted slightly lower down */}
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

      {/* Sticky/Pinned Viewport Container */}
      <div
        ref={stickyViewportRef}
        className="relative w-full h-full overflow-hidden flex items-center justify-center z-10"
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
