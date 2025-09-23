import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

export default function BackToMyPortfolioButton() {
  return (
    <Button
      asChild
      variant="link"
      size="defaultNoPadding"
      className="group w-fit"
    >
      <Link href="/">
        <ArrowLeftIcon className="inline-block" />
        Back to my Portfolio
      </Link>
    </Button>
  );
}
