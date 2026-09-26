import type { GuideFaq } from "@/lib/guides";
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
      "Scan the styles — small caps, bold, [italic](/tools/italic), cursive, [fraktur](/tools/old-english-text-generator), double-struck, [monospace](/tools/typewriter-font-generator), bubble, superscript, and more all convert at once.",
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
      "Compare the fancy styles — cursive, [fraktur (Old English)](/tools/old-english-text-generator), double-struck, bold italic, bubble, squared, and decorated frames all render together.",
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
];

export function getGalleryPage(slug: string) {
  return galleryPages.find((page) => page.slug === slug);
}
