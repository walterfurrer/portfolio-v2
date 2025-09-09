import { SiGithub } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import nextjsLight from "../../public/technology-logos/nextjs-light.svg";
import supabase from "../../public/technology-logos/supabase.svg";
import shadcn from "../../public/technology-logos/shadcn.svg";
import tailwindcss from "../../public/technology-logos/tailwindcss.svg";

export default function HavenHealthProjectCard() {
  return (
    <div id="haven-health" className="project-card">
      <div className="card-content">
        <h3 className="text-lg">Haven Health</h3>
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
          <Link target="_blank" href="#">
            Danny Thompson
          </Link>
          .
        </p>
        <div className="flex justify-between">
          <div id="technologies" className="technlologies">
            <Image src={nextjsLight} alt="Next.js Logo" />
            <Image src={supabase} alt="Supabase Logo" />
            <Image src={tailwindcss} alt="Tailwind CSS Logo" />
            <Image src={shadcn} alt="shadcn/ui Logo" />
          </div>
          <div className="text-muted-foreground/60 flex gap-4">
            <Link
              target="_blank"
              href="https://github.com/walterfurrer/portfolio-v2"
            >
              <SiGithub size={24} />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/walterfurrer/portfolio-v2"
            >
              <Globe size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
