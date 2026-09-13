import { Link } from "@/components/ui/link/Link";
import { appConfig } from "@/packages/configs/app.config";

const ServicesHero = () => (
  <section className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-background py-14 lg:py-16">
    <div className="container-page text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
        <span className="size-1.5 rounded-full bg-brand-accent" />
        OUR SERVICES
      </span>

      <h1 className="mx-auto mt-5 max-w-2xl text-foreground">
        Everything your business needs, under one roof.
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        Registrations, filings and compliance support — practical guidance from
        one trusted tax and compliance partner.
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <Link href={appConfig.routes.contact} variant="primary" size="lg">
          Talk to an Expert
        </Link>
        <Link href="#services-grid" variant="secondary" size="lg" icon={false}>
          Browse Services
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesHero;
