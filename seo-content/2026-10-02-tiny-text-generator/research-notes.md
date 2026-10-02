# Research notes: tiny text generator (Day 29, refresh /tools/tiny-text-generator), 2026-10-02

## Ownership decision (user, 2026-10-02)
- /tools/tiny-text-generator owns "tiny text generator"; homepage owns "small text generator". Home title/meta de-tinied on Day 28. 16 C08 "tiny…" rows in the clusters sheet re-pointed from / to this page.

## Step 1: Intent + SERP
- "tiny text generator" (17k, KD 10): **do**. SERP overlaps heavily with "small text generator": convertcase, duplichecker, spurnow, capitalizemytitle, lingojam (Tiny Text — three types), newsentence, smalltextgen.com, fancyfonts, microapp.
- Fan-out: smallest style, missing letters, tiny numbers, platforms, character count (Twitter), searchable, Word small caps, privacy.

## Step 2: Head entities
| Entity | sameAs | Attributes (verified from lib/fonts.ts output) |
|---|---|---|
| Subscript and superscript | https://en.wikipedia.org/wiki/Subscript_and_superscript | superscript missing q/Q; subscript missing b c d f g q w y z (after adding ⱼ) |
| Phonetic Extensions / IPA Extensions | wiki | small caps; missing x, q → ǫ |
| Latin Extended-D | https://en.wikipedia.org/wiki/Latin_Extended-D | ꟲ ꟳ superscript capitals added in Unicode 14.0 (2021) |
| Superscripts and Subscripts block | wiki | ⁰–⁹ ⁺⁻⁼⁽⁾ ₀–₉ ₊₋₌₍₎ |
- All tiny characters are BMP (verified) → 1 UTF-16 unit each → tiny text doesn't inflate character counts (contrast with bold/cursive).

## Step 4: Competitors
1. lingojam.com/TinyTextGenerator: three types; small caps most complete; superscript "no q and i" (i exists: ⁱ — their claim is wrong); subscript lacks many.
2. microapp.io: what it does, uses, how conversion works, examples, tips; FAQ 7 (every platform, letters stay normal, different font?, Twitter char count, searchable, Word small caps, saves text).
3. convertcase / duplichecker / capitalizemytitle: generic generator copy (via SERP snippets).

## Step 6: Tiers
- T1: tiny text, superscript, subscript, small caps, copy-paste, Unicode.
- T2: missing letters, tiny numbers/symbols, smallest style, platforms (IG/TikTok/Discord), Discord -# subtext, character count, boxes (ꟲꟳ new), search/accessibility, Word small caps.

## Step 7: Information gain
- **Full tiny alphabet table** (every tiny char the generator uses + copyable tiny symbols the generator skips + missing letters).
- **Product fix:** subscript now uses ⱼ (U+2C7C) for j — the generator previously left j unconverted. Test added. Home table corrected in the same commit.
- Character-count fact (tiny = 1 unit each), ꟲ/ꟳ support caveat, Word small caps vs Unicode.

## Step 8: Heading map
| Level | Heading |
|---|---|
| H1 | Tiny Text Generator |
| H2 | What is tiny text? |
| H2 | Which tiny letters exist? (full alphabet) — table |
| H2 | Which tiny text style is smallest? |
| H2 | How do you make tiny numbers? |
| H2 | Why do some tiny letters show as boxes or stay big? |
| H2 | FAQ (10) |

## Step 8e: Links / cannibalisation
- Links: home, smallest-text-style-compared, tiny-text-discord, subscript-numbers-chemistry, small-text-instagram-bio, how-to-make-tiny-text.
- `/guides/how-to-make-tiny-text` ("How to Make Tiny Text (Small Letters Copy & Paste)") is informational; fine, but watch for overlap on "tiny text copy and paste".
