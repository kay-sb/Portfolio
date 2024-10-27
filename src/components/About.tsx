import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode

// Colors for dark and light modes
const colors = {
  textTitleLight: "rgba(255, 255, 255, 0.8)",
  textTitleDark: "rgba(0, 0, 0, 0.8)",
  textTitle2Light: "rgba(255, 255, 255, 0.1)",
  textTitle2Dark: "rgb(21, 19, 18, 0.3)",
  textLight: "rgb(234, 236, 237)",
  textDark: "rgb(21, 19, 18)",
};

const About: React.FC = () => {
  const { darkMode } = useTheme(); // Access dark mode state and toggle function from ThemeContext

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Apply dark mode class to body
    document.body.classList.toggle("light-mode", !darkMode); // Apply light mode class to body
  }, [darkMode]);

  return (
    <div className="">
      <h1
        className="font-bold text-[50px] md:text-[75px] xl:text-[110px] leading-none tracking-wide pb-2"
        style={{
          color: darkMode ? colors.textTitleLight : colors.textTitleDark,
        }}
      >
        FRONTEND
      </h1>
      <h1
        className="font-bold text-[45px] md:text-[65px] xl:text-[90px] leading-none tracking-wide pb-4"
        style={{
          color: darkMode ? colors.textTitle2Light : colors.textTitle2Dark,
        }}
      >
        DEVELOPER
      </h1>
      <p
        className="text-sm max-w-[300px] md:max-w-[450px] lg:max-w-[500px] mx-auto md:mx-0"
        style={{
          color: darkMode ? colors.textLight : colors.textDark,
        }}
      >
        As a frontend developer with a flair for graphic design, I bring ideas
        to life through clean, interactive user interfaces. My background in
        music production, photography, and videography enhances my attention to
        detail and creativity, allowing me to craft immersive digital
        experiences.
      </p>

      <div className="flex gap-10 lg:gap-20 mt-8 justify-center md:justify-start">
        <div className="text-left ">
          <h2
            className="font-bold text-4xl sm:text-3xl md:text-4xl lg:text-6xl "
            style={{
              color: darkMode ? colors.textTitleLight : colors.textTitleDark,
            }}
          >
            +1
          </h2>
          <h3 className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400">
            Years
          </h3>
          <h3 className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400">
            Experience
          </h3>
        </div>

        <div className="text-left">
          <h2
            className="font-bold text-4xl sm:text-3xl md:text-4xl lg:text-6xl"
            style={{
              color: darkMode ? colors.textTitleLight : colors.textTitleDark,
            }}
          >
            +1
          </h2>
          <h3 className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400">
            Projects
          </h3>
          <h3 className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400">
            Completed
          </h3>
        </div>

        <div className="text-left">
          <h2
            className="font-bold text-4xl sm:text-3xl md:text-4xl lg:text-6xl"
            style={{
              color: darkMode ? colors.textTitleLight : colors.textTitleDark,
            }}
          >
            +1
          </h2>
          <h3 className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400">
            Worldwide
          </h3>
          <h3 className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400">
            Clients
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
