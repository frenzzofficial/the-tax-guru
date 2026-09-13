"use client";

import * as React from "react";
import { ChevronDownIcon } from "@/components/ui/icons/UtilityIcons";
import type { homeConfig } from "@/packages/configs/home.config";

type FaqAccordionProps = {
  items: (typeof homeConfig)["faq"]["items"];
};

const FaqAccordion = ({ items }: FaqAccordionProps) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-background">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-foreground">
                {item.question}
              </span>

              <ChevronDownIcon
                className="size-4 shrink-0 text-muted-foreground transition-transform duration-300"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {isOpen ? (
              <p className="px-5 pb-4 text-sm text-muted-foreground">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
