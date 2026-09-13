import { aboutConfig } from "@/packages/configs/about.config";

const AboutHero = () => {
  const { hero, stats } = aboutConfig;

  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-background py-14 lg:py-16">
      <div className="container-page text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
          <span className="size-1.5 rounded-full bg-brand-accent" />
          {hero.eyebrow}
        </span>

        <h1 className="mx-auto mt-5 max-w-2xl text-foreground">{hero.title}</h1>

        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          {hero.description}
        </p>

        <div className="mx-auto mt-8 flex max-w-sm items-center justify-center gap-10">
          <div>
            <p className="text-2xl font-black text-primary">
              {stats.experience}
            </p>
            <p className="text-xs text-muted-foreground">
              {stats.experienceLabel}
            </p>
          </div>
          <div className="h-10 w-px bg-border" />
          <div>
            <p className="text-2xl font-black text-primary">{stats.clients}</p>
            <p className="text-xs text-muted-foreground">
              {stats.clientsLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
