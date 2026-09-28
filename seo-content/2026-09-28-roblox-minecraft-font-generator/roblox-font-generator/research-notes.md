# Research notes — "roblox font generator" (Day 15, 2026-09-28)

## Step 1 — Intent + SERP
- **Intent:** *do* (dominant) — generate and copy styled text for Roblox; secondary *know* ("what font does Roblox use", "can I use custom fonts").
- **Vol / KD:** 1,300 / 0 (30-day plan).
- **SERP (WebSearch, US):** textstudio.com/s/roblox (image effects), textstudio logo, fontcraft.com/roblox-fonts, capitalizemytitle.com/roblox-fonts, pinterest, fontmeme old-roblox-font (image/download), fontspace roblox category, fonts.gg/roblox, YouTube "How to get the Roblox font", onlinefontsgenerator.com/roblox-font-generator.
- **Mixed SERP:** Unicode copy-paste tools (fontcraft, capitalizemytitle, fonts.gg, onlinefontsgenerator) vs image/logo generators (textstudio, fontmeme). Unicode copy-paste = majority → gallery tool page is the correct format.
- **SERP features:** video result (YouTube), image/Pinterest result. No featured snippet observed in tool output.
- **Fan-out (from competitor FAQs/H2s):** what font does Roblox use · can you use custom fonts in Roblox · why are fonts filtered · do fonts work on mobile · which fonts work for usernames without getting filtered · is it allowed.

## Step 2 — Head entities
| Entity | Type | sameAs | Attributes used |
|---|---|---|---|
| Roblox | VideoGame / platform | https://en.wikipedia.org/wiki/Roblox | Roblox Corporation; released 1 Sep 2006; PC/mobile/Xbox/PlayStation/Quest |
| Builder Sans | Typeface | unlinked (devforum announcement) | Roblox in-house; announced 7 Mar 2024; Builder family = Sans / Extended / Mono |
| Gotham | Typeface | https://en.wikipedia.org/wiki/Gotham_(typeface) | deprecated; removed from Roblox 28 May 2024; Montserrat suggested replacement |
| Unicode | Standard | https://en.wikipedia.org/wiki/Unicode | styled letters = Mathematical Alphanumeric Symbols (above U+FFFF, surrogate pairs) |
| Display name | Concept | unlinked | 3–20 chars, change once / 7 days (Roblox Help via search snippet; page itself Cloudflare-blocked) |
| Username | Concept | unlinked | 3–20 chars, letters/numbers + one underscore not first/last (Roblox Wiki via search snippet) |

Sources: devforum.roblox.com/t/introducing-builder-font-deprecating-gotham-and-arial/2868222 (fetched); en.wikipedia.org/wiki/Roblox (fetched). **Blocked:** en.help.roblox.com (403 / Cloudflare), roblox.fandom.com (402). **Source Sans Pro 2017–2019** comes from secondary source ultratextgen.com only — flagged.
**Conflict:** secondary sources disagree on whether display names accept styled Unicode at all (one says letters+numbers only). Page therefore hedges: "Roblox doesn't publish which characters it accepts — test one styled word first."

## Step 3 — Metadata
- Title: `Roblox Font Generator – 𝐂𝐨𝐨𝐥 Roblox Fonts to Copy & Paste`
- H1: Roblox Font Generator · Slug: /tools/roblox-font-generator
- Meta: "Turn your Roblox name, bio, or group text into cool fonts — bold, small caps, cursive, bubble, and more. Free Roblox font generator, copy and paste ready."

