import AboutAudience from "@/components/features/about/AboutAudience";
import AboutHero from "@/components/features/about/AboutHero";
import AboutIndustries from "@/components/features/about/AboutIndustries";
import AboutStory from "@/components/features/about/AboutStory";
import AboutValues from "@/components/features/about/AboutValues";
import ContactCtaSection from "@/components/features/home/sections/ContactCtaSection";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutAudience />
      <AboutIndustries />
      <ContactCtaSection />
    </>
  );
};

export default AboutPage;
