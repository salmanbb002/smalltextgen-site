# SmallTextGen — Topical Authority Audit & Topical Map

**Site:** `smalltextgen.site` · **Prepared:** 2026-09-01 · **Inputs:** `smalltextgen-keyword-clusters.csv` (277 kw / 12 clusters), `smalltextgen-blog-strategy.md`, live codebase.

## Method

This audit applies the semantic-SEO **topical authority** model popularised by Koray Tuğberk Gübür — a site earns authority by achieving **topical coverage** of an entity's contextual domain and backing it with **historical data** (real impressions/clicks/engagement), organised as a **Core Section** (money pages) plus an **Outer Section** (supporting content that routes trust and link equity into the core). It is combined with the standard **pillar → cluster** internal-architecture model. Working formula: **Topical Authority ≈ Topical Coverage × Historical Data**.

Sources consulted:
- [The Koray Framework Explained — topicalmap.services](https://topicalmap.services/koray-framework/)
- [Semantic SEO Glossary based on Koray's Framework — rokonz.com](https://rokonz.com/resources/semantic-seo-glossary)
- [Koray Tuğberk Gübür's Advanced Strategies for Topical Maps — rankinghacks.com](https://www.rankinghacks.com/koray-tugberk-guburs-topical-maps-in-seo/)
- [Creating a Semantic SEO Topical Map Strategy — kfseomedia.com](https://www.kfseomedia.com/blog/semantic-seo-topical-map-strategy)
- [Topical Authority and Semantic SEO Course — topicalauthority.digital](https://www.topicalauthority.digital/)

---

## 1. Foundations (Source Context → Central Entity → Central Search Intent)

### 1.1 Source Context
- **Purpose:** a free, browser-only utility that converts plain text into copy-ready Unicode styles. No login, no upload, instant.
- **Monetisation:** high-pageview / zero-marginal-cost tool → **display / programmatic ads on the tool pages**, with possible future affiliate (keyboard apps, design tools). This fixes the economics: **the tool pages are where the money is made, so they are the Core Section, and every Outer-Section article exists to push a qualified click into a tool page.**
- **Web entity:** "SmallTextGen", `smalltextgen.site`. `Organization.sameAs` is currently empty — add social/profile URLs so the entity is disambiguated.
- **Near-name competitor to model:** `smalltextgen.com`. Broad-head competitor: `fontsgeneratorpro.com`.

### 1.2 Central Entity
**"Unicode text generator"** — the single concept that must appear in every section and in anchor text with synonym rotation:
> small text generator · tiny text generator · Unicode text converter · font generator · copy-and-paste fonts · fancy text generator · text styler

**Audit finding:** the site currently rotates only the *small / tiny text* synonyms. The *fonts / copy-and-paste fonts / Unicode converter* synonyms (clusters C07 and C04, the largest commercial demand outside the home cluster) are almost absent from titles, H1/H2s and boilerplate — so the macro-semantics don't cover that vocabulary.

### 1.3 Central Search Intent
> "Give me styled text I can **copy and paste right now** into a bio / caption / username / message, without installing anything — and tell me whether it will actually render where I paste it."

Transactional-informational hybrid. Three sub-intents drive the whole map:
1. **Get a specific style** (transactional) → Core Section tool pages.
2. **Will it work / why did it break** (informational) → Outer Section mechanism guides.
3. **How do I use it on <platform>** (informational, high-volume) → Outer Section platform guides.

### 1.4 Contextual domain — the attribute axes to cover
Central entity × context:

| Axis | Values that need coverage |
|---|---|
| **Style** | small caps · superscript · subscript · cursive/script · bubble (circled + filled) · underline · strikethrough · invisible/blank · fancy/stylish/special · bold · italic · monospace · fraktur · upside-down |
| **Function** | copy · paste · convert · generate · maker · converter · keyboard |
| **Destination** | Instagram bio · TikTok · Discord (name / nickname / message / — not username) · Twitter/X · Roblox · WhatsApp · YouTube · Facebook · Word/Docs |
| **Mechanism** | Unicode · character block / glyph · rendering · screen-reader accessibility · character limits · "shows as boxes / tofu" |
| **Use case** | chemistry & maths (sub/superscript) · aesthetic bios · gaming tags · blank lines / spacing |

---

## 2. The Topical Map

### 2.1 Core Section (money pages — must stay at crawl depth ≤ 1 from Home)

| # | Node | URL | Entity instance | Primary query (CSV) | Core attributes to densify on the page | Cluster | Current depth |
|---|---|---|---|---|---|---|---|
| 0 | **Hub / Home** | `/` | small text generator | `small text generator`, `tiny text generator`, `copy and paste fonts` | full style gallery · live convert · one-tap copy · platform matrix · "what is / where to use" above the fold | C07, C08 | root |
| 1 | Small caps | `/tools/small-caps` | small caps generator | `small capital letter generator` | small caps vs ALL CAPS vs Title Case · full-alphabet coverage · bio legibility | C06 | 1 |
| 2 | Superscript | `/tools/superscript` | superscript generator | `superscript copy paste` | exponents / powers · ⁿᵗʰ ordinals · number coverage · Discord · pairs with subscript | C01 | 1 |
| 3 | Subscript | `/tools/subscript` | subscript generator | `subscript generator` | chemistry formulae (H₂O, CO₂) · digit vs letter coverage · footnotes | C10 | 1 |
| 4 | Cursive | `/tools/cursive` | cursive font generator | `cursive font text generator` | script vs italic · aesthetic bios · "convert to cursive" · keyboard alternative | C11 | 1 |
| 5 | Bubble | `/tools/bubble` | bubble text generator | `bubble letters to copy and paste` | circled ⓐ vs filled 🅐 · Instagram / TikTok · bubble numbers | C03 | 1 |
| 6 | Underline | `/tools/underline` | underline text generator | `underscore text` | combining underline mark · portability · Docs/Word behaviour | C02 | 1 |
| 7 | Invisible / blank | `/tools/invisible` | invisible text generator | `blank text` | Braille-blank vs zero-width · Discord & IG blank · validators that reject empty | C09 | 1 |
| 8 | **Fancy text** | `/tools/fancy-text-generator` | fancy text generator | `fancy fonts for text` | all-styles gallery framed as *fancy / stylish / special* fonts | C05 | 1 (shipped Phase 1) |
| 9 | **Unicode converter** | `/tools/unicode-text-converter` | Unicode text converter | `text generator unicode` | every Unicode block shown at once · "converter" framing · commercial intent | C04 | 1 (shipped Phase 1) |
| 10 | **Tiny text** | `/tools/tiny-text-generator` | tiny text generator | `small text creator` | "how small can text get" · super-tiny · comparison vs superscript | C12 | 1 (shipped Phase 1) |

Nodes 8–10 shipped in Phase 1 as standalone gallery pages (`components/gallery-tool-page.tsx` + `lib/gallery-pages.ts`), each running the full multi-style `<Converter />` plus pillar-style content, `HowTo` + `FAQPage` + `WebApplication` schema, and entries in `sitemap.ts`, header, and footer. Cannibalisation guards from A9 are implemented in the page copy: node 10 is framed as "the three smallest styles / how small can it get" and links up to node 0 as the full library; node 8 routes generic *fancy / stylish / special* queries and defers cursive-specific queries to node 4.

### 2.2 Outer Section (supporting guides — build historical data, route equity into the Core)

Organised into 8 pillars. Each guide: **one** contextual link up to its Core node inside the first 150 words using the money anchor; 1–2 deeper links to sibling guides/tools; `Article` + `FAQPage` schema (+ `HowTo` where step-based). Full keyword detail is in `smalltextgen-keyword-clusters.csv` (rows with `keyword_role = blog`).

**Legend:** ✅ live · ➕ new · ✎ expand existing

| Pillar (Core hub) | Guide | slug | Primary keyword | Secondary keywords it also answers | Phase |
|---|---|---|---|---|---|
| **P1 — Small & Tiny text** (`/`, node 10) | ✅ How to Get Small Text on Your Instagram Bio | `small-text-instagram-bio` | small text instagram bio | small letters for bio, tiny text ig | live |
| | ✎ Tiny Text for Discord | `tiny-text-discord` | small text generator discord | tiny letters discord, small text in discord | 2 |
| | ➕ How to Make Tiny Text: Small Letters Copy & Paste | `how-to-make-tiny-text` | how to make tiny text | small letters copy and paste, copy and paste small text, smallest letter copy and paste | 1 |
| | ➕ Smallest Text Style Compared: Tiny vs Superscript vs Small Caps | `smallest-text-style-compared` | really tiny text | very tiny text, super tiny text, extremely small font generator, tiny lettering | 1 |
| | ➕ Numbers in Small Font: Superscript, Subscript & Tiny Digits | `numbers-in-small-font` | numbers in small font | small font numbers, tiny numbers copy paste | 3 |
| | ➕ Small Text as an Image (PNG) vs Unicode | `small-text-png-vs-unicode` | small text png | small text image, save small text | 3 |
| **P2 — Superscript & Subscript** (nodes 2, 3) | ✅ Subscript vs Superscript | `subscript-vs-superscript` | subscript vs superscript | difference superscript subscript | live |
| | ✎ Subscript Numbers for Chemistry & Maths | `subscript-numbers-chemistry` | subscript numbers copy paste | subscript 1 copy and paste, H2O CO2 text | 2 |
| | ➕ How to Type Superscript Numbers & Exponents | `superscript-numbers-exponents` | superscript numbers copy and paste | exponent generator, exponent text generator, th superscript copy | 1 |
| | ➕ Superscript in Discord | `superscript-discord` | discord superscript generator | superscript discord, raised text discord | 2 |
| | ➕ Superscript + Subscript Together: The Full Character Set | `superscript-subscript-character-set` | superscript and subscript generator | subscript and superscript generator | 2 |
| **P3 — Bubble text** (node 5) | ➕ Bubble Letters to Copy & Paste (Circle & Filled) | `bubble-letters-copy-paste` | bubble letters to copy and paste | bubble letter copy and paste, copy paste bubble letters, bubbly fonts copy and paste, bubble font copy and paste | 1 |
| | ➕ How to Get Bubble Text on Instagram & TikTok | `bubble-text-instagram-tiktok` | bubble text instagram | bubble font bio, bubbly font tiktok | 2 |
| **P4 — Cursive & Fancy** (nodes 4, 8) | ✅ Cursive Fonts for Instagram Bio | `cursive-fonts-instagram-bio` | cursive fonts instagram bio | cursive bio copy paste | live |
| | ✅ How a Cursive Font Generator Works | `how-cursive-font-generator-works` | how cursive font generator works | cursive unicode script | live |
| | ➕ Convert Text to Cursive: Copy & Paste Cursive Fonts | `convert-text-to-cursive` | convert to cursive | convert into cursive, cursive font converter, cursive font change, change font cursive, text in cursive font | 1 |
| | ➕ Fancy Text Generator: Every Copy-Paste Font Style Explained | `fancy-text-styles-explained` | fancy fonts for text | stylish fonts copy paste, special fonts generator, fancy text copy and paste generator | 1 |
| | ➕ Cute & Aesthetic Cursive Fonts for Bios | `aesthetic-cursive-fonts` | cute cursive font generator | beautiful cursive fonts generator | 2 |
| | ➕ Thin & Simple Cursive Fonts | `thin-cursive-fonts` | thin cursive font generator | simple cursive font generator | 3 |
| | ➕ Cursive Font Keyboard: Type Script Text on Phone & PC | `cursive-font-keyboard` | cursive font keyboard | cursive keyboard iphone/android | 3 |
| **P5 — Invisible / blank** (node 7) | ✅ What Invisible Text Is | `what-is-invisible-text` | what is invisible text | invisible character explained | live |
| | ✎ Blank Space for Discord: Empty Name & Message | `blank-discord-name-message` | blank discord copy paste | empty discord name, invisible discord message | 2 |
| | ➕ Blank Text to Copy & Paste: The Empty Message Character | `blank-text-copy-paste` | blank text copy and paste | empty text copy and paste, copy and paste nothing, empty message copy and paste | 1 |
| | ➕ Invisible Character for Instagram Captions & Bios | `invisible-character-instagram` | blank caption copy paste | blank highlight text, invisible caption instagram | 2 |
| | ➕ Hidden & Zero-Width Characters Explained | `hidden-zero-width-characters` | hidden characters text | zero-width space, invisible unicode characters | 3 |
| **P6 — Small caps** (node 1) | ➕ Small Caps Generator: Small Capital Letters Copy & Paste | `small-caps-copy-paste` | small capital letters copy and paste | small capital letter generator, copy and paste small caps | 2 |
| | ➕ Small Caps vs All Caps vs Title Case | `small-caps-vs-all-caps` | small caps vs all caps | when to use small caps | 3 |
| **P7 — Underline / strikethrough** (nodes 6 + `/tools/strikethrough`) | ➕ Underline & Underscore Text Copy & Paste | `underline-text-copy-paste` | underline font copy and paste | underscore text, underline word generator | 2 |
| **P8 — Unicode & Fonts foundations** (`/`, node 9) | ✅ Unicode, Explained | `unicode-explained` | unicode text explained | why not real fonts | live |
| | ✅ Best Copy-Paste Text Tricks for Bios | `copy-paste-text-tricks-social-media-bios` | copy paste text tricks | bio font tricks | live |
| | ➕ Copy and Paste Fonts: The Complete Guide to Every Style | `copy-paste-fonts-guide` | copy and paste fonts | font copy and paste, fonts to copy and paste, copy paste font generator, copy and paste words | 1 |
| | ➕ Unicode Text Converter: How Copy-Paste Fonts Actually Work | `unicode-text-converter-explained` | text generator unicode | unicode font maker, unicode to text converter, unicode text formatter | 1 |
| | ➕ Cool & Different Fonts to Copy and Paste (Style Gallery) | `cool-different-fonts` | cool fonts copy and paste | different fonts copy and paste, different font generator, special font copy and paste | 2 |
| | ➕ Are Copy-Paste Fonts Free, Safe & Accessible? | `are-copy-paste-fonts-safe` | free fonts copy and paste | copy and paste fonts free, are unicode fonts safe, screen reader accessibility | 2 |
| **Cross-pillar — Platform** (link to 4-6 tools each) | ➕ Fonts & Small Text for TikTok | `fonts-for-tiktok` | fonts for tiktok bio | — | 3 |
| | ➕ Fonts & Small Text for Twitter / X | `fonts-for-twitter-x` | fonts for twitter | — | 3 |
| | ➕ Copy-Paste Fonts for Roblox & Game Names | `fonts-for-roblox` | roblox font copy and paste | — | 3 |

**Totals (plan):** 10 originally live · 3 expanded · **27 new**. **Status (2026-09-03): all authored — 37 guides live** in `lib/guides.ts`, grouped into 6 pillars (A/B/C/D/Sitewide/Platform) on `/guides`.

### 2.3 Standard outer-guide outline (contextual flow — answer first, rhetoric never)

```
H1  <primary keyword, natural phrasing>
    Dek: one sentence — what the reader leaves with
Intro (2 short paras)
    - the answer in sentences 1–2 (snippet bait)
    - ONE link to the hub tool page, money anchor
H2  What it is / how it works      → Unicode block, why it renders everywhere, where it breaks
H2  Step by step: copy & paste     → numbered 4–6 steps, platform-specific   (HowTo schema)
H2  Style variants / comparison    → table; naturally uses the secondary keywords
H2  Where it works / limits        → Instagram / Discord / TikTok / usernames caveats
H2  Troubleshooting                → "shows as a box", counts toward character limit
FAQ 4–6 Q&As in question-form secondary keywords   (FAQPage schema)
Related: 2–3 links (sibling guides + hub tool)
```

---

## 3. Current-state audit — findings

| # | Area | Finding | Severity |
|---|---|---|---|
| A1 | **Thin Core nodes** | `small-caps`, `superscript`, `bubble`, `underline` (also `bold`, `strikethrough`, `upside-down`, `zalgo`) fall back to the generic tool template: weak H1 (`<Style><br>text generator.`), a 2-sentence explainer, no HowTo, no FAQ, no guide links. Small caps & superscript are high-volume commercial nodes → **biggest coverage leak**. | High |
| A2 | **Macro-semantic vocabulary gap** | Titles/H1/H2 and header/footer boilerplate never say *copy and paste fonts*, *font generator*, *Unicode text converter*. Clusters C07 (32 kw) + C04 (13 kw) — the largest commercial demand outside home — are lexically invisible sitewide. | High |
| A3 | **Outer Section underbuilt** | 11 Core : 10 Outer ≈ 1:0.9. A utility site building topical authority wants ≈ 1 Core : 3 Outer. Subscript/cursive/invisible have 2 guides each; small-caps, bubble, underline, fonts, unicode have **zero**. | High |
| A4 | **Contextual flow on Home** | The definition + "where to use" semantic block sits *below* a large product-marketing "Features" grid. Koray's contextual-flow rule: the page should process the informational context (what it is / where it works) **before** persuasion. | Medium |
| A5 | **Core-node sibling linking** | Only the 3 rich pillar pages cross-link to other tools (`pillarNav`, 4 entries). The other 8 tool pages link to 4 arbitrary siblings via the generic template. No consistent Core-to-Core mesh. | Medium |
| A6 | **Guides index = flat list** | `/guides` renders one ungrouped grid. No pillar hierarchy → weak contextual hierarchy, no topic-cluster signal, poor crawl prioritisation of the pillars. | Medium |
| A7 | **Crawl depth / nav coverage** | Header nav = 6 tools; Home tool grid = 9 (missing `strikethrough`). `bold`, `strikethrough`, `upside-down`, `zalgo` reachable only from `/#generator` deep links. | Low |
| A8 | **Schema gaps** | `WebApplication` + `FAQPage` + `BreadcrumbList` present. Missing: `HowTo` JSON-LD on tool pages that already show numbered steps; `Organization.sameAs` empty. | Low |
| A9 | **Cannibalisation (future)** | Home vs planned `/tools/tiny-text-generator` both target `tiny text generator`; `/tools/cursive` vs planned `/tools/fancy-text-generator` overlap on `fancy text generator cursive`. Needs explicit query assignment before nodes 8/10 ship. | Watch |
| A10 | **Near-dupe queries** | `supercript`, `super script generator`, `francy text`, `fancey text`, `smol text`, `small text genorator`, etc. — correctly get **no page**; caught by the primary node. Documented so nobody builds them. | OK |

### 3.1 Topical coverage score (self-assessed, 0–5)

| Cluster | Node | Score | Why |
|---|---|---:|---|
| C08 small / tiny text | Home | 3.5 | strong hub; "fonts" vocab thin; few use-case subpages |
| C10 subscript | `/tools/subscript` | 4.0 | rich pillar + 2 guides |
| C11 cursive | `/tools/cursive` | 4.0 | rich pillar + 2 guides |
| C09 invisible | `/tools/invisible` | 4.0 | rich pillar + 2 guides |
| C01 superscript | `/tools/superscript` | 2.0 → **4.0** | pillar content (P0) + exponents, Discord, character-set, small-numbers guides |
| C06 small caps | `/tools/small-caps` | 1.5 → **4.0** | pillar content (P0) + `small-caps-copy-paste` + `small-caps-vs-all-caps` |
| C03 bubble | `/tools/bubble` | 1.5 → **4.0** | pillar content (P0) + `bubble-letters-copy-paste` + `bubble-text-instagram-tiktok` |
| C02 underline | `/tools/underline` | 1.0 → **3.5** | pillar content (P0) + `underline-text-copy-paste` |
| C07 font generator | Home | 1.0 → **4.0** | home vocab (P0) + `copy-paste-fonts-guide` + `cool-different-fonts` + `are-copy-paste-fonts-safe` |
| C04 unicode converter | `/tools/unicode-text-converter` | 0.5 → **4.0** | node built (P1) + `unicode-text-converter-explained` |
| C05 fancy text | `/tools/fancy-text-generator` | 0.5 → **4.0** | node built (P1) + `fancy-text-styles-explained` + `cool-different-fonts` |
| C12 tiny text | `/tools/tiny-text-generator` | n/a → **4.0** | node built (P1) + `how-to-make-tiny-text` + `smallest-text-style-compared` |
| Platform (cross) | 4–6 tools each | n/a → **3.0** | new: TikTok, Twitter/X, Roblox guides |

**Weighted coverage ≈ 2.3 → ~3.9 / 5 after Phases 0–3.** Every cluster now has a dedicated Core node plus 2+ supporting pages, and every `blog`-role keyword in the CSV maps to a URL. The remaining gap between ~3.9 and 5 is **historical data** — real impressions and engagement — which only accrues once the pages index and rank. Next lever is measurement + refresh, not more publishing.

---

## 4. What has shipped

### Phase 0 — on-page optimization pass

| Change | Files | Fixes |
|---|---|---|
| Rich pillar content for **small-caps, superscript, bubble, underline** (intro, 4-step HowTo, "where used", 5-Q FAQ, guide links, schema) | `lib/pillar-content.ts` | A1 |
| Expand `pillarNav` to a Core mesh (home + 7 tools); cap the "keep exploring" list | `lib/pillar-content.ts`, `components/pillar-tool-page.tsx` | A5 |
| Home: broaden `<title>` + meta + hero copy for *copy-and-paste fonts / font generator / Unicode converter / tiny text* synonyms; 3 new FAQ entries; move the "what is / where to use" block above the Features grid; add `strikethrough` to the grid | `app/page.tsx` | A2, A4, A7 |
| `/guides` index grouped by pillar, each headed by its hub-tool link | `app/guides/page.tsx` | A6 |
| `HowTo` JSON-LD on pillar tool pages | `components/pillar-tool-page.tsx` | A8 |

### Phase 1 — gap Core nodes + first outer guide per pillar

| Change | Files | Fixes |
|---|---|---|
| Build nodes 8–10: `/tools/fancy-text-generator`, `/tools/unicode-text-converter`, `/tools/tiny-text-generator` — full `<Converter />` + intro / styles-included grid / 4-step HowTo / where-used / 5-Q FAQ, and `WebApplication` + `HowTo` + `FAQPage` + `BreadcrumbList` schema | `lib/gallery-pages.ts`, `components/gallery-tool-page.tsx`, `app/tools/*/page.tsx`, `app/globals.css` | C04, C05, C12 coverage |
| Wire the new nodes into `sitemap.ts`, header nav, footer, home tool grid, `/guides` generators list | `app/sitemap.ts`, `components/site-header.tsx`, `components/site-footer.tsx`, `app/page.tsx`, `app/guides/page.tsx` | A7, crawl depth ≤ 1 |
| Author 8 outer guides (one per pillar): `how-to-make-tiny-text`, `superscript-numbers-exponents`, `bubble-letters-copy-paste`, `convert-text-to-cursive`, `fancy-text-styles-explained`, `blank-text-copy-paste`, `copy-paste-fonts-guide`, `unicode-text-converter-explained` — each with `Article` + `FAQPage` schema, one money-anchor link up to its hub node, sibling links | `lib/guides.ts` | A3 |

### Phase 2 + 3 — full Outer Section build-out (2026-09-03)

| Change | Files | Fixes |
|---|---|---|
| Authored the remaining **19 new guides** — Phase-1 straggler (`smallest-text-style-compared`), all Phase-2 pieces (`superscript-discord`, `superscript-subscript-character-set`, `bubble-text-instagram-tiktok`, `aesthetic-cursive-fonts`, `invisible-character-instagram`, `small-caps-copy-paste`, `underline-text-copy-paste`, `cool-different-fonts`, `are-copy-paste-fonts-safe`), and all Phase-3 pieces (`numbers-in-small-font`, `small-text-png-vs-unicode`, `thin-cursive-fonts`, `cursive-font-keyboard`, `hidden-zero-width-characters`, `small-caps-vs-all-caps`, `fonts-for-tiktok`, `fonts-for-twitter-x`, `fonts-for-roblox`) | `lib/guides.ts` | A3 |
| **Expanded** the 3 flagged live guides with a new section + 2 FAQ each: `tiny-text-discord` (About Me / status / mobile), `subscript-numbers-chemistry` (ready-to-build formula list + "subscript 1" + ionic charges), `blank-discord-name-message` (channel-spacer messages + AutoMod) | `lib/guides.ts` | A3 |
| New `"Platform"` guide cluster + `/guides` pillar section for the cross-pillar app guides | `lib/guides.ts`, `app/guides/page.tsx` | A6 |

Verified: `typecheck` + `lint` + `build` (**63 static pages**, up from 33 pre-Phase-0) + `10/10` tests green; slug-uniqueness and every internal `/guides/*` and `/tools/*` link checked — no dangling references.

**Outer Section: 37 guides across 6 pillars.** Every `blog`-role keyword in the CSV now maps to a published URL.

**Still open (ops, not content):** `Organization.sameAs` (needs the user's social/profile URLs in `NEXT_PUBLIC_SOCIAL_LINKS`); GSC baseline + cannibalisation watch on "tiny text generator" (home vs node 10); ongoing refresh cycle driven by historical data.

---

## 5. Roadmap (Coverage × Historical Data, priority order)

**Phase 0 — this pass.** Thicken the 4 thin Core nodes; fix macro-semantics + contextual flow on Home; pillar-group the guides; Core-to-Core mesh; HowTo schema.

**Phase 1 — highest gap value. ✅ DONE (2026-09-03).**
- ✅ Built `/tools/unicode-text-converter` (C04), `/tools/fancy-text-generator` (C05), and `/tools/tiny-text-generator` (C12) — all-styles converter + pillar content + schema + `sitemap.ts` + header + footer.
- ✅ Published one outer guide per pillar (8): `how-to-make-tiny-text`, `superscript-numbers-exponents`, `bubble-letters-copy-paste`, `convert-text-to-cursive`, `fancy-text-styles-explained`, `blank-text-copy-paste`, `copy-paste-fonts-guide`, `unicode-text-converter-explained`.

**Phase 2 — cluster depth + platform intent. ✅ DONE (2026-09-03).**
- ✅ Expanded `tiny-text-discord`, `subscript-numbers-chemistry`, `blank-discord-name-message`.
- ✅ Published all Phase-2 guides: `smallest-text-style-compared`, `superscript-discord`, `superscript-subscript-character-set`, `bubble-text-instagram-tiktok`, `aesthetic-cursive-fonts`, `invisible-character-instagram`, `small-caps-copy-paste`, `underline-text-copy-paste`, `cool-different-fonts`, `are-copy-paste-fonts-safe`.
- ⬜ `Organization.sameAs` — still open (needs the user's profile URLs).

**Phase 3 — long tail + refresh loop. ✅ CONTENT DONE (2026-09-03).**
- ✅ Published all Phase-3 guides: `numbers-in-small-font`, `small-text-png-vs-unicode`, `thin-cursive-fonts`, `cursive-font-keyboard`, `hidden-zero-width-characters`, `small-caps-vs-all-caps`, `fonts-for-tiktok`, `fonts-for-twitter-x`, `fonts-for-roblox`.
- ⬜ Ongoing: re-pull competitor SERP positions once these index; anything where `smalltextgen.com` / `fontsgeneratorpro.com` still outrank → refresh queue. Hold publication momentum on any new gaps GSC surfaces.

---

## 6. Measurement

| Signal | Definition | Target |
|---|---|---|
| **Coverage** | % of CSV `primary` + `secondary` keywords that have a URL where the keyword appears in title/H1/H2 | ≥ 90 % by end of Phase 1 |
| **Historical data** | GSC impressions per Core node, month over month | up and to the right on all 14 nodes |
| **Equity routing** | clicks on the money anchor inside each outer guide | ≥ 3 % of guide pageviews |
| **Momentum** | new guides published per week; median time-to-index | ≥ 2/wk; < 5 days |
| **Cannibalisation** | Core nodes where GSC shows 2 of our URLs alternating for one query | 0 |

### 6.1 GSC baseline — captured 2026-09-03 (3 months to Aug 31, `https://smalltextgen.site/` URL-prefix property)

The "before" numbers. The Phase 0–3 work is committed but **not yet deployed** (Vercel deploy `daf9214` is `BLOCKED` on team/billing config), so none of it is reflected here.

| Metric | Value | Read |
|---|---|---|
| Clicks (3 mo) | **0** | nothing ranks high enough to be clicked |
| Impressions (3 mo) | **4,120** | Google shows the site for **815 distinct queries** |
| Avg CTR | 0 % | — |
| Avg position | **67.9** | every query sits page 6–9 |
| Indexed pages | **16** | of ~28 known |
| Not indexed | **12** | 11 "Discovered – currently not indexed" (never crawled), 1 "Crawled – not indexed" |
| Sitemap | `/sitemap.xml` — Success, 27 pages, last read Sep 2 | will jump to 57 on deploy |
| First impressions | ~Aug 8 2026 | domain is ~4 weeks into being indexed |

**Top pages by impressions:** `/guides/tiny-text-discord` 1,340 impr @ pos **57.7** (best page, 33 % of all impressions) · `/tools/subscript` 938 @ 73.8 · `/` 883 @ 71.6 · `/tools/small-caps` 197 @ 82.7 · `/tools/superscript` 192 @ 78.3 · `/guides/blank-discord-name-message` 188 @ 58.5 · `/guides/small-text-instagram-bio` 61 @ 55.1.

**Top queries by impressions:** small text generator (77 @ 73.9) · text small generator (45 @ 75.9) · small text maker (35 @ 69.2) · subscript generator (35 @ 71.4) · text generator small (32) · small text gen (27) · super small text generator (26) · small text converter (24) · subscript and superscript generator (16) · little text generator (15).

**Never-crawled (Discovered, last-crawled N/A):** `/guides` index, `/guides/cursive-fonts-instagram-bio`, `/guides/subscript-numbers-chemistry`, `/guides/subscript-vs-superscript`, `/tools/strikethrough`, `/tools/underline`, `/tools/upside-down`, `/contact`, `/privacy`, `/terms`.

**Diagnosis:** textbook brand-new domain. Google has crawled the indexed set, understands the topic (every one of the 815 queries is on-theme), and parks the whole site at position ~68 for lack of authority — hence 0 clicks. Guides already out-rank tool pages by ~15 positions, which validates the Outer-Section-first approach. The ceiling is **domain authority (backlinks) + crawl priority**, not on-page content. The Phase 0–3 build-out is necessary groundwork; it will not by itself move position 68 → page 1.

### 6.2 Post-deploy actions (in order)

1. **Unblock the Vercel deploy** — resolve the `researchcrave` team config/billing so `daf9214` ships. Nothing below matters until the new pages are live.
2. Re-submit `/sitemap.xml` in GSC; confirm discovered-pages climbs toward 57.
3. **Request Indexing** (URL Inspection) for: the 3 new tool pages, `/` (title changed), `/guides` index, and the 4 strongest new hub guides (`copy-paste-fonts-guide`, `how-to-make-tiny-text`, `bubble-letters-copy-paste`, `convert-text-to-cursive`).
4. Request Indexing for the 7 never-crawled existing pages (`/guides`, the 3 guides, strikethrough / underline / upside-down).
5. **Off-page** becomes the priority lever: directory + tool-roundup listings, a handful of relevant outreach placements, forum/QA answers, social. This is what closes the position-68 gap.
6. **Cadence:** re-pull GSC at +2 weeks (watch indexation 16 → toward 57, new pages moving Discovered → Indexed), then monthly for position/impression trend per cluster and the home vs `/tools/tiny-text-generator` cannibalisation check on "tiny text generator".

---

## 7. Appendix — cluster → node quick map

| Cluster | Node | Primary query | Outer guides feeding it |
|---|---|---|---|
| C01 Superscript | `/tools/superscript` | superscript copy paste | superscript-numbers-exponents, superscript-discord, superscript-subscript-character-set, subscript-vs-superscript |
| C02 Underline | `/tools/underline` | underscore text | underline-text-copy-paste |
| C03 Bubble | `/tools/bubble` | bubble letters to copy and paste | bubble-letters-copy-paste, bubble-text-instagram-tiktok |
| C04 Unicode converter | `/tools/unicode-text-converter` *(gap)* | text generator unicode | unicode-text-converter-explained, unicode-explained |
| C05 Fancy text | `/tools/fancy-text-generator` *(gap)* | fancy fonts for text | fancy-text-styles-explained, cool-different-fonts |
| C06 Small caps | `/tools/small-caps` | small capital letter generator | small-caps-copy-paste, small-caps-vs-all-caps |
| C07 Font generator | `/` | copy and paste fonts | copy-paste-fonts-guide, are-copy-paste-fonts-safe, cool-different-fonts |
| C08 Small / tiny text | `/` | small text generator | how-to-make-tiny-text, small-text-instagram-bio, tiny-text-discord, smallest-text-style-compared |
| C09 Invisible / blank | `/tools/invisible` | blank text | blank-text-copy-paste, what-is-invisible-text, blank-discord-name-message, invisible-character-instagram, hidden-zero-width-characters |
| C10 Subscript | `/tools/subscript` | subscript generator | subscript-numbers-chemistry, subscript-vs-superscript, superscript-subscript-character-set |
| C11 Cursive | `/tools/cursive` | cursive font text generator | convert-text-to-cursive, cursive-fonts-instagram-bio, how-cursive-font-generator-works, aesthetic-cursive-fonts, thin-cursive-fonts, cursive-font-keyboard |
| C12 Tiny text page | `/tools/tiny-text-generator` *(gap)* or `/` | small text creator | smallest-text-style-compared, how-to-make-tiny-text |
