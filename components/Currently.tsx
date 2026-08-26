import Link from "next/link";
import {
  AirplaneTakeoffIcon,
  BriefcaseIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function Currently() {
  return (
    <section id="currently" className="section">
      <div className="section-heading">
        <h2 className="section-header">currently</h2>
        <time className="section-updated" dateTime="2026-08">
          updated August 2026
        </time>
      </div>
      <div className="section-content">
        <article className="flex items-start gap-2">
          <BriefcaseIcon
            weight="regular"
            size={24}
            className="mt-1 shrink-0"
            aria-hidden="true"
          />
          <p className="w-full">
            Employed as a Software Developer at{" "}
            <Link
              href="https://lightsoveratlanta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lights Over Atlanta
            </Link>
            .
          </p>
        </article>
        <article className="flex items-start gap-2">
          <AirplaneTakeoffIcon
            weight="regular"
            size={24}
            className="mt-1 shrink-0"
            aria-hidden="true"
          />
          <p className="w-full">
            Attending{" "}
            <Link
              href="https://www.commityourcode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Commit Your Code Conference
            </Link>{" "}
            for the second time!
          </p>
        </article>
      </div>
    </section>
  );
}
