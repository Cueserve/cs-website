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
        className={`relative overflow-hidden ${className}`}
        style={{
          width: "clamp(150px, min(32.5vw, 60vh), 534px)",
          height: "clamp(76px, min(15.5vw, 28.5vh), 255px)",
          borderRadius: "9999px",
          backgroundColor: "transparent",
        }}
      >
        {/* Crisp Dark Blue Border Ring ON TOP */}
        <div
          data-media-border
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            border: "clamp(20px, min(2.5vw, 4.6vh), 36px) solid #0040C1",
            borderRadius: "9999px",
          }}
        />
      </div>
    );
  }
);

VisionHeroMedia.displayName = "VisionHeroMedia";
