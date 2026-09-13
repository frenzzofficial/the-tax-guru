import type { Metadata } from "next";
import ContactPage from "@/components/features/contact/ContactPage";
import { appConfig } from "@/packages/configs/app.config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${appConfig.site.name} — ${appConfig.contact.email}, ${appConfig.contact.offices.map((office) => office.city).join(" & ")} offices.`,
};

export default function Contact() {
  return <ContactPage />;
}
