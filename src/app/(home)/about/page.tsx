import type { Metadata } from "next";
import AboutPage from "@/components/features/about/AboutPage";
import { appConfig } from "@/packages/configs/app.config";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${appConfig.site.name} — ${appConfig.site.tagline}.`,
};

export default function About() {
  return <AboutPage />;
}
