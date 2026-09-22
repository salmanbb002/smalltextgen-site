# Annotated draft — coverage markup (subscript generator)

Bold = tier-1/2 concept covered. Not for shipping — `draft.md` is the clean version.

## New block

If you're editing inside an app with its own **subscript** formatting, that's more durable
than pasted **Unicode** for a document you'll keep editing. **Microsoft Word**: Ctrl+= /
⌘+=. **Google Docs**: Ctrl+, / ⌘+,. **Excel**: Format Cells → Font → Subscript. **HTML**:
the `<sub>` tag. None of that works in a plain-text field, which is what the generator is
for: it swaps each character for its **Unicode** **subscript** equivalent.

## FAQ additions

Which letters don't have a subscript version? **Unicode** has no subscript form for the
**missing-letter list** (c, d, f, g, w, y, z). For 'w', the generator approximates it with
two subscript 'v' characters.

Can I write a full **chemical formula** like C₆H₁₂O₆? Yes — every digit 0-9 has a complete
subscript form.

How do I type subscript directly in **Word** or **Google Docs**? Word: Ctrl+= / ⌘+=.
Google Docs: Ctrl+, / ⌘+,.

Is there a subscript shortcut for **Excel**? No default shortcut — Format Cells → Font →
Subscript.

How do I write subscript in **HTML**? Wrap in a `<sub>` tag.

## Unused-term notes

- **LaTeX** — tier 3, not used. Reason: real but narrow overlap with this site's
  Discord/Instagram-leaning audience; one competitor (unicodestyle.com) covers it at
  length, but it doesn't fit this page's existing scope or the parallel structure kept
  with `/tools/superscript`.
- **Audience-segment framing** (students / chemists / developers / researchers, from
  unicodestyle.com) — not used as literal copy. Reason: the existing site voice addresses
  the use case directly rather than naming a persona; adopting it would break tone
  consistency with every other tool page.
- **Download-as-file feature / no-storage privacy claim** (unicodestyle.com) — not used.
  Reason: describes that competitor's own product feature, not something this site's
  generator does — would be a false claim if copied.
