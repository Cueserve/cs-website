"use client";

import React, { forwardRef } from "react";

export interface VisionTypographyIntroProps {
  className?: string;
  mediaSlot?: React.ReactNode;
}

export const VisionTypographyIntro = forwardRef<HTMLDivElement, VisionTypographyIntroProps>(
  ({ className = "", mediaSlot }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute inset-0 z-20 flex flex-col px-6 sm:px-12 md:px-16 pointer-events-none select-none ${className}`}
      >
        {/* Top Container — Nav area (empty, aligns with top horizontal guide line at 76px) */}
        <div className="w-full shrink-0" style={{ height: "76px" }} />

        {/* Middle Container — VISION Typography + Media Pill (perfectly centered between 76px top line and 190px bottom line) */}
        <div
          className="w-full flex items-center justify-center flex-1"
          style={{ marginBottom: "190px", transform: "translateY(-40px)" }}
        >
          <div className="flex items-center justify-center w-full max-w-[1440px]">
            {/* Left Typography: VISI */}
            <span
              data-text-left
              className="text-cs-dark-blue font-display font-extrabold tracking-tighter leading-none will-change-transform select-none"
              style={{
                fontSize: "clamp(5.2rem, 19vw, 19.5rem)",
                letterSpacing: "-0.035em",
              }}
            >
              VISI
            </span>

            {/* Middle Slot for the Expanding Media Pill ("O") */}
            <div
              data-media-slot
              className="mx-2 sm:mx-3.5 md:mx-5 flex items-center justify-center relative z-30"
            >
              {mediaSlot}
            </div>

            {/* Right Typography: N */}
            <span
              data-text-right
              className="text-cs-dark-blue font-display font-extrabold tracking-tighter leading-none will-change-transform select-none"
              style={{
                fontSize: "clamp(5.2rem, 19vw, 19.5rem)",
                letterSpacing: "-0.035em",
              }}
            >
              N
            </span>
          </div>
        </div>

        {/* Bottom Container — Get Started section (inside the 190px footer area, matching reference left/right alignment) */}
        <div
          data-intro-footer
          className="absolute left-0 right-0 bottom-0 px-6 sm:px-12 md:px-16 pointer-events-auto"
          style={{ height: "430px" }}
        >
          <div className="w-full max-w-[1220px] mx-auto h-full flex items-center">
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-cs-ink-muted text-sm sm:text-[15px] max-w-lg leading-relaxed font-normal">
                At CueServe, we blend AI innovation with engineering precision to build digital experiences
                that transform enterprises. From crafting intelligent workflows to scalable platforms.
              </p>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-cs-dark-blue hover:bg-cs-dark-blue-hover text-white font-semibold text-sm sm:text-[15px] transition-all flex items-center gap-2.5 shadow-md shrink-0"
              >
                Get Started Now
                <span className="w-5 h-5 rounded-full bg-cs-light-blue text-white flex items-center justify-center text-xs">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

VisionTypographyIntro.displayName = "VisionTypographyIntro";
