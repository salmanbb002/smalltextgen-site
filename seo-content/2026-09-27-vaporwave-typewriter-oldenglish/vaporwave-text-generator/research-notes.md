# Research notes — "vaporwave text generator"

Site: smalltextgen.site · Target: `/tools/vaporwave-text-generator (NEW gallery page; new `vaporwave` style = full-width + U+3000 spaces)` · Run: 2026-09-27 (Day 12 of the 30-day plan)
Dedupe check: keyword sheet `smalltextgen-keyword-clusters.csv` — no existing live_url for this keyword.

## Step 1 — Intent + SERP
Dominant intent: **do; secondary know-simple (what is vaporwave/fullwidth text)**. Tool pages only (creativefabrica, textstudio x2 image effects, goonlinetools, lingojam, mew.design AI, vaporwavetextgenerator.com, fontvibe, textcleaner). Image-effect results (textstudio/fontvibe) = different intent (graphic), skipped.

## Step 2 — Head entities
- **Vaporwave** — `sameAs` https://en.wikipedia.org/wiki/Vaporwave — music/art microgenre, early 2010s; Macintosh Plus "Floral Shoppe" (2011)
- **Halfwidth and Fullwidth Forms** — `sameAs` https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block) — U+FF00–U+FFEF; ASCII variants U+FF01–U+FF5E (94 chars); ideographic space U+3000

## Steps 4–5 — Competitors (top 4 distinct domains)
| URL | Headings | Extracted facts |
|---|---|---|
| lingojam.com/VaporwaveTextGenerator | single H1 + narrative | fullwidth from Asian computer systems; ideographic spaces; "80s text"/"Japanese text"; uses: memes, YouTube titles, usernames |
| vaporwavetextgenerator.com | What is / How to make / Why no font download / Ideas / FAQ | Unicode not font; fullwidth uses more space; platforms incl. Spotify/Apple Music playlists; FAQ: real font? mobile? where? |
| goonlinetools.com/vaporwave-text-generator | Features / How to / FAQ | 325+ styles (padded with non-vaporwave fonts); PWA/offline; no data stored |
| textcleaner.net/vaporwave-text-generator | How to use / What is / Features | 150 styles incl. bold/cursive — dilutes intent; no history |

## Step 6 — Entity ledger + tiers
- **Tier 1**: Vaporwave text generator, Full-width Unicode characters (U+FF01–U+FF5E), Vaporwave (genre/aesthetic), ＡＥＳＴＨＥＴＩＣ, Copy and paste
- **Tier 2**: Ideographic space U+3000, CJK square-cell origin of full-width, Macintosh Plus / Floral Shoppe (2011), Bios, playlists, video titles, Character-limit cost, Spaced text vs full-width, Japanese katakana
- **Tier 3**: PWA/offline, Image text effects (gradients, CRT), "325+ styles"

**Relationships**:
- Full-width letters —match width of→ CJK ideographs
- Vaporwave —popularised→ full-width text in track titles
- Floral Shoppe —released by→ Macintosh Plus (Vektroid), 2011
- X —counts→ each full-width char as 2 of 280
- Ideographic space U+3000 —matches→ full-width letter width

## Step 7 — Information gain
(1) X counts full-width characters double — no competitor states a platform-specific count; (2) the lead style swaps spaces for U+3000 so spacing matches (only LingoJam mentions this); (3) spaced-text vs full-width distinction; (4) short, dated genre origin instead of padding with 150–325 unrelated fonts.

## Step 8 — Section map (gallery page fields)
H1 = focus keyword · intro ¶1 = direct answer (what + how, Unicode block) · intro ¶2 = origin/entity context + internal links · 4 howToSteps (HowTo schema) · featured styles grid · 3 whereUsed · 10 FAQ (FAQPage schema).

## Step 8e — Internal links / cannibalisation
None. Full-width style already featured on /tools/fancy-text-generator grid — that page is broad "fancy" intent, not vaporwave. Linked from cool-different-fonts guide + home + footer.

## FAQ source map
vaporwavetextgenerator.com FAQ (real font? mobile? where?), lingojam (Japanese text), original (limit cost, katakana, 94 chars, accessibility, spaced vs full-width)
