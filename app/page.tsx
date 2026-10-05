import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Copy,
  Filter,
  Gauge,
  Globe2,
  Heart,
  Layers3,
  LockKeyhole,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";
import { Converter } from "@/components/converter";
import { ArticleSections } from "@/components/article-sections";
import { LastUpdated } from "@/components/last-updated";
import { textStyles } from "@/lib/fonts";
import type { GuideSection } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site-url";

const homeTitle = "Small Text Generator — ꜱᴍᴀʟʟ Caps & Copy-and-Paste Fonts";
const homeDescription =
  "Free small text generator: turn any word into small caps, superscript, subscript, and other small letters you can copy and paste into Instagram, TikTok, and Discord. Runs in your browser, no app or sign-up.";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: { title: homeTitle, description: homeDescription },
  twitter: { title: homeTitle, description: homeDescription },
};

const faq = [
  [
    "Is this a font generator?",
    "Not exactly. SmallTextGen replaces regular letters with visually similar Unicode characters. That is why most results can be copied and pasted without installing a font.",
  ],
  [
    "Where can I use small text?",
    "Try it in social bios, captions, display names, chats, notes, and headings. Support varies because each app decides which Unicode characters it accepts.",
  ],
  [
    "Does SmallTextGen upload my text?",
    "No. The text converters run entirely in your browser. Only the optional AI caption starter sends the topic you enter to the server for generation.",
  ],
  [
    "Why are some superscript or subscript letters unchanged?",
    "Unicode does not include a perfect raised or lowered version of every Latin letter. SmallTextGen keeps unsupported letters readable instead of substituting misleading symbols.",
  ],
  [
    "Will every style work on every app?",
    "Most modern apps display these characters, but some services filter unusual Unicode or use fonts without every glyph. If one style fails, small caps and bold are usually reliable alternatives.",
  ],
  [
    "Can I copy and paste small text into a username?",
    "Usually not — usernames are typically restricted to plain letters, numbers, and a few symbols. Small text generally works in bios, display names, captions, and messages instead.",
  ],
  [
    "Is this a copy-and-paste fonts generator?",
    "Yes — that is another name for it. SmallTextGen swaps your letters for styled Unicode characters, so you can copy the result and paste fonts like cursive, bold, small caps, or bubble text into apps that do not let you change the typeface.",
  ],
  [
    "How do I make small letters?",
    "Type your text into the generator above, then copy the Small caps, Superscript, or Subscript result and paste it where you need it. Small caps is the most readable; superscript is the smallest. For the tiniest raised letters only, use the tiny text generator page.",
  ],
  [
    "How does a small text generator work?",
    "It swaps each letter for a smaller-looking Unicode character. Small caps come mostly from the Phonetic Extensions block (ᴀ is U+1D00), and superscript and subscript come from modifier letters and the Superscripts and Subscripts block. The result is ordinary text, so it copies and pastes anywhere.",
  ],
  [
    "Which small text style is the smallest?",
    "Subscript and superscript are the smallest, because they sit above or below the line at about half height. Small caps are capitals shrunk to lowercase height, so they're bigger but much easier to read and have the most complete alphabet.",
  ],
  [
    "Is SmallTextGen free?",
    "Yes. Every generator is free with no sign-up, no daily limit, and no watermark. The text converters run in your browser, so there's nothing to install.",
  ],
  [
    "Is small text accessible to screen readers?",
    "Only partly. Small caps usually read close to normal, but superscript and subscript letters may be read one by one or skipped. Keep names, links, and important details in plain text.",
  ],
  [
    "Is a small text generator the same as a Unicode text converter?",
    "Yes. Every style here is built from Unicode characters, so small text generator, font generator, and Unicode text converter all describe the same tool.",
  ],
];

