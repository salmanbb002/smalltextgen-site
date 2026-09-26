# Research notes — "typewriter font generator"

Site: smalltextgen.site · Target: `/tools/typewriter-font-generator (NEW gallery page; lead = existing `monospace` style)` · Run: 2026-09-27 (Day 13 of the 30-day plan)
Dedupe check: keyword sheet `smalltextgen-keyword-clusters.csv` — no existing live_url for this keyword.

## Step 1 — Intent + SERP
Dominant intent: **do; secondary know-simple**. Tool pages (creativefabrica, madeintext, redstaglabs, font-generator.com image fonts, yaytext monospace, fontst, thewordfinder, namecheap). Wikipedia "Typesetting" also ranks → light know intent.

## Step 2 — Head entities
- **Monospaced font** — `sameAs` https://en.wikipedia.org/wiki/Monospaced_font — fixed advance width; typewriters; Courier
- **Courier (typeface)** — `sameAs` https://en.wikipedia.org/wiki/Courier_(typeface) — Howard "Bud" Kettler, IBM, 1955
- **Mathematical Alphanumeric Symbols** — `sameAs` https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols — monospace letters U+1D670–U+1D6A3, digits U+1D7F6–U+1D7FF

## Steps 4–5 — Competitors (top 4 distinct domains)
| URL | Headings | Extracted facts |
|---|---|---|
| madeintext.com/typewriter-font-generator | Convert Text to Typewriter Font / Instructions | 3 steps only; no FAQ |
| redstaglabs.com/pages/tools/typewriter-font-generator | Features / Advantages / Uses / Workflows / SEO benefits / FAQ (10) | claims "SEO-friendly: search engines crawl plain Unicode" — WRONG for styled letters; Canva/Figma/Photoshop use |
| yaytext.com/monospace | Monospace aka fixed-width | tabular data, ASCII art, code, vintage terminal; blank-box troubleshooting |
| font-generator.com/typewriter (sub for thewordfinder 403) | Why use / How to use / FAQ | image-font approach (PNG/SVG), Courier New, Kingthings Typewriter; licensing FAQ |

## Step 6 — Entity ledger + tiers
- **Tier 1**: Typewriter font generator, Mathematical Monospace (Unicode), Monospace / fixed width, Copy and paste
- **Tier 2**: Mechanical typewriter carriage (why fixed width), Courier (Kettler, IBM, 1955), Monospace digits, WhatsApp ``` / Discord ` code formatting, SEO / search caveat, Design tools (Canva/Figma/Word), Screen readers
- **Tier 3**: Image/PNG typewriter fonts, ASCII art tables, Font licensing

**Relationships**:
- Typewriter carriage —advances→ same distance per key → monospace
- Courier —designed by→ Howard Kettler for IBM, 1955
- Mathematical Monospace —includes→ digits 0–9 (U+1D7F6)
- WhatsApp —renders monospace with→ ```text```
- Styled Unicode —not matched by→ plain-text search

## Step 7 — Information gain
Corrects the "typewriter text is SEO-friendly" claim (redstaglabs) with an explicit FAQ; explains WHY it's monospace (carriage mechanics) + dated Courier fact; native WhatsApp/Discord alternatives; notes digits convert (competitors silent).

## Step 8 — Section map (gallery page fields)
H1 = focus keyword · intro ¶1 = direct answer (what + how, Unicode block) · intro ¶2 = origin/entity context + internal links · 4 howToSteps (HowTo schema) · featured styles grid · 3 whereUsed · 10 FAQ (FAQPage schema).

## Step 8e — Internal links / cannibalisation
None — monospace had no page. Linked from unicode-text-converter step + cool-different-fonts guide + home + footer.

## FAQ source map
redstaglabs FAQ (what is, how works, SEO, social, design tools, mobile), font-generator.com (Courier), yaytext (boxes), original (WhatsApp/Discord native, accessibility)
