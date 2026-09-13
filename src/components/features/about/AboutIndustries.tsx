import { aboutConfig } from "@/packages/configs/about.config";

const AboutIndustries = () => (
  <section className="border-b border-border/60 bg-muted/30 py-14 lg:py-16">
    <div className="container-page text-center">
      <h2 className="text-foreground">Industries we work with</h2>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {aboutConfig.industries.map((industry) => (
          <span
            key={industry}
            className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
          >
            {industry}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default AboutIndustries;
