import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Small text with big personality. Generated locally in your browser.</p>
        </div>
        <div>
          <p className="footer-label">Text tools</p>
          <Link href="/tools/fancy-text-generator">Fancy text generator</Link>
          <Link href="/tools/unicode-text-converter">Unicode text converter</Link>
          <Link href="/tools/tiny-text-generator">Tiny text generator</Link>
          <Link href="/tools/small-caps">Small caps</Link>
          <Link href="/tools/superscript">Superscript</Link>
          <Link href="/tools/subscript">Subscript</Link>
          <Link href="/tools/cursive">Cursive</Link>
          <Link href="/tools/bubble">Bubble text</Link>
          <Link href="/tools/bold">Bold text</Link>
          <Link href="/tools/underline">Underline</Link>
          <Link href="/tools/strikethrough">Strikethrough</Link>
          <Link href="/tools/italic">Italic</Link>
          <Link href="/tools/upside-down">Upside down</Link>
          <Link href="/tools/mirror">Mirror text</Link>
          <Link href="/tools/vaporwave-text-generator">Vaporwave text</Link>
          <Link href="/tools/typewriter-font-generator">Typewriter font</Link>
          <Link href="/tools/old-english-text-generator">Old English text</Link>
          <Link href="/tools/zalgo">Glitch text</Link>
          <Link href="/tools/invisible">Invisible text</Link>
        </div>
        <div>
          <p className="footer-label">Guides</p>
          <Link href="/guides">All guides</Link>
          <Link href="/guides/unicode-explained">Unicode explained</Link>
          <Link href="/guides/tiny-text-discord">Tiny text for Discord</Link>
          <Link href="/guides/small-text-instagram-bio">Small text for Instagram</Link>
          <Link href="/guides/copy-paste-fonts-guide">Copy-paste fonts guide</Link>
        </div>
        <div>
          <p className="footer-label">Info</p>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SmallTextGen</span>
        <span>Built for copy, paste, and play.</span>
      </div>
    </footer>
  );
}
