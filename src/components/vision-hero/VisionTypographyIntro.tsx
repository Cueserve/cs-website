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
        className={`absolute inset-0 z-20 flex flex-col pointer-events-none select-none ${className}`}
      >
        {/* Main Flexible Architectural Box Container */}
        <div className="w-[95%] xl:w-[88%] max-w-[1380px] mx-auto h-full flex flex-col justify-start relative">
          {/* Outer Left Vertical Line – white at top transitioning to steel blue at bottom */}
          <div
            data-intro-fade
            className="absolute top-0 bottom-0 left-0 w-[1px] pointer-events-none z-10"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 50%, rgba(166,200,224,0.75) 85%, rgba(166,200,224,0.75) 100%)",
            }}
          />

          {/* Outer Right Vertical Line – white at top transitioning to steel blue at bottom */}
          <div
            data-intro-fade
            className="absolute top-0 bottom-0 right-0 w-[1px] pointer-events-none z-10"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 50%, rgba(166,200,224,0.75) 85%, rgba(166,200,224,0.75) 100%)",
            }}
          />
          {/* Small Top Container above VISION box – shifted VISION down */}
          <div className="w-full shrink-0 h-20 sm:h-24 md:h-28 xl:h-32" />

          {/* Middle Flexible Box containing VISION Typography + Media Pill */}
          <div className="w-full pt-20 sm:pt-24 md:pt-28 xl:pt-36 pb-4 sm:pb-6 md:pb-8 xl:pb-10 flex items-center justify-center relative">
            {/* Top & Bottom Borders on separate div so they can smoothly fade out */}
            <div
              data-intro-fade
              className="absolute inset-0 pointer-events-none z-10 border-t border-white/85 border-b border-[#a6c8e0]/75"
            />
            {/* All 5 Vertical Architectural Guide Lines running top-to-bottom across both VISION and footer */}
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
            {/* VISION Typography & Media Pill */}
            <div className="flex items-center justify-center w-full px-2 sm:px-6 relative z-20">
              {/* Left Typography: VISI */}
              <span
                data-intro-fade
                data-text-left
                className="text-cs-dark-blue font-display font-extrabold tracking-tighter leading-none will-change-transform select-none"
                style={{
                  fontSize: "clamp(5.2rem, 19vw, 19.5rem)",
                  letterSpacing: "-0.035em",
                }}
              >
                {"VISI".split("").map((char, index) => (
                  <span key={index} data-intro-char className="inline-block">
                    {char}
                  </span>
                ))}
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
                data-intro-fade
                data-text-right
                className="text-cs-dark-blue font-display font-extrabold tracking-tighter leading-none will-change-transform select-none"
                style={{
                  fontSize: "clamp(5.8rem, 21.5vw, 22rem)",
                  letterSpacing: "-0.035em",
                }}
              >
                {"N".split("").map((char, index) => (
                  <span key={index} data-intro-char className="inline-block">
                    {char}
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* Crisp Architectural Partition Line between VISION and Bottom Container */}
          <div data-intro-fade className="w-full h-[1px] bg-[#cbd5e1] shrink-0 relative z-30" />

          {/* Bottom Container — Get Started section lifted up so VISION + footer look in one single frame without scrolling */}
          <div
            data-intro-fade
            data-intro-footer
            className="w-full pt-6 sm:pt-8 md:pt-10 xl:pt-12 px-6 sm:px-12 md:px-16 xl:px-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 pointer-events-auto shrink-0 z-20"
          >
            <div data-footer-left className="max-w-xl">
              <p className="text-cs-ink text-base sm:text-lg md:text-[18px] leading-relaxed font-normal">
                At CueServe, we blend AI innovation with engineering precision to build digital experiences
                that transform enterprises. From crafting intelligent workflows to scalable platforms.
              </p>
            </div>
            <div data-footer-right className="shrink-0">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-white hover:bg-[#f4f8fb] text-cs-ink border border-[#cbd5e1]/80 font-semibold text-base sm:text-[16px] transition-all duration-300 shadow-md hover:shadow-lg shrink-0"
              >
                {/* Staggered Letter-by-Letter Rolling Text Animation (first G goes, then e, till last) */}
                <span className="inline-flex items-center overflow-hidden h-6 leading-6">
                  {"Get Started Now".split("").map((char, index) => (
                    <span
                      key={index}
                      className="relative inline-block overflow-hidden h-6 leading-6"
                    >
                      <span
                        className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full"
                        style={{ transitionDelay: `${index * 18}ms` }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                      <span
                        className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
                        style={{ transitionDelay: `${index * 18}ms` }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    </span>
                  ))}
                </span>

                {/* Larger Arrow Circle Icon sitting close to right ending with matching curves */}
                <span className="w-10 h-10 rounded-full bg-cs-dark-blue text-white flex items-center justify-center shrink-0 transition-all duration-300 ease-out group-hover:bg-[#1a4a6b] group-hover:scale-105">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
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
