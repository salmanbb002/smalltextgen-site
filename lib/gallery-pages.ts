import type { GuideFaq } from "@/lib/guides";
import type { WhereUsed } from "@/lib/pillar-content";

export type GalleryPage = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  howToSteps: string[];
  /** Style slugs to feature in the "styles included" grid. Slugs that are also in `toolPages` render as links. */
  featuredStyleSlugs: string[];
  whereUsed: WhereUsed[];
  faq: GuideFaq[];
  /** Pillar tool slugs (under /tools/) to cross-link in "more text tools". */
  relatedToolSlugs: string[];
  relatedGuideSlugs: string[];
  lastUpdated: string;
};

export const galleryPages: GalleryPage[] = [
  {
    slug: "unicode-text-converter",
    title: "Unicode Text Converter — Every Copy-Paste Font in One Place",
    metaDescription:
      "Convert plain text into every Unicode style at once — small caps, bold, cursive, bubble, superscript, and more. Free Unicode text converter, copy and paste ready.",
    h1: "Unicode Text Converter",
    eyebrow: "All styles at once",
    intro: [
      "A Unicode text converter maps each ordinary letter you type to a look-alike character from another Unicode block — the mathematical alphabets, enclosed letters, small capitals, and so on — so the styled result is still real text you can copy and paste, not an image or an installed font. This page runs every conversion at the same time so you can compare them side by side and copy the one that fits.",
      "It's the same engine behind the [small text generator](/) and each focused tool, shown as one gallery. Every style updates live as you type, nothing is uploaded, and the output works anywhere standard Unicode is accepted. If you want the background on why these aren't real fonts, see [Unicode, explained](/guides/unicode-explained).",
    ],
    howToSteps: [
      "Type or paste your text into the converter below.",
      "Scan the styles — small caps, bold, [italic](/tools/italic), cursive, fraktur, double-struck, monospace, bubble, superscript, and more all convert at once.",
      "Copy the version you want with one tap.",
      "Paste it into a bio, caption, message, or document, and preview it there, since some apps and older devices lack the glyph for a few blocks.",
    ],
    featuredStyleSlugs: ["small-caps", "bold", "italic", "cursive", "fraktur", "double-struck", "monospace", "bubble", "superscript"],
    whereUsed: [
      { platform: "Social bios & posts", blurb: "Instagram, TikTok, X, and Facebook accept Unicode in bios, captions, and comments — the converter is a fast way to test several looks before committing." },
      { platform: "Discord & chats", blurb: "Display names, server nicknames, and message accents, same as any other styled Unicode text." },
      { platform: "Docs & mockups", blurb: "A quick styled heading or label in plain-text fields, design mockups, and notes where you can't change the typeface." },
    ],
    faq: [
      { question: "What is a Unicode text converter?", answer: "A tool that swaps your regular letters for characters from other Unicode blocks that look like styled versions of them. The result is standard text, so it copies and pastes without a font install." },
      { question: "Is a Unicode text converter the same as a font generator?", answer: "Yes — they describe the same thing. 'Font generator', 'text generator', and 'Unicode converter' are all names for a tool that substitutes styled Unicode characters." },
      { question: "Why do some characters stay unchanged?", answer: "Not every Unicode block has a complete alphabet. Superscript, subscript, and small caps are missing forms for a handful of letters, so the converter leaves those characters as-is rather than substituting a misleading look-alike." },
      { question: "Does converted text work on Instagram and Discord?", answer: "Yes, in bios, captions, display names, and messages. It won't work in strict fields like the Instagram @username or Discord @handle, which are limited to plain characters." },
      { question: "Is Unicode styled text accessible to screen readers?", answer: "Partly. Small caps and full-width read close to normal, but mathematical-alphabet styles are often read letter by letter or skipped. Keep important information in plain text and use styled Unicode for short accents." },
    ],
    relatedToolSlugs: ["small-caps", "cursive", "bubble", "superscript"],
    relatedGuideSlugs: ["unicode-text-converter-explained", "unicode-explained", "copy-paste-fonts-guide", "small-text-png-vs-unicode", "hidden-zero-width-characters"],
    lastUpdated: "2026-09-03",
  },
  {
    slug: "fancy-text-generator",
    title: "Fancy Text Generator — Stylish Fonts to Copy and Paste",
    metaDescription:
      "Turn text into fancy, stylish fonts you can copy and paste — cursive, gothic, bold, bubble, and dozens more. Free fancy text generator, no download.",
    h1: "Fancy Text Generator",
    eyebrow: "Decorative & stylish",
    intro: [
      "\"Fancy text\" is the umbrella name for decorative letter styles built from Unicode — cursive script, blackletter, outlined, bold, bubble, spaced, and framed. This fancy text generator produces all of them at once from whatever you type, so you can copy and paste a stylish font into a bio, caption, invitation, or display name without installing anything.",
      "Where the [small text generator](/) is tuned for compact, readable text, this page is tuned for variety and decoration. If you only want script lettering, the [cursive font generator](/tools/cursive) is the focused tool; for everything else, compare the styles below and copy the one you like.",
    ],
    howToSteps: [
      "Type the word, name, or phrase you want to make fancy into the box below.",
      "Compare the fancy styles — cursive, fraktur, double-struck, bold italic, bubble, squared, and decorated frames all render together.",
      "Copy the stylish font you want with one tap.",
      "Paste it into your bio, caption, or message, and check it on the target app, since a few styles fall back to plain letters on older keyboards.",
    ],
    featuredStyleSlugs: ["cursive", "fraktur", "double-struck", "bold-italic", "bubble", "squared", "sparkles", "small-caps", "fullwidth"],
    whereUsed: [
      { platform: "Aesthetic bios", blurb: "A fancy name line or tagline on Instagram, TikTok, or a Discord profile — see the [Instagram bio walkthrough](/guides/small-text-instagram-bio)." },
      { platform: "Gaming & display names", blurb: "Stylish display names and clan tags in games and chat apps that render Unicode." },
      { platform: "Invitations & captions", blurb: "A decorative heading or standout line in digital invites, stories, and posts." },
    ],
    faq: [
      { question: "What counts as a fancy font here?", answer: "Any decorative Unicode letter style — cursive script, blackletter (fraktur), outlined (double-struck), bold, [italic](/tools/italic), circled/bubble, squared, spaced, and framed styles. They're grouped together as 'fancy text'." },
      { question: "Are fancy fonts real fonts?", answer: "No. Each 'font' is a set of Unicode characters that look styled. That's why you can copy and paste them into apps that don't let you change the typeface." },
      { question: "Which fancy text styles are most popular?", answer: "Cursive script and bold are the most-used for names; fraktur and double-struck for a distinctive look; bubble and squared for playful posts." },
      { question: "Do fancy fonts work on Instagram and TikTok?", answer: "Yes, in bios, captions, and comments. They don't work in the @username field, which only accepts plain characters." },
      { question: "Why do some fancy letters show as boxes?", answer: "That device's installed font is missing the glyph for that Unicode block, most common on older Android. Cursive, bold, and small caps have the widest support if a style needs to be reliable." },
    ],
    relatedToolSlugs: ["cursive", "small-caps", "bubble", "superscript"],
    relatedGuideSlugs: ["fancy-text-styles-explained", "convert-text-to-cursive", "copy-paste-fonts-guide"],
    lastUpdated: "2026-09-03",
  },
  {
    slug: "tiny-text-generator",
    title: "Tiny Text Generator — Really Small Letters to Copy & Paste",
    metaDescription:
      "Make really tiny text with the three smallest Unicode styles — small caps, superscript, and subscript — copy and paste ready. Free tiny text generator.",
    h1: "Tiny Text Generator",
    eyebrow: "The smallest styles",
    intro: [
      "Genuinely tiny text comes from three Unicode blocks: small caps (ᴛɪɴʏ), superscript (ᵗⁱⁿʸ), and subscript (ₜᵢₙy). This tiny text generator focuses on those three so you can see how small each one goes and copy the smallest readable option for a bio, caption, or name.",
      "Superscript and subscript render the smallest but have gaps in their alphabets; small caps is slightly larger but converts every letter. For the full library of 20-plus styles — bold, cursive, bubble, and the rest — use the [small text generator](/) on the home page.",
    ],
    howToSteps: [
      "Type your text into the box below.",
      "Compare the three tiny styles — small caps stays fully readable, superscript and subscript look smallest.",
      "Copy the version that's still legible at the size you need.",
      "Paste it into your bio, caption, or display name, and preview it, since a few superscript and subscript letters fall back to full size.",
    ],
    featuredStyleSlugs: ["small-caps", "superscript", "subscript"],
    whereUsed: [
      { platform: "Instagram & TikTok bios", blurb: "A tiny tagline or a compact full bio line — see the [Instagram bio walkthrough](/guides/small-text-instagram-bio)." },
      { platform: "Discord names", blurb: "Small, understated display names and nicknames that stand out by being quieter, not louder." },
      { platform: "Aesthetic captions", blurb: "A tiny accent line above or below a normal-size caption for contrast." },
    ],
    faq: [
      { question: "Which style makes the smallest text?", answer: "Superscript and subscript characters render smallest — roughly 60–70% of normal height. Small caps is a little larger but has the advantage of a complete alphabet." },
      { question: "How do I make text really tiny?", answer: "Type it into the generator above and copy the superscript result for the smallest look, or small caps if you need every letter to convert cleanly." },
      { question: "Do tiny fonts work everywhere?", answer: "They work anywhere standard Unicode is accepted — most social apps and messengers. Strict fields like usernames reject them." },
      { question: "Why do some letters stay full-size?", answer: "Unicode doesn't define a superscript or subscript form for every letter (several capitals are missing). Those characters are left at normal size so the text stays readable." },
      { question: "Is tiny text the same as small text?", answer: "'Tiny text' usually means the three smallest styles on this page; 'small text' is the broader term that also covers bold, cursive, and the rest of the library on the home page." },
    ],
    relatedToolSlugs: ["small-caps", "superscript", "subscript", "cursive"],
    relatedGuideSlugs: ["how-to-make-tiny-text", "subscript-vs-superscript"],
    lastUpdated: "2026-09-03",
  },
  {
    slug: "discord-name-generator",
    title: "Discord Name Generator – Fancy & Symbol Names, Copy & Paste",
    metaDescription:
      "Generate fancy Discord names with stylish fonts and symbol wraps — bold, cursive, bubble, and more. Free Discord name generator, copy and paste ready.",
    h1: "Discord Name Generator",
    eyebrow: "Fancy & symbol names",
    intro: [
      "This Discord name generator turns a plain name into a set of decorated options — stylish fonts and symbol-wrapped versions — ready to copy and paste into your profile or a server nickname. It runs the same Unicode style engine as every tool on this site, so the result is real text, not an image, and it survives copy-paste exactly as shown.",
      "Discord actually has three separate name fields with different rules: your @username (the plain a–z, 0–9, underscore, and period handle you log in with), your display name (shown across all of Discord, accepts full Unicode, capped at 32 characters), and a server nickname (a per-server override of your display name, same rules). Fancy fonts and symbols work in the display name and nickname — never in the @username.",
    ],
    howToSteps: [
      "Type your name into the box below.",
      "Compare the styles — bold, cursive, bubble, small caps, squared, sparkles, hearts, and glitch all render at once.",
      "Copy the version you want, or wrap it with symbols using one of the templates below.",
      "In Discord, go to User Settings → Profile → Display Name to set it site-wide, or right-click a server → Change Nickname to set it for just that server.",
    ],
    featuredStyleSlugs: ["bold", "cursive", "bubble", "small-caps", "squared", "sparkles", "hearts", "fullwidth", "zalgo"],
    whereUsed: [
      { platform: "Display name", blurb: "Your Discord-wide profile name — accepts the full style list above, capped at 32 characters." },
      { platform: "Server nickname", blurb: "A per-server override of your display name — same Unicode rules, set individually in each server you're in." },
      { platform: "Symbol-wrap templates", blurb: "Frame a styled name with symbols for a cleaner look: ✦ NAME ✦ · 「 NAME 」 · ⚔ NAME ⚔ · 彡 NAME 彡. Paste the name from the generator above in place of NAME." },
    ],
    faq: [
      { question: "Can I use symbols and fancy fonts in my Discord name?", answer: "In your display name and any server nickname, yes — both accept the full Unicode range. Your @username is the exception: it's limited to lowercase letters, numbers, underscores, and periods, with no symbols or styled fonts." },
      { question: "What's the difference between a Discord username, display name, and nickname?", answer: "Your @username is the plain handle you log in with and mention people by. Your display name is what shows everywhere instead of it, and accepts full Unicode. A server nickname is a further per-server override of your display name — same rules, set individually in each server." },
      { question: "Is there a character limit for Discord names?", answer: "Display names and nicknames are capped at 32 characters, including any symbols in a wrap template. Count the full decorated version, not just the plain name, before you commit to it." },
      { question: "Do I need Discord Nitro to use fancy fonts or symbols?", answer: "No. These are plain Unicode characters, not custom emoji — anyone can paste them into a display name or nickname without a Nitro subscription." },
      { question: "How do I change my Discord display name?", answer: "Open User Settings → Profile, edit the Display Name field, paste your generated name, and save. This changes it everywhere on Discord, not just one server." },
      { question: "How do I set a nickname for just one server?", answer: "Right-click the server icon (or your name in the member list), choose Change Nickname, paste the name, and save. It only applies inside that server." },
      { question: "Why does my fancy name show as boxes for some people?", answer: "A few Unicode symbols come from less common blocks that an older device's font doesn't include a glyph for. Stick to widely-supported styles — bold, cursive, small caps — for a name you need to render reliably." },
      { question: "Can I make my Discord name invisible?", answer: "That's a different technique from styling — see the [blank Discord name guide](/guides/blank-discord-name-message) for what currently works and what Discord blocks." },
      { question: "Can I use these symbols in a channel name too?", answer: "Discord lowercases channel names and replaces spaces with hyphens, but most symbols pass through. It's a different field from your personal display name or nickname, so test it there directly." },
      { question: "What's the easiest style to read in a Discord name?", answer: "Small caps and bold keep every letter recognizable at a glance. Heavily decorated styles like glitch or symbol-wrapped names stand out more but cost some readability — use them for a display name you want noticed, not one people need to type or search for." },
    ],
    relatedToolSlugs: ["bold", "cursive", "bubble", "small-caps"],
    relatedGuideSlugs: ["tiny-text-discord", "blank-discord-name-message", "superscript-discord"],
    lastUpdated: "2026-09-22",
  },
];

export function getGalleryPage(slug: string) {
  return galleryPages.find((page) => page.slug === slug);
}
