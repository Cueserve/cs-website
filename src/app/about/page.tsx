export { metadata } from "./metadata";
import { AboutHero } from "./_components/AboutHero";
import { AboutPhilosophy } from "./_components/AboutPhilosophy";
import { AboutMissionVision } from "./_components/AboutMissionVision";
import { AboutExpertise } from "./_components/AboutExpertise";
import { AboutTeam } from "./_components/AboutTeam";
import { AboutWhereWeWork } from "./_components/AboutWhereWeWork";

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      <AboutHero />
      <AboutPhilosophy />
      <AboutMissionVision />
      <AboutExpertise />
      <AboutTeam />
      <AboutWhereWeWork />
    </main>
  );
}