import React from "react";

export function TestimonialSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-[90%] xl:w-[82%] max-w-[1260px] mx-auto flex flex-col items-center text-center">

        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-brand-default border border-brand-default/30 bg-[#f4f8ff]">
            Our Testimonials
          </span>

          <h2 className="text-lg sm:text-xl md:text-4xl font-paragraph font-normal text-cs-ink leading-[1.3] w-[95%] sm:w-[90%] md:w-[100%] mx-auto">
            Our success is measured by the satisfaction of our clients.
            <br className="hidden lg:block" />
            <span className="text-brand-default">
              {" "}We take pride in building long partnerships.
            </span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="w-full md:max-w-[680px] lg:max-w-[1050px] mx-auto p-0 md:p-2 lg:p-3 rounded-[24px] md:rounded-[32px] lg:rounded-[48px] border-0 md:border-[1.5px] md:border-brand-default bg-transparent md:bg-bg-tinted shadow-none md:shadow-cs-md text-left">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 h-full">

            {/* Left Photo */}
            <div className="relative w-full md:w-[35%] lg:w-[30%] aspect-[4/3] md:aspect-auto md:min-h-[280px] lg:min-h-[420px] rounded-[24px] md:rounded-[28px] lg:rounded-[40px] overflow-hidden bg-brand-muted shrink-0">
              <img src="/testimonial/client.jpg" alt="Lindel Wabhembe" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Right Text Panel */}
            <div className="flex-1 rounded-[24px] md:rounded-[28px] lg:rounded-[40px] border border-border-default md:border-[1.5px] px-6 md:px-8 lg:px-12 pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-12 flex flex-col justify-start relative bg-white">

              {/* Logo & Name Row */}
              <div className="flex justify-between items-start md:items-center mb-4 md:mb-5 lg:mb-6">
                <div className="flex flex-col items-start">
                  <img src="/testimonial/testimonial_logo.png" alt="New Chapter Books and Gifts" className="h-6 md:h-8 lg:h-12 w-auto object-contain mb-1 md:mb-2 lg:mb-4" />
                  <h4 className="font-paragraph font-normal text-sm md:text-base lg:text-xl italic text-cs-ink">Lindel Wabhembe</h4>
                </div>
                {/* Quote Icon */}
                <div className="shrink-0 ml-4">
                  <img src="/testimonial/quote-icon.png" alt="Quote" className="w-8 md:w-8 lg:w-12 h-auto object-contain opacity-50 md:opacity-100" />
                </div>
              </div>

              {/* Divider */}
              <hr className="border-t border-border-default md:border-t-[1.5px] mb-4 md:mb-8 w-full" />

              {/* Quote Text */}
              <p className="font-paragraph font-light text-base md:text-[15px] lg:text-2xl text-cs-ink leading-relaxed">
                “If you want your job to be done professionally and on time, I highly recommend Team Cueserve. Very professional and will hire again in my future projects. Job well done. Thank you”.
              </p>

            </div>
          </div>
        </div>

        {/* Pagination Arrows */}
        <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
          <button className="w-10 h-10 rounded-full border border-cs-light-blue/20 bg-cs-light-blue/5 flex justify-center items-center text-cs-light-blue hover:bg-cs-light-blue/10 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="w-10 h-10 rounded-full border border-cs-light-blue/20 bg-cs-light-blue/5 flex justify-center items-center text-cs-light-blue hover:bg-cs-light-blue/10 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* Stats Strip */}
        <div className="w-full max-w-[1150px] mx-auto mt-16 md:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-4 md:gap-x-0 items-start justify-center">

            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-4xl md:text-[56px] font-paragraph font-normal text-cs-ink leading-none mb-3">95%</h3>
              <p className="text-[10px] md:text-xs font-paragraph font-medium uppercase tracking-widest text-neutral-500 max-w-[130px] leading-relaxed">
                Client Satisfaction Rate
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center relative w-full">
              {/* Left Desktop Divider */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-28 bg-border-default"></div>

              <h3 className="text-4xl md:text-[56px] font-paragraph font-normal text-cs-ink leading-none mb-3">120+</h3>
              <p className="text-[10px] md:text-xs font-paragraph font-medium uppercase tracking-widest text-neutral-500 max-w-[140px] leading-relaxed">
                Global Brands Served Worldwide
              </p>

              {/* Right Desktop Divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-28 bg-border-default"></div>
            </div>

            {/* Stat 3 (Centered on Mobile) */}
            <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
              <h3 className="text-4xl md:text-[56px] font-paragraph font-normal text-cs-ink leading-none mb-3">5X</h3>
              <p className="text-[10px] md:text-xs font-paragraph font-medium uppercase tracking-widest text-neutral-500 max-w-[130px] leading-relaxed">
                Average Growth Achieved
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Full Width Bottom Border */}
      <hr className="w-full border-t border-border-default mt-16 md:mt-24" />
    </section>
  );
}
