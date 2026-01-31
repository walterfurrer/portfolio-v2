import Link from "next/link";
import {
  BookOpenTextIcon,
  BriefcaseIcon,
  LaptopIcon,
  LayoutIcon
} from "@phosphor-icons/react/dist/ssr";

export default function Currently() {
  return (
    <section id="currently" className="section">
      <h2 className="section-header">currently</h2>
      <div className="section-content">
        <article className="flex gap-2">
          <div>
            <BriefcaseIcon weight="regular" size={24} className="h-full" />
          </div>
          <p className="w-full">
            Employed as a Software Developer at <Link href="https://lightsoveratlanta.com/" target="_blank" rel="noopener noreferrer">Lights Over Atlanta</Link>.
          </p>
        </article>
        <article className="flex gap-2">
          <div>
            <BookOpenTextIcon weight="regular" size={24} className="h-full" />
          </div>
          <p className="w-full">
            Reading <Link href="https://nostarch.com/eloquent-javascript-4th-edition" target="_blank" rel="noopener noreferrer">Eloquent JavaScript</Link> to strengthen my fundamental JavaScript skills.
          </p>
        </article>
        <article className="flex gap-2">
          <div>
            <LaptopIcon weight="regular" size={24} className="h-full" />
          </div>
          <p className="w-full">
            Working through fireship.dev/ui.dev's <Link href="https://fireship.dev/c/react" target="_blank" rel="noopener noreferrer">react.gg</Link> course.
          </p>
        </article>
        <article className="flex gap-2">
          <div>
            <LayoutIcon weight="regular" size={24} className="h-full" />
          </div>
          <p className="w-full">
            Learning better frontend skills with <Link href="https://www.frontendmentor.io/home" target="_blank" rel="noopener noreferrer">Frontend Mentor</Link>.
          </p>
        </article>
      </div>
    </section>
  );
}
