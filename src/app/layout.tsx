import Nav from "@/components/Nav";
import { type Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio Dominik Sieroń",
    description: "Portfolio Dominik Sieroń - Web Developer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className="overflow-x-hidden bg-background text-text">
                <Nav />
                {children}
            </body>
        </html>
    );
}
