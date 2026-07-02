"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PulseIcon, ArrowRightIcon } from "@/components/icons/HeroIcons";

const TEAM_MEMBERS = [
  {
    name: "Viral Parikh",
    role: "CEO & Founder",
    image: "/employee_df.png",
    linkedin: "#",
  },
  {
    name: "Dhvanit Kapadia",
    role: "Chief Technology Engineer",
    image: "/employee_df.png",
    linkedin: "#",
  },
  {
    name: "Shiddhesh Shah",
    role: "Project Manager",
    image: "/employee_df.png",
    linkedin: "#",
  },
  {
    name: "Kamlesh Mandaviya",
    role: "Project Manager",
    image: "/employee_df.png",
    linkedin: "#",
  },
  {
    name: "Shalin Shah",
    role: "Senior Developer",
    image: "/employee_df.png",
    linkedin: "#",
  },
  {
    name: "Alpesh Rana",
    role: "Senior Developer",
    image: "/employee_df.png",
    linkedin: "#",
  }
] as const;

export function AboutTeam() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const visibleCount = 4;
  const total = TEAM_MEMBERS.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? Math.max(0, total - visibleCount) : prev - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount >= total ? 0 : prev + visibleCount));
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Number.MAX_VALUE;

    Array.from(container.children).forEach((child, index) => {
      const htmlChild = child as HTMLElement;
      const childCenter = htmlChild.offsetLeft + htmlChild.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeSlide && closestIndex >= 0 && closestIndex < total) {
      setActiveSlide(closestIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
    setActiveSlide(index);
  };

  const visibleMembers = TEAM_MEMBERS.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="team" className="scroll-mt-20 pt-12 pb-10 sm:py-24 bg-white relative">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gradient-to-tr from-[#f0f8ff]/60 via-transparent to-[#f4fafc]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cs-light-blue">
            <PulseIcon className="h-3.5 w-3.5" />
            OUR TEAM
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display font-bold leading-[1.15] tracking-[-0.02em] text-cs-dark-blue max-w-2xl">
              <span className="sm:hidden block text-[26px]">
                Our Core Team of <span className="text-cs-light-blue">Engineering Experts</span>
              </span>
              <span className="hidden sm:block" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
                Our Core Team of <br className="hidden sm:inline" />
                <span className="text-cs-light-blue">Engineering Experts</span>
              </span>
            </h2>

            {/* Carousel Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-3 shrink-0 self-end pb-1">
              <button 
                type="button"
                onClick={handlePrev}
                aria-label="Previous Team Members"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cs-border/80 bg-white/80 backdrop-blur-md text-cs-dark-blue hover:bg-[#2384c6] hover:text-white hover:border-[#2384c6] transition-all duration-300 shadow-sm active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                type="button"
                onClick={handleNext}
                aria-label="Next Team Members"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cs-border/80 bg-[#0c385a] text-white hover:bg-[#2384c6] hover:border-[#2384c6] transition-all duration-300 shadow-md shadow-[#0c385a]/15 active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Introductory Paragraph Below Title */}
          <p className="mt-4 text-[11.5px] sm:text-base text-cs-ink-muted max-w-xl leading-relaxed">
            Our team consists of experienced engineers, architects, and technology leaders dedicated to building robust enterprise AI and digital software solutions.
          </p>
        </div>

        {/* Mobile Swipeable Carousel with Peeking Next Slide & Scale Animation */}
        <div className="sm:hidden block">
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-4 pt-2 -mx-4 px-4 no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory touch-pan-x scroll-smooth cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TEAM_MEMBERS.map((member, idx) => {
              const isActive = idx === activeSlide;
              return (
                <div
                  key={`mobile-${member.name}`}
                  onClick={() => scrollToSlide(idx)}
                  className={`group relative flex flex-col justify-end shrink-0 w-[78vw] max-w-[310px] h-[430px] rounded-[24px] border border-cs-border/80 overflow-hidden shadow-[0_16px_40px_rgba(34,119,255,0.14)] bg-cs-surface-tint snap-center transition-all duration-500 ${
                    isActive ? "scale-100 ring-2 ring-[#2384c6]/40 shadow-[0_20px_50px_rgba(34,119,255,0.24)]" : "scale-[0.93] opacity-80"
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={95}
                    className="object-cover transition-transform duration-700 ease-out"
                    sizes="80vw"
                  />

                  <div className="absolute inset-0 bg-black/[0.12] pointer-events-none" />

                  {/* Soft gradient overlay for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0c385a] via-[#0c385a]/60 to-transparent opacity-95 pointer-events-none" />

                  {/* Content at the bottom: Name, Designation, and LinkedIn icon ALWAYS VISIBLE */}
                  <div className="relative z-10 flex items-end justify-between gap-3 p-6">
                    <div className="flex flex-col text-left">
                      <h3 className="font-display font-bold text-[18px] text-white tracking-tight leading-snug">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-[12px] font-medium text-[#bce2ff] leading-tight">
                        {member.role}
                      </p>
                    </div>

                    {/* LinkedIn Button - Always visible on mobile */}
                    <Link
                      href={member.linkedin}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                      className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#2384c6] border border-white/40 text-white shadow-lg active:scale-90 transition-transform"
                    >
                      <span className="font-bold text-sm tracking-tighter">in</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-4">
            {TEAM_MEMBERS.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeSlide 
                    ? "w-8 bg-[#2384c6] shadow-sm" 
                    : "w-2.5 bg-cs-border hover:bg-cs-light-blue/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
          {visibleMembers.map((member, idx) => (
            <div 
              key={`${member.name}-${startIndex + idx}`}
              className="group relative flex flex-col justify-end aspect-[10/14] rounded-[22px] border border-cs-border/60 overflow-hidden shadow-[0_20px_50px_rgba(34,119,255,0.12)] hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(34,119,255,0.22)] hover:border-[#bce2ff] transition-all duration-500 animate-fadeIn bg-cs-surface-tint"
            >

              <Image
                src={member.image}
                alt={member.name}
                fill
                quality={95}
                className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-black/[0.15] pointer-events-none transition-opacity duration-300 group-hover:bg-black/[0.08]" />
              
              <div className="absolute inset-x-0 bottom-0 h-32 sm:h-36 bg-gradient-to-t from-[#0c385a]/95 via-[#0c385a]/40 to-transparent transition-all duration-300 pointer-events-none" />

              <div className="relative z-10 flex items-end justify-between gap-3 p-5 sm:p-6">
                <div className="flex flex-col">
                  <h3 className="font-display font-semibold text-[19px] sm:text-[20px] text-white tracking-tight leading-snug group-hover:text-[#bce2ff] transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-[#bce2ff]/90 leading-tight">
                    {member.role}
                  </p>
                </div>

                {/* LinkedIn Button */}
                <Link
                  href={member.linkedin}
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                  className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#0c385a]/90 border border-white/30 text-white backdrop-blur-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#2384c6] hover:scale-110 shadow-md"
                >
                  <span className="font-bold text-xs tracking-tighter">in</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

