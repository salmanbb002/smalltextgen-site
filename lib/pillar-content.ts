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
  {
    slug: "small-caps",
    title: "Small Caps Generator – Small Capital Letters Copy & Paste",
    metaDescription:
      "Convert text into small caps — small capital letters you can copy and paste into any bio, caption, or name field. Free small caps generator, no app needed.",
    h1: "Small Caps Generator",
    lastUpdated: "2026-09-01",
    intro: [
      "This small caps generator turns lowercase and uppercase text into small capital letters — the even, compact ᴀʙᴄ style — that you can copy and paste anywhere plain text is accepted. It maps each letter to a Unicode small-capital character, so the result travels as real text, not an image or an installed font, and stays selectable and searchable.",
      "Small caps has the most complete alphabet of any ‘tiny’ style, which makes it the safest choice for a full bio line or heading where every letter needs to render. Type below, compare it against the other styles shown alongside, then copy the small capital letters version when it looks right. See [why these aren't real fonts](/guides/unicode-explained) for what's happening under the hood.",
    ],
    howToSteps: [
      "Type or paste the word, name, or sentence you want in small capital letters into the box below.",
      "Check the small caps result — every letter is converted to its Unicode small-capital form as you type.",
      "Copy the small caps output with one tap.",
      "Paste it into an Instagram or TikTok bio, a Discord display name, a caption, or a document, and preview it there once, since a few older devices lack the glyph for one or two letters.",
    ],
    whereUsed: [
      { platform: "Instagram & TikTok bios", blurb: "A full bio line in small caps stays readable because every character sits at the same visual weight — see the [Instagram bio walkthrough](/guides/small-text-instagram-bio)." },
      { platform: "Discord names & nicknames", blurb: "Small caps display names and per-server nicknames render cleanly in Discord's UI font at small sizes." },
      { platform: "Headings & captions", blurb: "A small-caps sub-heading or caption line adds structure without switching typeface." },
    ],
    faq: [
      { question: "What is a small caps generator?", answer: "It's a tool that swaps each letter you type for its Unicode small-capital character (A → ᴀ), producing small capital letters you can copy and paste. It isn't a font — the styled letters are standard Unicode, so they display without any install." },
      { question: "How do I copy and paste small capital letters?", answer: "Type your text into the generator above, tap Copy on the small caps result, then paste it into the bio, caption, or name field you need. It behaves like copying any other text." },
      { question: "Does small caps text work on Instagram and Discord?", answer: "Yes. Both accept standard Unicode in bios, captions, display names, and messages, and small caps is standard Unicode. It's blocked only in strict fields like the Instagram @username or Discord @handle." },
      { question: "Why do a couple of letters stay normal or show as a box?", answer: "Unicode's small-capital block is nearly complete, but a few characters differ across fonts and some older Android builds miss a glyph. When there's no reliable small-cap form the generator leaves the original letter rather than substituting a lookalike." },
      { question: "Is small caps the same as ALL CAPS?", answer: "No. ALL CAPS uses full-height capitals; small caps uses capital letterforms shrunk to about x-height, so the text reads as quieter and more compact. It also differs from Title Case, which only capitalises the first letter of each word." },
    ],
    relatedGuideSlugs: ["unicode-explained", "copy-paste-text-tricks-social-media-bios"],
  },
  {
    slug: "superscript",
    title: "Superscript Generator – Superscript Copy & Paste (ˣ ⁿ ⁰¹²)",
    metaDescription:
      "Convert letters and numbers into superscript Unicode you can copy and paste — exponents, ordinals, and footnotes. Free superscript generator, no equation editor.",
    h1: "Superscript Generator",
    lastUpdated: "2026-09-01",
    intro: [
      "This superscript generator raises your text into small Unicode characters set above the baseline — the ˣ ⁿ and ⁰¹² style — ready to copy and paste into a caption, formula, footnote, or display name. Each character is a real Unicode superscript glyph, so the output stays selectable text and needs no equation editor or installed font.",
      "It handles exponents and powers (x², 10⁶), ordinal endings (1ˢᵗ, nᵗʰ), and footnote markers. Unicode's superscript coverage is complete for digits and strong for lowercase letters; where a raised form doesn't exist the tool leaves the letter untouched rather than guessing. If you need characters set *below* the line instead, use the [subscript generator](/tools/subscript) — and [subscript vs superscript](/guides/subscript-vs-superscript) explains which way to go.",
    ],
    howToSteps: [
      "Type the text, exponent, or number you want raised into the box below.",
      "Watch the superscript result update live as you type.",
      "Copy the superscript output with one tap.",
      "Paste it directly where it belongs — for example paste ² right after ‘x’ to get x², or ⁿᵈ after ‘2’ for 2ⁿᵈ.",
    ],
    whereUsed: [
      { platform: "Maths & science notes", blurb: "Exponents and powers (E = mc², 2¹⁰) shared in chat, slides, or notebooks where a real superscript style isn't available." },
      { platform: "Ordinals & footnotes", blurb: "1ˢᵗ, 2ⁿᵈ, 3ʳᵈ and small raised footnote markers in captions and posts." },
      { platform: "Discord & gaming names", blurb: "Raised mini-text in display names and stat call-outs, same as any other styled Unicode text." },
    ],
    faq: [
      { question: "How do I get superscript to copy and paste?", answer: "Type into the generator above, copy the superscript result, and paste it wherever you need it. The raised look is built from Unicode superscript characters, so it survives copy-paste like normal text." },
      { question: "Can I make exponents and powers with this?", answer: "Yes — every digit 0–9 has a Unicode superscript form, so x², 10⁶, and cm³ all convert exactly. Type the exponent on its own and paste it right after the base." },
      { question: "Why aren't all letters converting to superscript?", answer: "Unicode defines raised forms for all digits and most lowercase letters but only some capitals. Unsupported characters are left as-is so the text stays readable rather than mixing in misleading symbols." },
      { question: "Does superscript work in Word, Google Docs, and Discord?", answer: "Pasted superscript displays correctly in all three. For documents you'll heavily edit afterwards, the app's own superscript formatting is more robust because it's a text style rather than a substituted character." },
      { question: "What's the difference between superscript and subscript?", answer: "Superscript sits above the baseline (x², 1ˢᵗ); subscript sits below it (H₂O, xₙ). They use separate Unicode blocks — see the [subscript vs superscript guide](/guides/subscript-vs-superscript)." },
    ],
    relatedGuideSlugs: ["subscript-vs-superscript", "subscript-numbers-chemistry"],
  },
  {
    slug: "bubble",
    title: "Bubble Text Generator – Bubble Letters to Copy & Paste",
    metaDescription:
      "Turn text into bubble letters — circled and filled — that you can copy and paste into any bio or caption. Free bubble text generator, no font install.",
    h1: "Bubble Text Generator",
    lastUpdated: "2026-09-01",
    intro: [
      "This bubble text generator wraps every letter in a circle — the ⒷⓊⒷⒷⓁⒺ style — so you can copy and paste bubble letters into a bio, caption, comment, or display name. The characters are standard Unicode enclosed alphanumerics, which means the bubbly look pastes as real text rather than an image.",
      "You get the outline (circled) style by default, with a bold filled version available for capitals. Bubble letters copy and paste cleanly on most modern apps — type below, pick circled or filled, and copy the result. Support is widest for A–Z and 0–9, so keep names and short phrases in mind rather than long paragraphs.",
    ],
    howToSteps: [
      "Type the word or name you want in bubble letters into the box below.",
      "Compare the circled bubble result with the filled version and the other styles shown alongside.",
      "Copy the bubble text output with one tap.",
      "Paste it into Instagram, TikTok, Discord, or a comment, and preview it once, since a few older keyboards render the filled set as plain capitals.",
    ],
    whereUsed: [
      { platform: "Instagram & TikTok bios", blurb: "A bubble-letter name or tagline line stands out in a feed while staying readable — see the [Instagram bio walkthrough](/guides/small-text-instagram-bio)." },
      { platform: "Discord & chats", blurb: "Bubble display names and message accents, same as any other styled Unicode text." },
      { platform: "Comments & captions", blurb: "A short bubble-text phrase to draw the eye to one line." },
    ],
    faq: [
      { question: "How do I copy and paste bubble letters?", answer: "Type your text into the generator above, tap Copy on the bubble result, and paste it wherever you need it. There's no font or app to install — the circled letters are Unicode characters." },
      { question: "What's the difference between circled and filled bubble text?", answer: "Circled bubble letters (ⓐ, Ⓐ) are outlines and cover both cases plus digits. Filled bubble letters (🅐) are bold negative-circle capitals only and lean on emoji-style rendering, so they vary more between devices." },
      { question: "Do bubble fonts copy and paste on Instagram?", answer: "Yes — Instagram bios, captions, and comments accept the Unicode circled alphabet. It won't work in the @username field, which is restricted to plain characters." },
      { question: "Why do some bubble letters show as normal letters or boxes?", answer: "That device's font is missing the enclosed-alphanumeric glyph, most often for the filled set on older Android. The circled style has the broadest support, so switch to it for anything important." },
      { question: "Can I make bubble numbers too?", answer: "Yes — digits 0–9 have circled forms (①–⑨, ⓪), so they convert alongside letters." },
    ],
    relatedGuideSlugs: ["copy-paste-text-tricks-social-media-bios", "small-text-instagram-bio"],
  },
  {
    slug: "underline",
    title: "Underline Text Generator – Underline & Underscore Copy & Paste",
    metaDescription:
      "Add a real underline to text you can copy and paste — no formatting toolbar needed. Free underline text generator using a Unicode combining underline.",
    h1: "Underline Text Generator",
    lastUpdated: "2026-09-01",
    intro: [
      "This underline text generator adds a line beneath every character using a Unicode combining underline mark, so the underlined text copies and pastes into places that have no formatting toolbar — bios, captions, chat messages, and display names. The underscore travels with the text as real characters rather than a style setting.",
      "Because the underline is a combining mark stacked onto each letter, it works anywhere the base letters do, and it survives a copy-paste that would strip rich-text formatting. Type below and copy the underlined result; preview it where you'll use it, since a handful of apps normalise combining marks away.",
    ],
    howToSteps: [
      "Type or paste the text you want underlined into the box below.",
      "Check the underline result — a combining underline is added to each character as you type.",
      "Copy the underlined output with one tap.",
      "Paste it into a bio, caption, message, or document; if the line disappears, the app has stripped combining marks and there's no workaround on that surface.",
    ],
    whereUsed: [
      { platform: "Social bios & captions", blurb: "An underlined word or phrase for emphasis where the app gives you no formatting controls." },
      { platform: "Chats & display names", blurb: "Underlined names and message accents in apps that pass Unicode through untouched." },
      { platform: "Notes & docs", blurb: "A quick underline in plain-text fields and lightweight editors." },
    ],
    faq: [
      { question: "How does an underline text generator work without a formatting button?", answer: "It attaches a Unicode combining low line to each character. The underline is part of the text itself, so it pastes into plain-text fields that have no underline option." },
      { question: "How do I copy and paste underlined text?", answer: "Type into the generator above, tap Copy, and paste into the field you need. The underline comes along with the letters." },
      { question: "Why does my underline sometimes not show up?", answer: "Some platforms strip or normalise combining marks for consistency or safety. When that happens the base letters stay but the line is removed, and there's no fix on that specific surface." },
      { question: "Is this the same as typing underscores between letters?", answer: "No. Underscores between characters sit on the baseline. This tool places a continuous underline beneath each character, closer to a true underline." },
      { question: "Does underlined Unicode text work in Word or Google Docs?", answer: "It pastes and displays, but for documents you'll keep editing, the app's own underline formatting is cleaner because it's a text attribute rather than stacked marks." },
    ],
    relatedGuideSlugs: ["unicode-explained", "copy-paste-text-tricks-social-media-bios"],
  },
];

export function getPillarContent(slug: string) {
  return pillarContent.find((pillar) => pillar.slug === slug);
}

export type PillarNavEntry = { slug: string; href: string; eyebrow: string; anchor: string };

export const pillarNav: PillarNavEntry[] = [
  { slug: "small-text", href: "/", eyebrow: "Small text", anchor: "the small text generator" },
  { slug: "small-caps", href: "/tools/small-caps", eyebrow: "Small caps", anchor: "the small caps generator" },
  { slug: "superscript", href: "/tools/superscript", eyebrow: "Superscript", anchor: "the superscript generator" },
  { slug: "subscript", href: "/tools/subscript", eyebrow: "Subscript", anchor: "the subscript generator" },
  { slug: "cursive", href: "/tools/cursive", eyebrow: "Cursive", anchor: "the cursive font generator" },
  { slug: "bubble", href: "/tools/bubble", eyebrow: "Bubble text", anchor: "the bubble text generator" },
  { slug: "underline", href: "/tools/underline", eyebrow: "Underline", anchor: "the underline text generator" },
  { slug: "invisible", href: "/tools/invisible", eyebrow: "Invisible text", anchor: "our invisible text tool" },
];
