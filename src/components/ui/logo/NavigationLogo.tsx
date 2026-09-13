import Image from "next/image";
import NextLink from "next/link";
import { appConfig } from "@/packages/configs/app.config";

type NavigationLogoProps = {
  /** Override the default site logo — useful for a dark/light variant swap. */
  src?: string;
  width?: number;
  height?: number;
  className?: string;
};

/**
 * The site logo, pre-wired to `appConfig.site.logo` and linked to home —
 * drop straight into Header without passing src/alt/href every time.
 *
 * Default size (40) is tuned for a header/nav bar. Pass a larger explicit
 * `width`/`height` for contexts like the footer brand column.
 */
const NavigationLogo = ({
  src,
  width = 168,
  height = 54,
  className,
}: NavigationLogoProps) => (
  <NextLink
    href={appConfig.routes.home}
    aria-label={`${appConfig.app.name} — home`}
    className="inline-flex items-center gap-2"
  >
    <div className="hidden flex-col leading-tight sm:flex">
      <Image
        src={src ?? appConfig.site.logo.src}
        alt={appConfig.site.logo.alt}
        width={width}
        height={height}
        className={className ?? "h-10 w-auto"}
        priority
      />
    </div>
  </NextLink>
);

NavigationLogo.displayName = "NavigationLogo";

export default NavigationLogo;
