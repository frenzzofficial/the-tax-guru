import { Link } from "@/components/ui/link/Link";
import type { services } from "@/packages/configs/services.config";

type ServiceCardProps = {
  service: (typeof services)[number];
};

const ServiceCard = ({ service }: ServiceCardProps) => (
  <div className="group flex flex-col rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/40">
    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
      {service.shortTitle}
    </span>

    <h3 className="mt-4 text-base font-bold text-foreground">
      {service.title}
    </h3>

    <p className="mt-1.5 text-sm text-muted-foreground">
      {service.description}
    </p>

    <Link
      href={service.href}
      variant="text"
      size="sm"
      className="mt-4 px-0 py-0"
    >
      Learn more
    </Link>
  </div>
);

export default ServiceCard;
