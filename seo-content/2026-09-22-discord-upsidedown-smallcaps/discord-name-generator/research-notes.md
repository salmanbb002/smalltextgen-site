# Research notes — "discord name generator"

Site: smalltextgen.site · Target: **new page** `/tools/discord-name-generator` (Day 6). No
existing page targets this exact intent — closest are the guides `tiny-text-discord`,
`blank-discord-name-message`, and `superscript-discord`, none of which is a generator for
decorative/symbol Discord names.

## Step 1 — Intent + SERP

Dominant intent: **do** (generate a name now). Distinct from the plain Unicode-style tools
(superscript, cursive, etc.) — this keyword's searchers want *decorated* names specifically
for Discord: symbol-wrapped, gaming-flavoured, sometimes AI-random. No ads, no PAA captured
directly; fan-out comes from the competitor pages themselves (Discord's own naming rules
keep surfacing as a secondary need).

Top organic pages:

| Domain | Title | Type | Notes |
|---|---|---|---|
| fancynick.com | "Fancy Discord Names Generator" | tool, style-picker | 6-Q FAQ (answers not shown on page), gaming/personalization framing |
| copychars.com | "Discord Stylish Name — Symbols, Fonts & Rules" | tool + rules reference | Best on Discord's actual rules: 32-char limit, username vs display name, Hangul Filler invisible-name trick |
| etcgamer.com | "Discord Name Generator with Stylish Symbols" | randomizer tool | Includes how to actually change your Discord username/server name — a real fan-out gap |
| discorder.tools | "Discord Symbols — Copy & Paste for Names, Bios & Channels" | symbol library | Channel-name rules (lowercase, spaces→hyphens), Nitro clarification (static Unicode needs no Nitro) |

## Step 2 — Head-entity research

- **Discord** — `sameAs` https://en.wikipedia.org/wiki/Discord. Attributes: chat platform
  with three distinct name surfaces — the `@username` (login handle), the **display name**
  (profile-wide), and the **server nickname** (per-server override) — each with different
  character rules. This three-way distinction is the single most load-bearing fact for the
  whole page and only copychars.com states it precisely.
- **Unicode** — same head entity as prior runs; relevant here because Discord's display
  name/nickname fields accept the full range, while `@username` does not.

## Steps 4–5 — Competitor heading/entity extraction

**fancynick.com**: style picker, category filters, gaming/personalization angle, cross-
platform claim (Discord, Instagram, Twitter, Twitch, Facebook, PUBG, Fortnite, Roblox),
6-question FAQ shell with no answers shown. — **9 terms**, thin on actual Discord rules.

**copychars.com**: 32-character limit, @username vs display-name character rules (a-z 0-9
underscore period vs full Unicode), symbol list (✦ ★ ☆ ꧁ ꧂ ༒ 彡 ⚔ ☠ ♛ 乂 ღ), ready-made
wrap templates (꧁NAME꧂, ✦ NAME ✦), **Hangul Filler (U+3164) invisible-name trick**. — **15
terms**, the most rules-accurate competitor found.

**etcgamer.com**: randomizer/AI framing, step-by-step "change your Discord username" and
"change your server name" instructions (desktop). — **10 terms** — the change-instructions
angle is a genuine fan-out need nobody else in this set covers.

**discorder.tools**: username vs display-name split (same as copychars), **channel-name
rules** (lowercased, spaces become hyphens, symbols mostly pass through), **Nitro
clarification** (plain Unicode needs no Nitro — a real, specific reassurance worth
repeating precisely), symbol categories, testimonials. — **12 terms**.

## Step 6 — Entity ledger + tiers

Full ledger in `entities.json`. Summary:

- **Tier 1**: Discord, Display name / nickname vs @username distinction, Unicode symbol
  decoration, Copy-paste.
- **Tier 2**: 32-character limit, Symbol-wrap templates (꧁NAME꧂ etc.), Server nickname
  (per-server override), Changing your actual Discord username/server name, No-Nitro-
  needed clarification.
