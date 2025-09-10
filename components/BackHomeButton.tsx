import { Button } from "./ui/button";
import Link from "next/link";

export default function BackHomeButton() {
  return (
    <Button
      asChild
      variant="default"
      className="flex self-end rounded-lg drop-shadow-sm/50 transition duration-150 active:translate-y-0.5 active:scale-97 active:drop-shadow-none"
    >
      <Link href="/">Back to Home</Link>
    </Button>
  );
}
