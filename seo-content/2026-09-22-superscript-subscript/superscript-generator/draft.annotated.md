# Annotated draft — coverage markup (superscript generator)

Bold = tier-1/2 concept covered. Not for shipping — `draft.md` is the clean version.

## New block

If you're working inside an app that has its own **superscript** formatting, using that is
more durable than pasting **Unicode** — it stays a real text style instead of a substituted
character. **Microsoft Word**: Ctrl+Shift+= / ⌘+Shift+=. **Google Docs**: Ctrl+. / ⌘+.
**Excel**: Format Cells → Font → Superscript. **PowerPoint**: same as Word. **HTML**: the
`<sup>` tag. None of that helps in a plain-text field, which is what the generator is for:
it swaps each character for its **Unicode** **superscript** equivalent.

## FAQ additions

Does this work for **chemical / ionic notation** like Na⁺ and Cl⁻? Yes — charge symbols use
the same **Unicode** **superscript** characters as **exponents**. For the subscript numbers
in a formula, use the **subscript** generator instead.

Can I add a **trademark / copyright symbol** this way? ™ and © aren't superscript
technically, but people commonly raise a small ™ or ® next to a brand name.

How do I type superscript directly in **Word** or **Google Docs**? Word: Ctrl+Shift+= /
⌘+Shift+=. Google Docs: Ctrl+. / ⌘+. Both apply a real superscript style rather than
swapping characters.

Why do 'i' and 'q' never convert? **Unicode** never assigned superscript code points for
lowercase i or q.

Is there a shortcut for **Excel** or **PowerPoint**? PowerPoint uses Word's shortcut. Excel
has none — use Format Cells → Font → Superscript.

## Unused-term notes

- **Reddit caret syntax (x^2)** — tier 3, not used. Reason: off-topic for a Unicode-tool
  audience; Reddit-specific markdown doesn't belong on a general copy-paste page.
- **Gboard / iOS mobile limitation** — tier 3, not used in this pass. Reason: the existing
  FAQ set doesn't cover mobile-native typing at all yet; flagged as a candidate for a
  future FAQ entry rather than forced into this round.
