# Research notes: bold text generator (Day 25, full overhaul of /tools/bold), 2026-10-02

## Step 1: Intent + SERP
- "bold text generator" (30k, KD 30): **do**. Top: creativefabrica, Play Store app, lingojam, yaytext, font-generator.com, boldtext.io, postformatter, bold-text.com, aiease.
- Fan-out (plan + SERP): bold on LinkedIn / Instagram / WhatsApp / X / Facebook; serif vs sans; SEO & accessibility downsides; native shortcuts.

## Step 2: Head entities
| Entity | sameAs | Attributes |
|---|---|---|
| Mathematical Alphanumeric Symbols | https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols | bold A U+1D400, sans bold A U+1D5D4 (verified via generator), digits U+1D7CE / U+1D7EC; Unicode 3.1 (2001) |
| LinkedIn | https://en.wikipedia.org/wiki/LinkedIn | no native bold in posts as of 2026; articles/newsletters have toolbar (authoredup/taplio/postformatter snippets) |
| WhatsApp | wiki | *bold* in chats |
| Discord / Telegram / Reddit | wiki | **bold** Markdown |
| X | https://en.wikipedia.org/wiki/Twitter | Premium post formatting on web (general knowledge; hedged) |
| HTML <strong>/<b> | wiki | |

## Step 4: Competitors
1. postformatter.com: 6 styles + comparison table (bold, serif bold, bold italic, bold script, bold fraktur); FAQ LinkedIn/X, how it works, downsides (search, screen readers), free.
2. yaytext.com/bold-italic: styles incl. alternating; platforms; Math Alnum origin.
3. lingojam.com: bold alphabets, no symbol equivalents, can't copy fonts.
4. boldtext.io: Unicode history (stale ">100,000"), 4 bold alphabets, bold italic, Reddit **, HTML <b>/<strong>/font-weight 700, Instagram note.

## Step 6: Tiers
- T1: bold text, Unicode bold, copy-paste, Mathematical Alphanumeric Symbols, LinkedIn, Instagram, WhatsApp.
- T2: serif vs sans bold, bold italic, X, Facebook, TikTok, Discord, native shortcuts (Ctrl+B, *, **), HTML, character count, screen readers, SEO/search, boxes, hashtags.
- T3 parked: alternating bold (gimmick), Unicode history trivia.

## Step 7: Information gain
- Added **Bold sans** converter style (U+1D5D4) + test: every top competitor offers it and it's the de-facto LinkedIn style; the site's own copy already showed sans-bold samples the tool couldn't make.
- Platform × native-bold × where-Unicode-helps table (dated); LinkedIn and Instagram tip H3s (plan asked for platform-specific sections); style comparison table; Unicode vs real bold trade-offs.

## Step 8: Heading map
| Level | Heading | Owns |
|---|---|---|
| H1 | Bold Text Generator | focus |
| H2 (template) | Type it natively instead | bold shortcut |
| H2 | How does a bold text generator work? | how it works |
| H2 | Which bold font style should you use? | bold fonts / styles |
| H2 | How do you bold text on social media? | platform how-to (table) |
| H3 | LinkedIn bold text tips | linkedin bold |
| H3 | Instagram and TikTok bold text tips | instagram bold |
| H2 | Unicode bold vs real bold formatting | comparison |
| H2 | FAQ (11) | |

## Step 8e: Links
- → cursive, old-english, fonts-for-twitter-x, small-text-instagram-bio. Day 26 formatting hub will link here.
