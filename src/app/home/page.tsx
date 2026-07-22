export { metadata } from "./metadata";

import { HeroSection } from "./_components/HeroSection";
import { AboutSection } from "./_components/AboutSection";
import { AboutMediaSection } from "./_components/AboutMediaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AboutMediaSection />
    </>
  );
}
