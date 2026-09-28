# Research notes — "minecraft font generator" (Day 16, 2026-09-28)

## Step 1 — Intent + SERP
- **Intent:** *do*, split: (a) **image/pixel-logo** generators (minecraftmaps, redstaglabs, designworklife, fontbolt, fontmeme, textstudio, thewordfinder, mockofun) = the **majority** of the SERP; (b) Unicode copy-paste (allfancytext) = minority.
- **Vol / KD:** 2,900 / 6.
- **Implication:** we can't satisfy (a) with Unicode. The page states that upfront, sends logo-seekers to image tools/replica fonts, and owns the underserved **in-game text** angle (signs, chat, anvil, MOTD). This is an honest intent-mismatch risk. Expect lower CTR than roblox. Flagged.
- **SERP features:** image-heavy results; fontspace category page.
- **Fan-out:** what font does Minecraft use · Minecraft font copy and paste · fancy text in Minecraft Bedrock · how to make colored/bold text in Minecraft · Minecraft sign fonts · server MOTD generator.

## Step 2 — Head entities
| Entity | Type | sameAs | Attributes used |
|---|---|---|---|
| Minecraft | VideoGame | https://en.wikipedia.org/wiki/Minecraft | Mojang Studios / Microsoft; Java + Bedrock editions |
| Mojangles | Typeface | https://minecraft.wiki/w/Mojangles | a.k.a. Minecraft Seven; 8×8 pixel bitmap glyphs |
| GNU Unifont | Typeface | https://en.wikipedia.org/wiki/GNU_Unifont | Java fallback for unsupported chars |
| Java Edition | VideoGame edition | https://minecraft.wiki/w/Java_Edition | full Unicode in font definitions since 1.16 (20w17a); usernames 3–16, letters/numbers/underscore; chat 256 chars; anvil 50 chars |
| Bedrock Edition | VideoGame edition | https://minecraft.wiki/w/Bedrock_Edition | "does not support any character above U+FFFF"; missing texture = blank |
| Formatting codes | Concept | https://minecraft.wiki/w/Formatting_codes | § + 0–9/a–f (16 colours), k l m n o r; Bedrock any text input (JSON UI); Java not in normal chat |
| server.properties motd | Concept | https://minecraft.wiki/w/Server.properties | supports formatting codes + non-ASCII (♥); >59 chars may cause communication error |
| Minecrafter / Minecraftia | Typeface (replica) | unlinked | Minecrafter (MadPixel) = logo replica; Minecraftia (Andrew Tyler) = in-game text replica |

Fetched: minecraft.wiki Font, Formatting_codes, Server.properties; Wikipedia Minecraft. Username / chat / anvil limits from search snippets (mcprofiles, cyberpost, minecraft.wiki Anvil mechanics). These are well-established but weren't fetched directly.

## Step 3 — Metadata
- Title: `Minecraft Font Generator – ᴍɪɴᴇᴄʀᴀꜰᴛ Text for Names, Signs & Chat`
- H1: Minecraft Font Generator · Slug: /tools/minecraft-font-generator
- Meta: "Style text for Minecraft signs, chat, item names, and server MOTDs — small caps, bubble, bold, and more. Includes which fonts work in Java vs Bedrock. Free, copy and paste."

