// import { Footer } from "@/components/footer";
// import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Lora, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Walter Furrer",
  description:
    "A portfolio site for Walter Furrer, featuring projects, experience, articles, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} flex min-h-screen flex-col`}
      >
        <div className="flex flex-1 flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="container mx-auto flex max-w-screen-sm flex-1 flex-col px-4">
              {/* <Navbar /> */}
              <main className="my-32 flex-1">{children}</main>
              {/* <Footer /> */}
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