const focusedTools = [
  ["Fancy text generator", "𝒻𝒶𝓃𝒸𝔂 𝓉ℯ𝔁𝓉", "fancy-text-generator"],
  ["Unicode text converter", "ᴜɴɪᴄᴏᴅᴇ", "unicode-text-converter"],
  ["Tiny text generator", "ᵗⁱⁿʸ ᵗᵉˣᵗ", "tiny-text-generator"],
  ["Small caps", "ᴛɪɴʏ ᴛᴇxᴛ", "small-caps"],
  ["Invisible text", "⠀⠀⠀⠀ (blank)", "invisible"],
  ["Superscript", "ᵗⁱⁿʸ ᵗᵉˣᵗ", "superscript"],
  ["Subscript", "ₜᵢₙy ₜₑₓₜ", "subscript"],
  ["Bold text", "𝐓𝐢𝐧𝐲 𝐭𝐞𝐱𝐭", "bold"],
  ["Cursive", "𝒯𝒾𝓃𝓎 𝓉ℯ𝓍𝓉", "cursive"],
  ["Bubble text", "Ⓣⓘⓝⓨ ⓣⓔⓧⓣ", "bubble"],
  ["Underline", "T̲i̲n̲y̲ t̲e̲x̲t̲", "underline"],
  ["Strikethrough", "T̶i̶n̶y̶ t̶e̶x̶t̶", "strikethrough"],
  ["Italic", "𝑇𝑖𝑛𝑦 𝑡𝑒𝑥𝑡", "italic"],
  ["Upside down", "ʇxǝʇ ʎuᴉ⊥", "upside-down"],
  ["Mirror text", "ƚxɘƚ yniT", "mirror"],
  ["Glitch text", "T̸i̷n̶y̴ ̶t̵e̸x̷t̴", "zalgo"],
  ["Discord name generator", "✦ Nᴀᴍᴇ ✦", "discord-name-generator"],
  ["Vaporwave text", "Ｔｉｎｙ　ｔｅｘｔ", "vaporwave-text-generator"],
  ["Typewriter font", "𝚃𝚒𝚗𝚢 𝚝𝚎𝚡𝚝", "typewriter-font-generator"],
  ["Old English text", "𝕿𝖎𝖓𝖞 𝖙𝖊𝖝𝖙", "old-english-text-generator"],
  ["Gaming fonts", "𝕿𝖎𝖓𝖞 𝖙𝖊𝖝𝖙", "gaming-font-generator"],
  ["Roblox fonts", "𝐓𝐢𝐧𝐲 𝐭𝐞𝐱𝐭", "roblox-font-generator"],
  ["Minecraft fonts", "ᴛɪɴʏ ᴛᴇxᴛ", "minecraft-font-generator"],
  ["Fortnite fonts", "𝗧𝗶𝗻𝘆 𝘁𝗲𝘅𝘁", "fortnite-font-generator"],
  ["Adopt Me fonts", "ⓣⓘⓝⓨ ⓣⓔⓧⓣ", "adopt-me-font-generator"],
] as const;

const relatedGuides = [
  ["Aesthetic Fonts for Your Instagram Bio", "small-text-instagram-bio"],
  ["Smallest Text Style Compared", "smallest-text-style-compared"],
  ["Small Text Generators Compared: 7 Free Tools", "small-text-generator-compared"],
  ["Smol Text: Tiny, Cute Letters to Copy and Paste", "smol-text"],
  ["Tiny Text for Discord: Copy, Paste, and Tips", "tiny-text-discord"],
  ["Best Copy-Paste Text Tricks for Social Media Bios", "copy-paste-text-tricks-social-media-bios"],
] as const;

