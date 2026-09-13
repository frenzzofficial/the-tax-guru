import ContactCtaSection from "@/components/features/home/sections/ContactCtaSection";
import FaqSection from "@/components/features/home/sections/FaqSection";
import HeroSection from "@/components/features/home/sections/HeroSection";
import HomeContactSection from "@/components/features/home/sections/HomeContactSection";
import ProcessSection from "@/components/features/home/sections/ProcessSection";
import ServicesSection from "@/components/features/home/sections/ServicesSection";
import StatsBar from "@/components/features/home/sections/StatsBar";
import TestimonialsSection from "@/components/features/home/sections/TestimonialsSection";
import WhyChooseUsSection from "@/components/features/home/sections/WhyChooseUsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <StatsBar />
      <TestimonialsSection />
      <FaqSection />
      <ContactCtaSection />
      <HomeContactSection />
    </>
  );
};

export default HomePage;
