# Research notes: gaming font generator (Day 19 hub), 2026-10-02

## Step 1: Intent + SERP
- Query: "gaming font generator" (+ "gamer name fonts copy paste symbols for games").
- Dominant intent: **do/buy-free-tool** (use a generator now). Secondary: **know** (does it work in game X?).
- SERP features: no featured snippet seen; tool pages dominate; PAA-style "do gaming fonts work in X" questions on competitor FAQs.
- Top organic: fontsgeneratorpro.com/gaming-fonts (main competitor), aurafonts.com/gaming-fonts, fancytext.net/gaming-font-generator, texttofont.com blog, fontvilla.com, fancynick.com blog (May 8 2026), fancymytext.com, font-style.net, fontletter.com.
- Fan-out: PUBG / Free Fire / Minecraft / Roblox / Fortnite / Valorant / Xbox gamertag / PSN, clan tag, boxes/question marks, logos & thumbnails, symbols (꧁꧂ ⚔ ☠ ツ).

## Step 2: Head entities
| Entity | Type | sameAs | Attributes |
|---|---|---|---|
| Unicode | Standard | https://en.wikipedia.org/wiki/Unicode | ~160k chars (Unicode 17.0, Sep 2025: 159,801) |
| Mathematical Alphanumeric Symbols | Unicode block | https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols | bold/italic/fraktur/double-struck, above U+FFFF → 2 UTF-16 units |
| Roblox | Org/Product | https://en.wikipedia.org/wiki/Roblox | display name 3–20, 1 change/7 days (prior run) |
| Minecraft | Product | https://en.wikipedia.org/wiki/Minecraft | Bedrock no chars > U+FFFF; Mojangles (prior run) |
| Fortnite | Product | https://en.wikipedia.org/wiki/Fortnite | Epic display name 3–16, 1 change/2 weeks; Burbank / Heading Now (prior run) |
| Xbox gamertag | Concept | unlinked | ≤12 chars, supported scripts list (support.xbox.com via search snippet) |
| PSN Online ID | Concept | unlinked | 3–16, letters/numbers/-/_; first change free (search snippets, 3rd-party) |
| Riot ID | Concept | unlinked | game name 3–16 + tagline 3–5; 90-day change (support.riotgames.com via snippet) |
| Free Fire | Product | https://en.wikipedia.org/wiki/Garena_Free_Fire | nickname ~12; 390 diamonds or Name Change Card (3rd-party snippets) |
| PUBG Mobile | Product | https://en.wikipedia.org/wiki/PUBG_Mobile | ≤14 chars ("Name cannot exceed 14 characters"); Rename Card |
| Discord / Steam | Products | wiki | Discord display name ≤32; Steam profile name any Unicode, changeable anytime |

## Step 4: Competitors (fetched OK)
1. **fontsgeneratorpro.com/gaming-fonts**: H2s What are / styles by gamer type / by game / does it work / logos & thumbnails / where to use / how to use / vs regular fonts / FAQ (13 Q). Has compatibility table (PUBG, FF, MC, Roblox, Fortnite, Valorant, Discord, CODM). No date.
2. **aurafonts.com/gaming-fonts**: style catalogue (FF Classic, PUBG Squad…), customization table, 12-Q FAQ (DaFont, PixelLab, 3D, Discord clan). No date.
3. **fancytext.net/gaming-font-generator**: thin template; 3-Q FAQ.
4. **fancynick.com/blog/gaming-fonts-symbols-copy-paste** (May 8 2026): platform Unicode-support table w/ limits, Fortnite chars, Xbox rules, symbols across games, genre tips; 6-Q FAQ.

## Step 6: Entity ledger (tiers)
- **T1:** Unicode, gaming font/generator, display name/gamer name, name filter, Roblox, Minecraft, Fortnite, boxes/missing glyph, bold, small caps.
- **T2:** clan tag, Discord, Steam, Free Fire, PUBG Mobile, Valorant/Riot ID, Xbox gamertag, PSN ID, gothic/fraktur, double-struck, bubble, Zalgo/glitch, character limit/code units, rename card, logos/thumbnails, Burbank, Mojangles, Bebas Neue/Anton/Press Start 2P/Orbitron.
- **T3 (parked):** PixelLab, DaFont, 3D fonts, leet speak, Mobile Legends, COD Mobile, Among Us, Apex (no verified name rules → not stated).
- Relationships: generator —substitutes→ Unicode look-alikes · game —filters→ names · device font —lacks glyph→ boxes · math-alphabet letters —count as→ 2 code units · Bedrock —can't draw→ >U+FFFF · Xbox/PSN —reject→ styled letters · Roblox display name —changes→ 1 per 7 days · Epic —changes→ 1 per 2 weeks · Riot ID —changes→ 1 per 90 days · Free Fire rename —costs→ 390 diamonds.
- Dedupe log: "fancy name for gaming font generator" phrasing (fancytext.net template) dropped as keyword-stuffing.

## Step 7: Information gain
- Competitors' tables omit **name rules** (limits, change frequency) and mislabel consoles; none cover Xbox/PSN/Riot *and* the Roblox/Minecraft/Fortnite specifics together.
- **Original element:** 11-row dated compatibility table (name rules × fancy-font support × best styles), linked to the 4 per-game generators. Plus code-unit length explanation.

## Step 8: Heading map
| Level | Heading | Owns | Question |
|---|---|---|---|
| H1 | Gaming Font Generator | focus | — |
| H2 | What is a gaming font generator? | definition | what is |
| H2 | Which games accept fancy fonts in names? | "fancy fonts in games" | does it work in X |
| H2 | Which gaming font styles work best? | style types | best style |
| H3 | Bold / Gothic / Clean / Glitch | style variants | — |
| H2 | How do you put a gaming font in your name? | how-to | how to change name |
| H2 | Why does my gaming font show as boxes or get rejected? | troubleshooting | boxes |
| H2 | Gaming fonts vs fonts for logos and thumbnails | logos/thumbnails | logo font |
| H2 | FAQ (11) | | |

## Step 8e: Internal links + cannibalisation
- Hub → /tools/roblox-, minecraft-, fortnite-, adopt-me-font-generator; /tools/bold, small-caps, zalgo, old-english.
- Inbound added: home grid, footer, Roblox/Minecraft/Fortnite/Adopt Me intros, fancy-text-generator gaming blurb.
- Cannibalisation: /guides/cool-different-fonts and /guides/fonts-for-roblox are platform-specific/how-to; no overlap with "gaming font generator". Hub deliberately keeps per-game detail short and links out.
