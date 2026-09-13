import { Link } from "@/components/ui/link/Link";
import type { appConfig } from "@/packages/configs/app.config";

type FooterNavColumnProps = {
  section: (typeof appConfig)["footer"]["navigation"][number];
};

const FooterNavColumn = ({ section }: FooterNavColumnProps) => (
  <div>
    <h3 className="text-sm font-bold text-secondary-foreground">
      {section.title}
    </h3>

    <ul className="mt-4 flex flex-col gap-2.5">
      {section.items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            variant="nav"
            size="sm"
            className="!min-h-0 text-secondary-foreground/70 hover:text-brand-accent"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterNavColumn;
