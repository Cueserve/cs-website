import Link from "next/link";
import { PulseIcon, ArrowRightIcon } from "@/components/icons/HeroIcons";

export function AboutWhereWeWork() {
  return (
    <section className="py-24 bg-cs-surface-tint border-t border-cs-border">
      <div className="mx-auto max-w-[1200px] px-8">

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

        {/* 2-Column Bento Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">

          {/* Left Card: Headquarters & Contact Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-cs-border bg-white p-8 sm:p-10 shadow-cs-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cs-light-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-cs-surface-tint text-cs-dark-blue font-bold text-xs uppercase tracking-wider mb-8 border border-cs-border">
                Global Headquarters
              </span>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cs-dark-blue text-cs-light-blue shadow-sm">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-cs-dark-blue">Cueserve INC</h4>
                    <p className="mt-1 text-sm text-cs-ink leading-relaxed">
                      5, Punit Colony, Sindhwaimata Road, Pratapnagar, Vadodara — 390004, Gujarat, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cs-dark-blue text-cs-light-blue shadow-sm">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-cs-dark-blue">Email Us</h4>
                    <Link href="mailto:sales@cueserve.com" className="mt-1 block text-sm text-cs-light-blue hover:underline font-medium">
                      sales@cueserve.com
                    </Link>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cs-dark-blue text-cs-light-blue shadow-sm">
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

          {/* Right Card: Map / Visual Location Card (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl border border-cs-border bg-white p-3 shadow-cs-md relative overflow-hidden min-h-[420px]">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-cs-surface-tint">
              {/* Embedded Google Map pointing to Vadodara, Gujarat */}
              <iframe
                title="Cueserve Headquarters Location"
                src="https://maps.google.com/maps?q=5,+Punit+Colony,+Sindhwaimata+Road,+Pratapnagar,+Vadodara,+390004,+Gujarat,+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover filter contrast-105"
              />

              {/* Floating Location Tag Overlay */}
              <div className="absolute top-4 left-4 z-10 rounded-xl bg-cs-dark-blue/90 backdrop-blur-md px-4 py-2.5 border border-white/10 shadow-lg text-white flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cs-light-blue animate-pulse" />
                <span className="font-display font-bold text-xs uppercase tracking-wider text-white">
                  Cueserve INC Headquarters
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
