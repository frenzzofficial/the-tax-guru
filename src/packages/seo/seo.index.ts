import type { Metadata } from "next";
import { appConfig } from "../configs/app.config";

const seo: Metadata = {
  metadataBase: new URL(appConfig.site.url),

  title: {
    default: appConfig.metadata.title,
    template: appConfig.metadata.titleTemplate,
  },
  description: appConfig.metadata.description,
  keywords: [...appConfig.metadata.keywords],
  authors: [...appConfig.metadata.authors],
  creator: appConfig.metadata.creator,
  publisher: appConfig.metadata.publisher,

  robots: appConfig.metadata.robots,

  openGraph: {
    type: appConfig.metadata.openGraph.type,
    locale: appConfig.metadata.openGraph.locale,
    siteName: appConfig.metadata.openGraph.siteName,
    title: appConfig.metadata.openGraph.title,
    description: appConfig.metadata.openGraph.description,
    images: [...appConfig.metadata.openGraph.images],
  },

  twitter: {
    card: appConfig.metadata.twitter.card,
    title: appConfig.metadata.twitter.title,
    description: appConfig.metadata.twitter.description,
    images: [...appConfig.metadata.twitter.images],
  },

  icons: appConfig.metadata.icons,
};

export default seo;

export function getSeo(title: string, description: string) {
  return {
    title,
    description,
    ...seo,
  };
}
