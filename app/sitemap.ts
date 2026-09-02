import type { MetadataRoute } from "next";
import { toolPages } from "@/lib/fonts";
import { galleryPages } from "@/lib/gallery-pages";
import { guides } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const staticPages = ["", "/about", "/contact", "/privacy", "/terms", "/guides"];

  return [
    ...staticPages.map((path) => ({ url: `${base}${path}` })),
    ...toolPages.map((slug) => ({ url: `${base}/tools/${slug}` })),
    ...galleryPages.map((page) => ({ url: `${base}/tools/${page.slug}`, lastModified: page.lastUpdated })),
    ...guides.map((guide) => ({ url: `${base}/guides/${guide.slug}`, lastModified: guide.lastUpdated })),
  ];
}
