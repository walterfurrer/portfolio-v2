import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import CopyEmailButton from "./CopyEmailButton";

const EMAIL_ADDRESS = "walterfurrer.dev@gmail.com";

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <h2 className="section-header">contact</h2>
      <div className="section-content">
        <div className="flex items-start gap-2">
          <EnvelopeSimpleIcon
            weight="regular"
            size={24}
            className="mt-1 shrink-0"
            aria-hidden="true"
          />
          <CopyEmailButton email={EMAIL_ADDRESS} />
        </div>
        <div className="flex items-start gap-2">
          <GithubLogoIcon
            weight="regular"
            size={24}
            className="mt-1 shrink-0"
            aria-hidden="true"
          />
          <Link
            className="hover:text-accent font-semibold"
            href="https://github.com/walterfurrer"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/walterfurrer
          </Link>
        </div>
        <div className="flex items-start gap-2">
          <LinkedinLogoIcon
            weight="regular"
            size={24}
            className="mt-1 shrink-0"
            aria-hidden="true"
          />
          <Link
            className="hover:text-accent font-semibold"
            href="https://www.linkedin.com/in/walterfurrer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/walterfurrer
          </Link>
        </div>
        <div className="flex items-start gap-2">
          <XLogoIcon
            weight="regular"
            size={24}
            className="mt-1 shrink-0"
            aria-hidden="true"
          />
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
