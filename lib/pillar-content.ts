import type { GuideFaq } from "@/lib/guides";

export type WhereUsed = { platform: string; blurb: string };

export type NativeFormatting = { app: string; instructions: string };

export type PillarContent = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  howToSteps: string[];
  whereUsed: WhereUsed[];
  nativeFormatting?: NativeFormatting[];
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
    relatedGuideSlugs: ["what-is-invisible-text", "blank-discord-name-message", "blank-text-copy-paste", "hidden-zero-width-characters", "invisible-character-instagram"],
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
      { platform: "Math & indexed variables", blurb: "Indexed variables and log bases (x₁, x₂, aₙ, log₂) in notes and worked examples — pair with the superscript generator for exponents in the same formula." },
    ],
    nativeFormatting: [
      { app: "Microsoft Word", instructions: "Select the text, then press Ctrl+= (Windows) or ⌘+= (Mac)." },
      { app: "Google Docs", instructions: "Select the text, then press Ctrl+, (Windows) or ⌘+, (Mac)." },
      { app: "Excel", instructions: "Double-click into the cell, select the characters, open Format Cells → Font, and check Subscript — there's no default keyboard shortcut." },
      { app: "HTML", instructions: "Wrap the characters in a <sub> tag — for example H<sub>2</sub>O." },
    ],
    faq: [
      { question: "What is subscript text used for?", answer: "Mostly chemical formulas (H₂O, CO₂) and mathematically subscripted variables (xₙ) — anywhere a smaller character needs to sit below the baseline instead of above it." },
      { question: "How do I type subscript numbers?", answer: "Type the digit into the generator above, copy the subscript result, and paste it directly after the letter or number it belongs to." },
      { question: "Why don't all letters convert to subscript?", answer: "Unicode only defines subscript forms for a handful of letters — there's no subscript version of most consonants. When a letter has no subscript form, this generator leaves the original letter in place instead of substituting something misleading." },
      { question: "Is a subscript generator different from a superscript generator?", answer: "Yes — they use entirely separate Unicode character blocks and serve different purposes. This site keeps them as two focused tools; see the [subscript generator](/tools/subscript) and the superscript generator in the tool directory." },
      { question: "Does subscript copy-paste work in Word or Google Docs?", answer: "Yes, pasted subscript displays correctly in both. For documents you'll edit heavily afterward, each app's built-in subscript formatting is more robust since it's a real text style rather than a substituted character." },
      { question: "Which letters don't have a subscript version?", answer: "Unicode has no subscript form for c, d, f, g, w, y, or z — every other lowercase letter and all ten digits do. For 'w' specifically, this generator approximates it with two subscript 'v' characters (ᵥᵥ), since no single subscript w exists. See the [full character reference](/guides/superscript-subscript-character-set) for every supported letter and number." },
      { question: "Can I write a full chemical formula like C₆H₁₂O₆ with this?", answer: "Yes — type each number where it needs to sit below the line (6, 12, 6) and paste each result right after its letter. Every digit 0–9 has a complete subscript form, so formulas with only numbers convert exactly every time. The [chemistry formula guide](/guides/subscript-numbers-chemistry) walks through more examples." },
      { question: "How do I type subscript directly in Word or Google Docs instead?", answer: "Word: select the text and press Ctrl+= (Windows) or ⌘+= (Mac). Google Docs: select the text and press Ctrl+, or ⌘+,. Both apply a real subscript text style, which holds up better through later edits than a substituted character." },
      { question: "Is there a subscript shortcut for Excel?", answer: "Excel has no default keyboard shortcut for subscript. Double-click into the cell, select the characters, open Format Cells → Font, and check Subscript." },
      { question: "How do I write subscript in HTML?", answer: "Wrap the characters in a <sub> tag — for example H<sub>2</sub>O. Unicode subscript from this generator is the plain-text alternative for fields that don't support HTML or rich formatting at all." },
    ],
    relatedGuideSlugs: ["subscript-vs-superscript", "subscript-numbers-chemistry", "superscript-subscript-character-set", "smallest-text-style-compared"],
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
    relatedGuideSlugs: ["cursive-fonts-instagram-bio", "how-cursive-font-generator-works", "aesthetic-cursive-fonts", "cursive-font-keyboard", "thin-cursive-fonts"],
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
    nativeFormatting: [
      { app: "Microsoft Word", instructions: "Select the text, then press Ctrl+Shift+K, or use Format → Font → Small caps." },
      { app: "Google Docs", instructions: "Google Docs has no native small-caps option — this Unicode generator is the only copy-paste-ready way to get the look there." },
      { app: "CSS (for developers)", instructions: "Add font-variant: small-caps to the element — but it only renders inside that styled page and reverts to plain text the moment it's copied elsewhere." },
    ],
    faq: [
      { question: "What is a small caps generator?", answer: "It's a tool that swaps each letter you type for its Unicode small-capital character (A → ᴀ), producing small capital letters you can copy and paste. It isn't a font — the styled letters are standard Unicode, so they display without any install." },
      { question: "How do I copy and paste small capital letters?", answer: "Type your text into the generator above, tap Copy on the small caps result, then paste it into the bio, caption, or name field you need. It behaves like copying any other text." },
      { question: "Does small caps text work on Instagram and Discord?", answer: "Yes. Both accept standard Unicode in bios, captions, display names, and messages, and small caps is standard Unicode. It's blocked only in strict fields like the Instagram @username or Discord @handle." },
      { question: "Why do a couple of letters stay normal or show as a box?", answer: "Unicode's small-capital block is nearly complete, but a few characters differ across fonts and some older Android builds miss a glyph. When there's no reliable small-cap form the generator leaves the original letter rather than substituting a lookalike." },
      { question: "Is small caps the same as ALL CAPS?", answer: "No. ALL CAPS uses full-height capitals; small caps uses capital letterforms shrunk to about x-height, so the text reads as quieter and more compact. It also differs from Title Case, which only capitalises the first letter of each word." },
      { question: "How do I get small caps in Microsoft Word?", answer: "Select the text, press Ctrl+Shift+K, or use Format → Font → Small caps. It's a real text style there, so it survives further editing — but paste that text into a plain field like a bio or a chat, and it reverts to normal capitals, since the style doesn't travel with it." },
      { question: "Does CSS have a small caps option?", answer: "Yes — font-variant: small-caps — but it only renders inside a page that loads that CSS. Copy the text out to anywhere else and it reverts to plain letters, which is exactly why a Unicode small caps generator is useful for anything that leaves that one page." },
      { question: "Does Google Docs have small caps formatting?", answer: "No — unlike Word, Google Docs has no built-in small-caps option in its formatting menu. Pasting Unicode small caps from this generator is the only way to get the look there." },
      { question: "Do numbers convert to small caps too?", answer: "No — this generator only converts letters. Unicode's small-caps block doesn't include digit forms the way superscript and subscript do, so numbers are left at normal size." },
      { question: "Is Word's Small Caps the same as this generator's output?", answer: "They look similar but work differently. Word's version is a text style that only holds inside Word-compatible editing. This generator's output is actual Unicode characters, so it looks the same everywhere you paste it — a bio, a chat, a spreadsheet — with no editor required." },
    ],
    relatedGuideSlugs: ["unicode-explained", "copy-paste-text-tricks-social-media-bios", "small-caps-copy-paste", "small-caps-vs-all-caps", "fonts-for-tiktok", "numbers-in-small-font", "small-text-png-vs-unicode"],
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
      { platform: "Chemistry & trademarks", blurb: "Ionic charges (Na⁺, Cl⁻) alongside the subscript numbers in a formula, plus ™ and ® marks in a bio or listing — see the [subscript generator](/tools/subscript) for the half of a formula that sits below the line." },
    ],
    nativeFormatting: [
      { app: "Microsoft Word", instructions: "Select the text, then press Ctrl+Shift+= (Windows) or ⌘+Shift+= (Mac)." },
      { app: "Google Docs", instructions: "Select the text, then press Ctrl+. (Windows) or ⌘+. (Mac)." },
      { app: "Excel", instructions: "Double-click into the cell, select the characters, open Format Cells → Font, and check Superscript — there's no default keyboard shortcut." },
      { app: "PowerPoint", instructions: "Same shortcut as Word — Ctrl+Shift+= — since it shares Office's formatting engine." },
      { app: "HTML", instructions: "Wrap the characters in a <sup> tag — for example x<sup>2</sup>." },
    ],
    faq: [
      { question: "How do I get superscript to copy and paste?", answer: "Type into the generator above, copy the superscript result, and paste it wherever you need it. The raised look is built from Unicode superscript characters, so it survives copy-paste like normal text." },
      { question: "Can I make exponents and powers with this?", answer: "Yes — every digit 0–9 has a Unicode superscript form, so x², 10⁶, and cm³ all convert exactly. Type the exponent on its own and paste it right after the base." },
      { question: "Why aren't all letters converting to superscript?", answer: "Unicode defines raised forms for all digits and most lowercase letters but only some capitals. Unsupported characters are left as-is so the text stays readable rather than mixing in misleading symbols." },
      { question: "Does superscript work in Word, Google Docs, and Discord?", answer: "Pasted superscript displays correctly in all three. For documents you'll heavily edit afterwards, the app's own superscript formatting is more robust because it's a text style rather than a substituted character." },
      { question: "What's the difference between superscript and subscript?", answer: "Superscript sits above the baseline (x², 1ˢᵗ); subscript sits below it (H₂O, xₙ). They use separate Unicode blocks — see the [subscript vs superscript guide](/guides/subscript-vs-superscript)." },
      { question: "Does this work for chemical or ionic notation like Na⁺ and Cl⁻?", answer: "Yes — charge symbols and ion notation use the same Unicode superscript characters as exponents. For the subscript numbers in a formula (H₂O, CO₂), use the [subscript generator](/tools/subscript) instead; most formulas need both tools together." },
      { question: "Can I add a trademark or copyright symbol this way?", answer: "™ and © aren't superscript characters technically, but people commonly raise a small ™ or ® next to a brand name using this same generator — type the letters, copy the result, and place it right after the name." },
      { question: "How do I type superscript directly in Word or Google Docs instead?", answer: "Word: select the text and press Ctrl+Shift+= (Windows) or ⌘+Shift+= (Mac). Google Docs: select the text and press Ctrl+. or ⌘+. Both apply a real superscript text style rather than swapping characters, which holds up better through later edits." },
      { question: "Why do 'i' and 'q' never convert, specifically?", answer: "Unicode never assigned superscript code points for lowercase i or q — every other lowercase letter has one, but those two don't exist in any font. The generator leaves them as regular letters rather than faking a lookalike. See the [full character reference](/guides/superscript-subscript-character-set) for what does convert." },
      { question: "Is there a superscript shortcut for Excel or PowerPoint?", answer: "PowerPoint uses the same shortcut as Word (Ctrl+Shift+=). Excel has no default keyboard shortcut — select the characters inside the cell, open Format Cells → Font, and check Superscript." },
    ],
    relatedGuideSlugs: ["subscript-vs-superscript", "subscript-numbers-chemistry", "superscript-discord", "superscript-numbers-exponents", "superscript-subscript-character-set", "smallest-text-style-compared"],
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
    relatedGuideSlugs: ["copy-paste-text-tricks-social-media-bios", "small-text-instagram-bio", "bubble-text-instagram-tiktok"],
  },
  {
    slug: "underline",
    title: "Underline Text Generator – Underline & Underscore Copy & Paste",
    metaDescription:
      "Add a real underline to text you can copy and paste — no formatting toolbar needed. Free underline text generator using a Unicode combining underline.",
    h1: "Underline Text Generator",
    lastUpdated: "2026-09-26",
    intro: [
      "This underline text generator adds a line beneath every character using a Unicode combining underline mark, so the underlined text copies and pastes into places that have no formatting toolbar — bios, captions, LinkedIn posts, chat messages, and display names. The mark is U+0332 (COMBINING LOW LINE), and it travels with the text as a real character rather than a style setting.",
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
      { platform: "LinkedIn posts", blurb: "LinkedIn's post composer has no underline (or bold) button, so a pasted Unicode underline is the only way to underline a phrase there. Keep it to a few words — see the link caveat in the FAQ." },
    ],
    nativeFormatting: [
      { app: "Microsoft Word", instructions: "Select the text, then press Ctrl+U (Windows) or ⌘+U (Mac). Ctrl+Shift+D gives a double underline in Word for Windows." },
      { app: "Google Docs", instructions: "Select the text, then press Ctrl+U (Windows) or ⌘+U (Mac)." },
      { app: "Discord", instructions: "Wrap the text in two underscores on each side — __like this__ — and Discord's own markdown underlines it, no Unicode needed." },
      { app: "HTML", instructions: "Wrap the words in a <u> tag, or use CSS text-decoration: underline. Both vanish the moment the text is copied into a plain-text field." },
    ],
    faq: [
      { question: "How does an underline text generator work without a formatting button?", answer: "It attaches a Unicode combining low line to each character. The underline is part of the text itself, so it pastes into plain-text fields that have no underline option." },
      { question: "How do I copy and paste underlined text?", answer: "Type into the generator above, tap Copy, and paste into the field you need. The underline comes along with the letters." },
      { question: "Why does my underline sometimes not show up?", answer: "Some platforms strip or normalise combining marks for consistency or safety. When that happens the base letters stay but the line is removed, and there's no fix on that specific surface." },
      { question: "Is this the same as typing underscores between letters?", answer: "No. Underscores between characters sit on the baseline. This tool places a continuous underline beneath each character, closer to a true underline." },
      { question: "Does underlined Unicode text work in Word or Google Docs?", answer: "It pastes and displays, but for documents you'll keep editing, the app's own underline formatting is cleaner because it's a text attribute rather than stacked marks." },
      { question: "How do I underline text on LinkedIn or Instagram?", answer: "Neither app has an underline button, so type your phrase into the generator above, copy the result, and paste it into the post, caption, bio, or comment. The underline is part of the characters, so the app has nothing to strip." },
      { question: "Will underlined text look like a link?", answer: "To some readers, yes — an underline is the classic signal for a clickable link, which is one reason social apps don't offer it. Underline a short phrase for emphasis, and never underline something readers might try to tap." },
      { question: "Does underlined text use up more of my character limit?", answer: "Yes. Every underlined letter is two code points — the letter plus U+0332 — so a 20-letter phrase costs about 40 characters toward a limit like Instagram's 150-character bio." },
      { question: "Can I make a double underline?", answer: "Unicode has a combining double low line (U+0333), but this generator uses the single U+0332 line because it renders most consistently across apps. In Word you can get a native double underline with Ctrl+Shift+D." },
      { question: "Is underlined Unicode text searchable?", answer: "Not reliably. The combining marks make the word a different character string, so platform search and screen readers can miss it or read it awkwardly — keep keywords and key information in plain text." },
    ],
    relatedGuideSlugs: ["unicode-explained", "copy-paste-text-tricks-social-media-bios", "underline-text-copy-paste"],
  },
  {
    slug: "bold",
    title: "Bold Text Generator – Bold Unicode Copy & Paste",
    metaDescription:
      "Turn text into bold Unicode you can copy and paste — for Instagram, WhatsApp, X/Twitter, and LinkedIn. Free bold text generator, no formatting toolbar needed.",
    h1: "Bold Text Generator",
    lastUpdated: "2026-09-13",
    intro: [
      "This bold text generator turns plain letters and numbers into bold Unicode mathematical characters — 𝐥𝐢𝐤𝐞 𝐭𝐡𝐢𝐬 — that you can copy and paste anywhere, including places with no bold button at all. Because the boldness is part of the character itself rather than a formatting style, it survives copy-paste into plain-text fields that would otherwise strip rich-text formatting.",
      "It's the fastest way to get bold text into an Instagram bio, a WhatsApp message, an X/Twitter post, or a LinkedIn update — all of which either lack a bold button or only support one in limited places. Type below, copy the bold result, and paste it in; if you want emphasis without full bold, the [italic text generator](/tools/italic), [cursive font generator](/tools/cursive), and [underline text generator](/tools/underline) are lighter-weight alternatives.",
    ],
    howToSteps: [
      "Type or paste the text you want in bold into the box below.",
      "Watch the bold result update instantly as you type, alongside the other styles.",
      "Copy the bold output with one tap.",
      "Paste it into your bio, caption, message, or post — it displays the same way for anyone who opens it, with no font install needed on their end either.",
    ],
    whereUsed: [
      { platform: "Social bios & posts", blurb: "A bold name or headline line in an Instagram, TikTok, or X/Twitter bio — see [fonts for X/Twitter](/guides/fonts-for-twitter-x) for the platform-specific fields that accept it." },
      { platform: "WhatsApp & Messenger chats", blurb: "WhatsApp's own bold formatting only works with asterisks in a live chat; pasted Unicode bold works everywhere, including status updates and group names." },
      { platform: "Documents & plain-text fields", blurb: "A bold heading or label in plain-text notes, forms, and fields that don't support rich-text formatting." },
    ],
    faq: [
      { question: "How do I make bold text to copy and paste?", answer: "Type your text into the generator above, copy the bold result, and paste it wherever you need it — no formatting toolbar or font install required, since the boldness is built into the Unicode characters themselves." },
      { question: "Why use a bold text generator instead of my app's bold button?", answer: "Many apps — Instagram bios, WhatsApp status, most bios and display-name fields — simply don't offer a bold button. A bold text generator gives you the same visual weight anywhere plain text is accepted." },
      { question: "Does bold Unicode text work on Instagram and WhatsApp?", answer: "Yes, in bios, captions, comments, and chat messages. It won't work in strict fields like the Instagram @username, which only accepts plain characters." },
      { question: "Why do a few bold characters look unchanged?", answer: "Unicode's bold mathematical alphabet covers A–Z, a–z, and 0–9, but not punctuation or symbols — those characters are left as-is rather than substituting a misleading look-alike." },
      { question: "Is copy-paste bold text the same as real bold formatting?", answer: "No. It's a different set of Unicode characters that happen to look bold, not a style applied to your original letters. That's exactly why it travels through plain-text fields that strip actual formatting." },
    ],
    relatedGuideSlugs: ["copy-paste-fonts-guide", "fonts-for-twitter-x"],
  },
  {
    slug: "strikethrough",
    title: "Strikethrough Text Generator – Cross Out Text Copy & Paste",
    metaDescription:
      "Cross out text with a real strikethrough line you can copy and paste — no formatting toolbar needed. Free strikethrough text generator using Unicode combining marks.",
    h1: "Strikethrough Text Generator",
    lastUpdated: "2026-09-13",
    intro: [
      "This strikethrough text generator draws a line through every character using a Unicode combining mark, so the crossed-out text copies and pastes into bios, captions, chat messages, and comments that have no strikethrough button. The line travels with the letters as real characters, not a formatting style.",
      "It's a quick way to cross out a price, a to-do item, or a joke correction anywhere plain text is accepted. Type below and copy the result; if you want a line under text instead of through it, the [underline text generator](/tools/underline) does that with the same combining-mark approach.",
    ],
    howToSteps: [
      "Type or paste the text you want to cross out into the box below.",
      "Check the strikethrough result — a combining line is added through each character as you type.",
      "Copy the strikethrough output with one tap.",
      "Paste it into a caption, message, comment, or document; if the line disappears, that app has stripped combining marks and there's no workaround on that surface.",
    ],
    whereUsed: [
      { platform: "Social captions & comments", blurb: "Crossing out an old price, a joke 'correction', or a canceled plan in a caption or comment." },
      { platform: "Chats & to-do notes", blurb: "Marking a chat message or plain-text to-do item as done without a rich-text editor." },
      { platform: "Discord & gaming names", blurb: "A crossed-out word or name for a stylized effect in display names and messages." },
    ],
    faq: [
      { question: "How do I make strikethrough text to copy and paste?", answer: "Type into the generator above, tap Copy on the strikethrough result, and paste it into the field you need. The line comes along with the letters as part of the text." },
      { question: "Does strikethrough text work without a formatting toolbar?", answer: "Yes — that's the point. It attaches a Unicode combining line to each character, so it pastes into plain-text fields that have no strikethrough option at all." },
      { question: "Why does my strikethrough line sometimes disappear?", answer: "Some platforms strip or normalise combining marks for consistency or safety. When that happens the base letters remain but the line is removed, and there's no fix on that specific surface." },
      { question: "Is this the same as my app's built-in strikethrough formatting?", answer: "No — apps with a real strikethrough button apply a text style. This generator substitutes a combining character instead, which is why it survives copy-paste into places that would strip an actual style." },
      { question: "Does strikethrough copy-paste work on Discord and Instagram?", answer: "Yes, in messages, captions, comments, and bios. Discord also has its own markdown strikethrough (`~~text~~`) inside chat, but the Unicode version works in fields Discord's markdown doesn't reach, like display names." },
    ],
    relatedGuideSlugs: ["copy-paste-fonts-guide", "cool-different-fonts"],
  },
  {
    slug: "upside-down",
    title: "Upside Down Text Generator – Flip Text Copy & Paste",
    metaDescription:
      "Flip text upside down and reverse it — copy and paste ready. Free upside down text generator for bios, captions, and jokes, no app needed.",
    h1: "Upside Down Text Generator",
    lastUpdated: "2026-09-13",
    intro: [
      "This upside down text generator reverses your text and swaps each letter for a Unicode character that reads correctly when flipped — ʇxǝʇ ǝʞᴉl sᴉɥ┴ — so the flipped result is still real, copy-paste-ready text rather than a rotated image. It works letter by letter, then reverses the order so the whole line reads correctly upside down from left to right.",
      "It's mostly used for a novelty caption, a joke reply, or a display name that stands out. Coverage is strongest for lowercase letters and digits; a handful of characters have no upside-down look-alike and are left unflipped rather than substituting something misleading. For a different kind of reversal, the [bubble text generator](/tools/bubble) and [cursive font generator](/tools/cursive) give a decorative look without flipping anything.",
    ],
    howToSteps: [
      "Type the word or phrase you want flipped into the box below.",
      "Watch it flip upside down and reverse instantly as you type.",
      "Copy the upside down result with one tap.",
      "Paste it into your bio, caption, comment, or message — it reads upside down for everyone who sees it, no rotation needed on their end.",
    ],
    whereUsed: [
      { platform: "Captions & comments", blurb: "A novelty caption line or a playful reply that stands out by literally being upside down." },
      { platform: "Bios & display names", blurb: "A flipped name or tagline in Instagram, TikTok, or Discord for a distinctive profile." },
      { platform: "Jokes & messages", blurb: "A flipped punchline or reaction in a chat, since the novelty is the whole point." },
      { platform: "Riddles & hidden answers", blurb: "Flip the answer to a question or a spoiler so it takes a deliberate second to read — a common trick in puzzles, quizzes, and joke replies." },
    ],
    faq: [
      { question: "How do I flip text upside down to copy and paste?", answer: "Type your text into the generator above, copy the flipped result, and paste it wherever you need it — the flipping and reversing both happen automatically." },
      { question: "Why are some letters not flipped correctly?", answer: "Unicode only has upside-down look-alikes for most lowercase letters and digits — a few characters, mostly uppercase, have no good match and are left as-is rather than substituting a misleading symbol." },
      { question: "Is upside down text the same as mirrored or flipped text?", answer: "Not quite. This generator flips text vertically (upside down) and reverses the reading order, which is the classic 'ʇxǝʇ uʍop ǝpᴉsdn' effect. A true left-right mirror flips each letter's shape horizontally instead — that's what the [mirror text generator](/tools/mirror) does." },
      { question: "Does upside down text work on Instagram and Discord?", answer: "Yes, in bios, captions, comments, and display names — anywhere standard Unicode is accepted. It won't work in strict fields like the Instagram @username." },
      { question: "Why does upside down text look different on some phones?", answer: "A few of the flipped characters come from less common Unicode blocks, so an older device's font may render one or two letters as a box or a slightly different shape." },
      { question: "Which letters stay the same when flipped upside down?", answer: "l, o, s, x, and z look identical rotated 180°, so they appear unchanged even though the generator did convert them. A few uppercase letters (H, I, N, S, X, O) are also self-symmetric for the same reason." },
      { question: "Can I use this to hide a riddle answer or a spoiler?", answer: "Yes — flip the answer, paste it below the question, and it stays readable-but-deliberate: whoever wants it has to actively flip it back, rather than reading it by accident." },
      { question: "Does upside down text work in Discord?", answer: "Yes, in display names, server nicknames, messages, and bios — anywhere Discord accepts standard Unicode. It won't work in the @username field, which only accepts plain characters." },
      { question: "How do I flip upside down text back to normal?", answer: "There's no automatic reverse on this tool — paste it back in and read the mapped characters mentally, or just rotate your screen. Since the mapping isn't one-to-one for every character, a perfect automatic un-flip isn't reliable." },
      { question: "Does upside down text show up in search results?", answer: "No — search engines index the literal Unicode characters, which are different code points from normal letters, so upside-down text doesn't match a plain-text search for the same word." },
    ],
    relatedGuideSlugs: ["cool-different-fonts", "copy-paste-fonts-guide"],
  },
  {
    slug: "zalgo",
    title: "Glitch Text Generator – Zalgo & Corrupted Text Copy & Paste",
    metaDescription:
      "Turn text into creepy glitch, zalgo, or corrupted text you can copy and paste. Free glitch text generator using stacked Unicode combining marks.",
    h1: "Glitch Text Generator",
    lastUpdated: "2026-09-13",
    intro: [
      "This glitch text generator — also known as a zalgo text generator — stacks Unicode combining marks above, through, and below each letter to produce that corrupted, creepy, 'glitched-out' look, built from real text rather than an image or video effect. The more marks stacked on, the more distorted and unstable the text appears.",
      "It's popular for horror-themed posts, creepypasta text, Discord messages, and usernames that need to stand out. Because it's real Unicode text, it copies and pastes anywhere plain text is accepted — though the same density that makes it look unsettling can also make it hard to read or trigger spam filters in a few apps, so it's worth previewing before you rely on it somewhere important.",
    ],
    howToSteps: [
      "Type the word or phrase you want glitched into the box below.",
      "Watch it corrupt in real time as combining marks stack onto each letter.",
      "Copy the glitch text result with one tap.",
      "Paste it into your caption, message, or display name, and preview it there, since a few apps or moderation filters treat heavily-stacked text as suspicious.",
    ],
    whereUsed: [
      { platform: "Discord & gaming names", blurb: "Creepy or glitchy display names and messages — a common horror-game and creepypasta aesthetic." },
      { platform: "Horror & creepypasta posts", blurb: "A corrupted-looking heading or quote to set the tone on a horror-themed post or story." },
      { platform: "Captions & comments", blurb: "A short glitch-text accent for a spooky or chaotic-feeling caption." },
    ],
    faq: [
      { question: "What is glitch text (zalgo text)?", answer: "It's text built by stacking multiple Unicode combining marks — accents, underlines, and overlines meant to be used sparingly — onto each character, which creates the corrupted, unstable 'glitched' look often called zalgo text." },
      { question: "How do I make glitch or zalgo text to copy and paste?", answer: "Type your text into the generator above, copy the corrupted result, and paste it wherever you need it — it's standard Unicode, so no special app or font is required." },
      { question: "Is glitch text the same as zalgo text?", answer: "Yes — 'glitch text' and 'zalgo text' both describe the same combining-mark effect. Some communities also call it 'corrupted text' or 'creepy text'." },
      { question: "Why does heavily glitched text get cut off or blocked in some apps?", answer: "A dense stack of combining marks can trip length limits or spam/abuse filters in some apps, since it's an unusual pattern compared to normal text. If that happens, try a lighter amount of glitching." },
      { question: "Does glitch text work in Discord names and messages?", answer: "Yes, in messages and most display names. Extremely heavy glitching can occasionally be rejected by a server's name-length limit, since each combining mark adds to the character count even though it doesn't add visible width." },
    ],
    relatedGuideSlugs: ["cool-different-fonts", "are-copy-paste-fonts-safe", "fonts-for-roblox"],
  },
  {
    slug: "italic",
    title: "Italic Text Generator – Italic Font Copy & Paste (Free)",
    metaDescription:
      "Turn text into italic Unicode you can copy and paste into Instagram, WhatsApp, LinkedIn, and X — no italic button needed. Free italic text generator.",
    h1: "Italic Text Generator",
    lastUpdated: "2026-09-26",
    intro: [
      "This italic text generator swaps each letter for its slanted twin from Unicode's Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF) — 𝑙𝑖𝑘𝑒 𝑡ℎ𝑖𝑠 — so the italics are part of the characters themselves. That's why they survive copy-paste into bios, captions, and posts on apps that have no italic button.",
      "Italic is the quietest way to add emphasis: a title, a quote, a foreign word, or an inner thought, without the weight of the [bold text generator](/tools/bold) or the flourish of the [cursive font generator](/tools/cursive). Type below, copy the italic result, and paste it where you need it.",
    ],
    howToSteps: [
      "Type or paste your text into the box below.",
      "Check the italic result — every letter a–z and A–Z converts as you type.",
      "Copy the italic output with one tap.",
      "Paste it into your post, bio, or message and preview it there; numbers and punctuation stay upright because Unicode has no italic versions of them.",
    ],
    whereUsed: [
      { platform: "Instagram & TikTok", blurb: "An italic tagline, quote, or name line in a bio or caption, where the apps offer no text formatting at all." },
      { platform: "LinkedIn & X", blurb: "Italicise a book title, a quote, or a single stressed word in a post — neither composer has an italic button." },
      { platform: "Facebook & YouTube", blurb: "Posts, comments, and channel descriptions that accept Unicode but strip rich-text formatting." },
    ],
    nativeFormatting: [
      { app: "WhatsApp", instructions: "Wrap the text in single underscores — _like this_ — and WhatsApp italicises it natively. It only shows as italic inside WhatsApp." },
      { app: "Discord", instructions: "Wrap the text in single asterisks or underscores — *like this* — to italicise it with Discord's markdown." },
      { app: "Microsoft Word & Google Docs", instructions: "Select the text, then press Ctrl+I (Windows) or ⌘+I (Mac)." },
      { app: "HTML", instructions: "Wrap the words in an <em> tag for emphasis or <i> for titles and foreign terms. The styling disappears when the text is copied into a plain-text field." },
    ],
    faq: [
      { question: "How does an italic text generator work?", answer: "It replaces each normal letter with the matching character from Unicode's mathematical italic alphabet. The result is plain text that looks slanted, so it pastes anywhere Unicode is accepted without installing a font." },
      { question: "Why does the italic h look slightly different?", answer: "Unicode never added a mathematical italic small h, because the Planck constant symbol ℎ (U+210E) already existed. Generators use ℎ in its place, so it can look a touch different in some fonts." },
      { question: "Why don't numbers turn italic?", answer: "The Mathematical Alphanumeric Symbols block has bold, double-struck, sans-serif, and monospace digits, but no italic digits. Numbers and punctuation stay upright in italic text for that reason." },
      { question: "Does italic text work on Instagram, Facebook, and X?", answer: "Yes — in bios, captions, posts, and comments. It won't work in username or handle fields, which only accept plain letters, numbers, and a few symbols." },
      { question: "How do I italicise text on WhatsApp without a generator?", answer: "Put an underscore on both sides of the words, like _this_. WhatsApp formats it as italic, but only inside WhatsApp — the Unicode version from this generator keeps its slant wherever you paste it." },
      { question: "What's the difference between italic and cursive text?", answer: "Italic is an upright font slanted to the right, with the letters still separate. Cursive (script) imitates handwriting with loops and flourishes. For a handwritten look, use the [cursive font generator](/tools/cursive)." },
      { question: "Can I make bold italic text?", answer: "Yes. Bold italic is its own Unicode alphabet — 𝑩𝒐𝒍𝒅 𝒊𝒕𝒂𝒍𝒊𝒄 — and it appears in the style list below the converter, next to plain italic." },
      { question: "Is Unicode italic text accessible to screen readers?", answer: "Not reliably. Many screen readers read mathematical italic letters one by one or skip them. Keep important information in plain text and use italics for short accents." },
      { question: "Will italic text show up in search?", answer: "Usually not. Platform search and search engines treat the italic characters as different symbols from normal letters, so an italicised keyword may not match a plain-text search." },
      { question: "When should I use italics?", answer: "The standard uses are titles of books, films, and albums, foreign words, quotes, and a single stressed word. Italicising whole paragraphs reduces readability, especially on mobile." },
    ],
    relatedGuideSlugs: ["fancy-text-styles-explained", "copy-paste-fonts-guide", "fonts-for-twitter-x"],
  },
  {
    slug: "mirror",
    title: "Mirror Text Generator – Flip Text Backwards (Copy & Paste)",
    metaDescription:
      "Mirror your text so it reads like a reflection — letters flipped left-to-right and reversed. Free mirror text generator, copy and paste ready.",
    h1: "Mirror Text Generator",
    lastUpdated: "2026-09-26",
    intro: [
      "This mirror text generator flips your text horizontally, as if you were reading it in a mirror: the order of the characters is reversed and each letter that has a mirrored Unicode twin is swapped for it (b ↔ d, p ↔ q, e → ɘ, R → Я). Hold the result up to a mirror and it reads normally again.",
      "Mirror text is not the same as backwards text or upside-down text. Backwards text only reverses the letter order and leaves each letter facing the normal way. Upside-down text rotates everything 180°, so try the [upside down text generator](/tools/upside-down) if you want to flip text vertically instead.",
    ],
    howToSteps: [
      "Type or paste the text you want to mirror into the box below.",
      "Check the mirror result — the line is reversed and each flippable letter is swapped for its mirror image.",
      "Copy the mirrored text with one tap.",
      "Paste it into a message, bio, or caption; letters with no mirrored Unicode form stay as they are, so preview it first.",
    ],
    whereUsed: [
      { platform: "Puzzles & spoilers", blurb: "Hide a riddle answer, a quiz solution, or a spoiler so readers have to work to read it, or check it in a mirror." },
      { platform: "Bios & captions", blurb: "A reflected name or tagline that makes people stop scrolling, and a popular choice for Opposite Day posts." },
      { platform: "Design checks", blurb: "Preview how a word reads reversed before it goes on a window decal, glass, a stamp, or anything seen from the other side." },
    ],
    faq: [
      { question: "What is mirror text?", answer: "Mirror text (also called mirror writing) is text written in reverse, so it only reads normally when reflected in a mirror. This generator recreates it with Unicode characters that look like horizontally flipped letters." },
      { question: "What's the difference between mirror text, backwards text, and upside-down text?", answer: "Backwards text reverses the letter order only. Mirror text reverses the order and flips each letter left-to-right. Upside-down text rotates the whole line 180°, flipping it top-to-bottom." },
      { question: "Why don't some letters mirror?", answer: "Two reasons. Symmetrical letters like A, H, I, M, O, T, U, V, W, X, Y, i, l, o, v, w, and x already look the same in a mirror. Others, such as f, g, h, j, y, G, K, and Q, have no clean mirrored character in Unicode, so they're left unchanged instead of being swapped for a misleading look-alike." },
      { question: "How do I read mirror text?", answer: "Hold your screen up to a mirror, or paste the text back into this generator: mirroring it a second time puts it back in normal order. A few letters come back as their closest match rather than the original." },
      { question: "Did Leonardo da Vinci use mirror writing?", answer: "Yes. Leonardo da Vinci filled many of his notebooks with right-to-left mirror script, which is the most famous historical example. Why he did it is still debated: he was left-handed, and writing right to left avoided smudging the ink." },
      { question: "Why is 'AMBULANCE' written backwards on ambulances?", answer: "It's mirror-printed on the front of the vehicle so drivers ahead read it the right way round in their rear-view mirror. It's the most common real-world use of mirror text." },
      { question: "Does mirror text work on Instagram, TikTok, and Discord?", answer: "Yes, in bios, captions, comments, messages, and display names, anywhere standard Unicode is accepted. Username fields reject it. On older devices, a few characters such as ꙅ or ꟻ can show as boxes." },
      { question: "Do numbers get mirrored?", answer: "No. Unicode has no mirrored digits, so numbers keep their normal shape. Only their position moves because the whole line is reversed." },
      { question: "Is mirror text searchable or accessible?", answer: "Not really. Search can't match the swapped characters to normal words, and screen readers read the line backwards or spell it out. Use it for fun and puzzles, not for information people need to find." },
      { question: "Can I mirror text in Word or Google Docs instead?", answer: "Yes, as a graphic. Put the text in a text box or WordArt, then use the 3-D rotation or flip options (Word) or flip the drawing (Google Docs). That mirrors the image of the text, which is better for printing but can't be pasted as text." },
    ],
    relatedGuideSlugs: ["cool-different-fonts", "fancy-text-styles-explained", "copy-paste-text-tricks-social-media-bios"],
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
  { slug: "bold", href: "/tools/bold", eyebrow: "Bold", anchor: "the bold text generator" },
  { slug: "strikethrough", href: "/tools/strikethrough", eyebrow: "Strikethrough", anchor: "the strikethrough text generator" },
  { slug: "upside-down", href: "/tools/upside-down", eyebrow: "Upside down", anchor: "the upside down text generator" },
  { slug: "mirror", href: "/tools/mirror", eyebrow: "Mirror text", anchor: "the mirror text generator" },
  { slug: "italic", href: "/tools/italic", eyebrow: "Italic", anchor: "the italic text generator" },
  { slug: "zalgo", href: "/tools/zalgo", eyebrow: "Glitch text", anchor: "the glitch text generator" },
];
