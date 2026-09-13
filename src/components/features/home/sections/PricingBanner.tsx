import { Link } from "@/components/ui/link/Link";
import { appConfig } from "@/packages/configs/app.config";
import { homeConfig } from "@/packages/configs/home.config";

const PricingBanner = () => {
  const { pricing } = homeConfig;

  return (
    <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-secondary px-6 py-6 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span className="text-xs font-semibold tracking-wide text-brand-accent">
          {pricing.eyebrow}
        </span>
        <p className="mt-1 text-lg font-bold">{pricing.title}</p>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        {pricing.items.map((item) => (
          <div key={item.href}>
            <p className="text-xs text-secondary-foreground/70">
              {item.service}
            </p>
            <p className="text-lg font-bold text-brand-accent">{item.price}</p>
          </div>
        ))}

        <Link
          href={appConfig.routes.services}
          variant="accent"
          size="sm"
          icon={false}
        >
          View All Pricing
        </Link>
      </div>
    </div>
  );
};

export default PricingBanner;
