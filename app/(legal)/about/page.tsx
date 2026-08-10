import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/info-page";

const aboutDescription = "Who builds SmallTextGen, how the Unicode conversion actually works, and its honest limitations.";

export const metadata: Metadata = {
  title: "About",
  description: aboutDescription,
  alternates: { canonical: "/about" },
  openGraph: { title: "About | SmallTextGen", description: aboutDescription },
  twitter: { title: "About | SmallTextGen", description: aboutDescription },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About SmallTextGen"
      title="A small tool with one careful job."
      intro="SmallTextGen makes expressive Unicode text quick to explore, safe to copy, and pleasant to use."
      sections={[
        {
          title: "Who's behind this",
          body: <p>SmallTextGen is built and maintained by Muhammad Salman. It started from a simple motivation — wanting to help people, in this case by making a genuinely useful free tool instead of another ad-choked page pretending to be one. If something&apos;s broken or missing a style, the <Link href="/contact">contact page</Link> reaches a real person, not a support queue.</p>,
        },
        {
          title: "Why it exists",
          body: <><p>Most text generators bury a useful interaction beneath ads and repetitive content. SmallTextGen puts the converter first: type once, compare every result, and copy without opening a new page.</p><p>The interface is built for profile writers, community managers, creators, gamers, and anyone who wants a few words to carry a different tone.</p></>,
        },
        {
          title: "How conversion works",
          body: <>
            <p>Each style maps ordinary Latin letters and numbers to Unicode characters with a similar visual form — the same substitution approach used across every tool on this site. Conversion happens locally in your browser and updates on every keystroke; nothing is uploaded to a server.</p>
            <p>Unicode does not contain a complete superscript or subscript alphabet. When an exact counterpart is unavailable, SmallTextGen leaves the original character intact so the result stays understandable rather than substituting something misleading. For the full technical explanation — which Unicode blocks are involved and why — see <Link href="/guides/unicode-explained">Unicode Explained</Link>, which cites the <a href="https://www.unicode.org/standard/standard.html" target="_blank" rel="noopener noreferrer">Unicode Standard</a> directly.</p>
          </>,
        },
        {
          title: "A note on accessibility and limitations",
          body: <><p>Decorative Unicode can be read unpredictably by screen readers and search systems, and it doesn&apos;t render at all on a small number of older devices whose fonts are missing certain character blocks — see the <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/" target="_blank" rel="noopener noreferrer">W3C Web Accessibility Initiative</a> on why visual-only styling is a real accessibility gap, not a minor detail.</p><p>Use styled text sparingly, keep important information in plain text, and never style critical instructions, passwords, or safety information.</p></>,
        },
        {
          title: "The AI starter",
          body: <p>The optional caption starter uses a Hugging Face text-generation model configured by the site operator. It only receives the topic and tone submitted in that panel. The core converter does not require AI and remains available when the model service is not configured.</p>,
        },
      ]}
      lastUpdated="2026-08-10"
    />
  );
}
