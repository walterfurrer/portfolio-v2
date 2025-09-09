import Link from "next/link";

export default function Currently() {
  return (
    <section id="currently" className="section">
      <h2 className="section-header">currently</h2>
      <div className="section-content">
        <div>
          <p>Looking for a Web Developer role. Locally or remote!</p>
        </div>
        <div>
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
