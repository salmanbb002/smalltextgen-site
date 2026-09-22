# Coverage QA — "superscript generator"

**Entity coverage**: Tier 1: 5/5 covered (Superscript, Unicode, Subscript, Exponent,
Copy-paste — all already present in the existing intro/howToSteps, unchanged). Tier 2: 6/6
covered (Ordinal, Footnote, Trademark, Word, Google Docs, Chemical/ionic notation,
Discord) — 4 were already in the existing FAQ/whereUsed, 2 (Trademark, Chemical notation)
are new this round with an attribute/relationship each, not a bare mention.

**Heading/block architecture**: valid — this is a field-based page (intro / howToSteps /
whereUsed / new block / faq), not a freeform H1–H3 tree, so the usual heading-hierarchy
check doesn't apply. Each new block maps to a distinct question (see Step 8 table in
research-notes.md); no two blocks compete for the same phrase.

**Answer-block check**: unchanged, already correct at 33 words, doesn't restate the H1,
matches the SERP's direct-definition format.

**Competitor-heading matrix**:

| Competitor block | Covered here? |
|---|---|
| convertcase "What can I use superscript for" | Yes — existing `whereUsed` + new chemistry/trademark FAQ |
| convertcase "How do I type on my phone" | **Skipped intentionally** — tier 3, flagged for a future pass, not forced in |
| caseconverter "Platform Shortcuts" table | Yes — new "Type superscript without the generator" block, and it's more complete (adds Excel + PowerPoint, which caseconverter omits) |
| caseconverter FAQ (6 Qs) | Yes — overlapping ground (native shortcuts) covered, non-overlapping ground (ordinal/footnote) already existed |
| lingojam "i and q" gap | Yes — new FAQ entry states it precisely instead of vaguely |
| madeintext math/chemistry (absent on their page) | N/A — nothing to match, this is where this site already leads |

**Question coverage**: Word/Docs/Excel/PowerPoint shortcuts, trademark symbol, chemical
notation, and the exact i/q gap are all now answered. Mobile (Gboard/iOS) and Reddit caret
syntax are the two fan-out items left unanswered — both logged as intentional skips
(tier 3, low competitor support, don't fit this page's scope).

**Fact-check**: Word/Docs shortcuts verified against caseconverter.tools' own shortcut
table and matches standard Microsoft Office defaults. Excel/PowerPoint shortcuts are this
draft's own addition (no competitor source) — standard Office behavior, but flagged below
since it wasn't cross-checked against Microsoft's own docs directly.

**Intent check**: matches — do-intent (convert now) unchanged and untouched; the new
material serves the know-simple sub-intent (how do I do this without the generator) that
none of the 4 competitors serve completely.

**Readability**: unchanged existing copy; new FAQ answers run ~grade 7-8, consistent with
the site's existing voice.

**E-E-A-T / flags for manual review**:
- ⚠️ Excel/PowerPoint shortcut claims — verify against Microsoft's own support docs before
  publishing; not independently fetched this round (WebSearch summary only, not a direct
  Microsoft Support fetch).
- No fabricated statistics, dates, or credentials introduced — this is a technical/Unicode
  topic, not YMYL, so no disclaimer needed.
- ✅ No new author byline claims made (site doesn't attribute FAQ content to a named
  author).

**Integration note**: `lib/pillar-content.ts`'s `PillarContent` type has no field for a
freeform content block, so the new "Type superscript without the generator" section needs
either (a) a new optional field + render in `components/pillar-tool-page.tsx`, or (b) being
folded into `intro` as a third paragraph. (b) is the smaller diff and ships today; (a) is
worth it once 2–3 more tool pages want the same shortcut-table pattern (subscript's Day 5
draft reuses this same content shape).
