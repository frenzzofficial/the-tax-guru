import ContactForm from "@/components/features/contact/ContactForm";
import OfficeCard from "@/components/features/contact/OfficeCard";
import { ClockIcon, MailIcon } from "@/components/ui/icons/UtilityIcons";
import { homeConfig } from "@/packages/configs/home.config";

const ContactPanel = () => {
  const { contact } = homeConfig;

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <ContactForm />
      </div>

      <div className="flex flex-col gap-4 lg:col-span-2">
        {contact.offices.map((office) => (
          <OfficeCard key={office.id} office={office} />
        ))}

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-background p-4">
            <MailIcon className="size-4.5 text-primary" />
            <p className="mt-2 text-xs text-muted-foreground">Email</p>
            <p className="text-sm font-semibold text-foreground">
              {contact.email}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-4">
            <ClockIcon className="size-4.5 text-primary" />
            <p className="mt-2 text-xs text-muted-foreground">Hours</p>
            <p className="text-sm font-semibold text-foreground">
              {contact.workingHours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;
