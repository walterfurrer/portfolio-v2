import Link from "next/link";
import {
  AirplaneIcon,
  BriefcaseIcon,
  CodeIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function Currently() {
  return (
    <section id="currently" className="section">
      <h2 className="section-header">currently</h2>
      <div className="section-content">
        <div className="flex gap-2">
          <BriefcaseIcon weight="regular" className="size-6" />
          <div className="inline-flex">
            <p>Searching for Web Devloper opportunities.</p>
            <span className="relative flex size-3">
              <span className="bg-accent-teal absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-accent-teal relative inline-flex size-3 rounded-full"></span>
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <CodeIcon weight="regular" className="size-6" />
          <p>
            Learning new skills while building{" "}
            <Link href={"https://ev-mngr.vercel.app/"}>EV MNGR</Link>.
          </p>
        </div>
        <div className="flex gap-2">
          <AirplaneIcon weight="regular" className="size-6" />
          <p>
            Attending the{" "}
            <Link target="_blank" href="https://www.commityourcode.com/">
              Commit Your Code Conference
            </Link>{" "}
            9/25 - 9/26.
          </p>
        </div>
      </div>
    </section>
  );
}
