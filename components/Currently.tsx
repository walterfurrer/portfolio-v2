import { BriefcaseBusiness, Code } from "lucide-react";
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
      </div>
    </section>
  );
}
