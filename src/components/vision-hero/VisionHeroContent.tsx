"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

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
        {/* Container matching exact Header width (w-[90%] xl:w-[82%] max-w-[1260px] mx-auto) so text aligns perfectly to navbar right edge */}
        <div className="mx-auto w-[90%] xl:w-[82%] max-w-[1260px] flex justify-end">
          {/* Right-Aligned Hero Content aligned precisely to the navbar right bound with responsive widths for laptops and full width for desktops */}
          <div className="w-full max-w-[420px] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[680px] 3xl:max-w-[760px] text-left mt-6 sm:mt-8 md:mt-12 shrink-0">
            {/* Main Headline with exact Arooth horizontal rule accent line */}
            <h1
              data-hero-title
              className="font-display font-normal leading-[1.12] tracking-[-0.03em] text-cs-dark-blue mb-6 drop-shadow-sm"
              style={{ fontSize: "clamp(2.1rem, 3.4vw, 4.5rem)" }}
            >
              Crafting Modern <br />
              <span className="inline-flex items-center gap-3 md:gap-4 text-cs-light-blue my-1.5 whitespace-nowrap">
                <span className="h-[3px] w-12 sm:w-16 md:w-24 bg-cs-light-blue rounded-full inline-block shrink-0" />
                <span>AI Vision For the</span>
              </span>{" "}
              <br />
              <span className="text-cs-ink">Ambitious Brands</span>
            </h1>

            {/* Subheadline / Description Text */}
            <p
              data-hero-desc
              className="mb-8 max-w-lg text-base sm:text-lg leading-relaxed text-cs-ink-muted font-normal"
            >
              We blend engineering precision with agentic AI to build digital platforms that move
              enterprises forward. From crafting intelligent workflows to standout digital experiences.
            </p>

            {/* CTA Button matching Arooth Get Started Now with circle arrow */}
            <div data-hero-cta className="flex items-center">
              <Link
                href="/contact"
                className="group rounded-full bg-white border border-cs-border shadow-md hover:shadow-xl hover:border-cs-border-strong px-2 sm:px-2.5 py-2 sm:py-2 pl-6 sm:pl-8 text-base font-semibold text-cs-ink transition-all inline-flex items-center gap-4 pointer-events-auto"
              >
                <span>Get Started Now</span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cs-dark-blue text-white flex items-center justify-center transition-transform group-hover:scale-105 group-hover:bg-cs-light-blue shadow-sm shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Continuous Infinite Motion Marquee Ticker right at the bottom of the Hero Section with Faded White Gradient */}
        <div
          data-hero-ticker
          className="absolute bottom-0 left-0 right-0 w-full pt-12 sm:pt-16 md:pt-20 pb-2 sm:pb-3 overflow-hidden z-40 pointer-events-auto"
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
