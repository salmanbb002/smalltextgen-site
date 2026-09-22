# Research notes — "superscript generator"

Site: smalltextgen.site · Target page: `/tools/superscript` (strengthen existing, per
`smalltextgen-30-day-blog-plan.csv` Day 4). This is an on-page strengthen, not a new URL —
output is written so it can be merged into the `superscript` entry in `lib/pillar-content.ts`.

## Step 1 — Intent + SERP

Dominant intent: **do** (convert text now) with a **know-simple** sub-intent (what
superscript is / how to type it in Word etc.). Buy intent: none — no ads/commercial
results, fully informational/utility SERP.

Top organic pages found (skipping the tool's own SERP position):

| Domain | Title | Type | Notes |
|---|---|---|---|
| convertcase.net | "Superscript Generator \| Small Raised Text" | tool page | Reference chart, "last reviewed June 2026" |
| lingojam.com | "Superscript Generator ― LingoJam" | tool page (minimal) | No headings, mentions Reddit `x^2` + HTML `<sup>` |
| namecheap.com | "Superscript Generator ᵃʷᵉˢᵒᵐᵉꜝ" | tool page | **403 blocked** — substituted next distinct domain |
| madeintext.com | "Superscript Generator" | tool page (thin) | No FAQ, no math/chemistry examples |
| caseconverter.tools | "Superscript Generator ᶜᵒᵖʸ ᵖᵃˢᵗᵉ" | tool page | Most complete: platform shortcuts table + 6-Q FAQ |

**SERP features**: no featured snippet observed, no PAA box captured directly in the tool
SERP (Google's own snippet layer wasn't visible via WebSearch), no knowledge panel. A
secondary search for "how to type superscript text" surfaced a **How Do I Do X** cluster
(Microsoft Support pages, Omnicalculator, Lenovo glossary) — i.e. a real informational
fan-out sitting next to the tool intent.

**Query fan-out** (from the secondary search + related-tools links on competitor pages):
- How to superscript in Word (Ctrl+Shift+= / ⌘+Shift+=)
- How to superscript in Google Docs (Ctrl+. / ⌘+.)
- How to superscript in Excel / PowerPoint
- HTML `<sup>` tag
- Reddit/markdown `x^2` caret syntax
- Difference between superscript and subscript
- Mobile / phone superscript (Gboard, iOS — no native support)

## Step 2 — Head-entity research

- **Unicode** — canonical name "Unicode"; type: Standard/Concept; `sameAs`:
  https://en.wikipedia.org/wiki/Unicode. Attributes: maintained by the Unicode Consortium;
  assigns a fixed code point to characters across scripts; superscript/subscript digits and
  letters live mainly in the **Superscripts and Subscripts block (U+2070–U+209F)**, with
  additional letters scattered across Latin-1 Supplement and Phonetic Extensions — which is
  *why* coverage is uneven (this is the real, sourceable reason competitors gesture at but
  don't explain).
- **Subscript and superscript** (typography) — canonical name "Subscript and superscript";
  type: Concept; `sameAs`: https://en.wikipedia.org/wiki/Subscript_and_superscript.
  Attributes: superscript = characters set above the baseline; used for exponents,
  ordinals, footnote markers; subscript = set below the baseline, used for chemical
  formulas and indexed variables.

## Steps 4–5 — Competitor heading/entity extraction

**convertcase.net** (H3s): How to Make Superscript Text · How does the Superscript
Generator work? · What can I use superscript text for? (math/exponents, ordinals,
footnotes/citations, trademark/copyright, social media) · How do I type superscript on my
phone? (Gboard/iOS) · Why don't all letters convert? · Where does superscript work?
(Instagram, Facebook, X, TikTok, Discord, WhatsApp, email, Docs, Word, spreadsheets) ·
superscript vs subscript. — **14 terms**: Unicode, superscript, exponent, ordinal,
footnote, citation, trademark, copyright symbol, Gboard, iOS, Discord, WhatsApp, Google
Docs, Microsoft Word.

**lingojam.com** (no headings, single block): superscript, Unicode, "i" and "q" have no
superscript form (nearest-match substitution), Reddit `x^2` syntax, HTML `<sup>` tag,
subscript generator (related), smalltext.io (related). — **7 terms**.

**madeintext.com** (H2/H3, thin): superscript, Unicode symbols, browser support, Facebook,
Twitter, Instagram, profile/bio. — **7 terms**, no math/chemistry/footnote content at all —
this is a coverage gap the info-gain pass should exploit.

**caseconverter.tools** (H2s): What Are Superscript and Subscript? · What Are the Uses? ·
How to Use the Tool (5 steps) · Platform Shortcuts (Word/Docs/macOS/Windows/Mobile) ·
Examples (1¹2²3³, ordinals, algebra x¹x²x³, science 10⁻³m/cm²/m³, E=mc²) · Tips · FAQ (6
Qs). — **22 terms**: superscript, subscript, ordinal, exponent, footnote, chemical
notation (Cl⁻, Na⁺), trademark, Word, Google Docs, macOS, Windows, mobile, Ctrl+Shift+=,
Ctrl+., algebra, unit notation (m⁻¹, R²), Reddit.

## Step 6 — Entity ledger + tiers

See `entities.json`. Summary:

- **Tier 1** (core — in ≥3 competitors or the keyword itself): Superscript, Unicode,
  Exponent/math notation, Copy-paste (the mechanic itself), Subscript (as the comparison
  entity every competitor eventually invokes).
- **Tier 2**: Ordinal numbers, Footnote/citation marker, Trademark/copyright symbol,
  Microsoft Word, Google Docs, Chemical/ionic notation (Na⁺, Cl⁻), Discord.
- **Tier 3**: Gboard/iOS mobile limitation, Reddit caret syntax, HTML `<sup>` tag,
  Excel, PowerPoint, macOS shortcut variant, WhatsApp/Facebook/TikTok/X platform list.

**Relationships**:
- Unicode —assigns— superscript/subscript code points (block U+2070–209F + scattered
  letters)
- Superscript generator —substitutes— Unicode superscript glyph *for* each typed character
  (not a font/style change)
- Superscript —used for— exponents (x², 10⁶), ordinals (1ˢᵗ), footnotes (¹), trademark
  marks (™)
- Subscript —used for— chemical formulas (H₂O), indexed variables (xₙ)
- Microsoft Word —applies superscript via— Ctrl+Shift+= (Win) / ⌘+Shift+= (Mac) as a real
  text style, not a substituted character
- Google Docs —applies superscript via— Ctrl+. / ⌘+.
- HTML —renders superscript via— the `<sup>` tag
- Unicode superscript coverage —is complete for— digits 0-9, **incomplete for** capital
  letters and "i"/"q" specifically (lingojam's specific gap, worth stating precisely rather
  than the vague "some letters" every competitor uses)

**Dedupe log**: "browser support" (madeintext) folded into the existing site FAQ answer
("Does superscript work in Word, Google Docs, and Discord?"). "smalltext.io" (lingojam's
related-tool link) parked — competitor's own internal link, not relevant to this site.
Platform list (Facebook/Twitter/TikTok/WhatsApp) collapsed to "social & messaging apps"
in prose rather than repeated as a bare list — already covered qualitatively in the
existing `whereUsed` field.

## Step 7 — Information-gain pass

What all 4 miss or get thin:
1. **None state *why* coverage is uneven** beyond "Unicode doesn't have it for every
   letter" — the real reason (superscript characters are scattered across multiple blocks,
   not one contiguous range, so coverage was never designed to be complete) is missing
   everywhere and is a genuine, checkable fact worth adding.
2. **Only caseconverter.tools has a native-formatting shortcut table**, and it omits Excel
   and PowerPoint entirely. The existing site FAQ mentions Word/Docs only in passing
   ("Does superscript work in Word, Google Docs, and Discord?") without giving the actual
   shortcut — that's a direct, low-effort gap to close.
3. **lingojam is the only page that names the exact broken characters** ("i" and "q") —
   worth folding into this site's existing "why don't all letters convert" FAQ answer with
   that same precision instead of the vaguer "most lowercase letters."
4. **No competitor cross-links superscript and subscript as a genuine pair with worked
   chemistry + math examples side by side** — this site already does that structurally
   (separate tools + a "subscript vs superscript" guide), which is a real structural
   advantage to lean into rather than restate.

**Information-gain element committed to**: a **"Type it natively" shortcut reference**
(Word, Google Docs, Excel, PowerPoint, HTML `<sup>`) — nothing competitor pages currently
do completely — plus the precise "i and q have no Unicode superscript form" fact folded
into the existing FAQ.

## Step 8 — Heading / section map

This maps to the site's existing `PillarContent` fields, not a fresh page, so "headings"
below are the content blocks, in the order they render on `/tools/superscript`:

| Block | Focus/LSI phrase | Question it answers | Tier-1/2 carried |
|---|---|---|---|
| `intro` (existing, keep) | superscript generator, Unicode | What does this tool do? | Superscript, Unicode, Subscript (cross-link) |
| `howToSteps` (existing, keep) | copy and paste | How do I use it? | Copy-paste |
| `whereUsed` — **expand** | math/science, ordinals, footnotes, Discord | Where do I actually use superscript? | Exponent, ordinal, footnote, Discord |
| **NEW: "Type superscript natively"** | Word, Google Docs, Excel, PowerPoint, HTML | How do I do this without a generator? | Word, Google Docs, HTML `<sup>` |
| `faq` — **expand 5 → 10** | trademark, chemical/ionic notation, i/q gap, native shortcuts | assorted long-tail | Trademark, chemical notation, Word, Google Docs |

Internal-link plan: keep existing links to `/tools/subscript` and
`/guides/subscript-vs-superscript`; add one line pointing to
`/guides/superscript-numbers-exponents` from the new shortcut block (math use case) and
`/guides/superscript-subscript-character-set` from the FAQ (full character reference).
No cannibalisation risk — those guides own the deep-dive angles (Discord, exponents,
character set); this content stays at the tool-page level and simply gets thicker.

## Fact-check sources
- Unicode Superscripts and Subscripts block (U+2070–U+209F): Unicode Consortium chart /
  Wikipedia "Subscript and superscript".
- Word superscript shortcut (Ctrl+Shift+= Windows, ⌘+Shift+= Mac): matches
  caseconverter.tools and Microsoft's own documented default shortcut.
- Google Docs shortcut (Ctrl+. / ⌘+.): matches caseconverter.tools and Microsoft-support
  search result cluster.
- Excel superscript: done via Format Cells → Font → Superscript (no default keyboard
  shortcut) — not on any competitor page; added here as the genuine gap-fill.
- PowerPoint: Ctrl+Shift+= same as Word (shares the Office formatting engine) — not on any
  competitor page.
