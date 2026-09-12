import type * as React from "react";

/**
 * Minimal arrow-right glyph used as the default trailing icon for
 * Button/Link primary & accent variants. Kept local (no lucide-react
 * dependency) since this is the only icon currently needed.
 */
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { ArrowRightIcon };
