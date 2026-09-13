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

const CheckIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ChevronDownIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ChevronLeftIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const HeadsetIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
    <path d="M21 15v2a3 3 0 0 1-3 3h-2" />
    <rect x="3" y="14" width="4" height="6" rx="1.5" />
    <rect x="17" y="14" width="4" height="6" rx="1.5" />
  </svg>
);

const QuoteIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M9.5 7C6.5 8.5 5 10.8 5 13.6c0 2.1 1.3 3.4 3 3.4 1.6 0 2.8-1.2 2.8-2.7 0-1.4-1-2.5-2.3-2.6.3-1.6 1.6-3 3.3-3.8L9.5 7Zm9 0c-3 1.5-4.5 3.8-4.5 6.6 0 2.1 1.3 3.4 3 3.4 1.6 0 2.8-1.2 2.8-2.7 0-1.4-1-2.5-2.3-2.6.3-1.6 1.6-3 3.3-3.8L18.5 7Z" />
  </svg>
);

const UsersIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShieldCheckIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const WalletIcon = (props: IconProps) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, aria-hidden via `base`
  <svg {...base} {...props}>
    <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3" />
    <path d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-4a2 2 0 0 1 0-4h4a1 1 0 0 0 1-1" />
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
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeadsetIcon,
  QuoteIcon,
  UsersIcon,
  ShieldCheckIcon,
  WalletIcon,
};
