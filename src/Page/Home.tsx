import React, { useEffect } from "react";
import Profile from "../components/ProfileCart";
import { useTheme } from "../components/ThemeContext"; // Importing ThemeContext for managing dark/light mode
import About from "../components/About";
import ProjectList from "../components/RecentProjects";
import ExperoenceList  from "../components/ExperoenceList";
import PremiumTools from "../components/PremiumTools";
import Thoughts from "../components/DesignThoughts";
import Form from "../components/Form";

const HomePage: React.FC = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Apply dark mode class to body
    document.body.classList.toggle("light-mode", !darkMode); // Apply light mode class to body
  }, [darkMode]);

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center ">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center mt-20 ">
          <Profile />
          <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
            <About />
            <ProjectList />
            <ExperoenceList />
            <PremiumTools />
            <Thoughts />
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
