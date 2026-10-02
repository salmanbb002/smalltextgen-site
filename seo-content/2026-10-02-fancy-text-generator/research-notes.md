# Research notes: fancy text generator (Day 27, flagship rebuild of /tools/fancy-text-generator), 2026-10-02

## Step 1: Intent + SERP
- "fancy text generator" (58k, KD 59): **do**. Top: creativefabrica, gate2home, mixfont, fontcraft, loremipsum.io, texttrick, fontgenerator.art, thefancytext, fancymytext; symbol-heavy variants (openl, messletters, fancytext.net, nicknamery).
- Fan-out: what is fancy text, are they real fonts, how many styles, boxes, unchanged characters, game names, ꧁꧂ symbols/decorations, Word/Docs, accessibility, privacy, free.

## Step 2: Head entities
| Entity | sameAs | Attributes |
|---|---|---|
| Unicode | https://en.wikipedia.org/wiki/Unicode | standard; styled alphabets |
| Mathematical Alphanumeric Symbols | https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols | script/bold/italic/fraktur/double-struck/monospace |
| Enclosed Alphanumerics (+Supplement) | wiki | bubble, filled, squared |
| Halfwidth and Fullwidth Forms | wiki | vaporwave |
| Combining Diacritical Marks | wiki | Zalgo, underline, strikethrough |
| Javanese script | https://en.wikipedia.org/wiki/Javanese_script | ꧁ ꧂ are Javanese punctuation (pada) borrowed as frames |
- All style samples generated from lib/fonts.ts (29 styles incl. new bold-sans, bold-cursive, bubble-filled from Days 20/24/25).

## Step 4: Competitors (fetched)
1. mixfont.com: 210 variations; FAQ 10 (what is, real fonts, lookalikes, braille/emoji, where, every device, unchanged, box, accessible, free & private).
2. gate2home.com: how it works, boxes, screen readers; 11 style families (Popular, Bold & Italic, Script, Gothic, Bubbles & Squares, Small, Lines & Effects, Glitch, Aesthetic, Flips, Decorated 51); FAQ phone copy, usernames, free, Word/Docs.
3. fancymytext.com: 60 styles in 7 categories, PWA/offline, privacy; FAQ what is, Instagram, free, unchanged, storage, languages.
4. openl.io: blocks used, styles people love, personalize names, where (PUBG/Free Fire/Fortnite); FAQ 10 incl. game names, how many styles, tips.

## Step 6: Tiers
- T1: fancy text generator, fancy fonts/text, Unicode, copy-paste, styles (cursive/gothic/bold/bubble).
- T2: style families & their blocks, decorations/symbols (꧁꧂ ✦ ♡), Instagram/TikTok/Discord, game names + filters, usernames, boxes, unchanged chars, Word/Docs, accessibility/SEO, privacy (local), free.
- T3 parked: braille/emoji spelling/morse (not offered), PWA/offline, "3,000 styles" counts.

## Step 7: Information gain
- Honest "200+ fonts = ~20–30 real alphabets" framing + **style-family table** (family × example × Unicode source × device support), linked to every focused generator.
- **Copyable decorative symbols table** (frames, stars, hearts, crowns, dividers) — competitors hide these inside generators.
- Lead style changed to bold cursive (the look most competitor H1s show).

## Step 8: Heading map
| Level | Heading |
|---|---|
| H1 | Fancy Text Generator |
| H2 | What is fancy text? |
| H2 | What fancy text styles can you make? (table) |
| H2 | How do you add symbols and decorations to fancy text? (table) |
| H2 | Where can you use fancy text? |
| H2 | Tips for using fancy text well |
| H2 | FAQ (11) |

## Step 8e: Cannibalisation — HIGH PRIORITY FLAG
- `/guides/fancy-text-styles-explained` has title **"Fancy Text Generator: Every Copy-Paste Font Style Explained"**, the exact 58k head term, on an informational guide. Recommend retitling to e.g. "Fancy Text Styles Explained: Every Copy-Paste Font Type" (H1 likewise) so the tool page owns the head term. **Not changed** (needs user OK).
- Plan note: earmark this page for a month-2 backlink push.
