# Coverage QA — "roblox font generator"

**Shipped into** `lib/gallery-pages.ts` (`slug: "roblox-font-generator"`) + `app/tools/roblox-font-generator/page.tsx`. That entry is the source of truth; `draft.md` is rendered from it.

- **Entity coverage:** Tier 1 7/7 (100%), all with an attribute/relationship stated. Tier 2 11/11 (100%). Tier 3: Source Sans Pro used (FAQ 3); Montserrat/Builder Mono parked (not reader-relevant).
- **Headings:** one H1; component H2s (Styles / How to use / Where people use it / FAQ); 3 H3 use-case blocks. Valid nesting.
- **Answer block:** intro ¶1 sentence 1 answers "what does it do" (≈40 words). Every FAQ answers in sentence 1.
- **Competitor-heading matrix:** how to use ✓ · what are Roblox fonts ✓ · where to use ✓ · best/safe fonts ✓ (FAQ 4 + step 2) · filtered/why ✓ (FAQ 5, 8; depth deferred to guide) · custom fonts ✓ · official font ✓ · free ✓ (intro "nothing to install") · letters & numbers grid — skipped (converter covers it) · comparison table — replaced by per-field block + risk FAQ.
- **Question coverage:** all 12 competitor FAQ/PAA questions mapped (see research-notes FAQ source map); "Can I use fonts.gg for Roblox" skipped (brand-specific).
- **Cannibalisation:** tool = do/commercial; guide = filter explainer. Guide re-pointed to tool.
- **Build:** tsc + eslint + 15 vitest + `next build` (73 static pages) green 2026-09-28; all internal links resolve.
- **Word count:** 786. **FAQ:** 10.

## Flags for the user
1. **Display-name Unicode acceptance is unverified.** The official Roblox Help page was Cloudflare-blocked; secondary sources conflict. The copy hedges ("Roblox doesn't publish which characters it accepts"). Test a styled display name on your own account if you can.
2. **"Before Gotham, Roblox used Source Sans Pro"** is from a single secondary source (ultratextgen.com), not verified.
3. **Surrogate-pair character counting (FAQ 9)** is hedged with "can"/"may", based on how UTF-16 works, not tested against Roblox's counter.
4. Builder Sans date (7 Mar 2024) and Gotham removal (28 May 2024) are from the official devforum post. These are verified.
