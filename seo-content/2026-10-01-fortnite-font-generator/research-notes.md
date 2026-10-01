# Research notes — "fortnite font generator" (Day 17, 2026-10-01)

## Step 1 — Intent + SERP
- **Intent:** *do* (dominant): generate and copy styled text for a Fortnite / Epic name. Secondary *know*: "what font does Fortnite use", "can I download it".
- **Vol / KD:** 900 / 0 (30-day plan).
- **SERP (WebSearch, US, 1 Oct 2026):** goonlinetools.com/fortnite-fonts · pinterest pin · fontbolt.com/font/fortnite-font (image + download) · fontcraft.com/fortnite-fonts · vectordad.com/fonts/fortnite (TTF download) · ilovenote.net/tool/fortnite-font · texttofont.com/fortnite-font-generator · fortnitefontgenerator.com (text → PNG) · fnitefonts.com. Second query surfaced fontsgeneratorpro.com/fortnite-fonts (main competitor in the strategy doc).
- **Mixed SERP.** 6 of 9 are Unicode copy-paste tools and 3 are image or font-download tools (fontbolt, vectordad, fortnitefontgenerator.com). Unicode is the majority, so a gallery tool page is the right format. The intro states plainly that the logo font can't be pasted, which covers the image-intent searchers.
- **SERP features:** Pinterest/image result. No featured snippet in tool output.
- **Fan-out (competitor FAQs + related queries):** what font does Fortnite use · can I download the Fortnite font free · Fortnite font on Canva · does Epic allow special characters · how to change Fortnite name · symbols in Fortnite name · invisible character Fortnite · character limit · do styled names show to other players · is it allowed.

## Step 2 — Head entities
| Entity | Type | sameAs | Attributes used |
|---|---|---|---|
| Fortnite | VideoGame | https://en.wikipedia.org/wiki/Fortnite | Epic Games; Battle Royale Sept 2017; PC/console/mobile (Wikipedia, fetched) |
| Epic Games | Organization | https://en.wikipedia.org/wiki/Epic_Games | developer/publisher; owns the account + display-name system |
| Epic display name | Concept | unlinked | 3–16 chars; one change per two weeks; vulgarity filter (Epic Help, **search snippet only, page 403**) |
| Burbank Big Condensed | Typeface | unlinked | logo font (modified Black weight); Tal Leming / House Industries; commercial |
| Heading Now | Typeface | unlinked | main UI font since Chapter 5 (late 2023) |
| Unicode | Standard | https://en.wikipedia.org/wiki/Unicode | styled letters = Mathematical Alphanumeric Symbols, above U+FFFF → 2 UTF-16 units |

**Blocked sources:** epicgames.com/help (both display-name articles 403), fortnite.fandom.com/wiki/Fonts (402). Facts taken from search snippets of those pages and flagged.
**Conflicts:** Burbank release year given as 2006 (designyourway snippet) and 2017 (another snippet), so the year is omitted. One source said Heading Now came in "v27.10", but Chapter 5 is v28.00, so the page says "Chapter 5 (late 2023)" with no version number.
**Console names:** several secondary guides (exitlag, setup.gg via search) say PSN/Xbox players on the same platform see platform names. No Epic primary source was reachable, so the page hedges with "usually".

## Step 3 — Metadata
- Title: `Fortnite Font Generator – 𝗕𝗼𝗹𝗱 Fortnite Fonts to Copy & Paste` (Roblox title pattern)
- H1: Fortnite Font Generator · Slug: /tools/fortnite-font-generator
- Meta: "Make your Fortnite name stand out with bold, squared, gothic, and other copy-paste fonts. Free Fortnite font generator with the styles Epic's filter accepts most."

## Step 4 — Competitors (top 4 distinct organic, Unicode type)
1. **fontcraft.com/fortnite-fonts.** H2s: How to use · What are Fortnite fonts? · Where to use Fortnite fonts? · Fortnite letters and numbers · Copy and paste examples · Best fonts for Fortnite · FAQ · More fonts. FAQ: "Does Epic allow special characters in Fortnite display names?" / "Where do styled Fortnite names actually show up?" / "Why do some fonts show as boxes or get blocked?"
2. **goonlinetools.com/fortnite-fonts.** H2s: About · Features · How to generate cool fortnite fonts? · FAQs. FAQ: install app? / is it safe? / desktop app? / works offline? (thin; tool-centric)
3. **texttofont.com/fortnite-font-generator.** H2s: What is a Fortnite Font Generator? · How to Use · Why Use · Key Features · Example Outputs (Victory → 𝗩𝗜𝗖𝗧𝗢𝗥𝗬, Drop Zone → 𝔻𝕣𝕠𝕡 ℤ𝕠𝕟𝕖) · FAQ · Related (Roblox, Minecraft…). FAQ: What font does Fortnite use? / Can I use special fonts in my Fortnite display name? / Discord clan names? / best for YouTube? / TikTok? / Instagram? / tournament name? / other gaming generators?
4. **fontsgeneratorpro.com/fortnite-fonts** (substituted for fnitefonts.com, which has a thin FAQ about Facebook/Instagram/Twitter/WhatsApp only). H2s: What Are Fortnite Fonts? · 200+ styles · What Font Does Fortnite Use? · Can You Download Burbank Free? · Fortnite font on Canva · How to change display name · Where to use · Do they work? · vs regular fonts · FAQ. Tables: style reliability (bold/small caps reliable, glitch hit-or-miss, superscript partial) and chapter font timeline (Burbank Ch1–4 → Heading Now Ch5+, Noto Sans kill feed). Claims 3–16 limit, Anton/Bebas Neue free alternatives, Burbank not in Canva.
No competitor shows a publish/updated date.

