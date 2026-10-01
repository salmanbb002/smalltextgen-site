# Research notes: unicode text converter (Day 22, strengthen /tools/unicode-text-converter), 2026-10-02

## Step 1: Intent + SERP
- **Mixed intent.** Majority = do (fancy-text converter: convertcase, qaz.wtf, textfancy, omnicalculator, unicodeconverter.co); minority = technical encoding (branah UTF-8/16/32/Base64), plus app-store listings and Hindi/Gujarati legacy-font converters.
- Fan-out: what is Unicode, blocks/code points, accessibility, convert back to plain text, why characters don't convert, vs formatting, searchability.

## Step 2: Head entities
| Entity | sameAs | Attributes |
|---|---|---|
| Unicode | https://en.wikipedia.org/wiki/Unicode | Unicode Consortium (1991); Unicode 17.0 Sep 2025 = 159,801 chars; 1,114,112 code points U+0000–U+10FFFF |
| Unicode Consortium | https://en.wikipedia.org/wiki/Unicode_Consortium | non-profit, founded 1991 |
| Mathematical Alphanumeric Symbols | https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols | U+1D400–1D7FF, Unicode 3.1 (2001), gaps filled by Letterlike Symbols |
| Letterlike Symbols | https://en.wikipedia.org/wiki/Letterlike_Symbols | ℬ U+212C, ℭ U+212D |
| UTF-8 / UTF-16 | wiki | bytes per char verified locally with Python (A=1, ᴀ/Ⓐ/Ａ=3, 𝐀=4 bytes; 𝐀 = 2 UTF-16 units) |
| Unicode normalization (NFKC) | https://en.wikipedia.org/wiki/Unicode_equivalence | verified: NFKC(𝐀/Ⓐ/Ａ/ℭ) → A/A/A/C; NFKC(ᴀ) unchanged |

## Step 4: Competitors
1. convertcase.net: 65+ styles; H2s what are Unicode font styles / decorative / find a style / where use / accessibility / why not convert / vs formatting / copy / convert back.
2. omnicalculator.com: what is generator / how to use; FAQ convert to Unicode, circled, invert.
3. yaytext.app blog: what conversion does (code points), styles, where it works, vs web fonts, limitations, choosing; FAQ same as font generator / convert back / languages / avoid.
4. qbotype.com: how it works, supported blocks (Math Alnum, Enclosed, Fullwidth, Combining), FAQ what is Unicode text (>150k), searchable.

## Step 6: Tiers
- T1: Unicode, code point, Unicode text converter, Mathematical Alphanumeric Symbols, styled characters copy-paste.
- T2: Unicode Consortium, version/character count, Letterlike Symbols gaps, Enclosed Alphanumerics, Fullwidth Forms, Combining Diacritical Marks, Phonetic Extensions (small caps), UTF-8/UTF-16, character limits, NFKC / convert back, screen readers, search engines/hashtags, web fonts vs Unicode, boxes.
- T3 parked: Base64/percent-encoding (technical intent; one FAQ distinguishes instead), Hindi legacy-font conversion.

## Step 7: Information gain
- Competitors stop at "uses Math Alphanumeric block". **Added:** block-by-block table with UTF-8 bytes per letter (verified), the Letterlike-gap explanation (ℬ/ℭ), why styled text eats character limits, and a verified NFKC "convert back" explanation (which styles round-trip and which don't). FAQ separates this tool from UTF-8 converters to catch the technical-intent minority.

## Step 8: Heading map
| Level | Heading | Owns |
|---|---|---|
| H1 | Unicode Text Converter | focus |
| H2 | What is Unicode? | what is unicode (plan requirement: E-E-A-T explainer) |
| H2 | How does a Unicode text converter work? | how it works / blocks (table) |
| H2 | Why does converted text use more characters? | character count |
| H2 | Can you convert Unicode text back to plain text? | convert back |
| H2 | Unicode styles vs fonts and formatting | vs fonts / accessibility |
| H2 | FAQ (10) | |

## Step 8e: Cannibalisation flag (needs user decision)
- `/guides/unicode-text-converter-explained` has title "Unicode Text Converter: How Copy-Paste Fonts Actually Work", which contains the exact head term. Recommend retitling it to "How Copy-Paste Fonts Work (Unicode Code Points Explained)" so the tool page owns "unicode text converter". **Not changed** (out of scope; ask first).
- Tool page links to both Unicode guides; guides already link to the tool.
