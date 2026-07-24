"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CircleArrow } from "@/components/ui/CircleArrow";

type Service = {
  id: string;
  title: string;
  pills: string[];
  activeImage: string;
  inactiveImage: string;
  leftIcon: string;
};

const services: Service[] = [
  {
    id: "01",
    title: "Brand Identity",
    pills: [
      "LOGO DESIGN",
      "GUIDELINES",
      "COLOR STRATEGY",
      "ART DIRECTION",
      "PACKAGING",
    ],
    activeImage: "/service-photo-brand.png",
    inactiveImage: "/service-photo-brand.png",
    leftIcon: "/service-icon-pen.png", // icon 1
  },
  {
    id: "02",
    title: "UI/UX Strategy",
    pills: [
      "USER RESEARCH",
      "WIREFRAMING",
      "PROTOTYPING",
      "USABILITY TESTING",
    ],
    activeImage: "/service-icon-ui.png",
    inactiveImage: "/service-icon-ui.png",
    leftIcon: "/service-icon-pen.png", // icon 2
  },
  {
    id: "03",
    title: "Digital Marketing",
    pills: ["SEO", "CONTENT STRATEGY", "SOCIAL MEDIA", "PPC CAMPAIGNS"],
    activeImage: "/service-icon-ui.png",
    inactiveImage: "/service-icon-ui.png",
    leftIcon: "/service-icon-pen.png", // icon 3
  },
  {
    id: "04",
    title: "Product Design",
    pills: ["3D MODELING", "INDUSTRIAL DESIGN", "CONCEPTING"],
    activeImage: "/service-icon-ui.png",
    inactiveImage: "/service-icon-ui.png",
    leftIcon: "/service-icon-pen.png", // icon 4
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const isAnimating = useRef(false);
  const iconImageRef = useRef<HTMLImageElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  const handleSelect = (idx: number) => {
    if (idx === activeIndex || isAnimating.current) return;

    const direction = idx > activeIndex ? 1 : -1;
    isAnimating.current = true;
    setActiveIndex(idx); // Update right accordion immediately

    if (iconImageRef.current && numberRef.current) {
      const targets = [iconImageRef.current, numberRef.current];

      // 1. Animate current content OUT
      gsap.to(targets, {
        x: direction === 1 ? -60 : 60, // Next: old goes left, Prev: old goes right
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        stagger: 0.05, // Slight delay between number and icon makes it feel organic
        onComplete: () => {
          // 2. Change content
          setDisplayIndex(idx);

          // 3. Reset position to opposite side immediately (invisible)
          gsap.set(targets, {
            x: direction === 1 ? 60 : -60 // Next: new starts right, Prev: new starts left
          });

          // 4. Animate new content IN
          gsap.to(targets, {
            x: 0,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
            stagger: 0.05,
            onComplete: () => {
              isAnimating.current = false;
            }
          });
        }
      });
    } else {
      setDisplayIndex(idx);
      isAnimating.current = false;
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
        {/* Pill */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-label uppercase tracking-wider text-brand-default border border-brand-default/30 bg-[#f4f8ff]">
            Our Services
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-paragraph font-normal text-center mb-16 text-cs-ink">
          Creativity Meets <span className="text-cs-dark-blue">Functionality.</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Left Side: Static Card */}
          <div className="w-full lg:w-[24%] bg-cs-surface-tint rounded-[32px] sm:rounded-[38px] px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-5 flex flex-col justify-between h-[360px] lg:h-[380px] self-start relative shadow-sm border border-cs-border overflow-hidden">
            <div ref={numberRef} className="text-cs-dark-blue font-display text-2xl font-medium italic z-10">
              {services[displayIndex].id}
            </div>

            <div className="flex-1 flex items-center justify-center">
              <img
                ref={iconImageRef}
                src={services[displayIndex].leftIcon}
                alt={`${services[displayIndex].title} Icon`}
                className="w-48 h-auto object-contain mix-blend-multiply drop-shadow-xl"
              />
            </div>

            <div className="w-full flex justify-between items-center border-t border-cs-border/60 pt-5">
              <span className="font-paragraph text-sm font-normal text-cs-ink">
                View Details
              </span>
              <CircleArrow
                href="#"
                className="w-8 h-8 bg-cs-dark-blue text-white"
              />
            </div>
          </div>

          {/* Right Side: Accordion Cards */}
          <div className="w-full lg:flex-1 flex flex-col bg-cs-surface-tint rounded-[32px] sm:rounded-[38px] border border-cs-border overflow-hidden">
            {services.map((service, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div key={service.id} className="flex flex-col">
                  <div
                    onClick={() => handleSelect(idx)}
                    className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center gap-6 sm:gap-10 p-6 sm:p-8`}
                  >
                    {/* Left content (Title and Pills) */}
                    <div className="flex-1 flex flex-col justify-start relative z-10">
                      <div className="flex items-center">
                        {/* Active Blue Dot indicator (Animated width/margin to prevent layout jump) */}
                        <div
                          className={`h-2.5 rounded-full bg-cs-light-blue transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? "w-2.5 mr-3 opacity-100" : "w-0 mr-0 opacity-0"
                            }`}
                        />
                        <h3
                          className={`font-paragraph text-2xl sm:text-3xl lg:text-[32px] font-normal transition-colors duration-300 leading-none flex items-center h-[36px] ${isActive ? "text-cs-dark-blue" : "text-cs-ink"
                            }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      {/* Pills (Smooth height and opacity transition) */}
                      <div
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive
                          ? "grid-rows-[1fr] mt-6 opacity-100"
                          : "grid-rows-[0fr] mt-0 opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden flex flex-wrap gap-2 max-w-[260px] sm:max-w-sm lg:max-w-md xl:max-w-lg">
                          {service.pills.map((pill, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 border border-cs-border bg-white rounded-full font-paragraph text-[11px] sm:text-xs font-normal uppercase tracking-wider text-cs-ink"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`relative flex items-center justify-end transition-all duration-500 shrink-0 ${isActive ? "w-[220px] h-[130px] lg:w-[240px] lg:h-[140px]" : "w-[120px] h-[60px]"
                        }`}
                    >
                      <img
                        src={isActive ? service.activeImage : service.inactiveImage}
                        alt={service.title}
                        className={`object-cover w-full h-full rounded-[16px] transition-all duration-500 shadow-sm ${isActive ? "opacity-100" : "opacity-90"
                          }`}
                      />
                    </div>
                  </div>
                  {idx !== services.length - 1 && (
                    <div className="mx-6 sm:mx-8 h-px bg-cs-border" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
