"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/packages/utils/cn";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center",
    "font-medium whitespace-nowrap",
    "outline-none",
    "transition-all duration-300 ease-out",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary: ["ui-action-primary", "rounded-lg", "px-5 py-2.5", "text-sm"],

        secondary: [
          "ui-action-secondary",
          "rounded-lg",
          "border border-primary/20",
          "bg-primary/5",
          "px-5 py-2.5",
          "text-sm text-background",
          "hover:border-primary/40",
          "hover:bg-primary",
          "hover:text-primary-foreground",
        ],

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
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
