import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { appConfig } from "@/packages/configs/app.config";

const BASE_URL = appConfig.site.url;
const SERVICE_SLUGS = appConfig.services.map((service) => service.id);
const LOCATION_SLUGS = appConfig.locations;

const getBlogSlugs = (): string[] => {
  const blogDir = path.join(process.cwd(), "content", "blogs");

  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
};

const sitemap = (): MetadataRoute.Sitemap => {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}${appConfig.routes.services}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}${appConfig.routes.about}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}${appConfig.routes.contact}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const locationRoutes: MetadataRoute.Sitemap = LOCATION_SLUGS.map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getBlogSlugs().map((slug) => ({
    url: `${BASE_URL}/blogs/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
};

export default sitemap;
