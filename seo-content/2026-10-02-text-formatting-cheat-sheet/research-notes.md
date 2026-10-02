# Research notes: text formatting cheat sheet (Day 26 hub, new /guides/text-formatting-cheat-sheet), 2026-10-02

## Step 1: Intent + SERP
- Cluster hub, no single head keyword (plan: "text formatting (cluster hub)"). Target queries: "text formatting cheat sheet", "how to bold/italic/underline/strikethrough in X", "WhatsApp/Discord/Telegram text formatting". SERPs for those are dominated by per-app guides (sendpulse, techpp, markdowntools, itechguides) — no cross-app matrix ranks well → hub angle = one table for all apps.
- Intent: **know-simple / do** (look up the symbol/shortcut).

## Step 2: Head entities + facts
| Entity | sameAs | Facts used (source) |
|---|---|---|
| WhatsApp | https://en.wikipedia.org/wiki/WhatsApp | *b* _i_ ~s~ ```mono```; 2024 adds inline code, lists, quotes; desktop Ctrl+B/I, Ctrl+Shift+X; no underline (sendpulse, office-watch 2024) |
| Discord | https://en.wikipedia.org/wiki/Discord | **b** *i* __u__ ~~s~~ ||spoiler|| #-### headers, -# subtext, > quote (techpp, markdowntools) |
| Telegram | https://en.wikipedia.org/wiki/Telegram_(software) | **b** __i__ ~~s~~ ||spoiler||; Ctrl+B/I/U, Ctrl+Shift+X; underline menu-only (sendpulse, boldlytype) |
| Slack | https://en.wikipedia.org/wiki/Slack_(software) | *b* _i_ ~s~ `code`; Ctrl+B/I, Ctrl+Shift+X; no underline (general knowledge) |
| Google Docs | wiki | Ctrl+B/I/U; strike Alt+Shift+5 / ⌘+Shift+X |
| Microsoft Word / Excel | wiki | Word Win no default strike shortcut (Ctrl+D), Mac ⌘+Shift+X, double underline Ctrl+Shift+D; Excel Ctrl+5 |
| Markdown | https://en.wikipedia.org/wiki/Markdown | **b** *i*, ~~s~~ (GFM extension); no underline in standard Markdown |
| LinkedIn / Instagram / TikTok / Facebook / X | wiki | no native formatting in posts/bios (LinkedIn articles have toolbar; X Premium partial) — see Day 25 notes |
- Teams excluded: conflicting strikethrough shortcut reports (Ctrl+Shift+X vs Ctrl+Alt+X).

## Step 4: Competitors (per-app guides, read via search summaries)
- sendpulse WhatsApp guide (2026), office-watch (2024 new shortcuts), sendpulse Telegram (2026), techpp Discord (2025/2026), customguide/Microsoft Teams (excluded). None combine all apps.

## Step 6: Tiers
- T1: bold, italic, underline, strikethrough, text formatting, WhatsApp, Discord, Google Docs, Word, Unicode fallback.
- T2: Telegram, Slack, Excel, Markdown, HTML tags, Instagram, LinkedIn, TikTok, X, Facebook, spoiler, monospace, headers/subtext, plain-text paste, accessibility.

## Step 7: Information gain
- One 14-row platform × 4-style matrix (dated), plus "why didn't my formatting work" and "remove formatting" FAQs. Clear native-vs-Unicode decision rule.

## Step 8: Heading map
| Level | Heading |
|---|---|
| H1 | Text Formatting Cheat Sheet: Bold, Italic, Underline & Strikethrough for Every Platform |
| H2 | Text formatting cheat sheet: every platform at a glance (table) |
| H2 | How do you format text in messaging apps? |
| H3 | WhatsApp formatting / Discord formatting / Telegram and Slack formatting |
| H2 | How do you format text in Google Docs and Word? |
| H2 | How do you format text on Instagram, TikTok, LinkedIn, and X? |
| H2 | Native formatting vs Unicode text: which should you use? |
| H2 | FAQ (10) |

## Step 8e: Links
- Hub → bold (Day 25), italic (Day 11), underline (Day 9), strikethrough (Day 21), cursive (Day 24), + IG / X / Discord guides.
- Reverse: added to relatedGuideSlugs of bold, italic, underline, strikethrough, cursive tool pages.
- Cannibalisation: tool pages keep per-app shortcut cards brief; hub owns the cross-app matrix.
