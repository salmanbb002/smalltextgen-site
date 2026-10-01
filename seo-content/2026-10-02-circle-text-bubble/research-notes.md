# Research notes: circle text generator → merged into /tools/bubble (Day 20), 2026-10-02

Decision (user, 2026-10-02): merge "circle text generator" into the existing bubble page instead of a new URL (same characters → cannibalisation).

## Step 1: Intent + SERP
- "circle text generator": intent **do** (convert + copy). SERP is wall-to-wall tool pages: madeintext, smalltextgenerator.dev/tools/circle-text, fancytextpaste (bubble page titled "Bubble Letters & Circle Font"), fontst.com/circle-font, fontifytext blog, italicfont, writingwithai, fontletter, fontgenerator.live, smallcaps.app/bubbles.
- "bubble text generator": convertcase, creativefabrica, font-generator.com, convertxt, bubblefontgenerator, fontb, postoria, smallcaps.app, fontsgeneratorpro.
- **SERP overlap** between the two queries (smallcaps.app/bubbles, fancytextpaste ranks for both) confirms one page can own both.
- Fan-out: circled numbers, filled/inverted bubbles, 3D/graffiti bubble letters, Instagram, Word, boxes, usernames.

## Step 2: Head entities
| Entity | sameAs | Attributes |
|---|---|---|
| Enclosed Alphanumerics | https://en.wikipedia.org/wiki/Enclosed_Alphanumerics | Ⓐ–Ⓩ U+24B6–24CF, ⓐ–ⓩ U+24D0–24E9, ①–⑳ U+2460–2473, ⓪ U+24EA, ⓿ U+24FF |
| Enclosed Alphanumeric Supplement | https://en.wikipedia.org/wiki/Enclosed_Alphanumeric_Supplement | negative circled capitals 🅐–🅩 U+1F150–1F169, Unicode 6.0 (2010) |
| Dingbats | https://en.wikipedia.org/wiki/Dingbats_(Unicode_block) | ❶–❿ U+2776–277F |
| Enclosed CJK Letters and Months | https://en.wikipedia.org/wiki/Enclosed_CJK_Letters_and_Months | ㉑–㉟ U+3251–325F, ㊱–㊿ U+32B1–32BF |

## Step 4: Competitors
1. madeintext.com/circle-text-generator: thin; 2 styles (Circled, Circled Latin = filled). No FAQ.
2. fontst.com/circle-font: what is / how to / typeface vs circled / letters & numbers (①, ⓵) / where they work (table) / tips; FAQ on free, regular, perfect O.
3. convertcase.net/bubble-text-generator: styles circled + inverted; code-point ranges; platform × outlined/filled table (Discord/LinkedIn/SMS partial for filled); FAQ boxes / all letters available / username.
4. fontsgeneratorpro.com/bubble-font-generator: 8 "styles" incl. 3D/graffiti/retro (not real Unicode sets); platform compat; design tips; FAQ free / Instagram / print / TikTok / tattoo / Word Ctrl+Shift+V / accessible / commercial.

## Step 6: Tiers
- T1: bubble text/letters, circle text/circled letters, Unicode, outlined vs filled, copy-paste.
- T2: circled numbers (①–⑳), Enclosed Alphanumerics (+Supplement), boxes/missing glyph, Instagram, TikTok, Discord, username restriction, Word Ctrl+Shift+V, 3D/graffiti bubble letters, screen readers, commercial use.
- T3 parked: tattoos, print sizes (48pt), cake toppers, retro 70s, LinkedIn row (unverified per-platform claims).
- Relationships: circle text = bubble text · outlined → covers upper/lower/digits · filled → capitals only (no lowercase in Unicode) · filled → needs newer font → boxes on old Android · generator → converts per digit (12 → ①②) · ⑩–⑳ → single chars · usernames → reject circled chars.

## Step 7: Information gain
- Competitors either list "8 styles" that aren't real Unicode sets or omit code points; none explain why filled bubbles have no lowercase or why "12" becomes ①②.
- **Original elements:** copyable 5-row character-set table with ranges + support; "circled numbers 10–20" and "no lowercase filled" explainers; accessibility note.
- **Product fix:** page previously claimed "a bold filled version" that didn't exist → added `bubble-filled` style to lib/fonts.ts (🅐–🅩, ⓿❶–❾) + unit test.

## Step 8: Heading map
| Level | Heading | Owns |
|---|---|---|
| H1 | Bubble Text Generator | bubble text generator |
| H2 | What is circle text, and is it the same as bubble text? | circle text (secondary focus) |
| H2 | Which circle and bubble letter styles can you copy? | styles / circled letters / numbers |
| H3 | Circled numbers 10 to 20 | circled numbers |
| H3 | Why filled bubbles are capitals only | filled bubble letters |
| H2 | Where do bubble and circle letters work? | platforms |
| H2 | Tips for using bubble text well | usage/accessibility |
| H2 | FAQ (11) | |

## Step 8e: Links / cannibalisation
- Bubble page → guides bubble-letters-copy-paste, bubble-text-instagram-tiktok, small-text-instagram-bio; tool adopt-me.
- `/guides/bubble-letters-copy-paste` keeps the "bubble letters (drawn)" informational angle; tool page owns "bubble/circle text generator". Title tag now carries "Circle".
