"use client";

import React, { forwardRef } from "react";

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
        className={`relative overflow-hidden z-[100] ${className}`}
        style={{
          width: "clamp(150px, min(32.5vw, 60vh), 534px)",
          height: "clamp(76px, min(15.5vw, 28.5vh), 255px)",
          borderRadius: "9999px",
          backgroundColor: "transparent",
          transform: "translateZ(0)",
        }}
      >
        {/* Crisp Dark Blue Border Ring ON TOP */}
        <div
          data-media-border
          className="absolute inset-0 pointer-events-none z-[100] border-solid border-[#0040C1]"
          style={{
            border: "clamp(24px, min(3.2vw, 5.2vh), 38px) solid #0040C1",
            borderRadius: "9999px",
            transform: "translateZ(0)",
          }}
        />
      </div>
    );
  }
);

VisionHeroMedia.displayName = "VisionHeroMedia";
