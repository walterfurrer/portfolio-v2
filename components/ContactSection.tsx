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
          <Link target="_blank" href="mailto:walterfurrer.dev@gmail.com">
            <EnvelopeSimpleIcon weight="bold" className="size-6" />
          </Link>
          <p>walterfurrer.dev@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <Link target="_blank" href="https://github.com/walterfurrer">
            <GithubLogoIcon weight="bold" className="size-6" />
          </Link>
          <p>github.com/walterfurrer</p>
        </div>
        <div className="flex gap-2">
          <Link target="_blank" href="https://linkedin.com/walterfurrer">
            <LinkedinLogoIcon weight="bold" className="size-6" />
          </Link>
          <p>linkedin.com/walterfurrer</p>
        </div>
        <div className="flex gap-2">
          <Link target="_blank" href="https://x.com/waltercodes">
            <XLogoIcon weight="bold" className="size-6" />
          </Link>
          <p>x.com/waltercodes</p>
        </div>
        <div className="flex gap-2">
          <Link target="_blank" href="https://cal.com/walterfurrer">
            <WebcamIcon weight="bold" className="size-6" />
          </Link>
          <p>cal.com/walterfurrer</p>
        </div>
      </div>
    </section>
  );
}
