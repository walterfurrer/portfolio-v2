import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Lora, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: {
    template: "%s | Walter Furrer",
    default: "Walter Furrer",
  },
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
        className={`${sans.variable} ${serif.variable} ${mono.variable} selection-accent flex min-h-screen flex-col`}
      >
        <div className="flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto mb-32 flex max-w-[70ch] min-w-xs flex-col">
              <main>{children}</main>
            </div>
          </ThemeProvider>
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
