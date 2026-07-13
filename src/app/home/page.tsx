export { metadata } from "./metadata";

import { AnnouncementBar } from "./_components/AnnouncementBar";
import { HeroSection } from "./_components/HeroSection";
import { ClientsStrip } from "./_components/ClientsStrip";
import { FeaturesSection } from "./_components/FeaturesSection";
import { WhySection } from "./_components/WhySection";
import { ProcessSection } from "./_components/ProcessSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { CTABanner } from "./_components/CTABanner";

export default function HomePage() {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <HeroSection />
      <ClientsStrip />
      <FeaturesSection />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
