# Subscript Generator — expanded content for `/tools/subscript`

Ready to paste into `pillarContent` in `lib/pillar-content.ts`. Existing `intro` and
`howToSteps` already lead with chemistry correctly — keep them. This adds one `whereUsed`
entry, one new content block, and five new FAQ entries.

## Direct-answer block (unchanged, already correct)

> Turn plain text and numbers into subscript characters you can copy and paste anywhere —
> no equation editor required. This subscript generator is especially useful for chemistry
> formulas like H₂O and CO₂.

## `whereUsed` — add one entry

```
{ platform: "Math & indexed variables", blurb: "Indexed variables and log bases (x₁, x₂, aₙ, log₂) in notes and worked examples — pair with the superscript generator for exponents in the same formula." },
```

## NEW block — "Type subscript without the generator"

Drop-in copy (matches the pattern already written for `/tools/superscript`, so both tool
pages read consistently):

> If you're editing inside an app with its own subscript formatting, that's more durable
> than pasted Unicode for a document you'll keep editing — it stays a real text style
> instead of a substituted character.
>
> - **Microsoft Word**: select the text, press **Ctrl+=** (Windows) or **⌘+=** (Mac).
> - **Google Docs**: select the text, press **Ctrl+,** (Windows) or **⌘+,** (Mac).
> - **Excel**: double-click into the cell, select the characters, open **Format Cells →
>   Font**, and check **Subscript** — no default keyboard shortcut.
> - **HTML**: wrap the characters in a `<sub>` tag, e.g. `H<sub>2</sub>O`.
>
> None of that works in a plain-text field — a Discord name, a chat message, a bio — which
> is exactly what this generator is for: it swaps each character for its Unicode subscript
> equivalent so the formula survives as plain text anywhere rich formatting isn't an
> option.

## FAQ — 5 new entries (append to the existing 5)

```
{ question: "Which letters don't have a subscript version?", answer: "Unicode has no subscript form for c, d, f, g, w, y, or z — every other lowercase letter and all ten digits do. For 'w' specifically, this generator approximates it with two subscript 'v' characters (ᵥᵥ) since no single subscript w exists." },
{ question: "Can I write a full chemical formula like C₆H₁₂O₆ with this?", answer: "Yes — type each number where it needs to sit below the line (6, 12, 6) and paste each result right after its letter. Every digit 0–9 has a complete subscript form, so formulas with only numbers convert exactly every time." },
{ question: "How do I type subscript directly in Word or Google Docs instead?", answer: "Word: select the text and press Ctrl+= (Windows) or ⌘+= (Mac). Google Docs: select the text and press Ctrl+, or ⌘+,. Both apply a real subscript text style, which holds up better through later edits than a substituted character." },
{ question: "Is there a subscript shortcut for Excel?", answer: "Excel has no default keyboard shortcut for subscript. Double-click into the cell, select the characters, open Format Cells → Font, and check Subscript." },
{ question: "How do I write subscript in HTML?", answer: "Wrap the characters in a <sub> tag — for example H<sub>2</sub>O. Unicode subscript from this generator is the plain-text alternative for fields that don't support HTML or rich formatting at all." }
```

## Internal links to add
- Link "superscript generator" mention in the new math FAQ answer to `/tools/superscript`.
- Link the chemical-formula FAQ answer to `/guides/subscript-numbers-chemistry`.
- Link the missing-letters FAQ answer to `/guides/superscript-subscript-character-set` for
  the full reference chart.
