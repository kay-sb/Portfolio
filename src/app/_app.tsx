// pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import { useThemeStore } from '@/stores/useThemeStore'; 

function MyApp({ Component, pageProps }: AppProps) {
  const { darkMode } = useThemeStore(); 
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
