"use client";

import * as React from "react";
import ResourceCard from "@/components/features/resources/ResourceCard";
import type { resourcesConfig } from "@/packages/configs/resources.config";

type ResourceFilterGridProps = {
  categories: (typeof resourcesConfig)["categories"];
  guides: (typeof resourcesConfig)["guides"];
};

const ResourceFilterGrid = ({
  categories,
  guides,
}: ResourceFilterGridProps) => {
  const [activeCategory, setActiveCategory] =
    React.useState<(typeof categories)[number]>("All");

  const visibleGuides =
    activeCategory === "All"
      ? guides
      : guides.filter((guide) => guide.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
              style={
                isActive
                  ? {
                      borderColor: "var(--primary)",
                      backgroundColor: "var(--primary)",
                      color: "var(--primary-foreground)",
                    }
                  : {
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleGuides.map((guide) => (
          <ResourceCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
};

export default ResourceFilterGrid;
