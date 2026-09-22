# Research notes — "subscript generator"

Site: smalltextgen.site · Target page: `/tools/subscript` (strengthen existing, per
`smalltextgen-30-day-blog-plan.csv` Day 5 — flagged as the site's best-impression page in
GSC already, so this is a push-further pass, not a rescue).

## Step 1 — Intent + SERP

Dominant intent: **do** (convert now), sub-intent **know-simple** (what subscript is /
where it's used). Same shape as superscript — informational-utility SERP, no ads.

Top organic pages:

| Domain | Title | Type | Notes |
|---|---|---|---|
| convertcase.net | "Subscript Generator H₂O \| Small Lowered Text" | tool page | Reference chart, "last reviewed June 2026" |
| lingojam.com | "Subscript Generator ― LingoJam" | tool page (minimal) | Specific fact: substitutes "w" with two subscript "v" characters — no other competitor states this |
| caseconverter.tools | — | **404, page removed** — substituted next distinct domain |
| madeintext.com | "Subscript Generator" | tool page (thin) | No FAQ, no chemistry examples despite being the obvious use case |
| unicodestyle.com | "Subscript Generator - [Copy and Paste]" | tool page, very thorough | 7-Q FAQ, covers Word/Excel/Docs/HTML/LaTeX, audience segments, privacy claim |

**Query fan-out**: how to type subscript in Word / Google Docs / Excel, HTML `<sub>` tag,
LaTeX subscript syntax, subscript vs superscript, which letters have no subscript form.

## Step 2 — Head-entity research

Same two head entities as the superscript keyword (shared topic pair):
- **Unicode** — `sameAs` https://en.wikipedia.org/wiki/Unicode. Subscript characters live
  in the same **Superscripts and Subscripts block (U+2080–U+209C)** plus a handful in
  Latin-1 Supplement/Phonetic Extensions — same structural reason coverage is incomplete.
- **Subscript and superscript** — `sameAs`
  https://en.wikipedia.org/wiki/Subscript_and_superscript. Subscript = characters set below
  the baseline; used for chemical formulas and indexed variables.

## Steps 4–5 — Competitor heading/entity extraction

**convertcase.net**: How to Make Subscript Text · How does it work? · What can I use
subscript for? (chemical formulas H₂O/CO₂/C₆H₁₂O₆, math/indices x₁/log₂, isotopes,
footnotes, social branding) · phone typing · **why don't all letters convert — names the
exact missing letters: c, d, f, g, w, y, z** · where it works (Instagram…Word/spreadsheets)
· subscript vs superscript. — **16 terms**.

**lingojam.com**: subscript, Unicode limitation, **"w" substituted with two subscript "v"
characters** (unique, specific, verifiable fact — no one else states this), platform
compatibility, superscript (related tool). — **6 terms**.

**madeintext.com**: subscript, Unicode symbols, browser support, Facebook/Twitter/
Instagram, profile customization. — **5 terms**, no chemistry/math content at all despite
chemistry being the single biggest reason people search this term — a real gap.

**unicodestyle.com** (most complete): subscript, chemistry (H₂O, CO₂, O₂), math indices
(x₁, x₂, aₙ, log₁₀), Word, Excel, Google Docs, HTML `<sub>` tag, **LaTeX**, Discord, Reddit,
audience segments (students, chemists, developers, researchers), download-as-file feature,
no-storage/privacy claim, subscript vs superscript comparison. — **26 terms**, 7-Q FAQ.

## Step 6 — Entity ledger + tiers

Full ledger in `entities.json`. Summary:

- **Tier 1**: Subscript, Unicode, Chemical formula notation (H₂O/CO₂-style), Copy-paste,
  Superscript (comparison entity, appears in all 4).
- **Tier 2**: Mathematical index notation (x₁, aₙ, log), Microsoft Word, Google Docs,
  Excel, HTML `<sub>` tag, missing-letter list (c, d, f, g, w, y, z).
- **Tier 3**: LaTeX, the "w → double-v" substitution quirk, mobile typing, download-as-file,
  no-storage/privacy claim, audience-segment framing (students/chemists/developers).

**Relationships**:
- Unicode —assigns— subscript code points (block U+2080–209C, incomplete for c, d, f, g,
  w, y, z)
- Subscript generator —substitutes— a Unicode subscript glyph for each typed character
- Subscript —used for— chemical formulas (H₂O, CO₂, C₆H₁₂O₆), indexed math variables
  (x₁, x₂, aₙ, logₙ)
- Microsoft Word —applies subscript via— Ctrl+= (Windows) / ⌘+= (Mac)
- Google Docs —applies subscript via— Ctrl+, / ⌘+,
- HTML —renders subscript via— the `<sub>` tag
- Superscript —is the inverse of— subscript (above vs below the baseline)
- Unicode —has no subscript form for— the letters c, d, f, g, w, y, z; the generator
  substitutes two subscript "v" characters as the nearest approximation for "w"

**Dedupe log**: "isotopes" (convertcase) folded into "chemical formulas" — isotope mass
numbers are actually a superscript convention, not subscript, so repeating it here would
be a factual error; parked with that correction noted rather than carried over blindly.
Audience-segment framing (students/chemists/developers/researchers, from unicodestyle)
parked as a tone note, not literal copy — this site's existing voice speaks to the use case
directly rather than naming a persona. LaTeX parked as tier 3 — real but narrow audience
overlap with this site's existing Discord/Instagram-leaning user base; one FAQ line is
enough, not a full section.

## Step 7 — Information-gain pass

1. **No competitor states the missing-letter list *and* the w-substitution workaround
   together** — convertcase has the list, lingojam has the workaround, nobody combines
   them into one precise, checkable answer. That's the single best gap-fill available.
2. **madeintext, the thinnest competitor, has zero chemistry content** on a keyword whose
   #1 real-world use is chemistry formulas — confirms chemistry-first framing is the right
   call, which the existing site copy already does correctly.
3. **Only unicodestyle has a Word/Excel/Docs/HTML shortcut reference**, and it's prose, not
   a scannable list. The existing site FAQ doesn't have one at all (same gap identified on
   the superscript keyword — mirrored fix here for consistency between the two tool pages).
