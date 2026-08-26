import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="section">
      <h2 className="section-header">contact</h2>
      <div className="section-content">
        <div className="flex gap-2">
          <EnvelopeSimpleIcon weight="regular" size={24} className="h-full" />
          <a
            className="font-semibold select-all"
            href="mailto:walterfurrer.dev@gmail.com"
          >
            walterfurrer.dev@gmail.com
          </a>
        </div>
        <div className="flex gap-2">
          <GithubLogoIcon weight="regular" size={24} className="h-full" />
          <Link
            className="hover:text-accent font-semibold"
            href="https://github.com/walterfurrer"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/walterfurrer
          </Link>
        </div>
        <div className="flex gap-2">
          <LinkedinLogoIcon weight="regular" size={24} className="h-full" />
          <Link
            className="hover:text-accent font-semibold"
            href="https://www.linkedin.com/in/walterfurrer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/walterfurrer
          </Link>
        </div>
        <div className="flex gap-2">
          <XLogoIcon weight="regular" size={24} className="h-full" />
          <Link
            className="hover:text-accent font-semibold"
            href="https://x.com/waltercodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            x.com/waltercodes
          </Link>
        </div>
      </div>
    </section>
  );
}
