import { homeConfig } from "@/packages/configs/home.config";

const StatsBar = () => {
  return (
    <section className="border-b border-border/60 bg-secondary py-10 text-secondary-foreground">
      <div className="container-page grid grid-cols-2 gap-6 sm:grid-cols-4">
        {homeConfig.stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="text-2xl font-black text-brand-accent sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-semibold">{stat.label}</p>
            <p className="text-xs text-secondary-foreground/70">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
