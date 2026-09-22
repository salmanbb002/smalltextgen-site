# Upside Down Text Generator — expanded content for `/tools/upside-down`

Existing `intro`/`howToSteps` are already strong (already correctly distinguish upside-down
from mirror/reversed text — ahead of every competitor checked). This adds one `whereUsed`
entry and 5 new FAQ entries.

## `whereUsed` — add one entry

```
{ platform: "Riddles & hidden answers", blurb: "Flip the answer to a question or a spoiler so it takes a deliberate second to read — a common trick in puzzles, quizzes, and joke replies." },
```

## FAQ — 5 new entries (append to the existing 5)

```
{ question: "Which letters stay the same when flipped upside down?", answer: "l, o, s, x, and z look identical rotated 180°, so they appear unchanged even though the generator did convert them. A few uppercase letters (H, I, N, S, X, O) are also self-symmetric for the same reason." },
{ question: "Can I use this to hide a riddle answer or a spoiler?", answer: "Yes — flip the answer, paste it below the question, and it stays readable-but-deliberate: whoever wants it has to actively flip it back, rather than reading it by accident." },
{ question: "Does upside down text work in Discord?", answer: "Yes, in display names, server nicknames, messages, and bios — anywhere Discord accepts standard Unicode. It won't work in the @username field, which only accepts plain characters." },
{ question: "How do I flip upside down text back to normal?", answer: "There's no automatic reverse on this tool — paste it back in and read the mapped characters mentally, or just rotate your screen. Since the mapping isn't one-to-one for every character, a perfect automatic un-flip isn't reliable." },
{ question: "Does upside down text show up in search results?", answer: "No — search engines index the literal Unicode characters, which are different code points from normal letters, so upside-down text doesn't match a plain-text search for the same word." }
```

## Internal links
No new internal links needed — existing `relatedGuideSlugs` (`cool-different-fonts`,
`copy-paste-fonts-guide`) already cover the adjacent ground.
