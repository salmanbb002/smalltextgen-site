import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

const contactDescription = "Contact Muhammad Salman, who builds and maintains SmallTextGen.";

export const metadata: Metadata = {
  title: "Contact",
  description: contactDescription,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | SmallTextGen", description: contactDescription },
  twitter: { title: "Contact | SmallTextGen", description: contactDescription },
};

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return (
    <InfoPage
      eyebrow="Contact"
      title="Spotted a strange glyph?"
      intro="Bug reports, compatibility notes, and thoughtful ideas are always useful."
      sections={[
        {
          title: "Get in touch",
          body: contactEmail
            ? <p>Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> directly — that reaches Muhammad Salman, who builds and maintains SmallTextGen. Include the style name, the text you entered, and the browser or app where you saw the issue.</p>
            : <p>The public support address has not been connected yet. Set <code>NEXT_PUBLIC_CONTACT_EMAIL</code> in the deployment environment to publish the contact link.</p>,
        },
        { title: "What to include", body: <ul><li>The text style you selected</li><li>The device, browser, or social app involved</li><li>A short description or screenshot of what happened</li></ul> },
        { title: "Response scope", body: <p>Unicode rendering is controlled partly by each device and app. We can correct mapping bugs and interface issues, but cannot force a third-party platform to support a missing glyph.</p> },
      ]}
      lastUpdated="2026-08-10"
    />
  );
}
