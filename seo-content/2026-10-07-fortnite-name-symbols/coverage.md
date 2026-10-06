# Coverage / QA: Fortnite Name Symbols (`/guides/fortnite-name-symbols`)

**Words:** ~1,780 · **FAQ:** 10 · **Build:** typecheck + lint + 19 tests + `next build` (81 pages) green, 2026-10-07 · JSON-LD live: Article, FAQPage, BreadcrumbList

## Entity coverage
- **Tier 1:** 10/10 (100%), all with an attribute stated (display name → 3–16 chars, two-week cooldown; filter → strips emoji, rejects blank names; consoles → PSN/gamertag shown).
- **Tier 2:** 15/15 (100%).
- **Tier 3:** 3/9 used (BMP/code units, Javanese wings, hieroglyph wings); the rest are parked with reasons in the annotated draft.

## Heading architecture
- 1 H1, 8 content H2s + FAQ, 6 H3s, all nested under H2s. No skipped levels. ✔
- Each H2 targets its own sub-intent (allowed symbols / how to add / rejected / 16-char counting / consoles / name patterns / safety). The H3s cover ツ meaning, sweaty symbols, and 4 rejection causes. ✔
- Font styling is deliberately excluded and handed to `/tools/fortnite-font-generator`, keeping one macro context.

## Answer blocks
- Intro answer = 49 words, standalone. ✔
- All question H2s and H3s answer in their first sentence. ✔
- *Do* intent → 6-step numbered list (rendered as a "1.\n2." paragraph, the same pattern as the other guides). The guide template doesn't emit HowTo, so `schema.jsonld` includes an optional HowTo node.

## Competitor-heading matrix
| Competitor H2 | Covered? |
|---|---|
| What to know before / rules (3/3) | Yes: intro + rejection H2 (Epic's official rules quoted from help snippets) |
| Step-by-step (2/3) | Yes |
| Best symbols / symbol lists (3/3) | Yes: reliability table with code points |
| Platform notes (1/3) | Yes: console H2 |
| Why not working (1/3) + common mistakes (1/3) | Yes: rejection H2 + cooldown H3 + safety H2 |
| Ready-made names (3/3) | Yes: pattern table |
| Invisible character (1/3) | Yes: table row + FAQ (answered conservatively) |

## Question coverage
All 10 competitor FAQs + 8 fan-out queries are mapped. **Unanswered: none.**

## Fact cross-check
| Claim | Source | Status |
|---|---|---|
| Display name 3–16 chars; change once every two weeks; lock icon/info icon | epicgames.com help (search snippets; direct fetch 403) | ✔ official, via snippet |
| Rules: no vulgarity, hate speech, Epic employee/product/service/character references, private info | epicgames.com help snippet | ✔ official, via snippet |
| Console players see PSN/Xbox names | Epic help article title + gameluster | ✔ |
| Colour emoji stripped; blank/invisible names rejected | copychars (Verified June 2026) | ⚠ third-party |
| "Usually works" symbol sets | ≥2 of copychars / vibesymbols / gameluster lists | ⚠ third-party, date-stamped Oct 2026 |
| Code points + UTF-16 counts | Python `unicodedata` + computed | ✔ |
| ⚡ default emoji presentation | Unicode emoji data (U+26A1 Emoji_Presentation=Yes) | ✔ |
| Rejected attempt doesn't start cooldown | gameluster "common mistakes" | ⚠ hedged as "player reports" |
| **PSN/Xbox: first change free, then ~$10** | gameluster only | ⚠ **single source, date-stamped. Check before publishing** |
| ツ = katakana tsu, shruggie | Wikipedia via search result | ✔ |
| Switch players see the Epic name | gameluster platform table | ⚠ single source |

## Intent check
Copy + "which work" + "how to add" are all served above the fold-ish: the answer block, then the table. ✔

## Readability
Average sentence ≈13 words, longest ≈36. About grade 7. The code-point column is technical, but it's isolated in the table. ✔

## E-E-A-T flags (need you)
- The "Usually works" statuses are aggregated from player lists, not tested by us. **Ideally, test 3–4 symbols on a real Epic account** and note it on the page. That would be genuine first-hand evidence no competitor has.
- No first-person claims were written.
- `speakable` selector is a `TODO:` in schema.jsonld.

## Cannibalisation
None. `/tools/fortnite-font-generator` now links here (where-used blurb + related guides). The CSV row is added with that note.
