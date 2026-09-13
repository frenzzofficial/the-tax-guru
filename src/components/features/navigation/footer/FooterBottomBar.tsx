import { Link } from "@/components/ui/link/Link";
import { appConfig } from "@/packages/configs/app.config";

const FooterBottomBar = () => (
  <div className="border-t border-secondary-foreground/10 py-5">
    <div className="container-page flex flex-col gap-3 text-xs text-secondary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
      <p>{appConfig.footer.copyright}</p>

      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {appConfig.footer.legal.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              variant="nav"
              size="sm"
              className="!min-h-0 text-secondary-foreground/60 hover:text-brand-accent"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FooterBottomBar;
