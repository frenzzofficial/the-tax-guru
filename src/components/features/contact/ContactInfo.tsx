import { MailIcon, PhoneIcon } from "@/components/ui/icons/UtilityIcons";
import { appConfig } from "@/packages/configs/app.config";

const ContactInfo = () => {
  return (
    <>
      {appConfig.contact.phone.map((phone) => (
        <a
          key={phone}
          href={`tel:${phone}`}
          className="inline-flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100"
        >
          <PhoneIcon className="size-3.5" />
          {phone}
        </a>
      ))}
      <a
        href={`mailto:${appConfig.contact.email}`}
        className="inline-flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100"
      >
        <MailIcon className="size-3.5" />
        {appConfig.contact.email}
      </a>
    </>
  );
};

export default ContactInfo;
