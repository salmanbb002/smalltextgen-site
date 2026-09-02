export type GuideFaq = { question: string; answer: string };
export type GuideSection = { heading: string; paragraphs: string[] };
export type GuideLink = { label: string; href: string };
export type GuideCluster = "A" | "B" | "C" | "D" | "Sitewide" | "Platform";

export type Guide = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  dek: string;
  intro: string[];
  sections: GuideSection[];
  faq: GuideFaq[];
  pillarLinks: GuideLink[];
  relatedGuideSlugs: string[];
  lastUpdated: string;
  cluster: GuideCluster;
};

export const guides: Guide[] = [
  {
    slug: "small-text-instagram-bio",
    title: "Small Text for Instagram Bio (Copy & Paste)",
    metaDescription:
      "How to add small text and tiny letters to your Instagram bio. Copy-paste ready Unicode styles, no font install or app needed.",
    h1: "How to Get Small Text on Your Instagram Bio",
    dek: "A step-by-step walkthrough for turning a plain bio into small caps, superscript, or tiny lettering.",
    cluster: "A",
    lastUpdated: "2026-08-10",
    intro: [
      "If you've seen a bio written in ᴛɪɴʏ, evenly-sized letters and wondered how it was done, the answer is a small text generator, not a downloaded font. Instagram's bio field only accepts plain Unicode text, so anyone using a stylized look is really pasting in small letters that were copy and pasted from a converter tool, then saved like any other text.",
      "This guide walks through getting small text into a bio correctly the first time, plus which style of tiny letters tends to read best in that specific 150-character field.",
    ],
    sections: [
      {
        heading: "Why Instagram bios can't run custom fonts",
        paragraphs: [
          "Instagram, like most apps, doesn't let you upload or select a custom typeface for your bio. What it does accept is any character in the Unicode standard — the same underlying character set used for emoji, accented letters, and every alphabet on earth. A small text generator swaps your regular letters for a different set of Unicode characters that happen to look small or capital-shaped, so the 'font change' you're seeing is really a character substitution, not a rendering change.",
          "That distinction matters because it explains both why this works everywhere without installing anything, and why it occasionally breaks — a handful of older Android keyboards or minimal system fonts don't include glyphs for every Unicode block, so a small percentage of visitors might see a blank box instead of a letter.",
        ],
      },
      {
        heading: "Step by step: add small text to your bio",
        paragraphs: [
          "1. Open the small text generator and type your bio text into the input box — the converter works entirely in your browser, so nothing is uploaded.\n2. Compare the small caps, superscript, and subscript results side by side; each uses a different Unicode block and reads slightly differently.\n3. Tap Copy on the version you want.\n4. In Instagram, go to your profile, tap Edit Profile, then tap the Bio field.\n5. Paste, then tap the checkmark or Done to save.",
          "Because the text is copy and paste, not typed fresh inside Instagram, you can build and revise your bio in the generator until it's right, then paste once.",
        ],
      },
      {
        heading: "Which small text style looks best in a bio",
        paragraphs: [
          "Small caps (ᴀʙᴄ) is the most legible option for a full sentence — every letter stays close to the same visual weight, so longer bios don't feel cramped. Superscript (ᵃᵇᶜ) reads as genuinely tiny and works well for a single accent line, like a tagline under your name. Subscript is the least complete alphabet in Unicode — not every lowercase letter has a true subscript form — so it suits short words or numbers more than full sentences; the subscript generator page has the full list of which letters convert cleanly.",
        ],
      },
      {
        heading: "Before you save: two things to check",
        paragraphs: [
          "Instagram bios are capped at 150 characters, and stylized Unicode letters count the same as regular ones, so a tiny-text bio won't buy you extra room. Preview the saved bio on your own profile afterward — if a letter shows up as a box, swap that word to small caps instead, since it has the most complete alphabet coverage of the tiny styles.",
        ],
      },
    ],
    faq: [
      {
        question: "Does small text actually work in Instagram bios?",
        answer:
          "Yes. Because it's standard Unicode rather than an image or custom font, Instagram displays it exactly like normal text — you can copy, paste, search, and even screen-read it, with the accessibility caveats covered in [Unicode Explained](/guides/unicode-explained).",
      },
      {
        question: "Why does my small text show up as a box or question mark?",
        answer:
          "That means the visitor's device doesn't have a glyph for that specific Unicode character in its installed fonts — most common on older Android phones. Small caps has the broadest support of the tiny styles because it maps to a widely implemented Unicode block.",
      },
      {
        question: "Can I use small text in my Instagram username too, not just my bio?",
        answer:
          "Instagram usernames are restricted to letters, numbers, periods, and underscores, so stylized Unicode text is blocked there — it only works in the bio, name field, and posts/comments.",
      },
      {
        question: "Will small text let me fit more into my 150-character bio limit?",
        answer:
          "No — each styled character still counts as one character toward the limit, the same as a normal letter.",
      },
    ],
    pillarLinks: [
      { label: "small text generator", href: "/" },
      { label: "small caps tool", href: "/tools/small-caps" },
    ],
    relatedGuideSlugs: ["tiny-text-discord", "copy-paste-text-tricks-social-media-bios"],
  },
  {
    slug: "tiny-text-discord",
    title: "Tiny Text for Discord: Copy, Paste & Tips",
    metaDescription:
      "How to use tiny letters and small text generator output in Discord names, nicknames, and messages — plus what actually renders.",
    h1: "Tiny Text for Discord: Copy, Paste, and Formatting Notes",
    dek: "What actually works when you paste small text generator output into a Discord name or message.",
    cluster: "A",
    lastUpdated: "2026-09-03",
    intro: [
      "Discord is one of the most common places people paste tiny letters — into a display name, a server nickname, or a message meant to stand out in a busy channel. Because Discord renders plain Unicode rather than custom fonts, a small text generator works there the same way it works anywhere else: you're pasting real characters, not applying a font setting.",
      "This guide covers the practical side — character limits, where Discord accepts styled Unicode and where it doesn't, and which tiny styles hold up best in Discord's own font.",
    ],
    sections: [
      {
        heading: "Where tiny text works in Discord",
        paragraphs: [
          "Display names, server nicknames, status text, and message content all accept Unicode small text, since Discord treats it as ordinary text input. Server names and channel names generally accept it too, subject to a server owner's naming rules. What doesn't work reliably is anywhere Discord validates input more strictly — usernames (the @handle, not the display name) are restricted to lowercase letters, digits, underscores, and periods, so stylized Unicode is rejected there.",
        ],
      },
      {
        heading: "How to copy and paste small text into Discord",
        paragraphs: [
          "1. Open the small text generator and type the name or message you want.\n2. Pick a style — small caps is the safest default because Discord's UI font renders it cleanly at small sizes; superscript can look cramped in the compact sidebar.\n3. Copy the result.\n4. In Discord, open User Settings → Profiles to change your display name, or right-click your name in a specific server → Edit Server Profile for a per-server nickname.\n5. Paste and save.",
        ],
      },
      {
        heading: "A note on Discord and blank or invisible names",
        paragraphs: [
          "People searching for 'small text generator discord' are often actually after a blank-looking name, not a small one — those are different tools. Discord blocks names made entirely of whitespace or zero-width characters, so a genuinely empty name needs a specific approach; see the [blank Discord name guide](/guides/blank-discord-name-message) for what still works after that change.",
        ],
      },
      {
        heading: "Tiny text in About Me, status, and on mobile",
        paragraphs: [
          "Your profile About Me and custom status both accept small text — paste it the same way you would a nickname. On mobile, Discord renders the same Unicode blocks as desktop, so small caps and superscript that look right on desktop look right in the iOS and Android apps too; the main difference is the tighter line height in the mobile member list, where superscript can look cramped. Small caps holds up best across both.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I use tiny text in my Discord About Me or custom status?",
        answer:
          "Yes. Both fields accept styled Unicode, so you can paste small caps, superscript, or subscript into them the same way as a display name.",
      },
      {
        question: "Does tiny text look the same on Discord mobile and desktop?",
        answer:
          "Mostly. Discord renders the same Unicode on both, so small caps and superscript match. The mobile member list has tighter spacing, so superscript can look cramped there — small caps is the safer pick for mobile.",
      },
      {
        question: "Does small text generator output work for Discord names?",
        answer:
          "Yes, for your display name and per-server nickname. Your Discord username (the one with the # or unique handle) is restricted to plain lowercase letters, numbers, underscores, and periods, so styled Unicode won't be accepted there.",
      },
      {
        question: "Why do some small letters look different in Discord than in the generator preview?",
        answer:
          "Discord renders text in its own interface font, which doesn't include every glyph in every Unicode block. Small caps and superscript both have broad support in Discord's font stack; more decorative styles are more likely to show gaps.",
      },
      {
        question: "Is there a character limit for tiny text in Discord messages?",
        answer:
          "Standard messages are capped at 2,000 characters for most accounts, same as regular text — styled Unicode characters don't count differently.",
      },
    ],
    pillarLinks: [{ label: "small text generator", href: "/" }],
    relatedGuideSlugs: ["small-text-instagram-bio", "blank-discord-name-message"],
  },
  {
    slug: "what-is-invisible-text",
    title: "What Is Invisible Text? Copy-Paste Guide",
    metaDescription:
      "What invisible and blank text actually is, which Unicode character makes it work, and how to copy-paste it without it getting stripped.",
    h1: "What Is Invisible Text and How Do You Copy-Paste It?",
    dek: "The Unicode character behind 'blank' text, and why it isn't quite the same as an empty string.",
    cluster: "B",
    lastUpdated: "2026-08-10",
    intro: [
      "Invisible text — sometimes searched as blank text, empty text, or hidden characters — isn't actually empty. It's a real, visible-width character that happens to render as blank space instead of a mark. That distinction is the whole trick: a truly empty string has nothing to copy, but a blank Unicode character can be selected, copied, and pasted exactly like a letter.",
      "The [invisible text generator](/tools/invisible) on this site produces that character for you automatically; this guide explains what's actually happening when you use it.",
    ],
    sections: [
      {
        heading: "The character behind invisible text",
        paragraphs: [
          "This site's invisible text tool uses the Braille Pattern Blank, Unicode code point U+2800 — the character represents an empty six-dot Braille cell in the [Braille Patterns block](https://www.unicode.org/charts/PDF/U2800.pdf) of the Unicode Standard. Unlike a regular space or a zero-width character, it occupies visible width, which is exactly why it's useful: many apps automatically trim leading/trailing whitespace or reject strings made only of zero-width characters, but a Braille blank isn't whitespace as far as the app is concerned, so it survives that cleanup.",
        ],
      },
      {
        heading: "How to copy and paste blank text correctly",
        paragraphs: [
          "1. Open the invisible text generator and type any placeholder text — every character you type becomes one blank cell, so the length matches what you'll paste.\n2. Copy the result.\n3. Paste it into the field you need — a caption, a message, a name field.\n4. If the app strips it anyway, try pasting it between two regular characters instead of alone; some validators only reject fields that are blank from end to end.",
        ],
      },
      {
        heading: "Where this actually gets used",
        paragraphs: [
          "Common cases: a blank line in a caption to add visual spacing without an empty-string error, a placeholder message to hold a spot in a chat thread, or a deliberately blank-looking name or status where the platform allows it. It's less reliable as a way to 'hide' text from moderation — the character is fully present in the data, just visually blank, so anything that logs or filters message content still sees it.",
        ],
      },
    ],
    faq: [
      {
        question: "Is invisible text actually empty?",
        answer:
          "No. It's a real Unicode character (Braille Pattern Blank, U+2800 in the default generator here) that renders without a visible mark but still has width and still counts as a character — that's what makes it copy-paste safe.",
      },
      {
        question: "Why did my invisible text disappear when I pasted it?",
        answer:
          "Some apps trim strings that consist entirely of certain whitespace-adjacent characters, or enforce a minimum of one 'real' character. If that happens, pair the blank character with a single visible character, like a period, rather than pasting it alone.",
      },
      {
        question: "What are hidden characters, and are they the same as invisible text?",
        answer:
          "\"Hidden characters\" usually refers to the same idea from the technical side — Unicode code points that have no visible glyph, including zero-width spaces and format characters. Invisible text generators pick one that's practical to paste; see [Unicode Explained](/guides/unicode-explained) for how these code points are defined in the standard.",
      },
      {
        question: "Does invisible text work the same as clearing a field?",
        answer:
          "No — clearing a field leaves it genuinely empty, which many forms reject as required-field-missing. Invisible text gives you a non-empty value that happens to look blank, which is why people use it where an empty field isn't accepted.",
      },
    ],
    pillarLinks: [{ label: "invisible text generator", href: "/tools/invisible" }],
    relatedGuideSlugs: ["blank-discord-name-message", "unicode-explained"],
  },
  {
    slug: "blank-discord-name-message",
    title: "Blank Discord Name & Message Guide",
    metaDescription:
      "How to set a blank-looking Discord name or send an empty-looking message today, and why old zero-width tricks stopped working.",
    h1: "Blank or Empty Discord Name and Message Guide",
    dek: "What still works for a blank-looking Discord name after Discord tightened its username rules.",
    cluster: "B",
    lastUpdated: "2026-09-03",
    intro: [
      "A genuinely blank Discord name used to be possible with a zero-width character alone. Discord has since closed that off — usernames and, in most cases, display names now require at least one character Discord recognizes as non-blank. What still works is a visually blank character with real width, like the one this site's invisible text generator produces, which is why the two are worth telling apart.",
    ],
    sections: [
      {
        heading: "What changed",
        paragraphs: [
          "Discord's current username system requires lowercase letters, numbers, underscores, or periods, and it rejects names Discord's client treats as empty. Display names (the friendlier name shown instead of your @handle) are more permissive of Unicode but still get validated for emptiness — a string of pure zero-width characters is typically caught and rejected, either at save time or by other members reporting the name.",
        ],
      },
      {
        heading: "What still works for a blank-looking display name or nickname",
        paragraphs: [
          "1. Open the [invisible text generator](/tools/invisible) and type a short placeholder — three or four characters is usually enough.\n2. Copy the blank result — it looks empty but has real character width, so it passes emptiness checks that reject pure whitespace or zero-width strings.\n3. In Discord, go to User Settings → Profiles to set it as your display name, or right-click your name in a server → Edit Server Profile for a nickname there.\n4. Paste and save. If Discord still rejects it, add one regular character at the start, since some validation only blocks names that are entirely non-visible.",
        ],
      },
      {
        heading: "Blank captions and messages",
        paragraphs: [
          "Messages are less strict than usernames — pasting a blank-looking character as a message, or using it to add visual space between two messages, generally works without extra steps. Keep in mind the content still exists in Discord's message logs even though it looks empty on screen; it's a visual effect, not a way to send nothing.",
        ],
      },
      {
        heading: "Blank messages as channel spacers",
        paragraphs: [
          "A message that's just one visible-width blank character reads as an empty line in the channel, which some people use to separate announcements or push a previous message up. It works, but two cautions: server AutoMod or anti-spam rules can flag repeated blank or near-empty messages, and moderators generally frown on using them to pad a channel. Keep it to the occasional single spacer, not a habit.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I copy blank text for a Discord message?",
        answer:
          "Open the [invisible text generator](/tools/invisible), type a short placeholder, copy the blank result, and paste it straight into the Discord message box. Messages are far less strict than usernames, so it usually posts without any extra step.",
      },
      {
        question: "Will a blank Discord message get removed by AutoMod?",
        answer:
          "It can. Some servers configure AutoMod or third-party bots to catch empty or near-empty messages as spam. A one-off blank spacer is usually fine; repeated ones are more likely to be flagged or auto-deleted.",
      },
      {
        question: "Can I still make a completely blank Discord username?",
        answer:
          "No — Discord's current username rules require visible, allowed characters (lowercase letters, digits, underscores, periods), so a fully blank username isn't possible anymore. A blank-looking display name or server nickname is still achievable with a visible-width invisible character.",
      },
      {
        question: "Why did copy-pasting a blank space into Discord stop working?",
        answer:
          "Discord added emptiness checks that catch pure whitespace and zero-width character strings specifically to close this loophole. A character with real visible width, like Braille Pattern Blank, isn't classified as whitespace, so it isn't caught by the same check.",
      },
      {
        question: "Is there a risk to using a blank name on Discord?",
        answer:
          "Some servers set their own rules against unidentifiable names for moderation reasons, so a blank name could get you flagged or muted on servers that actively enforce that. It's a cosmetic trick, not a way to hide from server staff or Discord's own systems.",
      },
    ],
    pillarLinks: [{ label: "invisible text generator", href: "/tools/invisible" }],
    relatedGuideSlugs: ["what-is-invisible-text", "tiny-text-discord"],
  },
  {
    slug: "subscript-vs-superscript",
    title: "Subscript vs Superscript: The Difference",
    metaDescription:
      "Subscript vs superscript text explained simply, with copy-paste Unicode examples and where each one is actually used.",
    h1: "Subscript vs Superscript: What's the Difference?",
    dek: "Two directions, two different Unicode blocks, and two different jobs — here's how to tell them apart.",
    cluster: "C",
    lastUpdated: "2026-08-10",
    intro: [
      "Subscript and superscript are opposites by definition — subscript sits below the baseline, superscript sits above it — but the confusion usually isn't about direction, it's about which one to reach for. The short version: superscript is for footnotes, exponents, and ordinal suffixes; subscript is for chemical formulas and indexed variables. Both are available as instant copy-paste Unicode through the [subscript generator](/tools/subscript) and [superscript generator](/tools/superscript) on this site.",
    ],
    sections: [
      {
        heading: "What each one looks like",
        paragraphs: [
          "Superscript raises characters above the normal line, the way an exponent sits above a number: x² or a footnote marker¹. Subscript lowers them below the line, the way the 2 sits in H₂O. Both are implemented in Unicode as separate character blocks rather than a formatting toggle — that's a deliberate design choice covered in more depth in [Unicode Explained](/guides/unicode-explained).",
        ],
      },
      {
        heading: "Where each is actually used",
        paragraphs: [
          "Superscript: mathematical exponents (x³), footnote and citation markers, ordinal indicators (1ˢᵗ, 2ⁿᵈ), and trademark/copyright-style marks. Subscript: chemical formulas (H₂O, CO₂), mathematical subscripted variables (xₙ, aᵢ), and some phonetic notation.",
        ],
      },
      {
        heading: "Which one has better Unicode coverage",
        paragraphs: [
          "This is the detail most guides skip: Unicode's superscript Latin letters are close to a complete alphabet, so a superscript generator can convert almost any word cleanly. Subscript is noticeably less complete — Unicode only defines subscript forms for a subset of lowercase letters (a, e, o, x, and a handful of consonants), so a subscript generator has to leave some letters unchanged. Numbers are the exception: both subscript and superscript digits (0–9) are fully defined in Unicode, which is why chemical formulas like H₂O convert perfectly even though a full subscripted sentence wouldn't. More detail on that in [our chemistry-formula guide](/guides/subscript-numbers-chemistry).",
        ],
      },
    ],
    faq: [
      {
        question: "What is subscript text used for?",
        answer:
          "Mainly chemical formulas (H₂O, C₆H₁₂O₆) and mathematically subscripted variables (xₙ). It's the correct choice whenever a smaller character needs to sit below the baseline rather than above it.",
      },
      {
        question: "Is there a combined superscript and subscript generator?",
        answer:
          "This site keeps them as two focused tools — a [subscript generator](/tools/subscript) and a [superscript generator](/tools/superscript) — because they use entirely different Unicode characters and are usually needed for different reasons.",
      },
      {
        question: "Why do some subscript letters not convert?",
        answer:
          "Unicode simply hasn't assigned a subscript code point for every letter of the alphabet. When a letter has no subscript form, the generator leaves the original letter in place rather than substituting a misleading symbol.",
      },
    ],
    pillarLinks: [
      { label: "subscript generator", href: "/tools/subscript" },
      { label: "superscript generator", href: "/tools/superscript" },
    ],
    relatedGuideSlugs: ["subscript-numbers-chemistry", "unicode-explained"],
  },
  {
    slug: "subscript-numbers-chemistry",
    title: "Subscript Numbers for Chemistry Formulas",
    metaDescription:
      "How to type subscript numbers for chemistry formulas like H2O and CO2 using copy-paste Unicode — no equation editor needed.",
    h1: "How to Type Subscript Numbers for Chemistry Formulas",
    dek: "Copy-paste subscript digits for formulas, without opening an equation editor.",
    cluster: "C",
    lastUpdated: "2026-09-03",
    intro: [
      "Chemical formulas need subscript numbers to be readable — H2O isn't wrong exactly, but H₂O is standard notation. Word processors have equation tools for this, but for chat, notes, spreadsheets, or anywhere a full equation editor is overkill, copy-paste Unicode subscript digits do the job in one paste using the [subscript generator](/tools/subscript).",
    ],
    sections: [
      {
        heading: "Why subscript numbers work perfectly (unlike subscript letters)",
        paragraphs: [
          "Unicode defines a complete set of subscript digits, 0 through 9, in the [Superscripts and Subscripts block](https://www.unicode.org/charts/PDF/U2070.pdf). That's different from subscript letters, where only a handful exist — see [subscript vs superscript](/guides/subscript-vs-superscript) for the full picture. Because formulas are almost entirely digits with a few letters (H, O, C, N and so on), and those letters stay as regular capitals since Unicode doesn't define subscript capital letters, the result still reads clearly: H₂O, CO₂, C₆H₁₂O₆, NH₃.",
        ],
      },
      {
        heading: "Step by step",
        paragraphs: [
          "1. Open the subscript generator and type the numbers you need — just the digits, like 2 or 6.\n2. Copy the subscript digit result.\n3. Type your formula normally (H, O, C, etc. as regular capital letters), then paste the subscript digit in place of the regular number.\n4. Repeat for each number in the formula, since the tool converts what you currently have typed, not a whole pre-written formula at once.",
        ],
      },
      {
        heading: "Where this is safe to use",
        paragraphs: [
          "Copy-paste subscript works anywhere that accepts plain Unicode text — lab notebooks kept digitally, chat with classmates, slide decks, spreadsheets, and social captions. It is not the same as a real equation object in Word or LaTeX, so if your formula needs to be machine-readable by scientific software (searchable, editable as a structured formula), use your editor's built-in subscript or equation tool instead — the Unicode version is a visual stand-in, not structured chemistry data.",
        ],
      },
      {
        heading: "Common formulas, ready to build",
        paragraphs: [
          "The pattern is always the same — type element symbols as normal capitals, then paste subscript digits after them: H₂O (water), CO₂ (carbon dioxide), O₂ (oxygen gas), NH₃ (ammonia), CH₄ (methane), NaCl (table salt, no subscript needed), C₆H₁₂O₆ (glucose), H₂SO₄ (sulfuric acid), CaCO₃ (calcium carbonate), C₂H₅OH (ethanol). Ionic charges like Ca²⁺ or SO₄²⁻ sit above the line, so those use superscript — the [superscript generator](/tools/superscript) handles them.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the subscript form of the number 1?",
        answer:
          "It's ₁ (Unicode U+2081). Type 1 into the subscript generator and copy the result, or paste ₁ straight in wherever a count of one needs to be shown as subscript.",
      },
      {
        question: "How do I write ionic charges like Ca2+ or SO4 2-?",
        answer:
          "Charges sit above the baseline, so they use superscript, not subscript: Ca²⁺, SO₄²⁻. Use the superscript generator for the charge and the subscript generator for the atom counts.",
      },
      {
        question: "How do I type subscript numbers for chemistry formulas?",
        answer:
          "Type the digit into the subscript generator, copy the result, and paste it directly after the element letter — for example, paste ₂ after H to get H₂O.",
      },
      {
        question: "Does copy-paste subscript work in Google Docs or Word?",
        answer:
          "Yes, pasted Unicode subscript digits display correctly in both, though for documents you'll later edit heavily, each app's built-in subscript formatting (Format → Text → Subscript) is more robust since it's a real style, not a substituted character.",
      },
      {
        question: "Can I get subscript letters for chemistry too, not just numbers?",
        answer:
          "Element symbols are capital letters, and Unicode doesn't define subscript capital letters, so they stay as regular capitals — which is actually correct chemistry notation anyway; only the numbers are meant to be subscript.",
      },
    ],
    pillarLinks: [{ label: "subscript generator", href: "/tools/subscript" }],
    relatedGuideSlugs: ["subscript-vs-superscript", "unicode-explained"],
  },
  {
    slug: "cursive-fonts-instagram-bio",
    title: "Cursive Fonts for Instagram Bio (Copy List)",
    metaDescription:
      "Copy-paste cursive fonts for your Instagram bio, captions, and comments — ready-to-use Unicode script text, no app required.",
    h1: "Cursive Fonts for Instagram Bio: Copy & Paste List",
    dek: "Ready-made cursive text you can paste straight into a bio, caption, or comment.",
    cluster: "D",
    lastUpdated: "2026-08-10",
    intro: [
      "Cursive-look bios on Instagram come from a cursive font generator, not a font Instagram actually offers. The tool converts your regular letters into Unicode's mathematical script character set, which mimics handwritten, connected-looking letterforms while remaining fully copy-and-paste text — you can select it, search it, and it'll display in anyone's Instagram app without them installing anything.",
    ],
    sections: [
      {
        heading: "How to add cursive text to your bio",
        paragraphs: [
          "1. Open the [cursive font generator](/tools/cursive) and type your bio text.\n2. Check the live preview — cursive Unicode is dense and can be harder to read at small sizes than block letters, so short phrases usually work better than long sentences.\n3. Copy the result.\n4. In Instagram, tap Edit Profile → Bio, paste, and tap the checkmark.",
        ],
      },
      {
        heading: "Cursive vs other fancy styles for a bio",
        paragraphs: [
          "Cursive reads as more personal and expressive, which suits a name, a short tagline, or a single quote line. For anything longer — a multi-line bio with several facts — small caps or a bold style is usually easier to read, and you can mix them: cursive for your name line, plain or small caps for the details below it. The [Instagram bio guide](/guides/small-text-instagram-bio) has more on layering multiple text styles in one bio.",
        ],
      },
      {
        heading: "Where cursive fonts hold up outside Instagram",
        paragraphs: [
          "The same pasted text works in Instagram captions and comments, and carries over cleanly to TikTok bios, Twitter/X names, and Facebook posts, since it's the same underlying Unicode wherever you paste it. The one place it's worth double-checking is any field with a strict character allowlist (like a username, as opposed to a display name or bio) — those often reject non-standard Unicode outright.",
        ],
      },
    ],
    faq: [
      {
        question: "Does the cursive font generator work on Instagram bios?",
        answer:
          "Yes — Instagram bios accept any standard Unicode text, and cursive-style output is standard Unicode, so it pastes and displays normally, same as small caps or bold text would.",
      },
      {
        question: "Why does my cursive text look like empty boxes for some people?",
        answer:
          "It means their device's font doesn't include glyphs for that specific Unicode script block — more common on some older Android phones and desktop browsers with limited font packs. There's no fix on your end beyond choosing a simpler style for critical text.",
      },
      {
        question: "Can I copy and paste cursive fonts into an Instagram username?",
        answer:
          "No — usernames are restricted to letters, numbers, periods, and underscores. Cursive Unicode text works in your display name, bio, captions, and comments, but not the @username itself.",
      },
    ],
    pillarLinks: [{ label: "cursive font generator", href: "/tools/cursive" }],
    relatedGuideSlugs: ["how-cursive-font-generator-works", "small-text-instagram-bio"],
  },
  {
    slug: "how-cursive-font-generator-works",
    title: "How a Cursive Font Generator Works",
    metaDescription:
      "How a cursive font generator actually converts text — the Unicode script block behind it, and why it isn't a real installed font.",
    h1: "How Does a Cursive Font Generator Actually Work?",
    dek: "The Unicode block behind script-style text, explained without the marketing language.",
    cluster: "D",
    lastUpdated: "2026-08-10",
    intro: [
      "A cursive font generator doesn't create or install a font — it maps each letter you type to a different, pre-existing Unicode character that happens to look script-like. Understanding that mapping explains both why the trick works everywhere and why it has a few hard limits worth knowing before you rely on it.",
    ],
    sections: [
      {
        heading: "The Unicode block behind cursive text",
        paragraphs: [
          "This site's cursive style pulls from the Mathematical Script letters inside Unicode's [Mathematical Alphanumeric Symbols block](https://www.unicode.org/charts/PDF/U1D400.pdf) (U+1D400–U+1D7FF) — a range originally added so mathematicians could write script-style variables (like 𝒜 for a set) without relying on a specific font. Text generators repurpose that same range for decorative cursive-look text, since visually it reads as handwriting-style script even though its official Unicode purpose is mathematical notation.",
        ],
      },
      {
        heading: "Why it isn't a 'real' font",
        paragraphs: [
          "A real font is a file that defines how existing characters are drawn. What a cursive font generator does instead is character substitution: your letter A becomes the character 𝒜, a completely different code point that every device already has a built-in appearance for, drawn in whatever font that device happens to use. That's why cursive text looks slightly different from app to app — you're seeing one Unicode character rendered in different system fonts, not one custom font rendered consistently.",
        ],
      },
      {
        heading: "The practical limits this creates",
        paragraphs: [
          "Because it relies on a specific, fairly obscure Unicode block, support isn't universal — a few very old devices or minimal fonts don't include glyphs for U+1D400 and beyond, which is when you'll see boxes instead of letters. Screen readers also handle this range inconsistently; some announce the letters normally, others skip or garble them, which is one of the accessibility trade-offs covered honestly in [Unicode Explained](/guides/unicode-explained). And because the underlying characters are mathematical letters, not stylistic markup, search engines and some apps may not treat cursive text as equivalent to the plain word — worth keeping plain-text alternatives for anything that needs to be findable.",
        ],
      },
    ],
    faq: [
      {
        question: "What is a cursive font converter actually doing to my text?",
        answer:
          "It replaces each letter with a different Unicode character from the Mathematical Alphanumeric Symbols block that looks script-like, rather than changing the font your device uses to draw the text.",
      },
      {
        question: "Is there a cursive font keyboard I can install instead?",
        answer:
          "Some third-party keyboard apps offer built-in style pickers, but they work the same way under the hood — substituting Unicode characters — so a copy-paste generator gives you the identical result without installing anything extra.",
      },
      {
        question: "Why does cursive text sometimes fail to copy correctly?",
        answer:
          "A few older apps and text fields filter out Unicode ranges outside basic Latin for security or storage reasons. If pasted cursive text disappears entirely rather than showing boxes, that field likely has this kind of filter and won't support styled Unicode at all.",
      },
    ],
    pillarLinks: [{ label: "cursive font generator", href: "/tools/cursive" }],
    relatedGuideSlugs: ["cursive-fonts-instagram-bio", "unicode-explained"],
  },
  {
    slug: "unicode-explained",
    title: "Unicode Explained: Why These Aren't Real Fonts",
    metaDescription:
      "Why small caps, cursive, and subscript text generators use Unicode characters, not real fonts — and what that means for accessibility.",
    h1: "Unicode Explained: Why These \"Fonts\" Aren't Real Fonts",
    dek: "The one explanation that answers most of the 'why doesn't this work' questions about text generators.",
    cluster: "Sitewide",
    lastUpdated: "2026-08-10",
    intro: [
      "Every tool on this site — small text, invisible text, subscript, cursive — works the same underlying way: it maps ordinary letters to different, visually similar characters that already exist in the [Unicode Standard](https://www.unicode.org/standard/standard.html), maintained by the Unicode Consortium. None of it installs a font, changes your keyboard, or uploads anything. This page is the single explanation behind all four tools, written once so each tool page can stay focused on the tool itself.",
    ],
    sections: [
      {
        heading: "What Unicode actually is",
        paragraphs: [
          "Unicode is a single, shared numbering system that assigns every character — letters, digits, punctuation, emoji, and thousands of symbols across the world's writing systems — a unique code point. When you type the letter A, your device isn't storing a picture of the letter A; it's storing the number U+0041, and your font is what draws that number as a shape on screen. That separation between 'which character' and 'how it's drawn' is what makes the same text file look right whether it's opened on a phone, a laptop, or a different operating system entirely.",
        ],
      },
      {
        heading: "Why text generators can 'change the font' without installing one",
        paragraphs: [
          "Unicode includes several blocks of characters that were added for specific technical reasons but happen to look like styled versions of the Latin alphabet: the Mathematical Alphanumeric Symbols block (bold, italic, script, double-struck, and fraktur letters, originally for writing math notation like 𝔸 for a set or 𝒜 for a variable), the Enclosed Alphanumerics block (circled letters like Ⓐ), the Superscripts and Subscripts block (originally for footnotes and formulas), and Latin Extended blocks that include small-caps-shaped letters used in phonetic transcription. A text generator's whole job is mapping A→𝒜 or A→ᴀ using these existing blocks — it's substitution, not styling.",
        ],
      },
      {
        heading: "Why some letters don't convert",
        paragraphs: [
          "Because these blocks were designed for specific technical purposes — math notation, phonetics, footnotes — rather than as a general-purpose alphabet, they're often incomplete. Subscript letters, for example, only exist for a handful of consonants and vowels because that's all early phonetic notation needed; there's no subscript Q or subscript B in Unicode at all. When a generator can't find a matching character, the honest options are to leave the original letter in place or substitute something misleading — this site always does the former.",
        ],
      },
      {
        heading: "The accessibility trade-off",
        paragraphs: [
          "Because styled Unicode characters are technically different characters from the letters they resemble — not a font applied to the same letter — screen readers can behave unpredictably with them: some announce them normally, some skip them, and some read out a technical description instead of the word. The [W3C Web Accessibility Initiative](https://www.w3.org/WAI/fundamentals/accessibility-intro/) treats this kind of visual-only styling as a real accessibility gap, not a minor detail. The practical takeaway: styled Unicode text is fine for a bio line, a caption, or a display name, but important information — instructions, warnings, contact details — should stay in plain text.",
        ],
      },
    ],
    faq: [
      {
        question: "Are small text, cursive, and subscript generators using real fonts?",
        answer:
          "No. Every style on this site substitutes standard Latin letters for different, pre-existing Unicode characters that look similar. No font is installed, downloaded, or changed on your device.",
      },
      {
        question: "Why doesn't styled Unicode text work the same everywhere?",
        answer:
          "Every device relies on its installed fonts to draw each Unicode character. If a font doesn't include a glyph for a specific character, that device shows a blank box instead — which is a font gap, not a bug in the text itself.",
      },
      {
        question: "Is it safe to use styled Unicode text for important information?",
        answer:
          "Not recommended. Screen readers and search systems don't always interpret styled Unicode the same way they interpret plain text, so anything that needs to be understood by everyone — instructions, contact info, safety notices — should stay in ordinary letters.",
      },
    ],
    pillarLinks: [
      { label: "small text generator", href: "/" },
      { label: "invisible text generator", href: "/tools/invisible" },
      { label: "subscript generator", href: "/tools/subscript" },
      { label: "cursive font generator", href: "/tools/cursive" },
    ],
    relatedGuideSlugs: ["what-is-invisible-text", "subscript-vs-superscript", "how-cursive-font-generator-works"],
  },
  {
    slug: "copy-paste-text-tricks-social-media-bios",
    title: "Best Copy-Paste Text Tricks for Bios",
    metaDescription:
      "The best copy-paste text tricks for social media bios — small text, invisible text, subscript, and cursive — in one roundup.",
    h1: "Best Copy-Paste Text Tricks for Social Media Bios",
    dek: "A quick tour of the four Unicode tricks people actually use in bios, and when to reach for each one.",
    cluster: "Sitewide",
    lastUpdated: "2026-08-10",
    intro: [
      "Most of the 'how did they do that' bio tricks on Instagram, TikTok, Discord, and X come down to four Unicode techniques: small text, invisible text, subscript or superscript, and cursive script. Each solves a different problem, and knowing which one fits your situation saves you from picking the wrong tool. Here's a fast rundown of all four, with a link to the focused generator for each.",
    ],
    sections: [
      {
        heading: "1. Small text — for a quieter, more compact look",
        paragraphs: [
          "Small caps and superscript shrink your letters while staying fully readable, which is why they're the most common bio trick overall. Good for: a full bio line, a tagline, or making a username stand out without shouting. Try the [small text generator](/).",
        ],
      },
      {
        heading: "2. Invisible text — for spacing and placeholders, not hiding",
        paragraphs: [
          "A visually blank Unicode character that still counts as real content, useful for adding a blank line in a caption or holding a spot where an empty field would be rejected. It's not a way to hide text from anyone — the character is fully present in the data, just blank on screen. Try the [invisible text generator](/tools/invisible), and see [what invisible text actually is](/guides/what-is-invisible-text) for the technical side.",
        ],
      },
      {
        heading: "3. Subscript and superscript — for a technical or footnote look",
        paragraphs: [
          "Less common as a whole-bio style, more common for a specific number or symbol — a date written in superscript ordinal form (1ˢᵗ), or a stylized single word. Also the correct tool if you're actually writing a chemical formula or exponent rather than decorating a bio. Try the [subscript generator](/tools/subscript) or [superscript generator](/tools/superscript).",
        ],
      },
      {
        heading: "4. Cursive — for a personal, handwritten feel",
        paragraphs: [
          "Script-style Unicode reads as more expressive and personal, which suits a name or a short standalone line better than a long paragraph, since dense cursive glyphs get harder to read at length. Try the [cursive font generator](/tools/cursive).",
        ],
      },
      {
        heading: "How to combine styles without it looking cluttered",
        paragraphs: [
          "The cleanest bios usually use one styled element, not four — for example, a cursive name line followed by small caps for the rest of the bio, rather than mixing every style in one sentence. If you're building an Instagram bio specifically, the [Instagram bio guide](/guides/small-text-instagram-bio) walks through that layout in more detail.",
        ],
      },
    ],
    faq: [
      {
        question: "Which copy-paste text trick is best for a bio?",
        answer:
          "It depends on the effect you want: small caps or superscript for a compact, readable look; cursive for something more personal; subscript/superscript for a technical or footnote feel; invisible text for spacing rather than styling.",
      },
      {
        question: "Do these tricks work on every social media platform?",
        answer:
          "They work anywhere that accepts standard Unicode text, which covers Instagram, TikTok, X, Facebook, Discord, and most messaging apps — the exceptions are strict fields like usernames, which are usually locked to plain letters, numbers, and a few symbols.",
      },
      {
        question: "Is it bad for engagement or search to style my whole bio?",
        answer:
          "Search systems generally treat heavily styled Unicode as different characters from the plain word, so a bio that's entirely styled text may not match searches for your name the way plain text would. Styling a short accent line while keeping your name and key details in plain text avoids that trade-off.",
      },
    ],
    pillarLinks: [
      { label: "small text generator", href: "/" },
      { label: "invisible text generator", href: "/tools/invisible" },
      { label: "subscript generator", href: "/tools/subscript" },
      { label: "cursive font generator", href: "/tools/cursive" },
    ],
    relatedGuideSlugs: ["small-text-instagram-bio", "what-is-invisible-text", "cursive-fonts-instagram-bio"],
  },
  {
    slug: "how-to-make-tiny-text",
    title: "How to Make Tiny Text (Small Letters Copy & Paste)",
    metaDescription:
      "How to make tiny text — the small caps, superscript, and subscript styles that actually shrink letters — and copy and paste small letters anywhere.",
    h1: "How to Make Tiny Text",
    dek: "The three Unicode styles that genuinely shrink letters, and how to copy and paste them into a bio or caption.",
    cluster: "A",
    lastUpdated: "2026-09-03",
    intro: [
      "Tiny text isn't a font you install — it's a set of Unicode characters that happen to be drawn smaller than normal letters. To make tiny text you type your words into a generator, which swaps each letter for its small counterpart, then you copy the result and paste it wherever plain text is accepted. Three styles do the actual shrinking: small caps, superscript, and subscript.",
      "This guide covers how each one is made, which is smallest, and the copy-paste steps. Start from the [small text generator](/) for the full set, or the [tiny text generator](/tools/tiny-text-generator) for just these three.",
    ],
    sections: [
      {
        heading: "The three styles that actually make text smaller",
        paragraphs: [
          "Small caps (ᴛɪɴʏ) replaces lowercase with miniature capital letterforms and keeps a complete alphabet. Superscript (ᵗⁱⁿʸ) raises tiny characters above the baseline and renders smallest. Subscript (ₜᵢₙy) does the same below the line. Bold, cursive, and bubble change the shape of letters but not their size, so they don't count as tiny.",
        ],
      },
      {
        heading: "How to make tiny text, step by step",
        paragraphs: [
          "1. Open the generator and type your text.\n2. Look at the small caps, superscript, and subscript results.\n3. Pick the smallest one that's still readable at the size you need — superscript for maximum shrink, small caps for reliability.\n4. Tap Copy.\n5. Paste into your bio, caption, message, or display name.",
        ],
      },
      {
        heading: "Which tiny style is smallest",
        paragraphs: [
          "Superscript and subscript characters are drawn at roughly 60–70% of normal height, so they look smallest. Small caps sits around 75–80% but has the advantage that every letter converts — superscript and subscript are missing forms for several capitals, which then stay full-size and break the effect. For a full sentence, small caps usually looks cleaner; for a short accent, superscript wins on size. See [subscript vs superscript](/guides/subscript-vs-superscript) for the letter-by-letter coverage.",
        ],
      },
      {
        heading: "Copy and paste small letters without a generator",
        paragraphs: [
          "You can't type these characters directly on a standard keyboard, so a converter is the practical route. Once pasted, the small letters behave like any other text — searchable, selectable, and editable. Bookmark the [small text generator](/) if you do it often.",
        ],
      },
      {
        heading: "Where tiny text works and where it doesn't",
        paragraphs: [
          "It works in Instagram and TikTok bios and captions, Discord display names and messages, X posts, and most chat apps. It's blocked in usernames and handles, which only accept plain characters, and it can show as a box on a few older Android devices — preview it on the target app before you rely on it.",
        ],
      },
    ],
    faq: [
      { question: "How do I make tiny text?", answer: "Type your words into a small text generator, then copy the small caps or superscript result and paste it where you need it. The generator swaps each letter for a smaller Unicode character." },
      { question: "What's the smallest tiny text style?", answer: "Superscript renders smallest, followed by subscript, then small caps. Small caps is the most reliable because it converts every letter." },
      { question: "Can I copy and paste small letters into my Instagram username?", answer: "No. Usernames only accept plain letters, numbers, periods, and underscores. Tiny text works in your bio, name field, captions, and comments." },
      { question: "Why do some letters stay full-size?", answer: "Superscript and subscript don't have Unicode forms for every letter, especially capitals. The generator leaves those letters unchanged rather than substituting a wrong-looking symbol." },
      { question: "Does tiny text reduce my character count?", answer: "No. Each tiny character still counts as one character toward a limit, the same as a normal letter." },
    ],
    pillarLinks: [
      { label: "small text generator", href: "/" },
      { label: "tiny text generator", href: "/tools/tiny-text-generator" },
    ],
    relatedGuideSlugs: ["subscript-vs-superscript", "small-text-instagram-bio", "copy-paste-fonts-guide"],
  },
  {
    slug: "superscript-numbers-exponents",
    title: "How to Type Superscript Numbers & Exponents (Copy & Paste)",
    metaDescription:
      "Type superscript numbers and exponents — x², 10⁶, 1ˢᵗ — and copy and paste them anywhere. No equation editor needed, using Unicode superscript characters.",
    h1: "How to Type Superscript Numbers and Exponents",
    dek: "Getting powers, exponents, and ordinals as real characters you can paste into a chat, caption, or plain-text field.",
    cluster: "C",
    lastUpdated: "2026-09-03",
    intro: [
      "Every digit from 0 to 9 has a dedicated Unicode superscript character (⁰¹²³⁴⁵⁶⁷⁸⁹), which means you can write x², 10⁶, or cm³ as plain text — no equation editor, no formatting toolbar. Type the number into a superscript generator, copy the raised version, and paste it directly after the base.",
      "This guide covers exponents and powers, ordinal endings like 1ˢᵗ and nᵗʰ, and where the copy-paste characters hold up. Use the [superscript generator](/tools/superscript) to convert.",
    ],
    sections: [
      {
        heading: "Superscript numbers: the full set",
        paragraphs: [
          "Unlike letters, digits have complete superscript coverage in Unicode, so 0–9 all convert exactly. That makes exponents the most reliable use of a superscript tool: 2¹⁰, E = mc², 5 × 10⁻³. Type just the exponent, copy it, and place it right after the base number or variable.",
        ],
      },
      {
        heading: "How to type an exponent, step by step",
        paragraphs: [
          "1. Open the [superscript generator](/tools/superscript).\n2. Type the exponent on its own — for x², type 2.\n3. Copy the ² result.\n4. In your document or chat, type x, then paste ² immediately after it.\n5. Repeat for each exponent; there's no need to convert the whole expression.",
        ],
      },
      {
        heading: "Ordinals: 1ˢᵗ, 2ⁿᵈ, 3ʳᵈ, nᵗʰ",
        paragraphs: [
          "Ordinal endings use superscript letters (ˢᵗ, ⁿᵈ, ʳᵈ, ᵗʰ). Lowercase superscript letters have good but not total coverage, and these four combinations all convert cleanly, so dates and rankings written as 1ˢᵗ or 25ᵗʰ work well.",
        ],
      },
      {
        heading: "Where superscript numbers work",
        paragraphs: [
          "Pasted superscript displays correctly in Google Docs, Word, Slack, Discord, and most social apps and email clients. For a document you'll keep editing and reformatting, the app's built-in superscript button is sturdier because it's a text attribute rather than a separate character — but for chat, captions, and plain-text notes, the Unicode character is the only option that survives a copy-paste.",
        ],
      },
      {
        heading: "Superscript vs subscript for formulas",
        paragraphs: [
          "Superscript sits above the baseline for powers and exponents (x², 10⁶). Subscript sits below for things like chemical formulas (H₂O, CO₂). They're separate Unicode blocks — the [subscript numbers guide](/guides/subscript-numbers-chemistry) covers the below-the-line case, and [subscript vs superscript](/guides/subscript-vs-superscript) compares them.",
        ],
      },
    ],
    faq: [
      { question: "How do I type an exponent like x²?", answer: "Type 2 into a superscript generator, copy the ² character, then paste it right after the x. All ten digits have Unicode superscript forms, so any exponent works." },
      { question: "Can I make negative exponents and decimals?", answer: "Yes — the superscript minus (⁻) and the digits combine, so 10⁻³ and similar all convert. A superscript decimal point is less widely supported, so keep those simple." },
      { question: "Do superscript numbers work in Google Docs and Word?", answer: "Yes, pasted superscript displays correctly. For heavy editing, the app's own superscript formatting is more robust, but the Unicode characters are what you need for chat and plain-text fields." },
      { question: "Why did my superscript letter not convert?", answer: "Unicode has superscript forms for every digit but only most lowercase and a few uppercase letters. Unsupported letters are left at normal size so the text stays readable." },
      { question: "Is there a superscript character for 'th'?", answer: "Yes — ᵗ and ʰ both have superscript forms, so 4ᵗʰ, 10ᵗʰ, and 100ᵗʰ all render as raised text." },
    ],
    pillarLinks: [
      { label: "superscript generator", href: "/tools/superscript" },
      { label: "subscript generator", href: "/tools/subscript" },
    ],
    relatedGuideSlugs: ["subscript-vs-superscript", "subscript-numbers-chemistry"],
  },
  {
    slug: "bubble-letters-copy-paste",
    title: "Bubble Letters to Copy & Paste (Circle & Filled Styles)",
    metaDescription:
      "Bubble letters to copy and paste — the circled ⓐ and filled 🅐 Unicode styles — for bios, captions, and names. Free, no font install.",
    h1: "Bubble Letters to Copy and Paste",
    dek: "The two bubble-letter styles in Unicode, how they differ, and how to paste them where you want.",
    cluster: "D",
    lastUpdated: "2026-09-03",
    intro: [
      "Bubble letters are Unicode's enclosed alphanumerics — each character sits inside a circle. There are two sets: circled (ⓐ, Ⓐ, ①), which covers upper case, lower case, and digits, and filled or 'negative' circled (🅐), which covers capitals only. Both copy and paste as real text, so a bubble-letter name works in a bio or caption without any font.",
      "This guide shows both styles, where each one renders reliably, and the copy-paste steps. Convert with the [bubble text generator](/tools/bubble).",
    ],
    sections: [
      {
        heading: "Circled vs filled bubble letters",
        paragraphs: [
          "The circled style (ⓑⓤⓑⓑⓛⓔ) is an outline and has the most complete alphabet — a–z, A–Z, and 0–9 all convert. The filled style (🅑🅤🅑🅑🅛🅔) is bold white-on-dark capitals only, and because it's rendered more like an emoji, it varies more between devices and can appear as a coloured tile or a plain capital on older systems. Use circled for anything that needs to be readable everywhere.",
        ],
      },
      {
        heading: "How to copy and paste bubble letters",
        paragraphs: [
          "1. Open the [bubble text generator](/tools/bubble).\n2. Type your word or name.\n3. Choose circled or filled.\n4. Tap Copy.\n5. Paste into your Instagram or TikTok bio, a Discord name, or a comment.",
        ],
      },
      {
        heading: "Bubble numbers",
        paragraphs: [
          "Digits 0–9 have circled forms too — ⓪①②③④⑤⑥⑦⑧⑨ — so a handle like ⓖⓐⓜⓔⓡ①② converts fully in the circled style. The filled set doesn't include digits.",
        ],
      },
      {
        heading: "Where bubble text works",
        paragraphs: [
          "Circled bubble letters render in Instagram and TikTok bios and captions, Discord display names and messages, X, and most chat apps. They don't work in usernames. On a small number of older Android builds the enclosed-alphanumeric block is incomplete, so preview before relying on it — and prefer circled over filled for reliability.",
        ],
      },
      {
        heading: "Making bubble text readable",
        paragraphs: [
          "Because every letter is wrapped in a circle, bubble text is denser than normal text and gets tiring to read in long runs. It works best for a name, a short tagline, or one standout line rather than a whole paragraph.",
        ],
      },
    ],
    faq: [
      { question: "How do I copy and paste bubble letters?", answer: "Type your text into a bubble text generator, tap Copy on the result, and paste it where you need it. The circled letters are Unicode characters, so no install is required." },
      { question: "What's the difference between circled and filled bubble letters?", answer: "Circled (ⓐ) is an outline covering both cases and digits. Filled (🅐) is bold capitals only and renders less consistently across devices." },
      { question: "Do bubble fonts copy and paste on Instagram?", answer: "Yes, in bios, captions, and comments. Not in the @username field, which is limited to plain characters." },
      { question: "Can I make bubble numbers?", answer: "Yes, in the circled style — 0 through 9 all have circled forms. The filled style is letters only." },
      { question: "Why do my bubble letters show as plain capitals or boxes?", answer: "The device is missing the glyph for that character, usually the filled set on older Android. Switch to the circled style, which has the widest support." },
    ],
    pillarLinks: [
      { label: "bubble text generator", href: "/tools/bubble" },
      { label: "fancy text generator", href: "/tools/fancy-text-generator" },
    ],
    relatedGuideSlugs: ["copy-paste-fonts-guide", "small-text-instagram-bio"],
  },
  {
    slug: "convert-text-to-cursive",
    title: "Convert Text to Cursive (Copy & Paste Cursive Fonts)",
    metaDescription:
      "Convert text to cursive script you can copy and paste — into a bio, caption, or message. How the conversion works and which cursive style to use.",
    h1: "Convert Text to Cursive",
    dek: "Turning plain text into script-style Unicode, and where the converted cursive holds up.",
    cluster: "D",
    lastUpdated: "2026-09-03",
    intro: [
      "To convert text to cursive you map each Latin letter to Unicode's mathematical script characters — 𝒶, 𝒷, 𝒸 and so on — which are drawn in a flowing, handwritten style. A cursive font converter does the mapping; you type, it converts, you copy and paste. The result is text, not an image, so it displays for everyone who sees it.",
      "This guide covers the conversion, the plain vs bold script options, and readability. Convert with the [cursive font generator](/tools/cursive).",
    ],
    sections: [
      {
        heading: "How converting to cursive works",
        paragraphs: [
          "There's no 'cursive' setting in Instagram or Discord. What looks like a cursive font is a swap: your a becomes 𝒶, your B becomes ℬ. Because those are real Unicode characters, the flowing look travels with the text when you copy it. The [how a cursive font generator works](/guides/how-cursive-font-generator-works) guide has the full technical picture.",
        ],
      },
      {
        heading: "Convert to cursive, step by step",
        paragraphs: [
          "1. Open the [cursive font generator](/tools/cursive).\n2. Type the word, name, or line you want in cursive.\n3. Compare the plain script and bold script results.\n4. Tap Copy on the one you want.\n5. Paste it into your bio, caption, or message.",
        ],
      },
      {
        heading: "Plain script vs bold script",
        paragraphs: [
          "Unicode has two script alphabets: a lighter one (𝒸𝓊𝓇𝓈𝒾𝓋ℯ) and a bold one (𝓬𝓾𝓻𝓼𝓲𝓿𝓮). Bold script holds up better at small sizes and on lower-resolution screens; plain script looks more delicate but can get spidery in a small bio. Both convert the same letters.",
        ],
      },
      {
        heading: "Readability: keep cursive short",
        paragraphs: [
          "Script glyphs are dense and connected, so a full paragraph in cursive is hard to read. It works best for a name, a single tagline, or a short standalone line. Pair a cursive name with plain or small-caps text for the rest of a bio — see [cursive fonts for Instagram bio](/guides/cursive-fonts-instagram-bio).",
        ],
      },
      {
        heading: "Where converted cursive works",
        paragraphs: [
          "It renders in Instagram and TikTok bios and captions, Discord names and messages, X, and most chat apps. Usernames reject it. A few older Android devices lack the script glyphs and show boxes, so preview on the target app; bold script has slightly wider support than plain.",
        ],
      },
    ],
    faq: [
      { question: "How do I convert text to cursive?", answer: "Type it into a cursive font generator and copy the script result. The tool maps each letter to a Unicode script character, so the cursive look pastes as normal text." },
      { question: "Is there a real cursive font I can install instead?", answer: "You can install script fonts on your own device, but they won't travel — other people see their own font. Unicode script characters look the same for everyone, which is why converters are the practical choice for social apps." },
      { question: "Why do cursive letters look like boxes for some people?", answer: "Their device's font is missing the Unicode script glyphs, most common on older Android. There's no fix on your end beyond choosing a plainer style for critical text." },
      { question: "Can I put cursive text in my username?", answer: "Usually not — usernames are restricted to plain letters, numbers, and a few symbols. Cursive works in your display name, bio, captions, and comments." },
      { question: "Which is better, plain or bold cursive?", answer: "Bold script stays legible at small sizes; plain script looks more delicate but can thin out in a small bio. Try both and pick per context." },
    ],
    pillarLinks: [
      { label: "cursive font generator", href: "/tools/cursive" },
      { label: "fancy text generator", href: "/tools/fancy-text-generator" },
    ],
    relatedGuideSlugs: ["how-cursive-font-generator-works", "cursive-fonts-instagram-bio", "fancy-text-styles-explained"],
  },
  {
    slug: "fancy-text-styles-explained",
    title: "Fancy Text Generator: Every Copy-Paste Font Style Explained",
    metaDescription:
      "A guide to fancy text styles — cursive, gothic, outlined, bubble, squared, spaced — how each is built from Unicode and where it works.",
    h1: "Fancy Text Styles, Explained",
    dek: "What each 'fancy font' actually is, and which ones are safe to use where.",
    cluster: "D",
    lastUpdated: "2026-09-03",
    intro: [
      "'Fancy text' covers a dozen decorative Unicode letter styles that a generator produces from plain input. None are real fonts — each is a set of characters that look styled — which is why you can copy and paste them into apps that give you no typeface control. This guide names the main styles and explains how each behaves.",
      "Use the [fancy text generator](/tools/fancy-text-generator) to see them all at once, or a focused tool like the [cursive font generator](/tools/cursive) for one style.",
    ],
    sections: [
      {
        heading: "Script and handwritten: cursive",
        paragraphs: [
          "Unicode mathematical script (𝒻𝒶𝓃𝒸𝓎), plain and bold. Flowing and personal; best for names and short lines. Covered in [convert text to cursive](/guides/convert-text-to-cursive).",
        ],
      },
      {
        heading: "Blackletter and outlined: fraktur and double-struck",
        paragraphs: [
          "Fraktur (𝔣𝔞𝔫𝔠𝔶) is a gothic blackletter alphabet; double-struck (𝕗𝕒𝕟𝕔𝕪) is the outlined style used for maths symbols like ℝ and ℤ. Both have near-complete alphabets and a distinctive look, with good support on modern devices.",
        ],
      },
      {
        heading: "Weight and slant: bold, italic, bold italic, monospace",
        paragraphs: [
          "These map to Unicode's mathematical alphanumeric blocks. Bold and bold italic are the most widely supported of all the fancy styles and stay readable at any length, which makes them a safe default when a style has to work everywhere.",
        ],
      },
      {
        heading: "Enclosed and framed: bubble, squared, brackets, hearts, sparkles",
        paragraphs: [
          "Bubble (ⓕⓐⓝⓒⓨ) and squared (🄵🄰🄽🄲🅈) wrap each letter; brackets, hearts, and sparkles add a frame around the whole phrase rather than restyling letters. Frames are the most reliable because the letters inside stay plain.",
        ],
      },
      {
        heading: "Spacing and direction: spaced, full width, upside down",
        paragraphs: [
          "Letter-spaced and full-width (ｆａｎｃｙ) add air between characters; upside-down flips the line. These change layout more than letterform and are best used sparingly.",
        ],
      },
      {
        heading: "Choosing a fancy style that will render",
        paragraphs: [
          "For maximum compatibility use bold, small caps, or a frame style. Cursive, fraktur, and double-struck look the most distinctive but can show as boxes on older Android. Always preview on the app where you'll paste it, and keep anything important in plain text alongside the styled line.",
        ],
      },
    ],
    faq: [
      { question: "Are fancy fonts real fonts?", answer: "No. Each is a block of Unicode characters that look styled. That's why they copy and paste without an install." },
      { question: "Which fancy text style is the most compatible?", answer: "Bold and bold italic, then small caps and full-width. Frame styles like brackets and hearts are reliable because the letters inside stay normal." },
      { question: "Do fancy fonts work on Instagram, TikTok, and Discord?", answer: "Yes, in bios, captions, comments, and display names. Not in usernames or handles." },
      { question: "Why do some fancy letters disappear or show as boxes?", answer: "The device is missing the glyph for that Unicode block. Cursive, fraktur, and double-struck are the most affected on older phones." },
      { question: "Can fancy text hurt how my profile is found in search?", answer: "Heavily styled Unicode is treated as different characters from the plain word, so an all-fancy bio may not match a search for your name. Style one line and keep your name plain." },
    ],
    pillarLinks: [
      { label: "fancy text generator", href: "/tools/fancy-text-generator" },
      { label: "cursive font generator", href: "/tools/cursive" },
    ],
    relatedGuideSlugs: ["convert-text-to-cursive", "copy-paste-fonts-guide", "unicode-explained"],
  },
  {
    slug: "blank-text-copy-paste",
    title: "Blank Text to Copy & Paste (The Empty Message Character)",
    metaDescription:
      "Blank text to copy and paste — a Unicode character that looks empty but still counts as content, for captions, names, and fields that reject nothing.",
    h1: "Blank Text to Copy and Paste",
    dek: "The character that looks like nothing, why a truly empty string often fails, and how to use it.",
    cluster: "B",
    lastUpdated: "2026-09-03",
    intro: [
      "Blank text is a Unicode character that renders with no visible mark but still has width and still counts as real content. It solves a specific problem: a field or caption that rejects an empty entry but accepts 'something' that happens to look like nothing. You copy the blank character and paste it where a space or empty line is needed.",
      "This guide explains what the character is, where it works, and how it differs from a plain space or a zero-width character. Generate it with the [invisible text generator](/tools/invisible).",
    ],
    sections: [
      {
        heading: "What the blank character actually is",
        paragraphs: [
          "This tool uses the Braille Pattern Blank (U+2800) — a legitimate character with real width that most fonts render as empty space. Because it's a normal character rather than a zero-width or whitespace one, apps that strip spaces or reject empty input usually still accept it. See [what invisible text is](/guides/what-is-invisible-text) for the detail.",
        ],
      },
      {
        heading: "How to copy and paste blank text",
        paragraphs: [
          "1. Open the [invisible text generator](/tools/invisible).\n2. Type any placeholder text — each character becomes one blank cell, so the length matches.\n3. Tap Copy.\n4. Paste into the caption, bio line, name field, or message where you need the gap.\n5. If it's rejected as empty, add one visible character alongside it.",
        ],
      },
      {
        heading: "Blank text vs space vs zero-width character",
        paragraphs: [
          "A regular space is often trimmed from the start and end of input. A zero-width space (U+200B) has no width at all and is aggressively filtered by many apps. The Braille blank sits in between — visible width, normal character status — which is why it survives copy-paste in more places than either.",
        ],
      },
      {
        heading: "Common uses",
        paragraphs: [
          "A blank line between paragraphs in an Instagram caption; a blank-looking Discord nickname or spacer message; holding a required field that you want to appear empty. It is not a way to hide text — the character is fully present in the data.",
        ],
      },
      {
        heading: "When blank text won't work",
        paragraphs: [
          "Some platforms normalise or strip unusual Unicode, and some validators count the Braille blank as 'not a real character' and still reject the field. Discord blocks names made entirely of blank or zero-width characters — see the [blank Discord name guide](/guides/blank-discord-name-message). When a field refuses it alone, pair it with a single visible character.",
        ],
      },
    ],
    faq: [
      { question: "How do I copy and paste blank text?", answer: "Type placeholder text into an invisible text generator, copy the blank result, and paste it where you need the empty-looking space. It behaves like copying any other text." },
      { question: "Why does my blank text disappear when I paste it?", answer: "The app stripped it as whitespace-like, or requires at least one visible character. Pair the blank text with a single normal character instead of pasting it alone." },
      { question: "Is blank text the same as a space?", answer: "No. A plain space is often trimmed; the blank character used here is a normal-status Unicode character with width, so it survives in more fields." },
      { question: "Can I use blank text for an empty Discord name?", answer: "For display names and nicknames, often yes, but Discord blocks names that are entirely blank or zero-width. The blank Discord name guide covers what currently works." },
      { question: "Does blank text hide a message from other people?", answer: "No. The character is fully present in the text data — it just renders as empty on screen. It's for spacing and placeholders, not hiding." },
    ],
    pillarLinks: [
      { label: "invisible text generator", href: "/tools/invisible" },
    ],
    relatedGuideSlugs: ["what-is-invisible-text", "blank-discord-name-message"],
  },
  {
    slug: "copy-paste-fonts-guide",
    title: "Copy and Paste Fonts: The Complete Guide to Every Style",
    metaDescription:
      "How copy-and-paste fonts work, every style available, and where they render — small caps, bold, cursive, bubble, and more, all from Unicode.",
    h1: "Copy and Paste Fonts: The Complete Guide",
    dek: "What 'copy-paste fonts' really are, the full style list, and how to use them without things breaking.",
    cluster: "Sitewide",
    lastUpdated: "2026-09-03",
    intro: [
      "A 'copy and paste font' isn't a font at all. It's a run of Unicode characters chosen to look like a styled version of the alphabet — so when you copy it and paste it into Instagram, Discord, or a document, the styling comes along because the characters themselves are styled. This guide is the full picture: how it works, every style, and the limits.",
      "Try the styles on the [small text generator](/) or the [Unicode text converter](/tools/unicode-text-converter), which shows all of them at once.",
    ],
    sections: [
      {
        heading: "Why it works without installing anything",
        paragraphs: [
          "Unicode is one big character set shared by every modern device. It includes alphabets meant for maths, phonetics, and other scripts that happen to look bold, italic, script, circled, or small. Swapping your letters for those characters is a substitution, not a font change — which is why it survives copy-paste and needs no install. [Unicode, explained](/guides/unicode-explained) goes deeper.",
        ],
      },
      {
        heading: "Every style, grouped",
        paragraphs: [
          "Small / compact: small caps, superscript, subscript. Weight and slant: bold, italic, bold italic, monospace. Script: cursive (plain and bold). Blackletter and outline: fraktur, double-struck. Enclosed: bubble (circled and filled), squared. Framed: brackets, hearts, sparkles. Layout: letter-spaced, full width, upside down, reversed. Effect: glitch. Blank: invisible.",
        ],
      },
      {
        heading: "How to copy and paste a font, step by step",
        paragraphs: [
          "1. Open a generator and type your text.\n2. Compare the styles.\n3. Tap Copy on the one you want.\n4. Paste it into the bio, caption, message, or field.\n5. Preview it there before you rely on it.",
        ],
      },
      {
        heading: "Compatibility: what breaks and why",
        paragraphs: [
          "Every app decides which Unicode it accepts and every device has its own fonts. Bold, small caps, and full-width are the most widely supported. Cursive, fraktur, and double-struck are the most likely to show as boxes on older Android. Usernames and handles reject styled Unicode entirely. Combining-mark styles like underline and strikethrough are stripped by some platforms.",
        ],
      },
      {
        heading: "Accessibility and search",
        paragraphs: [
          "Screen readers handle small caps and full-width reasonably, but often read mathematical-alphabet styles letter by letter or skip them. Search systems treat styled characters as different from the plain word. Keep names and key details in plain text and use a styled font for a short accent line — the [bio tricks guide](/guides/copy-paste-text-tricks-social-media-bios) shows the balance.",
        ],
      },
    ],
    faq: [
      { question: "Are copy and paste fonts actual fonts?", answer: "No. They're Unicode characters that look styled. The 'font' travels with the text because the characters are the style." },
      { question: "Which copy-paste font style works in the most places?", answer: "Bold and bold italic, then small caps and full-width. Frame styles are reliable because the letters inside stay plain." },
      { question: "Do copy-paste fonts work on Instagram, TikTok, X, and Discord?", answer: "Yes, in bios, captions, comments, posts, and display names. Not in usernames or handles." },
      { question: "Why do some pasted letters turn into boxes or plain text?", answer: "The receiving device lacks the glyph for that Unicode block, or the app filters unusual characters. Switch to a more widely supported style like bold or small caps." },
      { question: "Can I copy and paste a font into a Word or Google Docs document?", answer: "Yes, it pastes and displays. For a document you'll edit and reformat heavily, the app's own bold/italic/underline is sturdier because it's a text attribute, not a separate character." },
    ],
    pillarLinks: [
      { label: "small text generator", href: "/" },
      { label: "Unicode text converter", href: "/tools/unicode-text-converter" },
    ],
    relatedGuideSlugs: ["unicode-explained", "fancy-text-styles-explained", "unicode-text-converter-explained"],
  },
  {
    slug: "unicode-text-converter-explained",
    title: "Unicode Text Converter: How Copy-Paste Fonts Actually Work",
    metaDescription:
      "How a Unicode text converter turns letters into styled characters, what a code point and a block are, and why some conversions fail.",
    h1: "How a Unicode Text Converter Works",
    dek: "Code points, blocks, and mappings — the mechanism behind every copy-paste font tool.",
    cluster: "Sitewide",
    lastUpdated: "2026-09-03",
    intro: [
      "A Unicode text converter looks like it changes your font, but what it really does is look up each character you type and replace it with a different character that has a similar shape. Understanding the three ideas behind that — code points, blocks, and mappings — explains both why the tool works everywhere and why a few letters never convert.",
      "See it running on the [Unicode text converter](/tools/unicode-text-converter), which applies every mapping at once.",
    ],
    sections: [
      {
        heading: "Code points: every character has a number",
        paragraphs: [
          "Unicode assigns each character a number called a code point — 'A' is U+0041, the script 'a' 𝒶 is U+1D4B6. Software stores and sends those numbers, and each device draws them using whatever font it has. A converter is just a table that says 'when you see U+0041, output U+1D4B6 instead'.",
        ],
      },
      {
        heading: "Blocks: styled alphabets live in ranges",
        paragraphs: [
          "Related characters are grouped into blocks. The Mathematical Alphanumeric Symbols block holds bold, italic, script, fraktur, and double-struck alphabets. Enclosed Alphanumerics holds bubble letters. Superscripts and Subscripts is its own small block. A converter picks the target block for each style.",
        ],
      },
      {
        heading: "Mappings: where conversions break",
        paragraphs: [
          "Some blocks were designed for maths or phonetics, not for writing full words, so they're incomplete. The Superscripts and Subscripts block has no form for several capital letters; the small-capitals set is missing a clean 'X'. When there's no target character, a good converter leaves your original letter in place rather than substituting a look-alike from a different script — which is why you sometimes see one normal letter in a styled word.",
        ],
      },
      {
        heading: "Why it survives copy-paste",
        paragraphs: [
          "Because the output is genuine characters with real code points, copying it copies the code points, and pasting it pastes them. There's no formatting layer to lose. The only failure modes are an app that filters certain ranges, or a device whose fonts don't include a glyph for that code point — in which case you see a box, sometimes called 'tofu'.",
        ],
      },
      {
        heading: "Converter vs font vs image",
        paragraphs: [
          "Installing a font changes how text looks on your device only; other people see their own font. Saving text as an image fixes the look but loses selectability, search, and accessibility. A Unicode converter is the middle path — the styling is in the characters, so it looks the same for everyone and stays real text. [Copy and paste fonts](/guides/copy-paste-fonts-guide) covers the practical trade-offs.",
        ],
      },
    ],
    faq: [
      { question: "What is a Unicode text converter?", answer: "A tool that replaces each letter you type with a similar-looking character from another part of Unicode, producing styled text that copies and pastes without a font install." },
      { question: "What's a code point?", answer: "The number Unicode assigns to a character. Software works with the number; the font draws it. Converters remap one number to another." },
      { question: "Why don't all characters convert?", answer: "Some Unicode blocks are incomplete because they were built for maths or phonetics. When a style has no character for a given letter, the converter leaves the original letter alone." },
      { question: "What does it mean when I see a box instead of a letter?", answer: "The device's fonts have no glyph for that code point, so it draws a placeholder box, informally called 'tofu'. The character is still there in the data." },
      { question: "Is a Unicode converter the same as a font generator?", answer: "Yes. 'Font generator', 'text generator', and 'Unicode converter' all name the same substitution tool." },
    ],
    pillarLinks: [
      { label: "Unicode text converter", href: "/tools/unicode-text-converter" },
      { label: "small text generator", href: "/" },
    ],
    relatedGuideSlugs: ["unicode-explained", "copy-paste-fonts-guide", "fancy-text-styles-explained"],
  },
  {
    slug: "smallest-text-style-compared",
    title: "Smallest Text Style Compared: Tiny vs Superscript vs Small Caps",
    metaDescription:
      "Which small text style is actually the smallest? Superscript, subscript, and small caps compared for size, readability, and letter coverage.",
    h1: "Which Small Text Style Is Actually the Smallest?",
    dek: "Superscript, subscript, and small caps ranked by real rendered size — and why the smallest isn't always the right pick.",
    cluster: "A",
    lastUpdated: "2026-09-03",
    intro: [
      "There are three Unicode styles that genuinely shrink letters, and people reaching for 'really tiny text' or a 'super tiny' bio usually want to know which one wins on size. Short answer: superscript renders smallest, subscript is a close second, and small caps is the largest of the three but the only one with a complete alphabet. Compare all three live on the [tiny text generator](/tools/tiny-text-generator).",
      "This guide ranks them by rendered height, then explains the trade-off that matters more than raw size: letter coverage. A style that's tiny but drops half your capitals looks broken, not small.",
    ],
    sections: [
      {
        heading: "Ranked by rendered size",
        paragraphs: [
          "Measured against a normal lowercase letter, superscript characters render at roughly 60–65% height, subscript at about 65–70%, and small caps at 75–80%. The gap between superscript and small caps is visible at a glance in a bio. Bold, cursive, and bubble are sometimes called 'tiny' but they only restyle letters — they're the same height as normal text.",
        ],
      },
      {
        heading: "The coverage trade-off",
        paragraphs: [
          "Superscript has a near-complete lowercase alphabet but is missing several capitals; subscript is the least complete, with only a partial lowercase set and almost no capitals. Small caps converts every letter. So the smallest style (superscript) is best for a short lowercase phrase, while a name or a line with capitals is safer in small caps even though it's a touch larger. See [how to make tiny text](/guides/how-to-make-tiny-text) for the step-by-step.",
        ],
      },
      {
        heading: "Readability at bio size",
        paragraphs: [
          "Social bios render at around 13–15px. At that size, superscript can get hard to read for anyone, and subscript worse. Small caps stays legible because the letterforms are simpler and evenly weighted. If the text needs to be read, not just noticed, small caps almost always wins.",
        ],
      },
      {
        heading: "Picking one",
        paragraphs: [
          "Want maximum shrink for a two or three word lowercase tagline: superscript. Want a whole bio line or anything with capitals and numbers to stay readable: small caps. Subscript is niche — reach for it only when you specifically want the below-the-line look.",
        ],
      },
    ],
    faq: [
      { question: "What is the smallest text style?", answer: "Superscript renders smallest, at roughly 60–65% of normal letter height, followed by subscript, then small caps." },
      { question: "Why does my 'really tiny text' have some normal-size letters in it?", answer: "Superscript and subscript don't have Unicode forms for every letter, especially capitals. Those letters stay full size, which breaks the effect — small caps avoids this because it converts every letter." },
      { question: "Is there anything smaller than superscript?", answer: "Not as plain copy-paste text. Anything smaller would have to be an image, which loses selectability and accessibility." },
      { question: "Which tiny style is most readable?", answer: "Small caps, because the letterforms are simple and evenly weighted. Superscript and subscript trade readability for size." },
    ],
    pillarLinks: [
      { label: "tiny text generator", href: "/tools/tiny-text-generator" },
      { label: "small text generator", href: "/" },
    ],
    relatedGuideSlugs: ["how-to-make-tiny-text", "subscript-vs-superscript", "small-text-instagram-bio"],
  },
  {
    slug: "superscript-discord",
    title: "Superscript in Discord: Copy, Paste & What Renders",
    metaDescription:
      "How to use superscript text in Discord names, messages, and profiles — which characters render in Discord's font and which don't.",
    h1: "Superscript in Discord: What Renders and How to Paste It",
    dek: "Getting raised mini-text into a Discord name or message, and the characters that survive Discord's interface font.",
    cluster: "C",
    lastUpdated: "2026-09-03",
    intro: [
      "Discord renders plain Unicode, so superscript text pastes into a display name, nickname, or message the same way it works anywhere else — there's no Discord font setting involved. Generate it with the [superscript generator](/tools/superscript), copy, and paste.",
      "The catch is Discord's interface font: it draws some Unicode blocks and not others, and superscript is a mixed bag. This guide covers where superscript works in Discord and which characters to expect gaps on.",
    ],
    sections: [
      {
        heading: "Where superscript works in Discord",
        paragraphs: [
          "Display names, per-server nicknames, message content, custom status, and About Me all accept superscript, because Discord treats them as ordinary text. The one place it's blocked is your username — the @handle — which only allows lowercase letters, digits, underscores, and periods.",
        ],
      },
      {
        heading: "What renders and what doesn't",
        paragraphs: [
          "Superscript digits (⁰–⁹) and common lowercase letters render reliably in Discord's font on desktop and mobile. Several superscript capitals have no Unicode form at all and stay full-size; a few rare lowercase superscripts can show as a box on older mobile builds. Keep Discord superscript to lowercase words and numbers for consistency.",
        ],
      },
      {
        heading: "How to paste it",
        paragraphs: [
          "1. Open the [superscript generator](/tools/superscript) and type your text.\n2. Copy the result.\n3. For a display name: User Settings → Profiles. For a server nickname: right-click your name in the server → Edit Server Profile. For a message: paste into the box.\n4. Preview it in the actual channel before relying on it.",
        ],
      },
      {
        heading: "Superscript vs small text for Discord",
        paragraphs: [
          "If the goal is just 'small', small caps is more reliable in Discord's font than superscript and keeps a full alphabet — see [tiny text for Discord](/guides/tiny-text-discord). Use superscript specifically when you want the raised, footnote-style look.",
        ],
      },
    ],
    faq: [
      { question: "Does superscript work in Discord names?", answer: "Yes, in display names and server nicknames. Not in your username handle, which only accepts plain lowercase characters." },
      { question: "Why do some superscript letters show full-size in Discord?", answer: "Unicode has no superscript form for those letters, usually capitals, so they can't be converted. The generator leaves them as normal letters." },
      { question: "Does superscript work on Discord mobile?", answer: "Yes, superscript digits and common lowercase letters render on both iOS and Android. A few uncommon characters may show as a box on older Android." },
      { question: "Can I put superscript in my Discord About Me?", answer: "Yes, the About Me field accepts styled Unicode including superscript." },
    ],
    pillarLinks: [
      { label: "superscript generator", href: "/tools/superscript" },
      { label: "small text generator", href: "/" },
    ],
    relatedGuideSlugs: ["tiny-text-discord", "superscript-numbers-exponents", "subscript-vs-superscript"],
  },
  {
    slug: "superscript-subscript-character-set",
    title: "Superscript & Subscript Together: The Full Character Set",
    metaDescription:
      "The complete list of which letters and numbers have superscript and subscript forms in Unicode, and which don't convert.",
    h1: "Superscript and Subscript: The Full Character Set",
    dek: "Exactly which characters convert, which don't, and why a combined superscript-and-subscript generator still leaves gaps.",
    cluster: "C",
    lastUpdated: "2026-09-03",
    intro: [
      "People searching for a 'superscript and subscript generator' usually want one tool that does both directions — which the [subscript generator](/tools/subscript) and [superscript generator](/tools/superscript) cover between them. But whichever tool you use, the results depend on which characters Unicode actually defines. This guide is the full map.",
      "Knowing the gaps up front saves confusion when a word comes out with one or two normal-size letters in the middle.",
    ],
    sections: [
      {
        heading: "Numbers: both complete",
        paragraphs: [
          "Digits 0–9 have a full set of both superscript (⁰¹²³⁴⁵⁶⁷⁸⁹) and subscript (₀₁₂₃₄₅₆₇₈₉) forms, plus + − = ( ) in both. This is why exponents (x²) and chemical formulas (H₂O) always convert cleanly.",
        ],
      },
      {
        heading: "Superscript letters: nearly complete lowercase, partial capitals",
        paragraphs: [
          "Lowercase superscript covers a–z with one historical gap that most tools fill with a look-alike. Capitals are only partly defined — there's no superscript form for several of them, so words with capitals come out mixed.",
        ],
      },
      {
        heading: "Subscript letters: sparse",
        paragraphs: [
          "Subscript defines only a handful of lowercase letters — a, e, h, i, j, k, l, m, n, o, p, r, s, t, u, v, x — and no capitals. Any other letter stays normal size. Subscript is really a number tool with a few letters attached.",
        ],
      },
      {
        heading: "What a good generator does with gaps",
        paragraphs: [
          "When there's no Unicode form for a character, the tool should leave your original letter untouched rather than swap in a symbol from another alphabet that only looks close. A normal letter in a styled word is honest; a wrong glyph is misleading. See [Unicode, explained](/guides/unicode-explained) for why the blocks are incomplete.",
        ],
      },
    ],
    faq: [
      { question: "Is there a single generator for both superscript and subscript?", answer: "This site keeps them as two focused tools because they use completely separate Unicode blocks. You can open both and combine the results in one line." },
      { question: "Which letters have no subscript form?", answer: "Most of them. Subscript only covers about 17 lowercase letters and no capitals; everything else stays normal size." },
      { question: "Do superscript and subscript numbers always work?", answer: "Yes. All ten digits plus a few operators have complete forms in both directions." },
      { question: "Why not just shrink the font instead?", answer: "Plain-text fields like bios and chat don't let you change font size. Unicode superscript and subscript are the only way to get raised or lowered small characters that copy and paste." },
    ],
    pillarLinks: [
      { label: "subscript generator", href: "/tools/subscript" },
      { label: "superscript generator", href: "/tools/superscript" },
    ],
    relatedGuideSlugs: ["subscript-vs-superscript", "superscript-numbers-exponents", "subscript-numbers-chemistry"],
  },
  {
    slug: "bubble-text-instagram-tiktok",
    title: "How to Get Bubble Text on Instagram & TikTok",
    metaDescription:
      "Add bubble letters to an Instagram or TikTok bio, caption, or comment — copy-paste steps and which bubble style renders on each app.",
    h1: "How to Get Bubble Text on Instagram and TikTok",
    dek: "Putting circled bubble letters into a bio or caption on the two apps people ask about most.",
    cluster: "D",
    lastUpdated: "2026-09-03",
    intro: [
      "Bubble text on Instagram and TikTok is a copy-paste job, not an app feature. You generate the circled letters with the [bubble text generator](/tools/bubble), copy them, and paste them into the bio, caption, or comment field.",
      "Both apps render standard Unicode, so the circled bubble alphabet works in the same places on each. This guide has the per-app steps and the one style choice that matters.",
    ],
    sections: [
      {
        heading: "Instagram: bio, caption, comments",
        paragraphs: [
          "1. Generate your bubble text and copy it.\n2. For a bio: profile → Edit profile → Bio → paste → Done. For a caption: paste when creating the post. For a comment: paste into the comment box.\n3. Instagram bios cap at 150 characters and bubble letters count as one character each, so they don't buy extra room.\nBubble text is blocked in the @username field.",
        ],
      },
      {
        heading: "TikTok: bio and captions",
        paragraphs: [
          "1. Copy your bubble text.\n2. For a bio: Edit profile → Bio → paste (TikTok bios cap at 80 characters). For a caption: paste when posting.\n3. TikTok's Nickname field accepts bubble letters; the unique @username does not.",
        ],
      },
      {
        heading: "Circled, not filled",
        paragraphs: [
          "Use the circled style (ⓐ) rather than the filled style (🅐) on both apps. Circled covers upper case, lower case, and digits and renders consistently on iOS and Android. Filled is capitals-only and shows as coloured tiles or plain letters on some devices — details in [bubble letters to copy and paste](/guides/bubble-letters-copy-paste).",
        ],
      },
      {
        heading: "Keeping it readable",
        paragraphs: [
          "Every bubble letter is wrapped in a circle, so a full bio in bubble text is dense and slow to read. Use it for your name or one line, and keep the rest of the bio plain — the [Instagram bio guide](/guides/small-text-instagram-bio) covers that layout.",
        ],
      },
    ],
    faq: [
      { question: "How do I put bubble text in my Instagram bio?", answer: "Generate the circled bubble letters, copy them, then paste into profile → Edit profile → Bio and save." },
      { question: "Does bubble text work in an Instagram or TikTok username?", answer: "No. Both restrict the unique @username to plain characters. Bubble text works in the bio, display name or nickname, captions, and comments." },
      { question: "Why do my bubble letters look different on someone else's phone?", answer: "Their device's font renders the enclosed-alphanumeric block slightly differently, or is missing the filled set. The circled style is the most consistent." },
      { question: "Do bubble letters use more of my character limit?", answer: "No, each counts as one character, the same as a normal letter." },
    ],
    pillarLinks: [
      { label: "bubble text generator", href: "/tools/bubble" },
    ],
    relatedGuideSlugs: ["bubble-letters-copy-paste", "small-text-instagram-bio", "copy-paste-fonts-guide"],
  },
  {
    slug: "aesthetic-cursive-fonts",
    title: "Cute & Aesthetic Cursive Fonts for Bios",
    metaDescription:
      "Aesthetic cursive and script fonts to copy and paste into a bio — which styles read as cute, delicate, or elegant, and how to use them.",
    h1: "Cute and Aesthetic Cursive Fonts for Bios",
    dek: "The script styles people mean by 'aesthetic', and how to use them without the bio turning into a wall of loops.",
    cluster: "D",
    lastUpdated: "2026-09-03",
    intro: [
      "'Aesthetic' cursive usually means one of a few script styles: a delicate thin script, a rounder bold script, or a looped calligraphic look. All of them come from the same place — Unicode script characters — and you get them from the [cursive font generator](/tools/cursive).",
      "This guide covers which script reads as cute versus elegant, and the layout that keeps an aesthetic bio legible.",
    ],
    sections: [
      {
        heading: "The script options and their mood",
        paragraphs: [
          "Plain script (𝒸𝓊𝓉ℯ) is thin and delicate — reads as soft and understated. Bold script (𝓬𝓾𝓽ℯ) is rounder and heavier — reads as friendly and 'cute'. Pairing either with sparkles or heart frames (✦ ♡) adds the decorative touch people associate with aesthetic bios.",
        ],
      },
      {
        heading: "Building an aesthetic bio layout",
        paragraphs: [
          "The look that works: one script line for your name or handle, a plain-text line for what you do, then a short script or small-caps line for a tagline. Three lines, one or two styled. A whole bio in script is hard to read at bio size — see [convert text to cursive](/guides/convert-text-to-cursive) on why script gets spidery in bulk.",
        ],
      },
      {
        heading: "Symbols and dividers",
        paragraphs: [
          "Aesthetic bios lean on small Unicode symbols as dividers — ୨୧, ✧, ˚₊, ✦, ♡, ⋆. These are plain characters too, so they copy and paste alongside the script. Use one or two, consistently, not a different one on every line.",
        ],
      },
      {
        heading: "Where it renders",
        paragraphs: [
          "Script fonts work in Instagram and TikTok bios and captions, Discord, and most chat apps. A few older Android phones lack the script glyphs and show boxes, so check on a second device if you can. Bold script has slightly wider support than thin script.",
        ],
      },
    ],
    faq: [
      { question: "What's the cutest cursive font style?", answer: "Bold script reads as rounder and friendlier, which most people find 'cuter'; thin plain script reads as more delicate and elegant." },
      { question: "How do I make my bio look aesthetic?", answer: "Use one script line plus plain text, add one or two small Unicode symbol dividers, and keep it to about three lines. Don't style every line." },
      { question: "Do aesthetic fonts work on Instagram?", answer: "Yes, in the bio, name field, captions, and comments. Not in the @username." },
      { question: "Why does my aesthetic bio show boxes for some followers?", answer: "Their device is missing the Unicode script or symbol glyphs, most common on older Android. Choose bold script and common symbols to reduce it." },
    ],
    pillarLinks: [
      { label: "cursive font generator", href: "/tools/cursive" },
      { label: "fancy text generator", href: "/tools/fancy-text-generator" },
    ],
    relatedGuideSlugs: ["convert-text-to-cursive", "cursive-fonts-instagram-bio", "fancy-text-styles-explained"],
  },
  {
    slug: "invisible-character-instagram",
    title: "Invisible Character for Instagram Captions & Bios",
    metaDescription:
      "Use an invisible character to add blank lines and spacing in Instagram captions and bios — copy-paste steps that get past the empty-line trim.",
    h1: "Invisible Character for Instagram Captions and Bios",
    dek: "Getting real blank lines into a caption or bio when Instagram keeps collapsing your spacing.",
    cluster: "B",
    lastUpdated: "2026-09-03",
    intro: [
      "Instagram trims blank lines from captions and bios — press Enter twice and the gap disappears when you post. The fix is an invisible character with real width on each 'empty' line, which Instagram keeps because the line isn't actually empty. Generate it with the [invisible text generator](/tools/invisible).",
      "This guide covers the caption line-break method, the bio version, and where it stops working.",
    ],
    sections: [
      {
        heading: "Why Instagram removes your blank lines",
        paragraphs: [
          "Instagram's caption field strips leading and trailing whitespace and collapses runs of blank lines, so paragraph spacing you add in the box vanishes on publish. A line that contains one invisible character isn't blank, so it survives.",
        ],
      },
      {
        heading: "How to space a caption",
        paragraphs: [
          "1. Write your caption in the Instagram box or a notes app.\n2. On each line where you want a gap, paste one invisible character from the [generator](/tools/invisible) — nothing else on that line.\n3. Post. The invisible lines hold the spacing.\nDoing this in a plain notes app first and pasting the whole caption in once is more reliable than editing inside Instagram.",
        ],
      },
      {
        heading: "Blank space in a bio",
        paragraphs: [
          "The bio field trims the same way. Paste an invisible character where you want a break between bio lines. Bios cap at 150 characters and each invisible character counts as one, so use them sparingly.",
        ],
      },
      {
        heading: "Where it stops working",
        paragraphs: [
          "Some third-party scheduling tools re-trim captions on their end, undoing the effect. And the invisible character has visible width, so too many in a row create an obvious blank gap rather than a clean line break. It's for spacing, not for hiding text — the characters are fully in the caption data. See [what invisible text is](/guides/what-is-invisible-text).",
        ],
      },
    ],
    faq: [
      { question: "How do I add blank lines in an Instagram caption?", answer: "Put one invisible character on each blank line. Instagram keeps the line because it isn't truly empty." },
      { question: "Why does my caption spacing disappear after posting?", answer: "Instagram trims blank lines on publish. An invisible character on the line prevents the trim." },
      { question: "Does the invisible character count toward the 150-character bio limit?", answer: "Yes, each one counts as a single character." },
      { question: "Can people see the invisible character?", answer: "It renders as blank space, but it's present in the caption text and will be read by a screen reader as a space or skipped." },
    ],
    pillarLinks: [
      { label: "invisible text generator", href: "/tools/invisible" },
    ],
    relatedGuideSlugs: ["blank-text-copy-paste", "what-is-invisible-text", "small-text-instagram-bio"],
  },
  {
    slug: "small-caps-copy-paste",
    title: "Small Caps Generator: Small Capital Letters Copy & Paste",
    metaDescription:
      "Copy and paste small capital letters for bios, names, and headings. How small caps works, where it renders, and which letters to watch.",
    h1: "Small Capital Letters to Copy and Paste",
    dek: "How the small caps style works, and where copy-paste small capitals hold up.",
    cluster: "A",
    lastUpdated: "2026-09-03",
    intro: [
      "Small caps turns lowercase letters into miniature capital letterforms — ᴛʜɪs — that stay even and readable. It's the most reliable of the small text styles because it converts every letter. Generate it with the [small caps generator](/tools/small-caps).",
      "This guide covers what the style is made of, the letters to watch, and where copy-paste small capitals render.",
    ],
    sections: [
      {
        heading: "What small caps actually is",
        paragraphs: [
          "Each lowercase letter is mapped to a Unicode small-capital character drawn at roughly x-height. Uppercase input is left as full capitals, so typing a name gives you a full cap followed by small caps — ᴊᴀᴍᴇs — which is usually the look people want.",
        ],
      },
      {
        heading: "The letters to watch",
        paragraphs: [
          "Unicode's small-capital set is nearly complete. Historically the small-cap 'X' and 'Q' varied between fonts; on modern devices both render fine. If a letter ever shows full-size, the generator left it because there's no reliable small-cap form on that platform.",
        ],
      },
      {
        heading: "How to copy and paste",
        paragraphs: [
          "1. Open the [small caps generator](/tools/small-caps) and type your text.\n2. Copy the small caps result.\n3. Paste into a bio, caption, display name, heading, or document.\n4. Preview it where you'll use it — a few older Android builds miss one or two glyphs.",
        ],
      },
      {
        heading: "Small caps vs the alternatives",
        paragraphs: [
          "Superscript and subscript render smaller but drop capitals; small caps keeps every letter, which is why it's the safe default for a name or a full bio line. For the size comparison see [which small text style is smallest](/guides/smallest-text-style-compared).",
        ],
      },
    ],
    faq: [
      { question: "How do I copy and paste small capital letters?", answer: "Type into a small caps generator, copy the result, and paste it where you need it. The small capitals are Unicode characters, so no font install is needed." },
      { question: "Does small caps convert every letter?", answer: "Yes, it has the most complete alphabet of the small text styles. That's its main advantage over superscript and subscript." },
      { question: "Does small caps work on Instagram and Discord?", answer: "Yes, in bios, captions, display names, and messages. Not in usernames." },
      { question: "Is small caps the same as ALL CAPS?", answer: "No. ALL CAPS is full-height capitals. Small caps shrinks capital letterforms to about x-height for a quieter, more compact look." },
    ],
    pillarLinks: [
      { label: "small caps generator", href: "/tools/small-caps" },
      { label: "small text generator", href: "/" },
    ],
    relatedGuideSlugs: ["smallest-text-style-compared", "small-caps-vs-all-caps", "small-text-instagram-bio"],
  },
  {
    slug: "underline-text-copy-paste",
    title: "Underline & Underscore Text Copy & Paste",
    metaDescription:
      "Add an underline to text you can copy and paste, with no formatting toolbar. How the Unicode combining underline works and where it survives.",
    h1: "Underline and Underscore Text to Copy and Paste",
    dek: "Getting a real underline into plain-text fields, and why it sometimes vanishes.",
    cluster: "D",
    lastUpdated: "2026-09-03",
    intro: [
      "An underline text generator stacks a Unicode combining underline mark onto each character, so the line travels with the text into fields that have no formatting button — bios, captions, chat. Generate it with the [underline text generator](/tools/underline).",
      "This guide covers how the combining mark works, the difference from typing underscores, and the platforms that strip it.",
    ],
    sections: [
      {
        heading: "Combining underline vs underscore",
        paragraphs: [
          "Typing underscores between letters (l_i_k_e) puts characters on the baseline between letters. The combining low line (U+0332) sits under each character and joins up into a continuous underline — closer to a real underline. This tool uses the combining mark.",
        ],
      },
      {
        heading: "How to copy and paste it",
        paragraphs: [
          "1. Open the [underline text generator](/tools/underline) and type your text.\n2. Copy the underlined result.\n3. Paste into the bio, caption, message, or field.\n4. Check it there — if the line is gone, that platform strips combining marks.",
        ],
      },
      {
        heading: "Where it survives and where it doesn't",
        paragraphs: [
          "Underlined Unicode renders in many chat apps, some social bios, and plain-text editors. Instagram and a few others normalise combining marks away, so the base letters stay but the line disappears. There's no workaround on a platform that strips them — the same applies to the [strikethrough tool](/tools/strikethrough).",
        ],
      },
      {
        heading: "Underline in documents",
        paragraphs: [
          "It pastes into Word and Google Docs and displays, but for a document you'll keep editing, the app's own underline button is sturdier because it's a text attribute rather than a stack of marks.",
        ],
      },
    ],
    faq: [
      { question: "How do I underline text without a formatting button?", answer: "Use an underline generator that adds a Unicode combining underline to each character. The line becomes part of the text and pastes into plain-text fields." },
      { question: "Why does my underline disappear on Instagram?", answer: "Instagram normalises combining marks, which removes the underline while keeping the letters. Some other apps do the same." },
      { question: "Is this the same as pressing Ctrl+U?", answer: "The visual result is similar, but Ctrl+U applies a formatting attribute that only works in rich-text editors. The Unicode version works in plain-text fields too." },
      { question: "Does underlined text work in a username?", answer: "No. Usernames reject combining marks and styled Unicode." },
    ],
    pillarLinks: [
      { label: "underline text generator", href: "/tools/underline" },
    ],
    relatedGuideSlugs: ["copy-paste-fonts-guide", "unicode-explained", "copy-paste-text-tricks-social-media-bios"],
  },
  {
    slug: "cool-different-fonts",
    title: "Cool & Different Fonts to Copy and Paste (Style Gallery)",
    metaDescription:
      "A gallery of cool and different fonts to copy and paste — every Unicode letter style, what each looks like, and where it renders.",
    h1: "Cool and Different Fonts to Copy and Paste",
    dek: "A quick tour of every distinct Unicode letter style, grouped by look.",
    cluster: "Sitewide",
    lastUpdated: "2026-09-03",
    intro: [
      "'Cool fonts' and 'different fonts' searches are looking for variety — as many distinct copy-paste styles as possible in one place. That's the [fancy text generator](/tools/fancy-text-generator) and the [Unicode text converter](/tools/unicode-text-converter), which show them all at once.",
      "This guide is the visual index: what each style looks like, and which ones are safe to use where.",
    ],
    sections: [
      {
        heading: "Bold, sharp, and technical",
        paragraphs: [
          "Bold (𝗰𝗼𝗼𝗹) and bold italic for weight; monospace (𝚌𝚘𝚘𝚕) for a code-terminal look; fraktur (𝔠𝔬𝔬𝔩) for gothic blackletter. Bold is the most widely supported style of all.",
        ],
      },
      {
        heading: "Flowing and decorative",
        paragraphs: [
          "Plain and bold script (𝒸ℴℴ𝓁) for handwriting; double-struck (𝕔𝕠𝕠𝕝) for an outlined maths look; small caps (ᴄᴏᴏʟ) for a quiet, even style.",
        ],
      },
      {
        heading: "Enclosed and framed",
        paragraphs: [
          "Bubble (ⓒⓞⓞⓛ) and squared (🄲🄾🄾🄻) wrap each letter; brackets, hearts, and sparkles frame the whole phrase. Frames are the safest because the letters inside stay plain.",
        ],
      },
      {
        heading: "Layout and effect",
        paragraphs: [
          "Letter-spaced and full-width (ｃｏｏｌ) add air; upside-down and reversed flip the line; glitch adds a distorted overlay. Use these sparingly — they change layout more than letterform. For which styles render everywhere, see [copy and paste fonts](/guides/copy-paste-fonts-guide).",
        ],
      },
    ],
    faq: [
      { question: "What's the coolest copy-paste font?", answer: "Subjective, but fraktur, double-struck, and bold script are the most distinctive; bold and small caps are the most usable day to day." },
      { question: "How many different fonts can I copy and paste?", answer: "Around 20 distinct Unicode letter styles, plus frame and layout effects on top." },
      { question: "Do all these fonts work everywhere?", answer: "No. Bold, small caps, and full-width are the most compatible; script, fraktur, and double-struck can show as boxes on older Android." },
      { question: "Are these real downloadable fonts?", answer: "No — they're Unicode character styles, which is why they copy and paste without an install." },
    ],
    pillarLinks: [
      { label: "fancy text generator", href: "/tools/fancy-text-generator" },
      { label: "Unicode text converter", href: "/tools/unicode-text-converter" },
    ],
    relatedGuideSlugs: ["fancy-text-styles-explained", "copy-paste-fonts-guide", "unicode-text-converter-explained"],
  },
  {
    slug: "are-copy-paste-fonts-safe",
    title: "Are Copy-Paste Fonts Free, Safe & Accessible?",
    metaDescription:
      "Are copy-and-paste fonts free to use, safe to paste, and readable by screen readers? What Unicode styling does and doesn't affect.",
    h1: "Are Copy-Paste Fonts Free, Safe, and Accessible?",
    dek: "The licensing, security, and accessibility questions people have before pasting styled Unicode into a profile.",
    cluster: "Sitewide",
    lastUpdated: "2026-09-03",
    intro: [
      "Copy-paste 'fonts' are Unicode characters, not font files, which changes the answers to the usual questions about cost, safety, and accessibility. Try them on the [small text generator](/) — this guide covers what you're actually pasting.",
      "Short version: free to use, safe to paste, but there's a real accessibility cost worth knowing.",
    ],
    sections: [
      {
        heading: "Are they free?",
        paragraphs: [
          "Yes. Unicode characters aren't licensed the way typeface files are — there's no font to buy or attribute. A generator that runs in your browser, like the ones here, also doesn't charge or watermark. You're using standard characters that every device already has.",
        ],
      },
      {
        heading: "Are they safe to paste?",
        paragraphs: [
          "The output is plain text — no scripts, no hidden payloads, nothing executable. The only thing to know is that invisible and zero-width characters can be used to pad or disguise text, so some platforms flag messages containing them. Ordinary styled letters (bold, cursive, small caps) don't trigger that.",
        ],
      },
      {
        heading: "Screen readers and accessibility",
        paragraphs: [
          "This is the real trade-off. Screen readers handle small caps and full-width reasonably, but mathematical-alphabet styles (bold, italic, script, fraktur) are often read letter by letter, spelled out, or skipped entirely. A bio written fully in script can be unreadable to a blind user. Keep your name and key info in plain text and style only a short accent line.",
        ],
      },
      {
        heading: "Search and discoverability",
        paragraphs: [
          "Search systems treat styled Unicode as different characters from the plain word, so a fully styled name may not match when someone searches for you. Same principle as accessibility — plain text for the parts that need to be found, styling for decoration. See [best copy-paste text tricks](/guides/copy-paste-text-tricks-social-media-bios).",
        ],
      },
    ],
    faq: [
      { question: "Are copy and paste fonts free?", answer: "Yes. They're standard Unicode characters, not licensed font files, and browser generators don't charge or watermark." },
      { question: "Is it safe to paste Unicode fonts into my profile?", answer: "Yes, the output is plain text with nothing executable. Be aware that invisible or zero-width characters specifically can get messages flagged on some platforms." },
      { question: "Can screen readers read styled Unicode text?", answer: "Partially. Small caps and full-width read acceptably; bold, italic, script, and fraktur are often spelled out or skipped. Keep important text plain." },
      { question: "Will a styled bio hurt my searchability?", answer: "It can. Styled characters don't match searches for the plain word, so keep your name in plain text." },
    ],
    pillarLinks: [
      { label: "small text generator", href: "/" },
      { label: "Unicode text converter", href: "/tools/unicode-text-converter" },
    ],
    relatedGuideSlugs: ["copy-paste-fonts-guide", "unicode-explained", "copy-paste-text-tricks-social-media-bios"],
  },
  {
    slug: "numbers-in-small-font",
    title: "Numbers in Small Font: Superscript, Subscript & Tiny Digits",
    metaDescription:
      "How to write numbers in a small font — superscript, subscript, and small circled digits you can copy and paste anywhere.",
    h1: "How to Write Numbers in a Small Font",
    dek: "Every way to get small digits as copy-paste text, and when to use each.",
    cluster: "A",
    lastUpdated: "2026-09-03",
    intro: [
      "Digits have better small-font coverage in Unicode than letters do — you can get raised, lowered, and circled numbers as plain copy-paste text. Generate them with the [superscript generator](/tools/superscript), [subscript generator](/tools/subscript), or [bubble text generator](/tools/bubble).",
      "This guide covers the three small-number styles and where each fits.",
    ],
    sections: [
      {
        heading: "Superscript digits (⁰¹²³)",
        paragraphs: [
          "The smallest option. Complete set 0–9 plus + − = ( ). Used for exponents (x²), footnote markers, and ordinal suffixes (1ˢᵗ). See [superscript numbers and exponents](/guides/superscript-numbers-exponents).",
        ],
      },
      {
        heading: "Subscript digits (₀₁₂₃)",
        paragraphs: [
          "Same size range, sits below the line. Complete set 0–9. Used for chemical formulas (H₂O) and indexed variables (xₙ). See [subscript numbers for chemistry](/guides/subscript-numbers-chemistry).",
        ],
      },
      {
        heading: "Circled and small digits (①②③, ⓪)",
        paragraphs: [
          "Circled numbers from the bubble set — larger than super or subscript but distinct, good for lists and rankings. Digits 0–9 all have a circled form.",
        ],
      },
      {
        heading: "Which to use",
        paragraphs: [
          "Exponent or power: superscript. Formula or index: subscript. A decorative numbered list or a rank badge in a name: circled. All three copy and paste as plain text and count as one character each.",
        ],
      },
    ],
    faq: [
      { question: "How do I make a small number like ² or ₂?", answer: "Type the digit into a superscript or subscript generator, copy it, and paste it next to the character it belongs to." },
      { question: "Are small numbers full sets in Unicode?", answer: "Yes. Unlike letters, all ten digits have complete superscript and subscript forms." },
      { question: "Can I get tiny numbers for a phone number or date in my bio?", answer: "You can convert them to superscript, but long strings of superscript digits get hard to read. Small caps or circled digits are more legible for that." },
      { question: "Do small numbers count less toward a character limit?", answer: "No, each counts as one character." },
    ],
    pillarLinks: [
      { label: "superscript generator", href: "/tools/superscript" },
      { label: "subscript generator", href: "/tools/subscript" },
    ],
    relatedGuideSlugs: ["superscript-numbers-exponents", "subscript-numbers-chemistry", "how-to-make-tiny-text"],
  },
  {
    slug: "small-text-png-vs-unicode",
    title: "Small Text as an Image (PNG) vs Unicode: Which to Use",
    metaDescription:
      "When to use small text as a PNG image and when to use copy-paste Unicode — the trade-offs for bios, graphics, and documents.",
    h1: "Small Text as an Image (PNG) vs Copy-Paste Unicode",
    dek: "Two ways to get small text into something, and why they're not interchangeable.",
    cluster: "A",
    lastUpdated: "2026-09-03",
    intro: [
      "Sometimes 'small text' means an image file — a PNG of styled lettering for a graphic — and sometimes it means characters you paste into a field. They solve different problems. For the paste-anywhere version, use the [small text generator](/).",
      "This guide lays out when each one is the right call.",
    ],
    sections: [
      {
        heading: "What copy-paste Unicode gives you",
        paragraphs: [
          "Real text: selectable, searchable, editable, readable by screen readers, and it counts toward character limits. It works in any text field — bio, caption, message, document. The look is limited to what Unicode defines, and it can show as boxes on devices missing a glyph.",
        ],
      },
      {
        heading: "What a PNG gives you",
        paragraphs: [
          "Total control of the look — any font, colour, effect — and it renders identically everywhere because it's pixels, not characters. But it's not text: it can't be searched, selected, or read aloud, it can't go in a plain-text field like a bio, and it adds file weight.",
        ],
      },
      {
        heading: "Which to use when",
        paragraphs: [
          "Bio, username area, caption, chat, document body: copy-paste Unicode, always — a PNG can't go there. Logo, thumbnail, story graphic, header image: a PNG or SVG, because you want a specific typeface and guaranteed rendering. Never use a text image for body content you want found in search.",
        ],
      },
      {
        heading: "Getting a PNG if you need one",
        paragraphs: [
          "This site's generator produces Unicode text, not image files. For a PNG, screenshot the styled result or set the text in an image editor with the font you want. Keep alt text on it so it's still accessible.",
        ],
      },
    ],
    faq: [
      { question: "Can I download small text as a PNG here?", answer: "No, the generator outputs Unicode characters you copy and paste. For an image, screenshot the result or recreate it in an image editor." },
      { question: "Why can't I paste a small-text PNG into my Instagram bio?", answer: "Bios are plain-text fields — they accept characters, not images. You need the Unicode version there." },
      { question: "Is image text bad for SEO?", answer: "Yes for body content — search engines can't read text in an image reliably. Use real text and reserve images for logos and graphics." },
      { question: "Which looks better, PNG or Unicode small text?", answer: "A PNG can use any font and always renders the same; Unicode is limited to defined styles but stays real, functional text." },
    ],
    pillarLinks: [
      { label: "small text generator", href: "/" },
      { label: "tiny text generator", href: "/tools/tiny-text-generator" },
    ],
    relatedGuideSlugs: ["how-to-make-tiny-text", "unicode-explained", "copy-paste-fonts-guide"],
  },
  {
    slug: "thin-cursive-fonts",
    title: "Thin & Simple Cursive Fonts (Minimal Script Styles)",
    metaDescription:
      "The thinnest, simplest cursive fonts you can copy and paste — minimal script styles for a clean, understated bio.",
    h1: "Thin and Simple Cursive Fonts",
    dek: "The minimal end of the script spectrum, and how to keep it legible.",
    cluster: "D",
    lastUpdated: "2026-09-03",
    intro: [
      "Not everyone wants loops and flourishes. 'Thin cursive' and 'simple cursive' searches are after the lightest script style — clean, understated, barely-there handwriting. Generate it with the [cursive font generator](/tools/cursive) by choosing plain script over bold.",
      "This guide covers what the thin option actually is and where it holds up.",
    ],
    sections: [
      {
        heading: "Plain script is the thin one",
        paragraphs: [
          "Unicode has two script alphabets. The plain one (𝓈𝒾𝓂𝓅𝓁ℯ) is the thin, delicate style; the bold one (𝓼𝓲𝓶𝓹𝓵𝓮) is heavier and rounder. For a minimal look you want plain script. There's no separate 'ultra-thin' script block — plain script is as light as copy-paste cursive gets.",
        ],
      },
      {
        heading: "The legibility catch",
        paragraphs: [
          "Thin script's strokes are already light, and at bio size (13–15px) on a lower-resolution screen they can thin out to the point of being hard to read. Test it small before committing. If it disappears, bold script or [small caps](/tools/small-caps) keeps the understated feel with more weight.",
        ],
      },
      {
        heading: "Using it well",
        paragraphs: [
          "Thin script suits a single short line — a name, a one-word tagline — against plenty of plain text. It does not suit a full bio or a caption paragraph. Pair it with minimal symbol dividers (˚, ·, ✧) rather than busy ones.",
        ],
      },
      {
        heading: "Where it renders",
        paragraphs: [
          "Same as any script: Instagram, TikTok, Discord, most chat apps. Older Android may show boxes. Because thin strokes are the first thing to break in low-quality rendering, thin script has the narrowest reliable support of the cursive options — see [convert text to cursive](/guides/convert-text-to-cursive).",
        ],
      },
    ],
    faq: [
      { question: "What's the thinnest cursive font I can copy and paste?", answer: "Unicode plain (non-bold) mathematical script. There's no lighter copy-paste cursive." },
      { question: "Why is my thin cursive hard to read?", answer: "Light strokes thin out at small sizes and on low-resolution screens. Use bold script or small caps if it needs to be readable." },
      { question: "Is there a simple cursive without the fancy loops?", answer: "Plain script is the simplest option. Anything simpler stops looking like cursive — italic is the next step toward plain." },
      { question: "Does thin cursive work on all phones?", answer: "Modern devices, yes. Older Android is more likely to drop thin script glyphs than bold ones." },
    ],
    pillarLinks: [
      { label: "cursive font generator", href: "/tools/cursive" },
      { label: "fancy text generator", href: "/tools/fancy-text-generator" },
    ],
    relatedGuideSlugs: ["convert-text-to-cursive", "aesthetic-cursive-fonts", "cursive-fonts-instagram-bio"],
  },
  {
    slug: "cursive-font-keyboard",
    title: "Cursive Font Keyboard: Type Script Text on Phone & PC",
    metaDescription:
      "Do you need a cursive font keyboard? How keyboard apps produce script text, and why a copy-paste generator does the same thing.",
    h1: "Cursive Font Keyboard: What It Does and Whether You Need One",
    dek: "How 'cursive keyboards' work under the hood, and the copy-paste alternative.",
    cluster: "D",
    lastUpdated: "2026-09-03",
    intro: [
      "Keyboard apps that promise cursive or fancy fonts are doing exactly what a web generator does — swapping your letters for Unicode script characters as you type. The result is identical. You can skip the install and use the [cursive font generator](/tools/cursive).",
      "This guide explains what a cursive keyboard actually does, the pros and cons, and how to get the same effect without one.",
    ],
    sections: [
      {
        heading: "What a cursive keyboard actually does",
        paragraphs: [
          "It intercepts your keystrokes and substitutes Unicode characters from a script block before the text reaches the app. There's no font being rendered — it's the same character substitution a copy-paste tool does, just applied live. Which is why the output looks the same and has the same rendering limits.",
        ],
      },
      {
        heading: "The trade-offs",
        paragraphs: [
          "A keyboard is convenient for frequent use — no switching apps. The downsides: keyboard apps request access to everything you type, which is a real privacy consideration; many are ad-heavy; and they only offer the styles the app author included. A generator you open in a browser types nothing on your behalf and shows every style.",
        ],
      },
      {
        heading: "Getting cursive without a keyboard",
        paragraphs: [
          "1. Open the [cursive font generator](/tools/cursive).\n2. Type your text and copy the script result.\n3. Paste it into the bio, caption, or message.\nFor a phrase you reuse, save it in your device's text-replacement or clipboard history so it's one tap next time.",
        ],
      },
      {
        heading: "iPhone and Android notes",
        paragraphs: [
          "Neither iOS nor Android has a built-in cursive font for typing into other apps — the system cursive you see in some places is a display font, not something you can type elsewhere. That's why substitution (keyboard or generator) is the only route to script text in a bio.",
        ],
      },
    ],
    faq: [
      { question: "Do I need a cursive font keyboard?", answer: "No. Keyboard apps do the same Unicode substitution a copy-paste generator does. The generator avoids the install, the ads, and the keystroke-access permission." },
      { question: "Is there a built-in cursive keyboard on iPhone or Android?", answer: "No. Any cursive you can type into other apps comes from a substitution keyboard or a generator, not the OS." },
      { question: "Are cursive keyboard apps safe?", answer: "They require permission to read everything you type, so choose carefully. A browser generator doesn't need that access." },
      { question: "Will keyboard cursive look different from generator cursive?", answer: "No. Both output the same Unicode script characters." },
    ],
    pillarLinks: [
      { label: "cursive font generator", href: "/tools/cursive" },
    ],
    relatedGuideSlugs: ["convert-text-to-cursive", "how-cursive-font-generator-works", "thin-cursive-fonts"],
  },
  {
    slug: "hidden-zero-width-characters",
    title: "Hidden & Zero-Width Characters Explained",
    metaDescription:
      "What zero-width and hidden Unicode characters are, how they differ from a visible blank, and where they get filtered.",
    h1: "Hidden and Zero-Width Characters, Explained",
    dek: "The characters that take up no space at all, and why they behave differently from the blank one this site uses.",
    cluster: "B",
    lastUpdated: "2026-09-03",
    intro: [
      "'Hidden characters' and 'zero-width' text refer to Unicode code points that render with no visible mark and, in the true zero-width case, no width at all. They're related to but different from the visible-width blank the [invisible text generator](/tools/invisible) produces.",
      "This guide covers the main hidden characters, what they're for, and why they're heavily filtered.",
    ],
    sections: [
      {
        heading: "The main hidden characters",
        paragraphs: [
          "Zero-width space (U+200B), zero-width non-joiner (U+200C), zero-width joiner (U+200D), and the word joiner (U+2060). They have legitimate typographic jobs — controlling where words can break, joining emoji sequences — but pasted into a name or message they're invisible and take no space.",
        ],
      },
      {
        heading: "Zero-width vs visible blank",
        paragraphs: [
          "A zero-width character has literally no width; a visible blank like Braille Pattern Blank (U+2800) has the width of a space but no mark. The visible blank survives copy-paste in more places because apps that strip 'nothing' characters don't classify it as one. See [what invisible text is](/guides/what-is-invisible-text) and [blank text to copy and paste](/guides/blank-text-copy-paste).",
        ],
      },
      {
        heading: "Why they're filtered",
        paragraphs: [
          "Zero-width characters can pad text to dodge length checks, hide watermarks in copied text, or split words to evade keyword filters. Because of that, platforms like Discord, and many chat and forum systems, actively detect and strip them. A name made only of zero-width characters is usually rejected outright.",
        ],
      },
      {
        heading: "When you'd actually want one",
        paragraphs: [
          "Rarely, for their real purpose: forcing or preventing a line break in a long string, or keeping an emoji sequence together. For blank-looking spacing in a bio or caption, the visible-width blank is the better tool because it isn't filtered as aggressively.",
        ],
      },
    ],
    faq: [
      { question: "What is a zero-width character?", answer: "A Unicode character that renders with no mark and no width, such as the zero-width space (U+200B). It exists for typographic control but is often misused for hiding or padding text." },
      { question: "Is zero-width text the same as invisible text here?", answer: "No. This site's invisible text uses a character with real width, which survives copy-paste in more apps. Zero-width characters are stripped by many platforms." },
      { question: "Can hidden characters be used to hide a message?", answer: "They can encode small amounts of data between visible letters, but most modern platforms detect and remove them, so it's unreliable." },
      { question: "Why did Discord remove my zero-width name?", answer: "Discord specifically filters zero-width and whitespace-only names. Use a visible-width blank instead — see the blank Discord name guide." },
    ],
    pillarLinks: [
      { label: "invisible text generator", href: "/tools/invisible" },
    ],
    relatedGuideSlugs: ["what-is-invisible-text", "blank-text-copy-paste", "blank-discord-name-message"],
  },
  {
    slug: "small-caps-vs-all-caps",
    title: "Small Caps vs All Caps vs Title Case",
    metaDescription:
      "Small caps vs ALL CAPS vs Title Case — how they differ, when to use each, and how to get small caps as copy-paste text.",
    h1: "Small Caps vs All Caps vs Title Case",
    dek: "Three ways to capitalise, three different tones, and where small caps fits.",
    cluster: "A",
    lastUpdated: "2026-09-03",
    intro: [
      "Small caps, ALL CAPS, and Title Case all touch capitalisation but read very differently. Small caps is the only one that needs a tool, since it's a Unicode character style — get it from the [small caps generator](/tools/small-caps).",
      "This guide compares the three and says when each is the right choice.",
    ],
    sections: [
      {
        heading: "How they look and sound",
        paragraphs: [
          "ALL CAPS (LIKE THIS) is loud — full-height capitals read as shouting or high emphasis. Title Case (Like This) capitalises the first letter of each significant word — neutral, used for headings and names. Small caps (ʟɪᴋᴇ ᴛʜɪs) uses capital letterforms shrunk to x-height — quiet, even, refined.",
        ],
      },
      {
        heading: "When to use each",
        paragraphs: [
          "ALL CAPS: a single short label or a deliberate shout, sparingly. Title Case: headings, product names, anything that follows standard style rules. Small caps: a bio line, a subtitle, or a byline where you want structure without volume — it signals 'this is a heading' without raising the tone.",
        ],
      },
      {
        heading: "Why small caps needs a generator",
        paragraphs: [
          "Capitalisation is just which keys you press; small caps is a different set of characters that no keyboard types directly. A [small caps generator](/tools/small-caps) does the substitution, and the result copies and pastes like normal text.",
        ],
      },
      {
        heading: "Readability",
        paragraphs: [
          "Small caps stays readable at length because every letter is the same height and weight. ALL CAPS gets tiring fast because there are no ascenders or descenders to help the eye. For a full styled bio line, small caps is the more comfortable read.",
        ],
      },
    ],
    faq: [
      { question: "What's the difference between small caps and all caps?", answer: "ALL CAPS is full-height capitals and reads as loud. Small caps shrinks capital letterforms to about x-height and reads as quiet and even." },
      { question: "Is small caps more readable than all caps?", answer: "For more than a few words, yes. Even letter height makes small caps easier to scan; ALL CAPS has no shape variation to guide the eye." },
      { question: "How do I type small caps?", answer: "You can't type it directly. Use a small caps generator to substitute the characters, then copy and paste." },
      { question: "When should I use small caps?", answer: "For a subhead, byline, or bio line where you want it to read as structured but not shouty." },
    ],
    pillarLinks: [
      { label: "small caps generator", href: "/tools/small-caps" },
      { label: "small text generator", href: "/" },
    ],
    relatedGuideSlugs: ["small-caps-copy-paste", "smallest-text-style-compared", "copy-paste-text-tricks-social-media-bios"],
  },
  {
    slug: "fonts-for-tiktok",
    title: "Fonts & Small Text for TikTok (Bio, Captions, Comments)",
    metaDescription:
      "How to add fonts and small text to a TikTok bio, caption, or comment — copy-paste steps, character limits, and what renders.",
    h1: "Fonts and Small Text for TikTok",
    dek: "Getting styled Unicode into the three TikTok fields that accept it.",
    cluster: "Platform",
    lastUpdated: "2026-09-03",
    intro: [
      "TikTok has no built-in font picker, so styled text in a bio or caption is copy-pasted Unicode. Generate it with the [small text generator](/) or a focused tool like the [cursive font generator](/tools/cursive) or [fancy text generator](/tools/fancy-text-generator).",
      "This guide covers where TikTok accepts styled text, the limits, and the reliable styles.",
    ],
    sections: [
      {
        heading: "Where styled text works on TikTok",
        paragraphs: [
          "The bio (80 characters), video captions, comments, and the Nickname field all accept styled Unicode. The unique @username does not — it's plain letters, numbers, underscores, and periods only.",
        ],
      },
      {
        heading: "How to add it",
        paragraphs: [
          "1. Generate and copy your styled text.\n2. Bio: Edit profile → Bio → paste → Save. Caption: paste on the post screen. Comment: paste into the comment box.\n3. Preview on your live profile — TikTok's app font doesn't include every glyph.",
        ],
      },
      {
        heading: "Which styles are safe",
        paragraphs: [
          "Bold, small caps, and full-width render reliably in TikTok's font on iOS and Android. Cursive and fraktur usually work but can box out on older Android. Combining-mark styles like underline are stripped. Keep your handle and key info plain so search still matches — see [are copy-paste fonts safe](/guides/are-copy-paste-fonts-safe).",
        ],
      },
      {
        heading: "The 80-character bio",
        paragraphs: [
          "TikTok's bio is short and every styled character counts as one, so a fully styled bio eats the limit fast. Style your name or one line, keep the rest plain.",
        ],
      },
    ],
    faq: [
      { question: "How do I change the font in my TikTok bio?", answer: "TikTok has no font setting. Generate styled Unicode elsewhere, copy it, and paste it into the bio field." },
      { question: "Why won't styled text work in my TikTok username?", answer: "The @username only accepts plain characters. Styled text works in the bio, Nickname, captions, and comments." },
      { question: "Which fonts work best on TikTok?", answer: "Bold, small caps, and full-width are the most reliable. Cursive and fraktur mostly work but vary on older Android." },
      { question: "Does styled text use more of the 80-character bio limit?", answer: "No — one character each — but there's little room, so use it sparingly." },
    ],
    pillarLinks: [
      { label: "small text generator", href: "/" },
      { label: "fancy text generator", href: "/tools/fancy-text-generator" },
    ],
    relatedGuideSlugs: ["copy-paste-fonts-guide", "are-copy-paste-fonts-safe", "small-text-instagram-bio"],
  },
  {
    slug: "fonts-for-twitter-x",
    title: "Fonts & Small Text for Twitter / X",
    metaDescription:
      "How to use fonts and small text on Twitter / X — in the display name, bio, and tweets — plus what renders and what to avoid.",
    h1: "Fonts and Small Text for Twitter / X",
    dek: "Styled Unicode in an X profile and timeline, and the accessibility cost to weigh.",
    cluster: "Platform",
    lastUpdated: "2026-09-03",
    intro: [
      "X renders plain Unicode, so styled text works in the display name, bio, and posts without any font feature. Generate it with the [small text generator](/) or the [fancy text generator](/tools/fancy-text-generator).",
      "This guide covers where it works on X and the one real reason to keep it minimal there.",
    ],
    sections: [
      {
        heading: "Where styled text works on X",
        paragraphs: [
          "The display name (50 characters), the bio (160 characters), and post text all accept styled Unicode. The @handle does not — plain letters, numbers, and underscores only.",
        ],
      },
      {
        heading: "How to add it",
        paragraphs: [
          "1. Generate and copy the styled text.\n2. Display name and bio: Profile → Edit profile → paste. Post: paste into the compose box.\n3. Check it on your live profile and a posted tweet.",
        ],
      },
      {
        heading: "The accessibility cost on X",
        paragraphs: [
          "X has a large screen-reader user base and an active accessibility community, and mathematical-alphabet styles (bold, italic, script, fraktur) read very poorly — often spelled letter by letter. A styled display name means your name is spelled out every time it's read aloud. Small caps and full-width are the least bad. Consider keeping the name plain and styling a bio line instead — background in [are copy-paste fonts safe](/guides/are-copy-paste-fonts-safe).",
        ],
      },
      {
        heading: "Reliable styles",
        paragraphs: [
          "Bold, small caps, and full-width render consistently across X on web, iOS, and Android. Script and fraktur mostly work. Underline and strikethrough combining marks are inconsistent.",
        ],
      },
    ],
    faq: [
      { question: "How do I get a fancy font in my X (Twitter) name?", answer: "Generate styled Unicode, copy it, and paste it into Edit profile → Name. There's no font setting." },
      { question: "Does styled text work in tweets?", answer: "Yes, post text accepts styled Unicode. The @handle does not." },
      { question: "Why do people say not to use fancy fonts on Twitter?", answer: "Screen readers read mathematical-alphabet styles letter by letter, so a styled name is spelled out for blind users every time. It's an accessibility cost, not a platform rule." },
      { question: "Which styled text is safest on X?", answer: "Small caps and full-width, then bold. Avoid styling your display name if you can." },
    ],
    pillarLinks: [
      { label: "small text generator", href: "/" },
      { label: "fancy text generator", href: "/tools/fancy-text-generator" },
    ],
    relatedGuideSlugs: ["are-copy-paste-fonts-safe", "copy-paste-fonts-guide", "copy-paste-text-tricks-social-media-bios"],
  },
  {
    slug: "fonts-for-roblox",
    title: "Copy-Paste Fonts for Roblox & Game Usernames",
    metaDescription:
      "How to use copy-paste fonts in Roblox display names, chat, and profiles — what the moderation filter allows and what it strips.",
    h1: "Copy-Paste Fonts for Roblox and Game Names",
    dek: "Styled Unicode in Roblox, and why the filter is stricter than most apps.",
    cluster: "Platform",
    lastUpdated: "2026-09-03",
    intro: [
      "Roblox display names and profile text can take styled Unicode, generated the same way as anywhere else — the [fancy text generator](/tools/fancy-text-generator) or [small text generator](/) produce it. Roblox's text filter, though, is stricter than a typical social app.",
      "This guide covers where styled text works in Roblox and what its moderation strips.",
    ],
    sections: [
      {
        heading: "Display name vs username",
        paragraphs: [
          "Roblox's username (used to log in) is plain characters only. The display name, added later, accepts some Unicode — this is where styled names go. Display names still pass through Roblox's moderation filter, which rejects names it can't read or judges as evading a filter.",
        ],
      },
      {
        heading: "What the filter allows",
        paragraphs: [
          "Simple, readable styles — small caps and bold — pass most often. Heavily decorated styles, upside-down text, and long runs of unusual symbols are frequently blocked or auto-reverted, because Roblox targets a young audience and filters aggressively for safety. There's no published allowlist; test and expect some rejections.",
        ],
      },
      {
        heading: "In-game chat",
        paragraphs: [
          "Chat is filtered per-experience and more tightly than names, especially for accounts under 13. Styled Unicode in chat is often stripped to plain text or blocked. Don't rely on it landing.",
        ],
      },
      {
        heading: "How to try a styled display name",
        paragraphs: [
          "1. Generate a simple style (small caps or bold) and copy it.\n2. Account settings → change display name → paste.\n3. If it's rejected, simplify — fewer decorative characters, no flips — and try again. See [copy and paste fonts](/guides/copy-paste-fonts-guide) for which styles are simplest.",
        ],
      },
    ],
    faq: [
      { question: "Can I use a fancy font in my Roblox name?", answer: "In the display name, sometimes — simple styles like small caps and bold pass the filter more often than decorated ones. The login username is plain only." },
      { question: "Why does Roblox reject my styled name?", answer: "Roblox's moderation filter blocks names it can't read or treats as filter evasion. It's stricter than most apps because of its young user base." },
      { question: "Does styled text work in Roblox chat?", answer: "Usually not. Chat filtering is tighter than name filtering and often strips or blocks styled Unicode, especially for younger accounts." },
      { question: "What's the safest style to try on Roblox?", answer: "Small caps or bold — readable, minimal, most likely to pass moderation." },
    ],
    pillarLinks: [
      { label: "fancy text generator", href: "/tools/fancy-text-generator" },
      { label: "small text generator", href: "/" },
    ],
    relatedGuideSlugs: ["copy-paste-fonts-guide", "fancy-text-styles-explained", "are-copy-paste-fonts-safe"],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(guide: Guide) {
  return guide.relatedGuideSlugs
    .map((slug) => getGuide(slug))
    .filter((related): related is Guide => Boolean(related));
}

export function stripInlineLinks(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
