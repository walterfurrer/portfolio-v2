import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

export default function BackHomeButton() {
  return (
    <Button asChild variant="link" className="group flex self-end-safe">
      <Link href="/">
        <ArrowLeftIcon className="inline-block transition-transform duration-150 group-hover:-translate-x-1.5" />
        Back to my Portfolio
      </Link>
    </Button>
  );
}
