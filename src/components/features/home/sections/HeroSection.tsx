import { CheckIcon, HeadsetIcon } from "@/components/ui/icons/UtilityIcons";
import { Link } from "@/components/ui/link/Link";
import { homeConfig } from "@/packages/configs/home.config";

const HeroSection = () => {
  const { hero } = homeConfig;

  return (
    <section className="overflow-hidden border-b border-border/60 bg-linear-to-b from-primary/5 to-background">
      <div className="container-page grid gap-12 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
            <span className="size-1.5 rounded-full bg-brand-accent" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-5 text-foreground">
            {hero.title.lineOne}
            <br />
            <span className="text-primary">{hero.title.lineTwo}</span>
          </h1>

          <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link href={hero.actions.primary.href} variant="primary" size="lg">
              {hero.actions.primary.label}
            </Link>

            <Link
              href={hero.actions.secondary.href}
              variant="secondary"
              size="lg"
              icon={false}
            >
              {hero.actions.secondary.label}
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {hero.trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckIcon className="size-4 text-brand-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — compliance snapshot card */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-border bg-background p-6 shadow-xl shadow-primary/10">
            <span className="text-xs font-semibold tracking-wide text-primary">
              {hero.visual.eyebrow}
            </span>
            <h2 className="mt-1 text-lg font-bold text-foreground">
              {hero.visual.title}
            </h2>

            <ul className="mt-5 flex flex-col gap-3">
              {hero.visual.items.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <span
                    className="shrink-0 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold"
                    style={
                      item.status === "Ready"
                        ? {
                            color: "var(--brand-accent-foreground)",
                            backgroundColor:
                              "color-mix(in oklch, var(--brand-accent) 30%, white)",
                          }
                        : {
                            color: "var(--primary)",
                            backgroundColor: "var(--muted)",
                          }
                    }
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={hero.visual.cta.href}
              variant="primary"
              className="mt-5 w-full justify-center"
              icon={false}
            >
              <HeadsetIcon className="size-4" />
              {hero.visual.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
