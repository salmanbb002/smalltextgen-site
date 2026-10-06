# Coverage / QA: Instagram Font Generator (`/tools/instagram-font-generator`)

**Words:** ~1,390 (plus the live converter and style grid) · **FAQ:** 10 · **Build:** typecheck + lint + 19 tests + `next build` (81 pages) green, 2026-10-07

## Entity coverage
- **Tier 1:** 10/10 covered (100%). All 10 have an attribute or relationship stated (Instagram → no font setting / Story fonts only; Unicode → block U+1D400–U+1D7FF; bio → 150; caption → 2,200; boxes → missing glyphs on older Android).
- **Tier 2:** 12/12 covered (100%). "free / no sign-up" is in the FAQ only.
- **Tier 3:** 4/7 used (Mathematical Alphanumeric Symbols, Story font names, gothic/double-struck/vaporwave, Threads); the unused ones are explained in the annotated draft.

## Heading architecture
- One H1 (template). The H2 order comes from the template (How to use → Styles → Where used) plus 3 content H2s and the FAQ. No skipped levels. The H3s ("Do styled hashtags work?", "Can screen readers read styled text?") sit under the search H2.
- Each H2 owns a distinct phrase: "best font per spot", "instagram fonts search/hashtags", "instagram story fonts vs copy-paste". None reuse the guide's H2s ("Where can you use fancy fonts on Instagram?", "Which aesthetic fonts look best in an Instagram bio?").
- Read on their own, the headings follow the flow: tool → how → where → which style → risks → built-in vs pasted → FAQ.

## Answer blocks
- Intro answer = 52 words, standalone, doesn't restate the H1. ✔
- Each content H2 and H3 answers in its first sentence (QUORA order). ✔

## Competitor-heading matrix
| Recurring competitor H2 | Covered? |
|---|---|
| What are Instagram fonts / how they work (4/4) | Yes: intro + FAQ "Are Instagram fonts real fonts?" (deep explainer left to /guides/unicode-explained) |
| How to use (3/4) | Yes: How to use (4 steps) |
| Font style list (4/4) | Yes: Styles included (live grid) |
| Instagram bio fonts + tips (2/4) | Partly, on purpose: style-per-spot table; bio ideas live in /guides/small-text-instagram-bio |
| Instagram Story fonts (1/4) | Yes: built-in vs copy-paste section |
| Best practices / accessibility (2/4) | Yes: search + screen-reader H3s |
| Use cases by creator type (1/4) | Skipped: off-intent upsell content |

## Question coverage
All 12 fan-out/PAA questions are mapped. "what are the best fonts for instagram bio" → style-per-spot table; "will styled fonts hurt my reach" → search H2 (algorithm answer is in the guide); "are these fonts safe" → guide FAQ (not repeated). **Unanswered: none.**

## Fact cross-check
| Claim | Source | Status |
|---|---|---|
| Name changeable twice within 14 days | help.instagram.com/2994759677322122 | ✔ official |
| Name 30 chars; username = letters, numbers, periods, underscores | search snippets + existing site guide | ⚠ third-party sources, consistent |
| Bio 150 chars; caption 2,200 chars | multiple third-party sources | ⚠ widely reported, not an official page |
| **Notes 60 characters** | general knowledge, **not verified this run** | ⚠ **verify before relying on it** |
| Story fonts Classic, Modern, Neon, Typewriter | IMH (updated Apr 2026) | ⚠ single source; names are long-standing |
| Mathematical Alphanumeric Symbols U+1D400–U+1D7FF | Unicode standard | ✔ |
| Small caps has no X | site's own `lib/fonts.ts` mapping + home copy | ✔ |
| Converter runs in the browser (nothing uploaded) | site architecture (client-side `<Converter/>`) | ✔ |
| "Only first line or two show before … more" | general UI behaviour | ⚠ deliberately vague, no char count claimed |

## Intent check
Tool intent is served: the converter sits at the top with cursive leading, and the copy focuses on choosing and pasting. ✔

## Readability
Average sentence ≈13.7 words, longest ≈35 (in the Unicode-block paragraph). About grade 7–8. ✔

## E-E-A-T flags (need you)
- No author byline exists sitewide. The schema uses the Organization; add a real author page if you want Person markup.
- No first-person claims were written. Nothing needs replacing.
- `schema.jsonld` `about`/`mentions` is optional and not wired in. The live page already emits WebApplication + HowTo + FAQPage + Breadcrumb. Its `speakable` selector `.tool-hero p` targets the hero intro paragraphs.

## Cannibalisation
- `/guides/small-text-instagram-bio` now links to this page ("Instagram font generator" anchor). The guide keeps "Instagram bio fonts / aesthetic". The CSV "instagram font generator" row is re-pointed here.
- Watch in GSC: if the guide keeps ranking for "instagram font generator" after 4–6 weeks, consider trimming the guide's tool-like phrasing.
