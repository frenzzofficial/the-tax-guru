import type { Metadata } from "next";
import ResourcesPage from "@/components/features/resources/ResourcesPage";
import { appConfig } from "@/packages/configs/app.config";

export const metadata: Metadata = {
  title: "Resources",
  description: `Tax and compliance guides from ${appConfig.site.name} — GST, income tax, registrations and compliance explained.`,
};

export default function Resources() {
  return <ResourcesPage />;
}
