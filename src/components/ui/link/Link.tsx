import { cva, type VariantProps } from "class-variance-authority";
import NextLink from "next/link";
import * as React from "react";

import { ArrowRightIcon } from "@/components/ui/icons/ArrowRightIcon";
import { cn } from "@/packages/utils/cn";

const linkVariants = cva(
  [
    "group relative inline-flex items-center gap-1.5",
    "font-medium",
    "outline-none",
    "transition-all duration-300 ease-out",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        // Plain text nav/footer link — no button chrome. This is the
        // default: most Links in the app are nav items, not CTAs.
        nav: [
          "ui-link-underline",
          "justify-start",
          "text-sm text-primary",
          "hover:text-primary/80",
        ],

        // Inline text link with an animated underline — "Learn more →",
        // "View All Services →"
        text: [
          "ui-link-underline",
          "justify-start",
          "text-sm text-primary",
          "hover:text-primary/80",
        ],

        // Solid brand-gradient CTA link — same look as Button's primary
        primary: [
          "ui-action-primary",
          "justify-center",
          "rounded-lg",
          "px-5 py-2.5",
          "text-sm",
        ],

        // Solid brand-accent (green) CTA link
        accent: [
          "ui-action-accent",
          "justify-center",
          "rounded-lg",
          "px-5 py-2.5",
          "text-sm",
        ],

        // White surface, brand-blue border CTA link — "View Services"
        secondary: [
          "ui-action-secondary",
          "justify-center",
          "rounded-lg",
          "border-2 border-primary/25",
          "bg-background",
          "px-5 py-2.5",
          "text-sm text-primary",
          "hover:border-primary",
          "hover:bg-primary/5",
        ],
      },

      size: {
        sm: "min-h-9",
        md: "min-h-10",
        lg: "min-h-11",
        icon: "size-10",
      },
    },

    defaultVariants: {
      variant: "nav",
      size: "md",
    },
  },
);

type LinkProps = React.ComponentProps<typeof NextLink> &
  VariantProps<typeof linkVariants> & {
    /** Trailing arrow icon — on by default for CTA-style variants. */
    icon?: React.ReactNode | false;
  };

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    const showsIconByDefault =
      variant === "primary" ||
      variant === "accent" ||
      variant === "secondary" ||
      variant === "text";

    const resolvedIcon =
      icon === false
        ? null
        : (icon ??
          (showsIconByDefault && size !== "icon" ? (
            <ArrowRightIcon className="size-4" />
          ) : null));

    return (
      <NextLink
        ref={ref}
        className={cn(linkVariants({ variant, size }), className)}
        {...props}
      >
        {children}
        {resolvedIcon ? (
          <span className="ui-action-icon inline-flex shrink-0">
            {resolvedIcon}
          </span>
        ) : null}
      </NextLink>
    );
  },
);

Link.displayName = "Link";

export { Link, linkVariants };
