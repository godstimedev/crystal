import type { Metadata } from "next";
import { Cormorant_Garamond, Italiana, Jost } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Crystal Kizor · Architect, designing at every scale",
  description:
    "Crystal Kizor is an architect, designer, entrepreneur, speaker, researcher and creator. Studio COKA, ELEvated, The Effective Architect, AKO Alliance and Alive and Free.",
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