4. **Nobody explains that subscript's Unicode block runs U+2080–209C** — a small, concrete,
   sourceable detail this site can state precisely where competitors gesture vaguely.

**Information-gain element committed to**: the same **"Type it natively" shortcut
reference** pattern as the superscript page (Word, Google Docs, Excel, HTML `<sub>`) — kept
consistent across both tool pages — plus a single new FAQ entry stating the missing-letter
list and the w-substitution fact together, precisely.

## Step 8 — Heading / section map

Same field-based structure as `/tools/superscript`:

| Block | Focus/LSI phrase | Question it answers | Tier-1/2 carried |
|---|---|---|---|
| `intro` (existing, keep) | subscript generator, Unicode, chemistry formulas | What does this tool do? | Subscript, Unicode, Chemical formula |
| `howToSteps` (existing, keep) | copy and paste | How do I use it? | Copy-paste |
| `whereUsed` — **expand** | math indices, footnotes, gaming names | Where do I use subscript? | Chemical formula, math index |
| **NEW: "Type subscript natively"** | Word, Google Docs, Excel, HTML | How do I do this without the generator? | Word, Google Docs, HTML `<sub>` |
| `faq` — **expand 5 → 10** | missing letters, w-substitution, native shortcuts | assorted long-tail | Missing-letter list, Excel/Word/Docs |

Internal-link plan: keep existing links to `/tools/superscript` and
`/guides/subscript-vs-superscript`; add one line to `/guides/subscript-numbers-chemistry`
from the expanded chemistry FAQ answer, and one to
`/guides/superscript-subscript-character-set` from the new missing-letters FAQ. No
cannibalisation — same reasoning as the superscript page; deep-dive guides keep their
angles, tool page gets thicker.

## Fact-check sources
- Unicode Subscripts block (U+2080–U+209C): Unicode Consortium chart / Wikipedia
  "Subscript and superscript".
- Missing subscript letters (c, d, f, g, w, y, z): matches convertcase.net's stated list —
  cross-checked against the Unicode subscript/superscript block chart, which indeed has no
  code points for those seven lowercase letters.
- "w" substituted with two subscript "v" — unique to lingojam.com; a real, commonly-used
  approximation (ᵥᵥ) since no single-character subscript w exists, not independently
  re-verified against a second source this round — flagged in coverage.md.
- Word subscript shortcut (Ctrl+= / ⌘+=), Google Docs (Ctrl+, / ⌘+,): standard Office/Docs
  defaults, consistent with the shortcut pattern already fact-checked on the superscript
  keyword (same apps, complementary shortcut).
