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
        className={`relative overflow-hidden shadow-xl ${className}`}
        style={{
          width: "clamp(320px, 32.5vw, 510px)",
          height: "clamp(142px, 15.5vw, 246px)",
          borderRadius: "9999px",
          backgroundColor: "#09355E",
          boxShadow: "0 20px 50px -10px rgba(9, 53, 94, 0.25)",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      >
        {/* Sleek Brand Blue Atmospheric Pill Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#dce7f2] via-[#eef6fc] to-[#c8dff0] z-0" />

        {/* Media Image / Visual Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center z-10 transition-transform duration-700 ease-out opacity-90 mix-blend-multiply"
          style={{
            backgroundImage: `url(${mediaUrl})`,
          }}
        />

        {/* Crisp Dark Blue Border Ring ON TOP (z-30) so rainbow never covers or bleeds into the O border */}
        <div
          data-media-border
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            border: "clamp(22px, 2.4vw, 32px) solid #09355E",
            borderRadius: "9999px",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        />

        {/* Cinematic Dark Gradient Overlay for legibility when scaled up to full viewport */}
        <div
          data-media-overlay
          className="absolute inset-0 bg-gradient-to-r from-[#09355E]/95 via-[#09355E]/80 to-[#0f1920]/90 opacity-0 z-20 pointer-events-none transition-opacity"
        />
      </div>
    );
  }
);

VisionHeroMedia.displayName = "VisionHeroMedia";
