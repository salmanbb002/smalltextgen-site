# Research notes: strikethrough text generator (Day 21, strengthen /tools/strikethrough), 2026-10-02

## Step 1: Intent + SERP
- Intent: **do** (convert + copy); secondary **know** (shortcut in app X).
- Top organic: codeshack.io (403 on fetch), originality.ai blog, convertcase.net, caseconverter.tools, fontgenerator.org, phrasefix, postformatter, ilovenote, utilitytools.
- Fan-out: strikethrough shortcut Google Docs / Word / Mac / Excel; WhatsApp ~text~; Discord ~~text~~; Instagram; double strikethrough; slash-through styles.

## Step 2: Head entities
| Entity | sameAs | Attributes |
|---|---|---|
| Strikethrough | https://en.wikipedia.org/wiki/Strikethrough | typographic line through text; HTML <s>/<del>; Markdown ~~ |
| Combining Diacritical Marks | https://en.wikipedia.org/wiki/Combining_Diacritical_Marks | U+0334 tilde overlay, U+0335 short stroke, U+0336 long stroke, U+0337 short solidus, U+0338 long solidus |
| Google Docs | wiki | Alt+Shift+5 / ⌘+Shift+X (search snippets: clickup, avantixlearning) |
| Microsoft Word / Excel | wiki | Word Win: no default shortcut (Ctrl+D dialog); Word Mac ⌘+Shift+X; Excel Ctrl+5 |
| WhatsApp / Slack / Messenger | wiki | ~text~ (alphr snippet); Slack Ctrl/⌘+Shift+X |
| Discord / Telegram / Markdown | wiki | ~~text~~ |

## Step 4: Competitors
1. convertcase.net: 5 styles with code points; what is Unicode strikethrough; double strikethrough (no); copy-paste; things to expect (char count, search, screen readers); platform FAQ (WhatsApp, Instagram 2,200 limit, Discord, Facebook, Snapchat); Unicode vs HTML <del>; CJK/emoji misalignment.
2. codeshack.io: **403**, substituted fontgenerator.org.
3. originality.ai: thin; when to use, how it works, benefits.
4. fontgenerator.org: about, how to, 7 style examples (slashthrough, crossthrough, tildethrough, glitchthrough).

## Step 6: Tiers
- T1: strikethrough text, combining long stroke U+0336, copy-paste, cross out.
- T2: Instagram, WhatsApp ~, Discord ~~, Google Docs shortcut, Word/Excel shortcut, Mac ⌘+Shift+X, other overlays (0334/0335/0337/0338), character count doubling, screen readers, double strikethrough, Markdown/HTML <s>/<del>, CJK/emoji.
- T3 parked: Snapchat captions, Facebook profile-name rule (unverified), "glitchthrough" (= Zalgo, linked instead).

## Step 7: Information gain
- No competitor combines the Unicode generator with a full **native-shortcut matrix** (Docs/Sheets/Word Win+Mac/Excel/WhatsApp/Slack/Discord/Telegram/Markdown/HTML) **and** a copyable 5-overlay table with code points. Committed both. Also "Unicode vs native" decision section.

## Step 8: Heading map
| Level | Heading | Owns |
|---|---|---|
| H1 | Strikethrough Text Generator | focus |
| H2 (template) | Type it natively instead (nativeFormatting cards) | strikethrough shortcut |
| H2 | How does a strikethrough text generator work? | how it works |
| H2 | What strikethrough styles can you make with Unicode? | styles / slash / wavy |
| H3 | Can you make a double strikethrough? | double strikethrough |
| H2 | Unicode strikethrough vs built-in strikethrough formatting | comparison |
| H2 | FAQ (10) | platform how-tos |

## Step 8e: Links / cannibalisation
- Links: /tools/underline, /tools/zalgo, guides underline-text-copy-paste, copy-paste-fonts-guide.
- Day 26 "text formatting cheat sheet" hub will link here; keep shortcuts here brief (cards) and let the hub own the cross-platform matrix angle.
