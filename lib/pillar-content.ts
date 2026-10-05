import type { GuideFaq, GuideSection } from "@/lib/guides";

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
  /** Optional long-form body rendered before the FAQ. */
  sections?: GuideSection[];
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
    relatedGuideSlugs: ["subscript-vs-superscript", "subscript-numbers-chemistry", "superscript-subscript-character-set", "smallest-text-style-compared", "small-text-generator-compared"],
  },
  {
    slug: "cursive",
    title: "Cursive Font Generator – 𝒞𝓊𝓇𝓈𝒾𝓋ℯ & 𝓑𝓸𝓵𝓭 Script Copy and Paste",
    metaDescription:
      "Turn text into cursive fonts you can copy and paste: classic 𝒸𝓊𝓇𝓈𝒾𝓋ℯ script and 𝓫𝓸𝓵𝓭 cursive for Instagram, TikTok, and Discord. Free cursive font generator, no install.",
    h1: "Cursive Font Generator",
    lastUpdated: "2026-10-02",
    intro: [
      "This cursive font generator turns plain text into flowing script letters, like 𝒸𝓊𝓇𝓈𝒾𝓋ℯ and 𝓬𝓾𝓻𝓼𝓲𝓿𝓮, that you can copy and paste into a bio, caption, comment, or name. It maps your letters to Unicode's script alphabets, so the handwritten look travels as real text, not an image or an installed font.",
      "You get two cursive styles. Classic cursive is thin and elegant, and bold cursive is heavier and easier to read on a small screen. Both convert as you type, alongside italic and the other styles, so you can compare before you copy. Cursive is best for a name, a short quote, or one accent line, since a whole paragraph of script is slow to read.",
    ],
    howToSteps: [
      "Type the word or phrase you want in cursive into the box below.",
      "Compare Cursive with Bold cursive and the other styles shown alongside it.",
      "Copy the cursive version you like with one tap.",
      "Paste it into your bio, caption, or message, and check it once on your phone, since a few older devices show script letters as boxes.",
    ],
    whereUsed: [
      { platform: "Instagram & TikTok bios", blurb: "A cursive name or tagline is the classic aesthetic bio look. Keep the rest of the bio plain or in small caps. See [cursive fonts for Instagram bio](/guides/cursive-fonts-instagram-bio) for ready-made examples and the [Instagram bio fonts guide](/guides/small-text-instagram-bio) for what each field accepts." },
      { platform: "Captions, quotes & comments", blurb: "One cursive line to open or sign off a caption, a short quote, or a wedding or birthday message. Bold cursive stays readable at caption size." },
      { platform: "Discord & gaming names", blurb: "Cursive display names and server nicknames. Games filter names more strictly, so check the [gaming font generator](/tools/gaming-font-generator) to see which games accept script letters." },
    ],
    sections: [
      {
        heading: "What is a cursive font generator?",
        paragraphs: [
          "A cursive font generator is a text converter that swaps each regular letter for a script-style Unicode character, so \"love\" becomes 𝓁ℴ𝓋ℯ or 𝓵𝓸𝓿𝓮. The letters don't actually join up like real handwriting, but their slant and loops give the same feel. Because each one is a standard character, it pastes into any app without a font download.",
          "The characters come from the Mathematical Alphanumeric Symbols block, which Unicode added in 2001 for math notation. Classic cursive uses the script alphabet (𝒜 starts at U+1D49C), and bold cursive uses the bold script alphabet (𝓐 starts at U+1D4D0). For the full story of how the mapping works, see [how a cursive font generator works](/guides/how-cursive-font-generator-works).",
        ],
      },
      {
        heading: "Which cursive font style should you use?",
        paragraphs: [
          "Use classic cursive for elegance and bold cursive for readability. If neither feels right, italic and fraktur are close cousins that a lot of \"cursive\" generators also list.",
        ],
        table: {
          caption: "Cursive and script-like styles compared",
          headers: ["Style", "Example", "Best for", "Watch out for"],
          rows: [
            ["Cursive (script)", "𝒞𝓊𝓇𝓈𝒾𝓋ℯ 𝒮𝒸𝓇𝒾𝓅𝓉", "Names, wedding and beauty bios, quotes", "Thin strokes are hard to read small. A few letters (ℬ ℰ ℱ ℋ ℐ ℒ ℳ ℛ ℯ ℊ ℴ) come from another Unicode block and can look slightly different."],
            ["Bold cursive", "𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓢𝓬𝓻𝓲𝓹𝓽", "Bios, captions, display names", "Takes more space; each letter counts as two characters in many apps"],
            ["[Italic](/tools/italic)", "𝐼𝑡𝑎𝑙𝑖𝑐 𝑆𝑐𝑟𝑖𝑝𝑡", "Subtle emphasis in longer text", "Slanted, not looped, so it reads less like handwriting"],
            ["[Fraktur / Old English](/tools/old-english-text-generator)", "𝔉𝔯𝔞𝔨𝔱𝔲𝔯 𝕭𝖑𝖆𝖈𝖐𝖑𝖊𝖙𝖙𝖊𝖗", "Tattoo-style, gothic, and vintage looks", "Hard to read for long text; boxes on some older phones"],
          ],
        },
      },
      {
        heading: "How do you convert text to cursive?",
        paragraphs: [
          "Type or paste your text in the box at the top of this page, then tap Copy on the Cursive or Bold cursive result. The conversion runs in your browser as you type, so nothing is uploaded. Capital and lowercase letters both convert. Numbers stay plain in cursive, because Unicode has no script digits.",
          "On a phone, some keyboard apps have a built-in fancy-font picker that does the same substitution. It gives the same characters as this generator, so you don't need to install one. See [cursive font keyboards](/guides/cursive-font-keyboard) for the options.",
        ],
      },
      {
        heading: "Where does copy-paste cursive work?",
        paragraphs: [
          "Cursive works anywhere you can type text: Instagram, TikTok, X, Facebook, WhatsApp, Discord, YouTube comments, Google Docs, and Word. It doesn't work in usernames or @handles, which only take plain letters, numbers, and a few symbols. Use your display name, bio, and captions instead.",
          "For printed projects, like invitations, logos, signatures, or a tattoo stencil, copy-paste cursive isn't the right tool. Its look depends on the device's font, so it can't be resized or styled like a real typeface. Use an installed script font such as Great Vibes or Dancing Script, both free on Google Fonts, in a design app instead.",
        ],
      },
      {
        heading: "Cursive vs script vs calligraphy",
        paragraphs: [
          "Cursive is handwriting where the letters join together so you can write quickly. Script is the typography term for any typeface that imitates handwriting, joined or not. Calligraphy is decorative lettering made with a broad pen or brush, where the art is in the strokes themselves.",
          "Copy-paste generators borrow the word \"cursive\" for any script-looking Unicode letters. That's why Unicode calls these characters \"mathematical script\" letters, even though most people search for them as cursive fonts.",
        ],
      },
    ],
    faq: [
      { question: "How do I convert text into cursive font?", answer: "Type your text into the generator above, then copy the Cursive or Bold cursive result and paste it where you need it. There's no font to install and no app to download." },
      { question: "Does the cursive font generator work on Instagram?", answer: "Yes. Instagram bios, captions, comments, and your name field accept cursive Unicode letters. Your @username doesn't, because it only allows letters, numbers, periods, and underscores." },
      { question: "What's the difference between cursive and bold cursive?", answer: "Cursive (𝒸𝓊𝓇𝓈𝒾𝓋ℯ) uses Unicode's thin script letters, and bold cursive (𝓬𝓾𝓻𝓼𝓲𝓿𝓮) uses the heavier bold script set. Bold cursive is easier to read on phones, while classic cursive looks more delicate." },
      { question: "Can I copy and paste cursive into a username?", answer: "Usually not. Usernames on most platforms only allow plain letters, numbers, periods, and underscores. Put cursive in your display name, bio, captions, and comments instead." },
      { question: "Why do cursive letters look like boxes on some phones?", answer: "That device's font doesn't have the glyphs for Unicode's script letters, which happens most on older Android phones. Bold cursive and italic tend to have better support, so try them for important text." },
      { question: "Why do some cursive letters look different from the rest?", answer: "Unicode's script alphabet has gaps for letters that already existed in an older block, like ℬ, ℰ, ℋ, and ℯ. The generator fills those gaps from that older block, so a few letters can look a little different. Bold cursive has no gaps." },
      { question: "Can I make cursive numbers?", answer: "No. Unicode has no cursive or script digits, so numbers stay plain. For styled numbers, use bold (𝟏𝟐𝟑), double-struck (𝟙𝟚𝟛), or circled (①②③) instead." },
      { question: "Can I use copy-paste cursive for a tattoo or signature?", answer: "Use it to preview ideas, but not for the final design. The look changes with each device's font, so a tattoo artist or designer should work from a real installed script font. For an email signature, plain text or an image is more reliable." },
      { question: "Is there a cursive font keyboard I can install instead?", answer: "Yes, some keyboard apps have a fancy-font picker, but they swap in the same Unicode characters as this generator. A copy-paste generator gives the same result without giving a keyboard app access to what you type." },
      { question: "Is cursive text accessible to screen readers?", answer: "Not reliably. Screen readers may read each script letter by its Unicode name, like \"mathematical script small c\", or skip it. Use cursive for decoration and keep important information in plain text." },
      { question: "Is cursive Unicode text free to use?", answer: "Yes. The characters are part of the Unicode standard, so anyone can use them, including in business posts and bios. This generator is free with no sign-up." },
    ],
    relatedGuideSlugs: ["text-formatting-cheat-sheet", "cursive-fonts-instagram-bio", "how-cursive-font-generator-works", "aesthetic-cursive-fonts", "cursive-font-keyboard", "thin-cursive-fonts"],
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
    relatedGuideSlugs: ["unicode-explained", "copy-paste-text-tricks-social-media-bios", "small-caps-copy-paste", "small-caps-vs-all-caps", "fonts-for-tiktok", "numbers-in-small-font", "small-text-png-vs-unicode", "small-text-generator-compared"],
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
    relatedGuideSlugs: ["subscript-vs-superscript", "subscript-numbers-chemistry", "superscript-discord", "superscript-numbers-exponents", "superscript-subscript-character-set", "smallest-text-style-compared", "smol-text"],
  },
  {
    slug: "bubble",
    title: "Bubble Text Generator – Circle & Bubble Letters Copy Paste",
    metaDescription:
      "Turn text into bubble and circle letters, outlined ⓑⓤⓑⓑⓛⓔ or filled 🅑🅤🅑🅑🅛🅔, plus circled numbers ① to ⑳. Free bubble text generator, copy and paste, no font install.",
    h1: "Bubble Text Generator",
    lastUpdated: "2026-10-02",
    intro: [
      "This bubble text generator puts every letter and number inside a circle, so \"bubble\" becomes ⓑⓤⓑⓑⓛⓔ or 🅑🅤🅑🅑🅛🅔, ready to copy and paste into a bio, caption, comment, or display name. It works as a circle text generator too: bubble letters and circled letters are the same Unicode characters, from the Enclosed Alphanumerics blocks, so the result pastes as real text, not an image.",
      "You get two looks. Outlined bubbles (Ⓐ ⓐ ①) cover capitals, lowercase, and numbers, and they show up on almost every device. Filled bubbles (🅐 ❶) are solid black circles with white letters, capitals only, and they need a newer font. Type below, compare both, and copy the one you like. For bubble letters you draw yourself, like 3D or graffiti styles, see [bubble letters to copy and paste](/guides/bubble-letters-copy-paste).",
    ],
    howToSteps: [
      "Type the word or name you want in bubble letters into the box below.",
      "Compare the outlined Bubble result with Filled bubble and the other styles shown alongside.",
      "Copy the version you want with one tap.",
      "Paste it into Instagram, TikTok, Discord, or a comment, and check it once, since a few older phones show filled bubbles as boxes.",
    ],
    whereUsed: [
      { platform: "Instagram & TikTok bios", blurb: "A bubble-letter name or one bubble word in a bio stands out in a feed and stays readable. It won't work in the @username, which only takes plain letters, numbers, periods, and underscores. See the [Instagram bio walkthrough](/guides/small-text-instagram-bio) and [bubble text for Instagram and TikTok](/guides/bubble-text-instagram-tiktok)." },
      { platform: "Discord, games & chats", blurb: "Bubble display names, server nicknames, and message accents. Outlined bubbles are also a cute pick for [Adopt Me pet names](/tools/adopt-me-font-generator), and they're one of the few styles that show in Minecraft Bedrock." },
      { platform: "Lists, labels & notes", blurb: "Circled numbers like ① ② ③ make neat step labels in captions, notes, and plain-text documents where you can't use a real numbered list." },
    ],
    sections: [
      {
        heading: "What is circle text, and is it the same as bubble text?",
        paragraphs: [
          "Yes. \"Circle text\", \"circled letters\", \"bubble text\", and \"bubble letters\" all describe the same copy-paste characters: letters and numbers drawn inside a circle. They're single Unicode characters, not a font, so Ⓐ is one character with its own code point (U+24B6), just like a regular A (U+0041).",
          "The one difference is in drawn lettering. Hand-drawn or graphic \"bubble letters\" are puffy, rounded shapes, like 3D or graffiti text, made in an image editor. Those can't be pasted as text. The copy-paste version is always the circled kind.",
        ],
      },
      {
        heading: "Which circle and bubble letter styles can you copy?",
        paragraphs: [
          "There are four sets of circled characters in Unicode, and the generator covers the two letter sets. Outlined is the safest. Filled looks bolder but works on fewer devices. You can copy the full sets straight from this table.",
        ],
        table: {
          caption: "Circled and bubble character sets",
          headers: ["Style", "Characters", "Unicode range", "Support"],
          rows: [
            ["Outlined capitals", "Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ", "U+24B6–U+24CF", "Almost every device"],
            ["Outlined lowercase", "ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ", "U+24D0–U+24E9", "Almost every device"],
            ["Circled numbers", "⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳", "U+2460–U+2473, U+24EA", "Almost every device"],
            ["Filled capitals", "🅐 🅑 🅒 🅓 🅔 🅕 🅖 🅗 🅘 🅙 🅚 🅛 🅜 🅝 🅞 🅟 🅠 🅡 🅢 🅣 🅤 🅥 🅦 🅧 🅨 🅩", "U+1F150–U+1F169", "Newer devices; boxes on some older phones"],
            ["Filled numbers", "⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿", "U+24FF, U+2776–U+277F", "Most devices"],
          ],
        },
        subsections: [
          {
            heading: "Circled numbers 10 to 20",
            paragraphs: [
              "Unicode has single characters for ⑩ through ⑳, but the generator converts one digit at a time, so typing 12 gives ①②. For a single circled 10–20, copy it from the table above. There are also circled numbers up to 50 (㉑ to ㊿) in the Enclosed CJK block, but fewer fonts include them.",
            ],
          },
          {
            heading: "Why filled bubbles are capitals only",
            paragraphs: [
              "Unicode added the filled set, called Negative Circled Latin Capital Letters, in version 6.0 (2010), and it never included lowercase. So the generator turns both a and A into 🅐. If you need mixed case, use outlined bubbles.",
            ],
          },
        ],
      },
      {
        heading: "Where do bubble and circle letters work?",
        paragraphs: [
          "Outlined bubble letters work anywhere you can type text: Instagram, TikTok, X, Facebook, WhatsApp, Discord, Google Docs, and Word. Filled bubbles work in the same places but can show as empty boxes on older Android phones and older Discord or Windows versions, because those fonts don't have the U+1F150 characters.",
          "No platform lets you use them in a login username or @handle, which are limited to plain characters. Use them in display names, bios, captions, and messages instead. In Word, paste with Ctrl+Shift+V (plain text) so the document's font doesn't swap the circles for something else.",
        ],
      },
      {
        heading: "Tips for using bubble text well",
        paragraphs: [
          "Keep bubble text short. One word or a name reads well, but a full sentence of circled letters is slow to read and hard to scan. Mix it with plain text, like ⓢⓐⓡⓐⓗ | travel + coffee, rather than circling the whole bio.",
          "Screen readers read circled letters as \"circled latin small letter s\" and so on, which is slow and confusing for blind and low-vision readers. Don't put important information, like a link or a price, only in bubble text.",
        ],
      },
    ],
    faq: [
      { question: "How do I copy and paste bubble letters?", answer: "Type your text into the generator above, tap Copy on the bubble result, and paste it wherever you need it. There's no font or app to install, because the circled letters are Unicode characters." },
      { question: "What's the difference between circled and filled bubble text?", answer: "Circled (outlined) bubble letters like ⓐ and Ⓐ are outlines, and they cover both cases plus numbers. Filled bubble letters like 🅐 are white letters in solid black circles. They're capitals only and need a newer font, so they show as boxes on more devices." },
      { question: "Is a circle text generator the same as a bubble text generator?", answer: "Yes. Both turn your letters into circled Unicode characters like ⓒⓘⓡⓒⓛⓔ. Different sites just use different names for the same thing." },
      { question: "Do bubble fonts copy and paste on Instagram?", answer: "Yes. Instagram bios, captions, and comments accept circled Unicode letters. They won't work in your @username, which is limited to plain letters, numbers, periods, and underscores." },
      { question: "Why do some bubble letters show as boxes?", answer: "That device's font doesn't have the glyph for the character. It happens most with filled bubbles (🅐) on older Android phones. Outlined bubbles have the widest support, so switch to them for anything important." },
      { question: "Can I make bubble numbers too?", answer: "Yes. Digits 0–9 convert to ⓪–⑨ outlined or ⓿–❾ filled. Single circled numbers from ⑩ to ⑳ also exist, so copy those from the table on this page." },
      { question: "Why are there no lowercase filled bubble letters?", answer: "Unicode only has filled circled capitals (U+1F150–U+1F169), so lowercase doesn't exist in that style. The generator turns lowercase into filled capitals. Use outlined bubbles if you need lowercase." },
      { question: "Are bubble letters free to use?", answer: "Yes. Circled letters are part of the Unicode standard, so anyone can use them, including on products and commercial posts. This generator is free with no sign-up." },
      { question: "Can I use bubble letters in Word or Google Docs?", answer: "Yes. Google Docs shows them as pasted. In Word, paste as plain text with Ctrl+Shift+V so it keeps the circled characters instead of changing fonts." },
      { question: "Can I make 3D or graffiti bubble letters to copy and paste?", answer: "No. 3D, puffy, and graffiti bubble letters are drawings, not characters, so they can't be pasted as text. Make them in an image editor like Canva, or see our [bubble letters guide](/guides/bubble-letters-copy-paste)." },
      { question: "Do bubble letters work in games?", answer: "Often. Outlined bubbles pass the Roblox filter more often than most styles and are a popular choice for Adopt Me pet names. They're also one of the few styles that show in Minecraft Bedrock Edition. Filled bubbles are less reliable." },
    ],
    relatedGuideSlugs: ["bubble-letters-copy-paste", "bubble-text-instagram-tiktok", "small-text-instagram-bio", "copy-paste-text-tricks-social-media-bios"],
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
    relatedGuideSlugs: ["text-formatting-cheat-sheet", "unicode-explained", "copy-paste-text-tricks-social-media-bios", "underline-text-copy-paste"],
  },
  {
    slug: "bold",
    title: "Bold Text Generator – 𝐁𝐨𝐥𝐝 & 𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀 Text to Copy and Paste",
    metaDescription:
      "Make bold text you can copy and paste into Instagram, LinkedIn, WhatsApp, and X, in serif 𝐛𝐨𝐥𝐝 or sans 𝗯𝗼𝗹𝗱. Free bold text generator, plus native bold shortcuts for every app.",
    h1: "Bold Text Generator",
    lastUpdated: "2026-10-02",
    intro: [
      "This bold text generator turns plain letters and numbers into bold Unicode characters, 𝐥𝐢𝐤𝐞 𝐭𝐡𝐢𝐬 or 𝗹𝗶𝗸𝗲 𝘁𝗵𝗶𝘀, that you can copy and paste anywhere, including places with no bold button. The boldness is built into each character, not added as formatting, so it survives being pasted into plain-text fields that strip bold.",
      "It's the quickest way to get bold text into an Instagram bio, a LinkedIn post, a WhatsApp status, or an X post. You get two main looks: serif Bold, which feels classic and editorial, and Bold sans, the clean style most LinkedIn and X posts use. If your app already has its own bold (Discord, WhatsApp chats, Google Docs), the native shortcuts are listed below, and they're the better choice there.",
    ],
    howToSteps: [
      "Type or paste the text you want in bold into the box below.",
      "Compare Bold, Bold sans, Bold italic, and the other styles as they update.",
      "Copy the bold version you want with one tap.",
      "Paste it into your bio, caption, post, or message. Bold only a hook or a header, and keep the rest plain so it stays easy to read and search.",
    ],
    whereUsed: [
      { platform: "LinkedIn posts & headlines", blurb: "LinkedIn's post composer has no bold button, so Unicode is the only way to bold a hook line or a section header in a post, your headline, or your About section. LinkedIn articles and newsletters have a real formatting toolbar, so use that there." },
      { platform: "Instagram, TikTok & Facebook", blurb: "None of these apps can bold text in a bio, caption, or comment. A bold name, header line, or call to action, like 𝐁𝐎𝐎𝐊𝐈𝐍𝐆𝐒 𝐎𝐏𝐄𝐍, makes a busy bio easier to scan. See [fonts for X/Twitter](/guides/fonts-for-twitter-x) for how X handles it." },
      { platform: "WhatsApp names, status & groups", blurb: "WhatsApp's *asterisk* bold only works inside chat messages. Pasted Unicode bold also works in your profile name, About text, status, and group names, where the asterisks don't." },
    ],
    nativeFormatting: [
      { app: "Word, Google Docs & email", instructions: "Select the text and press Ctrl+B (Windows, ChromeOS) or ⌘+B (Mac). This is real formatting, so it stays searchable and readable by screen readers." },
      { app: "WhatsApp & Slack", instructions: "Wrap the words in single asterisks, *like this*, to send them bold. In Slack you can also select the text and press Ctrl+B or ⌘+B." },
      { app: "Discord, Telegram & Reddit", instructions: "Wrap the words in two asterisks on each side, **like this**. The same Markdown works in GitHub and most note apps." },
      { app: "HTML", instructions: "Use <strong> for important text or <b> for visual bold, or CSS font-weight: 700. These stay as formatting and are lost when pasted into a plain-text field." },
    ],
    sections: [
      {
        heading: "How does a bold text generator work?",
        paragraphs: [
          "It swaps each letter for a bold look-alike character from Unicode's Mathematical Alphanumeric Symbols block. A (U+0041) becomes 𝐀 (U+1D400) in serif bold or 𝗔 (U+1D5D4) in sans bold, and the digits 0–9 have bold versions too. Unicode added these in 2001 for math, where a bold 𝐱 and a plain x can mean different things. Social media users borrowed them for emphasis.",
          "Because they're separate characters, not a formatting style, they look bold anywhere they're pasted. The catch is that they're not the same letters as normal text. Search tools, hashtags, and screen readers may not treat 𝐛𝐨𝐥𝐝 as the word \"bold\".",
        ],
      },
      {
        heading: "Which bold font style should you use?",
        paragraphs: [
          "Use Bold sans for posts, headers, and anything professional, and serif Bold for a classic or editorial feel. The generator converts all of these at once, so you can compare them on your own text.",
        ],
        table: {
          caption: "Bold Unicode styles compared",
          headers: ["Style", "Example", "Best for"],
          rows: [
            ["Bold (serif)", "𝐁𝐨𝐥𝐝 𝐬𝐞𝐫𝐢𝐟", "Names, quotes, editorial emphasis"],
            ["Bold sans", "𝗕𝗼𝗹𝗱 𝘀𝗮𝗻𝘀", "LinkedIn and X hooks, section headers, CTAs"],
            ["Bold italic", "𝑩𝒐𝒍𝒅 𝒊𝒕𝒂𝒍𝒊𝒄", "Maximum emphasis on one or two words"],
            ["[Bold cursive](/tools/cursive)", "𝓑𝓸𝓵𝓭 𝓬𝓾𝓻𝓼𝓲𝓿𝓮", "Names and signatures in bios"],
            ["[Bold gothic](/tools/old-english-text-generator)", "𝕭𝖔𝖑𝖉 𝖌𝖔𝖙𝖍𝖎𝖈", "Dramatic headers, gaming and metal looks"],
          ],
        },
      },
      {
        heading: "How do you bold text on social media?",
        paragraphs: [
          "Most social apps have no bold option, so the method is the same everywhere: make the bold text here, copy it, and paste it into the post or profile field. The table shows what each platform supports natively and where Unicode fills the gap.",
        ],
        table: {
          caption: "Bold text by platform (checked October 2026)",
          headers: ["Platform", "Native bold?", "Where to use Unicode bold"],
          rows: [
            ["Instagram", "No", "Bio, name, captions, comments, Story text"],
            ["LinkedIn", "Articles and newsletters only", "Posts, headline, About, comments"],
            ["X (Twitter)", "Premium subscribers can format some posts on the web", "Posts, replies, bio, display name"],
            ["Facebook", "No (in regular posts)", "Posts, comments, Page bio"],
            ["TikTok", "No", "Bio, captions, comments"],
            ["WhatsApp", "Yes, *bold* in chats", "Profile name, About, status, group names"],
            ["Discord", "Yes, **bold** in messages", "Display name, nickname, status, server and channel names"],
          ],
        },
        subsections: [
          {
            heading: "LinkedIn bold text tips",
            paragraphs: [
              "Bold your first line, since only the first few lines show before \"…see more\", and bold short section headers like 𝗞𝗲𝘆 𝘁𝗮𝗸𝗲𝗮𝘄𝗮𝘆:. Don't bold whole paragraphs. LinkedIn's search matches plain words more reliably, so keep the keywords you want found in plain text.",
            ],
          },
          {
            heading: "Instagram and TikTok bold text tips",
            paragraphs: [
              "Use bold for your name, one header line, or a call to action in your bio, and keep hashtags plain, because a bold hashtag won't match the normal tag. The [Instagram bio fonts guide](/guides/small-text-instagram-bio) shows which fields accept styled text.",
            ],
          },
        ],
      },
      {
        heading: "Unicode bold vs real bold formatting",
        paragraphs: [
          "Real bold, like Ctrl+B in a document or **text** in Discord, is a style applied to normal letters. It's searchable, accessible, and counts as normal characters, but it disappears in fields that don't support formatting. Unicode bold is the opposite: it goes anywhere, but each letter is a different character.",
          "That difference has three practical effects. Each bold letter counts as two characters toward limits in many apps. Screen readers may read it letter by letter, like \"mathematical bold small b\", or skip it. And search engines and in-app search may not match it. Use native bold where an app has it, and Unicode bold for short accents where it doesn't.",
        ],
      },
    ],
    faq: [
      { question: "How do I make bold text to copy and paste?", answer: "Type your text into the generator above, tap Copy on the Bold or Bold sans result, and paste it where you need it. No formatting toolbar or font install is needed, because the boldness is part of the characters." },
      { question: "How do I bold text on LinkedIn?", answer: "LinkedIn posts have no bold button, so make the bold text here, copy it, and paste it into your post. In LinkedIn articles and newsletters, you can use the editor's B button or Ctrl+B instead." },
      { question: "How do I bold text on Instagram?", answer: "Instagram has no bold option, so copy bold Unicode text from this generator and paste it into your bio, name, caption, or comment. It won't work in your @username." },
      { question: "How do I bold text in WhatsApp?", answer: "In chats, put an asterisk on each side, like *this*, and WhatsApp sends it bold. For your profile name, About, status, or group name, paste Unicode bold from this page instead." },
      { question: "How do I bold text on X (Twitter)?", answer: "Paste Unicode bold from this generator into your post, bio, or display name. X Premium subscribers can also format some posts on the web, but that bold only shows inside X." },
      { question: "What's the difference between Bold and Bold sans?", answer: "Bold (𝐁𝐨𝐥𝐝) has serifs, the small strokes at the ends of letters, and looks classic. Bold sans (𝗕𝗼𝗹𝗱) has no serifs and looks cleaner and more modern, which is why it's popular for LinkedIn and X posts." },
      { question: "Is copy-paste bold text the same as real bold formatting?", answer: "No. It's a different set of Unicode characters that look bold, not a style applied to your letters. That's why it survives plain-text fields, but also why search and screen readers may not read it as normal words." },
      { question: "Does bold text count as more characters?", answer: "Often, yes. Each bold letter is stored as two code units, so apps that count those, which many do, count each bold letter as two. Keep bold text short in bios with tight limits." },
      { question: "Why do some characters stay unchanged?", answer: "Unicode's bold alphabets cover A–Z, a–z, and 0–9, but not punctuation, symbols, or accented letters. Those characters are left as they are rather than swapped for a misleading look-alike." },
      { question: "Does bold Unicode text hurt SEO or accessibility?", answer: "It can. Search engines and screen readers may not read bold Unicode as normal words, so keyword-rich or important text should stay plain. Use bold for short accents like a name, header, or call to action." },
      { question: "Why does bold text show as boxes on some devices?", answer: "The device's font doesn't have the bold math characters, which is rare today but happens on some older phones and computers. If someone can't see it, they'll see empty boxes, so don't put essential information only in bold." },
    ],
    relatedGuideSlugs: ["text-formatting-cheat-sheet", "copy-paste-fonts-guide", "fonts-for-twitter-x", "small-text-instagram-bio"],
  },
  {
    slug: "strikethrough",
    title: "Strikethrough Text Generator – Cross Out Text Copy & Paste",
    metaDescription:
      "Cross out text with a s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ line you can copy and paste into Instagram, Discord, WhatsApp, and more. Free generator, plus the native shortcut for every app.",
    h1: "Strikethrough Text Generator",
    lastUpdated: "2026-10-02",
    intro: [
      "This strikethrough text generator draws a line through every character, like s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶, so you can copy and paste crossed-out text into bios, captions, comments, and names that have no strikethrough button. It adds the Unicode combining long stroke overlay (U+0336) after each letter, so the line is part of the text itself, not formatting that gets lost when you paste.",
      "Use it to cross out an old price, a finished to-do, or a joke correction anywhere plain text goes. If your app already has strikethrough formatting, like Google Docs, WhatsApp, or Discord messages, the native shortcuts are listed below and they're the cleaner choice there. Want a line under text instead? Use the [underline text generator](/tools/underline).",
    ],
    howToSteps: [
      "Type or paste the text you want to cross out into the box below.",
      "Check the strikethrough result. A line is added through each character as you type, spaces included.",
      "Copy the strikethrough output with one tap.",
      "Paste it into a caption, bio, name, or comment. If the line disappears, that field strips combining marks, so use the app's native strikethrough if it has one.",
    ],
    whereUsed: [
      { platform: "Instagram, TikTok & Facebook", blurb: "None of these have a strikethrough button, so Unicode is the only way to cross out words in a bio, caption, or comment. Instagram's app sometimes drops the marks in bios, so check the result after saving. Each crossed-out letter counts as two characters toward the 2,200-character caption limit." },
      { platform: "Discord & gaming names", blurb: "Use Discord's ~~text~~ in messages, and the Unicode version for display names, nicknames, custom statuses, and server names, where markdown doesn't work. Some channel names strip combining marks." },
      { platform: "Price drops & to-do lists", blurb: "The classic uses: $̶4̶0̶ $25 sale posts, crossed-off checklist items in plain-text notes, and the \"I̶ ̶m̶e̶a̶n̶t̶\" joke correction in a reply." },
    ],
    nativeFormatting: [
      { app: "Google Docs & Sheets", instructions: "Select the text and press Alt+Shift+5 (Windows, ChromeOS) or ⌘+Shift+X (Mac). You can also use Format > Text > Strikethrough." },
      { app: "Microsoft Word & Excel", instructions: "Word for Windows has no default shortcut: press Ctrl+D and tick Strikethrough, or click the abc button on the Home tab. Word for Mac uses ⌘+Shift+X. In Excel, Ctrl+5 toggles strikethrough." },
      { app: "WhatsApp, Slack & Messenger", instructions: "Wrap the words in single tildes, ~like this~, and the message is sent crossed out. In Slack you can also select the text and press Ctrl+Shift+X (⌘+Shift+X on Mac)." },
      { app: "Discord, Telegram & Markdown", instructions: "Wrap the words in two tildes on each side, ~~like this~~. The same syntax works in GitHub, Reddit, and most Markdown editors. In HTML, use the <s> or <del> tag." },
    ],
    sections: [
      {
        heading: "How does a strikethrough text generator work?",
        paragraphs: [
          "It inserts an invisible combining character after every letter, and your device draws that character as a line across the letter before it. So \"hi\" becomes four code points: h, U+0336, i, U+0336. Because the line is a character and not a style, it survives copying into places that strip bold, italics, and other formatting.",
          "That's also why it can fail. Some fields remove combining marks to stop people from stacking them into [Zalgo text](/tools/zalgo), and some fonts draw the line slightly too high or low. Usernames and handles reject them outright.",
        ],
      },
      {
        heading: "What strikethrough styles can you make with Unicode?",
        paragraphs: [
          "Unicode has five combining overlays that cross out a letter. The generator uses the long stroke, because it joins into one continuous line in most fonts. The others are copyable from the samples below if you want a different look.",
        ],
        table: {
          caption: "Unicode combining overlay characters",
          headers: ["Style", "Sample", "Code point", "Looks like"],
          rows: [
            ["Long stroke (this generator)", "s̶t̶r̶i̶k̶e̶", "U+0336", "One continuous line"],
            ["Short stroke", "s̵t̵r̵i̵k̵e̵", "U+0335", "A short dash through each letter, with gaps"],
            ["Tilde overlay", "s̴t̴r̴i̴k̴e̴", "U+0334", "A wavy line"],
            ["Short slash", "s̷t̷r̷i̷k̷e̷", "U+0337", "A small diagonal cut"],
            ["Long slash", "s̸t̸r̸i̸k̸e̸", "U+0338", "A tall diagonal slash"],
          ],
        },
        subsections: [
          {
            heading: "Can you make a double strikethrough?",
            paragraphs: [
              "Not reliably with Unicode. Stacking two overlays on one letter usually draws them on top of each other, so it looks the same as one. Word has a real double strikethrough under Font (Ctrl+D) for documents.",
            ],
          },
        ],
      },
      {
        heading: "Unicode strikethrough vs built-in strikethrough formatting",
        paragraphs: [
          "Built-in strikethrough, like Ctrl+5 in Excel or ~text~ in WhatsApp, is a style the app applies, so the text underneath stays normal. It looks cleaner, counts as normal characters, and stays searchable. But it disappears when you paste into a plain-text field.",
          "Unicode strikethrough is the opposite. It goes anywhere, but every letter becomes two characters, search and hashtags won't match the crossed-out word, and screen readers may read each mark or skip the line, so the meaning is lost. Use the native option where an app has one, and the generator where it doesn't.",
        ],
      },
    ],
    faq: [
      { question: "How do I make strikethrough text to copy and paste?", answer: "Type into the generator above, tap Copy on the strikethrough result, and paste it into the field you need. The line comes along with the letters as part of the text." },
      { question: "How do I strikethrough text on Instagram?", answer: "Instagram has no strikethrough button, so copy crossed-out text from this generator and paste it into your caption, comment, or bio. If the line disappears from your bio in the app, try saving the bio from a web browser instead." },
      { question: "How do I cross out text on WhatsApp?", answer: "Put a single tilde on each side of the words, like ~this~, and WhatsApp sends them crossed out. For your WhatsApp name or About text, where that doesn't work, paste Unicode strikethrough from this page." },
      { question: "How do I strikethrough on Discord?", answer: "In messages, wrap the text in two tildes on each side, like ~~this~~. For display names, nicknames, and statuses, where markdown doesn't work, paste the Unicode version from this generator." },
      { question: "What is the strikethrough shortcut in Google Docs?", answer: "Alt+Shift+5 on Windows and ChromeOS, or ⌘+Shift+X on a Mac. The same shortcuts work in Google Sheets." },
      { question: "What is the strikethrough shortcut in Word and Excel?", answer: "Word for Windows has no built-in shortcut, so press Ctrl+D and tick Strikethrough, or use the abc button on the Home tab. Word for Mac uses ⌘+Shift+X, and Excel uses Ctrl+5." },
      { question: "Why does my strikethrough line sometimes disappear?", answer: "Some platforms strip combining marks for consistency or safety. When that happens the letters stay but the line is removed, and there's no fix on that field. Use the app's native strikethrough if it has one." },
      { question: "Does strikethrough text count as extra characters?", answer: "Yes. Each crossed-out letter is two characters, the letter plus the overlay mark, so 10 letters use about 20 characters of a bio or caption limit." },
      { question: "Can I add strikethrough to emoji or other languages?", answer: "Sometimes. The line is designed for Latin letters, so on emoji, Chinese, Japanese, or Korean characters it often shows misaligned or not at all. Keep strikethrough to Latin text for the best result." },
      { question: "Is strikethrough text accessible to screen readers?", answer: "Not reliably. Screen readers may read each combining mark aloud or ignore the line, so a listener can't tell the word was crossed out. Don't rely on strikethrough alone to show a correction or a changed price." },
    ],
    relatedGuideSlugs: ["text-formatting-cheat-sheet", "copy-paste-fonts-guide", "cool-different-fonts", "underline-text-copy-paste"],
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
    relatedGuideSlugs: ["text-formatting-cheat-sheet", "fancy-text-styles-explained", "copy-paste-fonts-guide", "fonts-for-twitter-x"],
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
