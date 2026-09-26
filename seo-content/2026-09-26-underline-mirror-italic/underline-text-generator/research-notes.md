# Research notes — "underline text generator"

Site: smalltextgen.site · Target: `/tools/underline (strengthen)` · Run: 2026-09-26 (Day 9 of the 30-day plan)

## Step 1 — Intent + SERP
Dominant intent: **do; secondary know-simple (why the line disappears / looks like a link)**.
No featured snippet captured; results are all tool pages (convertcase, namecheap, glyphy, caseconverter, yaytext, postformatter, bold-text, fancyfonts). Fan-out: "underline text copy paste", "underline text for instagram", "double underline text", "how to underline on linkedin".

## Step 2 — Head entity
**Unicode** (`sameAs` https://en.wikipedia.org/wiki/Unicode) — field-based page on the same engine as prior runs.

## Steps 4–5 — Competitors (top 4 distinct domains)
| URL | Headings | Extracted facts |
|---|---|---|
| convertcase.net/underline-text | How do I underline text? / Where can I use underlined Unicode text? / Unicode vs HTML underline | U+0332; spaces underlined too; HTML <u> strips on copy; affects char count + search. Reviewed Aug 2026 |
| yaytext.com/underline | Unicode Underline / What this tool does / How it works | 6 variants: double macron, low line, double underline, under-arrow, seagull, asterisk; diacritics caveat |
| glyphy.io/font-generator/underline-text | Underline Text Generator | 29+ decorative underline "fonts" (Gulls, Lanes, Train Tracks…); no explanatory body |
| postformatter.com/underline-text-generator | How to use / Underlining on platforms that do not allow it / FAQ | U+0332; platforms removed underline because underline = link; LinkedIn/IG FAQ; downsides: not searchable, screen readers |

## Step 6 — Entity ledger + tiers
- **Tier 1**: Underline text generator, Combining low line U+0332 (Unicode), Copy and paste, Plain-text fields with no formatting toolbar
- **Tier 2**: LinkedIn / Instagram (no underline button), Underline-looks-like-a-link caveat, Character-count cost, Double underline U+0333, Native formatting (Ctrl+U, Discord __text__, HTML <u>), Searchability / screen readers
- **Tier 3**: Decorative underline variants (seagull, arrow, asterisk), Chrome extension (postformatter), Spanish UI

**Relationships**:
- Generator —appends→ U+0332 after each character
- Underline mark —counts as→ extra code point → doubles character count
- Social apps —omit underline button because→ underline signals a link
- Discord markdown —underlines→ __text__ natively
- Word —double underline via→ Ctrl+Shift+D

## Step 7 — Information gain
Native-formatting block (Word/Docs/Discord/HTML) — none of the 4 competitors tell the reader when they do NOT need the generator; plus a quantified char-count FAQ (2 code points per letter vs Instagram 150-char bio). Honest note that this site offers single U+0332 only (not copying yaytext/glyphy variant counts).

## Step 8 — Section map (field-based page)
intro: +LinkedIn, names U+0332 · whereUsed: +LinkedIn posts · NEW nativeFormatting (4) · faq 5→10 (LinkedIn/IG how-to, looks-like-a-link, char count, double underline, searchability) · lastUpdated 2026-09-26

## Step 8e — Internal links / cannibalisation
Guide /guides/underline-text-copy-paste targets "underline text copy paste" — keep: guide = how-to/explainer, tool = generator; they already cross-link via relatedGuideSlugs. Watch GSC for both URLs ranking on the same query.

## FAQ source map
postformatter FAQ (LinkedIn/IG, looks like a link, downsides), convertcase (char count/search), yaytext (double underline)
