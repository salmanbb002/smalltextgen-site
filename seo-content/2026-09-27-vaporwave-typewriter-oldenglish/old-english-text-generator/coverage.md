# Coverage QA — "old english text generator"

**Entity coverage**: Tier 1 4/4 (100%), each with an attribute stated. Tier 2 9/9 (100%).
**Headings**: one H1; component H2s (Styles included / How to use / Where people use this / FAQ); H3 per use case — valid nesting.
**Answer block**: intro ¶1 first sentence answers "what does this generator do" directly.
**FAQ**: 10, direct answer first.
**Fact-check**: character mappings verified by unit tests in `lib/fonts.test.ts`; code-point ranges are Unicode-standard; history from Step 2 Wikipedia sources.
**Build**: tsc + eslint + 15 vitest + `next build` (71 static pages) green 2026-09-27.

**Flags for the user**:
- Historical facts (Textura/Gutenberg c.1455, Maximilian I, Jan 1941 decree, Old English c.450–1150) from Wikipedia Blackletter/Fraktur/Old English — dated, not YMYL.
- Tattoo advice is general caution, not professional guidance.
