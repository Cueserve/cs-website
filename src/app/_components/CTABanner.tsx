import Link from "next/link";

export function CTABanner() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div
          className="relative flex flex-col items-start justify-between gap-12 overflow-hidden rounded-[20px] px-10 py-14 lg:flex-row lg:items-center lg:px-20 lg:py-16"
          style={{
            background:
              "linear-gradient(135deg, #0C385A 0%, #0E4A73 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[60px] -top-[60px] h-[280px] w-[280px] rounded-full"
            style={{ background: "rgba(35,132,198,0.15)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-[80px] right-[120px] h-[200px] w-[200px] rounded-full"
            style={{ background: "rgba(35,132,198,0.08)" }}
          />

          <div className="relative">
            <h2 className="mb-3.5 font-display text-[34px] font-bold leading-[1.15] tracking-[-0.025em] text-white lg:text-[38px]">
              Ready to Build
              <br />
              Something Real?
            </h2>
            <p className="max-w-[420px] text-[17px] leading-[1.65] text-white/65">
              We respond within 24 hours with an honest, feasible plan — no fluff, no over-promising.
            </p>
          </div>

          <div className="relative flex shrink-0 flex-col gap-3">
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-lg bg-cs-light-blue px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-cs-light-blue-hover"
            >
              Talk to Us Now
            </Link>
            <Link
              href="/services"
              className="whitespace-nowrap rounded-lg border-[1.5px] border-white/25 bg-transparent px-8 py-3 text-[15px] font-medium text-white/75 transition-colors hover:border-white/60 hover:text-white"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
