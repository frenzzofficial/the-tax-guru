import { CheckIcon } from "@/components/ui/icons/UtilityIcons";
import { aboutConfig } from "@/packages/configs/about.config";

const AboutValues = () => {
  const { mission, values } = aboutConfig;

  return (
    <section className="border-b border-border/60 bg-muted/30 py-14 lg:py-20">
      <div className="container-page">
        <div className="rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8">
          <h2 className="text-primary-foreground">{mission.title}</h2>
          <p className="mt-2 max-w-2xl text-primary-foreground/80">
            {mission.description}
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-background p-5"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckIcon className="size-4" />
              </span>
              <h3 className="mt-3 text-base font-bold text-foreground">
                {value.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
