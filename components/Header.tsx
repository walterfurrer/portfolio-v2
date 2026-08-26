import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col gap-8 text-2xl">
      <div className="section-content">
        <Image
          src="/pfp-cropped.webp"
          alt="Walter Furrer headshot"
          width={96}
          height={96}
          className="object-cover"
        ></Image>
        <div>
          <h1 className="font-sans font-medium">Hey, I'm Walter.</h1>
          <p className="text-muted-foreground text-balance">
            I’m a software developer who likes figuring things out, learning as
            I go, and building useful things for the web.
          </p>
        </div>
        <nav className="page-index" aria-label="Page sections">
          <a href="#currently">currently</a>
          <span aria-hidden="true">·</span>
          <a href="#projects">projects</a>
          <span aria-hidden="true">·</span>
          <a href="#contact">contact</a>
        </nav>
      </div>
    </header>
  );
}
