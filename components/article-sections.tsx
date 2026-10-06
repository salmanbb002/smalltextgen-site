import Image from "next/image";
import { RichParagraph, RichText } from "@/components/rich-text";
import type { GuideSection, PageImage } from "@/lib/guides";

export function ArticleFigure({ image }: { image?: PageImage }) {
  if (!image) return null;
  return (
    <figure className="article-figure">
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 820px) 100vw, 760px" />
      {image.caption && <figcaption><RichText text={image.caption} /></figcaption>}
    </figure>
  );
}

/** Long-form body for tool pages: H2 sections with optional H3 subsections and a table. */
export function ArticleSections({ sections, image }: { sections?: GuideSection[]; image?: PageImage }) {
  if ((!sections || sections.length === 0) && !image) return null;
  return (
    <article className="info-page guide-body tool-article">
      <div className="info-content">
        <ArticleFigure image={image} />
        {sections?.map((section) => (
          <SectionBlock section={section} key={section.heading} />
        ))}
      </div>
    </article>
  );
}

export function SectionBlock({ section }: { section: GuideSection }) {
  return (
    <section>
      <h2>{section.heading}</h2>
      {section.paragraphs.map((paragraph, index) => (
        <RichParagraph text={paragraph} key={index} />
      ))}
      {section.table && (
        <div className="article-table-wrap">
          <table>
            {section.table.caption && <caption>{section.table.caption}</caption>}
            <thead>
              <tr>{section.table.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => (j === 0 ? <th key={j} scope="row"><RichText text={cell} /></th> : <td key={j}><RichText text={cell} /></td>))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.subsections?.map((sub) => (
        <div className="article-subsection" key={sub.heading}>
          <h3>{sub.heading}</h3>
          {sub.paragraphs.map((paragraph, index) => (
            <RichParagraph text={paragraph} key={index} />
          ))}
        </div>
      ))}
    </section>
  );
}
