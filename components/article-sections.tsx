import { RichParagraph, RichText } from "@/components/rich-text";
import type { GuideSection } from "@/lib/guides";

/** Long-form body for tool pages: H2 sections with optional H3 subsections and a table. */
export function ArticleSections({ sections }: { sections?: GuideSection[] }) {
  if (!sections || sections.length === 0) return null;
  return (
    <article className="info-page guide-body tool-article">
      <div className="info-content">
        {sections.map((section) => (
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
