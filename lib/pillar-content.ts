import type { GuideFaq } from "@/lib/guides";

export type WhereUsed = { platform: string; blurb: string };

export type PillarContent = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  howToSteps: string[];
  whereUsed: WhereUsed[];
  faq: GuideFaq[];
  relatedGuideSlugs: string[];
  lastUpdated: string;
};

export const pillarContent: PillarContent[] = [
  {
    slug: "invisible",
    title: "Invisible Text Generator – Blank Text Copy & Paste",
    metaDescription:
      "Create invisible, blank, and empty-looking text instantly. Free Unicode blank space generator — copy and paste into Discord, Instagram, and more.",
    h1: "Generate Invisible & Blank Text",
    lastUpdated: "2026-08-10",
    intro: [
      "Need text that looks blank but still pastes like real content? This invisible text generator turns anything you type into blank Unicode characters — a genuine invisible text and blank text substitute, not a font trick, that you can copy and paste anywhere a normal message would go. It's built for the exact problem people run into with truly empty text: a field that rejects a blank entry outright, or a caption that needs visual space without the app throwing an error.",
      "Type below, copy the blank result, and paste it into a caption, message, or name field. If you want to know what's actually happening under the hood — this isn't the same as a zero-width space, and that difference matters for whether it works — see [what invisible text is](/guides/what-is-invisible-text).",
    ],
    howToSteps: [
      "Type any placeholder text into the box below — every character you enter becomes one blank cell, so the length matches what you'll paste.",
      "Copy the blank result with one tap.",
      "Paste it anywhere you'd normally paste text — a caption, bio, message, or name field.",
      "If a field rejects it as empty, pair it with one visible character; some validators only block fields that are blank from end to end.",
    ],
    whereUsed: [
      { platform: "Discord", blurb: "Blank-looking display names, server nicknames, and spacer messages between posts — see the full [Discord name walkthrough](/guides/blank-discord-name-message) for what Discord currently allows." },
      { platform: "Instagram", blurb: "A blank caption line for visual spacing, without triggering an empty-caption error." },
      { platform: "Chats & forums", blurb: "Placeholder or spacer messages where you need something pasted, not literally nothing." },
    ],
    faq: [
      { question: "What is invisible text and how does it work?", answer: "It's a real Unicode character — this generator uses the Braille Pattern Blank — that renders without a visible mark but still has width and counts as content, unlike a truly empty string." },
      { question: "How do I copy and paste blank text?", answer: "Type anything into the generator above, tap Copy on the result, then paste it into the field you need. It behaves exactly like copying any other text." },
      { question: "Why does blank text disappear when I paste it somewhere?", answer: "Some apps strip strings that are entirely whitespace-like or enforce a minimum of one 'real' character. If that happens, pair the blank text with a single visible character rather than pasting it alone." },
      { question: "Does invisible text work for Discord names?", answer: "For display names and server nicknames, generally yes. Discord's actual @username is restricted to plain characters and blocks blank-only values entirely — details in the [blank Discord guide](/guides/blank-discord-name-message)." },
      { question: "Is invisible text the same as a zero-width space?", answer: "No. A zero-width space has no width at all and is aggressively filtered by many apps. This generator uses a character with real visible width instead, which is why it survives copy-paste in more places." },
    ],
    relatedGuideSlugs: ["what-is-invisible-text", "blank-discord-name-message"],
  },
  {
    slug: "subscript",
    title: "Subscript Generator – Copy & Paste Subscript Text",
    metaDescription:
      "Convert text and numbers into subscript Unicode instantly. Free subscript generator for chemistry formulas and captions — copy-paste ready.",
    h1: "Subscript Text & Number Generator",
    lastUpdated: "2026-08-10",
    intro: [
      "Turn plain text and numbers into subscript characters you can copy and paste anywhere — no equation editor required. This subscript generator is especially useful for chemistry formulas like H₂O and CO₂, where the numbers need to sit below the line, as well as footnotes and stylized captions.",
      "Unicode's subscript support is more complete for digits than letters, so numbers convert perfectly every time; the tool still converts letters where a subscript form exists and leaves the rest untouched rather than guessing. See [subscript vs superscript](/guides/subscript-vs-superscript) if you're not sure which direction you need.",
    ],
    howToSteps: [
      "Type your text or formula digits into the box below.",
      "Watch the subscript result update instantly as you type.",
      "Copy the subscript output with one click.",
      "Paste it directly into your document, chat, or formula — for example, paste ₂ right after \"H\" to get H₂.",
    ],
    whereUsed: [
      { platform: "Chemistry & school notes", blurb: "Formulas like H₂O and C₆H₁₂O₆ shared in chat, slides, or digital notebooks — see the [chemistry formula guide](/guides/subscript-numbers-chemistry) for the full walkthrough." },
      { platform: "Captions & footnotes", blurb: "A subscript number or word used as a stylized footnote marker or annotation." },
      { platform: "Gaming names", blurb: "Subscript numbers used inside display names and stat call-outs." },
    ],
    faq: [
      { question: "What is subscript text used for?", answer: "Mostly chemical formulas (H₂O, CO₂) and mathematically subscripted variables (xₙ) — anywhere a smaller character needs to sit below the baseline instead of above it." },
      { question: "How do I type subscript numbers?", answer: "Type the digit into the generator above, copy the subscript result, and paste it directly after the letter or number it belongs to." },
      { question: "Why don't all letters convert to subscript?", answer: "Unicode only defines subscript forms for a handful of letters — there's no subscript version of most consonants. When a letter has no subscript form, this generator leaves the original letter in place instead of substituting something misleading." },
      { question: "Is a subscript generator different from a superscript generator?", answer: "Yes — they use entirely separate Unicode character blocks and serve different purposes. This site keeps them as two focused tools; see the [subscript generator](/tools/subscript) and the superscript generator in the tool directory." },
      { question: "Does subscript copy-paste work in Word or Google Docs?", answer: "Yes, pasted subscript displays correctly in both. For documents you'll edit heavily afterward, each app's built-in subscript formatting is more robust since it's a real text style rather than a substituted character." },
    ],
    relatedGuideSlugs: ["subscript-vs-superscript", "subscript-numbers-chemistry"],
  },
  {
    slug: "cursive",
    title: "Cursive Font Generator – Copy & Paste Script Text",
    metaDescription:
      "Turn text into cursive, fancy script Unicode instantly. Free cursive font generator for Instagram bios and captions — copy and paste ready.",
    h1: "Cursive Font Text Generator",
    lastUpdated: "2026-08-10",
    intro: [
      "Convert plain text into cursive, script-style Unicode with this cursive font generator — type once and copy fancy cursive fonts ready to paste into a bio, caption, or message. It works by mapping your letters to Unicode's mathematical script characters, so the elegant, handwritten look travels as real text, not an image, and displays correctly wherever you paste it.",
      "Use it to convert to cursive for a name, a short quote, or a single accent line — because script glyphs are dense, longer passages tend to read more clearly in a plainer style. Every result updates as you type, so you can compare a few phrasings before copying the one you want.",
    ],
    howToSteps: [
      "Type the word or phrase you want to convert into cursive.",
      "Compare the cursive result against the other styles shown alongside it.",
      "Copy the cursive font output.",
      "Paste it into your bio, caption, or message — it displays the same way for anyone who opens it.",
    ],
    whereUsed: [
      { platform: "Instagram & TikTok bios", blurb: "A cursive name or tagline line — see the [Instagram bio copy list](/guides/cursive-fonts-instagram-bio) for ready-made examples." },
      { platform: "Captions & comments", blurb: "A short cursive accent line to open or close a caption." },
      { platform: "Discord nicknames", blurb: "Cursive display names and server nicknames, same as any other styled Unicode text." },
    ],
    faq: [
      { question: "Does the cursive font generator work on Instagram bios?", answer: "Yes — Instagram bios accept standard Unicode text, and cursive output is standard Unicode, so it pastes and displays normally, the same as any other text style." },
      { question: "How do I convert text into cursive font?", answer: "Type your text into the generator above, then copy the cursive result and paste it wherever you need it — no font installation or app required." },
      { question: "Can I copy and paste cursive fonts into a username?", answer: "Usually not — usernames on most platforms are restricted to letters, numbers, periods, and underscores. Cursive text works in your display name, bio, captions, and comments instead." },
      { question: "Why do cursive letters look like boxes on some phones?", answer: "It means that device's installed font doesn't include glyphs for the specific Unicode script block being used — more common on older Android phones. There's no fix on your end beyond choosing a simpler style for critical text." },
      { question: "Is there a cursive font keyboard I can install instead?", answer: "Some keyboard apps offer a built-in style picker, but they work the same way under the hood — substituting Unicode characters — so a copy-paste generator gives you an identical result without installing anything." },
    ],
    relatedGuideSlugs: ["cursive-fonts-instagram-bio", "how-cursive-font-generator-works"],
  },
];

export function getPillarContent(slug: string) {
  return pillarContent.find((pillar) => pillar.slug === slug);
}

export type PillarNavEntry = { slug: string; href: string; eyebrow: string; anchor: string };

export const pillarNav: PillarNavEntry[] = [
  { slug: "small-text", href: "/", eyebrow: "Small text", anchor: "the small text generator" },
  { slug: "invisible", href: "/tools/invisible", eyebrow: "Invisible text", anchor: "our invisible text tool" },
  { slug: "subscript", href: "/tools/subscript", eyebrow: "Subscript", anchor: "the subscript generator" },
  { slug: "cursive", href: "/tools/cursive", eyebrow: "Cursive", anchor: "the cursive font generator" },
];
