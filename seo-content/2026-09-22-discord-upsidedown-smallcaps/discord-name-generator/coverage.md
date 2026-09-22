# Coverage QA — "discord name generator"

**Entity coverage**: Tier 1: 4/4 (Discord, username/display-name distinction, Unicode
symbol decoration, Copy-paste) — all covered with a stated relationship. Tier 2: 5/5
(32-char limit, symbol-wrap templates, server nickname, changing your name, no-Nitro) —
each has a concrete fact, not a bare mention.

**Architecture**: new `GalleryPage` entry, same field shape as the three existing gallery
pages — consistent with the site's own pattern, no new component code needed beyond one
route file copy.

**Competitor-heading matrix**:

| Competitor block | Covered here? |
|---|---|
| copychars 32-char limit + username/display-name rules | Yes — FAQ + intro state both precisely |
| discorder Nitro clarification | Yes — dedicated FAQ entry |
| discorder channel-name rules | Yes — one FAQ entry, correctly scoped as a different field |
| etcgamer "how to change your name" instructions | Yes — `howToSteps` + a dedicated FAQ entry, the one gap no other competitor closes |
| fancynick gaming-platform cross-posting | **Skipped intentionally** — off-topic for this site |
| copychars/discorder Hangul Filler invisible trick | **Skipped intentionally** — this site's own more rigorously-tested guide covers invisible names; linked instead of restated |

**Fact-check**: username/display-name/32-char rules confirmed by two independent
competitors (copychars + discorder). No-Nitro claim is single-sourced (discorder only) —
flagged for a quick manual check against Discord's own support docs before publishing,
though it matches general knowledge of how Discord renders plain Unicode vs custom emoji.

**Intent check**: do-intent served by the actual working generator (reuses this site's
existing style engine — no new conversion logic); know-simple sub-intent (which field
accepts what) served by intro + FAQ.

**E-E-A-T flags**:
- ⚠️ No-Nitro claim — single-sourced, verify before publishing.
- No fabricated stats, dates, or credentials.

**Build note**: this page needs actual code — a new `GalleryPage` object in
`lib/gallery-pages.ts`, a new route file `app/tools/discord-name-generator/page.tsx`
(copy of `fancy-text-generator/page.tsx` with the slug swapped), and a homepage
`focusedTools` entry. Sitemap picks it up automatically (`app/sitemap.ts` maps over
`galleryPages`).
