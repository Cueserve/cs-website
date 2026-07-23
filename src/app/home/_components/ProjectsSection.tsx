"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { RollingButton } from "@/components/RollingButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { id: "01", name: "Project Name 01", category: "UI/UX DESIGN", image: "/project.png", isLarge: false },
  { id: "02", name: "Project Name 02", category: "UI/UX DESIGN", image: "/project.png", isLarge: false },
  { id: "03", name: "Project Name 03", category: "UI/UX DESIGN", image: "/project.png", isLarge: true },
  { id: "04", name: "Project Name 04", category: "UI/UX DESIGN", image: "/project.png", isLarge: false },
  { id: "05", name: "Project Name 05", category: "UI/UX DESIGN", image: "/project.png", isLarge: false },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const projectCards = gsap.utils.toArray<HTMLElement>('.project-card');
    
    projectCards.forEach((card) => {
      const content = card.querySelector('.project-content');
      if (content) {
        // Set the perspective so the rotation looks 3D
        gsap.set(content, { transformPerspective: 1500, transformOrigin: "bottom center" });
        
        gsap.from(content, {
          y: 200,
          rotationX: 45, // Tilted backward
          opacity: 0,
          ease: "power2.out", // Smoother easing
          scrollTrigger: {
            trigger: content,
            start: "top 90%", // Starts when top of photo enters
            end: "bottom 90%", // Finishes exactly when bottom of photo enters
            scrub: 1, // Ties the animation to the scrollbar
          }
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-between border-t border-b border-cs-border pb-24">
      {/* 5 Vertical Lines spanning wider than the navbar */}
      <div className="absolute inset-0 w-[96%] max-w-[1600px] mx-auto h-full flex justify-between pointer-events-none z-0">
        <div className="w-px h-full bg-cs-border" />
        <div className="w-px h-full bg-cs-border" />
        <div className="w-px h-full bg-cs-border" />
        <div className="w-px h-full bg-cs-border" />
        <div className="w-px h-full bg-cs-border" />
      </div>

      {/* Inner Content Container */}
      <div className="relative z-10 w-[90%] xl:w-[82%] max-w-[1260px] mx-auto pt-20 h-full flex flex-col">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-24 gap-8">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-label uppercase tracking-wider text-brand-default border border-brand-default/30 bg-[#f4f8ff]">
              Our Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-paragraph font-normal text-cs-ink">
              Our Latest <span className="text-cs-dark-blue">Projects.</span>
            </h2>
          </div>

          <RollingButton
            text="View Projects"
            href="#"
            variant="secondary"
            className="border-none bg-brand-subtle !shadow-none hover:bg-brand-muted mb-2"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card flex flex-col ${project.isLarge ? "md:col-span-2" : "col-span-1"} ${idx === 1 || idx === 4 ? "md:mt-32" : ""}`}
            >
              {/* Inner Grid for exact diagonal attachment */}
              <div className="grid grid-cols-[auto_1fr]">

                {/* Number: Row 1, Col 1 */}
                <div className="text-7xl md:text-[120px] font-paragraph font-normal text-cs-ink leading-[0.75] tracking-tighter col-start-1 col-end-2 row-start-1 row-end-2 z-10">
                  {project.id}
                </div>

                {/* Image & Text Wrapper: Row 2, Col 2 */}
                <div className={`project-content flex flex-col items-start w-full col-start-2 col-end-3 row-start-2 row-end-3 -mt-6 md:-mt-8 ${project.isLarge ? "" : "md:max-w-[452px]"}`}>
                  <div
                    className={`relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden mb-6 ${project.isLarge
                      ? "aspect-[2/1]"
                      : "aspect-[4/5]"
                      }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg md:text-xl font-paragraph font-medium text-cs-ink">
                      {project.name}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider text-brand-default bg-brand-subtle">
                      {project.category}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
