<!-- Title tag: Minecraft Font Generator – ᴍɪɴᴇᴄʀᴀꜰᴛ Text for Names, Signs & Chat -->
<!-- Meta: Style text for Minecraft signs, chat, item names, and server MOTDs — small caps, bubble, bold, and more. Includes which fonts work in Java vs Bedrock. Free, copy and paste. -->
<!-- URL: /tools/minecraft-font-generator -->

# Minecraft Font Generator

This Minecraft font generator turns your text into styled Unicode, like ꜱᴍᴀʟʟ ᴄᴀᴘꜱ, ⓑⓤⓑⓑⓛⓔ, and 𝐛𝐨𝐥𝐝, that you can paste into Minecraft chat, signs, books, anvil item names, and your server's MOTD. It's text, not an image, so it copies anywhere a keyboard can type.

It can't recreate the blocky Minecraft logo, though. That logo is custom artwork, and the in-game font, Mojangles, is an 8×8 pixel bitmap built into the game, not a character set you can paste. For the logo look in thumbnails or posters, you need an image generator or a replica font file like Minecrafter or Minecraftia. This page is for text that has to stay text inside the game. Which styles show up also depends on your edition, so check the Java vs Bedrock notes below before you copy.

## How to use it

1. Type your sign line, item name, or MOTD into the box below.
2. Check the Small caps result first. Small caps, bubble, and full-width letters are the styles most likely to show up in both Java and Bedrock. Bold, cursive, and fraktur only work in Java Edition.
3. Copy the version you want with one tap.
4. Paste it into chat, a sign, a book, an anvil, or the motd= line in server.properties, then check it in-game, because Minecraft draws styled characters in its own fallback pixel font.

## Where people use it

### Java Edition

Java Edition shows almost every style. Characters Mojangles doesn't have are drawn in GNU Unifont, the game's fallback pixel font, so bold, cursive, and fraktur all appear on signs, in chat (up to 256 characters), and on anvil names (up to 50 characters).

### Bedrock Edition

Bedrock can't draw characters above U+FFFF. That rules out bold, italic, cursive, fraktur, double-struck, monospace, and 🅰-style squared letters, which appear blank. Small caps, bubble ⓐ, full-width, superscript, and upside-down letters are in the supported range.

### Server MOTD & names

The server-list MOTD accepts symbols like ♥ and small caps, and you can combine them with § color codes. Keep it under 59 characters, because a longer MOTD can cause a communication error in the server list.

## Frequently Asked Questions

### What font does Minecraft use?

Minecraft's in-game text uses Mojangles, also called Minecraft Seven. Each letter is an 8×8 pixel image. Characters it doesn't have fall back to GNU Unifont, and the logo is separate custom artwork that isn't a font.

### Can I copy and paste the actual Minecraft font?

No. The pixel font only exists as images inside the game, so there's no character set to paste. For the blocky look outside the game, use an image-based generator or install a replica font like Minecraftia.

### Which fancy fonts work in Minecraft Bedrock Edition?

Small caps, bubble letters, full-width text, superscript, and upside-down text are the ones to use, because they're all in Unicode's Basic Multilingual Plane, the range Bedrock can draw. Bedrock doesn't support any character above U+FFFF, so bold, cursive, fraktur, and similar math-alphabet styles show up blank.

### Do fancy fonts work in Minecraft Java Edition?

Yes, almost all of them. Java Edition has supported the full Unicode range since 1.16, and current versions draw missing characters in GNU Unifont, so styled text appears in chat, on signs, and in books, just in a slightly different pixel style.

### Can I change my Minecraft username to a fancy font?

No. Java usernames are 3–16 characters using only letters, numbers, and underscores, and Bedrock uses your Xbox gamertag. Styled text works in item names, signs, books, chat, and server text instead.

### How do I make bold or colored text in Minecraft?

Use formatting codes. The section sign § followed by a code changes the text: §l is bold, §o italic, §n underline, §m strikethrough, §k scrambled, §r reset, and 0–9 or a–f pick one of 16 colors. Bedrock accepts them in most text boxes. In Java they work in server files, resource packs, and commands, not normal chat.

### How do I put fancy text on a Minecraft sign?

Copy a style from the generator, place the sign, and paste the text into the line you want to edit. In Bedrock, stick to small caps, bubble, or full-width, and keep each line short, because styled characters can be wider than plain ones.

### How do I rename an item with a fancy font?

Put the item in an anvil, paste the styled text into the name box, and take the renamed item. Java allows up to 50 characters, and renaming costs experience levels.

### How do I add styled text to my server MOTD?

Open server.properties, paste your text after motd=, and restart the server. Symbols and small caps work, and you can add § color codes. Keep it under 59 characters so the server list shows it properly.

### Why does my fancy text show as blank spaces in Minecraft?

You're probably on Bedrock Edition using a style above U+FFFF, such as bold or cursive, which Bedrock can't draw. Switch to small caps, bubble, or full-width. On Java, a missing character usually means a resource pack is replacing the default font.

---
## Annotation notes
All tier-1/2 concepts are present (see coverage.md). Unused tier 3: Minecraft Ten (website-only font), Standard Galactic Alphabet (parked as a future keyword), and VT323 (image-tool font).
