"use client";

import Image from "next/image";
import { PulseIcon } from "@/components/icons/HeroIcons";

export function ServicesHero() {
  return (
    <section
      id="services-hero"
      className="scroll-mt-20 relative overflow-hidden pt-6 pb-12 sm:pt-16 sm:pb-20 border-b border-cs-border bg-gradient-to-b from-white via-[#fcfdfe] to-[#f4fafc]"
    >
      {/* Full Hero Section Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* <Image
          src="/service_bg.png"
          alt="Services Background"
          fill
          priority
          quality={100}
          className="object-cover object-center sm:object-right"
        /> */}
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-[680px]">
          
          {/* Top Badge */}
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-cs-border-accent bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-[9.5px] sm:text-xs font-bold uppercase tracking-wider text-cs-light-blue shadow-cs-sm">
            <PulseIcon className="h-3.5 w-3.5 text-cs-light-blue animate-pulse" />
            <span>HOW WE ENGAGE • OUR SERVICES</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[26px] sm:text-5xl md:text-6xl font-display font-bold text-cs-dark-blue leading-[1.15] tracking-[-0.02em]">
            Engineering AI Solutions That{" "}
            <span className="bg-gradient-to-r from-[#12619c] via-[#2384c6] via-[#63bceb] to-[#0c385a] bg-clip-text text-transparent">
              Scale Businesses
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="mt-4 sm:mt-6 text-[11.5px] sm:text-lg text-cs-ink-muted leading-[1.65] sm:leading-[1.7] max-w-[310px] sm:max-w-[620px]">
            We combine AI, cloud, data, and modern software engineering to build intelligent digital solutions that streamline operations, enhance customer experiences, and accelerate growth.
          </p>

        </div>
      </div>
    </section>
  );
}
