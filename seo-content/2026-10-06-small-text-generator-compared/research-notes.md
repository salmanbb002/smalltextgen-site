# Research notes: small text generator compared (Day 30, new /guides/small-text-generator-compared), 2026-10-06

## Step 1: Intent + SERP
- Queries searched: "best small text generator free tools compared", "small text generator alternatives", "small text generator" + style terms.
- "best … compared" / "alternatives" SERPs are noise: AI-writer roundups (ionos, eesel, originality.ai) and alternativeto lorem-ipsum pages. **No page compares small text generator tools.** The head-term SERP is all tool pages: convertcase.net, commentpicker.com, smalltextgenerator.it.com, codeshack.io, geekflare.com, wordcount.com, postiz.com, omnicalculator.com, titlecapitalize.com.
- Intent: **know / commercial investigation** (which tool), secondary **do** (make small text). Plan sheet has no volume or KD for this keyword.
- SERP features: not captured (WebSearch gives no rendered SERP). PAA proxy = the competitors' own FAQ blocks below.

## Step 2: Head entities
| Entity | sameAs | Facts used |
|---|---|---|
| Unicode | https://en.wikipedia.org/wiki/Unicode | small text = characters with own code points, not a font (Omni Calculator wording) |
| Small caps | https://en.wikipedia.org/wiki/Small_caps | only x missing (ConvertCase; matches lib/fonts.ts) |
| Superscript / Subscript | https://en.wikipedia.org/wiki/Subscript_and_superscript | superscript lacks q; subscript has 17 lowercase: a e h i j k l m n o p r s t u v x (WordCount), missing b c d f g q w y z (ConvertCase). Both match lib/fonts.ts (script-verified) |

## Step 4: Competitors fetched 2026-10-06
| Tool | URL | Styles on page | Copy | Other facts captured |
|---|---|---|---|---|
| SmallTextGen.com | smalltextgen.com/ | 6: small caps, superscript, subscript, tiny text, bubble text, fancy cursive | button per style card | "no signup", "no character limits", "entirely within your browser"; H2s: copy & paste, how to make text small, numbers, style comparison table, by platform (WhatsApp, Discord, Instagram), names & usernames; nav lists 27 other tools; 6 FAQs |
| LingoJam | lingojam.com/TinyTextGenerator | 3 | not visible | title says "three different types"; small caps "most complete"; subscript "lacking quite a few letters"; no H2s, no FAQ |
| ConvertCase | convertcase.net/small-text-generator/ | 3 | per style | favorites; 80+ tools; "Last reviewed" September 2026; ad removal via Ko-fi; 8 FAQs incl. screen reader ("modifier letter small h") |
| CommentPicker | commentpicker.com/small-text-generator.php | 3 | per style | "unlimited"; settings panel; 40+ other tools; 3 FAQs |
| WordCount | wordcount.com/small-text-generator | 3 | "Paste" / "Copy" | character counter link; "Everything runs in your browser"; accessibility section; fancy text tool = 13 styles; 4 FAQs |
| Omni Calculator | omnicalculator.com/other/small-text | 3 + capital superscripts, digits, math symbols | copy and paste | author Wojciech Sas, PhD; reviewer Steven Wooding; reload/clear buttons; 3 FAQs |
- **Fetch failures:** codeshack.io/small-text-generator → 403 (dropped, not described). smalltextgenerator.it.com/?p=52 → 404.
- Ours: 29 styles in `textStyles` (script count), 5 categories, search, category filter, saved styles in localStorage, click output to copy (components/converter.tsx).

## Step 5/6: Recurring competitor headings → tiers
- In ≥3 competitors: what is small text / how it works, the three styles, how to copy and paste, missing letters, where it works (platforms). → Tier 1.
- In 2: boxes or squares, screen readers, Discord/WhatsApp/Instagram sections, character limits, privacy (runs in browser). → Tier 2.
- In 1: numbers/math symbols, ad removal, favorites, bubble/cursive. → Tier 3 (used as per-tool differentiators).
- Relationships: Unicode —defines→ small caps/superscript/subscript characters; subscript —covers→ 17 of 26 lowercase; superscript —lacks→ q; small caps —lacks→ x; every tool —maps to→ same code points; SmallTextGen.com —offers→ 6 styles; SmallTextGen.site —offers→ 29; Omni Calculator —names→ author + reviewer; ConvertCase —last reviewed→ Sept 2026; Discord —has native→ -# subtext; usernames —reject→ Unicode styles.
- Parked: Free Fire / Adopt Me nav tools on SmallTextGen.com (other pages own those), AI text generators (wrong intent).

## Step 7: Information gain
- Nobody ranks a tool-vs-tool comparison, so the 7-row table is the original element.
- Second gain: stating plainly that output is identical across tools, so the choice is interface, not quality. No competitor says this.
- Disclosure that one of the seven is ours.

## Step 8: Heading map
| Level | Heading | Phrase owned |
|---|---|---|
| H1 | Small Text Generators Compared: Which Free Tool Is Actually Best? | small text generator (compared) |
| H2 | What is a small text generator? | what is a small text generator |
| H2 | Which small text generators did we compare? (table) | small text generator alternatives |
| H2 | Which small text generator is best for each job? + 7 H3 (one per tool) | best small text generator |
| H2 | What do all small text generators have in common? | missing letters |
| H2 | How do you choose a small text generator? (numbered list) | choose a small text generator |
| H2 | Do small text generators work on Instagram, Discord, and WhatsApp? | platform support |
| H2 | What are the limits of every small text generator? | boxes, screen readers |
| H2 | FAQ (12) | |

## Step 8e: Links + cannibalisation
- Out: / , /tools/tiny-text-generator, /tools/superscript, /tools/subscript, /guides/smallest-text-style-compared, /guides/tiny-text-discord, /guides/small-text-instagram-bio, /guides/are-copy-paste-fonts-safe, /guides/smol-text.
- In: added to relatedGuideSlugs of smallest-text-style-compared; smol-text links back.
- Cannibalisation: homepage owns "small text generator" (do intent). This page owns compared / best / alternatives only and sends tool intent to the homepage. smallest-text-style-compared compares styles, not tools.

## FAQ source map
- Competitor FAQs reused: free to use (CommentPicker), boxes or squares (SmallTextGen.com, CommentPicker), limits (SmallTextGen.com), is it a font (SmallTextGen.com), missing letters (ConvertCase, WordCount), screen readers (ConvertCase), uploaded anywhere (WordCount).
- Added: best tool, same output across tools, best for Discord, most styles, usernames.

## Internal linking pass (2026-10-06)
- Inline links in: homepage ("How does small text work?"), how-to-make-tiny-text, smallest-text-style-compared, are-copy-paste-fonts-safe, copy-paste-fonts-guide, small-caps-copy-paste.
- Related-guide cards: homepage, tiny text generator, small caps + subscript tool pages, plus the guides above. Sitewide footer link added.
- Out (added): /tools/fancy-text-generator.
