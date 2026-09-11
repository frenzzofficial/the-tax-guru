import type { Metadata } from "next";
import { appConfig } from "../configs/app.config";

const seo: Metadata = {
  title: appConfig.metadata.title,
  description: appConfig.metadata.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appConfig.site.url,
    images: [
      {
        url: `${appConfig.site.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "The Tax Guru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tax Guru",
    description: appConfig.metadata.description,
    images: [
      {
        url: "https://the-tax-guru.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Tax Guru",
      },
    ],
  },
};

export default seo;

export function getSeo(title: string, description: string) {
  return {
    title,
    description,
    ...seo,
  };
}
