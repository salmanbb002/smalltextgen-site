import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides } from "@/lib/guides";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/schema";

const guidesTitle = "Guides";
const guidesDescription = "Guides on small text, invisible text, subscript and superscript, and cursive Unicode fonts — how they work and where to use them.";

export const metadata: Metadata = {
  title: guidesTitle,
  description: guidesDescription,
  alternates: { canonical: "/guides" },
  openGraph: { title: "Guides | SmallTextGen", description: guidesDescription },
  twitter: { title: "Guides | SmallTextGen", description: guidesDescription },
};

const pillars = [
  { label: "Small text generator", href: "/" },
  { label: "Invisible text generator", href: "/tools/invisible" },
  { label: "Subscript generator", href: "/tools/subscript" },
  { label: "Cursive font generator", href: "/tools/cursive" },
];

export default function GuidesIndexPage() {
  const schema = jsonLdGraph([breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }])]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="utility-hero guide-index-hero">
        <div className="utility-hero-copy">
          <div className="breadcrumbs" aria-label="Breadcrumb">Home <span>/</span> Guides</div>
          <span className="eyebrow">Text tool guides</span>
          <h1>Guides to Unicode text tools</h1>
          <p>How small text, invisible text, subscript, and cursive Unicode actually work — plus where each one is safe to use, from Instagram bios to chemistry formulas.</p>
        </div>
      </section>

      <section className="tool-directory" aria-labelledby="guides-title">
        <div className="section-intro">
          <span className="section-index">All guides</span>
          <div><h2 id="guides-title">Browse every guide</h2><p>Each guide links back to the generator it&apos;s about.</p></div>
        </div>
        <div className="guide-index-grid">
          {guides.map((guide) => (
            <Link href={`/guides/${guide.slug}`} key={guide.slug} className="guide-index-card">
              <span className="guide-index-eyebrow">Guide</span>
              <h3>{guide.h1}</h3>
              <p>{guide.dek}</p>
              <span className="guide-index-arrow"><ArrowRight size={16} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="related-tools">
        <span className="section-index">The generators</span>
        <h2>Jump straight to a tool.</h2>
        <div>
          {pillars.map((pillar) => (
            <Link href={pillar.href} key={pillar.href}>
              <span>Generator</span><strong>{pillar.label}</strong><ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
