"use client";

import React, { forwardRef } from "react";
import { VisionHeroContent } from "./VisionHeroContent";

export interface VisionHeroMediaProps {
  mediaUrl?: string;
  className?: string;
}

export const VisionHeroMedia = forwardRef<HTMLDivElement, VisionHeroMediaProps>(
  (
    {
      className = "",
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`relative overflow-hidden shadow-xl ${className}`}
        style={{
          width: "clamp(320px, 32.5vw, 510px)",
          height: "clamp(142px, 15.5vw, 246px)",
          borderRadius: "9999px",
          backgroundColor: "#09355E",
          boxShadow: "0 20px 50px -10px rgba(9, 53, 94, 0.25)",
        }}
      >
        {/* Live Portal Window into the Hero Section underneath right from progress 0 */}
        <div
          data-portal-inner
          className="absolute left-0 top-0 origin-top-left pointer-events-none z-10"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          {/* Hero Section Content & Full Background Image */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Layer 1: Pure White Base for Hero */}
            <div className="absolute inset-0 pointer-events-none z-0 bg-white" />

            {/* Layer 2: Full Hero Background Image where the helmet girl is part of the bg – shifted left on laptops so text never overlaps */}
            <div
              className="absolute inset-0 pointer-events-none z-0 bg-cover bg-no-repeat bg-[position:82%_center] lg:bg-[position:76%_center] xl:bg-[position:68%_center] 2xl:bg-[position:15%_center]"
              style={{
                backgroundImage: `url('/hero_bg2.jpg')`,
              }}
            />

            {/* Layer 3: Right-Aligned Hero Content – initially hidden, revealed by timeline right when portal reaches fullscreen */}
            <VisionHeroContent />
          </div>
        </div>

        {/* Crisp Dark Blue Border Ring ON TOP */}
        <div
          data-media-border
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            border: "clamp(23px, 2.5vw, 34px) solid #09355E",
            borderRadius: "9999px",
          }}
        />
      </div>
    );
  }
);

VisionHeroMedia.displayName = "VisionHeroMedia";
