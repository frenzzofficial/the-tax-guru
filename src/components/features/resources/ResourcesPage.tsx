import ResourceFilterGrid from "@/components/features/resources/ResourceFilterGrid";
import ResourcesCta from "@/components/features/resources/ResourcesCta";
import ResourcesHero from "@/components/features/resources/ResourcesHero";
import { resourcesConfig } from "@/packages/configs/resources.config";

const ResourcesPage = () => {
  return (
    <>
      <ResourcesHero />

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <ResourceFilterGrid
            categories={resourcesConfig.categories}
            guides={resourcesConfig.guides}
          />
        </div>
      </section>

      <ResourcesCta />
    </>
  );
};

export default ResourcesPage;
