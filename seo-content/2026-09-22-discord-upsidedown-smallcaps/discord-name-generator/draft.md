# Discord Name Generator — new gallery page `/tools/discord-name-generator`

Ready to paste as a new entry into `galleryPages` in `lib/gallery-pages.ts`, and a new
route file mirroring `app/tools/fancy-text-generator/page.tsx`.

```ts
{
  slug: "discord-name-generator",
  title: "Discord Name Generator – Fancy & Symbol Names, Copy & Paste",
  metaDescription:
    "Generate fancy Discord names with stylish fonts and symbol wraps — bold, cursive, bubble, and more. Free Discord name generator, copy and paste ready.",
  h1: "Discord Name Generator",
  eyebrow: "Fancy & symbol names",
  intro: [
    "This Discord name generator turns a plain name into a set of decorated options — stylish fonts and symbol-wrapped versions — ready to copy and paste into your profile or a server nickname. It runs the same Unicode style engine as every tool on this site, so the result is real text, not an image, and it survives copy-paste exactly as shown.",
    "Discord actually has three separate name fields with different rules: your **@username** (the plain a–z, 0–9, underscore, and period handle you log in with), your **display name** (shown across all of Discord, accepts full Unicode, capped at 32 characters), and a **server nickname** (a per-server override of your display name, same rules). Fancy fonts and symbols work in the display name and nickname — never in the @username.",
  ],
  howToSteps: [
    "Type your name into the box below.",
    "Compare the styles — bold, cursive, bubble, small caps, squared, sparkles, hearts, and glitch all render at once.",
    "Copy the version you want, or wrap it with symbols using one of the templates below.",
    "In Discord, go to User Settings → Profile → Display Name to set it site-wide, or right-click a server → Change Nickname to set it for just that server.",
  ],
  featuredStyleSlugs: ["bold", "cursive", "bubble", "small-caps", "squared", "sparkles", "hearts", "fullwidth", "zalgo"],
  whereUsed: [
    { platform: "Display name", blurb: "Your Discord-wide profile name — accepts the full style list above, capped at 32 characters." },
    { platform: "Server nickname", blurb: "A per-server override of your display name — same Unicode rules, set individually in each server you're in." },
    { platform: "Symbol-wrap templates", blurb: "Frame a styled name with symbols for a cleaner look: ✦ NAME ✦ · 「 NAME 」 · ⚔ NAME ⚔ · 彡 NAME 彡. Paste the name from the generator above in place of NAME." },
  ],
  faq: [
    { question: "Can I use symbols and fancy fonts in my Discord name?", answer: "In your display name and any server nickname, yes — both accept the full Unicode range. Your @username is the exception: it's limited to lowercase letters, numbers, underscores, and periods, with no symbols or styled fonts." },
    { question: "What's the difference between a Discord username, display name, and nickname?", answer: "Your @username is the plain handle you log in with and mention people by. Your display name is what shows everywhere instead of it, and accepts full Unicode. A server nickname is a further per-server override of your display name — same rules, set individually in each server." },
    { question: "Is there a character limit for Discord names?", answer: "Display names and nicknames are capped at 32 characters, including any symbols in a wrap template. Count the full decorated version, not just the plain name, before you commit to it." },
    { question: "Do I need Discord Nitro to use fancy fonts or symbols?", answer: "No. These are plain Unicode characters, not custom emoji — anyone can paste them into a display name or nickname without a Nitro subscription." },
    { question: "How do I change my Discord display name?", answer: "Open User Settings → Profile, edit the Display Name field, paste your generated name, and save. This changes it everywhere on Discord, not just one server." },
    { question: "How do I set a nickname for just one server?", answer: "Right-click the server icon (or your name in the member list), choose Change Nickname, paste the name, and save. It only applies inside that server." },
    { question: "Why does my fancy name show as boxes for some people?", answer: "A few Unicode symbols come from less common blocks that an older device's font doesn't include a glyph for. Stick to widely-supported styles — bold, cursive, small caps — for a name you need to render reliably." },
    { question: "Can I make my Discord name invisible?", answer: "That's a different technique from styling — see the [blank Discord name guide](/guides/blank-discord-name-message) for what currently works and what Discord blocks." },
    { question: "Can I use these symbols in a channel name too?", answer: "Discord lowercases channel names and replaces spaces with hyphens, but most symbols pass through. It's a different field from your personal display name or nickname, so test it there directly." },
    { question: "What's the easiest style to read in a Discord name?", answer: "Small caps and bold keep every letter recognizable at a glance. Heavily decorated styles like glitch or symbol-wrapped names stand out more but cost some readability — use them for a display name you want noticed, not one people need to type or search for." },
  ],
  relatedToolSlugs: ["bold", "cursive", "bubble", "small-caps"],
  relatedGuideSlugs: ["tiny-text-discord", "blank-discord-name-message", "superscript-discord"],
  lastUpdated: "2026-09-22",
},
```

## Route file (new)

`app/tools/discord-name-generator/page.tsx` — identical structure to
`app/tools/fancy-text-generator/page.tsx`, only `SLUG` changes to
`"discord-name-generator"`.

## Homepage + cross-links
- Add to `focusedTools` in `app/page.tsx`: `["Discord name generator", "✦ Nᴀᴍᴇ ✦", "discord-name-generator"]`.
- Add `"discord-name-generator"` to the `relatedGuideSlugs`-equivalent cross-links on the
  `tiny-text-discord` and `blank-discord-name-message` guides so the new page isn't an
  orphan (small addition, not a rewrite of those guides).
