# Coverage QA — "subscript generator"

**Entity coverage**: Tier 1: 5/5 (Subscript, Unicode, Chemical formula, Copy-paste,
Superscript — unchanged, already present). Tier 2: 6/6 (Math index notation, Word, Google
Docs, Excel, HTML `<sub>`, Missing-letter list) — 3 already existed (Word/Docs mentioned
qualitatively), 3 new this round each with a stated attribute (shortcut, tag syntax, or the
exact letter list), not a bare mention.

**Heading/block architecture**: valid — field-based page, same shape as `/tools/superscript`
so the two pages now read as a consistent pair. Each new block maps to a distinct question.

**Answer-block check**: unchanged, already correct — leads with the chemistry use case,
which matches this keyword's dominant real-world intent better than any competitor's more
generic opening.

**Competitor-heading matrix**:

| Competitor block | Covered here? |
|---|---|
| convertcase "why don't all letters convert" (names c,d,f,g,w,y,z) | Yes — new FAQ states the exact list |
| lingojam "w → two subscript v" workaround | Yes — folded into the same FAQ entry, combined with convertcase's list (neither competitor combines them) |
| unicodestyle Word/Excel/Docs/HTML/LaTeX shortcuts | Partially — Word/Docs/Excel/HTML covered in the new block + FAQ; **LaTeX skipped intentionally** (tier 3, logged) |
| unicodestyle 7-Q FAQ (privacy/download/audience framing) | **Skipped intentionally** — those describe that competitor's own product features, not this site's; copying them would misrepresent what the tool does |
| madeintext (no chemistry content) | N/A — confirms this site's chemistry-first framing already outperforms the thinnest competitor |

**Question coverage**: Word/Docs/Excel/HTML shortcuts, the exact missing-letter list, and
the w-substitution fact are now all answered. LaTeX and mobile-native typing are the two
fan-out items left open — both logged as intentional skips (tier 3, narrow audience fit).

**Fact-check**: missing-letter list (c, d, f, g, w, y, z) matches convertcase.net and is
consistent with the Unicode subscript block's actual gaps. The w-substitution claim
(two subscript v characters) is sourced only to lingojam.com this round — **not
independently re-verified against a second source** — flagged below.

**Intent check**: matches — do-intent unchanged, new material serves the know-simple
gap (native formatting + the precise letter-coverage question) none of the 4 competitors
answer completely.

**Readability**: unchanged existing copy; new FAQ answers ~grade 7-8, consistent with the
superscript page and the rest of the site.

**E-E-A-T / flags for manual review**:
- ⚠️ The "w → double subscript v" substitution claim is single-sourced (lingojam.com only)
  — worth a quick manual check against the site's actual generator output before publishing
  the FAQ line, since it's a specific behavioral claim about this tool, not just Unicode
  trivia.
- ⚠️ Excel subscript shortcut — same flag as the superscript draft: standard Office
  behavior, not independently fetched from Microsoft's own docs this round.
- No fabricated statistics, dates, or credentials introduced.

**Integration note**: same as the superscript draft — the new "Type subscript natively"
block needs either a new optional field on `PillarContent` (rendered identically on both
tool pages) or folding into `intro` as a third paragraph. Since both Day 4 and Day 5 want
the same block shape, adding the field now is the smaller total diff across the two pages
rather than hand-folding it into prose twice.
