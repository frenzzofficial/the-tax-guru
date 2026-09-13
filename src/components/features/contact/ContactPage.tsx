import ContactPanel from "@/components/features/contact/ContactPanel";
import { homeConfig } from "@/packages/configs/home.config";

const ContactPage = () => {
  const { contact } = homeConfig;

  return (
    <>
      <section className="border-b border-border/60 bg-linear-to-b from-primary/5 to-background py-14 lg:py-16">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
            <span className="size-1.5 rounded-full bg-brand-accent" />
            {contact.eyebrow}
          </span>

          <h1 className="mx-auto mt-5 max-w-2xl text-foreground">
            {contact.title}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {contact.description}
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <ContactPanel />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
