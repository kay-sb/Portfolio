import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode

const ExperoenceList: React.FC = () => {
  const { darkMode } = useTheme(); // Access dark mode state from ThemeContext

  // Effect to apply dark/light mode class to the body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Apply dark mode class
    document.body.classList.toggle("light-mode", !darkMode); // Apply light mode class
  }, [darkMode]);

  // Array of experience data containing title, description, and link
  const Experoence = [
    {
      title: "Experoence 1",
      description: "Minimal Store",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      title: "Experoence 2",
      description: "Stylish Blog",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      title: "Experoence 3",
      description: "Creative Portfolio",
      link: "",
    },
    // Add more experiences as needed
  ];

  return (
    <div className="mt-20 text-center md:text-left">
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2 ${
          darkMode ? "text-text-title-light" : "text-text-title-dark"
        }`}
      >
        YEARS OF
      </h1>
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4 ${
          darkMode ? "text-text-title2-light" : "text-text-title2-dark"
        }`}
      >
        EXPEROENCE
      </h1>
      <div>
        <ul className="flex flex-col items-center md:items-start md:px-0 ">
          {Experoence.map((experience, index) => (
            <li
              key={index}
              className={`relative flex items-center rounded-xl w-full max-w-[80%] h-[150px] my-4 p-4 transition duration-300 ease-in-out cursor-pointer ${
                darkMode
                  ? "bg-light-mode hover:bg-active-dark"
                  : "bg-dark-mode hover:bg-active-dark"
              }`}
              onClick={() => window.open(experience.link, "_blank")} // Open link in a new tab
            >
              <div className="flex-1">
                <h3
                  className={`font-semibold ${
                    darkMode ? "text-text-title-dark" : "text-text-title-light"
                  }`}
                >
                  {experience.title}
                </h3>
                <p
                  className={
                    darkMode ? "text-light-mode-text" : "text-dark-mode-text"
                  } // Using Tailwind classes for text color
                >
                  {experience.description}
                </p>
              </div>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    className={`${
                      darkMode ? "text-dark-mode" : "text-light-mode"
                    }`}
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperoenceList;
