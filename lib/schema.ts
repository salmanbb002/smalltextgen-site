import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export function organizationSchema() {
  const sameAs = (process.env.NEXT_PUBLIC_SOCIAL_LINKS ?? "")
    .split(",")
    .map((link) => link.trim())
    .filter(Boolean);

  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "SmallTextGen",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/og-image.svg`,
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export type FaqEntry = { question: string; answer: string };

export function faqPageSchema(entries: FaqEntry[]) {
  return {
    "@type": "FAQPage",
    mainEntity: entries.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function jsonLdGraph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
