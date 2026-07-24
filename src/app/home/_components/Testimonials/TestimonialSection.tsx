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

          <h2 className="text-3xl md:text-4xl font-paragraph font-normal text-cs-ink leading-[1.3] w-[90%] md:w-[100%] mx-auto">
            Our success is measured by the satisfaction of our clients.
            <br className="hidden lg:block" />
            <span className="text-brand-default">
              {" "}We take pride in building long partnerships.
            </span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="w-full max-w-[1050px] mx-auto p-2 sm:p-3 rounded-[32px] md:rounded-[48px] border-[1.5px] border-brand-default bg-bg-tinted shadow-cs-md text-left">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 h-full">

            {/* Left Photo */}
            <div className="relative w-full md:w-[30%] aspect-[4/5] md:aspect-auto md:min-h-[420px] rounded-[24px] md:rounded-[40px] overflow-hidden bg-brand-muted shrink-0">
              <img src="/testimonial/client.jpg" alt="Lindel Wabhembe" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Right Text Panel */}
            <div className="flex-1 rounded-[24px] md:rounded-[40px] border-[1.5px] border-border-default px-8 md:px-12 pt-8 md:pt-10 pb-8 md:pb-12 flex flex-col justify-start relative bg-white">

              {/* Logo & Name Row */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <img src="/testimonial/testimonial_logo.png" alt="New Chapter Books and Gifts" className="h-10 md:h-12 w-auto object-contain mb-4" />
                  <h4 className="font-paragraph font-normal text-lg md:text-xl italic text-cs-ink">Lindel Wabhembe</h4>
                </div>
                {/* Quote Icon */}
                <div className="shrink-0 ml-4">
                  <img src="/testimonial/quote-icon.png" alt="Quote" className="w-10 md:w-12 h-auto object-contain" />
                </div>
              </div>

              {/* Divider */}
              <hr className="border-t-[1.5px] border-border-default mb-8 w-full" />

              {/* Quote Text */}
              <p className="font-paragraph font-light text-lg md:text-2xl text-cs-ink leading-relaxed">
                “If you want your job to be done professionally and on time, I highly recommend Team Cueserve. Very professional and will hire again in my future projects. Job well done. Thank you”.
              </p>

            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="w-full max-w-[1150px] mx-auto mt-28 md:mt-40">
          <div className="flex flex-col md:flex-row justify-center items-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center flex-1 py-8 md:py-0">
              <h3 className="text-4xl md:text-[56px] font-paragraph font-normal text-cs-ink leading-none mb-3">95%</h3>
              <p className="text-[10px] md:text-xs font-paragraph font-light uppercase tracking-widest text-neutral-900">Client Satisfaction Rate</p>
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-[1px] h-28 bg-border-default"></div>
            
            {/* Stat 2 */}
            <div className="flex flex-col items-center flex-1 py-8 md:py-0 border-y md:border-y-0 border-border-default w-full md:w-auto">
              <h3 className="text-4xl md:text-[56px] font-paragraph font-normal text-cs-ink leading-none mb-3">98%</h3>
              <p className="text-[10px] md:text-xs font-paragraph font-light uppercase tracking-widest text-neutral-900">Accurately Delivered</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-28 bg-border-default"></div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center flex-1 py-8 md:py-0">
              <h3 className="text-4xl md:text-[56px] font-paragraph font-normal text-cs-ink leading-none mb-3">98%</h3>
              <p className="text-[10px] md:text-xs font-paragraph font-light uppercase tracking-widest text-neutral-900">Accurately Delivered</p>
            </div>

          </div>
        </div>

      </div>

      {/* Full Width Bottom Border */}
      <hr className="w-full border-t border-border-default mt-16 md:mt-24" />
    </section>
  );
}
