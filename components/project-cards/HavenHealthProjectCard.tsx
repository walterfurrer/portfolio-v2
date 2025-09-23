import {
  GithubLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import nextjsLight from "../../public/technology-logos/nextjs-light.svg";
import shadcnLight from "../../public/technology-logos/shadcn-light.svg";
import shadcnDark from "../../public/technology-logos/shadcn-dark.svg";
import supabase from "../../public/technology-logos/supabase.svg";
import tailwindcss from "../../public/technology-logos/tailwindcss.svg";
import nextjsDark from "../../public/technology-logos/nextjs-dark.svg";

export default function HavenHealthProjectCard() {
  return (
    <div id="haven-health" className="project-card">
      <div className="card-content">
        <h3 className="project-title">Haven Health</h3>
        <p>
          A full-stack demo application for a fictional community health clinic
          built, built with Next.js, Supabase, Tailwind CSS, and shadcn/ui.
        </p>
        <p>
          Built as part of the{" "}
          <Link
            target="_blank"
            href="https://www.dallassoftwaredevelopers.org/cohorts"
          >
            Dallas Software Developer Cohort Program
          </Link>{" "}
          ran by{" "}
          <Link target="_blank" href="https://www.dthompsondev.com/">
            Danny Thompson
          </Link>
          .
        </p>
        <div className="project-tech-links">
          <div className="project-technlologies">
            <Image
              src={nextjsLight}
              alt="Next.js Logo"
              className="dark:hidden"
            />
            <Image
              src={nextjsDark}
              alt="Next.js Logo"
              className="hidden dark:flex"
            />
            <Image src={supabase} alt="Supabase Logo" />
            <Image
              src={tailwindcss}
              alt="Tailwind CSS Logo"
              className="h-full"
            />
            <Image
              src={shadcnLight}
              alt="shadcn/ui Logo"
              className="dark:hidden"
            />
            <Image
              src={shadcnDark}
              alt="shadcn/ui Logo"
              className="hidden dark:flex"
            />
          </div>
          <div className="project-links">
            <Link
              target="_blank"
              href="https://github.com/walterfurrer/dsd-haven-health"
            >
              <GithubLogoIcon weight="bold" size={24} />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/live/jhywKK8-DGw?si=_s05aqCCRjMf9kSq&t=2546"
            >
              <YoutubeLogoIcon weight="bold" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
