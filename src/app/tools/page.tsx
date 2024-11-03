"use client";

import React, { useEffect } from "react";
import { useThemeStore } from "@/stores/useThemeStore"; 
import { usePageStore } from "@/stores/usePageStore";
import Profile from "@/components/ProfileCart";
import PremiumTools from "@/components/PremiumTools";
import Form  from "@/components/Form";

const ToolsPage: React.FC = () => {
    const { darkMode } = useThemeStore();
    const { setIsDetailPage } = usePageStore();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    setIsDetailPage(true);
    return () => setIsDetailPage(false);
  }, [setIsDetailPage]);

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center ">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center mt-0 ">
          <div className=" hidden md:flex">
            <Profile />
          </div>
          <div className="flex-1 w-full text-center md:text-left mt-10 md:mt-5">
            <PremiumTools />
            <Form />
            <div className=" flex justify-center items-center md:hidden">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
