# Research notes — "old english text generator"

Site: smalltextgen.site · Target: `/tools/old-english-text-generator (NEW gallery page; new `bold-fraktur` style; lead = bold fraktur)` · Run: 2026-09-27 (Day 14 of the 30-day plan)
Dedupe check: keyword sheet `smalltextgen-keyword-clusters.csv` — no existing live_url for this keyword.

## Step 1 — Intent + SERP
Dominant intent: **do; secondary know (what is Old English font, history)**. Tool pages + blog lists (madeintext, lingojam, piliapp, gothicfontgenerator.net, fontsarena, lipsumhub, texttools, musely AI "period-aware" = language intent, creativeaspirant).

## Step 2 — Head entities
- **Blackletter** — `sameAs` https://en.wikipedia.org/wiki/Blackletter — c. 1150–1500s N. Europe; Textura in Gutenberg Bible c.1455
- **Fraktur** — `sameAs` https://en.wikipedia.org/wiki/Fraktur — Maximilian I commissioned early Fraktur (1510s); Normalschrifterlass Jan 1941 ended it
- **Old English (language)** — `sameAs` https://en.wikipedia.org/wiki/Old_English — Anglo-Saxon language c.450–1150, written in insular script

## Steps 4–5 — Competitors (top 4 distinct domains)
| URL | Headings | Extracted facts |
|---|---|---|
| lingojam.com/OldEnglishTextGenerator | narrative | says Fraktur "originated in Rome" (MYTH); Nazi ban 1940s; math origin of Unicode fraktur |
| piliapp.com/cool-text/old-english | Creative Uses / How to Use | aka Fraktur/Blackletter; invitations, logos; English letters only |
| gothicfontgenerator.net/old-english-copy-paste | Best Old English Styles / Tutorial | Fraktur, Blackletter Classic, Gothic Bold; tattoos, jerseys, mastheads, streetwear; PNG/SVG |
| texttools.org/old-english-text-generator | Old English-Bold / Supported Characters | A–Z a–z only, digits unformatted; bold option |

## Step 6 — Entity ledger + tiers
- **Tier 1**: Old English text generator, Blackletter, Fraktur (Unicode Mathematical Fraktur), Copy and paste
- **Tier 2**: Bold fraktur (complete alphabet), Letterlike capitals ℭ ℌ ℑ ℜ ℨ, No fraktur digits, Old English language ≠ font, Textura / Gutenberg Bible, Maximilian I, 1941 Fraktur ban, Tattoos / jerseys / mastheads / logos, Gothic (alias)
- **Tier 3**: PNG/SVG export, Medieval cross separators, Wedding invitations

**Relationships**:
- Old English font —is actually→ blackletter (Fraktur in Unicode)
- Old English language —written in→ insular script, not blackletter
- Gutenberg Bible —set in→ Textura blackletter c.1455
- Maximilian I —commissioned→ early Fraktur type
- Regular fraktur C H I R Z —borrowed from→ Letterlike Symbols block
- Bold fraktur —has→ complete contiguous alphabet
- Nazi decree (Jan 1941) —replaced→ Fraktur with roman type

## Step 7 — Information gain
(1) Debunks LingoJam's "originated in Rome" myth with a dedicated FAQ; (2) explains the mismatched C/H/I/R/Z capitals (verified in lib/fonts.ts test) and why bold fraktur is the lead style; (3) Old English language vs font distinction with dates; (4) tattoo caveat — use as reference, artist redraws.

## Step 8 — Section map (gallery page fields)
H1 = focus keyword · intro ¶1 = direct answer (what + how, Unicode block) · intro ¶2 = origin/entity context + internal links · 4 howToSteps (HowTo schema) · featured styles grid · 3 whereUsed · 10 FAQ (FAQPage schema).

## Step 8e — Internal links / cannibalisation
None — fraktur had no page. /tools/fancy-text-generator features fraktur under broad "fancy" intent; now links to this page. Linked from fancy-text-styles-explained + cool-different-fonts guides + home + footer.

## FAQ source map
texttools (characters/digits, bold), lingojam (history, ban), gothicfontgenerator (tattoos/jerseys/mastheads), piliapp (platforms), original (language vs font, letterlike capitals, Rome myth, readability)
