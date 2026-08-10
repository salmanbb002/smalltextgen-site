import Link from "next/link";
import { Fragment } from "react";

export function RichText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    if (match.index > lastIndex) nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    const [, label, href] = match;
    nodes.push(
      href.startsWith("http") ? (
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link key={key++} href={href}>
          {label}
        </Link>
      ),
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);

  return <>{nodes}</>;
}

export function RichParagraph({ text, className }: { text: string; className?: string }) {
  const lines = text.split("\n");
  if (lines.length === 1) {
    return (
      <p className={className}>
        <RichText text={text} />
      </p>
    );
  }
  return (
    <p className={className}>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {index > 0 && <br />}
          <RichText text={line} />
        </Fragment>
      ))}
    </p>
  );
}
