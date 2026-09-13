import { homeConfig } from "@/packages/configs/home.config";

const ProcessSection = () => {
  const { process } = homeConfig;

  return (
    <section className="border-b border-border/60 py-14 lg:py-20">
      <div className="container-page">
        <span className="text-xs font-semibold tracking-wide text-primary">
          {process.eyebrow}
        </span>
        <h2 className="mt-2 text-foreground">{process.title}</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {process.description}
        </p>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step) => (
            <li key={step.number} className="relative">
              <span className="text-3xl font-black text-primary/15">
                {step.number}
              </span>
              <h3 className="mt-2 text-base font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
