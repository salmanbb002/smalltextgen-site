# Coverage / QA: bubble + circle text (Day 20)

- Merged keyword into /tools/bubble per user decision. Title tag now includes "Circle"; H2 #1 owns "circle text".
- FAQ 5 → 11. New sections: 4 H2 + 2 H3, one table. One H1, valid nesting.
- Tier 1: 5/5 with attributes. Tier 2: 9/9.
- Competitor matrix: what-is ✔, styles ✔ (real sets only; 3D/graffiti explained as non-text), how-to ✔, where it works ✔, tips ✔, code points ✔, usernames ✔, Word ✔, commercial ✔. Skipped: print sizes/tattoos (low value, unverifiable).
- **Product change:** new `bubble-filled` style (lib/fonts.ts) + test; makes the page's "filled" claim true (it was false before) and appears in every converter list.

## Fact-check flags
- Code-point ranges: from Unicode block charts (Wikipedia block pages); verified against generated characters.
- "Unicode 6.0 (2010)" for negative circled capitals: from block history; spot-check if desired.
- Platform support for filled bubbles ("boxes on older Android/Discord/Windows") paraphrases convertcase's table; not independently tested.
