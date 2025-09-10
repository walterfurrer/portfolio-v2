import ModeToggle from "@/components/ModeToggle";
import CycHeader from "./CycHeader";
import waltersangels from "../../public/cyc-angel-investors.png";
import Image from "next/image";

export default function CommitYourCode2025() {
  return (
    <div className="flex flex-col gap-32 px-4 font-sans md:px-0">
      <ModeToggle />
      <CycHeader />
      <section className="section">
        <div className="section-header">
          <h2>first things first</h2>
          {/* <p className="text-muted-foreground text-sm">
            If you see one of these people, please thank them for me
          </p> */}
        </div>
        <div className="section-content">
          <figure>
            <Image
              alt="Walter's CYC Angle Investors"
              src={waltersangels}
              className="rounded-4xl"
            />
            <figcaption className="text-muted-foreground text-center text-sm">
              From left to right: Shashi Lo, Abbey Perini, Bethany Ann, Ryan
              Furrer, Thomas Nguyen
            </figcaption>
          </figure>
        </div>
        <div>
          <p>
            I was <span className="italic">not</span> expecting to make it to
            CYC this year. It's been a very tough year since losing my job in
            November 2024. If not for the folks pictured above, I would not be
            attending this wonderful conference.
          </p>
          <p></p>
        </div>
      </section>
    </div>
  );
}
