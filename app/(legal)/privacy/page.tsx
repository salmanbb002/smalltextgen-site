import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

const privacyDescription = "How SmallTextGen handles your text, local storage, and technical logs.";

export const metadata: Metadata = {
  title: "Privacy",
  description: privacyDescription,
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy | SmallTextGen", description: privacyDescription },
  twitter: { title: "Privacy | SmallTextGen", description: privacyDescription },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Privacy"
      title="Your text belongs to you."
      intro="The converter is designed to work without accounts, uploads, or behavioral profiles."
      sections={[
        {
          title: "Text conversion",
          body: <p>Text entered in the main generator is transformed on your device. It is not sent to our server, stored in a database, or attached to an account.</p>,
        },
        {
          title: "Local preferences",
          body: <p>Saved styles are stored in your browser using local storage. You can clear them at any time through your browser settings. They do not follow you to another browser or device.</p>,
        },
        {
          title: "AI requests",
          body: <p>If you choose the AI caption starter, the topic and tone you submit are sent through our server to the configured Hugging Face inference provider. Do not enter confidential or sensitive information in that optional field.</p>,
        },
        {
          title: "Operational data",
          body: <><p>SmallTextGen is hosted on Vercel, which processes standard technical logs (IP address, browser type, timestamps, and request/error details) for security and reliability, independent of anything you type into the converter.</p><p>This site does not currently run any analytics or advertising script — no third-party tracking pixels or behavioral profiling are in place beyond Google Search Console&apos;s site-ownership verification, which does not track visitors.</p></>,
        },
        {
          title: "Changes",
          body: <p>Material updates to this notice are dated below. This is a plain-language summary, not a substitute for legal advice specific to your jurisdiction.</p>,
        },
      ]}
      lastUpdated="2026-08-10"
    />
  );
}
