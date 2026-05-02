import { Hero } from "./_components/Hero";
import { ClientsStrip } from "./_components/ClientsStrip";
import { FeaturesSection } from "./_components/FeaturesSection";
import { WhySection } from "./_components/WhySection";
import { ProcessSection } from "./_components/ProcessSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { CTABanner } from "./_components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <FeaturesSection />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
