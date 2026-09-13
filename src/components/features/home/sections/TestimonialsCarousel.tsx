"use client";

import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteIcon,
} from "@/components/ui/icons/UtilityIcons";
import type { homeConfig } from "@/packages/configs/home.config";

type TestimonialsCarouselProps = {
  items: (typeof homeConfig)["testimonials"]["items"];
};

const TestimonialsCarousel = ({ items }: TestimonialsCarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const goTo = (index: number) => {
    setActiveIndex(((index % items.length) + items.length) % items.length);
  };

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-3">
        {items.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="rounded-2xl border border-border bg-background p-5 transition-opacity"
            style={{
              opacity: index === activeIndex ? 1 : 0.5,
            }}
          >
            <QuoteIcon className="size-6 text-primary/30" />

            <p className="mt-3 text-sm text-muted-foreground">
              {testimonial.quote}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {testimonial.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.service}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => goTo(activeIndex - 1)}
          className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeftIcon className="size-4" />
        </button>

        {items.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => goTo(index)}
            className="size-2 rounded-full transition-colors"
            style={{
              backgroundColor:
                index === activeIndex ? "var(--primary)" : "var(--border)",
            }}
          />
        ))}

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => goTo(activeIndex + 1)}
          className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRightIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
