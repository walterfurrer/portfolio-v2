import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
  WebcamIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="section">
      <h2 className="section-header">contact</h2>
      <div className="section-content">
        <div className="flex gap-2">
          <EnvelopeSimpleIcon weight="bold" className="size-6" />
          <p>walterfurrer.dev@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <GithubLogoIcon weight="bold" className="size-6" />
          <Link
            className="hover:text-accent-teal font-normal"
            href="https://github.com/walterfurrer"
            target="_blank"
          >
            github.com/walterfurrer
          </Link>
        </div>
        <div className="flex gap-2">
          <LinkedinLogoIcon weight="bold" className="size-6" />
          <Link
            className="hover:text-accent-teal font-normal"
            href="https://www.linkedin.com/in/walterfurrer/"
            target="_blank"
          >
            linkedin.com/in/walterfurrer
          </Link>
        </div>
        <div className="flex gap-2">
          <XLogoIcon weight="bold" className="size-6" />
          <Link
            className="hover:text-accent-teal font-normal"
            href="https://x.com/waltercodes"
            target="_blank"
          >
            x.com/waltercodes
          </Link>
        </div>
        <div className="flex gap-2">
          <WebcamIcon weight="bold" className="size-6" />
          <Link
            className="hover:text-accent-teal font-normal"
            href="https://cal.com/walterfurrer"
            target="_blank"
          >
            cal.com/walterfurrer
          </Link>
        </div>
      </div>
    </section>
  );
}
