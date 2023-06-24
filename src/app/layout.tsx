import Nav from "@/components/nav";
import { type Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dominik Sieroń",
    description: "Portfolio. Dominik Sieroń",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="overflow-x-hidden">
                <Nav />
                {children}
            </body>
        </html>
    );
}
