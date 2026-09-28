# Coverage QA — "minecraft font generator"

**Shipped into** `lib/gallery-pages.ts` (`slug: "minecraft-font-generator"`) + `app/tools/minecraft-font-generator/page.tsx`. `draft.md` is rendered from that entry.

- **Entity coverage:** Tier 1 7/7 (100%), each with an attribute/relationship. Tier 2 12/12 (100%). Tier 3: none used. Standard Galactic Alphabet is parked as a future keyword.
- **Headings:** one H1; component H2s; 3 H3 blocks (Java / Bedrock / MOTD). Valid nesting.
- **Answer block:** intro ¶1 sentence 1 answers the query (≈40 words); ¶2 opens with the intent caveat ("It can't recreate the blocky Minecraft logo").
- **Competitor-heading matrix:** what is ✓ · how to use ✓ · fonts used (Minecrafter/Minecraftia) ✓ · where to use ✓ (in-game, not thumbnails) · download as image ✗. We intentionally skip this and send those readers to image generators (can't be done with Unicode) · marketing/CTR/merch ✗ intentionally skipped (image intent) · trademark note — skipped (we don't reproduce the logo).
- **Question coverage:** redstaglabs FAQ "download fonts?" → intro + FAQ 2; "work on mobile?" → implied (Unicode), not a separate FAQ; "image download / thumbnails / merch" → intentionally out of scope.
- **Build:** tsc + eslint + 15 vitest + `next build` (73 pages) green 2026-09-28; links resolve.
- **Word count:** 866. **FAQ:** 10.

## Flags for the user
1. **Intent mismatch:** most of the SERP is image/pixel-logo generators. A Unicode page may rank but convert fewer of those visitors. The page says so upfront. Adding a real PNG pixel-text renderer would be a separate build decision.
2. **Test in-game before relying on it:** Java rendering of math-alphabet styles (bold/cursive via Unifont) and Bedrock rendering of the BMP styles aren't tested in a real client. They come from minecraft.wiki's Font page ("Bedrock Edition does not support any character above U+FFFF"; Unifont fallback in Java).
3. Username (3–16), chat (256) and anvil (50) limits come from search snippets and minecraft.wiki references, not a direct fetch. These are long-standing values.
4. MOTD 59-char warning and § codes come from minecraft.wiki. These are verified.
