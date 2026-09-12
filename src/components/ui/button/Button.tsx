import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { ArrowRightIcon } from "@/components/ui/icons/ArrowRightIcon";
import { cn } from "@/packages/utils/cn";

const buttonVariants = cva(
  [
    "group relative inline-flex items-center justify-center gap-2",
    "font-medium whitespace-nowrap",
    "outline-none select-none",
    "transition-all duration-300 ease-out",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        // Solid brand-gradient CTA — "Get Started", "Talk to a tax expert"
        primary: ["ui-action-primary", "rounded-lg", "px-5 py-2.5", "text-sm"],

        // Solid brand-accent (green) CTA — "Get a Free Consultation"
        accent: ["ui-action-accent", "rounded-lg", "px-5 py-2.5", "text-sm"],

        // White surface, brand-blue border — "View Services"
        secondary: [
          "ui-action-secondary",
          "rounded-lg",
          "border-2 border-primary/25",
          "bg-background",
          "px-5 py-2.5",
          "text-sm text-primary",
          "hover:border-primary",
          "hover:bg-primary/5",
        ],

        // Neutral, low-emphasis border — tertiary actions
        outline: [
          "ui-action-outline",
          "rounded-lg",
          "border border-border",
          "bg-background",
          "px-5 py-2.5",
          "text-sm text-foreground",
          "hover:border-primary",
          "hover:bg-primary/5",
          "hover:text-primary",
        ],

        // Plain text link styled as a button — used inline in copy
        link: [
          "ui-link-underline",
          "rounded-md",
          "px-1 py-0.5",
          "text-sm text-primary",
          "hover:text-primary/80",
        ],
      },

      size: {
        sm: ["min-h-9", "px-4 py-2", "text-xs"],

        md: ["min-h-10"],

        lg: ["min-h-11", "px-6 py-3", "text-base"],

        icon: ["size-10", "p-0"],
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /**
     * Show the trailing arrow icon (on by default for primary/accent/
     * secondary CTAs, matching the Figma buttons). Pass `false` to
     * suppress it, or pass a custom node to override the icon.
     */
    icon?: React.ReactNode | false;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, type = "button", icon, children, ...props },
    ref,
  ) => {
    const showsIconByDefault =
      variant === "primary" ||
      variant === "accent" ||
      variant === "secondary" ||
      variant === undefined;

    const resolvedIcon =
      icon === false
        ? null
        : (icon ??
          (showsIconByDefault && size !== "icon" ? (
            <ArrowRightIcon className="size-4" />
          ) : null));

    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
        {resolvedIcon ? (
          <span className="ui-action-icon inline-flex shrink-0">
            {resolvedIcon}
          </span>
        ) : null}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
