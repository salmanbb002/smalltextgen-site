import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LastUpdated } from "@/components/last-updated";
import { RichParagraph, RichText } from "@/components/rich-text";
import { getGuide, getRelatedGuides, guides, stripInlineLinks } from "@/lib/guides";
import { breadcrumbSchema, faqPageSchema, jsonLdGraph } from "@/lib/schema";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.metaDescription },
    twitter: { title: guide.title, description: guide.metaDescription },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(guide);
  const schema = jsonLdGraph([
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
      { name: guide.h1, path: `/guides/${guide.slug}` },
    ]),
    {
      "@type": "Article",
      headline: guide.h1,
      description: guide.metaDescription,
      datePublished: guide.lastUpdated,
      dateModified: guide.lastUpdated,
      author: { "@type": "Organization", name: "SmallTextGen", url: siteUrl },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntityOfPage: `${siteUrl}/guides/${guide.slug}`,
    },
    ...(guide.faq.length
      ? [faqPageSchema(guide.faq.map((item) => ({ question: item.question, answer: stripInlineLinks(item.answer) })))]
      : []),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="tool-hero guide-hero">
        <Link href="/guides" className="back-link"><ArrowLeft size={16} /> All guides</Link>
        <div className="breadcrumbs" aria-label="Breadcrumb">
          Home <span>/</span> Guides <span>/</span> {guide.h1}
        </div>
        <span className="eyebrow">Guide</span>
        <h1>{guide.h1}</h1>
        <p>{guide.dek}</p>
        <LastUpdated date={guide.lastUpdated} />
        <div className="guide-pillar-cta">
          {guide.pillarLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              Open the {link.label} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <article className="info-page guide-body">
        <div className="info-content">
          {guide.intro.map((paragraph, index) => (
            <RichParagraph text={paragraph} key={index} className="guide-intro-paragraph" />
          ))}
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <RichParagraph text={paragraph} key={index} />
              ))}
            </section>
          ))}
        </div>
      </article>

      {guide.faq.length > 0 && (
        <section className="faq-section" aria-labelledby="guide-faq-title">
          <div className="section-intro">
            <span className="section-index">FAQ</span>
            <div><h2 id="guide-faq-title">Frequently asked questions</h2></div>
          </div>
          <div className="faq-list">
            {guide.faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<span className="faq-plus">+</span></summary>
                <p><RichText text={item.answer} /></p>
              </details>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="related-tools">
          <span className="section-index">Keep reading</span>
          <h2>More guides on this topic.</h2>
          <div>
            {related.map((item) => (
              <Link href={`/guides/${item.slug}`} key={item.slug}>
                <span>Guide</span><strong>{item.h1}</strong><ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
