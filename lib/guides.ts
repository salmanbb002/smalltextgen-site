export type GuideFaq = { question: string; answer: string };
export type GuideSection = { heading: string; paragraphs: string[] };
export type GuideLink = { label: string; href: string };
export type GuideCluster = "A" | "B" | "C" | "D" | "Sitewide";

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
    lastUpdated: "2026-08-10",
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
    ],
    faq: [
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
    lastUpdated: "2026-08-10",
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
    ],
    faq: [
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
    lastUpdated: "2026-08-10",
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
    ],
    faq: [
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
