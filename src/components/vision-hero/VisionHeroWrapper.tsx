"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useLenis } from "@/hooks/useLenis";
import { VisionTypographyIntro, VisionTypographyGridLines } from "./VisionTypographyIntro";
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
  const clipRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !stickyViewportRef.current || !mediaRef.current || !clipRef.current) return;
      if (typeof window !== "undefined" && window.innerWidth < 1280) return;

      const mediaEl = mediaRef.current;
      const introEl = introRef.current;
      const clipEl = clipRef.current;

      const textLeft = introEl?.querySelector("[data-text-left]");
      const textRight = introEl?.querySelector("[data-text-right]");
      const introFooter = introEl?.querySelector("[data-intro-footer]");
      const mediaBorder = mediaEl?.querySelector("[data-media-border]");

      const introLines = introEl?.querySelectorAll(
        "[data-intro-fade]:not([data-text-left]):not([data-text-right]):not([data-intro-footer])"
      );

      const heroContent = clipEl.querySelector("[data-hero-content]");
      const heroTitle = clipEl.querySelector("[data-hero-title]");
      const heroDesc = clipEl.querySelector("[data-hero-desc]");
      const heroCta = clipEl.querySelectorAll("[data-hero-cta]");
      const heroTicker = clipEl.querySelector("[data-hero-ticker]");

      // Calculate exact offset to move the pill to viewport center, and the scale needed to fill the viewport from there
      let mediaRect = mediaEl.getBoundingClientRect();
      let parentRect = stickyViewportRef.current.getBoundingClientRect();
      let baseL0 = mediaRect.left - parentRect.left;
      let baseT0 = mediaRect.top - parentRect.top;
      let baseW0 = mediaRect.width;
      let baseH0 = mediaRect.height;
      let baseCx0 = baseL0 + baseW0 / 2;
      let baseCy0 = baseT0 + baseH0 / 2;

      let viewportCenterX = window.innerWidth / 2;
      let viewportCenterY = window.innerHeight / 2;
      let offsetX = viewportCenterX - baseCx0;
      let offsetY = viewportCenterY - baseCy0;

      // When scaling from viewport center, the max distance to any corner is the diagonal / 2
      let halfDiagonal = Math.hypot(window.innerWidth / 2, window.innerHeight / 2);
      let initialRadius = Math.max(Math.min(baseW0, baseH0) / 2, 40);
      let targetScale = Math.max((halfDiagonal * 1.2) / initialRadius, 16);

      // Shared proxy for clip-path that tracks both the initial page-load animation and the scroll animation
      const clipProxy = {
        s: 1,
        x: 0,
        y: 65, // Starts at 65 because mediaSlotEl is shifted down by 65 during intro load
        r: 150,
      };

      const updateClipPath = () => {
        if (!clipEl || !stickyViewportRef.current || !mediaEl) return;
        const s = clipProxy.s;
        const x = clipProxy.x;
        const y = clipProxy.y;
        const r = clipProxy.r;
        const containerRect = stickyViewportRef.current.getBoundingClientRect();
        const containerW = containerRect.width;
        const containerH = containerRect.height;

        // If s === 1 (at rest or during intro), dynamically read exact live mediaEl position to guarantee 0px offset
        let currentCx = baseCx0 + x;
        let currentCy = baseCy0 + y;
        let currentW = baseW0 * s;
        let currentH = baseH0 * s;

        if (s <= 1.02 && mediaEl) {
          const liveRect = mediaEl.getBoundingClientRect();
          currentW = liveRect.width * s;
          currentH = liveRect.height * s;
          currentCx = (liveRect.left - containerRect.left) + currentW / 2 + x;
          currentCy = (liveRect.top - containerRect.top) + currentH / 2 + (y === 65 ? 65 : y === 0 ? 0 : y);
        }

        const top = currentCy - currentH / 2;
        const left = currentCx - currentW / 2;
        const right = containerW - (currentCx + currentW / 2);
        const bottom = containerH - (currentCy + currentH / 2);
        const r_scaled = r * s;
        clipEl.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px round ${r_scaled}px)`;
      };

      if (clipEl) {
        gsap.set(clipEl, { pointerEvents: "none", opacity: 0 });
        updateClipPath();
      }

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

      // --- INITIAL PAGE LOADING ANIMATION (Does not interfere with ScrollTrigger or scroll coordinates) ---
      const introChars = introEl?.querySelectorAll("[data-intro-char]");
      const mediaSlotEl = introEl?.querySelector("[data-media-slot]");
      const footerLeft = introEl?.querySelector("[data-footer-left]");
      const footerRight = introEl?.querySelector("[data-footer-right]");

      if (introChars && introChars.length > 0) {
        gsap.set(introChars, { y: 65, opacity: 0 });
      }
      if (mediaSlotEl) {
        gsap.set(mediaSlotEl, { y: 65, opacity: 0 });
      }
      if (footerLeft) {
        gsap.set(footerLeft, { x: -65, opacity: 0 });
      }
      if (footerRight) {
        gsap.set(footerRight, { x: 65, opacity: 0 });
      }

      const introTl = gsap.timeline({
        defaults: { force3D: false },
        onComplete: () => {
          if (introChars && introChars.length > 0) gsap.set(introChars, { clearProps: "transform" });
          if (mediaSlotEl) gsap.set(mediaSlotEl, { clearProps: "transform" });
          if (footerLeft) gsap.set(footerLeft, { clearProps: "transform" });
          if (footerRight) gsap.set(footerRight, { clearProps: "transform" });
        },
      });

      // Load letters from bottom to up
      if (introChars && introChars.length > 0) {
        introTl.to(
          introChars,
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.07,
            ease: "power3.out",
          },
          0.1
        );
      }

      // Load O (mediaSlot) and clip-path mask from bottom to up right along with middle characters
      if (mediaSlotEl) {
        introTl.to(
          mediaSlotEl,
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          0.35
        );
        if (clipEl) {
          introTl.to(
            clipEl,
            {
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
            },
            0.35
          );
          introTl.to(
            clipProxy,
            {
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              onUpdate: updateClipPath,
            },
            0.35
          );
        }
      }

      // Bottom container enters from left and right side
      if (footerLeft) {
        introTl.to(
          footerLeft,
          {
            x: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          0.38
        );
      }
      if (footerRight) {
        introTl.to(
          footerRight,
          {
            x: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          0.38
        );
      }
      // --- END INITIAL PAGE LOADING ANIMATION ---

      // 5. Reveal fullscreen hero content using only a clip-path mask animated along the exact same timeline ticks as mediaEl
      if (clipEl) {
        // Enable pointer events right as the text begins loading (progress 0.62)
        tl.set(clipEl, { pointerEvents: "auto" }, 0.62);

        // Mirror tween 1a: scale to 3 (same timing/ease as mediaEl's scale tween at t=0)
        tl.to(clipProxy, { s: 3, duration: 0.45, ease: "power2.inOut", onUpdate: updateClipPath }, 0);

        // Mirror tween 1b: horizontal centering x: offsetX (same timing/ease as mediaEl's x tween at t=0.20)
        tl.to(clipProxy, { x: offsetX, duration: 0.35, ease: "power2.inOut", onUpdate: updateClipPath }, 0.20);

        // Mirror tween 1c: drift y: offsetY + scale to targetScale (same timing/ease as mediaEl's y & scale tween at t=0.45)
        tl.to(clipProxy, { s: targetScale, y: offsetY, duration: 0.47, ease: "power3.in", onUpdate: updateClipPath }, 0.45);

        // Mirror tween 1d: borderRadius morph 150 -> 40 (same timing/ease as mediaEl's borderRadius at t=0)
        tl.to(clipProxy, { r: 40, duration: 0.45, ease: "none", onUpdate: updateClipPath }, 0);

        // At targetScale, round can tween to 0 down as it covers fullscreen
        tl.to(clipProxy, { r: 0, duration: 0.47, ease: "power3.in", onUpdate: updateClipPath }, 0.45);

        const handleResize = () => {
          if (!mediaEl || !stickyViewportRef.current) return;
          const mr = mediaEl.getBoundingClientRect();
          const pr = stickyViewportRef.current.getBoundingClientRect();
          baseL0 = mr.left - pr.left;
          baseT0 = mr.top - pr.top;
          baseW0 = mr.width;
          baseH0 = mr.height;
          baseCx0 = baseL0 + baseW0 / 2;
          baseCy0 = baseT0 + baseH0 / 2;

          viewportCenterX = window.innerWidth / 2;
          viewportCenterY = window.innerHeight / 2;
          offsetX = viewportCenterX - baseCx0;
          offsetY = viewportCenterY - baseCy0;

          halfDiagonal = Math.hypot(window.innerWidth / 2, window.innerHeight / 2);
          initialRadius = Math.max(Math.min(baseW0, baseH0) / 2, 40);
          targetScale = Math.max((halfDiagonal * 1.2) / initialRadius, 16);

          updateClipPath();
          ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    },
    { scope: containerRef }
  );

  return (
    <>
      {/* Mobile & Tablet (< 1280px): Directly load the main hero theme right away without the VISION scrolling intro overlay */}
      <section className="relative w-full h-auto xl:hidden overflow-hidden flex flex-col justify-start bg-white pt-24 sm:pt-28 pb-0">
        {/* Full Hero Background Image with responsive positioning so girl stays visible along with right text */}
        <div
          className="absolute inset-0 pointer-events-none z-0 bg-cover bg-no-repeat bg-[position:65%_center] md:bg-[position:75%_center]"
          style={{
            backgroundImage: `url('/hero_bg2.jpg')`,
          }}
        />
        {/* Subtle readable overlay for mobile/tablet so text pops crisply against the background */}
        <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-r from-white/95 via-white/88 to-white/40 md:from-transparent md:via-white/60 md:to-white/95" />

        {/* Direct Hero Content: compact auto-height with minimal breathing spaces */}
        <VisionHeroContent className="relative !inset-auto !opacity-100 !pointer-events-auto z-10 w-full flex flex-col justify-start" />
      </section>

      {/* Laptop & Desktop (>= 1280px): Full VISION Typography Intro with O Portal & Scroll Animation */}
      <section
        ref={containerRef}
        className="hidden xl:block relative w-full h-screen overflow-hidden"
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
          {/* Layered container wrapped by introRef so GSAP queries find [data-intro-fade], letters, and mediaSlot across all layers */}
          <div ref={introRef} className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Layer 1 (z-0): Background Architectural Grid Lines sitting underneath clipRef/O window */}
            <VisionTypographyGridLines />

            {/* Layer 2 (z-10): Fullscreen Fixed/Absolute Hero Content (`clip-path` mask reveals it over grid lines) */}
            <div
              ref={clipRef}
              data-hero-clip
              className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden opacity-0"
            >
              {/* Layer 1: Seamless Base + Background Layer (hero_bg3.png without the person) */}
              <div className="absolute inset-0 pointer-events-none z-0 bg-[#e6f2ff]" />
              <div
                className="absolute inset-0 pointer-events-none z-0 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url('/hero_bg3.png')`,
                }}
              />

              {/* Layer 2: Independent Foreground Man Cutout (`hero_men.png`) with strict fixed pixel isolation (`-136px` on large, `-153px` on mid, and `-20px` on extra large) so breakpoints never interrupt each other */}
              <div className="absolute bottom-0 left-[-11vw] sm:left-[-136px] xl:left-[-136px] 2xl:left-[-153px] min-[1800px]:!left-[-20px] h-[68vh] sm:h-[75vh] xl:h-[85vh] 2xl:h-[86vh] max-h-[860px]  pointer-events-none z-10 flex items-end">
                <img
                  src="/hero_men.png"
                  alt="Vision Hero Character"
                  className="w-auto h-full object-contain object-left-bottom select-none"
                />
              </div>

              {/* Layer 3: Right-Aligned Hero Content – initially hidden, revealed by timeline right when portal reaches fullscreen */}
              <VisionHeroContent />
            </div>

            {/* Layer 3 (z-20): VISION Intro Typography (with letters, mediaSlot, and footer) sitting in front of clipRef */}
            <VisionTypographyIntro
              mediaSlot={<VisionHeroMedia ref={mediaRef} mediaUrl={mediaUrl} />}
            />
          </div>
        </div>
      </section>
    </>
  );
};
