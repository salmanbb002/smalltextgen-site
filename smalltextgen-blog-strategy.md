# SmallTextGen — Keyword Clusters & Blog Content Strategy

**Our site:** `smalltextgen.site` (Next.js, static). Routes: `/` (home converter), `/tools/[slug]` (11 tool pages), `/guides/[slug]` (10 guides live).
**Competitors mapped in this research:** `smalltextgen.com` (near-identical name — the primary model to copy) and `fontsgeneratorpro.com` (broad "font generator / copy-paste fonts" head terms).
**Data file:** `smalltextgen-keyword-clusters.csv` — 277 keywords across 12 clusters, each tagged with intent, the competitor page that ranks, the competitor position, a keyword role, and the recommended asset on our site.
**Last updated:** 2026-09-01

---

## 1. How to read this

Every keyword falls into one of four **roles**:

| Role | Meaning | What we do with it |
|---|---|---|
| `primary` | The head term a page should win | One dedicated money page, keyword in H1 + title + URL |
| `secondary` | Same intent, belongs on the same money page | On-page H2/H3 section, FAQ entry, body copy, alt text |
| `variant` | Misspelling or trivial re-order (`supercript`, `francy text`, `smol text`) | No new page. Let the primary page catch it; optionally one line in an FAQ |
| `blog` | Informational query a converter UI does not answer | A supporting guide/blog post that links down to the money page |

The money pages already exist for most clusters and rank fine for their competitor equivalents in principle — the job is (a) close **3 tool-page gaps**, (b) harden on-page coverage of `secondary` keywords, and (c) build **~18 supporting posts** that mop up the `blog` role and feed link equity to the converters.

---

## 2. Cluster → page map

| ID | Cluster | Keywords | Top intent | Competitor page | Our money page | Status |
|---|---|---:|---|---|---|---|
| C01 | Superscript generator | 26 | informational | `smalltextgen.com/superscript-generator/` | `/tools/superscript` | **Exists** — expand |
| C02 | Underline / underscore text | 3 | informational | `smalltextgen.com/underline-text-generator/` | `/tools/underline` | **Exists** — thin cluster, low effort |
| C03 | Bubble text | 12 | informational | `smalltextgen.com/bubble-text-generator/` | `/tools/bubble` | **Exists** — competitor is #1 for ~8, high-value defend |
| C04 | Unicode text converter | 13 | informational / commercial | `smalltextgen.com/unicode-text-converter/` | `/tools/unicode` | **GAP — build new tool page** |
| C05 | Fancy text generator | 17 | informational | `smalltextgen.com/fancy-text-generator/` | `/tools/fancy` | **GAP — build new tool page** |
| C06 | Small caps generator | 14 | informational | `smalltextgen.com/small-caps-generator/` | `/tools/small-caps` | **Exists** — expand |
| C07 | Font generator / copy-paste fonts | 32 | **commercial** | `fontsgeneratorpro.com/` | `/` (home) | **Exists** — home must target these head terms explicitly |
| C08 | Small / tiny text generator (home) | 63 | commercial | `smalltextgen.com/` | `/` (home) | **Exists** — primary money cluster |
| C09 | Invisible / blank text | 33 | informational | `smalltextgen.com/invisible-text-generator/` | `/tools/invisible` | **Exists** — expand, biggest blog tail |
| C10 | Subscript generator | 12 | informational | `smalltextgen.com/subscript-generator/` | `/tools/subscript` | **Exists** — expand |
| C11 | Cursive font generator | 28 | informational | `smalltextgen.com/cursive-font-generator/` | `/tools/cursive` | **Exists** — expand, big blog tail |
| C12 | Tiny text generator (2nd page) | 24 | informational | `smalltextgen.com/tiny-text-generator/` | `/tools/tiny` | **GAP — build new tool page** (or a `#tiny` deep section on home) |

### 2.1 Tool-page gaps to build (priority order)

1. **`/tools/unicode` — "Unicode Text Converter"** (C04, 13 kw, several `top 2` for the competitor incl. commercial `unicode font generator`, `unicode text generator`). Highest gap value: commercial intent, no page today. The converter shows *all* styles at once (this is what "unicode text converter" searchers expect) — reuse the home converter component with every style block visible.
2. **`/tools/fancy` — "Fancy Text Generator"** (C05, 17 kw). "Fancy text" is a genre label users type when they don't know the style name; the page should be an all-styles gallery like C04 but merchandised around "fancy / stylish / special fonts". Risk of self-cannibalising the home page — differentiate by framing home = "small / tiny text", fancy = "decorative / stylish fonts".
3. **`/tools/tiny` — "Tiny Text Generator"** (C12, 24 kw). `smalltextgen.com` runs *two* near-duplicate pages (home + `/tiny-text-generator/`) and ranks `tinytext` #1 on the second one. We can either (a) build a sibling page targeting `small text creator`, `really tiny text`, `super tiny text`, `very tiny text`, or (b) add a strong anchored section `/#tiny-text` on home and skip the page to avoid dilution. **Recommendation: build the page** — it lets us own the "how small can it get" comparison content and the `blog`-role tail without bloating the home page.

