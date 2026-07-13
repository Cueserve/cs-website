"use client";

import React, { forwardRef } from "react";

export interface VisionHeroMediaProps {
  mediaUrl?: string;
  className?: string;
}

export const VisionHeroMedia = forwardRef<HTMLDivElement, VisionHeroMediaProps>(
  (
    {
      mediaUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      className = "",
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`relative overflow-hidden will-change-transform shadow-xl ${className}`}
        style={{
          width: "clamp(330px, 34vw, 540px)",
          height: "clamp(140px, 14.5vw, 235px)",
          borderRadius: "9999px",
          border: "14px solid var(--color-cs-light-blue, #2384c6)",
          boxShadow: "0 20px 50px -10px rgba(35, 132, 198, 0.25)",
        }}
      >
        {/* Sleek Brand Blue Atmospheric Pill Background (matching reference monochrome blue aesthetic) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#dce7f2] via-[#eef6fc] to-[#c8dff0] z-0" />

        {/* Media Image / Visual Layer (fades/scales cleanly during zoom) */}
        <div
          className="absolute inset-0 bg-cover bg-center z-10 transition-transform duration-700 ease-out opacity-90 mix-blend-multiply"
          style={{
            backgroundImage: `url(${mediaUrl})`,
          }}
        />

        {/* Cinematic Dark Gradient Overlay for legibility when scaled up to full viewport */}
        <div
          data-media-overlay
          className="absolute inset-0 bg-gradient-to-r from-[#0c385a]/95 via-[#0c385a]/80 to-[#0f1920]/90 opacity-0 z-20 pointer-events-none transition-opacity"
        />
      </div>
    );
  }
);

VisionHeroMedia.displayName = "VisionHeroMedia";
