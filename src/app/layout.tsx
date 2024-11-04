"use client";

import "@/app/globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientOverlay from "@/components/GradientOverlay";
import { ThemeProvider } from "next-themes";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <GradientOverlay />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
