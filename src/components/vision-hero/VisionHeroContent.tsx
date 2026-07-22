"use client";

import React, { forwardRef } from "react";
import { RollingButton } from "@/components/RollingButton";

export interface VisionHeroContentProps {
  className?: string;
}

export const VisionHeroContent = forwardRef<HTMLDivElement, VisionHeroContentProps>(
  ({ className = "" }, ref) => {
    return (
      <div
        ref={ref}
        data-hero-content
        className={`absolute inset-0 z-30 flex flex-col justify-center pointer-events-auto opacity-100 ${className}`}
      >
        {/* Container matching exact Header width (w-[90%] xl:w-[82%] max-w-[1260px] mx-auto) so text aligns perfectly with breathing room from right edge on desktop/laptop */}
        <div className="mx-auto w-[96%] sm:w-[90%] xl:w-[86%] max-w-[1320px] flex justify-center xl:justify-end xl:pr-12 2xl:pr-20">
          {/* Hero Content: wide width spread and clean top margin on mobile (< 1280px), right-aligned on laptop/desktop */}
          <div className="w-full max-w-[480px] sm:max-w-[540px] xl:max-w-[720px] 2xl:max-w-[780px] 3xl:max-w-[840px] text-center xl:text-right mt-6 sm:mt-8 md:mt-10 xl:mt-12 shrink-0">
            {/* Main Headline using centralized text-hero-title utility class, structured as a clean vertical stack with breathing room */}
            <h1
              data-hero-title
              className="text-hero-title text-text-primary mb-4 sm:mb-6 xl:mb-8 flex flex-col gap-2.5 sm:gap-3.5 xl:gap-5 2xl:gap-6 items-center xl:items-end"
            >
              <span className="whitespace-nowrap">Crafting Modern</span>
              <span className="inline-flex items-center justify-center xl:justify-end gap-2 sm:gap-3 md:gap-4 text-brand-default whitespace-nowrap">
                <span className="hidden xl:inline-block h-[2.5px] sm:h-[3px] w-8 sm:w-12 md:w-20 bg-brand-default rounded-full shrink-0" />
                <span>Vision For the</span>
              </span>
              <span className="text-text-primary whitespace-nowrap">Ambitious Brands</span>
            </h1>

            {/* Subheadline / Description Text using universal text-para utility class with generous gap between lines */}
            <p
              data-hero-desc
              className="text-para text-text-secondary leading-[1.75] mb-5 sm:mb-6 xl:mb-8 mx-auto xl:mx-0 xl:ml-auto max-w-[340px] sm:max-w-[460px] xl:max-w-[560px] 2xl:max-w-[620px] text-center xl:text-right"
            >
              We blend creativity with strategy to build digital experiences that move brands forward.
              From crafting standout websites.
            </p>

            <div data-hero-cta className="flex items-center justify-center xl:justify-end">
              <RollingButton text="Get Started Now" href="/contact" />
            </div>
          </div>
        </div>

        {/* Continuous Infinite Motion Marquee Ticker: relative underneath CTA on mobile with generous spacing, absolute bottom-0 on desktop */}
        <div
          data-hero-ticker
          className="relative mt-8 sm:mt-12 xl:mt-0 xl:absolute xl:bottom-0 left-0 right-0 w-full pt-6 sm:pt-8 xl:pt-20 pb-2 sm:pb-3 overflow-hidden z-40 pointer-events-auto shrink-0"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.45) 40%, rgba(255, 255, 255, 0.88) 75%, #ffffff 100%)",
          }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes heroTickerScroll {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
          `
          }} />
          <div
            className="flex w-max items-center whitespace-nowrap select-none"
            style={{
              animation: "heroTickerScroll 130s linear infinite",
            }}
          >
            {/* Render two identical tracks side-by-side for seamless infinite looping */}
            {[0, 1].map((loopIdx) => (
              <div key={loopIdx} className="flex items-center shrink-0">
                {[
                  "ENTERPRISE AI ARCHITECTURE",
                  "AGENTIC WORKFLOWS",
                  "PRECISION ENGINEERING",
                  "INTELLIGENT AUTOMATION",
                  "STANDOUT DIGITAL PLATFORMS",
                  "STRATEGIC ACCELERATION",
                  "NEXT-GEN VISUAL SYSTEMS",
                  "FUTURE-READY SCALE",
                ].map((item, idx) => (
                  <React.Fragment key={`${loopIdx}-${idx}`}>
                    <span
                      className={`font-display leading-none uppercase tracking-[-0.03em] font-normal ${idx % 2 === 0
                        ? "italic text-cs-ink"
                        : "text-cs-dark-blue"
                        }`}
                      style={{ fontSize: "clamp(2.75rem, 5vw, 5rem)" }}
                    >
                      {item}
                    </span>
                    <span
                      className="text-cs-light-blue font-normal leading-none px-6 sm:px-8 md:px-10"
                      style={{ fontSize: "clamp(2.75rem, 5vw, 5rem)" }}
                    >
                      *
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

VisionHeroContent.displayName = "VisionHeroContent";
