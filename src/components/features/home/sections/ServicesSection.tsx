import ServiceCard from "@/components/features/services/ServiceCard";
import { Link } from "@/components/ui/link/Link";
import { appConfig } from "@/packages/configs/app.config";
import { homeConfig } from "@/packages/configs/home.config";
import PricingBanner from "./PricingBanner";

const ServicesSection = () => {
  const { services } = homeConfig;

  return (
    <section id="services" className="border-b border-border/60 py-14 lg:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wide text-primary">
              {services.eyebrow}
            </span>
            <h2 className="mt-2 text-foreground">{services.title}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              {services.description}
            </p>
          </div>

          <Link href={appConfig.routes.services} variant="text">
            View All Services
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <PricingBanner />
      </div>
    </section>
  );
};

export default ServicesSection;
