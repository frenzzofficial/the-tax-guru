import { CheckIcon, HeadsetIcon } from "@/components/ui/icons/UtilityIcons";
import { Link } from "@/components/ui/link/Link";
import { homeConfig } from "@/packages/configs/home.config";

const HeroSection = () => {
  const { hero } = homeConfig;

  return (
    <section className="overflow-hidden border-b border-border/60 bg-linear-to-b from-primary/5 to-background">
      <div className="container-page grid gap-10 py-12 sm:py-14 md:gap-12 lg:grid-cols-2 lg:items-center lg:py-5">
        {/* Left column */}
        <div className="flex items-center justify-center text-center lg:justify-start lg:text-left">
          <div className="flex max-w-xl flex-col items-center md:items-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
              <span className="size-1.5 rounded-full bg-brand-accent" />
              {hero.eyebrow}
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {hero.title.lineOne}
              <br />
              <span className="text-primary">{hero.title.lineTwo}</span>
            </h1>

            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 md:flex-row md:flex-wrap lg:items-start lg:justify-start">
              <Link
                href={hero.actions.primary.href}
                variant="primary"
                size="lg"
                style={{
                  color: "white",
                }}
              >
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

            <ul className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 lg:justify-start">
              {hero.trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckIcon className="size-4 text-brand-accent-foreground" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="rounded-2xl border border-border bg-background p-4 shadow-xl shadow-primary/10 sm:p-6">
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
                  className="flex flex-col gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
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
                    className="w-fit shrink-0 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold"
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
