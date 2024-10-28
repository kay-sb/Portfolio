import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode

const ThoughtsList: React.FC = () => {
  const { darkMode } = useTheme(); // Access dark mode state from ThemeContext

  // Effect to apply dark/light mode class to the body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Apply dark mode class
    document.body.classList.toggle("light-mode", !darkMode); // Apply light mode class
  }, [darkMode]);

  // Array of thoughts data containing title, description, link, date, and read time
  const Thoughts = [
    {
      title: "Thoughts 1",
      description: "Minimal Store",
      link: "https://kianoush-sb.vercel.app",
      date: "Oct 27, 2024",
      readTime: "3 min read",
    },
    {
      title: "Thoughts 2",
      description: "Stylish Blog",
      link: "https://kianoush-sb.vercel.app",
      date: "Oct 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Thoughts 3",
      description: "Creative Portfolio",
      link: "",
      date: "Oct 10, 2024",
      readTime: "4 min read",
    },
    // Add more thoughts as needed
  ];

  return (
    <div className="mt-20 text-center md:text-left">
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2 ${
          darkMode ? "text-text-title-light" : "text-text-title-dark"
        }`}
      >
        DESIGN
      </h1>
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4 ${
          darkMode ? "text-text-title2-light" : "text-text-title2-dark"
        }`}
      >
        THOUGHTS
      </h1>
      <div>
        <ul className="flex flex-col items-center md:items-start md:px-0">
          {Thoughts.map((thought, index) => (
            <li
              key={index}
              className={`relative flex items-center rounded-xl w-full max-w-[80%] h-[150px] my-4 p-4 transition duration-300 ease-in-out cursor-pointer ${
                darkMode ? "bg-light-mode hover:bg-active-dark" : "bg-dark-mode hover:bg-active-dark"
              }`}
              onClick={() => thought.link && window.open(thought.link, "_blank")}
            >
              <div className="flex-1">
                <h3
                  className={`font-semibold ${
                    darkMode ? "text-text-title-dark" : "text-text-title-light"
                  }`}
                >
                  {thought.title}
                </h3>
                <p
                  className={
                    darkMode ? "text-light-mode-text" : "text-dark-mode-text"
                  }
                >
                  {thought.description}
                </p>

                {/* Date in bottom-left corner */}
                <span className={`absolute bottom-2 left-2 text-xs ${ darkMode ? "text-dark-mode" : "text-light-mode"}`}>
                  {thought.date}
                </span>

                {/* Read time in bottom-right corner */}
                <span className={`absolute bottom-2 right-2 text-xs ${ darkMode ? "text-dark-mode" : "text-light-mode"}`}>
                  {thought.readTime}
                </span>
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
                    className={`${darkMode ? "text-dark-mode" : "text-light-mode"}`}
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

export default ThoughtsList;
