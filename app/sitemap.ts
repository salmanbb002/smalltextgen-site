import type { MetadataRoute } from "next";
import { toolPages } from "@/lib/fonts";
import { guides } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const staticPages = ["", "/about", "/contact", "/privacy", "/terms", "/guides"];

  return [
    ...staticPages.map((path) => ({ url: `${base}${path}` })),
    ...toolPages.map((slug) => ({ url: `${base}/tools/${slug}` })),
    ...guides.map((guide) => ({ url: `${base}/guides/${guide.slug}`, lastModified: guide.lastUpdated })),
  ];
}
