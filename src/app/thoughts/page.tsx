"use client";
import React, { useEffect } from "react";
import { useThemeStore } from "@/stores/useThemeStore";
import Profile from "@/components/ProfileCart";
import Thoughts from "@/components/InspirationThoughts";
import Form from "@/components/Form";

const ThoughtsPage: React.FC = () => {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center ">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center mt-0 ">
          <div className="justify-center hidden md:flex">
            <Profile />
          </div>
          <div className="flex-1 w-full text-center md:text-left mt-10 md:mt-5">
            <Thoughts />
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

export default ThoughtsPage;
