"use client";

import React, { useState } from "react";
import { RollingButton } from "@/components/ui/RollingButton";

const faqs = [
  {
    question: "What services does Cueserve offer?",
    answer: "Cueserve provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online."
  },
  {
    question: "What is your typical project timeline?",
    answer: "A typical project timeline ranges from 4 to 12 weeks depending on complexity, features, and the scope of the design and development required."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide ongoing maintenance, support, and optimization services to ensure your digital presence remains secure, up-to-date, and high-performing."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer customized pricing based on the unique requirements of your project. After an initial consultation, we provide a detailed proposal outlining the scope and costs."
  }
];

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-white flex flex-col items-center pt-12 md:pt-12 lg:pt-24 pb-12 md:pb-24">
      {/* Header */}
      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-label uppercase tracking-wider text-brand-default border border-brand-default/30 bg-[#f4f8ff] mb-6">
        FAQ
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-[56px] font-paragraph font-normal text-cs-ink leading-[1.1] text-center mb-16">
        Frequently Asked <span className="text-brand-default">Questions.</span>
      </h2>

      {/* FAQ Accordion */}
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto flex flex-col lg:flex-row gap-4 md:gap-5 h-auto lg:h-[600px]">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className={`relative rounded-[32px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col cursor-pointer
                ${isActive
                  ? "max-h-[1200px] lg:max-h-none lg:flex-[2.1] bg-gradient-to-t from-[#2384C6] to-[#0040C1] text-white"
                  : "max-h-[120px] lg:max-h-none lg:h-full flex-none lg:flex-1 bg-[#F5FAFF] text-neutral-900 hover:bg-[#eaf3ff]"
                }
              `}
            >
              <div className={`flex flex-col h-full ${isActive ? "p-6 lg:p-10" : "p-4 sm:p-5 lg:px-6 lg:py-8"}`}>

                {/* Card Header */}
                <div className={`flex justify-between items-center ${isActive ? "mb-6 lg:mb-8 text-white" : "mb-1 lg:mb-8 text-neutral-900"}`}>
                  <span className={`text-sm md:text-base font-paragraph font-normal tracking-wider whitespace-nowrap ${isActive ? "opacity-80" : ""}`}>
                    QUESTION 0{index + 1}
                  </span>
                  <span className={`text-2xl md:text-3xl font-paragraph font-normal leading-none ${isActive ? "opacity-80" : ""}`}>
                    {isActive ? "—" : "+"}
                  </span>
                </div>

                {/* Content */}
                {isActive ? (
                  <div className="flex flex-col flex-1 h-full animate-in fade-in duration-500 text-white">
                    <h3 className="text-xl font-paragraph font-normal mb-6 leading-snug">{faq.question}</h3>
                    <div className="text-2xl font-paragraph font-normal mb-4">Answer:</div>
                    <div className="w-full h-[1px] bg-white/20 mb-6"></div>
                    <p className="text-lg font-paragraph font-normal leading-relaxed mb-8 pr-4 md:flex-1">
                      {faq.answer}
                    </p>

                    <div className="md:mt-auto">
                      <RollingButton
                        text="More About us"
                        href="#"
                        variant="secondary"
                        className="bg-white !border-none shadow-sm hover:shadow-md"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="hidden lg:flex flex-1 items-end justify-start pb-8 overflow-hidden">
                      <span
                        className="text-xl lg:text-2xl font-paragraph font-normal text-neutral-900 whitespace-nowrap"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {faq.question}
                      </span>
                    </div>
                    {/* Mobile Inactive Text */}
                    <div className="lg:hidden mt-1 text-sm font-paragraph font-normal text-neutral-900 truncate max-w-[90%]">
                      {faq.question}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