## Step 5–6 — Entity ledger (full in entities.json)
- **Tier 1:** Fortnite, Epic display name, Unicode styled text, copy & paste, Epic name filter, Burbank (official font), bold/small caps (safe styles).
- **Tier 2:** Heading Now, Chapter 5, House Industries, Anton/Bebas Neue, Canva, 3–16 char limit, 2-week change limit, PSN/Xbox names, cross-platform, Discord clan tag, boxes/missing glyphs, TikTok/YouTube/Twitch, squared/gothic styles, impersonation rule.
- **Tier 3 (parked):** Noto Sans kill feed, Agency, $149 price, Oswald, Bangers, LEGO Fortnite / Festival / Save the World, PWA/offline.

**Relationships:** Fortnite —developed by→ Epic Games · Fortnite logo —set in→ modified Burbank Big Condensed Black · Burbank —published by→ House Industries, designed by Tal Leming · Heading Now —replaced→ Burbank in UI at Chapter 5 (late 2023) · Burbank —is→ commercial (no legal free download) · Anton/Bebas Neue —free lookalikes on→ Google Fonts · Anton —available in→ Canva, Burbank not · display name —limited to→ 3–16 chars · display name —changeable→ once per 2 weeks · display name —passes through→ filter (vulgarity, impersonation) · console same-platform —shows→ PSN/Xbox name · styled letters —are→ Unicode chars, 2 UTF-16 units each.

**Dedupe log:** none needed between competitors beyond alias merges (Fortnite font = Burbank; Epic name = Fortnite name = display name). Parked "symbols in Fortnite name / sweaty symbols chart": a separate symbol-intent query, possible future guide. Parked "invisible name Fortnite": handled by linking /tools/invisible.

## Step 7 — Information gain
- None of the 4 explains that **console players on the same platform see PSN/Xbox names**, which is why "my friends can't see my font" happens.
- Only fontsgeneratorpro covers the Heading Now switch. texttofont and fontcraft give no dates.
- None besides fontsgeneratorpro mentions character counting, and none explains *why* (surrogate pairs).
- **Original elements committed:** "who sees your styled name" block (Epic display name use case) + console-visibility FAQ + dated font history + code-unit counting FAQ.

## Step 8 — Heading map (component-fixed structure, same as Roblox/Minecraft)
| Level | Heading | Owns | Question |
|---|---|---|---|
| H1 | Fortnite Font Generator | focus kw | — |
| H2 | Styles included (component) | fortnite fonts copy paste | which styles |
| H2 | How to use (component) | how to change fortnite name font | steps (HowTo) |
| H2 | Where people use it → H3 ×3 | epic display name / fortnite clan tag / fortnite font tiktok youtube | where it works |
| H2 | FAQ ×10 | PAA/competitor FAQ set | see draft |

Answer block = intro paragraph 1 (~58 words, slightly over the 55 target; kept because it carries 4 style examples).

## Step 8e — Internal links / cannibalisation
- **No cannibalisation:** no existing URL mentions Fortnite (grep of lib/app before writing).
- Outbound from page: /tools/roblox-font-generator (intro), related tools bold/small-caps/italic/invisible, guides cool-different-fonts / are-copy-paste-fonts-safe / tiny-text-discord.
- Inbound added: Roblox page intro, fancy-text-generator "Gaming & display names" blurb, home tool grid, footer.
- Future: Day 19 gaming hub must link here; a "Fortnite name symbols" guide could be its own page.

## FAQ source map
| FAQ | Source |
|---|---|
| What is a Fortnite font generator? | texttofont H2 |
| What font does Fortnite use? | texttofont + fontsgeneratorpro FAQ |
| Download free? | fontsgeneratorpro FAQ |
| Special characters allowed? | fontcraft FAQ (verbatim-ish) |
| How to change name to fancy font? | fontsgeneratorpro FAQ |
| PlayStation/Xbox friends can't see it | info-gain (console name search) |
| Boxes | fontcraft FAQ |
| Count as more characters? | fontsgeneratorpro "character limit" + Unicode fact |
| Fortnite font on Canva? | fontsgeneratorpro FAQ |
| Is it allowed? | fontsgeneratorpro FAQ + Epic rules snippet |
