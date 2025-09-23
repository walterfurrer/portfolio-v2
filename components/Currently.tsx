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
          <div>
            <BriefcaseIcon weight="regular" size={24} className="h-full" />
          </div>
          <p>
            Searching for Front-End Developer, Support Engineer, or Customer
            Support roles.
          </p>
        </div>
        <div className="flex gap-2">
          <div>
            <CodeIcon weight="regular" size={24} className="h-full" />
          </div>
          <p>
            Developing new skills while building{" "}
            <Link
              target="_blank"
              href={"https://github.com/walterfurrer/fellowship-finder"}
            >
              Fellowship Finder
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2">
          <div>
            <AirplaneIcon weight="regular" size={24} className="h-full" />
          </div>
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

{
  /* <div className="flex gap-2">
          <BriefcaseIcon
            weight="regular"
            className="size-10 h-full md:size-6"
          />
          <div>
            <p>
              Searching for Front-End Developer, Support Engineer, or Customer
              Support roles.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <CodeIcon weight="regular" className="size-6" />
          <p>
            Learning new skills while building{" "}
            <Link
              target="_blank"
              href={"https://github.com/walterfurrer/fellowship-finder"}
            >
              Fellowship Finder
            </Link>
            .
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
        </div> */
}
