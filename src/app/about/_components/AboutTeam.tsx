"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PulseIcon, ArrowRightIcon } from "@/components/icons/HeroIcons";

const TEAM_MEMBERS = [
  {
    name: "Viral Parikh",
    role: "CEO & Founder",
    image: "/employee.png",
    linkedin: "#",
  },
  {
    name: "Dhvanit Kapadia",
    role: "Chief Technology Engineer",
    image: "/employee.png",
    linkedin: "#",
  },
  {
    name: "Shiddhesh Shah",
    role: "Project Manager",
    image: "/employee.png",
    linkedin: "#",
  },
  {
    name: "kamlesh Mandaviya",
    role: "Project Manager",
    image: "/employee.png",
    linkedin: "#",
  },
  {
    name: "Shalin Shah",
    role: "Senior Devloper",
    image: "/employee.png",
    linkedin: "#",
  },
  {
    name: "Alpesh Rana",
    role: "Senior Devloper",
    image: "/employee.png",
    linkedin: "#",
  }
] as const;

export function AboutTeam() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const total = TEAM_MEMBERS.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? Math.max(0, total - visibleCount) : prev - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount >= total ? 0 : prev + visibleCount));
  };

  const visibleMembers = TEAM_MEMBERS.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cs-light-blue">
              <PulseIcon className="h-3.5 w-3.5" />
              WHO WE ARE
            </div>
            <h2 
              className="font-display font-bold leading-[1.15] tracking-[-0.02em] text-cs-dark-blue max-w-lg"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
            >
              Our Core Team of <br className="hidden sm:inline" />
              <span className="text-cs-light-blue">Engineering Experts</span>
            </h2>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button 
              type="button"
              onClick={handlePrev}
              aria-label="Previous Team Members"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cs-border bg-white text-cs-ink hover:border-cs-light-blue hover:text-cs-light-blue transition-colors shadow-cs-sm"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              type="button"
              onClick={handleNext}
              aria-label="Next Team Members"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cs-dark-blue text-white hover:bg-cs-light-blue transition-colors shadow-cs-sm"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 min-h-[380px]">
          {visibleMembers.map((member, idx) => (
            <div 
              key={`${member.name}-${startIndex + idx}`}
              className="group flex flex-col rounded-2xl border border-cs-border bg-white p-4 shadow-cs-sm hover:shadow-cs-md hover:border-cs-border-accent/60 transition-all duration-300 animate-fadeIn"
            >
              {/* Image Frame */}
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-cs-surface-tint relative mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cs-dark-blue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* LinkedIn / Social Hover Button */}
                <Link
                  href={member.linkedin}
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                  className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-cs-dark-blue backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cs-light-blue hover:text-white shadow-sm translate-y-2 group-hover:translate-y-0"
                >
                  <ArrowRightIcon className="h-4 w-4 -rotate-45" />
                </Link>
              </div>

              {/* Member Details */}
              <div className="flex flex-col px-1 pb-1">
                <h3 className="font-display font-bold text-lg text-cs-dark-blue group-hover:text-cs-light-blue transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cs-light-blue">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

