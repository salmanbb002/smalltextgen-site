# Research notes — "small caps generator"

Site: smalltextgen.site · Target: `/tools/small-caps` (already exists, strong content —
strengthen pass, Day 8).

## Step 1 — Intent + SERP
Dominant intent: **do**, sub-intent **know-simple**. No commercial intent.

| Domain | Title | Notes |
|---|---|---|
| unicodestyle.com | "Small Caps Generator \| ᴛɪɴʏ ᴛᴇxᴛ ᴍᴀᴋᴇʀ" | 3-Q FAQ, explicitly notes **no CSS/Word mention** (gap) |
| omnicalculator.com | "Small Caps Generator - Copy and Paste" | conversion table, no CSS/Word mention either |
| fsymbols.com | "Small caps font generator" | symbol-substitution framing, content-filter bypass angle |
| smallcaps.app | "Small Caps Generator — Copy & Paste Unicode" | **only one with the CSS `font-variant: small-caps` distinction**, digit-conversion claim (unverified against this site) |

## Step 2 — Head entity
**Unicode** (as prior runs) — small caps block is scattered (Latin-1 Supplement, IPA
Extensions, Phonetic Extensions), not contiguous, which is why capital-letter coverage
(already N/A — small caps only transforms lowercase input) and digit coverage are both
incomplete or absent depending on the implementation.

## Steps 4–5 — Competitor extraction
**unicodestyle.com**: definition, "how it works," platform list (social, gaming, Discord,
messaging, mobile/desktop), 3-Q FAQ. **omnicalculator.com**: use cases (acronyms,
scholarly names/titles, emphasis, chapter openings, legal documents — a broader,
more editorial framing than the other three), full a-z table, "combine with bold?" FAQ.
**fsymbols.com**: content-filter-bypass angle (steering clear of that — not a use case
this site should encourage), alternative "MS Word-like editor" link. **smallcaps.app**:
**CSS `font-variant: small-caps` distinction** (the single best fact in this set — CSS has
a native small-caps rule, but it only works inside that styled page and the effect
disappears the moment the text is copied elsewhere — exactly why a Unicode generator has a
reason to exist for this style), digit-conversion claim (**not present in this site's own
transform — do not copy**, see fact-check).

## Step 6 — Entity ledger + tiers
- **Tier 1**: Small caps, Unicode, Copy-paste, Word/document editing context (2/4
  competitors gesture at "documents" generically; smallcaps.app is the only one with a
  precise native-formatting comparison).
- **Tier 2**: CSS `font-variant: small-caps`, Microsoft Word's native Small Caps feature,
  Google Docs (lack of a native small-caps option), Acronyms/scholarly-title use case.
- **Tier 3**: Content-filter-bypass angle (parked — not a use case to promote), digit
  conversion claim (parked — false for this site's own tool).

**Relationships**:
- CSS —has a native rule for— small caps (`font-variant: small-caps`), but it only renders
  inside a page that loads the right font and is lost the instant the text is copied
  elsewhere
- Microsoft Word —has a native Small Caps text style— (Format → Font → Small caps, or
  Ctrl+Shift+K), which is a real formatting attribute, not swapped characters, so it
  survives editing but not copy-paste to another app
- Google Docs —has no native small-caps formatting option— unlike Word, which is exactly
  why a Unicode generator is the only copy-paste-ready route there
- This site's small-caps generator —converts letters only— (verified against
  `lib/fonts.ts`'s `smallCaps` transform: no digit mapping exists), unlike smallcaps.app's
  claim that digits convert to subscript numerals

## Step 7 — Information-gain pass
1. **Only smallcaps.app has the CSS distinction**, and even it doesn't mention Word.
   Combining CSS + Word + (accurately) Google Docs' total lack of native small caps into
   one "type it natively" block — reusing the exact field/section shape already built for
   the superscript/subscript pages — is a clean, genuine gap-fill nobody in this set has
   done completely.
2. **smallcaps.app's digit-conversion claim is checkable and wrong for this site** — a
   real trap avoided by checking the actual transform function instead of trusting a
   competitor's description of *their own* tool. Turned into an honest, accurate FAQ entry
   instead ("do numbers convert?" → no, by design).
3. **fsymbols' content-filter-bypass angle is a real competitor use case this site should
   not adopt** — using Unicode substitution to dodge word filters. Explicitly parked, not
   silently dropped, since it's the kind of gap an unreflective pass might copy.

**Information-gain element**: the "type it natively" native-formatting block (CSS/Word/
Google Docs), reusing the `nativeFormatting` field already added to `PillarContent` for the
superscript/subscript pages, plus one precise, verified FAQ correcting the digit-conversion
question.

## Step 8 — Section map
| Block | Change |
|---|---|
| `intro` / `howToSteps` / `whereUsed` | unchanged, already correct |
| `nativeFormatting` (reuse existing field) | NEW: CSS, Microsoft Word, Google Docs |
| `faq` | 5 → 10: CSS, Word shortcut, Google Docs gap, digit-conversion correction, Word-vs-generator durability |

Internal-link plan: no new guide needed — `relatedGuideSlugs` already includes
`unicode-explained` and `small-caps-copy-paste`, which cover the adjacent ground.

## Fact-check sources
- CSS `font-variant: small-caps`: standard, documented CSS property (MDN); the
  "lost on copy-paste" behavior is a direct, verifiable consequence of it being a font
  rendering rule, not a character substitution.
- Word's Small Caps feature and Ctrl+Shift+K shortcut: standard Word default — same
  caveat as the superscript/subscript rounds (not independently re-fetched from
  Microsoft's own docs this round, flagged in coverage.md).
- Google Docs has no native small-caps formatting option: consistent with general
  knowledge of Google Docs' Format → Text menu (Bold/Italic/Underline/Strikethrough/
  Superscript/Subscript only, no Small Caps) — not independently re-verified by opening
  Google Docs this round, flagged in coverage.md.
- Digit non-conversion: **verified directly against this site's own code**
  (`lib/fonts.ts` `smallCaps` transform maps only `a-z`, no digits) — the strongest
  possible source, stronger than any competitor citation.
