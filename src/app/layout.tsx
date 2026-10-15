import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Aura & Essence - Belleza y Consultoría de Lujo",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
        >
            <body className="min-h-dvh font-sans flex flex-col">{children}</body>
        </html>
    );
}
