# Coverage QA — "mirror text generator"

**Entity coverage**: Tier 1 4/4 (100%), each with an attribute stated. Tier 2 7/7 (100%).
**Heading architecture**: one H1 (from `h1`), fixed H2s from the pillar component (How to use / Where people use this / Type it natively / FAQ), H3s per whereUsed/native item — valid nesting.
**Answer block**: intro paragraph 1 answers "what does this do" in its first sentence.
**FAQ**: 10 questions, each answer leads with a direct statement.
**Fact-check**: character mappings verified against `lib/fonts.ts` (unit tests in `lib/fonts.test.ts`); code points (U+0332/U+0333/U+210E/U+1D400–U+1D7FF) are Unicode-standard facts; shortcuts are standard app shortcuts.
**Build**: tsc + eslint + 12 vitest tests + `next build` (68 static pages) green 2026-09-26.

**Flags for the user**:
- creativefabrica.com and namecheap.com returned 403 — substituted flipyourtext.com.
- da Vinci motive stated as debated (left-handedness/smudging is the common explanation, not settled).
- Glyph support: ꙅ (U+A645), ꟻ, ꟼ may render as boxes on older Android — disclosed in FAQ.
