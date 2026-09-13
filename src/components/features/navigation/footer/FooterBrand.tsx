import { NavigationLogo } from "@/components/ui";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/ui/icons/SocialIcons";
import { appConfig } from "@/packages/configs/app.config";

const socialLinks = [
  { label: "Twitter", href: appConfig.social.twitter, Icon: TwitterIcon },
  { label: "LinkedIn", href: appConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: appConfig.social.github, Icon: GithubIcon },
].filter((entry) => entry.href && entry.href !== "/");

const FooterBrand = () => (
  <div className="max-w-xs">
    <NavigationLogo className="h-12 w-auto" />

    <p className="mt-4 text-sm text-secondary-foreground/70">
      {appConfig.footer.description}
    </p>

    {socialLinks.length > 0 ? (
      <div className="mt-5 flex items-center gap-3">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-full border border-secondary-foreground/15 text-secondary-foreground/80 transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>
    ) : null}
  </div>
);

export default FooterBrand;
