import Image from "next/image";

export default function CycHeader() {
  return (
    <header className="flex flex-col gap-8 text-2xl">
      <div className="section-content">
        <Image
          src="/pfp-cropped.webp"
          width={96}
          height={96}
          className="rounded-full"
          alt={"Photo of Walter Furrer"}
        ></Image>
        <div>
          <h1 className="font-sans font-medium">Hi, I'm Walter.</h1>
          <p className="text-muted-foreground">
            It was great getting to meet you at Commit Your Code 2025!
          </p>
        </div>
      </div>
    </header>
  );
}
