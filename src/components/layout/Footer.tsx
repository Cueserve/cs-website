import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer
      className="relative w-full border-t border-[#D1E0FF] pt-16 md:pt-40 flex flex-col items-center"
      style={{ background: 'linear-gradient(182.61deg, rgba(209, 224, 255, 0) 3.23%, #D1E0FF 97.86%)' }}
    >
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto flex flex-col @container">
        {/* Title Group */}
        <div className="flex items-center w-full justify-between text-[11.4cqw] font-paragraph font-normal text-cs-ink leading-none tracking-tight mb-8 md:mb-20">
          <span>PR</span>
          {/* Pill Button */}
          <button className="group relative flex items-center justify-center w-[0.77em] h-[0.77em] bg-brand-default rounded-full hover:bg-brand-hover transition-all shrink-0 overflow-hidden">
            <div className="relative w-[0.45em] h-[0.45em]">
              {/* Arrow 1 (Original) */}
              <svg className="absolute inset-0 w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-[200%] group-hover:-translate-y-[200%]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {/* Arrow 2 (Incoming) */}
              <svg className="absolute inset-0 w-full h-full -translate-x-[200%] translate-y-[200%] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0 group-hover:translate-y-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
          <span className="whitespace-nowrap">JECT IN</span>
          <span className="text-brand-default italic whitespace-nowrap">MIND?</span>
        </div>
        {/* 3 Container Layout */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-8 pt-0 md:pt-8 pb-12 md:pb-32">

          {/* Container 1 (Left) */}
          <div className="w-full md:w-[38%] flex flex-col items-start pr-4">
            <Logo className="h-6 w-auto mb-6" />
            <p className="text-cs-ink font-paragraph font-normal leading-relaxed text-lg max-w-[320px]">
              We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.
            </p>

            <div className="mt-8 w-full max-w-[340px] bg-white rounded-full flex items-center p-1.5 pl-6 shadow-sm border border-black/5">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 bg-transparent outline-none text-lg text-cs-ink placeholder:text-cs-ink/50 font-paragraph font-normal min-w-0"
              />
              <button className="w-9 h-9 rounded-full bg-brand-default flex items-center justify-center shrink-0 hover:bg-brand-hover transition-colors">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side: Links & Contact Grid */}
          <div className="w-full md:w-[56%] grid grid-cols-2 md:grid-cols-2 gap-y-12 md:gap-y-16 lg:gap-y-20 gap-x-8 lg:gap-x-8">

            {/* Main Pages */}
            <div className="flex flex-col gap-4 order-1">
              <h4 className="text-[17px] md:text-xl text-cs-ink font-paragraph font-normal mb-2 md:mb-1">Main Pages</h4>

              {/* Desktop View */}
              <div className="hidden md:flex flex-col gap-3.5">
                {[
                  ["Home", "About Us", "/", "/about"],
                  ["Services", "Projects", "/services", "/projects"],
                  ["Blogs", "Careers", "/blog", "/careers"]
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-base text-cs-ink font-paragraph font-light">
                    <Link href={row[2]} className="hover:text-brand-default transition-colors">{row[0]}</Link>
                    <div className="w-[5px] h-[5px] rounded-full bg-brand-default shrink-0"></div>
                    <Link href={row[3]} className="hover:text-brand-default transition-colors">{row[1]}</Link>
                  </div>
                ))}
              </div>

              {/* Mobile View */}
              <div className="flex md:hidden flex-col gap-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Projects", href: "/projects" },
                  { name: "Blogs", href: "/blog" },
                  { name: "Careers", href: "/careers" }
                ].map((link, idx) => (
                  <Link key={idx} href={link.href} className="text-[15px] text-cs-ink/70 font-paragraph font-normal hover:text-brand-default transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4 order-2 md:order-3">
              <h4 className="text-[17px] md:text-xl text-cs-ink font-paragraph font-normal mb-2 md:mb-1">Services</h4>

              {/* Desktop View */}
              <div className="hidden md:flex flex-col gap-3.5">
                {[
                  ["Website", "Kiosk", "/services", "/services"],
                  ["Software", "UI/UX Design", "/services", "/services"],
                  ["Mobile App", "Graphics Design", "/services", "/services"]
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-base text-cs-ink font-paragraph font-light">
                    <Link href={row[2]} className="hover:text-brand-default transition-colors">{row[0]}</Link>
                    <div className="w-[5px] h-[5px] rounded-full bg-brand-default shrink-0"></div>
                    <Link href={row[3]} className="hover:text-brand-default transition-colors">{row[1]}</Link>
                  </div>
                ))}
              </div>

              {/* Mobile View */}
              <div className="flex md:hidden flex-col gap-3">
                {[
                  { name: "Website", href: "/services" },
                  { name: "Kiosk", href: "/services" },
                  { name: "Software", href: "/services" },
                  { name: "UI/UX Design", href: "/services" },
                  { name: "Mobile App", href: "/services" },
                  { name: "Graphics Design", href: "/services" }
                ].map((link, idx) => (
                  <Link key={idx} href={link.href} className="text-[15px] text-cs-ink/70 font-paragraph font-normal hover:text-brand-default transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-4 order-3 md:order-2">
              <h4 className="text-[17px] md:text-xl text-cs-ink font-paragraph font-normal mb-2 md:mb-1">Location</h4>
              <p className="text-[15px] md:text-base text-cs-ink/70 md:text-cs-ink leading-relaxed font-paragraph font-normal md:font-light max-w-[200px] md:max-w-none">
                5, Punit Colony, Sindhwaimata Road, Opp. Spandan Hospital, Pratapnagar, Vadodara
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4 order-4">
              <h4 className="text-[17px] md:text-xl text-cs-ink font-paragraph font-normal mb-2 md:mb-1">Contact</h4>
              <div className="flex flex-col gap-3 md:gap-3.5 text-[15px] md:text-base text-cs-ink/70 md:text-cs-ink font-paragraph font-normal md:font-light">
                <a href="mailto:sales@cueserve.com" className="md:underline md:decoration-solid hover:text-brand-default transition-colors">sales@cueserve.com</a>
                <a href="tel:+918000299993" className="hover:text-brand-default transition-colors">+91-80002-99993</a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full border-t-2 border-white py-6 md:py-16 flex items-center justify-center text-center px-4">
        <p className="text-base text-black font-paragraph font-light leading-none">
          Â© 2026 Copyright - Cueserve | Designed by "Cueserve" | License | Powered by Cueserve
        </p>
      </div>
    </footer>
  );
}
