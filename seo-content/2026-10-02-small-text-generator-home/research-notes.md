# Research notes: small text generator (Day 28, homepage refresh), 2026-10-02

## Step 1: Intent + SERP
- "small text generator" (31k, KD 33): **do**. Top: dnschecker, picsart, duplichecker, lingojam (Tiny Text), fontcraft, twoowls (Facebook tiny text), smalltextgenerator.org, **smalltextgen.com** (competitor), microapp, amplewebsol.
- Fan-out: how to make small letters, small numbers, which is smallest, WhatsApp/Discord, boxes, limits, is it a font.

## Step 2: Head entities
| Entity | sameAs | Attributes (verified against lib/fonts.ts output) |
|---|---|---|
| Small caps | https://en.wikipedia.org/wiki/Small_caps | Phonetic Extensions (ᴀ U+1D00); can't convert x; q → ǫ look-alike |
| Superscript / subscript | https://en.wikipedia.org/wiki/Subscript_and_superscript | superscript can't convert q; subscript can't convert b c d f g j q w y z |
| Superscripts and Subscripts block | https://en.wikipedia.org/wiki/Superscripts_and_Subscripts_(Unicode_block) | digits ⁰–⁹ ₀–₉ |
| Unicode | https://en.wikipedia.org/wiki/Unicode | |

## Step 4: Competitors
1. smalltextgen.com: H2s how to copy & paste / how to make text small / small numbers / style comparison table (claims superscript "full a–z" — wrong, no superscript q) / by platform; FAQ 6 (copy, numbers, WhatsApp & Discord, boxes, limits, is it a font).
2–4. dnschecker, duplichecker, lingojam: thin; uses (footnotes, APA/MLA claims), three tiny types.

## Step 6: Tiers
- T1: small text generator, small letters, small caps, superscript, subscript, Unicode, copy-paste.
- T2: tiny text (→ /tools/tiny-text-generator), smallest style, missing letters, boxes, platforms, usernames, privacy/local, free, accessibility.

## Step 7: Information gain
- **Accurate missing-letter table** (generated from our converter), correcting the competitor's "full a–z" claim. "How small text works" explainer. Live style count (29) instead of the stale hard-coded "23" in 6 places (trust signal fix).

## Plan items
- Trust signals: live style count; updated date; "runs in your browser / no sign-up / no limit" FAQ; "is it free".
- "How it works" explainer: new H2.
- Expanded FAQ schema: 9 → 13 (FAQPage JSON-LD built from the same array, so on-page = schema verbatim).

## Step 8e: Tiny-text ownership (user decision 2026-10-02)
- Home now owns "small text generator"; "tiny" removed from the title tag, meta, and hero copy. Home FAQ points "tiny" intent to /tools/tiny-text-generator. Clusters sheet row for "tiny text generator" re-pointed on Day 29.
