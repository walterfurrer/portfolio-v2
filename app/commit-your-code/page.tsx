import ModeToggle from "@/components/ModeToggle";
import CycHeader from "./CycHeader";
import waltersangels from "../../public/cyc-angel-investors.png";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import BackToPortfolioButton from "@/components/BackToMyPortfolioButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CYC 2025",
  description:
    "A page for those I met at Commit Your Code 2025, as well as a thank you to those who helped me attend it.",
};

export default function CommitYourCode() {
  return (
    <div className="flex flex-col gap-16 px-4 font-sans transition-all duration-150 ease-in-out md:gap-24 md:px-0 lg:gap-32">
      <ModeToggle />
      <CycHeader />

      <section className="section">
        <BackToPortfolioButton />
        <div className="section-header">
          <h2>a huge shoutout</h2>
        </div>
        <div className="section-content">
          <figure>
            <Image
              alt="Walter's CYC Angle Investors"
              src={waltersangels}
              className="border-border dark:border-foreground rounded-4xl border-2"
            />
            <figcaption className="text-muted-foreground mt-2 text-center text-sm">
              From left to right: Shashi Lo, Abbey Perini, Bethany Ann, Ryan
              Furrer, Thomas Nguyen
            </figcaption>
          </figure>
          <div className="mt-4 flex flex-col gap-4">
            <p>
              I need to give a huge <span className="font-bold">THANK YOU</span>{" "}
              to the lovely folks pictured above. Since losing my job in
              November 2024, I was not in a position to be attending this
              conference. However, these five individuals pitched in to make
              sure that I will be there.
            </p>
            <p>
              I don't know how I'll ever be able to thank them enough for their
              generosity. All I know is that I will be paying their kindness
              forward as soon as I am able.
            </p>
            <p>
              If you happen to run into one of them, be sure to thank them for
              me! I would not be attending CYC without them.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-header">
          <h2>let's connect</h2>
        </div>
        <div className="section-content">
          <p>
            You can find my socials and contact information below! I'm always
            down for a video call to talk tech, jobs, etc. as well. If you're
            interested in scheduling a time to catch up,{" "}
            <Link
              target="_blank"
              href="https://cal.com/walterfurrer/post-cyc-chat"
            >
              book a call
            </Link>
            !
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
