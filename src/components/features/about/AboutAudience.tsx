import { homeConfig } from "@/packages/configs/home.config";

const AboutAudience = () => {
  const { audience } = homeConfig;

  return (
    <section className="border-b border-border/60 py-14 lg:py-20">
      <div className="container-page">
        <span className="text-xs font-semibold tracking-wide text-primary">
          {audience.eyebrow}
        </span>
        <h2 className="mt-2 text-foreground">{audience.title}</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {audience.description}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audience.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-5"
            >
              <h3 className="text-base font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAudience;
