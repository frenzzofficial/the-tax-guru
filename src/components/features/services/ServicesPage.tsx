import ContactCtaSection from "@/components/features/home/sections/ContactCtaSection";
import ServicesGrid from "@/components/features/services/ServicesGrid";
import ServicesHero from "@/components/features/services/ServicesHero";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ContactCtaSection />
    </>
  );
};

export default ServicesPage;
