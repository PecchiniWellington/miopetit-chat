import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./context/Theme";
import Navbar from "@/components/navigation/navbar";

const inter = localFont({
  src: "/fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "/fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Miopetit Social",
  description:
    "MioPetit Social is an engaging online platform designed to connect pet lovers with their furry companions in a fun and interactive way. It’s more than just a social network—it’s a community where pet owners can share their experiences, exchange advice, and create meaningful connections based on their love for animals.",
  icons: {
    icon: "/image/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
