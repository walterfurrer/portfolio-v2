import { ModeToggle } from "./mode-toggle";
import { Link } from "./ui/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-4 pb-8">
      <div>
        <Link href="/">Walter Furrer</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="#">Projects</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export { Navbar };
