import { ServicesHero } from "./_components/ServicesHero";
import { ServicesNav } from "./_components/ServicesNav";
import { ServicesList } from "./_components/ServicesList";

export { metadata } from "./metadata";

export default function ServicesPage() {
  return (
    <div className="flex-1 bg-white">
      <ServicesHero />
      <ServicesNav />
      <ServicesList />
    </div>
  );
}
