# Coverage QA — "upside down text generator"

**Entity coverage**: Tier 1: 4/4 (flip mechanism, Unicode, copy-paste, mirror/reversed
comparison — all pre-existing and correct, untouched). Tier 2: 3/3 (symmetrical letters,
riddle use case, Discord specifics) — new this round, each with a stated, verified fact.

**Competitor-heading matrix**:

| Competitor block | Covered here? |
|---|---|
| miniwebtool symmetrical-letter fact | Yes — and corrected/improved: verified against this site's actual `upsideDownMap` (l, o, s, x, z), which is more precise than miniwebtool's own list (o, x, s, z — misses l) |
| piliapp/fsymbols riddle use case | Yes — new `whereUsed` entry + FAQ |
| miniwebtool platform list | Partially — Discord specifically (matches this site's existing Discord-forward positioning); full platform list not restated since the existing FAQ already says "anywhere standard Unicode is accepted" |
| fsymbols bidirectional flip-back | **Not claimed** — this site's tool has no reverse feature; FAQ states the honest limitation instead of copying a feature this site doesn't have |
| miniwebtool named Unicode blocks | **Skipped intentionally** — more technical depth than this audience needs |

**Fact-check**: the symmetrical-letter claim was verified directly against
`lib/fonts.ts`'s `upsideDownMap` object, not just copied from a competitor — this is a
stronger source than the research pattern used on the other three keywords this round
(competitor-sourced only). Flip-back limitation and non-searchability are general, safe
claims about how Unicode indexing works.

**Intent check**: do-intent untouched; new material serves know-simple (why some letters
look unchanged) and adds one genuine new use case (riddles) with a `whereUsed` entry to
back it structurally, not just FAQ.

**E-E-A-T flags**: none — every claim in this round was either verified against the site's
own code or is uncontroversial general knowledge (search indexing, Unicode code points).

**Build note**: pure content change, same `nativeFormatting`-less field shape as the
existing `upside-down` entry — no code changes needed, just the `whereUsed` + `faq`
array edits in `lib/pillar-content.ts`.
