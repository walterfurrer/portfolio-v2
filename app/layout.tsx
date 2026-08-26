import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = "https://walterfurrer.dev";
const SITE_TITLE = "Walter Furrer | Software Developer";
const SITE_DESCRIPTION =
  "Walter Furrer is a software developer building thoughtful, useful web products.";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Walter Furrer",
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  applicationName: "Walter Furrer",
  authors: [{ name: "Walter Furrer", url: SITE_URL }],
  creator: "Walter Furrer",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Walter Furrer",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} selection-accent flex min-h-screen flex-col`}
      >
        <Script src="/a11y-script" strategy="afterInteractive" />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto mb-16 flex w-full max-w-[70ch] min-w-xs flex-col">
              <main id="main-content" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
