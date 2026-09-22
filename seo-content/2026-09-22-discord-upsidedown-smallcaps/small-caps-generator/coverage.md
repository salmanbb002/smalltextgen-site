# Coverage QA — "small caps generator"

**Entity coverage**: Tier 1: 3/3 (Small caps, Unicode, Copy-paste — pre-existing,
unchanged). Tier 2: 5/5 (CSS, Word, Google Docs, acronym use case — folded qualitatively —
digit non-conversion) — all new this round, each with a stated, sourced fact.

**Competitor-heading matrix**:

| Competitor block | Covered here? |
|---|---|
| smallcaps.app CSS `font-variant` distinction | Yes — new `nativeFormatting` entry + FAQ, extended with the "why it's lost on copy" mechanism smallcaps.app doesn't fully spell out |
| smallcaps.app digit-conversion claim | **Corrected, not copied** — verified false against this site's own `lib/fonts.ts`; shipped as an accurate FAQ instead |
| omnicalculator acronym/scholarly-title framing | Partially — folded into existing `whereUsed` tone rather than a literal new entry (see annotated notes) |
| fsymbols content-filter-bypass angle | **Skipped intentionally** — not a use case to promote |
| No competitor mentions Word's native Small Caps at all | Filled — genuine, unclaimed gap; Word shortcut + durability caveat added |

**Fact-check**: digit non-conversion is the strongest-sourced claim in this entire content
run — verified directly against the site's own `smallCaps` transform in `lib/fonts.ts`
rather than any external source. CSS `font-variant: small-caps` is a standard, well-known
property. Word's Ctrl+Shift+K shortcut carries the same caveat as prior rounds (not
independently re-fetched from Microsoft's docs). Google Docs' lack of a native small-caps
option is stated from general product knowledge, not independently re-verified by opening
Docs this round — flagged below.

**Intent check**: do-intent untouched; new material serves the know-simple gap (how do I
do this without the generator, and specifically why Word/CSS don't help everywhere) that
no competitor closes completely.

**E-E-A-T flags**:
- ⚠️ Word Ctrl+Shift+K shortcut and Google Docs' missing small-caps option — both standard/
  well-known but not independently re-verified against current Microsoft/Google product
  docs this round. Same flag pattern as the superscript/subscript round.
- ✅ Digit non-conversion — verified against actual site code, no flag needed.

**Build note**: reuses the `nativeFormatting` field and rendering block added to
`components/pillar-tool-page.tsx` for the superscript/subscript strengthen — no new code,
just data in `lib/pillar-content.ts`.
