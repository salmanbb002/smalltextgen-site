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
      { platform: "Gaming & display names", blurb: "Stylish display names and clan tags in games and chat apps that render Unicode — see the [Roblox](/tools/roblox-font-generator), [Minecraft](/tools/minecraft-font-generator), and [Fortnite](/tools/fortnite-font-generator), and [Adopt Me](/tools/adopt-me-font-generator) font generators for game-specific styles." },
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
      "Roblox has its own typeface, Builder Sans, which replaced Gotham in 2024, and you can't pick a different font for your name. Styled Unicode is the workaround, but every field is moderated. The simple, readable styles at the top of the list get through most often. For what the filter strips and why, see [copy-paste fonts for Roblox](/guides/fonts-for-roblox). Styling text for Minecraft instead? The [Minecraft font generator](/tools/minecraft-font-generator) shows which styles work in Java and Bedrock. For Epic display names, use the [Fortnite font generator](/tools/fortnite-font-generator). Naming a pet in Adopt Me? The [Adopt Me font generator](/tools/adopt-me-font-generator) puts the filter-friendly cute styles first.",
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
      "It can't give you the Fortnite logo font itself. That's Burbank Big Condensed, a paid typeface from House Industries, and since Chapter 5 (late 2023) most of the game's menus use a different font, Heading Now. Neither one can be pasted as text. For logo-style thumbnails, you need an image editor and a lookalike font such as Anton or Bebas Neue. This page is for text that has to stay text. Making a name for Roblox instead? Use the [Roblox font generator](/tools/roblox-font-generator).",
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
      "Adopt Me! is a pet-raising game on Roblox made by Uplift Games, so every name you type goes through Roblox's text filter. A blocked name comes back as hash marks (####). Short names in simple styles like bubble and small caps get through most often. For your Roblox display name and bio, use the [Roblox font generator](/tools/roblox-font-generator), and for what the filter strips, see [copy-paste fonts for Roblox](/guides/fonts-for-roblox).",
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
      "It can't recreate the blocky Minecraft logo, though. That logo is custom artwork, and the in-game font, Mojangles, is an 8×8 pixel bitmap built into the game, not a character set you can paste. For the logo look in thumbnails or posters, you need an image generator or a replica font file like Minecrafter or Minecraftia. This page is for text that has to stay text inside the game. For Roblox names and bios, use the [Roblox font generator](/tools/roblox-font-generator). For an Epic display name, use the [Fortnite font generator](/tools/fortnite-font-generator). Which styles show up also depends on your edition, so check the Java vs Bedrock notes below before you copy.",
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
];

export function getGalleryPage(slug: string) {
  return galleryPages.find((page) => page.slug === slug);
}
