import FooterBottomBar from "@/components/features/navigation/footer/FooterBottomBar";
import FooterBrand from "@/components/features/navigation/footer/FooterBrand";
import FooterNavColumn from "@/components/features/navigation/footer/FooterNavColumn";
import FooterNewsletter from "@/components/features/navigation/footer/FooterNewsletter";
import { appConfig } from "@/packages/configs/app.config";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <FooterNewsletter />

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
        <FooterBrand />

        {appConfig.footer.navigation.map((section) => (
          <FooterNavColumn key={section.title} section={section} />
        ))}
      </div>

      <FooterBottomBar />
    </footer>
  );
};

export default Footer;
