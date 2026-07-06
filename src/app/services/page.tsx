import { ServicesHero } from "./_components/ServicesHero";
import { ServicesNav } from "./_components/ServicesNav";
import { ServicesList } from "./_components/ServicesList";
import { EngagementModels } from "./_components/EngagementModels";

export { metadata } from "./metadata";

export default function ServicesPage() {
  return (
    <div className="flex-1 bg-white">
      <ServicesHero />
      <div className="relative">
        <ServicesNav />
        <ServicesList />
      </div>
      <EngagementModels />
    </div>
  );
}