## Step 4 — Competitors
1. **minecraftmaps.com** — 403 on fetch (search snippet only: renders real game font sheet, drop shadow, transparent PNG). Substituted.
2. **thewordfinder.com** — 403. Substituted.
3. **redstaglabs.com** (fetched) — H2s: Key Features (Minecrafter, Minecraftia, Minecraft Ten, Block Craft, Pixel Operator, VT323; PNG/JPG) · Advantages · Uses (H3: YouTube thumbnails, social, graphic design, blogs, game UI) · Importance in Marketing · When to use · How fonts increase CTR · Blog featured images. FAQ 9 incl. "What is a Minecraft Font Generator?", "Do I need to download any fonts to use this tool?", "Can I download the generated text as an image?", "Does the generator work on mobile devices?", "Can I use Minecraft fonts for merchandise designs?"
4. **allfancytext.com** (fetched) — Unicode type. H2s: How to use · Fancy Text Generator for Games · What is · Where to use · Why use · FAQ (19).
5. **fontbolt.com** (fetched) — H2s: Fonts Used (Mine Crafter replica, Minecraftia) · Generator · Similar Fonts.
6. **designworklife.com** (fetched) — H2s: How to · Popular uses (server banners, thumbnails, party decor) · About Minecraft-style fonts · Important note (Minecraft™ trademark of Microsoft/Mojang).
No dates shown on any page.

## Step 6 — Entity ledger (summary; full in entities.json)
Tier 1: Minecraft, Mojangles / in-game font, Minecraft logo, Unicode, Java Edition, Bedrock Edition, copy/paste.
Tier 2: GNU Unifont, U+FFFF limit, formatting codes §, colours, signs, chat, anvil/item names, books, server MOTD / server.properties, username/gamertag, Minecrafter, Minecraftia, image/PNG generators.
Tier 3: Minecraft Ten/Five, Noto Sans (Bedrock), Standard Galactic Alphabet, VT323, YouTube thumbnails, trademark.
Relationships: Minecraft —draws text in→ Mojangles (8×8 bitmap) · Java —falls back to→ GNU Unifont · Java —supports→ full Unicode since 1.16 · Bedrock —can't render→ >U+FFFF · math-alphabet styles —live above→ U+FFFF · small caps/bubble/full-width —live in→ BMP · § codes —apply→ colour/bold/italic · MOTD —supports→ § codes + symbols, ≤59 chars · Java username —limited to→ 3–16 [A-Za-z0-9_] · anvil —renames up to→ 50 chars · logo —is→ custom artwork (replica: Minecrafter).
Dedupe/parked: Standard Galactic Alphabet (enchanting-table translator = separate future keyword), YouTube thumbnail/CTR marketing (image intent), merchandise licensing.

## Step 7 — Information gain
- **No competitor** explains Java vs Bedrock rendering. Most copy-paste sites imply all styles work everywhere, but on Bedrock the math-alphabet styles show up blank.
- No competitor ties styled text to § formatting codes or MOTD limits.
- **Committed original element:** Java vs Bedrock compatibility breakdown (whereUsed blocks + FAQ 3/4/10), with formatting-code quick reference and MOTD 59-char limit.
- **Future content opportunity:** Standard Galactic Alphabet / enchanting-table translator (own keyword).

## Step 8 — Heading map
| Level | Heading | Owns | Question |
|---|---|---|---|
| H1 | Minecraft Font Generator | focus kw | — |
| H2 | Styles included | minecraft fonts copy paste | which styles |
| H2 | How to use | how to use | steps (HowTo) |
| H2 | Where people use it → H3 Java Edition / Bedrock Edition / Server MOTD & names | minecraft java fonts / bedrock fonts / minecraft motd | which edition works |
| H2 | FAQ ×10 | fan-out | above |

## Step 8e — Links / cannibalisation
- No existing Minecraft page. No cannibalisation.
- Out: /guides/small-caps-copy-paste, /guides/cool-different-fonts, /guides/fonts-for-roblox, /tools/small-caps, /tools/bubble, /tools/superscript, /tools/bold.
- In: home grid, footer. Day 19 gaming hub should link here.

## FAQ source map
Q1 fontbolt/minecraft.wiki · Q2 redstaglabs "Do I need to download any fonts" + intent gap · Q3 info-gain · Q4 info-gain · Q5 fan-out (username) · Q6 fan-out (coloured/bold text) · Q7 designworklife uses (signs) · Q8 fan-out (anvil) · Q9 fan-out (MOTD) · Q10 info-gain troubleshooting.