const homeSections: GuideSection[] = [
  {
    heading: "Which small text style should you use?",
    paragraphs: [
      "Small text comes in three main styles, and none of them has every letter. Unicode never added a small capital X, a superscript q, or subscript forms for nine letters, so the generator leaves those letters as they are instead of swapping in a misleading look-alike. Pick the style by how small you need it and how complete the alphabet has to be.",
    ],
    table: {
      caption: "Small text styles compared",
      headers: ["Style", "Example", "Size", "Letters it can't convert", "Best for"],
      rows: [
        ["[Small caps](/tools/small-caps)", "ꜱᴍᴀʟʟ ᴛᴇxᴛ", "Lowercase height", "x (q uses a look-alike, ǫ)", "Full bios, names, headings"],
        ["[Superscript](/tools/superscript)", "ˢᵐᵃˡˡ ᵗᵉˣᵗ ¹²³", "About half height, raised", "q", "Tiny accents, footnotes, exponents"],
        ["[Subscript](/tools/subscript)", "ₛₘₐₗₗ ₜₑₓₜ ₁₂₃", "About half height, lowered", "b c d f g q w y z", "Chemical formulas, numbers"],
        ["[Tiny text](/tools/tiny-text-generator)", "ᵗⁱⁿʸ ᵗᵉˣᵗ", "Smallest", "q", "One tiny word or line"],
      ],
    },
  },
  {
    heading: "How does small text work?",
    paragraphs: [
      "Your phone can't shrink one word in a bio, because apps like Instagram and Discord don't let you change font size. Unicode, the standard list of characters every device shares, happens to include letters that are drawn small: phonetic small capitals used by linguists, and the raised and lowered letters used in math and chemistry. A small text generator swaps your normal letters for those characters.",
      "Because the result is real text, it copies and pastes like anything else and shows up the same for everyone whose device has the glyphs. On a few older phones, rare characters can appear as boxes, which is why small caps, with the widest support, is the safe default. For more detail, read [Unicode, explained](/guides/unicode-explained) or compare sizes in [the smallest text style](/guides/smallest-text-style-compared). To see how this tool stacks up against others, read [seven small text generators compared](/guides/small-text-generator-compared).",
    ],
  },
  {
    heading: "Where does small text work?",
    paragraphs: [
      "Small text works in Instagram and TikTok bios and captions, Discord display names and messages, WhatsApp chats and status, X posts, YouTube comments, and most games that accept Unicode names. It doesn't work in usernames and @handles, which only allow plain characters. See the guides for [Instagram bios](/guides/small-text-instagram-bio) and [Discord](/guides/tiny-text-discord) for the fields each app accepts.",
    ],
  },
];

