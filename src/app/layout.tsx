import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import SocialFooter from "@/components/sections/SocialFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altaf Shaikh | SDE, Speaker, Educator",
  description:
    "Exploring AI Disruption & Modern Development. Software Developer, Public Speaker, and Educator. Code is Poetry, AI is the Rhythm.",
  keywords: [
    "Altaf Shaikh",
    "Software Developer",
    "Speaker",
    "Educator",
    "AI",
    "Next.js",
    "Full Stack Developer",
  ],
  authors: [{ name: "Altaf Shaikh" }],
  openGraph: {
    title: "Altaf Shaikh | SDE, Speaker, Educator",
    description:
      "Exploring AI Disruption & Modern Development. SDE by day, Mentor by choice.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="bg-dark text-white font-sans antialiased bg-grid-pattern min-h-screen">
        <Navbar />
        {children}
        <SocialFooter />
      </body>
    </html>
  );
}
