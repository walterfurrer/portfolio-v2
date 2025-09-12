import Image from "next/image";
import BackHomeButton from "@/components/BackHomeButton";

export default function CycHeader() {
  return (
    <header className="flex flex-col gap-8 text-2xl">
      <div className="section-content">
        <BackHomeButton />
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
            It was great meeting you at Commit Your Code!
          </p>
        </div>
      </div>
    </header>
  );
}
