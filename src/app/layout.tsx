"use client";

import "@/app/globals.css";
import { ReactNode } from "react";
import { useThemeStore } from "@/stores/useThemeStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientOverlay from "@/components/GradientOverlay";
import { Suspense } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const { darkMode } = useThemeStore();

  return (
    <html lang="fa" className={darkMode ? "dark" : "light"}>
      <body>
        <Suspense>
          <Navbar />
          <GradientOverlay />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