- **Tier 3**: Channel-name rules (lowercased, hyphenated), Hangul Filler invisible-name
  trick (this site already has a dedicated, more rigorously-tested guide on blank Discord
  names — link out rather than duplicate), gaming-platform cross-posting (PUBG/Fortnite/
  Roblox — off-topic for this site's positioning).

**Relationships**:
- Discord —has three name surfaces— @username (a-z, 0-9, _, ., no symbols), display name
  (full Unicode, profile-wide), server nickname (full Unicode, per-server override)
- Discord display name —is limited to— 32 characters
- Unicode symbols —wrap around— a name to form a template (꧁NAME꧂, ✦ NAME ✦, 「NAME」)
- Static Unicode symbols —require— no Discord Nitro subscription
- Discord channel names —are forced to— lowercase, with spaces replaced by hyphens

**Dedupe log**: Hangul Filler / invisible-name trick — parked, **not restated here**; this
site's own `/guides/blank-discord-name-message` guide already covers exactly this ground
with real testing (per its FAQ, it already distinguishes the Braille Pattern Blank this
site's own invisible tool uses from what actually survives in Discord). Repeating an
unverified claim about a *different* character (Hangul Filler) here risks contradicting
that guide — link to it instead of re-deriving the fact. Gaming-platform cross-posting
(PUBG/Fortnite/Roblox names) parked as off-topic — this site doesn't serve those verticals.

## Step 7 — Information-gain pass

1. **No competitor combines a real, working multi-style generator with Discord's precise
   naming rules.** fancynick/etcgamer generate names but are vague on rules; copychars/
   discorder have the rules but are symbol-reference pages, not generators. This site can
   do both at once by reusing the existing style engine (bold, cursive, bubble, small caps,
   squared, sparkles, hearts, fullwidth, zalgo) as a themed gallery page — no new code
   needed beyond the page wrapper, same pattern as the existing `/tools/fancy-text-
   generator`.
2. **Nobody clearly separates the three Discord name surfaces** (username / display name /
   nickname) with which rule applies to which — copychars gets closest but only covers two.
   Stating all three precisely is the single best gap-fill.
3. **etcgamer's "how to actually apply the name" instructions are a real, missing step** on
   every other competitor page — generating a fancy name is useless without knowing where
   to paste it.

**Information-gain element committed to**: a **"Where this actually goes" block** naming
all three Discord name surfaces and their exact character rules, plus **symbol-wrap
examples** (꧁NAME꧂, ✦ NAME ✦, 「NAME」) built from Unicode already safe on this site, and a
short "how to apply it" step sequence (Settings → Profile → Display Name; right-click a
server → Change Nickname).

## Step 8 — Heading / section map (gallery-page structure)

This is a new page using the site's existing `GalleryPage` pattern (same shape as
`/tools/fancy-text-generator`), not the single-style `PillarContent` pattern:

| Block | Focus/LSI phrase | Carries |
|---|---|---|
| `intro` | discord name generator, fancy/symbol names | Discord, Unicode symbol decoration |
| `howToSteps` | copy and paste | Copy-paste |
| `featuredStyleSlugs` | bold, cursive, bubble, small-caps, squared, sparkles, hearts, brackets, fullwidth, zalgo | reuses existing style engine |
| `whereUsed` | display name, server nickname, symbol-wrap templates | 3-surface distinction, wrap templates |
| `faq` (10) | 32-char limit, username vs display name, Nitro, changing your name | all tier-1/2 facts |

Internal-link plan: `relatedGuideSlugs` → `tiny-text-discord`, `blank-discord-name-
message`, `superscript-discord`; `relatedToolSlugs` → `bold`, `cursive`, `bubble`, `small-
caps`. Add a homepage `focusedTools` entry and cross-link from `tiny-text-discord` and
`blank-discord-name-message`'s existing `relatedGuideSlugs` arrays so the new page isn't an
orphan.

## Fact-check sources
- Discord `@username` character rules (lowercase letters, digits, underscore, period) and
  32-character display-name limit: matches both copychars.com and discorder.tools
  independently (2-source agreement).
- "No Nitro required for static Unicode": discorder.tools only — single-sourced, common
  knowledge about how Discord's client renders plain-text Unicode vs custom emoji, but
  flagged in coverage.md since it wasn't cross-checked against Discord's own support docs.
- Server nickname as a distinct, per-server override of display name: general Discord
  product knowledge, consistent with both copychars.com and discorder.tools' framing.
