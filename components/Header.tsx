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
          className="rounded-full"
        ></Image>
        <div>
          <h1 className="font-sans font-medium">Hi, I'm Walter.</h1>
          <p className="text-muted-foreground">
            A front-end developer helping to bridge the gap between people and
            technology.
          </p>
        </div>
      </div>
    </header>
  );
}
