import ServiceCard from "@/components/features/services/ServiceCard";
import { services } from "@/packages/configs/services.config";

const ServicesGrid = () => (
  <section id="services-grid" className="py-14 lg:py-20">
    <div className="container-page">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} showPrice />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