### 2.2 On-page hardening for existing money pages

For every existing tool page, add/verify:

- **Title + H1** carry the `primary` keyword verbatim (e.g. `/tools/small-caps` → "Small Caps Generator — Small Capital Letters Copy & Paste").
- **A "styles / variants" H2** that naturally works in the `secondary` keywords (`small caps text generator`, `small capital letters copy and paste`, `font generator small caps`…). One sentence each, not stuffing.
- **A 4–6 item FAQ** using question-form `secondary`/`blog` keywords ("Does small caps work on Instagram?", "Why do some letters not convert?").
- **"Related tools" links** to the 3–4 nearest clusters (superscript ⇄ subscript ⇄ small-caps; cursive ⇄ fancy; invisible ⇄ blank).
- **A 120–200 word intro** above the converter that states what Unicode block the style uses and where it renders — this is the differentiator vs. the competitor's thin pages and feeds E-E-A-T.

---

## 3. Blog / guide architecture

Guides live at `/guides/[slug]` and carry a `cluster` tag (`A`–`D`, `Sitewide`) in `lib/guides.ts`. Keep that system. Below, each post has: **primary kw**, **secondary kws it also targets**, **hub it links down to**, **phase**.

10 guides already exist:
`small-text-instagram-bio`, `tiny-text-discord`, `what-is-invisible-text`, `blank-discord-name-message`, `subscript-vs-superscript`, `subscript-numbers-chemistry`, `cursive-fonts-instagram-bio`, `how-cursive-font-generator-works`, `unicode-explained`, `copy-paste-text-tricks-social-media-bios`.

### Pillar 1 — Small & Tiny Text (hub: `/` and `/tools/tiny`)

| # | Post (working title) | Slug | Primary kw | Also targets | Phase |
|---|---|---|---|---|---|
| 1 | **How to Make Tiny Text: Small Letters Copy & Paste** | `how-to-make-tiny-text` | how to make tiny text | small letters copy and paste, small text copy and paste, smallest letter copy and paste, copy and paste small text | 1 |
| 2 | Small Text vs Tiny Text vs Superscript: Which Is Actually Smallest? | `smallest-text-style-compared` | really tiny text | very tiny text, super tiny text, super small text generator, extremely small font generator, tiny lettering | 1 |
| 3 | Small Text Generator for Discord *(expand existing `tiny-text-discord`)* | `tiny-text-discord` | small text generator discord | small text generator discord, tiny letters discord | 2 |
| 4 | Numbers in Small Font: Superscript, Subscript & Tiny Digits | `numbers-in-small-font` | numbers in small font | small font numbers, tiny numbers copy paste | 3 |
| 5 | Small Text as an Image (PNG) vs Unicode: When to Use Which | `small-text-png-vs-unicode` | small text png | small text image, save small text | 3 |
| 6 | `smol` Text & Internet Slang Styling | `smol-text` | smol text | miniature text, mini text | 3 |

### Pillar 2 — Superscript & Subscript (hub: `/tools/superscript`, `/tools/subscript`)

| # | Post | Slug | Primary kw | Also targets | Phase |
|---|---|---|---|---|---|
| 7 | **How to Type Superscript Numbers & Exponents (Copy & Paste)** | `superscript-numbers-exponents` | superscript numbers copy and paste | exponent generator, exponent text generator, superscript numbers copy paste, th superscript copy | 1 |
| 8 | Superscript in Discord: Copy, Paste & What Renders | `superscript-discord` | discord superscript generator | superscript discord, tiny raised text discord | 2 |
| 9 | Superscript & Subscript Together: The Full Character Set | `superscript-subscript-character-set` | superscript and subscript generator | subscript and superscript generator, unicode superscript/subscript coverage | 2 |
| 10 | Subscript Numbers for Chemistry & Maths *(expand existing `subscript-numbers-chemistry`)* | `subscript-numbers-chemistry` | subscript numbers copy paste | subscript 1 copy and paste, H2O CO2 formula text | 2 |

### Pillar 3 — Bubble Text (hub: `/tools/bubble`)

