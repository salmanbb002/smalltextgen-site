# Research notes: cursive font generator (Day 24, full overhaul of /tools/cursive), 2026-10-02

## Step 1: Intent + SERP
- "cursive font generator" (29k, KD 21): **do** intent. Top: creativefabrica, pixelied, glyphy, lingojam, piccollage, cursivefontgenerator.app, fontb, fontsgeneratorpro; plus exact-match domains (freecursivegenerator.com, cursivegenerator.co, cursive-text-generator.com/.net, cursivegen.com with handwriting PNG/PDF).
- Fan-out: styles (script, bold cursive, tattoo/fraktur, signature, calligraphy), cursive vs calligraphy, Instagram, keyboard, numbers, boxes, tattoo.

## Step 2: Head entities
| Entity | sameAs | Attributes |
|---|---|---|
| Cursive | https://en.wikipedia.org/wiki/Cursive | joined handwriting for speed |
| Script typeface | https://en.wikipedia.org/wiki/Script_typeface | typefaces imitating handwriting |
| Calligraphy | https://en.wikipedia.org/wiki/Calligraphy | decorative pen/brush lettering |
| Mathematical Alphanumeric Symbols | https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols | script A U+1D49C, bold script A U+1D4D0; 2001 (Unicode 3.1); script has Letterlike gaps (verified in lib/fonts.ts output: ℬℰℱℋℐℒℳℛℯℊℴ); no script digits |
| Great Vibes / Dancing Script | Google Fonts | free installable script fonts for print |

## Step 4: Competitors (all fetched)
1. fontsgeneratorpro.com/cursive-fonts: thin copy; how to use; "No pen, no software"; style categories.
2. glyphy.io: 40+ named styles (mostly decorated), no explanatory content.
3. pixelied.com: marketing H2s (social, designs, bios), 3 steps, FAQ (best, safe, how to use, copy to social, devices, what is Unicode).
4. lingojam.com: Unicode explainer (outdated "tens of thousands"), copy and paste.
- SERP snippet (freecursivegenerator etc.): 60+ styles incl. bold cursive, tattoo (fraktur), signature; cursive vs calligraphy.

## Step 6: Tiers
- T1: cursive font generator, cursive/script Unicode, copy-paste, bold cursive, Instagram.
- T2: Mathematical Alphanumeric Symbols, Letterlike gaps, italic, fraktur/Old English (tattoo), cursive vs script vs calligraphy, numbers (no script digits), boxes, usernames, keyboards, screen readers, tattoo/signature/print → real fonts, character count.
- T3 parked: "60+ styles" catalogues, handwriting PNG/PDF export (different product), named decorative styles.

## Step 7: Information gain
- Competitors are thin and catalogue-style. **Added:** (1) a real second style, **Bold cursive** (U+1D4D0, no gaps), as a new converter style + test; the site's own copy already used bold-script samples the generator couldn't produce; (2) style-comparison table (cursive vs bold cursive vs italic vs fraktur, best for / watch out for); (3) explained the Letterlike gaps and "no cursive digits"; (4) print/tattoo guidance pointing to real script fonts; (5) cursive vs script vs calligraphy definitions.
- Plan asked for "downloadable examples": not built (would need image export). Comparison table covers "style comparisons".

## Step 8: Heading map
| Level | Heading | Owns |
|---|---|---|
| H1 | Cursive Font Generator | focus (was "Cursive Font Text Generator") |
| H2 | What is a cursive font generator? | definition |
| H2 | Which cursive font style should you use? | styles (table) / bold cursive |
| H2 | How do you convert text to cursive? | convert to cursive |
| H2 | Where does copy-paste cursive work? | platforms / print |
| H2 | Cursive vs script vs calligraphy | definitions |
| H2 | FAQ (11) | |

## Step 8e: Cannibalisation
- `/guides/how-cursive-font-generator-works` ("How a Cursive Font Generator Works") and `/guides/convert-text-to-cursive` ("Convert Text to Cursive (Copy & Paste Cursive Fonts)") both carry close variants of the head term. Tool page links to the first and keeps "convert" as an H2 only. Consider retitling the guides toward their informational angles (not changed).
