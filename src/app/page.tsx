export default function HomePage() {
  return (
    <main className="flex-1 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1
          className="font-display text-7xl sm:text-8xl tracking-wide text-cs-dark-blue"
          style={{ fontFamily: "var(--font-display)" }}
        >
          CUESERVE
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-cs-dark-blue/80">
          A fresh UI with AI-Native positioning for the next era of digital engineering.
        </p>
        <p className="mt-4 text-sm uppercase tracking-widest text-cs-light-blue">
          Site under reconstruction
        </p>
      </div>
    </main>
  );
}
