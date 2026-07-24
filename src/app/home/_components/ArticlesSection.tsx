"use client";

import React from "react";
import { RollingButton } from "@/components/ui/RollingButton";
import { CircleArrow } from "@/components/ui/CircleArrow";

const articles = [
  {
    id: 1,
    category: "Advice",
    date: "Nov 14, 2025",
    title: "Designing for Emotion: The Secret to Memorable Brands.",
    image: "/project.png",
    link: "#"
  },
  {
    id: 2,
    category: "Strategy",
    date: "Dec 02, 2025",
    title: "How to Build a Design System that Scales.",
    image: "/project.png",
    link: "#"
  },
  {
    id: 3,
    category: "Design",
    date: "Jan 18, 2026",
    title: "The Evolution of Digital Interfaces.",
    image: "/project.png",
    link: "#"
  }
];

export function ArticlesSection() {
  return (
    <section className="relative w-full bg-white flex flex-col justify-between pt-0 md:pt-16 pb-0 md:pb-0 lg:pb-24">
      {/* Inner Content Container */}
      <div className="relative z-10 w-[90%] xl:w-[82%] max-w-[1260px] mx-auto h-full flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-24">
        
        {/* Left Fixed Container */}
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left gap-6 md:sticky md:top-24 lg:top-32 h-fit mb-4 md:mb-0">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-label uppercase tracking-wider text-brand-default border border-brand-default/30 bg-[#f4f8ff]">
            News & Articles
          </span>
          <h2 className="text-4xl md:text-[36px] lg:text-[56px] font-paragraph font-normal text-cs-ink leading-[1.1]">
            Fresh Perspectives <br className="hidden md:block"/>
            <span className="text-brand-default">On Strategy.</span>
          </h2>
          <p className="text-neutral-900 font-paragraph font-normal text-base md:text-lg mb-2 leading-relaxed">
            We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.
          </p>
          <RollingButton
            text="View All Articles"
            href="#"
            variant="secondary"
            className="border-none bg-brand-subtle !shadow-none hover:bg-brand-muted"
          />
        </div>

        {/* Right Scrollable Container */}
        <div className="w-full md:w-[50%] flex flex-col gap-12 lg:gap-24">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-full aspect-[608/367] rounded-[16px] lg:rounded-[20px] overflow-hidden bg-brand-muted mb-6 lg:mb-8">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-paragraph font-normal bg-brand-muted mb-6 uppercase">
                <span className="text-brand-default">{article.category}</span>
                <span className="text-brand-default">•</span>
                <span className="text-neutral-900">{article.date}</span>
              </span>
              <h3 className="text-xl md:text-[18px] lg:text-2xl font-paragraph font-normal text-neutral-900 leading-[1.4] mb-4 lg:mb-8 w-[90%] md:w-full mx-auto md:mx-0">
                {article.title}
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-4 cursor-pointer group">
                <span className="font-paragraph text-sm font-normal text-neutral-900 group-hover:text-brand-default transition-colors">Read More</span>
                <CircleArrow className="bg-brand-default text-white !w-6 !h-6 md:!w-7 md:!h-7 lg:!w-8 lg:!h-8" iconClassName="!w-3 !h-3" />
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Full Width Bottom Border */}
      <hr className="w-full border-t border-border-default mt-16 md:mt-20 lg:mt-24" />
    </section>
  );
}