## Step 4 — Competitors (top 4 distinct organic, Unicode-type)
1. **fontcraft.com/roblox-fonts** (1st fetch timed out; 2nd OK) — H2s: Roblox Font Generator · How to use · What are Roblox fonts? · Where to use Roblox fonts? · Roblox letters and numbers · Copy and paste examples · Best fonts for Roblox · FAQ · More fonts. FAQ: "Can I use these fonts in my Roblox username?" / "Why does Roblox reject some styled names?" / "Do styled fonts pass Roblox chat filters?"
2. **capitalizemytitle.com/roblox-fonts** — H2s: Roblox Font Output (40+ styles) · How Do You Use Our Roblox Font Generator? · What Is Roblox Font? (Unicode 137,994 chars / 150 scripts — stale Unicode 12 figure) · Where Can You Use This Roblox Text Generator? No FAQ.
3. **fonts.gg/roblox** — H2s: Roblox Font Generator (147 fonts) · 86 Roblox Fonts & Generators · FAQ. FAQ: "What font does Roblox use?" / "Can I use custom fonts in Roblox games?" / "Can I use fonts.gg for Roblox text?" / "Why does some text not appear correctly in Roblox?" / "Is it allowed to use fancy fonts on Roblox?"
4. **onlinefontsgenerator.com/roblox-font-generator** — 13 question H2s incl. Quick Picks, comparison table (style × username × readability × risk), filtered vs not, why fonts show incorrectly, custom fonts, official Roblox font, step by step, free. FAQ: "Can you use custom fonts in Roblox?" / "Why are some fonts filtered in Roblox?" / "Do these fonts work on mobile and desktop?" / "Are these fonts safe to use?"
Substituted/skipped: textstudio + fontmeme (image generators — different format).
No competitor shows a publish/updated date.

## Step 5–6 — Entity ledger (summary; full in entities.json)
Tier 1: Roblox, Unicode / styled text, display name, username, Roblox filter/moderation, copy & paste, bold/small caps (safe styles).
Tier 2: Builder Sans, Gotham, bio/About, group name, chat, Roblox Studio built-in fonts, custom fonts (not uploadable), mobile/Xbox/PlayStation, boxes/missing glyphs, character limit, Community Standards.
Tier 3: Source Sans Pro, Montserrat, Builder Mono/Extended, 137,994-character figure (stale — parked), Pinterest/YouTube.
Relationships: Roblox —uses→ Builder Sans (since Mar 2024) · Builder Sans —replaced→ Gotham (removed 28 May 2024) · username —allows only→ letters/numbers/1 underscore · display name —limited to→ 3–20 chars, 1 change / 7 days · display name —passes through→ filter · filter —resets→ unreadable names · styled letters —are→ Unicode characters · math-alphabet letters —count as→ 2 UTF-16 units · Studio —offers→ built-in font list, no uploads.
Dedupe log: parked "Roblox chat filtering for under-13s" (owned by /guides/fonts-for-roblox) and "old Roblox logo font download" (image intent).

## Step 7 — Information gain
- Competitors omit the 2024 Builder Sans switch or give no date; fonts.gg/onlinefontsgenerator answer "official font" vaguely.
- None separates username vs display name vs bio vs group vs experience title as distinct fields with their rules.
- None mentions surrogate-pair character counting.
- **Original element committed:** per-field "where it works" block (display name / bio & group / experience title) + dated font history + character-count FAQ.

## Step 8 — Heading map (component-fixed structure)
| Level | Heading | Owns | Question answered |
|---|---|---|---|
| H1 | Roblox Font Generator | focus kw | — |
| H2 | Styles included (component) | roblox fonts copy paste | which styles |
| H2 | How to use (component) | how to use roblox font generator | steps (HowTo) |
| H2 | Where people use it → H3 ×3 | roblox display name font / roblox bio fonts / roblox game title | where it works |
| H2 | FAQ ×10 | PAA set | see above |

## Step 8e — Internal links / cannibalisation
- **Cannibalisation:** /guides/fonts-for-roblox (informational, filter explainer). Resolved: tool page = commercial/do; guide keeps filter angle and now links to the tool page (intro link + first pillarLink swapped). Tool page links back to the guide in intro + relatedGuides.
- Out: /guides/fonts-for-roblox, /guides/cool-different-fonts, /guides/are-copy-paste-fonts-safe, /tools/bold, /tools/small-caps, /tools/cursive, /tools/bubble.
- In: home tool grid, footer, guide fonts-for-roblox.
- Future: Day 18 Adopt Me page must link here and not repeat Roblox intro; Day 19 gaming hub links here.

## FAQ source map
Q1 generic · Q2 fontcraft Q1 · Q3 fonts.gg Q1 · Q4 onlinefontsgenerator H2 "Which fonts work for usernames without getting filtered" · Q5 fontcraft Q2 · Q6 fonts.gg Q2 / onlinefontsgenerator Q1 · Q7 onlinefontsgenerator Q3 · Q8 fonts.gg Q4 · Q9 information-gain · Q10 fonts.gg Q5 / onlinefontsgenerator Q4.
