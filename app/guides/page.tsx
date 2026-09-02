import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides, type GuideCluster } from "@/lib/guides";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/schema";

const guidesTitle = "Guides";
const guidesDescription =
  "Guides on small text, copy-and-paste fonts, invisible text, superscript and subscript, bubble letters, and cursive Unicode — how they work and where to use them.";

export const metadata: Metadata = {
  title: guidesTitle,
  description: guidesDescription,
  alternates: { canonical: "/guides" },
  openGraph: { title: "Guides | SmallTextGen", description: guidesDescription },
  twitter: { title: "Guides | SmallTextGen", description: guidesDescription },
};

type PillarConfig = {
  cluster: GuideCluster;
  label: string;
  blurb: string;
  hubHref: string;
  hubLabel: string;
};

const pillarOrder: PillarConfig[] = [
  {
    cluster: "A",
    label: "Small & tiny text",
    blurb: "Getting small caps and tiny letters into bios, captions, and names.",
    hubHref: "/",
    hubLabel: "Small text generator",
  },
  {
    cluster: "C",
    label: "Superscript & subscript",
    blurb: "Raised and lowered characters for exponents, ordinals, and chemistry formulas.",
    hubHref: "/tools/subscript",
    hubLabel: "Subscript generator",
  },
  {
    cluster: "D",
    label: "Cursive & fancy fonts",
    blurb: "Script-style Unicode and other decorative copy-and-paste fonts.",
    hubHref: "/tools/cursive",
    hubLabel: "Cursive font generator",
  },
  {
    cluster: "B",
    label: "Invisible & blank text",
    blurb: "Blank Unicode characters for empty names, captions, and spacer messages.",
    hubHref: "/tools/invisible",
    hubLabel: "Invisible text generator",
  },
  {
    cluster: "Sitewide",
    label: "Unicode & fonts, explained",
    blurb: "Why copy-and-paste fonts aren't real fonts, and what that means for support and accessibility.",
    hubHref: "/",
    hubLabel: "All text tools",
  },
  {
    cluster: "Platform",
    label: "By platform",
    blurb: "Where styled text works — and where it's stripped or filtered — app by app.",
    hubHref: "/tools/fancy-text-generator",
    hubLabel: "fancy text generator",
  },
];

export default function GuidesIndexPage() {
  const schema = jsonLdGraph([breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }])]);

  const pillars = pillarOrder
    .map((pillar) => ({ ...pillar, entries: guides.filter((guide) => guide.cluster === pillar.cluster) }))
    .filter((pillar) => pillar.entries.length > 0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="utility-hero guide-index-hero">
        <div className="utility-hero-copy">
          <div className="breadcrumbs" aria-label="Breadcrumb">Home <span>/</span> Guides</div>
          <span className="eyebrow">Text tool guides</span>
          <h1>Guides to Unicode text tools</h1>
          <p>How small text, copy-and-paste fonts, invisible text, superscript, and cursive Unicode actually work — plus where each one is safe to use, from Instagram bios to chemistry formulas. Guides are grouped by the tool they support.</p>
        </div>
      </section>

      {pillars.map((pillar) => (
        <section className="tool-directory" aria-labelledby={`pillar-${pillar.cluster}`} key={pillar.cluster}>
          <div className="section-intro">
            <span className="section-index">{pillar.label}</span>
            <div>
              <h2 id={`pillar-${pillar.cluster}`}>{pillar.label}</h2>
              <p>{pillar.blurb} <Link href={pillar.hubHref}>Open the {pillar.hubLabel}</Link>.</p>
            </div>
          </div>
          <div className="guide-index-grid">
            {pillar.entries.map((guide) => (
              <Link href={`/guides/${guide.slug}`} key={guide.slug} className="guide-index-card">
                <span className="guide-index-eyebrow">Guide</span>
                <h3>{guide.h1}</h3>
                <p>{guide.dek}</p>
                <span className="guide-index-arrow"><ArrowRight size={16} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="related-tools">
        <span className="section-index">The generators</span>
        <h2>Jump straight to a tool.</h2>
        <div>
          {[
            ["Small text generator", "/"],
            ["Fancy text generator", "/tools/fancy-text-generator"],
            ["Unicode text converter", "/tools/unicode-text-converter"],
            ["Small caps generator", "/tools/small-caps"],
            ["Superscript generator", "/tools/superscript"],
            ["Cursive font generator", "/tools/cursive"],
            ["Bubble text generator", "/tools/bubble"],
            ["Invisible text generator", "/tools/invisible"],
          ].map(([label, href]) => (
            <Link href={href} key={href}>
              <span>Generator</span><strong>{label}</strong><ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
