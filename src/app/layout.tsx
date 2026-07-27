import type { Metadata } from "next";
import { bebasNeue, outfit, jetbrainsMono } from "./fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { organizationJsonLd } from "@/lib/seo/jsonLd";
import "./globals.css";

const SITE_URL = "https://www.cueserve.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cueserve — AI-Native Digital Engineering",
    template: "%s | Cueserve",
  },
  description:
    "Cueserve helps companies build, automate, and scale with AI — GenAI, agentic AI, and AI-driven automation as core service pillars.",
  openGraph: {
    siteName: "Cueserve",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLd() }}
        />
      </body>
    </html>
  );
}
