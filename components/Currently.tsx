import { BriefcaseBusiness, Code, Plane } from "lucide-react";
import Link from "next/link";

export default function Currently() {
  return (
    <section id="currently" className="section">
      <h2 className="section-header">currently</h2>
      <div className="section-content">
        <div className="flex gap-2">
          <BriefcaseBusiness />
          <p>Actively searching for Web Devloper roles. Locally or remote!</p>
        </div>
        <div className="flex gap-2">
          <Code className="text-muted-foreground" />
          <p>
            Learning new skills while building{" "}
            <Link target="_blank" href="#">
              EV MNGR
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2">
          <Plane className="text-muted-foreground" />
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
