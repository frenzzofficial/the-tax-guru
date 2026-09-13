import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/icons/SocialIcons";
import { appConfig } from "@/packages/configs/app.config";
import { buildWhatsAppLink } from "@/packages/utils/whatsapp";

/**
 * Fixed floating "click to chat" WhatsApp button, rendered site-wide
 * from AppClientLayout. Opens a wa.me deep link in a new tab — see
 * buildWhatsAppLink for why this doesn't call the Graph API directly.
 */
const WhatsAppButton = () => {
  const href = buildWhatsAppLink(
    appConfig.contact.whatsapp,
    appConfig.contact.whatsappMessage,
  );

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${appConfig.site.name} on WhatsApp`}
      className="ui-whatsapp-button fixed right-5 bottom-5 z-40 size-14 rounded-full sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </Link>
  );
};

export default WhatsAppButton;
