import type { resourcesConfig } from "@/packages/configs/resources.config";

type ResourceCardProps = {
  guide: (typeof resourcesConfig)["guides"][number];
};

const ResourceCard = ({ guide }: ResourceCardProps) => (
  <div className="flex flex-col rounded-2xl border border-border bg-background p-5">
    <span className="w-fit rounded-full bg-primary/10 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide text-primary">
      {guide.category}
    </span>

    <h3 className="mt-3 text-base font-bold text-foreground">{guide.title}</h3>

    <p className="mt-1.5 text-sm text-muted-foreground">{guide.description}</p>
  </div>
);

export default ResourceCard;
