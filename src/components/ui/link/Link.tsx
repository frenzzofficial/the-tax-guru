"use client";

import { cva, type VariantProps } from "class-variance-authority";
import NextLink from "next/link";
import * as React from "react";

import { cn } from "@/packages/utils/cn";

const linkVariants = cva(
  [
    "relative inline-flex items-center justify-center",
    "font-medium whitespace-nowrap",
    "outline-none",
    "transition-all duration-300 ease-out",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        // Primary CTA / Button-style Link
        primary: ["ui-action-primary", "rounded-lg", "px-5 py-2.5", "text-sm"],

        button: ["ui-action-primary", "rounded-lg", "px-5 py-2.5", "text-sm"],

        secondary: [
          "ui-action-secondary",
          "rounded-lg",
          "border border-primary/20",
          "bg-primary/5",
          "px-4 py-2",
          "text-sm text-primary",
          "hover:border-primary/40",
          "hover:bg-primary",
          "hover:text-primary-foreground",
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
      variant: "primary",
      size: "md",
    },
  },
);

type LinkProps = React.ComponentProps<typeof NextLink> &
  VariantProps<typeof linkVariants>;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        className={cn(linkVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Link.displayName = "Link";

export { Link, linkVariants };
