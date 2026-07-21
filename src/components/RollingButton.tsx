"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

export interface RollingButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href?: string;
  className?: string;
}

export const RollingButton = forwardRef<HTMLAnchorElement, RollingButtonProps>(
  ({ text, href = "#contact", className = "", ...rest }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={`group relative inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-white hover:bg-[#f4f8fb] text-cs-ink border border-[#cbd5e1]/80 text-btn transition-all duration-300 shadow-md hover:shadow-lg shrink-0 ${className}`}
        {...rest}
      >
        {/* Staggered Letter-by-Letter Rolling Text Animation */}
        <span className="inline-flex items-center overflow-hidden h-7 leading-7">
          {text.split("").map((char, index) => (
            <span key={index} className="relative inline-block overflow-hidden h-7 leading-7">
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
      </Link>
    );
  }
);

RollingButton.displayName = "RollingButton";
