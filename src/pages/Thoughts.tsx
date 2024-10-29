import React, { useEffect } from "react";
import Profile from "../components/ProfileCart";
import { useTheme } from "../components/ThemeContext"; // Importing ThemeContext for managing dark/light mode
import Thoughts from "../components/DesignThoughts";
import Form from "../components/Form";

const ThoughtsPage: React.FC = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Apply dark mode class to body
    document.body.classList.toggle("light-mode", !darkMode); // Apply light mode class to body
  }, [darkMode]);

  return (
    <div>
    <div className="min-h-screen flex flex-col items-center ">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center">
        <Profile />
        <div className="flex-1 w-full text-center md:text-left mt-10 md:mt-5">
          <Thoughts />
          <Form/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ThoughtsPage;