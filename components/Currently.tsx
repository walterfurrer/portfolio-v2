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
          <p>Searching for Web Devloper opportunities.</p>
        </div>
        <div className="flex gap-2">
          <CodeIcon weight="regular" className="size-6" />
          <p>
            Learning new skills while building{" "}
            <Link href={"https://github.com/walterfurrer/ev-mngr"}>
              EV MNGR
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2">
          <AirplaneIcon weight="regular" className="size-6" />
          <p>
            Attending the{" "}
            <Link target="_blank" href="#">
              Commit Your Code Conference
            </Link>{" "}
            9/25 - 9/26.
          </p>
        </div>
      </div>
    </section>
  );
}
