"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

export interface RollingButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export const RollingButton = forwardRef<HTMLAnchorElement, RollingButtonProps>(
  ({ text, href = "#contact", className = "", variant = "secondary", ...rest }, ref) => {
    const isPrimary = variant === "primary";

    const pillClass = isPrimary
      ? "bg-brand-default hover:bg-brand-hover text-text-inverse border border-brand-default"
      : "bg-bg-page hover:bg-bg-subtle text-neutral-900 border border-border-strong";

    const arrowClass = isPrimary
      ? "bg-bg-page text-brand-default group-hover:bg-bg-subtle"
      : "bg-brand-default text-text-inverse group-hover:bg-brand-hover";

    return (
      <Link
        ref={ref}
        href={href}
        className={`group relative inline-flex items-center gap-2 md:gap-3 pl-4 md:pl-6 pr-1 md:pr-1.5 py-1 md:py-1.5 rounded-full text-[13px] md:text-[16px] transition-all duration-300 shadow-md hover:shadow-lg shrink-0 ${pillClass} ${className}`}
        {...rest}
      >
        {/* Staggered Letter-by-Letter Rolling Text Animation */}
        <span className="inline-flex items-center overflow-hidden h-5 md:h-7 leading-5 md:leading-7 font-paragraph">
          {text.split("").map((char, index) => (
            <span key={index} className="relative inline-block overflow-hidden h-5 md:h-7 leading-5 md:leading-7">
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
        <span className={`w-7 md:w-10 h-7 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ease-out group-hover:scale-105 ${arrowClass}`}>
          <svg
            className="w-3.5 md:w-4 h-3.5 md:h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
