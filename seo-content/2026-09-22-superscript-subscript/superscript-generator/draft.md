# Superscript Generator — expanded content for `/tools/superscript`

Ready to paste into `pillarContent` in `lib/pillar-content.ts`. Existing `intro` and
`howToSteps` are solid — keep them. This adds one expanded use-case paragraph, one new
content block, and five new FAQ entries.

## Direct-answer block (unchanged, already correct)

> This superscript generator raises your text into small Unicode characters set above the
> baseline — the ˣ ⁿ and ⁰¹² style — ready to copy and paste into a caption, formula,
> footnote, or display name.

## `whereUsed` — add one entry

```
{ platform: "Chemistry & trademarks", blurb: "Ionic charges (Na⁺, Cl⁻) alongside the subscript numbers in a formula, plus ™ and ® marks in a bio or listing — see the subscript generator for the half of a formula that sits below the line." },
```

## NEW block — "Type superscript without the generator"

Drop-in copy for a new section (or fold into an expanded FAQ answer if you don't want a new
`PillarContent` field yet):

> If you're working inside an app that has its own superscript formatting, using that is
> more durable than pasting Unicode — it stays a real text style instead of a substituted
> character, which matters if you'll edit the document later.
>
> - **Microsoft Word**: select the text, press **Ctrl+Shift+=** (Windows) or **⌘+Shift+=**
>   (Mac).
> - **Google Docs**: select the text, press **Ctrl+.** (Windows) or **⌘+.** (Mac).
> - **Excel**: select the characters inside the cell (double-click into the cell first),
>   open **Format Cells → Font**, and check **Superscript** — there's no default keyboard
>   shortcut.
> - **PowerPoint**: same shortcut as Word — **Ctrl+Shift+=** — since it shares Office's
>   formatting engine.
> - **HTML**: wrap the characters in a `<sup>` tag, e.g. `x<sup>2</sup>`.
>
> None of that helps in a plain-text field — a Discord name, an Instagram bio, a chat
> message — because those don't support rich text at all. That's what this generator is
> for: it swaps each character for its Unicode superscript equivalent, so the raised look
> survives as plain text anywhere formatting isn't an option.

## FAQ — 5 new entries (append to the existing 5)

```
{ question: "Does this work for chemical or ionic notation like Na⁺ and Cl⁻?", answer: "Yes — charge symbols and ion notation use the same Unicode superscript characters as exponents. For the subscript numbers in a formula (H₂O, CO₂), use the subscript generator instead; most formulas need both tools together." },
{ question: "Can I add a trademark or copyright symbol this way?", answer: "™ and © aren't superscript characters technically, but people commonly raise a small ™ or ® next to a brand name using this same generator — type the letters, copy the result, and place it right after the name." },
{ question: "How do I type superscript directly in Word or Google Docs instead?", answer: "Word: select the text and press Ctrl+Shift+= (Windows) or ⌘+Shift+= (Mac). Google Docs: select the text and press Ctrl+. or ⌘+. Both apply a real superscript text style rather than swapping characters, which holds up better through later edits." },
{ question: "Why do 'i' and 'q' never convert, specifically?", answer: "Unicode never assigned superscript code points for lowercase i or q — every other lowercase letter has one, but those two don't exist in any font. The generator leaves them as regular letters rather than faking a lookalike." },
{ question: "Is there a superscript shortcut for Excel or PowerPoint?", answer: "PowerPoint uses the same shortcut as Word (Ctrl+Shift+=). Excel has no default keyboard shortcut — select the characters inside the cell, open Format Cells → Font, and check Superscript." }
```

## Internal links to add
- Link "subscript generator" mention in the new chemistry FAQ answer to `/tools/subscript`.
- Link the new block's HTML/exponent line to `/guides/superscript-numbers-exponents`.
- Link the "i and q" FAQ answer to `/guides/superscript-subscript-character-set` for the
  full character reference.
