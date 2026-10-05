import type { GuideFaq, GuideSection } from "@/lib/guides";
import type { WhereUsed } from "@/lib/pillar-content";

export type GalleryPage = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  /** Style shown first (and highlighted) in the converter. */
  leadStyle?: string;
  intro: string[];
  howToSteps: string[];
  /** Style slugs to feature in the "styles included" grid. Slugs that are also in `toolPages` render as links. */
  featuredStyleSlugs: string[];
  whereUsed: WhereUsed[];
  /** Optional long-form body rendered after "where used". */
  sections?: GuideSection[];
  faq: GuideFaq[];
  /** Pillar tool slugs (under /tools/) to cross-link in "more text tools". */
  relatedToolSlugs: string[];
  relatedGuideSlugs: string[];
  lastUpdated: string;
};

export const galleryPages: GalleryPage[] = [
  {
    slug: "unicode-text-converter",
    title: "Unicode Text Converter – Every Copy-Paste Font in One Place",
    metaDescription:
      "Convert plain text into every Unicode style at once: bold, italic, cursive, small caps, bubble, and more. Free Unicode text converter with the code points behind each style.",
    h1: "Unicode Text Converter",
    eyebrow: "All styles at once",
    intro: [
      "A Unicode text converter swaps each letter you type for a look-alike character from another part of the Unicode standard, so A becomes 𝐀 (bold), 𝒜 (script), 𝔄 (fraktur), ᴀ (small caps), or Ⓐ (bubble). The result is still real text you can copy and paste anywhere, not an image or an installed font. This page runs every conversion at once so you can compare them side by side.",
      "It's the same engine behind the [small text generator](/) and each focused tool, shown as one gallery. Every style updates live as you type, nothing is uploaded, and the output works anywhere standard Unicode is accepted. Below the converter you'll find which Unicode blocks each style comes from and what that means for character limits, search, and screen readers.",
    ],
    howToSteps: [
      "Type or paste your text into the converter below.",
      "Scan the styles. Small caps, bold, [italic](/tools/italic), cursive, [fraktur](/tools/old-english-text-generator), double-struck, [monospace](/tools/typewriter-font-generator), bubble, superscript, and more all convert at once.",
      "Copy the version you want with one tap.",
      "Paste it into a bio, caption, message, or document, and check it there, since some apps and older devices lack the glyphs for a few blocks.",
    ],
    featuredStyleSlugs: ["small-caps", "bold", "italic", "cursive", "fraktur", "double-struck", "monospace", "bubble", "superscript"],
    whereUsed: [
      { platform: "Social bios & posts", blurb: "Instagram, TikTok, X, and Facebook accept Unicode in bios, captions, and comments. The converter is a fast way to test several looks before you commit to one." },
      { platform: "Discord & chats", blurb: "Display names, server nicknames, and message accents, like any other styled Unicode text." },
      { platform: "Docs & mockups", blurb: "A quick styled heading or label in plain-text fields, design mockups, and notes where you can't change the typeface." },
    ],
    sections: [
      {
        heading: "What is Unicode?",
        paragraphs: [
          "Unicode is the international standard that gives every character in every writing system its own number, called a code point. The capital letter A is U+0041, the euro sign € is U+20AC, and 😀 is U+1F600. It's maintained by the Unicode Consortium, a non-profit founded in 1991, and Unicode 17.0 (September 2025) defines 159,801 characters.",
          "Because phones, computers, and apps all agree on those numbers, a character typed on one device shows up as the same character on another. Your device draws it using whatever font it has. Copy-paste fonts take advantage of this: they don't send a font, they send different characters that happen to look styled.",
        ],
      },
      {
        heading: "How does a Unicode text converter work?",
        paragraphs: [
          "It's a lookup table. For each letter you type, the converter finds the matching character in another block and outputs that instead. For bold, A (U+0041) maps to 𝐀 (U+1D400), B to 𝐁 (U+1D401), and so on through the alphabet. Characters with no styled version, like punctuation, emoji, and non-Latin letters, are left as they are.",
          "Most styles come from the Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF). Unicode added it in version 3.1 (2001) so mathematicians could tell apart variables like a bold 𝐯 and a plain v. Social media users later borrowed it for decoration. A few letters are missing from that block because they already existed elsewhere, so a good converter fills the gaps from the older Letterlike Symbols block. That's why script B is ℬ (U+212C) and fraktur C is ℭ (U+212D).",
        ],
        table: {
          caption: "Where each style's characters come from",
          headers: ["Style", "Example", "Unicode block", "UTF-8 bytes per letter"],
          rows: [
            ["Plain text", "A", "Basic Latin (U+0041)", "1"],
            ["[Bold](/tools/bold), [italic](/tools/italic), [cursive](/tools/cursive), fraktur, double-struck, monospace", "𝐀 𝐴 𝒜 𝔄 𝔸 𝙰", "Mathematical Alphanumeric Symbols (U+1D400–U+1D7FF)", "4"],
            ["[Small caps](/tools/small-caps)", "ᴀ", "Phonetic Extensions (U+1D00–U+1D7F) and IPA Extensions", "2–3"],
            ["[Superscript](/tools/superscript) / [subscript](/tools/subscript)", "ᴬ ₐ", "Phonetic Extensions, Superscripts and Subscripts", "2–3"],
            ["[Bubble](/tools/bubble)", "Ⓐ ⓐ ①", "Enclosed Alphanumerics (U+2460–U+24FF)", "3"],
            ["Squared / filled bubble", "🅰 🅐", "Enclosed Alphanumeric Supplement (U+1F100–U+1F1FF)", "4"],
            ["[Vaporwave](/tools/vaporwave-text-generator) (full-width)", "Ａ", "Halfwidth and Fullwidth Forms (U+FF00–U+FFEF)", "3"],
            ["[Underline](/tools/underline), [strikethrough](/tools/strikethrough), [Zalgo](/tools/zalgo)", "A̲ A̶", "Combining Diacritical Marks (U+0300–U+036F), added after each letter", "1 + 2 per mark"],
          ],
        },
      },
      {
        heading: "Why does converted text use more characters?",
        paragraphs: [
          "Because many styled letters are bigger in storage than plain ones. Bold, italic, and script letters sit above U+FFFF, so they take 4 bytes in UTF-8 and two code units in UTF-16. Apps that count UTF-16 units, as many do, count each of those letters as two. Underline and strikethrough add a mark after every letter, which doubles the count too.",
          "That matters for tight limits, like a 30-character display name or a 150-character bio. If a styled name won't fit, try small caps, bubble, or full-width letters, which count as one each.",
        ],
      },
      {
        heading: "Can you convert Unicode text back to plain text?",
        paragraphs: [
          "Yes, for most styles. Bold, italic, script, fraktur, double-struck, bubble, and full-width letters all have a \"compatibility\" mapping in Unicode back to the plain letter. Unicode normalization (NFKC), which many programming languages and some search tools apply, turns 𝐀, Ⓐ, and Ａ back into A.",
          "Small caps and most superscript letters don't map back cleanly, because Unicode treats them as separate phonetic letters, not styled versions of A–Z. For those, retype the text. This is also why search engines and hashtags may not match styled words: some normalize them and some don't, so keep the words you want found in plain text.",
        ],
      },
      {
        heading: "Unicode styles vs fonts and formatting",
        paragraphs: [
          "A font changes how the same characters are drawn, and it only works where that font is installed or loaded. Formatting like bold in Google Docs is a style applied on top of plain characters, and it's lost when you paste into a plain-text field. Unicode styles are different characters, so they keep their look anywhere text goes.",
          "The trade-off is meaning. A screen reader may read 𝐁𝐨𝐥𝐝 as \"mathematical bold capital B\" and so on, letter by letter, or skip it. So use converted text for short accents like a name or a heading, and keep important information in plain text. For more background, see [Unicode, explained](/guides/unicode-explained) and [how a Unicode text converter works](/guides/unicode-text-converter-explained).",
        ],
      },
    ],
    faq: [
      { question: "What is a Unicode text converter?", answer: "It's a tool that swaps your regular letters for characters from other Unicode blocks that look like styled versions of them. The result is standard text, so it copies and pastes without a font install." },
      { question: "Is a Unicode text converter the same as a font generator?", answer: "Yes, they're the same thing. \"Font generator\", \"fancy text generator\", and \"Unicode converter\" are all names for a tool that substitutes styled Unicode characters. Technically no font is involved, only different characters." },
      { question: "How many characters does Unicode have?", answer: "Unicode 17.0, released in September 2025, defines 159,801 characters. The standard has room for 1,114,112 code points, from U+0000 to U+10FFFF, so most of the space is still unused." },
      { question: "Why do some characters stay unchanged?", answer: "Not every Unicode block has a complete alphabet. Superscript, subscript, and small caps are missing a few letters, and no style covers punctuation or non-Latin scripts, so the converter leaves those characters as they are." },
      { question: "Does converted text work on Instagram and Discord?", answer: "Yes, in bios, captions, display names, and messages. It won't work in strict fields like the Instagram @username or Discord username, which only accept plain characters." },
      { question: "Is Unicode styled text accessible to screen readers?", answer: "Only partly. Small caps and full-width read close to normal, but mathematical styles like bold and script are often read letter by letter or skipped. Keep important information in plain text and use styled Unicode for short accents." },
      { question: "Can search engines read Unicode styled text?", answer: "Not reliably. Some search systems normalize 𝐛𝐨𝐥𝐝 back to bold, but many don't, and hashtags with styled letters often don't match the plain hashtag. Keep keywords and hashtags in plain text." },
      { question: "How do I convert Unicode fancy text back to normal text?", answer: "Run it through a tool that applies Unicode NFKC normalization, which turns bold, italic, script, bubble, and full-width letters back into plain A–Z. Small caps and superscript don't convert back this way, so retype those." },
      { question: "Is a Unicode text converter the same as a UTF-8 converter?", answer: "No. A UTF-8 or UTF-16 converter shows how characters are encoded as bytes, which is useful for programming. A Unicode text converter like this one changes which characters you're using, to make text look styled." },
      { question: "Why does styled text show as boxes on some devices?", answer: "The device's font doesn't include a glyph for that character, so it draws an empty box. Newer blocks like squared letters and the filled bubble set are the most likely to break on older phones. Bold, small caps, and bubble letters have the widest support." },
    ],
    relatedToolSlugs: ["small-caps", "cursive", "bubble", "superscript"],
    relatedGuideSlugs: ["unicode-text-converter-explained", "unicode-explained", "copy-paste-fonts-guide", "small-text-png-vs-unicode", "hidden-zero-width-characters"],
    lastUpdated: "2026-10-02",
  },
  {
    slug: "fancy-text-generator",
    title: "Fancy Text Generator – 𝓕𝓪𝓷𝓬𝔂 𝕱𝖔𝖓𝖙𝖘 to Copy and Paste",
    metaDescription:
      "Turn text into fancy fonts you can copy and paste: cursive, gothic, bold, bubble, glitch, and decorated styles for Instagram, TikTok, Discord, and games. Free, no download.",
    h1: "Fancy Text Generator",
    eyebrow: "Decorative & stylish",
    leadStyle: "bold-cursive",
    intro: [
      "This fancy text generator turns whatever you type into dozens of decorative styles at once, like 𝓕𝓪𝓷𝓬𝔂, 𝕱𝖆𝖓𝖈𝖞, 𝔽𝕒𝕟𝕔𝕪, Ⓕⓐⓝⓒⓨ, and ✦ Fancy ✦, ready to copy and paste into a bio, caption, display name, or message. They aren't real fonts. Each style is a set of Unicode characters that look decorative, so they work in apps that never let you change the typeface, with nothing to install.",
      "Everything converts live in your browser, and nothing you type is uploaded. Compare the styles, tap Copy on the one you like, and paste it anywhere. Want one look only? Use the focused [cursive](/tools/cursive), [bold](/tools/bold), [Old English](/tools/old-english-text-generator), or [bubble](/tools/bubble) generators. For compact, readable text, the [small text generator](/) is the better fit.",
    ],
    howToSteps: [
      "Type the word, name, or phrase you want to make fancy into the box below.",
      "Compare the styles. Cursive, bold, [Old English](/tools/old-english-text-generator), double-struck, bubble, squared, glitch, and decorated frames all convert together.",
      "Copy the fancy text you want with one tap.",
      "Paste it into your bio, caption, name, or message, and check it in that app, since a few styles show as boxes on older devices.",
    ],
    featuredStyleSlugs: ["bold-cursive", "cursive", "bold-fraktur", "double-struck", "bold-sans", "bubble", "squared", "small-caps", "sparkles"],
    whereUsed: [
      { platform: "Aesthetic bios & captions", blurb: "A fancy name or one styled line on Instagram, TikTok, or X. Keep keywords and hashtags plain so people can still find you. See the [Instagram bio fonts guide](/guides/small-text-instagram-bio)." },
      { platform: "Gaming & display names", blurb: "Stylish display names and clan tags. Games filter names more strictly than social apps, so see the [gaming font generator](/tools/gaming-font-generator) for which styles each game accepts, or the [Roblox](/tools/roblox-font-generator), [Minecraft](/tools/minecraft-font-generator), [Fortnite](/tools/fortnite-font-generator), and [Adopt Me](/tools/adopt-me-font-generator) generators." },
      { platform: "Discord, chats & invites", blurb: "Fancy server names, nicknames, and roles on Discord, plus a decorative heading in digital invitations, stories, and group chats. The [Discord name generator](/tools/discord-name-generator) adds frames and symbols." },
    ],
    sections: [
      {
        heading: "What is fancy text?",
        paragraphs: [
          "Fancy text is plain text written with decorative Unicode characters instead of normal letters. Unicode, the standard that gives every character a number, includes several complete alphabets that look styled, like script 𝒜, bold 𝐀, fraktur 𝔄, and double-struck 𝔸, plus circled, squared, and full-width letters. A fancy text generator swaps your letters for those look-alikes, and can add symbols around them.",
          "Because the result is ordinary text, it copies, pastes, and saves like any other characters. It isn't an image and it isn't a font file, which is why it works in a bio or a game name where you can't pick a font.",
        ],
      },
      {
        heading: "What fancy text styles can you make?",
        paragraphs: [
          "Sites that advertise \"200+ fonts\" mostly combine the same 20 to 30 Unicode alphabets with different symbols. These are the real style families, what they're made of, and how reliably they show up on other people's phones.",
        ],
        table: {
          caption: "Fancy text style families",
          headers: ["Family", "Example", "Made from", "Shows on most devices?"],
          rows: [
            ["[Cursive](/tools/cursive) and bold cursive", "ℱ𝒶𝓃𝒸𝓎 𝓕𝓪𝓷𝓬𝔂", "Mathematical script letters", "Yes; some boxes on old Android"],
            ["[Bold](/tools/bold), [italic](/tools/italic), sans", "𝐅𝐚𝐧𝐜𝐲 𝑭𝒂𝒏𝒄𝒚 𝗙𝗮𝗻𝗰𝘆", "Mathematical bold and italic letters", "Yes, very widely"],
            ["[Gothic / Old English](/tools/old-english-text-generator)", "𝕱𝖆𝖓𝖈𝖞 𝔉𝔞𝔫𝔠𝔶", "Mathematical fraktur letters", "Mostly; boxes more often"],
            ["Double-struck", "𝔽𝕒𝕟𝕔𝕪", "Mathematical double-struck letters", "Yes"],
            ["[Typewriter](/tools/typewriter-font-generator)", "𝙵𝚊𝚗𝚌𝚢", "Mathematical monospace letters", "Yes"],
            ["[Bubble](/tools/bubble) and squared", "Ⓕⓐⓝⓒⓨ 🅕🅐🅝🅒🅨 🅵🅰🅽🅲🆈", "Enclosed Alphanumerics", "Outlined yes; filled and squared less so"],
            ["[Small caps](/tools/small-caps) and [tiny text](/tools/tiny-text-generator)", "ꜰᴀɴᴄʏ ꟳᵃⁿᶜʸ", "Phonetic letters", "Yes; superscript has gaps"],
            ["[Vaporwave](/tools/vaporwave-text-generator)", "Ｆａｎｃｙ", "Full-width forms", "Yes"],
            ["[Glitch](/tools/zalgo), [underline](/tools/underline), [strikethrough](/tools/strikethrough)", "F̴̸a̵̡n̶̢ç̷y̛͞ F̲a̲n̲c̲y̲ F̶a̶n̶c̶y̶", "Combining marks added to normal letters", "Shown, but some apps strip the marks"],
            ["[Upside down](/tools/upside-down) and [mirror](/tools/mirror)", "ʎɔuɐℲ yɔnɒꟻ", "Look-alike letters from other alphabets", "Mostly"],
            ["Decorated frames", "✦ Fancy ✦ ♡ Fancy ♡ 【Fancy】", "Symbols added around plain text", "Yes"],
          ],
        },
      },
      {
        heading: "How do you add symbols and decorations to fancy text?",
        paragraphs: [
          "Put one symbol, or a matching pair, on each side of your styled word. The generator adds simple frames like ✦ and ♡ automatically. For anything else, copy a symbol from the table below and paste it before and after your text, like ꧁𝓕𝓪𝓷𝓬𝔂꧂ or ⋆｡˚ ꜰᴀɴᴄʏ ˚｡⋆.",
        ],
        table: {
          caption: "Decorative symbols to copy",
          headers: ["Type", "Symbols"],
          rows: [
            ["Frames", "꧁ ꧂   ༺ ༻   【 】   『 』   ⟦ ⟧   ★彡 彡★"],
            ["Stars & sparkles", "✦ ✧ ★ ☆ ⋆ ✩ ✨ ˚｡⋆"],
            ["Hearts", "♡ ♥ ❤ ❥ ღ"],
            ["Crowns & gaming", "♛ ♚ ⚔ ☠ ☬ ツ"],
            ["Dividers & arrows", "• · ┊ ⇢ ➳ ➵ ⟡"],
          ],
        },
      },
      {
        heading: "Where can you use fancy text?",
        paragraphs: [
          "Fancy text works almost anywhere you can type: Instagram, TikTok, X, Facebook, WhatsApp, Discord, YouTube comments, Telegram, and most game chats and display names. It also pastes into Google Docs and Word, where it keeps its look even if you paste as plain text, because the style is in the characters.",
          "It doesn't work in fields that only allow plain characters, such as usernames, @handles, email addresses, and most game account IDs. Some games, like Roblox and Fortnite, also filter display names and may reject decorative symbols. When a field rejects fancy text, try a simpler style like bold or small caps.",
        ],
      },
      {
        heading: "Tips for using fancy text well",
        paragraphs: [
          "Style a word, not a paragraph. A fancy name or one header line stands out, while a whole bio in gothic or glitch text is hard to read. Mix one fancy style with plain text, and use the same style each time so your profile looks consistent.",
          "Keep anything people need to find or read in plain text. Search, hashtags, and screen readers may not treat fancy letters as normal words, and a screen reader may read 𝓕𝓪𝓷𝓬𝔂 as \"mathematical bold script capital F\" and so on. And check your text on a phone before you post, since rarer styles can show as boxes for some viewers.",
        ],
      },
    ],
    faq: [
      { question: "What is a fancy text generator?", answer: "It's a tool that turns ordinary letters into decorative Unicode characters, like cursive, gothic, bold, or bubble letters, that you can copy and paste as text. Because the output is real text, it works in bios, captions, names, and messages." },
      { question: "Are fancy fonts real fonts?", answer: "No. Each \"font\" is a set of Unicode characters that look styled. That's why you can paste them into apps that don't let you change the typeface, and why nothing needs to be installed." },
      { question: "Is this fancy text generator free and private?", answer: "Yes. It's free with no sign-up or limits, and the conversion runs in your browser, so the text you type isn't uploaded or stored." },
      { question: "Which fancy text styles are most popular?", answer: "Bold cursive and cursive are the most popular for names, bold and bold sans for headers, gothic and double-struck for a distinctive look, and bubble and squared for playful posts." },
      { question: "Do fancy fonts work on Instagram and TikTok?", answer: "Yes, in bios, captions, comments, and Story text. They don't work in your @username, which only accepts plain letters, numbers, periods, and underscores." },
      { question: "Can I use fancy text in game names?", answer: "Often, yes. Many games accept bold, small caps, and some cursive in display names, but filters vary by game and some reject symbols. The gaming font generator lists which styles each game accepts." },
      { question: "Why do some fancy letters show as boxes?", answer: "The viewer's device doesn't have a glyph for that character, which is most common on older Android phones. Bold, small caps, and cursive have the widest support if a style needs to be reliable." },
      { question: "Why do some characters stay unchanged?", answer: "Unicode's styled alphabets mostly cover A–Z, a–z, and sometimes 0–9. Punctuation, accented letters, and non-Latin scripts usually have no styled version, so the generator leaves them as they are." },
      { question: "How do I add ꧁꧂ or other symbols to my name?", answer: "Copy the symbols from the decorative symbols table on this page and paste one on each side of your styled name, like ꧁𝓝𝓪𝓶𝓮꧂. Some games and usernames block symbols, so check the name saves correctly." },
      { question: "Does fancy text work in Word and Google Docs?", answer: "Yes. The style is built into the characters, so it stays even when you paste as plain text. For real documents, normal font formatting is easier to read and search." },
      { question: "Is fancy text bad for accessibility or SEO?", answer: "It can be. Screen readers may read fancy letters one by one by their technical names, and search engines may not match them to normal words. Use fancy text for short decorative accents, and keep important words plain." },
    ],
    relatedToolSlugs: ["cursive", "bold", "small-caps", "bubble"],
    relatedGuideSlugs: ["fancy-text-styles-explained", "copy-paste-fonts-guide", "cool-different-fonts", "are-copy-paste-fonts-safe"],
    lastUpdated: "2026-10-02",
  },
  {
    slug: "tiny-text-generator",
    title: "Tiny Text Generator – ᵗⁱⁿʸ Letters to Copy and Paste",
    metaDescription:
      "Make tiny text you can copy and paste: superscript ᵗⁱⁿʸ, subscript ₜᵢₙy, and small caps ᴛɪɴʏ letters for bios, captions, and names. Free tiny text generator with every tiny letter listed.",
    h1: "Tiny Text Generator",
    eyebrow: "The smallest styles",
    leadStyle: "superscript",
    intro: [
      "This tiny text generator turns your words into the smallest letters Unicode has: superscript ᵗⁱⁿʸ ᵗᵉˣᵗ, subscript ₜᵢₙy ₜₑₓₜ, and small caps ᴛɪɴʏ ᴛᴇxᴛ. Copy the result and paste it into a bio, caption, display name, or message. It isn't a smaller font size. Each tiny letter is its own character, so it stays tiny wherever you paste it.",
      "Superscript is the smallest and most popular tiny style, so it's shown first. Subscript sits lower and has the most missing letters, and small caps is a little bigger but converts almost everything. Want bold, cursive, bubble, and the rest too? The [small text generator](/) on the home page shows all styles at once.",
    ],
    howToSteps: [
      "Type your text into the box below.",
      "Compare the three tiny styles. Superscript is smallest, subscript sits below the line, and small caps stays most readable.",
      "Copy the tiny version you want with one tap.",
      "Paste it into your bio, caption, or name, and check it, since a few letters have no tiny form and stay full size.",
    ],
    featuredStyleSlugs: ["superscript", "subscript", "small-caps"],
    whereUsed: [
      { platform: "Instagram & TikTok bios", blurb: "A tiny tagline under your name, or a whisper-small line at the end of a bio. Tiny letters count as one character each, so they don't eat into the 150-character limit faster than normal text. See the [Instagram bio fonts guide](/guides/small-text-instagram-bio)." },
      { platform: "Discord names & messages", blurb: "Quiet, tiny display names and nicknames. In Discord messages you can also start a line with -# for native small subtext. The [tiny text for Discord guide](/guides/tiny-text-discord) covers both." },
      { platform: "Footnotes, math & chemistry", blurb: "Superscript numbers for exponents and footnotes (x², ¹), and subscript numbers for formulas like H₂O and CO₂ in plain-text fields. See [subscript numbers for chemistry](/guides/subscript-numbers-chemistry)." },
    ],
    sections: [
      {
        heading: "What is tiny text?",
        paragraphs: [
          "Tiny text is text written with Unicode characters that are drawn small: superscript and subscript letters, which sit above or below the line at about half height, and small capital letters, which are capitals at lowercase height. Apps like Instagram and Discord don't let you shrink your font, but they do accept these characters, so tiny text is the workaround. It also goes by mini text, miniature text, and [smol text](/guides/smol-text), after the internet slang for small and cute.",
          "Most tiny letters weren't made for decoration. Superscript and subscript letters exist for phonetics, math, and chemistry, and small capitals come from phonetic alphabets. That's also why the sets have gaps: Unicode only added the letters scholars needed.",
        ],
      },
      {
        heading: "Which tiny letters exist? (full alphabet)",
        paragraphs: [
          "Here's every tiny character the generator uses, so you can see the gaps before you type, or copy single characters directly. Letters not listed have no tiny form and stay full size.",
        ],
        table: {
          caption: "Tiny text alphabets",
          headers: ["Style", "Lowercase", "Capitals", "Numbers & symbols", "Missing"],
          rows: [
            ["Superscript", "ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ⁱ ʲ ᵏ ˡ ᵐ ⁿ ᵒ ᵖ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ", "ᴬ ᴮ ꟲ ᴰ ᴱ ꟳ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᴿ ᵀ ᵁ ⱽ ᵂ", "⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁺ ⁻ ⁼ ⁽ ⁾", "q, Q (S, X, Y, Z use lowercase forms)"],
            ["Subscript", "ₐ ₑ ₕ ᵢ ⱼ ₖ ₗ ₘ ₙ ₒ ₚ ᵣ ₛ ₜ ᵤ ᵥ ₓ", "None (capitals use the lowercase forms)", "₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ₊ ₋ ₌ ₍ ₎", "b c d f g q w y z"],
            ["Small caps", "ᴀ ʙ ᴄ ᴅ ᴇ ꜰ ɢ ʜ ɪ ᴊ ᴋ ʟ ᴍ ɴ ᴏ ᴘ ǫ ʀ ꜱ ᴛ ᴜ ᴠ ᴡ ʏ ᴢ", "Same as lowercase", "Numbers stay normal size", "x (q uses the look-alike ǫ)"],
          ],
        },
      },
      {
        heading: "Which tiny text style is smallest?",
        paragraphs: [
          "Superscript and subscript are the smallest, at roughly half the height of normal letters. Superscript is usually the better pick because it's missing only q, while subscript is missing nine lowercase letters. Small caps are bigger, about the height of a normal lowercase x, but they're the easiest to read and convert every letter except x.",
          "A good rule: use superscript for a short tiny word or tagline, small caps for a full tiny sentence or bio, and subscript only for numbers and formulas. For a side-by-side size comparison, see [the smallest text style compared](/guides/smallest-text-style-compared).",
        ],
      },
      {
        heading: "How do you make tiny numbers?",
        paragraphs: [
          "Superscript and subscript both have a complete set of digits, 0 to 9, so tiny numbers always convert. Type the numbers into the generator and copy the Superscript result for raised numbers (x², 10⁶) or the Subscript result for lowered ones (H₂O, CO₂).",
          "Plus, minus, equals, and brackets also have tiny forms (⁺ ⁻ ⁼ ⁽ ⁾ and ₊ ₋ ₌ ₍ ₎), but the generator keeps those symbols normal size. Copy them from the table above when you need a tiny formula like x⁽ⁿ⁺¹⁾.",
        ],
      },
      {
        heading: "Why do some tiny letters show as boxes or stay big?",
        paragraphs: [
          "A letter that stays big has no tiny version in Unicode, like a superscript q or a subscript b, so the generator leaves it normal size rather than swap in a confusing symbol. If one big letter spoils the look, try another word, or switch that word to small caps.",
          "A box or question mark means the viewer's device is missing the glyph. It's most likely with the newest characters, like the superscript capitals ꟲ and ꟳ, which Unicode only added in 2021. Lowercase superscript and small caps have the widest support. Also note that tiny text isn't reliably searchable, and screen readers may read it oddly, so keep important words in normal text.",
        ],
      },
    ],
    faq: [
      { question: "How do I make tiny text?", answer: "Type your text into the generator above and copy the Superscript result for the smallest letters, or Small caps if you need nearly every letter to convert. Paste it wherever you need it, with no app or font to install." },
      { question: "Which style makes the smallest text?", answer: "Superscript and subscript are smallest, at about half the height of normal letters. Superscript is usually better because it's only missing q, while subscript is missing nine lowercase letters." },
      { question: "Is tiny text the same as small text?", answer: "Mostly. \"Tiny text\" usually means the three smallest styles on this page: superscript, subscript, and small caps. \"Small text\" is the broader term that also covers bold, cursive, and other styles on the home page." },
      { question: "Why do some letters stay full size?", answer: "Unicode doesn't have a tiny form for every letter. There's no superscript q, no subscript b, c, d, f, g, q, w, y, or z, and no small capital x, so those letters stay normal size to keep your text readable." },
      { question: "Can I make tiny numbers?", answer: "Yes. Superscript (⁰¹²³) and subscript (₀₁₂₃) both have every digit from 0 to 9, so numbers always convert. They're useful for exponents, footnotes, and chemical formulas like H₂O." },
      { question: "Does tiny text work on Instagram, TikTok, and Discord?", answer: "Yes, in bios, captions, display names, comments, and messages. It doesn't work in usernames or @handles, which only accept plain letters, numbers, and a few symbols." },
      { question: "Does tiny text use fewer characters?", answer: "No, but it doesn't use more either. Each tiny letter counts as one character, just like a normal letter, so a tiny bio fits the same limit. That's different from bold or cursive letters, which often count as two." },
      { question: "Why does tiny text show as boxes for some people?", answer: "Their device's font doesn't include that character. The newest tiny letters, like the superscript capitals ꟲ and ꟳ added in 2021, are the most likely to break. Lowercase superscript and small caps work on almost every device." },
      { question: "Is tiny text searchable or accessible?", answer: "Not reliably. Search tools may not match tiny letters to normal words, and screen readers may read them one at a time or skip them. Keep your name, keywords, and important details in normal text." },
      { question: "Is this the same as small caps in Word or Google Docs?", answer: "It looks similar but works differently. Word's small caps is formatting applied to normal letters, which disappears in plain-text fields. Unicode small caps are separate characters, so they stay small when you paste them anywhere." },
    ],
    relatedToolSlugs: ["superscript", "subscript", "small-caps", "invisible"],
    relatedGuideSlugs: ["how-to-make-tiny-text", "smallest-text-style-compared", "subscript-vs-superscript", "tiny-text-discord", "smol-text", "small-text-generator-compared"],
    lastUpdated: "2026-10-02",
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
  {
    slug: "vaporwave-text-generator",
    title: "Vaporwave Text Generator – ＡＥＳＴＨＥＴＩＣ Copy & Paste",
    metaDescription:
      "Turn text into wide vaporwave ＡＥＳＴＨＥＴＩＣ letters with full-width Unicode — copy and paste into bios, captions, and playlist titles. Free vaporwave text generator.",
    h1: "Vaporwave Text Generator",
    eyebrow: "Wide ＡＥＳＴＨＥＴＩＣ text",
    leadStyle: "vaporwave",
    intro: [
      "A vaporwave text generator turns ordinary letters into full-width Unicode characters — ｌｉｋｅ　ｔｈｉｓ — the wide, evenly spaced lettering behind the ＡＥＳＴＨＥＴＩＣ look. The characters come from Unicode's Halfwidth and Fullwidth Forms block (U+FF01–U+FF5E), which was built so Latin letters could sit on the same square grid as Chinese and Japanese characters. That's why they look like a retro computer screen.",
      "The lead style below also swaps normal spaces for the wider ideographic space (U+3000), so the gaps between words match the letters. The look comes from vaporwave, the internet music and art scene of the early 2010s best known for Macintosh Plus's 2011 album *Floral Shoppe*. It borrows 1980s–90s computer graphics, mall music, and Japanese text. For more wide and boxed styles, try the [Unicode text converter](/tools/unicode-text-converter).",
    ],
    howToSteps: [
      "Type or paste your text into the box below.",
      "Check the Vaporwave result first — full-width letters with wide spaces — then compare Full width, Letter spaced, and Editorial brackets.",
      "Copy the version you want with one tap.",
      "Paste it into your bio, caption, display name, or playlist title, and count characters first on X, where each full-width character counts double.",
    ],
    featuredStyleSlugs: ["vaporwave", "fullwidth", "spaced", "brackets", "small-caps", "bold"],
    whereUsed: [
      { platform: "Bios & captions", blurb: "A wide ＡＥＳＴＨＥＴＩＣ name or tagline on Instagram, TikTok, or Discord — see [fonts for TikTok](/guides/fonts-for-tiktok) for where each field accepts Unicode." },
      { platform: "Playlists & video titles", blurb: "Spotify and YouTube titles are where the style started — vaporwave track and album names were written this way from the beginning." },
      { platform: "Memes & edits", blurb: "Captions on retro edits, glitch art, and pastel-sunset graphics, where the wide letters finish the look." },
    ],
    faq: [
      { question: "What is vaporwave text?", answer: "Vaporwave text is normal writing converted into full-width Unicode characters, so each letter takes up a wide, square space. It's named after the vaporwave music and art scene, which used the style in song titles and artwork." },
      { question: "Is vaporwave text a real font?", answer: "No. It's a set of Unicode characters that already exist on every modern device, so it copies and pastes anywhere without installing anything. The app's own font draws them, which is why they look slightly different on iPhone, Android, and Windows." },
      { question: "Why is it called full-width text?", answer: "In Chinese and Japanese typesetting, every character fills the same square cell. Full-width Latin letters were created to match that width, so they look stretched compared to normal 'half-width' letters." },
      { question: "What's the difference between vaporwave text and just adding spaces?", answer: "Spaced text puts a normal space between ordinary letters. Full-width letters are wider characters in their own right, so the text stays one continuous word, and it still looks evenly spaced in apps that trim extra spaces." },
      { question: "Does vaporwave text use more of my character limit?", answer: "On X, yes: each full-width character counts as two toward the 280-character limit. Most other apps count it as one character, but it takes up about twice the width on screen, so long lines wrap sooner." },
      { question: "Does vaporwave text work on Instagram, TikTok, and Discord?", answer: "Yes, in bios, captions, comments, display names, and messages. It won't work in @username or handle fields, which only accept plain letters, numbers, underscores, and periods." },
      { question: "Do numbers and symbols convert too?", answer: "Yes. Full-width versions exist for all 94 printable ASCII characters, including digits and punctuation such as ！ and ＆. Emoji and accented letters are left as they are." },
      { question: "Where does the ＡＥＳＴＨＥＴＩＣ meme come from?", answer: "It comes from vaporwave culture of the early 2010s. Artists wrote track names in full-width letters mixed with Japanese text, and the one word ＡＥＳＴＨＥＴＩＣ became shorthand for the whole look." },
      { question: "Can I add Japanese characters for a more authentic look?", answer: "Yes. Many vaporwave titles mix full-width English with Japanese katakana. Paste your own after copying the generated text, but only use words you know the meaning of." },
      { question: "Is vaporwave text readable by screen readers and search?", answer: "Partly. Full-width letters are usually read close to normal, better than most fancy fonts, but search often won't match them to plain words. Keep names and keywords people need to find in plain text." },
    ],
    relatedToolSlugs: ["small-caps", "bold", "italic", "bubble"],
    relatedGuideSlugs: ["fonts-for-tiktok", "cool-different-fonts", "copy-paste-text-tricks-social-media-bios"],
    lastUpdated: "2026-09-27",
  },
  {
    slug: "typewriter-font-generator",
    title: "Typewriter Font Generator – 𝚃𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛 Text Copy & Paste",
    metaDescription:
      "Convert text into a typewriter-style monospace font you can copy and paste — letters and numbers included. Free typewriter font generator, no download.",
    h1: "Typewriter Font Generator",
    eyebrow: "Monospace, typewriter-style",
    leadStyle: "monospace",
    intro: [
      "This typewriter font generator converts your text into Unicode's Mathematical Monospace alphabet — 𝚝𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛 𝚝𝚎𝚡𝚝 — where every letter takes up exactly the same width, like on a mechanical typewriter. The letters sit at U+1D670–U+1D6A3 and the digits 0–9 at U+1D7F6–U+1D7FF, so numbers get the typewriter look too.",
      "The fixed width comes from how typewriters worked: the carriage moved the same distance for every keystroke, whether you typed an i or an m. Fonts like Courier, designed by Howard Kettler for IBM in 1955, kept that rule, and it's why the style still looks like a manuscript, a telegram, or a code terminal. For other styles in the same family, see the [italic text generator](/tools/italic) and [bold text generator](/tools/bold).",
    ],
    howToSteps: [
      "Type or paste your text into the box below.",
      "Check the Monospace result first — every letter and number turns into its fixed-width typewriter form.",
      "Copy the typewriter text with one tap.",
      "Paste it into your bio, caption, message, or design, and preview it there; a few older Android fonts show these characters as boxes.",
    ],
    featuredStyleSlugs: ["monospace", "spaced", "fullwidth", "small-caps", "bold", "italic"],
    whereUsed: [
      { platform: "Bios & captions", blurb: "A quiet, literary line on Instagram, TikTok, or X — a quote, a date, or a 'currently reading' note in 𝚝𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛 𝚝𝚎𝚡𝚝." },
      { platform: "Writers & poetry", blurb: "Short poems, story titles, and 'manuscript' captions where the typewriter style signals a draft or a letter." },
      { platform: "Tech & retro posts", blurb: "A terminal or teletype feel for dev-humour posts, retro-computing edits, and gaming display names." },
    ],
    faq: [
      { question: "What is a typewriter font generator?", answer: "It's a tool that replaces each letter and number with its Unicode monospace version, which looks like typewriter type. The result is plain text, so you can paste it into apps that don't let you change the font." },
      { question: "Is typewriter text the same as monospace?", answer: "Yes. In Unicode the style is officially called Mathematical Monospace. 'Typewriter font' is the everyday name, because monospace type is what mechanical typewriters produced." },
      { question: "Why do all the letters take up the same space?", answer: "A typewriter moved the paper the same distance for every key, so a narrow i and a wide m got equal room. Monospace characters copy that rule, and it's what makes the text look typed rather than printed." },
      { question: "Do numbers work in typewriter text?", answer: "Yes. Unicode has monospace digits 𝟶–𝟿, so numbers convert along with letters. Punctuation and spaces stay as normal characters, which is almost invisible in the typewriter style." },
      { question: "Can I get the typewriter look in WhatsApp or Discord without a generator?", answer: "Yes, using their code formatting. In WhatsApp, wrap text in three backticks (```like this```). In Discord, wrap it in one backtick for inline code. These only render inside that app, while the Unicode version keeps its look wherever it's pasted." },
      { question: "Is typewriter text good for SEO?", answer: "No. Some generators say otherwise, but search engines and platform search treat monospace Unicode letters as different symbols from normal letters, so a styled keyword usually won't match a search. Keep headlines and keywords in plain text." },
      { question: "Does typewriter text work on Instagram and TikTok?", answer: "Yes, in bios, captions, and comments. It doesn't work in username fields, and it can show as empty boxes on some older Android phones." },
      { question: "Is this the same as the Courier font?", answer: "It looks similar but works differently. Courier is an installed font file that only shows where that font is available, while this is Unicode text that carries its typewriter shape into any app." },
      { question: "Can I use typewriter text in Canva, Figma, or Word?", answer: "It pastes into them as text, but in design and document tools a real typewriter font such as Courier gives cleaner kerning and full punctuation, and it stays editable." },
      { question: "Is typewriter text accessible?", answer: "Not fully. Many screen readers read mathematical monospace letters one by one or skip them. Use it for short accents, not for information everyone needs to read." },
    ],
    relatedToolSlugs: ["bold", "italic", "small-caps", "strikethrough"],
    relatedGuideSlugs: ["unicode-explained", "fonts-for-twitter-x", "copy-paste-fonts-guide"],
    lastUpdated: "2026-09-27",
  },
  {
    slug: "old-english-text-generator",
    title: "Old English Text Generator – 𝕺𝖑𝖉 𝕰𝖓𝖌𝖑𝖎𝖘𝖍 Font Copy & Paste",
    metaDescription:
      "Turn text into Old English blackletter (fraktur) you can copy and paste — regular and bold gothic styles. Free Old English text generator for bios, tattoos, and logos.",
    h1: "Old English Text Generator",
    eyebrow: "Blackletter & gothic",
    leadStyle: "bold-fraktur",
    intro: [
      "This Old English text generator converts your letters into blackletter — the heavy, angular gothic script you see on newspaper mastheads, diplomas, and tattoos — using Unicode's Fraktur characters: 𝕺𝖑𝖉 𝕰𝖓𝖌𝖑𝖎𝖘𝖍 in bold and 𝔒𝔩𝔡 𝔈𝔫𝔤𝔩𝔦𝔰𝔥 in regular. Both are real text, so they copy and paste into bios, captions, and design tools without a font install.",
      "Despite the name, the 'Old English font' has nothing to do with the Old English language of the Anglo-Saxons (roughly 450–1150 AD). It's blackletter, a family of scripts that includes Textura, used in Gutenberg's Bible around 1455, and Fraktur, which the Holy Roman Emperor Maximilian I had cut for his books in the early 1500s. Fraktur stayed the everyday German typeface until 1941. For a lighter decorative style, try the [cursive font generator](/tools/cursive) or the [fancy text generator](/tools/fancy-text-generator).",
    ],
    howToSteps: [
      "Type or paste your text into the box below.",
      "Check the Bold fraktur result first, then compare regular Fraktur, Double struck, and Small caps.",
      "Copy the Old English version you want with one tap.",
      "Paste it into your bio, caption, or design file, and preview it; for tattoo or print work, use the copied text as a reference, not as final artwork.",
    ],
    featuredStyleSlugs: ["bold-fraktur", "fraktur", "double-struck", "cursive", "small-caps", "bold"],
    whereUsed: [
      { platform: "Tattoo & lettering ideas", blurb: "Preview a name, date, or word in blackletter before taking it to an artist, who will redraw it properly for skin." },
      { platform: "Streetwear, jerseys & logos", blurb: "Mock up a gothic wordmark or team name the way sports jerseys and streetwear brands use blackletter." },
      { platform: "Bios & display names", blurb: "A dark, gothic name line on Instagram, TikTok, or Discord — see [cool & different fonts](/guides/cool-different-fonts) for how it compares with other styles." },
    ],
    faq: [
      { question: "What is Old English text?", answer: "In generators, 'Old English text' means blackletter or gothic lettering, the dense, angular style of medieval manuscripts and early printing. The characters used here are Unicode's Fraktur letters, which copy and paste as normal text." },
      { question: "Is Old English font the same as the Old English language?", answer: "No. The Old English language was spoken by the Anglo-Saxons, roughly 450–1150 AD, and was mostly written in insular script, not blackletter. The font name came later and simply means 'old-looking English lettering'." },
      { question: "What's the difference between Old English, blackletter, gothic, and fraktur?", answer: "Blackletter is the family name, and 'gothic' and 'Old English' are informal names for it. Fraktur is one specific blackletter style from 16th-century Germany. Unicode's copy-paste set is Fraktur, so every generator is technically producing Fraktur." },
      { question: "Why do some regular fraktur capitals look different?", answer: "Five regular fraktur capitals (ℭ ℌ ℑ ℜ ℨ) were already encoded in Unicode's Letterlike Symbols block before the full math alphabet was added. Generators borrow those, so C, H, I, R, and Z can look slightly off from the rest. Bold fraktur has a complete, matched alphabet." },
      { question: "Do numbers convert to Old English?", answer: "No. Unicode has no fraktur digits, so numbers and punctuation stay in the normal font. For dates, write the numbers plainly or spell them out in words." },
      { question: "Is Old English text good for tattoos?", answer: "It's good for previewing ideas, but not as final artwork. Copied Unicode text is drawn by your phone's font, so a tattoo artist should redraw the lettering with proper spacing and proportions." },
      { question: "Did blackletter really come from Rome?", answer: "No, that's a common myth on generator sites. Blackletter developed in northern Europe from about the 12th century. Fraktur was named and popularised in 16th-century Germany under Emperor Maximilian I, not ancient Rome." },
      { question: "Why did Germany stop using Fraktur?", answer: "In January 1941 the Nazi government issued a decree replacing Fraktur with roman type as the standard, falsely calling it 'Jewish letters'. Fraktur never returned as an everyday typeface." },
      { question: "Does Old English text work on Instagram and TikTok?", answer: "Yes, in bios, captions, and comments. It won't work in username fields, and on some older phones a few fraktur letters can show as boxes." },
      { question: "Is Old English text easy to read?", answer: "Not at length. Blackletter is dense, and screen readers often read the Unicode letters one by one. Use it for a name, a heading, or one short line." },
    ],
    relatedToolSlugs: ["cursive", "bold", "italic", "small-caps"],
    relatedGuideSlugs: ["fancy-text-styles-explained", "cool-different-fonts", "fonts-for-roblox"],
    lastUpdated: "2026-09-27",
  },
  {
    slug: "roblox-font-generator",
    title: "Roblox Font Generator – 𝐂𝐨𝐨𝐥 Roblox Fonts to Copy & Paste",
    metaDescription:
      "Turn your Roblox name, bio, or group text into cool fonts — bold, small caps, cursive, bubble, and more. Free Roblox font generator, copy and paste ready.",
    h1: "Roblox Font Generator",
    eyebrow: "Names, bios & groups",
    leadStyle: "bold",
    intro: [
      "This Roblox font generator turns plain text into styled Unicode letters, such as 𝐁𝐨𝐥𝐝, ꜱᴍᴀʟʟ ᴄᴀᴘꜱ, 𝓬𝓾𝓻𝓼𝓲𝓿𝓮, and ⓑⓤⓑⓑⓛⓔ, that you can copy and paste into Roblox text fields. They aren't font files. Each one is a standard character, so it pastes like normal text on PC, mobile, Xbox, and PlayStation, with nothing to install.",
      "Roblox has its own typeface, Builder Sans, which replaced Gotham in 2024, and you can't pick a different font for your name. Styled Unicode is the workaround, but every field is moderated. The simple, readable styles at the top of the list get through most often. For what the filter strips and why, see [copy-paste fonts for Roblox](/guides/fonts-for-roblox). Styling text for Minecraft instead? The [Minecraft font generator](/tools/minecraft-font-generator) shows which styles work in Java and Bedrock. For Epic display names, use the [Fortnite font generator](/tools/fortnite-font-generator). Naming a pet in Adopt Me? The [Adopt Me font generator](/tools/adopt-me-font-generator) puts the filter-friendly cute styles first. Comparing games? The [gaming font generator](/tools/gaming-font-generator) has a table of what each one accepts.",
    ],
    howToSteps: [
      "Type your name, bio line, or group name into the box below.",
      "Check the Bold result first, then compare Small caps, Italic, Cursive, and Bubble. These are the simplest styles and the ones most likely to pass the filter.",
      "Copy the version you want with one tap.",
      "Paste it into the Roblox field and save. If it's rejected or reset, switch to a plainer style or style one word instead of the whole line.",
    ],
    featuredStyleSlugs: ["bold", "small-caps", "italic", "cursive", "bubble", "fraktur", "double-struck", "squared", "sparkles"],
    whereUsed: [
      { platform: "Display name", blurb: "The name shown above your avatar and in chat. It's 3–20 characters and can be changed once every 7 days. Roblox doesn't publish which characters it accepts, so try one styled word before changing the whole name." },
      { platform: "About / bio & group text", blurb: "Profile descriptions and group names or descriptions have more room, and they're where most players put a styled name line or motto. Moderation still applies." },
      { platform: "Your experience's title & description", blurb: "A styled word in a game title or description can help it stand out in search results. Text inside the game uses Roblox Studio's built-in font list instead, since Roblox doesn't let you upload your own font files." },
    ],
    faq: [
      { question: "What is a Roblox font generator?", answer: "It's a tool that converts normal letters into look-alike Unicode characters, such as bold, cursive, or bubble letters, that you can paste into Roblox. The styled text is still regular characters, so it works without downloading a font." },
      { question: "Can I use these fonts in my Roblox username?", answer: "No. Your username, the one you log in with, only allows letters, numbers, and one underscore that can't be first or last. Styled text can only go in fields like your display name, bio, and group text." },
      { question: "What font does Roblox use?", answer: "Roblox uses Builder Sans, a typeface its own design team made, announced on 7 March 2024. It replaced Gotham, which was removed on 28 May 2024. Before Gotham, Roblox used Source Sans Pro." },
      { question: "Which Roblox fonts are least likely to get filtered?", answer: "Bold, italic, and small caps are the safest because every letter is still easy to read. Cursive and fraktur are riskier, and glitch or heavily decorated styles are the ones most often blocked." },
      { question: "Why did my styled display name get reset?", answer: "Roblox resets display names that break its Community Standards or that its filter can't read. A long run of decorative characters can look like an attempt to hide words, so try a simpler style or style only one word." },
      { question: "Can I use custom fonts in my Roblox game?", answer: "Only from Roblox's built-in list. Roblox Studio offers a set of fonts for text labels and signs in your experience, but you can't upload your own font files. Styled Unicode can still go in the title and description." },
      { question: "Do these fonts work on mobile, Xbox, and PlayStation?", answer: "Usually, yes. The characters are standard Unicode, so they show up on any device with the right glyphs. A few rare styles may show as empty boxes on older consoles or phones, so check how your name looks on another device." },
      { question: "Why does my styled text show as boxes or disappear?", answer: "Either the device's font has no glyph for that character, or Roblox's filter removed it. Switch to a simpler style like bold or small caps, which are the most widely supported." },
      { question: "Does fancy text count as more characters?", answer: "It can. Many styled letters, like bold and cursive, are stored as two code units, so they may count double toward a field's limit. If a 20-character display name won't fit, shorten it or use small caps, which count as one each." },
      { question: "Is it allowed to use fancy fonts on Roblox?", answer: "Yes. Styled Unicode isn't against the rules, but the words you write still have to follow Roblox's Community Standards. Don't use styling to get around the filter, because that can get your text reset or your account moderated." },
    ],
    relatedToolSlugs: ["bold", "small-caps", "cursive", "bubble"],
    relatedGuideSlugs: ["fonts-for-roblox", "cool-different-fonts", "are-copy-paste-fonts-safe"],
    lastUpdated: "2026-09-28",
  },
  {
    slug: "fortnite-font-generator",
    title: "Fortnite Font Generator – 𝗕𝗼𝗹𝗱 Fortnite Fonts to Copy & Paste",
    metaDescription:
      "Make your Fortnite name stand out with bold, squared, gothic, and other copy-paste fonts. Free Fortnite font generator with the styles Epic's filter accepts most.",
    h1: "Fortnite Font Generator",
    eyebrow: "Names, clan tags & clips",
    leadStyle: "bold",
    intro: [
      "This Fortnite font generator turns plain text into styled Unicode letters, such as 𝗕𝗼𝗹𝗱, 🆂🆀🆄🅰🆁🅴🅳, 𝔻𝕠𝕦𝕓𝕝𝕖, and 𝕲𝖔𝖙𝖍𝖎𝖈, that you can copy and paste into your Epic Games display name, clan tag, or stream title. These aren't font files. Every letter is a standard character, so there's nothing to download or install.",
      "It can't give you the Fortnite logo font itself. That's Burbank Big Condensed, a paid typeface from House Industries, and since Chapter 5 (late 2023) most of the game's menus use a different font, Heading Now. Neither one can be pasted as text. For logo-style thumbnails, you need an image editor and a lookalike font such as Anton or Bebas Neue. This page is for text that has to stay text. Making a name for Roblox instead? Use the [Roblox font generator](/tools/roblox-font-generator), or compare every game in the [gaming font generator](/tools/gaming-font-generator).",
    ],
    howToSteps: [
      "Type your name or clan tag into the box below. Keep it to 16 characters, which is the Epic display name limit.",
      "Compare Bold first, then Bold italic, Small caps, and Double struck. These clean styles are the ones Epic's name filter accepts most often.",
      "Copy the version you want with one tap.",
      "Sign in at epicgames.com, open Account settings, paste the text into the Display name field, and save. If it's rejected, try a plainer style or style one word only.",
    ],
    featuredStyleSlugs: ["bold", "bold-italic", "small-caps", "double-struck", "squared", "bold-fraktur", "fullwidth", "monospace", "sparkles"],
    whereUsed: [
      { platform: "Epic display name", blurb: "Your Epic Games display name is 3–16 characters and can be changed once every two weeks. It shows in the lobby, party, and leaderboards for players on PC and mobile, and for anyone playing with you cross-platform. On PlayStation and Xbox, players on the same console usually see your PSN or Xbox name instead." },
      { platform: "Clan tags & Discord", blurb: "A styled tag in your Discord server name, nickname, or team roster keeps one look across every place your squad meets. Discord takes almost every style here, so it's a good place to try one before using it in game." },
      { platform: "Stream titles, TikTok & YouTube", blurb: "One styled word in a Twitch title, TikTok caption, or YouTube video title can draw the eye to a Victory Royale clip. Keep the rest plain so search and screen readers can still read it." },
    ],
    faq: [
      { question: "What is a Fortnite font generator?", answer: "It's a tool that turns normal letters into look-alike Unicode characters, like bold, squared, or gothic letters, that you can paste into Fortnite and other apps. Because they're regular characters, they work without installing a font." },
      { question: "What font does Fortnite use?", answer: "The Fortnite logo uses a modified Burbank Big Condensed Black, a typeface by Tal Leming published by House Industries. Burbank was also the main menu font until Chapter 5 in late 2023, when Epic switched most of the interface to Heading Now." },
      { question: "Can I download the Fortnite font for free?", answer: "No. Burbank Big Condensed is a commercial font, so any \"free download\" is unlicensed. For thumbnails and edits, Anton and Bebas Neue are free condensed lookalikes on Google Fonts." },
      { question: "Does Epic allow special characters in Fortnite names?", answer: "Some. Epic runs every display name through a filter, and it rejects many symbols and look-alike characters. Bold and small caps pass most often. Epic doesn't publish a full list of accepted characters, so test one styled word before changing your whole name." },
      { question: "How do I change my Fortnite name to a fancy font?", answer: "Copy a style from this page, sign in at epicgames.com, open Account settings, and paste it into the Display name field. Save the change. You can only change your display name once every two weeks, so pick carefully." },
      { question: "Why can't my friends on PlayStation or Xbox see my styled name?", answer: "Console players on the same platform usually see each other's PSN or Xbox names, not the Epic display name. Your styled Epic name shows to PC and mobile players and in cross-platform lobbies. To change what your console friends see, you'd have to change your PSN ID or Xbox gamertag." },
      { question: "Why does my Fortnite name show as boxes?", answer: "Either the device has no glyph for that character, or Epic's filter replaced it. Squared and gothic letters are the most likely to break on older consoles. Switch to bold or small caps, which almost every device can show." },
      { question: "Do fancy fonts count as more characters?", answer: "They can. Bold, gothic, and double-struck letters are each stored as two code units, so a name may hit the 16-character limit early. If your styled name won't fit, shorten it or use small caps, which count as one each." },
      { question: "Is the Fortnite font on Canva?", answer: "No. Burbank isn't in Canva's font library because it's a paid font. Anton, which Canva does include, is the closest free match for Fortnite-style thumbnails." },
      { question: "Is it allowed to use fancy fonts in Fortnite?", answer: "Yes. Styled Unicode isn't against Epic's rules, but your name still has to follow them. No offensive words, and no characters used to impersonate another player or a creator. A name that breaks the rules can be reset by Epic." },
    ],
    relatedToolSlugs: ["bold", "small-caps", "italic", "invisible"],
    relatedGuideSlugs: ["cool-different-fonts", "are-copy-paste-fonts-safe", "tiny-text-discord"],
    lastUpdated: "2026-10-01",
  },
  {
    slug: "adopt-me-font-generator",
    title: "Adopt Me Font Generator – ⓒⓤⓣⓔ Pet Names to Copy & Paste",
    metaDescription:
      "Style your Adopt Me pet names and roleplay signs with cute copy-paste fonts — bubble, small caps, cursive, and more. Free Adopt Me font generator, filter-friendly styles first.",
    h1: "Adopt Me Font Generator",
    eyebrow: "Pet names & RP signs",
    leadStyle: "bubble",
    intro: [
      "This Adopt Me font generator turns your pet's name into cute Unicode letters, such as ⓑⓤⓑⓑⓛⓔ, ꜱᴍᴀʟʟ ᴄᴀᴘꜱ, 𝓬𝓾𝓻𝓼𝓲𝓿𝓮, and ♡ hearts ♡, that you can copy and paste straight into Adopt Me. They aren't font files. Each letter is a normal character, so it works on phone, tablet, PC, and console with nothing to install.",
      "Adopt Me! is a pet-raising game on Roblox made by Uplift Games, so every name you type goes through Roblox's text filter. A blocked name comes back as hash marks (####). Short names in simple styles like bubble and small caps get through most often. For your Roblox display name and bio, use the [Roblox font generator](/tools/roblox-font-generator), and for what the filter strips, see [copy-paste fonts for Roblox](/guides/fonts-for-roblox). Other games are covered in the [gaming font generator](/tools/gaming-font-generator).",
    ],
    howToSteps: [
      "Type your pet's name or your sign text into the box below. Keep it short, ideally one or two words.",
      "Compare Bubble first, then Small caps, Bold, and Cursive. Add a heart or sparkle frame if you want a cuter look.",
      "Copy the version you like with one tap.",
      "In Adopt Me, equip your pet, tap it, and tap the pencil icon next to its name. Paste the styled name and confirm. If it turns into ####, try a plainer style or a shorter name.",
    ],
    featuredStyleSlugs: ["bubble", "small-caps", "bold", "cursive", "hearts", "sparkles", "double-struck", "fullwidth", "italic"],
    whereUsed: [
      { platform: "Pet names", blurb: "The name shown above your pet. Renaming is free and you can change it as often as you like, so it's the easiest place to test a style. Adopt Me doesn't publish an exact length limit, and fan guides give anything from 12 to 20 characters, so shorter is safer. Bubble and small caps letters count as one character each, while bold and cursive letters can count as two." },
      { platform: "Roleplay signs", blurb: "The text on a sign your avatar holds during roleplay or in a trading area. One styled word, such as a pet's name or ★ ᴛʀᴀᴅɪɴɢ ★, stands out more than a whole styled sentence, and it's less likely to be filtered." },
      { platform: "Trading & house roleplay", blurb: "A styled sign helps a trade stand out, but it doesn't change what a pet is worth. A pet's value comes from its rarity and whether it's Neon or Mega Neon, not its name. Be careful with flashy \"WFL?\" signs and trades that move too fast." },
    ],
    faq: [
      { question: "What is an Adopt Me font generator?", answer: "It's a tool that turns normal letters into look-alike Unicode characters, like bubble, small caps, or cursive letters, that you can paste into Adopt Me. The styled text is still regular characters, so it works without downloading a font." },
      { question: "How do I put a fancy font on my Adopt Me pet's name?", answer: "Copy a style from this page, then equip your pet in Adopt Me, tap it, and tap the pencil icon next to its name. Paste the styled name and confirm. Renaming is free, so you can try a few styles." },
      { question: "Why does my pet's name show as ####?", answer: "Roblox's text filter replaced it. Adopt Me runs on Roblox, so every pet name and sign is checked, and anything the filter blocks or can't read becomes hash marks. Try a shorter name, a plainer style like bubble or small caps, or style one word only." },
      { question: "Which fonts work best for Adopt Me pet names?", answer: "Bubble, small caps, and bold are the most reliable. They're easy for the filter to read and show on almost every device. Cursive and double-struck often work too, and simple symbols like ♡, ★, and ✦ are usually kept." },
      { question: "Is there a character limit for Adopt Me pet names?", answer: "Yes, but Adopt Me doesn't publish the exact number, and fan guides disagree. Keep pet names short. Bubble and small caps letters count as one character each, while bold and cursive letters can count as two, so they fill the limit faster." },
      { question: "Why does my friend see my pet's name as boxes or question marks?", answer: "Their device doesn't have a glyph for that character. This happens most on older phones and tablets. Bubble and bold have the widest support, so switch to one of those if friends can't read the name." },
      { question: "Does a fancy pet name make my pet worth more in trades?", answer: "No. A pet's trade value comes from its type, rarity, and whether it's Neon or Mega Neon. A styled name only changes how it looks, so don't trade more for a pet because of its name." },
      { question: "Can I use fancy fonts to get around the Roblox filter?", answer: "No, and you shouldn't try. Roblox's filter checks styled letters too, and using symbols to hide blocked words breaks Roblox's Community Standards. It can get your text removed or your account moderated." },
      { question: "What font is the Adopt Me logo?", answer: "The Adopt Me logo is a designed wordmark, not a font you can type, so no generator can paste it as text. For a similar rounded, playful look in a name, bubble letters are the closest copy-paste style." },
      { question: "Do Adopt Me fonts work on mobile, Xbox, and PlayStation?", answer: "Usually, yes. Adopt Me runs on every device Roblox supports, and the fonts are standard Unicode. A few rare styles may show as boxes on some devices, so check how a name looks on the device you play on most." },
    ],
    relatedToolSlugs: ["bubble", "small-caps", "cursive", "bold"],
    relatedGuideSlugs: ["fonts-for-roblox", "bubble-letters-copy-paste", "are-copy-paste-fonts-safe"],
    lastUpdated: "2026-10-01",
  },
  {
    slug: "minecraft-font-generator",
    title: "Minecraft Font Generator – ᴍɪɴᴇᴄʀᴀꜰᴛ Text for Names, Signs & Chat",
    metaDescription:
      "Style text for Minecraft signs, chat, item names, and server MOTDs — small caps, bubble, bold, and more. Includes which fonts work in Java vs Bedrock. Free, copy and paste.",
    h1: "Minecraft Font Generator",
    eyebrow: "Signs, chat & servers",
    leadStyle: "small-caps",
    intro: [
      "This Minecraft font generator turns your text into styled Unicode, like ꜱᴍᴀʟʟ ᴄᴀᴘꜱ, ⓑⓤⓑⓑⓛⓔ, and 𝐛𝐨𝐥𝐝, that you can paste into Minecraft chat, signs, books, anvil item names, and your server's MOTD. It's text, not an image, so it copies anywhere a keyboard can type.",
      "It can't recreate the blocky Minecraft logo, though. That logo is custom artwork, and the in-game font, Mojangles, is an 8×8 pixel bitmap built into the game, not a character set you can paste. For the logo look in thumbnails or posters, you need an image generator or a replica font file like Minecrafter or Minecraftia. This page is for text that has to stay text inside the game. For Roblox names and bios, use the [Roblox font generator](/tools/roblox-font-generator). For an Epic display name, use the [Fortnite font generator](/tools/fortnite-font-generator). Which styles show up also depends on your edition, so check the Java vs Bedrock notes below before you copy. For other games, see the [gaming font generator](/tools/gaming-font-generator).",
    ],
    howToSteps: [
      "Type your sign line, item name, or MOTD into the box below.",
      "Check the Small caps result first. Small caps, bubble, and full-width letters are the styles most likely to show up in both Java and Bedrock. Bold, cursive, and fraktur only work in Java Edition.",
      "Copy the version you want with one tap.",
      "Paste it into chat, a sign, a book, an anvil, or the motd= line in server.properties, then check it in-game, because Minecraft draws styled characters in its own fallback pixel font.",
    ],
    featuredStyleSlugs: ["small-caps", "bubble", "fullwidth", "superscript", "bold", "cursive", "fraktur", "double-struck", "upside-down"],
    whereUsed: [
      { platform: "Java Edition", blurb: "Java Edition shows almost every style. Characters Mojangles doesn't have are drawn in GNU Unifont, the game's fallback pixel font, so bold, cursive, and fraktur all appear on signs, in chat (up to 256 characters), and on anvil names (up to 50 characters)." },
      { platform: "Bedrock Edition", blurb: "Bedrock can't draw characters above U+FFFF. That rules out bold, italic, cursive, fraktur, double-struck, monospace, and 🅰-style squared letters, which appear blank. Small caps, bubble ⓐ, full-width, superscript, and upside-down letters are in the supported range." },
      { platform: "Server MOTD & names", blurb: "The server-list MOTD accepts symbols like ♥ and small caps, and you can combine them with § color codes. Keep it under 59 characters, because a longer MOTD can cause a communication error in the server list." },
    ],
    faq: [
      { question: "What font does Minecraft use?", answer: "Minecraft's in-game text uses Mojangles, also called Minecraft Seven. Each letter is an 8×8 pixel image. Characters it doesn't have fall back to GNU Unifont, and the logo is separate custom artwork that isn't a font." },
      { question: "Can I copy and paste the actual Minecraft font?", answer: "No. The pixel font only exists as images inside the game, so there's no character set to paste. For the blocky look outside the game, use an image-based generator or install a replica font like Minecraftia." },
      { question: "Which fancy fonts work in Minecraft Bedrock Edition?", answer: "Small caps, bubble letters, full-width text, superscript, and upside-down text are the ones to use, because they're all in Unicode's Basic Multilingual Plane, the range Bedrock can draw. Bedrock doesn't support any character above U+FFFF, so bold, cursive, fraktur, and similar math-alphabet styles show up blank." },
      { question: "Do fancy fonts work in Minecraft Java Edition?", answer: "Yes, almost all of them. Java Edition has supported the full Unicode range since 1.16, and current versions draw missing characters in GNU Unifont, so styled text appears in chat, on signs, and in books, just in a slightly different pixel style." },
      { question: "Can I change my Minecraft username to a fancy font?", answer: "No. Java usernames are 3–16 characters using only letters, numbers, and underscores, and Bedrock uses your Xbox gamertag. Styled text works in item names, signs, books, chat, and server text instead." },
      { question: "How do I make bold or colored text in Minecraft?", answer: "Use formatting codes. The section sign § followed by a code changes the text: §l is bold, §o italic, §n underline, §m strikethrough, §k scrambled, §r reset, and 0–9 or a–f pick one of 16 colors. Bedrock accepts them in most text boxes. In Java they work in server files, resource packs, and commands, not normal chat." },
      { question: "How do I put fancy text on a Minecraft sign?", answer: "Copy a style from the generator, place the sign, and paste the text into the line you want to edit. In Bedrock, stick to small caps, bubble, or full-width, and keep each line short, because styled characters can be wider than plain ones." },
      { question: "How do I rename an item with a fancy font?", answer: "Put the item in an anvil, paste the styled text into the name box, and take the renamed item. Java allows up to 50 characters, and renaming costs experience levels." },
      { question: "How do I add styled text to my server MOTD?", answer: "Open server.properties, paste your text after motd=, and restart the server. Symbols and small caps work, and you can add § color codes. Keep it under 59 characters so the server list shows it properly." },
      { question: "Why does my fancy text show as blank spaces in Minecraft?", answer: "You're probably on Bedrock Edition using a style above U+FFFF, such as bold or cursive, which Bedrock can't draw. Switch to small caps, bubble, or full-width. On Java, a missing character usually means a resource pack is replacing the default font." },
    ],
    relatedToolSlugs: ["small-caps", "bubble", "superscript", "bold"],
    relatedGuideSlugs: ["small-caps-copy-paste", "cool-different-fonts", "fonts-for-roblox"],
    lastUpdated: "2026-09-28",
  },
  {
    slug: "gaming-font-generator",
    title: "Gaming Font Generator – 𝐂𝐨𝐨𝐥 Gamer Fonts That Pass Game Filters",
    metaDescription:
      "Free gaming font generator: copy and paste bold, small caps, gothic, and bubble fonts for your gamer name and clan tag, plus which styles each game accepts.",
    h1: "Gaming Font Generator",
    eyebrow: "Gamer names & clan tags",
    leadStyle: "bold",
    intro: [
      "This gaming font generator turns your gamer name or clan tag into styled Unicode letters, such as 𝐁𝐨𝐥𝐝, ꜱᴍᴀʟʟ ᴄᴀᴘꜱ, 𝕲𝖔𝖙𝖍𝖎𝖈, 🆂🆀🆄🅰🆁🅴🅳, and ⓑⓤⓑⓑⓛⓔ, that you can copy and paste into games, Discord, Steam, and stream titles. These aren't font files. Each letter is a standard character, so it works on PC, phone, and console with nothing to install.",
      "Whether a style shows up depends on the game, not the generator. Each game runs names through its own filter and draws them with its own font, so the same name can work in one game and be rejected in another. This page is the hub: the generator up top, then a game-by-game guide below, with dedicated generators for [Roblox](/tools/roblox-font-generator), [Minecraft](/tools/minecraft-font-generator), [Fortnite](/tools/fortnite-font-generator), and [Adopt Me](/tools/adopt-me-font-generator).",
    ],
    howToSteps: [
      "Type your gamer name or clan tag into the box below. Most games cap names at 12–16 characters, so keep it short.",
      "Compare Bold first, then Small caps, Double struck, and Gothic. Bold and small caps get through the most game filters.",
      "Copy the version you want with one tap.",
      "Paste it into the game's name field, check how it looks in a lobby, and keep a plain-text copy in case the game rejects it.",
    ],
    featuredStyleSlugs: ["bold", "small-caps", "bold-fraktur", "double-struck", "squared", "bubble", "fullwidth", "monospace", "zalgo"],
    whereUsed: [
      { platform: "In-game names", blurb: "Your display name or nickname is the most-seen text you own in a game. It's also the most filtered: many games reject styled letters, symbols, or both. Check the compatibility table below before you spend a name change." },
      { platform: "Clan tags & Discord", blurb: "Discord takes almost every style here in server names, role names, and nicknames, and display names can be up to 32 characters. It's the easiest place to keep one clan-tag look across every game your squad plays." },
      { platform: "Steam, Twitch & YouTube", blurb: "Steam profile names accept nearly any Unicode character. A styled word in a Twitch stream title or YouTube video title also draws the eye. Keep the rest plain so search and screen readers can still read it." },
    ],
    sections: [
      {
        heading: "What is a gaming font generator?",
        paragraphs: [
          "A gaming font generator is a text converter that swaps each letter you type for a look-alike Unicode character, so \"Sniper\" becomes 𝐒𝐧𝐢𝐩𝐞𝐫 or ꜱɴɪᴘᴇʀ. The game doesn't change its font. It receives different characters and draws them with whatever glyphs it has.",
          "That's why gaming fonts copy and paste like normal text, and also why they don't always work. Unicode is the standard list of about 160,000 characters every modern device uses. Bold, italic, gothic (fraktur), and double-struck letters come from its Mathematical Alphanumeric Symbols block, small caps from phonetic blocks, and bubble and squared letters from the enclosed alphanumerics. A game shows a style only if its font has those characters and its name filter lets them through.",
        ],
      },
      {
        heading: "Which games accept fancy fonts in names?",
        paragraphs: [
          "Most games accept at least some styled text, but the rules differ a lot. Discord and Steam accept nearly everything. Roblox, Fortnite, Free Fire, and PUBG Mobile accept some styles in display names. Xbox gamertags, PlayStation Online IDs, and Riot IDs are the strictest, and styled letters mostly won't work there.",
          "Game companies rarely publish a full list of accepted characters, so treat the table below as a starting point, not a guarantee. Rules change with updates. Test one styled word before you spend a name change.",
        ],
        table: {
          caption: "Gaming font compatibility by platform (checked October 2026)",
          headers: ["Game / platform", "Name rules", "Fancy fonts?", "Best styles to try"],
          rows: [
            ["[Roblox](/tools/roblox-font-generator)", "Display name 3–20 characters, one change every 7 days. Usernames allow letters, numbers, and one underscore only.", "Display name sometimes; heavily filtered", "Bold, small caps"],
            ["[Minecraft](/tools/minecraft-font-generator)", "Java usernames are 3–16 letters, numbers, or underscores. Styled text works on signs, books, chat, item names, and server MOTDs.", "Java: most styles. Bedrock: only characters up to U+FFFF", "Small caps, bubble, full-width"],
            ["[Fortnite](/tools/fortnite-font-generator)", "Epic display name 3–16 characters, one change every 2 weeks.", "Partly; Epic filters many symbols", "Bold, small caps"],
            ["[Adopt Me](/tools/adopt-me-font-generator)", "Pet names and signs go through the Roblox filter.", "Often; blocked text shows as ####", "Bubble, small caps"],
            ["Free Fire", "Nickname about 12 characters. Renaming costs 390 diamonds or a Name Change Card.", "Yes; a styled letter can count as 2–3 characters", "Bold, small caps, ꧁꧂ frames"],
            ["PUBG Mobile", "Name up to 14 characters. Changing it needs a Rename Card.", "Yes; some symbols blocked", "Bold, small caps"],
            ["Valorant (Riot ID)", "Game name 3–16 characters plus a 3–5 character tagline. One change every 90 days.", "Rarely; Riot specifies alphanumeric", "Plain or accented letters"],
            ["Xbox gamertag", "Up to 12 characters from supported alphabets (Latin, Cyrillic, CJK, Thai, and others).", "No", "Style your Discord name instead"],
            ["PlayStation Online ID", "3–16 characters: letters, numbers, hyphens, underscores. First change free.", "No", "Style your Discord name instead"],
            ["Discord", "Display name up to 32 characters.", "Yes, almost every style", "Any"],
            ["Steam", "Profile name can be changed at any time.", "Yes, almost every style", "Any"],
          ],
        },
      },
      {
        heading: "Which gaming font styles work best?",
        paragraphs: [
          "Bold and small caps are the safest gaming fonts, because almost every device has their glyphs and most filters still read them as letters. Gothic, double-struck, squared, and bubble letters look more distinctive but break more often, either as empty boxes on older consoles or as a rejected name.",
        ],
        subsections: [
          {
            heading: "Bold and aggressive styles",
            paragraphs: [
              "𝐁𝐨𝐥𝐝 and 𝗕𝗼𝗹𝗱 𝘀𝗮𝗻𝘀 read as strong and competitive, and they're the first thing to try for a shooter or battle-royale name. Each bold letter is stored as two code units, though, so a 16-character limit can fill after 8 letters. The [bold text generator](/tools/bold) has every weight.",
            ],
          },
          {
            heading: "Gothic and dark styles",
            paragraphs: [
              "𝕲𝖔𝖙𝖍𝖎𝖈 (bold fraktur) suits RPG, horror, and villain names. It's also the style most likely to show as boxes, so check it on the devices your friends use. The [Old English text generator](/tools/old-english-text-generator) has every blackletter variant.",
            ],
          },
          {
            heading: "Clean and minimal styles",
            paragraphs: [
              "ꜱᴍᴀʟʟ ᴄᴀᴘꜱ and ｆｕｌｌｗｉｄｔｈ letters are quiet but distinct, and each counts as one character. They're the best pick when a game has a tight limit or an older font. Try the [small caps generator](/tools/small-caps).",
            ],
          },
          {
            heading: "Glitch and cursed styles",
            paragraphs: [
              "Z̷a̸l̶g̵o̷ text stacks combining marks on each letter for a corrupted look. Roblox and most competitive games strip or reject it, but Steam and Discord show it. Keep it light, and use the [Zalgo text generator](/tools/zalgo) to control the intensity.",
            ],
          },
        ],
      },
      {
        heading: "How do you put a gaming font in your name?",
        paragraphs: [
          "Copy a style from the generator, open the game's or platform's name setting, paste it in, and save. Where that setting lives depends on the game. Roblox and Epic display names are changed in account settings on their websites, while Free Fire and PUBG Mobile change names in game with a rename item.",
          "Before you save, check three things. Count the characters, because styled letters can count as two. Read the name-change rules, because Roblox allows one change every 7 days and Epic one every 2 weeks. And keep your plain name written down, because a rejected or reset name falls back to plain text.",
        ],
      },
      {
        heading: "Why does my gaming font show as boxes or get rejected?",
        paragraphs: [
          "Empty boxes (□) or question marks mean the viewing device's font has no glyph for that character. The name is usually saved correctly, and players on newer devices may see it fine. Bold and small caps fix this, because nearly every system font includes them. Minecraft Bedrock is a special case: it can't draw any character above U+FFFF, so bold, cursive, and gothic letters show as blanks there.",
          "A rejected name, or one replaced with #### or reset to your username, means the game's filter blocked it. Filters block characters they can't read so players can't hide banned words or impersonate others. Try a plainer style, style one word only, or drop the decorative symbols. Don't use fancy fonts to sneak a blocked word past a filter, since games treat that as a rules violation.",
        ],
      },
      {
        heading: "Gaming fonts vs fonts for logos and thumbnails",
        paragraphs: [
          "Copy-paste gaming fonts are for text that has to stay text, like names, tags, and titles. A logo or YouTube thumbnail is an image, so it needs a real font file in an editor like Canva or Photoshop instead.",
          "Official game fonts can't be pasted either. Fortnite's logo is a modified Burbank Big Condensed, a paid typeface, and Minecraft's in-game font, Mojangles, is a pixel bitmap built into the game. For thumbnails, free Google Fonts lookalikes do the job: Bebas Neue or Anton for a Fortnite feel, Press Start 2P for pixel art, and Orbitron for a sci-fi esports look.",
        ],
      },
    ],
    faq: [
      { question: "What is a gaming font generator?", answer: "It's a tool that turns normal letters into look-alike Unicode characters, like bold, small caps, or gothic letters, that you can paste into games and gaming apps. The text stays as regular characters, so you don't need to download or install a font." },
      { question: "Are gaming fonts free?", answer: "Yes. This generator is free with no sign-up, and the styled characters are part of the Unicode standard, so nobody owns them. Some games charge for a name change, though, like Free Fire's 390-diamond rename." },
      { question: "Why does my gaming font show as boxes or question marks?", answer: "The device you're viewing it on doesn't have a glyph for that character. Your name is usually saved correctly, but some players can't see it. Bold and small caps have the widest support, so switch to one of those." },
      { question: "Do other players see my styled gaming name?", answer: "Usually, if their device supports the characters. On PlayStation and Xbox, players on the same console often see your PSN or Xbox name instead of a game's own display name, so a styled Epic or Roblox name may not show to them." },
      { question: "Can I use the same gaming font across multiple games?", answer: "Sometimes. A bold or small caps name usually works in Roblox, Fortnite, Free Fire, PUBG Mobile, Discord, and Steam, but Xbox gamertags and PlayStation IDs don't accept styled letters. Pick the plainest style that works everywhere you play." },
      { question: "What gaming font style is best for a clan tag?", answer: "Small caps or bold, kept to 2–5 letters. Short tags in simple styles pass the most filters and leave room for your name. Add a symbol like ⚔ or ꧁꧂ only where the game accepts symbols." },
      { question: "Do fancy fonts count as more characters in game names?", answer: "Often, yes. Bold, italic, gothic, and double-struck letters are each stored as two code units, so a 16-character limit may fit only 8 of them. Small caps, bubble, and full-width letters usually count as one." },
      { question: "Can I put a fancy font in my Xbox gamertag or PSN ID?", answer: "No. Xbox gamertags allow letters from supported alphabets, numbers, and spaces, up to 12 characters. PlayStation Online IDs allow only letters, numbers, hyphens, and underscores. Neither accepts styled Unicode letters." },
      { question: "What fonts do Fortnite and Minecraft use?", answer: "Fortnite's logo uses a modified Burbank Big Condensed, and most of its menus switched to Heading Now in Chapter 5. Minecraft's in-game text uses a pixel font called Mojangles. Neither can be pasted as text, so copy-paste generators use look-alike Unicode styles instead." },
      { question: "Are gaming fonts against the rules?", answer: "No. Styled Unicode is allowed, but your name still has to follow each game's rules. Using styled letters to hide banned words or impersonate another player can get your name reset or your account moderated." },
      { question: "Is it safe to copy and paste gaming fonts?", answer: "Yes. Gaming fonts are plain text characters with no code in them, so they can't harm your device or account. Be careful with invisible characters, though, since some games flag them as an attempt to hide or blank a name." },
    ],
    relatedToolSlugs: ["bold", "small-caps", "zalgo", "invisible"],
    relatedGuideSlugs: ["fonts-for-roblox", "cool-different-fonts", "are-copy-paste-fonts-safe", "tiny-text-discord"],
    lastUpdated: "2026-10-02",
  },
];

export function getGalleryPage(slug: string) {
  return galleryPages.find((page) => page.slug === slug);
}
