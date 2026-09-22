# Small Caps Generator — expanded content for `/tools/small-caps`

Existing `intro`/`howToSteps`/`whereUsed` are already strong — unchanged. This adds a new
`nativeFormatting` block (reusing the field already built for the superscript/subscript
pages) and 5 new FAQ entries.

## NEW: `nativeFormatting`

```
nativeFormatting: [
  { app: "Microsoft Word", instructions: "Select the text, then press Ctrl+Shift+K, or use Format → Font → Small caps." },
  { app: "Google Docs", instructions: "Google Docs has no native small-caps option — this Unicode generator is the only copy-paste-ready way to get the look there." },
  { app: "CSS (for developers)", instructions: "Add font-variant: small-caps to the element — but it only renders inside that styled page and reverts to plain text the moment it's copied elsewhere." },
],
```

## FAQ — 5 new entries (append to the existing 5)

```
{ question: "How do I get small caps in Microsoft Word?", answer: "Select the text, press Ctrl+Shift+K, or use Format → Font → Small caps. It's a real text style there, so it survives further editing — but paste that text into a plain field like a bio or a chat, and it reverts to normal capitals, since the style doesn't travel with it." },
{ question: "Does CSS have a small caps option?", answer: "Yes — font-variant: small-caps — but it only renders inside a page that loads that CSS. Copy the text out to anywhere else and it reverts to plain letters, which is exactly why a Unicode small caps generator is useful for anything that leaves that one page." },
{ question: "Does Google Docs have small caps formatting?", answer: "No — unlike Word, Google Docs has no built-in small-caps option in its formatting menu. Pasting Unicode small caps from this generator is the only way to get the look there." },
{ question: "Do numbers convert to small caps too?", answer: "No — this generator only converts letters. Unicode's small-caps block doesn't include digit forms the way superscript and subscript do, so numbers are left at normal size." },
{ question: "Is Word's Small Caps the same as this generator's output?", answer: "They look similar but work differently. Word's version is a text style that only holds inside Word-compatible editing. This generator's output is actual Unicode characters, so it looks the same everywhere you paste it — a bio, a chat, a spreadsheet — with no editor required." }
```

## Internal links
No new links needed — existing `relatedGuideSlugs` (`unicode-explained`,
`small-caps-copy-paste`) already cover the adjacent ground.
