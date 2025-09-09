"use client";

import GradualBlur from "@/components/GradualBlur";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 font-sans">
      <header className="flex flex-col gap-8 text-2xl">
        <Image
          src="/pfp-cropped.webp"
          alt="Walter Furrer headshot"
          width={96}
          height={96}
          className="rounded-full"
        ></Image>
        <div>
          <h1 className="font-sans font-medium">Hi, I'm Walter.</h1>
          <p className="text-muted-foreground">
            Helping to bridge the gap between people and technology.
          </p>
        </div>
      </header>
      <section id="currently" className="section">
        <h2 className="section-header">currently</h2>
        <ul className="flex flex-col gap-2">
          <li>Looking for a Web Developer role either locally or remote.</li>
          <li>
            Learning new skills while building{" "}
            <Link href="https://github.com/walterfurrer/ev-mngr">EV MNGR</Link>.
          </li>
        </ul>
      </section>
      <section id="projects" className="section">
        <h2 className="section-header">projects</h2>
        <div id="projects-grid" className="flex flex-col">
          <div
            id="haven-health"
            className="hover:bg-muted hover:border-accent-teal flex flex-col gap-2 rounded-3xl p-4 transition duration-300 ease-in-out hover:scale-110 hover:border-2 hover:shadow-2xl hover:transition hover:duration-300 hover:ease-in-out"
          >
            <h3 className="text-lg">Haven Health</h3>
            <p>
              Built as part of the{" "}
              <Link href="https://www.dallassoftwaredevelopers.org/cohorts">
                Dallas Software Developer Cohort Program
              </Link>{" "}
              ran by{" "}
              <Link
                href="Dallas Software
              Developer"
              >
                Danny Thompson
              </Link>
              .
            </p>
            <p>
              A full-stack demo application for a fictional community health
              clinic built, built with Next.js, Supabase, Tailwind CSS, and
              shadcn/ui.
            </p>
            <div className="flex justify-between">
              <div id="technologies" className="flex gap-4">
                <Image
                  src="/nextjs-light-mark.png"
                  width={24}
                  height={24}
                  alt="Tailwind CSS Logo"
                ></Image>
                <Image
                  src="/supabase-mark.svg"
                  width={24}
                  height={24}
                  alt="Tailwind CSS Logo"
                ></Image>
                <Image
                  src="/tailwindcss-mark.svg"
                  width={24}
                  height={24}
                  alt="Tailwind CSS Logo"
                ></Image>
                <Image
                  src="/shadcn-mark.svg"
                  width={24}
                  height={24}
                  alt="Tailwind CSS Logo"
                ></Image>
              </div>
              <div className="text-muted-foreground/60 flex gap-4">
                <Link href="https://github.com/walterfurrer/portfolio-v2">
                  <SiGithub size={24} />
                </Link>
                <Link href="https://github.com/walterfurrer/portfolio-v2">
                  <Globe size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="background" className="section">
        <h2 className="section-header">background</h2>
        <p>
          With nearly two decades of experience in B2B account management and
          customer support, I bring a rare, user-centric perspective to software
          development. I don't just build applications; I build solutions
          informed by a deep understanding of what end-users truly need.
        </p>
      </section>
      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={1}
        divCount={10}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </div>
  );
}
