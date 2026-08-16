import { type Metadata } from "next";
import { Anton, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import "./globals.css";

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

/**
 * Only fonts and globals live here. The rail and smooth scrolling belong to the
 * site page rather than the layout, so /cv can render as a bare document
 * without a pathname check to hide chrome that should not have been global.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-background text-text overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
