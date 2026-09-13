import {
  HeadsetIcon,
  ShieldCheckIcon,
  UsersIcon,
  WalletIcon,
} from "@/components/ui/icons/UtilityIcons";
import { homeConfig } from "@/packages/configs/home.config";

const ICONS = [UsersIcon, WalletIcon, ShieldCheckIcon, HeadsetIcon] as const;

const WhyChooseUsSection = () => {
  const { whyChooseUs } = homeConfig;

  return (
    <section className="border-b border-border/60 bg-muted/30 py-14 lg:py-20">
      <div className="container-page">
        <span className="text-xs font-semibold tracking-wide text-primary">
          {whyChooseUs.eyebrow}
        </span>
        <h2 className="mt-2 text-foreground">{whyChooseUs.title}</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {whyChooseUs.description}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>

                <h3 className="mt-4 text-base font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
