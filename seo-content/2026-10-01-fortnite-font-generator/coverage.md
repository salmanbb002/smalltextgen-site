# Coverage / QA — fortnite-font-generator (2026-10-01)

## Entity coverage
- **Tier 1:** 8/8 covered (100%), all with an attribute or relationship (Burbank → House Industries/logo; display name → 3–16 chars/2-week change; filter → rejects symbols/impersonation; bold → passes most often).
- **Tier 2:** 12/12 covered (100%).
- Tier 3: intentionally unused (see draft.annotated.md).

## Heading architecture
- One H1, H2 → H3 only, no skipped levels (component-fixed: Styles / How to use / Where used ×3 H3 / FAQ ×10 H3).
- Each H3 owns a distinct phrase (Epic display name / clan tag & Discord / stream titles TikTok YouTube). No overlap with Roblox/Minecraft pages.

## Answer block
- Intro paragraph 1 = 58 words (target 40–55, slightly over; it carries the 4 style examples). Doesn't restate the H1.
- Each FAQ answers in its first sentence.

## Competitor-heading matrix
| Recurring H2 | Covered? |
|---|---|
| How to use | yes (HowTo, 4 steps) |
| What are Fortnite fonts | yes (intro + FAQ 1) |
| Where to use | yes (3 blocks) |
| What font does Fortnite use | yes (intro + FAQ 2) |
| Download Burbank free | yes (FAQ 3) |
| Canva | yes (FAQ 9) |
| Change display name | yes (step 4 + FAQ 5) |
| Letters & numbers / examples chart | skipped: the live converter shows every style |
| Reliability table | partly: covered in prose (FAQ 4, step 2). A table would need a component change |
| Offline / PWA (goonlinetools) | skipped: not relevant |

## Question coverage
All fan-out questions answered except "symbols in Fortnite name" (parked as a separate symbol-intent guide) and "Fortnite font for Instagram/Facebook/WhatsApp" (generic, covered by site-wide guides).

## Fact cross-check (⚠ = needs your eye)
- 3–16 chars, 1 change / 2 weeks: Epic Help **search snippet** (page 403). ⚠ verify on epicgames.com before relying on it.
- Console same-platform shows PSN/Xbox name: secondary guides only. ⚠ hedged with "usually".
- Burbank Big Condensed Black, Tal Leming, House Industries: 2 independent snippets (fontsgeneratorpro, designyourway). Year omitted (sources conflict).
- Heading Now since Chapter 5 / late 2023: fontsgeneratorpro + designyourway + zleague. Version number omitted (conflict).
- Burbank not in Canva; Anton closest: fontsgeneratorpro only. ⚠ single source, but low risk.
- Anton / Bebas Neue on Google Fonts: true (well known).
- Bold/gothic/double-struck = 2 UTF-16 code units: Unicode fact (U+1D400 block). Whether Epic's counter counts code units vs characters is **unverified**, so the page says "may".
- "Filter rejects impersonation / look-alike characters": Epic rules snippet mentions vulgarity, and gamerevolution/copychars mention spoof blocking. ⚠ moderate confidence.

## Intent
*do* delivered (converter + 4 steps). The image/logo intent (about 1/3 of the SERP) is redirected honestly in the intro, not faked.

## Readability
About grade 7. Short sentences, no dense blocks.

## E-E-A-T
- No first-person claims written, so there's nothing to replace.
- Worth doing once yourself: paste a bold name into a real Epic account and confirm it saves. That's a genuine first-hand detail you could add.
