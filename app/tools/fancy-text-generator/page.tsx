import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryToolPage } from "@/components/gallery-tool-page";
import { getGalleryPage } from "@/lib/gallery-pages";

const SLUG = "fancy-text-generator";

export function generateMetadata(): Metadata {
  const page = getGalleryPage(SLUG);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `/tools/${SLUG}` },
    openGraph: { title: page.title, description: page.metaDescription },
    twitter: { title: page.title, description: page.metaDescription },
  };
}

export default function Page() {
  const page = getGalleryPage(SLUG);
  if (!page) notFound();
  return <GalleryToolPage page={page} />;
}
