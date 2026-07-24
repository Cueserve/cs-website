import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative w-full bg-bg-tinted pt-24 pb-12 flex flex-col items-center">
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto flex flex-col @container">
        {/* Title Group */}
        <div className="flex items-center w-full justify-between text-[10.6cqw] font-paragraph font-normal text-cs-ink leading-none tracking-tight mb-20">
          <span>PR</span>
          {/* Pill Button */}
          <button className="group flex items-center justify-center w-[1.35em] h-[0.77em] bg-brand-default rounded-[99px] hover:bg-brand-hover transition-all shrink-0">
            <svg className="w-[0.5em] h-[0.5em] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="whitespace-nowrap">JECT IN</span>
          <span className="text-brand-default italic whitespace-nowrap">MIND?</span>
        </div>
      </div>
    </footer>
  );
}
