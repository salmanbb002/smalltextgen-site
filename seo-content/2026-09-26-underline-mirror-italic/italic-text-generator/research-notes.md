# Research notes — "italic text generator"

Site: smalltextgen.site · Target: `/tools/italic (NEW pillar tool page; `italic` style already existed in lib/fonts.ts)` · Run: 2026-09-26 (Day 11 of the 30-day plan)

## Step 1 — Intent + SERP
Dominant intent: **do; secondary know-simple (how it works, where it works)**.
Tool pages only (creativefabrica, namecheap, pixelied, capitalizemytitle, glyphy, caseconverter, phrasefix, fontgen, fontb). Fan-out: "italic font copy paste", "italics for instagram", "how to italicize on whatsapp", "bold italic generator".

## Step 2 — Head entity
**Unicode** (`sameAs` https://en.wikipedia.org/wiki/Unicode) — field-based page on the same engine as prior runs.

## Steps 4–5 — Competitors (top 4 distinct domains)
| URL | Headings | Extracted facts |
|---|---|---|
| capitalizemytitle.com/italic-text-generator | How to post italic on social / What is italic text / Where can you post | Mathematical Alphanumeric Symbols block; style list incl. bold italic, sans/serif |
| caseconverter.tools/italic-text-generator | Features / How it works / How to use / FB, IG, Twitter sections / FAQ | "over 100,000 characters"; 6 styles; uses: emphasis, titles, foreign words |
| phrasefix.com/tools/italic | Italic Text Generator | example sentence; IG/FB/WhatsApp/LinkedIn/X/Pinterest |
| fontb.com/font-generator/italic | Italic font styles for every platform / FAQ | 50+ styles; Math Alphanumeric block; uses: quotes, titles, foreign words, thoughts; business use |

## Step 6 — Entity ledger + tiers
- **Tier 1**: Italic text generator, Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF), Unicode italic characters, Copy and paste
- **Tier 2**: Instagram / Facebook / X / LinkedIn / WhatsApp, Bold italic, Italic vs cursive, Uses: titles, quotes, foreign words, emphasis, Native italics (WhatsApp _x_, Discord *x*, Ctrl+I, <em>), Accessibility / searchability
- **Tier 3**: Sans-serif italic variants, "50+ styles" counts, File import / counters

**Relationships**:
- Generator —maps→ a–z/A–Z to Mathematical Italic (U+1D434…)
- Italic small h —absent; replaced by→ ℎ Planck constant U+210E
- Math Alphanumeric block —has no→ italic digits
- WhatsApp —italicises→ _text_ natively
- Italic —differs from→ cursive (slanted vs handwritten script)

## Step 7 — Information gain
Two facts no competitor states, both verified against this site's own `italic` map: the h → ℎ (Planck constant, U+210E) substitution and the absence of italic digits. Plus native-formatting block and an italic-vs-cursive distinction linking to the cursive pillar.

## Step 8 — Section map (field-based page)
toolPages += italic (style already existed) · new pillar entry (intro, 4 steps, 3 whereUsed, 4 nativeFormatting, 10 FAQ) · pillarNav, home focusedTools, footer link · unit test for ℎ

## Step 8e — Internal links / cannibalisation
None — no existing italic page or guide. Watch /tools/cursive for overlap on "italic cursive" queries; the two pages link to each other.

## FAQ source map
fontb (how it works, uses, bold-italic combo, platforms), caseconverter (social use, common uses), original (ℎ, digits, WhatsApp native, accessibility, search, italic vs cursive)
