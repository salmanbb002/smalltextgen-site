import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Converter } from "@/components/converter";
import { LastUpdated } from "@/components/last-updated";
import { RichParagraph, RichText } from "@/components/rich-text";
import { getStyle, toolPages } from "@/lib/fonts";
import { getGuide, stripInlineLinks } from "@/lib/guides";
import type { GalleryPage } from "@/lib/gallery-pages";
import { breadcrumbSchema, faqPageSchema, jsonLdGraph } from "@/lib/schema";

const toolPageSet = new Set<string>(toolPages);

export function GalleryToolPage({ page }: { page: GalleryPage }) {
  const featured = page.featuredStyleSlugs
    .map((slug) => {
      const style = getStyle(slug);
      return style ? { slug, name: style.name, preview: style.transform("Sample") } : null;
    })
    .filter((item): item is { slug: string; name: string; preview: string } => Boolean(item));

  const relatedTools = page.relatedToolSlugs
    .map((slug) => {
      const style = getStyle(slug);
      return style ? { slug, name: style.name, preview: style.transform("Aa") } : null;
    })
    .filter((item): item is { slug: string; name: string; preview: string } => Boolean(item));

  const relatedGuides = page.relatedGuideSlugs
    .map((slug) => getGuide(slug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  const schema = jsonLdGraph([
    {
      "@type": "WebApplication",
      name: page.h1,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Tools", path: "/#generator" },
      { name: page.h1, path: `/tools/${page.slug}` },
    ]),
    {
      "@type": "HowTo",
      name: `How to use the ${page.h1.toLowerCase()}`,
      step: page.howToSteps.map((text, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        text: stripInlineLinks(text),
      })),
    },
    faqPageSchema(page.faq.map((item) => ({ question: item.question, answer: stripInlineLinks(item.answer) }))),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="tool-hero">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> All styles</Link>
        <div className="breadcrumbs" aria-label="Breadcrumb">Home <span>/</span> Tools <span>/</span> {page.h1}</div>
        <span className="eyebrow">{page.eyebrow}</span>
        <h1>{page.h1}</h1>
        {page.intro.map((paragraph, index) => (
          <RichParagraph text={paragraph} key={index} />
        ))}
        <LastUpdated date={page.lastUpdated} />
      </section>

      <Converter
        title={`${page.h1}.`}
        description="Type once, compare every style, then copy the result you want."
      />

      <section className="pillar-section" aria-labelledby="styles-title">
        <span className="section-index">Styles included</span>
        <h2 id="styles-title">Every style, converted at once.</h2>
        <div className="tool-link-grid">
          {featured.map((item) =>
            toolPageSet.has(item.slug) ? (
              <Link href={`/tools/${item.slug}`} key={item.slug}>
                <span>{item.name}</span><strong>{item.preview}</strong><ArrowRight aria-hidden="true" />
              </Link>
            ) : (
              <div className="tool-link-static" key={item.slug}>
                <span>{item.name}</span><strong>{item.preview}</strong>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="pillar-section" aria-labelledby="gallery-howto-title">
        <span className="section-index">How to use it</span>
        <h2 id="gallery-howto-title">Copy and paste in four steps.</h2>
        <div className="pillar-howto-grid">
          {page.howToSteps.map((step, index) => (
            <article key={index}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <RichParagraph text={step} />
            </article>
          ))}
        </div>
      </section>

      <section className="pillar-section" aria-labelledby="gallery-where-title">
        <span className="section-index">Where people use this</span>
        <h2 id="gallery-where-title">Built for real places you paste text.</h2>
        <div className="pillar-where-grid">
          {page.whereUsed.map((item) => (
            <article key={item.platform}>
              <h3>{item.platform}</h3>
              <RichParagraph text={item.blurb} />
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" aria-labelledby="gallery-faq-title">
        <div className="section-intro">
          <span className="section-index">FAQ</span>
          <div><h2 id="gallery-faq-title">Frequently asked questions</h2></div>
        </div>
        <div className="faq-list">
          {page.faq.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<span className="faq-plus">+</span></summary>
              <p><RichText text={item.answer} /></p>
            </details>
          ))}
        </div>
      </section>

      {relatedTools.length > 0 && (
        <section className="related-tools">
          <span className="section-index">Keep exploring</span>
          <h2>More text tools.</h2>
          <div>
            {relatedTools.map((item) => (
              <Link href={`/tools/${item.slug}`} key={item.slug}>
                <span>{item.name}</span><strong>{item.preview}</strong><ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </section>
      )}

      {relatedGuides.length > 0 && (
        <section className="related-tools">
          <span className="section-index">Read more</span>
          <h2>Guides on this topic.</h2>
          <div>
            {relatedGuides.map((guide) => (
              <Link href={`/guides/${guide.slug}`} key={guide.slug}>
                <span>Guide</span><strong>{guide.h1}</strong><ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
