import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Italiana, Jost } from "next/font/google";

import { site } from "@/content/site";
import "./globals.css";

const italiana = Italiana({
  variable: "--ff-italiana",
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--ff-cormorant",
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--ff-jost",
  subsets: ["latin"],
});

// Icons and the share image come from file conventions in app/ (favicon.ico, icon.png, apple-icon.png, opengraph-image.jpg)
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en",
    url: "/",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1d120c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${italiana.variable} ${cormorant.variable} ${jost.variable} antialiased`}
    >
      <body className="bg-espresso font-sans font-light text-cream">{children}</body>
    </html>
  );
}
