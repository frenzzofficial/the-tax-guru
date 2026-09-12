import type * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const PhoneIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

const MapPinIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const MenuIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const SearchIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

export {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  MenuIcon,
  CloseIcon,
  SearchIcon,
};
