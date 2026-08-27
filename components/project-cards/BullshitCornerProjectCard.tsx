import { GithubLogoIcon, GlobeIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import bullshitCornerMark from "../../public/project-logos/bullshit-corner.svg";
import clerk from "../../public/technology-logos/clerk.svg";
import convex from "../../public/technology-logos/convex.svg";
import shadcnDark from "../../public/technology-logos/shadcn-dark.svg";
import shadcnLight from "../../public/technology-logos/shadcn-light.svg";
import tailwindcss from "../../public/technology-logos/tailwindcss.svg";
import tanstackDark from "../../public/technology-logos/tanstack-dark.svg";
import tanstackLight from "../../public/technology-logos/tanstack-light.svg";

export default function BullshitCornerProjectCard() {
  return (
    <div id="bullshit-corner" className="project-card">
      <div className="card-content">
        <div className="project-heading">
          <Image
            src={bullshitCornerMark}
            alt=""
            width={32}
            height={32}
            className="project-mark"
          />
          <div className="flex flex-col gap-1">
            <div className="project-eyebrow">
              <span className="project-status-dot" aria-hidden="true" />
              live project
            </div>
            <h3 className="project-title">Bullshit Corner</h3>
          </div>
        </div>
        <p>
          Bullshit Corner turns a recurring{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.thehighperformancepodcast.com/high-performance-racing"
          >
            High Performance Racing
          </Link>{" "}
          segment into an interactive Formula 1 community leaderboard. Fans can
          rank hot takes, compare their picks with the crowd, and submit topics
          for future episodes.
        </p>
        <p>
          Behind the scenes, authenticated accounts and an admin review workflow
          keep submissions and official rankings organized.
        </p>
        <div className="project-tech-links">
          <div className="project-technologies">
            <Image
              src={tanstackLight}
              alt="TanStack Logo"
              title="TanStack Start"
              className="h-full w-auto dark:hidden"
            />
            <Image
              src={tanstackDark}
              alt="TanStack Logo"
              title="TanStack Start"
              className="hidden h-full w-auto dark:flex"
            />
            <Image src={convex} alt="Convex Logo" title="Convex" />
            <Image src={clerk} alt="Clerk Logo" title="Clerk" />
            <Image
              src={tailwindcss}
              alt="Tailwind CSS Logo"
              title="Tailwind CSS"
              className="h-full"
            />
            <Image
              src={shadcnLight}
              alt="shadcn/ui Logo"
              title="shadcn/ui"
              className="dark:hidden"
            />
            <Image
              src={shadcnDark}
              alt="shadcn/ui Logo"
              title="shadcn/ui"
              className="hidden dark:flex"
            />
          </div>
          <div className="project-links">
            <Link
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://bscorner.com"
              aria-label="Visit the Bullshit Corner website"
            >
              <GlobeIcon weight="bold" size={18} aria-hidden="true" />
              <span>Live site</span>
            </Link>
            <Link
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/walterfurrer/bullshit-corner"
              aria-label="View Bullshit Corner source code on GitHub"
            >
              <GithubLogoIcon weight="bold" size={18} aria-hidden="true" />
              <span>Source</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
