import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryToolPage } from "@/components/gallery-tool-page";
import { getGalleryPage } from "@/lib/gallery-pages";

const SLUG = "instagram-font-generator";

export function generateMetadata(): Metadata {
  const page = getGalleryPage(SLUG);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `/tools/${SLUG}` },
    openGraph: { title: page.title, description: page.metaDescription, ...(page.image ? { images: [{ url: page.image.src, width: page.image.width, height: page.image.height, alt: page.image.alt }] } : {}) },
    twitter: { title: page.title, description: page.metaDescription, ...(page.image ? { images: [page.image.src] } : {}) },
  };
}

export default function Page() {
  const page = getGalleryPage(SLUG);
  if (!page) notFound();
  return <GalleryToolPage page={page} />;
}