| # | Post | Slug | Primary kw | Also targets | Phase |
|---|---|---|---|---|---|
| 11 | **Bubble Letters to Copy & Paste (Circle & Filled Styles)** | `bubble-letters-copy-paste` | bubble letters to copy and paste | bubble letter copy and paste, copy paste bubble letters, bubbly fonts copy and paste, bubble font copy and paste | 1 |
| 12 | How to Get Bubble Text on Instagram & TikTok | `bubble-text-instagram-tiktok` | bubble text instagram | bubble font for bio, bubbly font tiktok | 2 |

> Competitor holds **#1** for ~8 bubble terms — post 11 plus a hardened `/tools/bubble` (both ⓐ circled and 🅐 filled variants, explicit) is the single best "steal share" play in this set.

### Pillar 4 — Cursive & Fancy (hub: `/tools/cursive`, new `/tools/fancy`)

| # | Post | Slug | Primary kw | Also targets | Phase |
|---|---|---|---|---|---|
| 13 | **Convert Text to Cursive: Copy & Paste Cursive Fonts** | `convert-text-to-cursive` | convert to cursive | convert into cursive, cursive font converter, cursive font change, change font cursive, text in cursive font | 1 |
| 14 | Fancy Text Generator: Every Copy-Paste Font Style Explained | `fancy-text-styles-explained` | fancy fonts for text | stylish fonts copy paste, special fonts generator, fancy text copy and paste generator | 1 |
| 15 | Cute & Aesthetic Cursive Fonts for Bios | `aesthetic-cursive-fonts` | cute cursive font generator | beautiful cursive fonts generator, aesthetic fancy fonts | 2 |
| 16 | Thin & Simple Cursive Fonts (Minimal Script Styles) | `thin-cursive-fonts` | thin cursive font generator | simple cursive font generator, thin script text | 3 |
| 17 | Cursive Font Keyboard: Type Script Text on Phone & PC | `cursive-font-keyboard` | cursive font keyboard | cursive keyboard iphone, script text keyboard android | 3 |

### Pillar 5 — Invisible / Blank Text (hub: `/tools/invisible`)

| # | Post | Slug | Primary kw | Also targets | Phase |
|---|---|---|---|---|---|
| 18 | **Blank Text to Copy & Paste: The Empty Message Character** | `blank-text-copy-paste` | blank text copy and paste | empty text copy and paste, copy and paste nothing, empty message copy and paste, blank text to copy | 1 |
| 19 | Invisible Character for Instagram Captions & Bios | `invisible-character-instagram` | blank caption copy paste | blank highlight text, invisible caption instagram, blank line in bio | 2 |
| 20 | Blank Space for Discord: Empty Name & Message *(expand existing `blank-discord-name-message`)* | `blank-discord-name-message` | blank discord copy paste | empty discord name, invisible discord message | 2 |
| 21 | Hidden & Zero-Width Characters Explained *(expand existing `unicode-explained` or new)* | `hidden-zero-width-characters` | hidden characters text | zero-width space, invisible unicode characters | 3 |

### Pillar 6 — Small Caps (hub: `/tools/small-caps`)

| # | Post | Slug | Primary kw | Also targets | Phase |
|---|---|---|---|---|---|
| 22 | Small Caps Generator: Small Capital Letters Copy & Paste *(mostly on-page; short guide only if needed)* | `small-caps-copy-paste` | small capital letters copy and paste | small capital letter generator, copy and paste small caps, small caps text generator | 2 |
| 23 | Small Caps vs All Caps vs Title Case for Bios & Headers | `small-caps-vs-all-caps` | small caps vs all caps | when to use small caps, small caps readability | 3 |

### Pillar 7 — Underline / Strikethrough / Underscore (hub: `/tools/underline`, `/tools/strikethrough`)

| # | Post | Slug | Primary kw | Also targets | Phase |
|---|---|---|---|---|---|
| 24 | Underline & Underscore Text Copy & Paste | `underline-text-copy-paste` | underline font copy and paste | underscore text, underline word generator, underlined text for bio | 2 |

> C02 is only 3 keywords but `underscore text` is competitor **#1** — cheap to contest with a hardened tool page + this one post.

### Pillar 8 — Unicode & Fonts foundations (hub: `/`, new `/tools/unicode`)

| # | Post | Slug | Primary kw | Also targets | Phase |
|---|---|---|---|---|---|
| 25 | **Copy and Paste Fonts: The Complete Guide to Every Style** | `copy-paste-fonts-guide` | copy and paste fonts | font copy and paste, fonts to copy and paste, copy paste font generator, copy and paste words | 1 |
| 26 | Unicode Text Converter: How Copy-Paste Fonts Actually Work *(pairs with `unicode-explained`)* | `unicode-text-converter-explained` | text generator unicode | unicode font maker, unicode to text converter, unicode text formatter | 1 |
| 27 | Cool & Different Fonts to Copy and Paste (Style Gallery) | `cool-different-fonts` | cool fonts copy and paste | different fonts copy and paste, different font generator, special font copy and paste | 2 |
| 28 | Are Copy-Paste Fonts Free, Safe & Accessible? (Licensing + Screen Readers) | `are-copy-paste-fonts-safe` | free fonts copy and paste | copy and paste fonts free, are unicode fonts safe, screen reader accessibility | 2 |

