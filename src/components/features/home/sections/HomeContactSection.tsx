import ContactPanel from "@/components/features/contact/ContactPanel";
import { homeConfig } from "@/packages/configs/home.config";

const HomeContactSection = () => {
  const { contact } = homeConfig;

  return (
    <section id="contact" className="border-b border-border/60 py-14 lg:py-20">
      <div className="container-page">
        <span className="text-xs font-semibold tracking-wide text-primary">
          {contact.eyebrow}
        </span>
        <h2 className="mt-2 text-foreground">{contact.title}</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {contact.description}
        </p>

        <div className="mt-10">
          <ContactPanel />
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;
