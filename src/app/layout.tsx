import { type Metadata } from "next";
import { Anton, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import "./globals.css";
import Rail from "./components/Rail";
import SmoothScroll from "./components/SmoothScroll";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Dominik Sieroń",
  description:
    "Software engineer at AVSystem, working on the Good Lood app, point-of-sale and production systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      /* No scroll-smooth: Lenis drives scrolling, and CSS smooth behaviour
         fights it. globals.css restores native behaviour under reduced
         motion, where Lenis never starts. */
      className={`${anton.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-background text-text overflow-x-hidden font-sans">
        <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row">
          <Rail />
          {children}
        </div>
        <SmoothScroll />
      </body>
    </html>
  );
}
