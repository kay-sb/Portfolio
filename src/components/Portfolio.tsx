import React, { useEffect } from "react";
import Profile from "./ProfileCart";
import Navbar from "./Navbar";
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode
import About from "./About";
import ProjectList from "./ProjectList";

// Portfolio component
const Portfolio: React.FC = () => {
  const { darkMode } = useTheme(); // Access dark mode state and toggle function from ThemeContext

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Apply dark mode class to body
    document.body.classList.toggle("light-mode", !darkMode); // Apply light mode class to body
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center ">
      <Navbar />
      {/* Navbar component, no need to pass darkMode or toggleDarkMode props */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center mt-20 ">
        <Profile/>
        <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
          <About />
          <ProjectList/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; // Exporting Portfolio component
