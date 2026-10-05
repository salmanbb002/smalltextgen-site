# Research notes: smol text (strategy post #6, new /guides/smol-text), 2026-10-06

## Step 1: Intent + SERP
- "smol text generator" SERP is entirely SmolLM AI-model pages (Hugging Face spaces, aioz.network). "smol text copy paste tiny letters" returns generic small text generators (commentpicker, convertcase, wordcount, omnicalculator, creativefabrica). **No page targets smol text as tiny lettering.**
- "smol meaning" SERP: dictionary.com, knowyourmeme.com, mentalfloss.com, wiktionary.
- Intent: **know-simple** (what smol means) + **do** (make tiny letters). SERP features not captured (no rendered SERP).

## Step 2: Head entities
| Entity | sameAs | Facts used (source) |
|---|---|---|
| Smol | https://en.wiktionary.org/wiki/smol | "tiny and cute"; eye dialect spelling of small; internet slang; smoler/smolest; derived: smol bean; antonyms thicc, chonky, tol; 2024 Economist quote "smol government" (Wiktionary) |
| DoggoLingo | https://en.wikipedia.org/wiki/DoggoLingo | smol is a key descriptor; tol, lorge antonyms; birb, snek, henlo, sploot, chonk (Dictionary.com + search summary) |
| Superscript / small caps / subscript | wiki | coverage from lib/fonts.ts, script-verified: subscript 17 letters, superscript lacks q, small caps lacks x |

## Step 4: Sources fetched 2026-10-06
| Source | Facts |
|---|---|
| dictionary.com/e/slang/smol/ | affectionate, small in size; animals; 2008 "smol children" tweet; rose mid-2010s in DoggoLingo; BuzzFeed "20 Baby Animals Who Are Too Smol" May 2015; smol bean on Twitter March 2015; Tyler Joseph (Twenty One Pilots) May 2015; fandoms: One Direction, Marvel, K-pop, Steven Universe |
| knowyourmeme.com/memes/smol | exact origin unknown, late spring to early summer 2015; BuzzFeed May 8, 2015; Joseph tweet "I am a bean" June 26, 2015, 22,000+ retweets and 33,000 favorites within two months; Urban Dictionary entry June 6, 2015; 111,000+ tweets by Aug–Sept 2015; pairs with lorge |
| mentalfloss.com (Gretchen McCulloch, Oct 21, 2015) | "extremely small and cute"; works like calling someone baby; One Direction members 5'7"–5'11"; tol, lorge vowel swap |
| en.wiktionary.org/wiki/smol | see Step 2 |
- Date conflict: Dictionary.com gives a 2008 first tweet; Know Your Meme says origin unknown and dates the spread to 2015. Draft states both and attributes each.
- Tool competitors (commentpicker, convertcase, wordcount, omnicalculator) were fetched for the Day 30 post the same day; none mention smol.

## Step 6: Tiers
- T1: smol, internet slang, DoggoLingo, smol bean, Unicode, superscript, small caps, subscript, tiny/mini/miniature text.
- T2: Twenty One Pilots / Tyler Joseph, BuzzFeed, Twitter, Gretchen McCulloch, eye dialect, tol, lorge, Know Your Meme, Dictionary.com, screen reader, Instagram, Discord, bubble text, usernames.
- T3: The Economist, One Direction, chonk.
- Relationships: smol —respelling of→ small; smol —means→ small and cute; smol bean —appeared on→ Twitter March 2015; smol bean —applied to→ Tyler Joseph; BuzzFeed —published→ "Too Smol" list May 8, 2015; smol —belongs to→ DoggoLingo; tol/lorge —opposite of→ smol; smol text —made from→ superscript/small caps/subscript; "smol" —converts fully in→ all three styles; subscript —lacks→ b c d f g q w y z.
- Parked: SmolLM (AI model, different entity), "cinnamon roll" meme, UwU.

## Step 7: Information gain
- Original table: ten smol-speak words × three tiny styles, with a "subscript complete?" column, generated from our own converter. No competitor has it.
- Joins the slang meaning and the lettering how-to in one page; the slang sources never cover lettering and the tools never cover the word.

## Step 8: Heading map
| Level | Heading | Phrase owned |
|---|---|---|
| H1 | Smol Text: How to Make Tiny, Cute Letters You Can Copy and Paste | smol text |
| H2 | What does smol mean? | smol meaning |
| H2 | Where did the word smol come from? | smol origin |
| H2 | What is smol text? | mini text, miniature text |
| H2 | How do you make smol text? (numbered steps) + H3 superscript / small caps / subscript | make smol text |
| H2 | Which smol words convert cleanly? (table) | smol words |
| H2 | How do you style smol text for bios and captions? | smol text bio |
| H2 | Where does smol text work? | platforms |
| H2 | When should you not use smol text? | accessibility |
| H2 | FAQ (11) | |

## Step 8e: Links + cannibalisation
- Out: /, /tools/tiny-text-generator, /tools/superscript, /tools/small-caps, /tools/subscript, /tools/bubble, /guides/how-to-make-tiny-text, /guides/tiny-text-discord, /guides/small-text-instagram-bio.
- In: added to relatedGuideSlugs of how-to-make-tiny-text; comparison post links back.
- Cannibalisation: how-to-make-tiny-text owns "how to make tiny text" and "miniature text". This page owns smol + slang; it names mini/miniature text as synonyms once and links up. The clusters sheet had "smol text" marked Live on the tiny-text guide although the word appeared nowhere on the site; row now points here.

## FAQ source map
- From slang sources: what smol means, is it a real word, smol bean, opposite of smol.
- From tool-competitor FAQs: missing letters, phone typing, Instagram bio, accessibility.
- Added: smallest style, same as tiny/mini text, character count.

## Internal linking pass (2026-10-06)
- Inline links in: tiny text generator ("What is tiny text?"), how-to-make-tiny-text, smallest-text-style-compared, copy-paste-fonts-guide, aesthetic-cursive-fonts.
- Related-guide cards: homepage, superscript tool page, tiny text generator, small-text-instagram-bio, tiny-text-discord, aesthetic-cursive-fonts.
- Out (added): /guides/aesthetic-cursive-fonts.
