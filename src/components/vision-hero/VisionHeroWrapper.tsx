"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useLenis } from "@/hooks/useLenis";
import { VisionTypographyIntro } from "./VisionTypographyIntro";
import { VisionHeroMedia } from "./VisionHeroMedia";

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

  useGSAP(
    () => {
      if (!containerRef.current || !stickyViewportRef.current || !mediaRef.current) return;

      const mediaEl = mediaRef.current;
      const introEl = introRef.current;

      const textLeft = introEl?.querySelector("[data-text-left]");
      const textRight = introEl?.querySelector("[data-text-right]");
      const introFooter = introEl?.querySelector("[data-intro-footer]");
      const mediaBorder = mediaEl?.querySelector("[data-media-border]");

      const introLines = introEl?.querySelectorAll(
        "[data-intro-fade]:not([data-text-left]):not([data-text-right]):not([data-intro-footer])"
      );

      const heroContent = mediaEl?.querySelector("[data-hero-content]");
      const heroTitle = mediaEl?.querySelector("[data-hero-title]");
      const heroDesc = mediaEl?.querySelector("[data-hero-desc]");
      const heroCta = mediaEl?.querySelectorAll("[data-hero-cta]");
      const heroTicker = mediaEl?.querySelector("[data-hero-ticker]");

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
          scrub: true,
          anticipatePin: 1,
          fastScrollEnd: true,
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
          { borderRadius: "150px", opacity: 1 },
          {
            borderWidth: "4px",
            borderRadius: "40px",
            duration: 0.45,
            ease: "none",
          },
          0
        );

        // Completely hide the blue border right right as the O finishes centering and begins expanding across the screen (progress 0.45 to 0.58)
        tl.to(
          mediaBorder,
          {
            opacity: 0,
            duration: 0.13,
            ease: "power2.out",
          },
          0.45
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

      // 4. Start loading Hero Content text slightly delayed (`progress 0.62`), when the portal window is ~90% expanded across the screen, and have all text 100% visible right as full screen is reached (`progress 0.72`).
      if (heroContent) {
        gsap.set(heroContent, { opacity: 0, pointerEvents: "none" });
        tl.set(heroContent, { pointerEvents: "auto" }, 0.62);
        tl.fromTo(
          heroContent,
          { opacity: 0 },
          { opacity: 1, duration: 0.10, ease: "power2.out" },
          0.62
        );
      }

      if (heroTitle) {
        gsap.set(heroTitle, { opacity: 0 });
        tl.fromTo(
          heroTitle,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.07, ease: "power2.out" },
          0.64
        );
      }

      if (heroDesc) {
        gsap.set(heroDesc, { opacity: 0 });
        tl.fromTo(
          heroDesc,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.06, ease: "power2.out" },
          0.66
        );
      }

      if (heroCta && heroCta.length > 0) {
        heroCta.forEach((el, idx) => {
          gsap.set(el, { opacity: 0 });
          tl.fromTo(
            el,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.05, ease: "power2.out" },
            0.68 + idx * 0.01
          );
        });
      }

      if (heroTicker) {
        gsap.set(heroTicker, { opacity: 0, y: 30 });
        tl.fromTo(
          heroTicker,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.05, ease: "power2.out" },
          0.69
        );
      }

      // 5. Inverse-transform portalInner so the Hero Section inside the expanding O stays 100% stationary and 1:1 unscaled relative to the viewport right from progress 0.
      const portalInner = mediaEl.querySelector("[data-portal-inner]") as HTMLElement | null;
      if (portalInner) {
        gsap.set(portalInner, { pointerEvents: "none" });
        // Enable pointer events right right as the text begins loading (progress 0.62)
        tl.set(portalInner, { pointerEvents: "auto" }, 0.62);

        const updatePortalInner = () => {
          if (!portalInner || !mediaEl || !stickyViewportRef.current) return;
          const parentRect = stickyViewportRef.current.getBoundingClientRect();
          const rect = mediaEl.getBoundingClientRect();
          const s = gsap.getProperty(mediaEl, "scaleX") || 1;
          const scaleVal = Number(s) || 1;
          const relLeft = rect.left - parentRect.left;
          const relTop = rect.top - parentRect.top;
          gsap.set(portalInner, {
            scale: 1 / scaleVal,
            x: -relLeft / scaleVal,
            y: -relTop / scaleVal,
            force3D: false,
          });
        };

        tl.eventCallback("onUpdate", updatePortalInner);
        updatePortalInner();
        ScrollTrigger.refresh();
        window.addEventListener("resize", updatePortalInner);
        return () => window.removeEventListener("resize", updatePortalInner);
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Layer 1: Pure White Base outside the O portal */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-white" />

      {/* Layer 2: Hero Background Image (/hero.png) – shifted slightly lower down so background is visible behind VISI and N */}
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
        {/* Massive VISION Intro Typography with Flexible Architectural Box acting as the portal window */}
        <VisionTypographyIntro
          ref={introRef}
          mediaSlot={<VisionHeroMedia ref={mediaRef} mediaUrl={mediaUrl} />}
        />
      </div>
    </section>
  );
};
