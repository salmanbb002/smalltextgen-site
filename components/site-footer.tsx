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
          <p className="footer-label">Tiny tools</p>
          <Link href="/tools/small-caps">Small caps</Link>
          <Link href="/tools/invisible">Invisible text</Link>
          <Link href="/tools/subscript">Subscript</Link>
          <Link href="/tools/cursive">Cursive</Link>
          <Link href="/tools/upside-down">Upside down</Link>
        </div>
        <div>
          <p className="footer-label">Guides</p>
          <Link href="/guides">All guides</Link>
          <Link href="/guides/unicode-explained">Unicode explained</Link>
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
