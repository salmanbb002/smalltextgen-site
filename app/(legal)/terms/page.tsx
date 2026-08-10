import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/info-page";

const termsDescription = "Terms for using SmallTextGen's free Unicode text generators.";

export const metadata: Metadata = {
  title: "Terms",
  description: termsDescription,
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms | SmallTextGen", description: termsDescription },
  twitter: { title: "Terms | SmallTextGen", description: termsDescription },
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Terms"
      title="Use it freely. Use it thoughtfully."
      intro="These plain-language terms describe the intended use of SmallTextGen."
      sections={[
        { title: "Using the service", body: <p>You may use SmallTextGen for personal or commercial text conversion. You are responsible for the text you submit and for making sure your use follows the rules of any platform where you paste it.</p> },
        { title: "Acceptable use", body: <p>Do not use the service to impersonate others, evade moderation, distribute unlawful content, interfere with the service, or probe systems you do not have permission to test.</p> },
        { title: "Generated output", body: <p>Unicode conversions are mechanical and are not claimed as exclusive creative works. AI suggestions may be inaccurate or similar to other outputs; review them before publishing.</p> },
        { title: "Availability", body: <p>The service is provided as available. Unicode appearance varies across apps, operating systems, and typefaces, and we cannot guarantee every character will render everywhere — see our <Link href="/guides/unicode-explained">Unicode explainer</Link> for why.</p> },
        { title: "Changes to these terms", body: <p>If these terms change materially, the update date below will move and, where practical, the change will be summarized here.</p> },
      ]}
      lastUpdated="2026-08-10"
    />
  );
}
