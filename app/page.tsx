"use client";

import Background from "@/components/Background";
import Currently from "@/components/Currently";
import GradualBlur from "@/components/GradualBlur";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 px-4 font-sans md:px-0">
      <Header />
      <Currently />
      <Projects />
      <Background />
      <GradualBlur preset="bottom" target="page" />
    </div>
  );
}
