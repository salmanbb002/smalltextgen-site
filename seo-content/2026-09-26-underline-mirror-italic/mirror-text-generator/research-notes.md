# Research notes — "mirror text generator"

Site: smalltextgen.site · Target: `/tools/mirror (NEW pillar tool page + new `mirror` transform in lib/fonts.ts)` · Run: 2026-09-26 (Day 10 of the 30-day plan)

## Step 1 — Intent + SERP
Dominant intent: **do; secondary know (mirror vs backwards vs upside down, da Vinci)**.
Tool pages dominate (creativefabrica, convertcase, bug0, namecheap, wordcounter.ai, mefancy, textreverse, flipyourtext). Fan-out: "backwards text generator", "reverse text", "mirror writing", "flip text".

## Step 2 — Head entity
**Unicode** (`sameAs` https://en.wikipedia.org/wiki/Unicode) — field-based page on the same engine as prior runs.

## Steps 4–5 — Competitors (top 4 distinct domains)
| URL | Headings | Extracted facts |
|---|---|---|
| convertcase.net/mirror-text-generator | 8 question H2s: what is mirror writing / which characters can be mirrored / mirrored vs reversed / other languages | char-swap + reverse; b↔d p↔q; da Vinci; non-Latin unchanged. Reviewed Jun 2026 |
| textreverse.com/mirror-text-generator.php | What is / Fascinating facts / How to use / Uses | children & neurological mirror writing, da Vinci, Memento/Scooby-Doo, ambulance use, 3 modes |
| wordcounter.ai/mirror-text | How to use / When you need it / glyph table / accessibility / FAQ | quality tiers of mappings; boxes on old Android; SEO + screen-reader caveats; apply twice to undo |
| flipyourtext.com (sub for creativefabrica 403, namecheap 403) | Flip, mirror and reverse your text | upside down / reverse / both — thin |

## Step 6 — Entity ledger + tiers
- **Tier 1**: Mirror text / mirror writing, Horizontal flip + reversed order, Unicode look-alike characters, Copy and paste
- **Tier 2**: Backwards (reversed) text, Upside-down text, Symmetrical & unmappable letters, Leonardo da Vinci, Ambulance mirror lettering, Reading it (mirror / re-mirror), Platform support + boxes on old devices
- **Tier 3**: Children / neurological mirror writing, Films (Memento), Vertical mirror mode, Password obfuscation (rejected — bad advice)

**Relationships**:
- Mirror text —reverses→ character order AND —swaps→ each letter for flipped twin
- Backwards text —reverses→ order only
- Upside-down text —rotates→ 180°
- da Vinci —wrote notebooks in→ mirror script
- AMBULANCE —mirror-printed so→ read correctly in rear-view mirror
- Mirroring twice —restores→ order (approximate for lossy letters)

## Step 7 — Information gain
Three-way definition (mirror vs backwards vs upside-down) in the intro rather than buried in FAQ, with a link to the sister upside-down tool; exact letter lists for symmetric vs unmappable letters verified against this site's own `mirrorMap`; Word/Docs graphic-flip alternative for print use (no competitor covers).

## Step 8 — Section map (field-based page)
NEW style `mirror` in lib/fonts.ts (conservative map — only clean mirrored glyphs; f g h j y G K Q + digits unchanged) + unit test · toolPages += mirror · new pillar entry (intro, 4 steps, 3 whereUsed, 10 FAQ) · pillarNav, home focusedTools, footer link

## Step 8e — Internal links / cannibalisation
Existing `reversed` style (backwards text) has no page — mirror page covers the distinction; no cannibalisation. Sister: /tools/upside-down (linked from intro).

## FAQ source map
convertcase (what is, which chars, vs reversed, read it), wordcounter (platforms, un-flip, numbers, accessibility/SEO), textreverse (da Vinci, ambulance), original (Word/Docs)
