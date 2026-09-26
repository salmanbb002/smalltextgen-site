# Coverage QA — "vaporwave text generator"

**Entity coverage**: Tier 1 5/5 (100%), each with an attribute stated. Tier 2 7/7 (100%).
**Headings**: one H1; component H2s (Styles included / How to use / Where people use this / FAQ); H3 per use case — valid nesting.
**Answer block**: intro ¶1 first sentence answers "what does this generator do" directly.
**FAQ**: 10, direct answer first.
**Fact-check**: character mappings verified by unit tests in `lib/fonts.test.ts`; code-point ranges are Unicode-standard; history from Step 2 Wikipedia sources.
**Build**: tsc + eslint + 15 vitest + `next build` (71 static pages) green 2026-09-27.

**Flags for the user**:
- X weighted-count (full-width = 2) is from X's published twitter-text counting rules, not tested live — spot-check by pasting into the X composer.
- Floral Shoppe/Macintosh Plus date sourced from Wikipedia "Vaporwave".
