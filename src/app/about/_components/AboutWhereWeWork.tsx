import Link from "next/link";
import { PulseIcon, ArrowRightIcon } from "@/components/icons/HeroIcons";

export function AboutWhereWeWork() {
  return (
    <section className="py-24 bg-cs-surface-tint border-t border-cs-border relative overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.09]"
        style={{
          backgroundImage: `radial-gradient(#0c385a 1.2px, transparent 1.2px)`,
          backgroundSize: "24px 24px"
        }}
      />
      <div className="mx-auto max-w-[1200px] px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cs-light-blue">
            <PulseIcon className="h-3.5 w-3.5" />
            GLOBAL PRESENCE
          </div>
          <h2
            className="font-display font-bold leading-[1.15] tracking-[-0.02em] text-cs-dark-blue"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            Where We Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cs-ink leading-relaxed">
            While we operate remote-first across the globe, our core engineering and innovation labs are rooted in India delivering 24/7 AI-native solutions to enterprise partners worldwide.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">

          {/* Left Card: Headquarters & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-cs-border bg-white p-8 sm:p-10 shadow-cs-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cs-light-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-cs-surface-tint text-cs-dark-blue font-bold text-xs uppercase tracking-wider mb-8 border border-cs-border">
                Global Headquarters
              </span>

              <div className="space-y-6">
                {/* Address with "Open Maps" icon on hover */}
                <Link
                  href="https://maps.google.com/?q=5,+Punit+Colony,+Sindhwaimata+Road,+Pratapnagar,+Vadodara,+390004,+Gujarat,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/addr flex items-start gap-4 cursor-pointer"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2384c6]/20 via-[#2384c6]/10 to-transparent border border-[#2384c6]/40 text-[#2384c6] backdrop-blur-md shadow-sm shadow-[#2384c6]/5 group-hover/addr:scale-105 group-hover/addr:border-[#2384c6] transition-all duration-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-display font-bold text-base text-cs-dark-blue group-hover/addr:text-[#2384c6] transition-colors">
                        Cueserve INC
                      </h4>

                      <span className="opacity-0 -translate-x-1 group-hover/addr:opacity-100 group-hover/addr:translate-x-0 inline-flex items-center text-[#2384c6] transition-all duration-300">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-cs-ink leading-relaxed group-hover/addr:text-cs-dark-blue transition-colors">
                      5, Punit Colony, Sindhwaimata Road, Pratapnagar, Vadodara — 390004, Gujarat, India
                    </p>
                  </div>
                </Link>

                <Link
                  href="mailto:sales@cueserve.com"
                  className="group/email flex items-start gap-4 cursor-pointer"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2384c6]/20 via-[#2384c6]/10 to-transparent border border-[#2384c6]/40 text-[#2384c6] backdrop-blur-md shadow-sm shadow-[#2384c6]/5 group-hover/email:scale-105 group-hover/email:border-[#2384c6] transition-all duration-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-cs-dark-blue group-hover/email:text-[#2384c6] transition-colors">
                      Email Us
                    </h4>
                    <span className="mt-1 block text-sm text-cs-light-blue font-medium group-hover/email:underline group-hover/email:text-[#2384c6] transition-all">
                      sales@cueserve.com
                    </span>
                  </div>
                </Link>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2384c6]/20 via-[#2384c6]/10 to-transparent border border-[#2384c6]/40 text-[#2384c6] backdrop-blur-md shadow-sm shadow-[#2384c6]/5">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-cs-dark-blue">Working Hours</h4>
                    <p className="mt-1 text-sm text-cs-ink">
                      Mon - Fri: 9:00 AM - 7:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 pt-6 border-t border-cs-border">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cs-dark-blue px-6 py-4 font-display font-bold text-sm text-white shadow-cs-md hover:bg-cs-light-blue transition-colors group"
              >
                <span>Get in Touch</span>
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Card: Framed Luxury Google Map Container */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-cs-border/80 bg-white shadow-lg shadow-[#0c385a]/5 relative overflow-hidden min-h-[440px]">
            
            {/* Top Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-cs-border/60 bg-cs-surface-subtle/50">
              <div className="flex items-center gap-2.5">
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#2384c6]/10 text-[#2384c6] text-xs">
                  📍
                </span>
                <span className="font-display font-bold text-sm text-cs-dark-blue">
                  Cueserve Headquarters
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-cs-border/60 text-[11px] font-semibold text-cs-ink-muted shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Vadodara, Gujarat, India
              </span>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full flex-1 relative bg-cs-surface-tint min-h-[340px]">
              <iframe
                title="Cueserve Headquarters Location"
                src="https://maps.google.com/maps?q=5,+Punit+Colony,+Sindhwaimata+Road,+Pratapnagar,+Vadodara,+390004,+Gujarat,+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover filter contrast-[1.02] saturate-[0.95]"
              />
            </div>

            {/* Bottom Intentional Action Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-cs-border/60 bg-cs-surface-subtle/50">
              <div className="flex items-center gap-2 text-xs font-medium text-cs-ink-muted">
                <span>Coordinates: 22.2905° N, 73.2086° E</span>
              </div>
              <Link
                href="https://maps.google.com/?q=5,+Punit+Colony,+Sindhwaimata+Road,+Pratapnagar,+Vadodara,+390004,+Gujarat,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-cs-border px-4 py-2 text-xs font-bold text-cs-dark-blue transition-all hover:bg-[#0c385a] hover:text-white hover:border-[#0c385a] shadow-2xs active:scale-95 group"
              >
                <span>Open in Google Maps</span>
                <svg className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
