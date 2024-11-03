'use client';

import '@/app/globals.css';
import { ReactNode } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import GradientOverlay from '@/components/GradientOverlay';

const RootLayout = ({ children }: { children: ReactNode }) => {
  const { darkMode } = useThemeStore(); 

  return (
    <html lang="fa" className={darkMode ? 'dark' : 'light'}>
      <body>
        <Navbar /> 
        <GradientOverlay  /> 
        <main className="min-h-screen">{children}</main> 
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