const siteUrl = getSiteUrl();

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "SmallTextGen Small Text Generator",
        url: siteUrl,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        description: "A browser-based Unicode text generator for small caps, superscript, subscript, cursive, bubble text, and more.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="utility-hero">
        <div className="utility-hero-copy">
          <div className="breadcrumbs" aria-label="Breadcrumb">Home <span>/</span> Text tools <span>/</span> Small text generator</div>
          <span className="eyebrow"><span className="status-dot" /> Free online text tool</span>
          <h1>Small Text Generator</h1>
          <p>
            This small text generator turns any sentence into small letters you can copy and paste, like ꜱᴍᴀʟʟ ᴄᴀᴘꜱ, ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ, and ₛₘₐₗₗ ₜₑₓₜ, plus cursive, bubble, and {textStyles.length} styles in all, generated as you type. The small letters are Unicode characters, not a font, so they paste into a bio, caption, or display name without installing a keyboard app. Every style updates live so you can compare them side by side. Nothing you type is uploaded: the converter runs in your browser.
          </p>
          <div className="utility-badges">
            <span><Zap size={15} aria-hidden="true" /> Instant results</span>
            <span><LockKeyhole size={15} aria-hidden="true" /> Private conversion</span>
            <span><Check size={15} aria-hidden="true" /> No sign-up</span>
          </div>
          <LastUpdated date="2026-10-02" />
        </div>
        <div className="tool-profile" aria-label="Tool capabilities">
          <div className="tool-profile-head"><span>Tool overview</span><b>Ready</b></div>
          <div className="profile-metric"><strong>{textStyles.length}</strong><span>Unicode styles<br />in one workspace</span></div>
          <div className="profile-grid">
            <span><b>0</b> uploads</span>
            <span><b>&lt;1s</b> conversion</span>
            <span><b>∞</b> uses</span>
          </div>
          <p>Works with Instagram, Discord, WhatsApp, TikTok, bios, captions, and display names.</p>
        </div>
      </section>

      <Converter />

      <section className="content-hub" aria-labelledby="unicode-title">
        <article>
          <span className="section-index">About the tool</span>
          <h2 id="unicode-title">What is a small text generator?</h2>
          <p>A small text generator — also called a font generator or Unicode text converter — replaces ordinary Latin letters with visually similar Unicode characters. The result looks like a different font, but it stays selectable text you can copy and paste.</p>
          <p>SmallTextGen generates small caps, raised superscript, lowered subscript, cursive, bubble text, mathematical alphabets, and decorated styles without asking you to install anything.</p>
          <Link href="/guides/unicode-explained">Read why these aren&apos;t real fonts <ArrowRight size={16} aria-hidden="true" /></Link>
        </article>
        <aside>
          <span className="section-index">Popular uses</span>
          <h3>Where can I use it?</h3>
          <p>Small text shows up most in Instagram and TikTok bios, Discord display names, and WhatsApp chats — anywhere a plain caption could use a little personality. It reads correctly wherever standard Unicode is accepted, which covers most social apps and messengers.</p>
          <ul>
            <li><Check size={16} aria-hidden="true" /> Instagram and TikTok bios</li>
            <li><Check size={16} aria-hidden="true" /> Discord names and community roles</li>
            <li><Check size={16} aria-hidden="true" /> WhatsApp and Messenger chats</li>
            <li><Check size={16} aria-hidden="true" /> Captions, headings, and notes</li>
            <li><Check size={16} aria-hidden="true" /> Gaming names and profile labels</li>
          </ul>
          <div className="platform-tags"><span>Instagram</span><span>Discord</span><span>WhatsApp</span><span>TikTok</span><span>Reddit</span></div>
        </aside>
      </section>

      <section className="feature-command" aria-labelledby="features-title">
        <header className="feature-command-head">
          <div>
            <span className="section-index">Features</span>
            <h2 id="features-title">Everything useful, kept simple.</h2>
          </div>
          <p>One command surface for transforming, finding, saving, and copying styled text—without interrupting your flow.</p>
        </header>

        <div className="feature-grid">
          <article className="feature-card feature-live">
            <div className="feature-card-top"><span>Live results</span><Zap aria-hidden="true" /></div>
            <h3>Live conversion</h3>
            <p>Every visible result updates the moment your input changes. There is no submit step and no waiting screen.</p>
            <div className="feature-flow"><span>Plain text</span><ArrowRight aria-hidden="true" /><strong>{textStyles.length} outputs</strong></div>
          </article>
          <article className="feature-card">
            <div className="feature-card-top"><span>Style library</span><Layers3 aria-hidden="true" /></div>
            <h3>{textStyles.length} Unicode styles</h3>
            <p>Small caps, superscript, bold, cursive, bubble, underline, upside down, and more.</p>
            <div className="feature-specimen">Aa&nbsp; ᴀᴀ&nbsp; ᴬᵃ&nbsp; Ⓐⓐ</div>
          </article>
          <article className="feature-card">
            <div className="feature-card-top"><span>Find styles</span><Filter aria-hidden="true" /></div>
            <h3>Search and filter</h3>
            <p>Cut through the library by name or switch between tiny, classic, decorated, and playful groups.</p>
            <div className="feature-tags"><span>All</span><span>Tiny</span><span>Classic</span><span>Saved</span></div>
          </article>
          <article className="feature-card">
            <div className="feature-card-top"><span>Saved styles</span><Heart aria-hidden="true" /></div>
            <h3>Persistent favorites</h3>
            <p>Mark the styles you use most. Your saved set stays available in this browser for the next session.</p>
            <div className="feature-status"><span className="status-dot" /> Local preference saved</div>
          </article>
          <article className="feature-card">
            <div className="feature-card-top"><span>Quick copy</span><Copy aria-hidden="true" /></div>
            <h3>One-click copy</h3>
            <p>Every result is a copy target with immediate confirmation, ready to paste into your next app.</p>
            <div className="feature-copy"><span>ᴍᴀᴋᴇ ɪᴛ ᴄᴏᴜɴᴛ.</span><b><Check size={14} aria-hidden="true" /> Copied</b></div>
          </article>
          <article className="feature-card feature-ai">
            <div className="feature-card-top"><span>Optional AI</span><WandSparkles aria-hidden="true" /></div>
            <h3>Caption starter</h3>
            <p>Use the Hugging Face powered prompt when you need a concise starting line before applying a style.</p>
            <div className="feature-ai-label"><Sparkles size={15} aria-hidden="true" /> Server-side token protection</div>
          </article>
        </div>

        <div className="feature-trust" aria-label="Operational guarantees">
          <span><ShieldCheck aria-hidden="true" /> Local conversion</span>
          <span><Globe2 aria-hidden="true" /> Cross-platform Unicode</span>
          <span><Gauge aria-hidden="true" /> No queues or daily limits</span>
          <span><LockKeyhole aria-hidden="true" /> No account required</span>
        </div>
      </section>

      <section className="tool-directory" aria-labelledby="tools-title">
        <div className="section-intro">
          <span className="section-index">Tool directory</span>
          <div><h2 id="tools-title">More text generators</h2><p>Open a focused workspace when you already know the style you need.</p></div>
        </div>
        <div className="tool-link-grid">
          {focusedTools.map(([name, preview, slug]) => (
            <Link href={`/tools/${slug}`} key={slug}>
              <span>{name}</span><strong>{preview}</strong><ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="how-it-works" aria-labelledby="how-title">
        <div className="section-intro">
          <span className="section-index">How it works</span>
          <div><h2 id="how-title">Three steps. No learning curve.</h2><p>The entire workflow stays on one page from input to clipboard.</p></div>
        </div>
        <div className="steps-grid">
          <article>
            <span className="step-number">01</span>
            <div className="step-icon"><MousePointerClick size={24} aria-hidden="true" /></div>
            <h3>Enter text</h3>
            <p>Type, paste, or load a sample into the workspace.</p>
          </article>
          <article>
            <span className="step-number">02</span>
            <div className="step-icon"><Sparkles size={24} aria-hidden="true" /></div>
            <h3>Compare styles</h3>
            <p>Filter, search, and save the most useful outputs.</p>
          </article>
          <article>
            <span className="step-number">03</span>
            <div className="step-icon"><Copy size={24} aria-hidden="true" /></div>
            <h3>Copy and paste</h3>
            <p>Copy one result and paste it into the app you use.</p>
          </article>
        </div>
      </section>

      <ArticleSections sections={homeSections} />

      <section className="faq-section" aria-labelledby="faq-title">
        <div className="section-intro">
          <span className="section-index">Help center</span>
          <div><h2 id="faq-title">Frequently asked questions</h2><p>Quick answers about Unicode support, privacy, and compatibility.</p></div>
        </div>
        <div className="faq-list">
          {faq.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<span className="faq-plus">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="related-tools">
        <span className="section-index">Read more</span>
        <h2>Guides for small text.</h2>
        <div>
          {relatedGuides.map(([title, slug]) => (
            <Link href={`/guides/${slug}`} key={slug}>
              <span>Guide</span><strong>{title}</strong><ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <div><span className="closing-glyph" aria-hidden="true">Aa → ᴀᵃ</span><h2>Convert another piece of text</h2><p>The generator is free, instant, and ready whenever you are.</p></div>
        <a className="primary-cta inverse" href="#generator">Back to the tool <ArrowRight size={18} aria-hidden="true" /></a>
      </section>
    </>
  );
}
