import { Link } from "@/components/ui/link/Link";
import { resourcesConfig } from "@/packages/configs/resources.config";

const ResourcesCta = () => {
  const { cta } = resourcesConfig;

  return (
    <section className="border-t border-border/60 bg-muted/30 py-14 lg:py-16">
      <div className="container-page text-center">
        <h2 className="text-foreground">{cta.title}</h2>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          {cta.description}
        </p>

        <Link
          href={cta.action.href}
          variant="primary"
          className="mt-6 inline-flex"
        >
          {cta.action.label}
        </Link>
      </div>
    </section>
  );
};

export default ResourcesCta;
