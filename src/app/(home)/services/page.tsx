import type { Metadata } from "next";
import ServicesPage from "@/components/features/services/ServicesPage";
import { appConfig } from "@/packages/configs/app.config";

export const metadata: Metadata = {
  title: "Services",
  description: `Tax, GST, registration and compliance services from ${appConfig.site.name} — GST, income tax, trademark, MSME, IEC, FSSAI, PF/ESI and business registration.`,
};

export default function Services() {
  return <ServicesPage />;
}
