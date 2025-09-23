import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function CycPageButton() {
  return (
    <Button
      asChild
      size="sm"
      className="group flex self-end-safe bg-blue-500 text-neutral-50 drop-shadow-md hover:-translate-y-0.5 hover:scale-102 hover:bg-blue-400 hover:text-neutral-950 hover:drop-shadow-lg active:translate-y-0.5 active:scale-98 active:drop-shadow-sm"
    >
      <Link href="/commit-your-code">
        Did we meet at CYC '25?
        <ArrowRightIcon className="inline-block transition-transform duration-150 group-hover:translate-x-1.5" />
      </Link>
    </Button>
  );
}
