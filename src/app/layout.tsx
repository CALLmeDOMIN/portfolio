import { type Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";

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
    <html lang="en" className="scroll-smooth!">
      <body className="bg-background text-text overflow-x-hidden">
        <Nav />
        {children}
      </body>
    </html>
  );
}
