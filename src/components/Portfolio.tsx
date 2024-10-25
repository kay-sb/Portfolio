import React, { useEffect } from "react";
import ProfileCard from "./ProfileCart";
import Navbar from "./Navbar";
import { useTheme } from './ThemeContext'; // Importing ThemeContext for managing dark/light mode

// Colors for dark and light modes
const colors = {
  textTitleLight: "rgb(255, 80, 80)", // social color in light mode
  textTitleDark: "rgb(255, 80, 80)", // social color in dark mode
  textTitle2Light: "rgba(255, 255, 255, 0.5)", // social color in light mode
  textTitle2Dark: "rgb(21, 19, 18)", // social color in dark mode
  textLight: "rgb(234, 236, 237)", // social color in light mode
  textDark: "rgb(21, 19, 18)", // social color in dark mode
};

// Portfolio component
const Portfolio: React.FC = () => {
  const { darkMode } = useTheme(); // Access dark mode state and toggle function from ThemeContext

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Apply dark mode class to body
    document.body.classList.toggle("light-mode", !darkMode); // Apply light mode class to body
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar /> {/* Navbar component, no need to pass darkMode or toggleDarkMode props */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10 p-5 mt-16">
        {/* ProfileCard section */}
        <div className="flex flex-col items-center dark:bg-gray-800 rounded-lg p-5 max-w-sm">
          <div className="md:invisible">
            <ProfileCard
              name="Kianoush Sabouri"
              description="I'm a frontend developer with graphic design skills. I also have experience in music production, photography, and videography."
              profileImage="Profile.jpg"
            />
          </div>
          <div className="invisible md:visible flex flex-col items-center dark:bg-gray-800 rounded-lg p-5 max-w-sm fixed">
            <ProfileCard
              name="Kianoush Sabouri"
              description="I'm a frontend developer with graphic design skills. I also have experience in music production, photography, and videography."
              profileImage="Profile.jpg"
            />
            <div className="flex gap-4 mt-4 text-2xl">
              <a href="#" className="text-gray-600 dark:text-gray-400">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main content section */}
        <div className="flex-1 text-center md:text-left">
          <h1
            className="font-bold text-[40px] sm:text-[50px] md:text-[65px] xl:text-[110px] leading-none tracking-wide"
            style={{
              color: darkMode ? colors.textTitleLight : colors.textTitleDark,
            }}
          >
            FRONTEND
          </h1>
          <h1
            className="font-bold text-[35px] sm:text-[45px] md:text-[55px] xl:text-[90px] leading-none tracking-wide mb-4"
            style={{
              color: darkMode ? colors.textTitle2Light : colors.textTitle2Dark,
            }}
          >
            DEVELOPER
          </h1>
          <p
            className="text-sm sm:text-lg max-w-[300px] md:max-w-[450px] lg:max-w-5xl md:text-2xl lg:text-3xl xl:text-4x mx-auto md:mx-0"
            style={{
              color: darkMode ? colors.textLight : colors.textDark,
            }}
          >
            As a frontend developer with a flair for graphic design, I bring
            ideas to life through clean, interactive user interfaces. My
            background in music production, photography, and videography
            enhances my attention to detail and creativity, allowing me to craft
            immersive digital experiences.
          </p>

          <div className="flex gap-1 md:gap-5 lg:gap-20 mt-8 justify-center md:justify-start">
            <div className="text-center">
              <h2
                className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
                style={{
                  color: darkMode
                    ? colors.textTitleLight
                    : colors.textTitleDark,
                }}
              >
                +12
              </h2>
              <p className="text-[10px] sm:text-[12px] md:text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <h2
                className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
                style={{
                  color: darkMode
                    ? colors.textTitleLight
                    : colors.textTitleDark,
                }}
              >
                +46
              </h2>
              <p className="text-[10px] sm:text-[12px] md:text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <h2
                className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
                style={{
                  color: darkMode
                    ? colors.textTitleLight
                    : colors.textTitleDark,
                }}
              >
                +20
              </h2>
              <p className="text-[10px] sm:text-[12px] md:text-sm text-gray-600 dark:text-gray-400">
                Worldwide Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; // Exporting Portfolio component
