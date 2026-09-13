import { CheckIcon } from "@/components/ui/icons/UtilityIcons";
import { Link } from "@/components/ui/link/Link";
import { homeConfig } from "@/packages/configs/home.config";

const ContactCtaSection = () => {
  const { contactCta } = homeConfig;

  return (
    <section className="bg-primary py-14 text-primary-foreground lg:py-16">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <span className="text-xs font-semibold tracking-wide text-brand-accent">
            {contactCta.eyebrow}
          </span>
          <h2 className="mt-2 text-primary-foreground">{contactCta.title}</h2>
          <p className="mt-3 max-w-lg text-primary-foreground/80">
            {contactCta.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href={contactCta.actions.primary.href} variant="accent">
              {contactCta.actions.primary.label}
            </Link>

            <a
              href={contactCta.actions.secondary.href}
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {contactCta.actions.secondary.label}
            </a>
          </div>
        </div>

        <ul className="flex flex-col gap-3">
          {contactCta.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-sm font-medium text-primary-foreground"
            >
              <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15">
                <CheckIcon className="size-3.5" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactCtaSection;
