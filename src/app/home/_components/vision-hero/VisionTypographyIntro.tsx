"use client";

import React, { forwardRef } from "react";
import { RollingButton } from "@/components/ui/RollingButton";

export interface VisionTypographyIntroProps {
  className?: string;
  mediaSlot?: React.ReactNode;
}

export const VisionTypographyGridLines = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className = "" }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute inset-0 z-0 flex flex-col pointer-events-none select-none ${className}`}
      >
        <div className="w-[95%] xl:w-[88%] max-w-[1380px] mx-auto h-full flex flex-col justify-between relative">
          {/* Outer Left Vertical Line */}
          <div
            data-intro-fade
            className="absolute top-0 bottom-0 left-0 w-[1px] pointer-events-none z-10"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 50%, rgba(166,200,224,0.75) 85%, rgba(166,200,224,0.75) 100%)",
            }}
          />

          {/* Outer Right Vertical Line */}
          <div
            data-intro-fade
            className="absolute top-0 bottom-0 right-0 w-[1px] pointer-events-none z-10"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 50%, rgba(166,200,224,0.75) 85%, rgba(166,200,224,0.75) 100%)",
            }}
          />
          <div className="w-full shrink-0 h-16 sm:h-20 md:h-24 xl:h-[clamp(5.25rem,12.5vh,8rem)] 2xl:h-[clamp(5.75rem,13.5vh,8.5rem)]" />

          {/* Middle Flexible Box containing Borders & 5 Vertical Lines */}
          <div className="w-full flex-1 pt-8 sm:pt-12 md:pt-16 xl:pt-[clamp(1.5rem,5vh,4rem)] 2xl:pt-[clamp(2rem,6vh,5rem)] pb-4 sm:pb-6 md:pb-6 xl:pb-[clamp(1rem,3vh,2rem)] 2xl:pb-[clamp(1.25rem,3.5vh,2.5rem)] flex items-center justify-center relative min-h-0">
            {/* Top & Bottom Borders */}
            <div
              data-intro-fade
              className="absolute inset-0 pointer-events-none z-10 border-t border-white/85 border-b border-[#a6c8e0]/75"
            />
            {/* All 5 Vertical Architectural Guide Lines */}
            <div data-intro-fade className="absolute inset-0 pointer-events-none z-10">
              <div
                className="absolute top-0 bottom-0 left-0 w-[1px]"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 50%, rgba(203,213,225,0.9) 85%, rgba(203,213,225,0.9) 100%)",
                }}
              />
              <div
                className="absolute top-0 bottom-0 left-1/4 w-[1px]"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.75) 50%, rgba(203,213,225,0.8) 85%, rgba(203,213,225,0.8) 100%)",
                }}
              />
              <div
                className="absolute top-0 bottom-0 left-2/4 w-[1px]"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.65) 50%, rgba(203,213,225,0.7) 85%, rgba(203,213,225,0.7) 100%)",
                }}
              />
              <div
                className="absolute top-0 bottom-0 left-3/4 w-[1px]"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.75) 50%, rgba(203,213,225,0.8) 85%, rgba(203,213,225,0.8) 100%)",
                }}
              />
              <div
                className="absolute top-0 bottom-0 right-0 w-[1px]"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 50%, rgba(203,213,225,0.9) 85%, rgba(203,213,225,0.9) 100%)",
                }}
              />
            </div>
            {/* Transparent placeholder of exact same height so box height stays 100% identical */}
            <div className="flex items-center justify-center w-full px-2 sm:px-6 relative z-20 pointer-events-none opacity-0">
              <span
                className="font-display font-extrabold tracking-tighter leading-none select-none"
                style={{ fontSize: "clamp(5rem, min(19vw, 35vh), 19.5rem)" }}
              >
                V
              </span>
            </div>
          </div>

          {/* Crisp Architectural Partition Line */}
          <div data-intro-fade className="w-full h-[1px] bg-[#cbd5e1] shrink-0 relative z-10" />

          {/* Invisible placeholder for footer container so justify-between spacing is exact */}
          <div
            className="w-full pt-4 sm:pt-6 md:pt-6 xl:pt-[clamp(1.25rem,3.5vh,3rem)] 2xl:pt-[clamp(1.5rem,4vh,3.5rem)] pb-6 sm:pb-8 md:pb-8 xl:pb-[clamp(2rem,6vh,4.5rem)] 2xl:pb-[clamp(2.5rem,7vh,5rem)] px-6 sm:px-12 md:px-16 xl:px-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pointer-events-none opacity-0 shrink-0"
          >
            <div className="max-w-xl">
              <p className="text-para text-cs-ink">
                At CueServe, we blend AI innovation with engineering precision to build digital experiences
                that transform enterprises. From crafting intelligent workflows to scalable platforms.
              </p>
            </div>
            <div className="shrink-0">
              <RollingButton text="Get Started Now" href="#contact" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
VisionTypographyGridLines.displayName = "VisionTypographyGridLines";

export const VisionTypographyIntro = forwardRef<HTMLDivElement, VisionTypographyIntroProps>(
  ({ className = "", mediaSlot }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute inset-0 z-[100] flex flex-col pointer-events-none select-none ${className}`}
      >
        {/* Main Flexible Architectural Box Container */}
        <div className="w-[95%] xl:w-[88%] max-w-[1380px] mx-auto h-full flex flex-col justify-between relative">
          {/* Small Top Container above VISION box */}
          <div className="w-full shrink-0 h-16 sm:h-20 md:h-24 xl:h-[clamp(5.25rem,12.5vh,8rem)] 2xl:h-[clamp(5.75rem,13.5vh,8.5rem)]" />

          {/* Middle Flexible Box containing VISION Typography + Media Pill */}
          <div className="w-full flex-1 pt-8 sm:pt-12 md:pt-16 xl:pt-[clamp(1.5rem,5vh,4rem)] 2xl:pt-[clamp(2rem,6vh,5rem)] pb-4 sm:pb-6 md:pb-6 xl:pb-[clamp(1rem,3vh,2rem)] 2xl:pb-[clamp(1.25rem,3.5vh,2.5rem)] flex items-center justify-center relative min-h-0">
            {/* VISION Typography & Media Pill */}
            <div className="flex items-center justify-center w-full px-2 sm:px-6 relative z-[100]">
              {/* Left Typography: VISI */}
              <span
                data-intro-fade
                data-text-left
                className="text-cs-dark-blue font-display font-extrabold tracking-tighter leading-none will-change-transform select-none"
                style={{
                  fontSize: "clamp(5rem, min(19vw, 35vh), 19.5rem)",
                  letterSpacing: "-0.035em",
                }}
              >
                {"VISI".split("").map((char, index) => (
                  <span key={index} data-intro-char className="inline-block" style={{ opacity: 0 }}>
                    {char}
                  </span>
                ))}
              </span>

              {/* Middle Slot for the Expanding Media Pill ("O") */}
              <div
                data-media-slot
                className="mx-2 sm:mx-3.5 md:mx-5 flex items-center justify-center relative z-[100]"
                style={{ opacity: 0 }}
              >
                {mediaSlot}
              </div>

              {/* Right Typography: N */}
              <span
                data-intro-fade
                data-text-right
                className="text-cs-dark-blue font-display font-extrabold tracking-tighter leading-none will-change-transform select-none"
                style={{
                  fontSize: "clamp(5.88rem, min(21.5vw, 39.5vh), 22.06rem)",
                  letterSpacing: "-0.035em",
                }}
              >
                {"N".split("").map((char, index) => (
                  <span key={index} data-intro-char className="inline-block" style={{ opacity: 0 }}>
                    {char}
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* Invisible placeholder for partition line so spacing is exact */}
          <div className="w-full h-[1px] shrink-0 pointer-events-none" />

          {/* Bottom Container — Get Started section lifted up so VISION + footer look in one single frame without scrolling */}
          <div
            data-intro-fade
            data-intro-footer
            className="w-full pt-4 sm:pt-6 md:pt-6 xl:pt-[clamp(1.25rem,3.5vh,3rem)] 2xl:pt-[clamp(1.5rem,4vh,3.5rem)] pb-6 sm:pb-8 md:pb-8 xl:pb-[clamp(2rem,6vh,4.5rem)] 2xl:pb-[clamp(2.5rem,7vh,5rem)] px-6 sm:px-12 md:px-16 xl:px-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pointer-events-auto shrink-0 z-20"
          >
            <div data-footer-left className="max-w-xl" style={{ opacity: 0 }}>
              <p className="text-para text-cs-ink">
                We blend creativity with strategy to build digital experiences that move brands
                forward. From crafting standout websites.
              </p>
            </div>
            <div data-footer-right className="shrink-0 flex items-center gap-3 sm:gap-4 flex-wrap justify-end" style={{ opacity: 0 }}>
              <RollingButton text="Book a Free Call" href="#contact" variant="primary" />
              <RollingButton text="Get Started Now" href="#contact" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

VisionTypographyIntro.displayName = "VisionTypographyIntro";
