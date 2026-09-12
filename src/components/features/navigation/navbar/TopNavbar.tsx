import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/ui/icons/SocialIcons";
import { ClockIcon, MapPinIcon } from "@/components/ui/icons/UtilityIcons";
import { appConfig } from "@/packages/configs/app.config";
import ContactInfo from "../../contact/ContactInfo";

const socialLinks = [
  { label: "Twitter", href: appConfig.social.twitter, Icon: TwitterIcon },
  { label: "LinkedIn", href: appConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: appConfig.social.github, Icon: GithubIcon },
].filter((entry) => entry.href && entry.href !== "/");
const TopNavbar = () => {
  return (
    <div className="hidden bg-secondary text-secondary-foreground md:block px-5">
      <div className="container-page flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <ContactInfo />
        </div>

        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 opacity-90">
            <MapPinIcon className="size-3.5" />
            {appConfig.contact.offices.map((office) => office.city).join(" | ")}
          </span>

          <span className="inline-flex items-center gap-1.5 opacity-90">
            <ClockIcon className="size-3.5" />
            {appConfig.contact.workingHours.days} ·{" "}
            {appConfig.contact.workingHours.time}
          </span>

          {socialLinks.length > 0 ? (
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 transition-opacity hover:opacity-100"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
