import { Outfit, Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Kumar Ratan | Full Stack & MERN Developer Portfolio",
  description: "Professional portfolio of Kumar Ratan, a Full Stack Developer specialized in building scalable React, Next.js, Node.js, Express, and MongoDB applications.",
  keywords: [
    "Kumar Ratan",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer Portfolio",
    "React Developer",
    "Node.js Developer Portfolio",
    "MongoDB Engineer",
    "Web Developer India"
  ],
  authors: [{ name: "Kumar Ratan" }],
  creator: "Kumar Ratan",
  openGraph: {
    title: "Kumar Ratan | Full Stack & MERN Developer Portfolio",
    description: "I build scalable full-stack web applications using React, Next.js, Node.js, Express, and MongoDB.",
    url: "https://kumar-ratan.vercel.app",
    siteName: "Kumar Ratan Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Kumar Ratan - Full Stack Web Applications"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Ratan | Full Stack & MERN Developer Portfolio",
    description: "I build scalable full-stack web applications using React, Next.js, Node.js, Express, and MongoDB.",
    images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&h=630&auto=format&fit=crop"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} ${inter.variable} font-sans min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-150 antialiased overflow-x-hidden`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
