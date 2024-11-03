// pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import { useThemeStore } from "@/stores/useThemeStore";
import { Suspense } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { darkMode } = useThemeStore();
  return (
    <Suspense>
      <div className={darkMode ? "dark" : "light"}>
        <Component {...pageProps} />
      </div>
    </Suspense>
  );
}

export default MyApp;
