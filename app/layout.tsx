import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Fernandes | Portfolio",
  description:
    "Web Developer Portfolio showcasing projects, skills, and experience.",
  keywords:
    "web developer, portfolio, Alex Fernandes, React, JavaScript, Next.js, HTML, CSS, web development",
  author: "Alex Fernandes",
  openGraph: {
    title: "Alex Fernandes | Portfolio",
    description:
      "Explore the portfolio of Alex Fernandes, a skilled web developer with expertise in React, JavaScript, and more.",
    url: "https://aafernands.github.io", // Your portfolio URL
    siteName: "Alex Fernandes Portfolio",
    images: [
      {
        url: "/images/portfolio-thumbnail.png", // Path to your portfolio thumbnail image
        width: 1200,
        height: 630,
        alt: "Alex Fernandes Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Fernandes | Portfolio",
    description:
      "Explore the portfolio of Alex Fernandes, a skilled web developer with expertise in React, JavaScript, and more.",
    image: "/images/portfolio-thumbnail.png", // Path to your portfolio thumbnail image
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
