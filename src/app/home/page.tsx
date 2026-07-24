export { metadata } from "./metadata";

import { HeroSection } from "./_components/HeroSection";
import { AboutSection } from "./_components/AboutSection";
import { AboutMediaSection } from "./_components/AboutMediaSection";
import { ServicesSection } from "./_components/ServicesSection";
import { ProjectsSection } from "./_components/ProjectsSection";
import { TestimonialSection } from "./_components/Testimonials/TestimonialSection";
import { ArticlesSection } from "./_components/ArticlesSection";
import { FaqSection } from "./_components/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AboutMediaSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <ArticlesSection />
      <FaqSection />
    </>
  );
}
