import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Converter } from "@/components/converter";
import { LastUpdated } from "@/components/last-updated";
import { RichParagraph, RichText } from "@/components/rich-text";
import { getGuide, stripInlineLinks } from "@/lib/guides";
import type { TextStyle } from "@/lib/fonts";
import type { PillarContent } from "@/lib/pillar-content";
import { pillarNav } from "@/lib/pillar-content";
import { breadcrumbSchema, faqPageSchema, jsonLdGraph } from "@/lib/schema";

export function PillarToolPage({ style, pillar }: { style: TextStyle; pillar: PillarContent }) {
  const example = style.transform("Tiny text, big mood.");
  const otherPillars = pillarNav.filter((entry) => entry.slug !== pillar.slug);
  const relatedGuides = pillar.relatedGuideSlugs.map((slug) => getGuide(slug)).filter((g): g is NonNullable<typeof g> => Boolean(g));

  const schema = jsonLdGraph([
    {
      "@type": "WebApplication",
      name: pillar.h1,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Tools", path: "/#generator" },
      { name: style.name, path: `/tools/${style.slug}` },
    ]),
    faqPageSchema(pillar.faq.map((item) => ({ question: item.question, answer: stripInlineLinks(item.answer) }))),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="tool-hero">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> All styles</Link>
        <div className="breadcrumbs" aria-label="Breadcrumb">Home <span>/</span> Tools <span>/</span> {style.name}</div>
        <span className="eyebrow">Focused text tool</span>
        <h1>{pillar.h1}</h1>
        {pillar.intro.map((paragraph, index) => (
          <RichParagraph text={paragraph} key={index} />
        ))}
        <div className="tool-example"><span>Example</span><strong>{example}</strong></div>
        <LastUpdated date={pillar.lastUpdated} />
      </section>

      <Converter
        initialStyle={style.slug}
        title={`Make ${style.name.toLowerCase()} text.`}
        description={`${style.description}. Your focused result appears first, with every other style close by.`}
      />

      <section className="pillar-section" aria-labelledby="howto-title">
        <span className="section-index">How to use it</span>
        <h2 id="howto-title">Copy and paste in four steps.</h2>
        <div className="pillar-howto-grid">
          {pillar.howToSteps.map((step, index) => (
            <article key={index}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <RichParagraph text={step} />
            </article>
          ))}
        </div>
      </section>

      <section className="pillar-section" aria-labelledby="where-title">
        <span className="section-index">Where people use this</span>
        <h2 id="where-title">Built for real places you paste text.</h2>
        <div className="pillar-where-grid">
          {pillar.whereUsed.map((item) => (
            <article key={item.platform}>
              <h3>{item.platform}</h3>
              <RichParagraph text={item.blurb} />
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" aria-labelledby="pillar-faq-title">
        <div className="section-intro">
          <span className="section-index">FAQ</span>
          <div><h2 id="pillar-faq-title">Frequently asked questions</h2></div>
        </div>
        <div className="faq-list">
          {pillar.faq.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<span className="faq-plus">+</span></summary>
              <p><RichText text={item.answer} /></p>
            </details>
          ))}
        </div>
      </section>

      <section className="related-tools">
        <span className="section-index">Keep exploring</span>
        <h2>More Unicode text tools.</h2>
        <div>
          {otherPillars.map((entry) => (
            <Link href={entry.href} key={entry.href}>
              <span>{entry.eyebrow}</span><strong>Try {entry.anchor}</strong><ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>

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
