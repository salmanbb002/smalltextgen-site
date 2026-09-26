# Coverage QA — "underline text generator"

**Entity coverage**: Tier 1 4/4 (100%), each with an attribute stated. Tier 2 6/6 (100%).
**Heading architecture**: one H1 (from `h1`), fixed H2s from the pillar component (How to use / Where people use this / Type it natively / FAQ), H3s per whereUsed/native item — valid nesting.
**Answer block**: intro paragraph 1 answers "what does this do" in its first sentence.
**FAQ**: 10 questions, each answer leads with a direct statement.
**Fact-check**: character mappings verified against `lib/fonts.ts` (unit tests in `lib/fonts.test.ts`); code points (U+0332/U+0333/U+210E/U+1D400–U+1D7FF) are Unicode-standard facts; shortcuts are standard app shortcuts.
**Build**: tsc + eslint + 12 vitest tests + `next build` (68 static pages) green 2026-09-26.

**Flags for the user**:
- Word Ctrl+Shift+D double-underline is Windows Word; Mac shortcut differs (⌘+Shift+D) — stated as Windows only.
- Glyphy "29+ styles" not matched — deliberate; site engine has one underline style. Adding U+0333 double underline as a new style is a possible later upgrade.
