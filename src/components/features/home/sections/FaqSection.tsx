import { CheckIcon } from "@/components/ui/icons/UtilityIcons";
import { Link } from "@/components/ui/link/Link";
import { homeConfig } from "@/packages/configs/home.config";
import FaqAccordion from "./FaqAccordion";

const FaqSection = () => {
  const { faq } = homeConfig;

  return (
    <section className="border-b border-border/60 bg-muted/30 py-14 lg:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wide text-primary">
              {faq.eyebrow}
            </span>
            <h2 className="mt-2 text-foreground">{faq.title}</h2>
          </div>

          <Link href={faq.action.href} variant="text">
            {faq.action.label}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FaqAccordion items={faq.items} />
          </div>

          <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
            <h3 className="text-lg font-bold">
              {faq.stillHaveQuestions.title}
            </h3>
            <p className="mt-1 text-sm text-primary-foreground/80">
              {faq.stillHaveQuestions.description}
            </p>

            <ul className="mt-4 flex flex-col gap-2">
              {faq.stillHaveQuestions.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-primary-foreground/90"
                >
                  <CheckIcon className="size-4 text-brand-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href={faq.stillHaveQuestions.action.href}
              variant="accent"
              size="sm"
              className="mt-5 w-full justify-center"
            >
              {faq.stillHaveQuestions.action.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
