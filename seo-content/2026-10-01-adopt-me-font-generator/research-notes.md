# Research notes — "adopt me font generator" (Day 18, 2026-10-01)

## Step 1 — Intent + SERP
- **Intent:** *do* (dominant): style a pet name / sign and copy it into Adopt Me. Secondary *know*: why names turn into ####, which styles survive, character limit.
- **Vol / KD:** 1,300 / 3 (30-day plan; the competitor has an exact-match page ranking weakly at #28).
- **SERP (WebSearch, US, 1 Oct 2026):** TikTok discover page ("fancy font in adopt me won't blur out") · adoptmefonts.org · adoptmefont.com · fontgenerator.cc/font-generator-for-adopt-me · adoptmefonts.net (+ /profile-fonts) · preppyfonts.com · instafonts.io/adoptme. Second query: cute-symbol.com, bold-text.com, fontbag.com, adoptmetext.com, omnvert.com.
- **Whole SERP is Unicode copy-paste tools** (several exact-match domains). No image-intent mismatch, so a gallery page is the right format.
- **SERP features:** TikTok/video result. The searcher is young and mobile-first.
- **Fan-out:** how to rename a pet · why is my pet name #### / blurred · which styles survive · character limit · boxes/question marks · does a fancy name raise trade value · bypass filter · Adopt Me logo font · preppy / cute / Greek fonts · works on mobile.

## Step 2 — Head entities
| Entity | Type | sameAs | Attributes used |
|---|---|---|---|
| Adopt Me! | VideoGame | https://en.wikipedia.org/wiki/Adopt_Me! | Uplift Games (formerly DreamCraft); released 13 Jul 2017; on Roblox; pet-raising sim; trading; Neon / Mega Neon from 4 full-grown pets (Wikipedia, fetched) |
| Roblox | Platform | https://en.wikipedia.org/wiki/Roblox | text filter applies to every name/sign |
| Uplift Games | Organization | unlinked | developer |
| Roblox text filter | Concept | unlinked | blocked text → hash marks #### (omnvert, adoptmefont; widely known Roblox behaviour) |
| Unicode | Standard | https://en.wikipedia.org/wiki/Unicode | bubble (U+24B6 block) = 1 UTF-16 unit; bold/script math letters = 2 |

**Blocked:** adoptme.fandom.com (402). **Conflicts:** pet-name length limit is 12 (one search-result summary) vs "under ~20" (adoptmefonts.org, adoptmefont.com, omnvert). There's no official source, so the page says Adopt Me doesn't publish a limit and fan guides give 12–20. Rename flow (equip → tap → pencil; free; unlimited) comes from secondary guides (techy.how, playbite, search summary). Not verified in-game.

## Step 3 — Metadata
- Title: `Adopt Me Font Generator – ⓒⓤⓣⓔ Pet Names to Copy & Paste`
- H1: Adopt Me Font Generator · Slug: /tools/adopt-me-font-generator · Lead style: bubble
- Meta: "Style your Adopt Me pet names and roleplay signs with cute copy-paste fonts — bubble, small caps, cursive, and more. Free Adopt Me font generator, filter-friendly styles first."

## Step 4 — Competitors (top 4 distinct organic)
1. **adoptmefonts.org.** H2s: generator (20-char pet name input) · Browse all fonts (Basic 25 / Marks 19 / Borders 109 / Alphabets 14 / Fun 13) · templates · focused generators · topic guides · How to use. FAQ: What are Adopt Me fonts? / How do I get them free? / What is the generator? / Can I use these in Adopt Me and Roblox? / Instagram, TikTok, Discord? / emoji, numbers, symbols?
2. **adoptmefont.com.** H2s: What is an Adopt Me Font Generator? · Why default fonts get filtered in Roblox (claims "Community Sift"; hints fonts bypass word lists, which is a bad angle) · 3 ways fonts increase trading value (claims "+25%", unsourced) · FAQ (real fonts or hacks? / boxes or question marks? / pet's name? / 4 steps / popular styles / tips / is it safe / troubleshooting). Has a "creator story" (5-year player). E-E-A-T signal we can't copy.
3. **fontgenerator.cc.** H2s: Adopt Me Font Styles (13) · Cute styles for pet names · Use simple text for roleplay · Test it in Roblox · Related tools (incl. Fortnite) · FAQ (What can I use them for? / Do all fonts work in Roblox? / Best style for pet names?)
4. **adoptmefonts.net.** H2s: What is · How to use (6 steps, "Beautify") · Browse by use case (name / profile / pet name) · Popular styles (H3: Greek, Preppy, Cute & Aesthetic, Cursive, Symbols) · How to change your font in Adopt Me · Beautify (83 flourishes, 351 kaomoji) · Why use · Tips · FAQ ×10 (questions only, mostly tool-centric).
Supplementary: **omnvert.com/en/fonts/adopt-me**. FAQ: "Why does my fancy pet name show up as #### in Adopt Me?" / "Is there an Adopt Me trick to bypass the Roblox name filter?" / "Which symbols and styles actually survive…?" / "Does a fancy pet name mean the pet is rare or worth more in a trade?" / "WFL? sign… is the trade safe?" / "boxes or ?". Claims ★ ♡ • ✦ survive most reliably; bold, bubble, small caps, double-struck most cross-device.
No publish/updated dates on any of them (© 2026 footers only).

## Step 5–6 — Entity ledger (full in entities.json)
- **Tier 1:** Adopt Me!, Roblox, pet name, Roblox text filter (####), Unicode styled text, copy & paste, bubble/small caps (safe styles).
- **Tier 2:** Uplift Games, rename flow (pencil icon, free), character limit, roleplay signs, trading, Neon / Mega Neon, trade value, WFL, boxes / question marks, mobile/console, Community Standards (no bypass), hearts/stars symbols, cursive, logo font.
- **Tier 3 (parked):** Greek fonts, kaomoji, preppy fonts, Community Sift, Domus Titling, visit/CCU stats.

**Relationships:** Adopt Me! —developed by→ Uplift Games · Adopt Me! —runs on→ Roblox · pet/sign text —passes through→ Roblox text filter · filter —replaces blocked text with→ #### · renaming —is→ free, unlimited · bubble/small caps —count as→ 1 unit; bold/script → 2 · pet value —depends on→ type, rarity, Neon/Mega Neon (not name) · Neon —made from→ 4 full-grown identical pets · styled text to dodge filter —breaks→ Community Standards.

**Dedupe log:** "Roblox display name / bio fonts" are owned by /tools/roblox-font-generator, so this page only links there. "Under-13 stricter filtering" is owned by /guides/fonts-for-roblox and linked, not repeated.

## Step 7 — Information gain
- adoptmefont.com claims styled names raise trade value and implies fonts dodge the filter. Both are wrong or risky. **We state the opposite plainly:** value = rarity + Neon/Mega Neon, and dodging the filter breaks the rules.
- Nobody explains *why* some styles eat the length limit (1 vs 2 code units). We add that.
- Nobody separates pet names / RP signs / trading use with a safety note. We add the "WFL?" caution.
- **Original elements:** code-unit counting note, trade-value myth FAQ, honest "no official limit" answer instead of a made-up number.

## Step 8 — Heading map (component-fixed, same as Roblox/Fortnite)
| Level | Heading | Owns | Question |
|---|---|---|---|
| H1 | Adopt Me Font Generator | focus kw | — |
| H2 | Styles included (component) | adopt me fonts copy paste | which styles |
| H2 | How to use (component) | how to rename pet adopt me font | steps (HowTo) |
| H2 | Where people use it → H3 Pet names / Roleplay signs / Trading & house roleplay | adopt me pet name fonts / adopt me sign fonts / adopt me trading | where it works |
| H2 | FAQ ×10 | PAA/competitor FAQ set | see draft |

## Step 8e — Internal links / cannibalisation
- **Risk:** /tools/roblox-font-generator (parent game). Resolved: this page = pet names + RP signs; Roblox page = display name / bio / group. Each links to the other.
- Inbound added: Roblox intro, fancy-text-generator gaming blurb, home grid, footer, /guides/fonts-for-roblox pillarLinks, /guides/bubble-letters-copy-paste pillarLinks.
- Outbound: Roblox generator + fonts-for-roblox guide (intro), bubble/small-caps/cursive/bold tools, bubble-letters + are-copy-paste-fonts-safe guides.
- Day 19 gaming hub must link here.

## FAQ source map
| FAQ | Source |
|---|---|
| What is it? | adoptmefonts.org / .net |
| How to put a font on pet's name | techy.how + playbite (rename flow), adoptmefont 4-step |
| Why ####? | omnvert FAQ (verbatim theme) |
| Best fonts for pet names | fontgenerator.cc + omnvert |
| Character limit | adoptmefonts.org (20) vs search summary (12), stated as disputed |
| Boxes / question marks | adoptmefont.com + omnvert |
| Fancy name = more value? | omnvert FAQ + Wikipedia (Neon mechanics) |
| Bypass filter? | omnvert FAQ |
| Logo font | dafont forum fan-out (answer kept factual, no font named) |
| Mobile/Xbox/PlayStation | Wikipedia platforms |
