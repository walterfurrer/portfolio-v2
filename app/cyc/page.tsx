import ModeToggle from "@/components/ModeToggle";
import CycHeader from "./CycHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CYC 2025",
};

export default function Cyc() {
  return (
    <div className="flex flex-col gap-32 px-4 font-sans md:px-0">
      <ModeToggle />
      <CycHeader />
    </div>
  );
}