### Cross-pillar — Platform pages (each links to 4–6 tools)

| # | Post | Slug | Primary kw | Phase |
|---|---|---|---|---|
| 29 | Fonts & Small Text for TikTok | `fonts-for-tiktok` | fonts for tiktok bio | 3 |
| 30 | Fonts & Small Text for Twitter / X | `fonts-for-twitter-x` | fonts for twitter | 3 |
| 31 | Copy-Paste Fonts for Roblox & Game Usernames | `fonts-for-roblox` | roblox font copy and paste | 3 |

*(Instagram is already covered by `small-text-instagram-bio` + `cursive-fonts-instagram-bio`.)*

---

## 4. Internal linking model

**Rule of thumb: money pages link sideways to sibling money pages; blog posts link *down* to their hub money page; the hub links *out* to its 2–4 supporting posts.**

- Every blog post: exactly **one** contextual link to its hub tool page in the first 150 words, using the `primary` money-page keyword as anchor; 1–2 more links to sibling tools or related posts deeper in the body.
- Every tool page: a **"Guides"** block listing its supporting posts (already the pattern in `lib/guides.ts` via `pillarLinks` / `relatedGuideSlugs`).
- `/guides` index page: group by the 8 pillars above, not a flat list.
- Home page: link to the 3 new tool pages (`/tools/unicode`, `/tools/fancy`, `/tools/tiny`) from the tool grid as soon as they ship.
- Never let two of our own pages target the same `primary` keyword — see cannibalisation notes on C05/C08 and C12/C08.

---

## 5. Standard post structure (apply to every new guide)

```
H1: <primary keyword, natural phrasing>
Dek: one sentence, what the reader leaves with

Intro (2 short paras):
  - the answer in the first 2 sentences (featured-snippet bait)
  - one contextual link to the hub tool page

H2: <what it is / how it works>   → Unicode block, why it renders everywhere, where it breaks
H2: <step by step: copy & paste>  → numbered list, 4–6 steps, platform-specific
H2: <style variants / comparison> → table; works in the `secondary` keywords
H2: <where it works / limits>     → Instagram/Discord/TikTok/usernames caveats
H2: <troubleshooting>             → "shows as a box", "counts toward character limit"

FAQ: 4–6 Q&As in question-form `secondary`/`blog` keywords (FAQPage schema)

Related: 2–3 links — sibling posts + hub tool
lastUpdated, cluster tag
```

Schema: `Article` + `FAQPage` (+ `HowTo` on the step-by-step posts). Match the existing `lib/schema.ts` helpers.

---

## 6. Publishing roadmap

**Phase 1 — foundations & highest gap value (weeks 1–4)**
- Build `/tools/unicode` and `/tools/fancy` tool pages (C04, C05).
- Harden home page for C07 + C08 head terms (title/H1/intro copy explicitly say "copy and paste fonts" and "small text generator").
- Posts: #1, #7, #11, #13, #14, #25, #26 (one primary post per pillar).

**Phase 2 — cluster depth & platform intent (weeks 5–10)**
- Build `/tools/tiny` (C12) + on-page hardening pass on all existing tool pages.
- Expand existing guides: `tiny-text-discord`, `subscript-numbers-chemistry`, `blank-discord-name-message`.
- Posts: #2, #8, #9, #12, #15, #18, #19, #24, #27, #28.

**Phase 3 — long tail & mop-up (weeks 11+)**
- Posts: #4, #5, #6, #16, #17, #20, #21, #22, #23, #29, #30, #31.
- Re-pull competitor positions; move anything where `smalltextgen.com`/`fontsgeneratorpro.com` still outrank us into a refresh queue.

**Priority within a phase:** commercial-intent clusters (C07, C08, C04) and clusters where the competitor sits at #1 (C03 bubble, C02 underscore) first.

---

## 7. Quick stats (from the CSV)

- 277 keywords, 12 clusters.
- Largest clusters: Small/tiny text home (63), Invisible/blank (33), Font generator (32), Cursive (28), Superscript (26), Tiny text page (24).
- Intent split: ~78% informational, ~22% commercial. The commercial share concentrates in C07 (font generator) and C08 (small/tiny text generator) — those two are the revenue core; everything else is topical-authority support.
- `blog`-role keywords: 45 → mapped to 18 supporting posts (3 are expansions of existing guides).
- `variant` (misspelling / near-dupe) keywords: ~40 → no dedicated pages; caught by primaries.
