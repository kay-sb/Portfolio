import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode

const ProjectList: React.FC = () => {
  const { darkMode } = useTheme(); // Access dark mode state from ThemeContext

  // Effect to apply dark/light mode class to the body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Apply dark mode class
    document.body.classList.toggle("light-mode", !darkMode); // Apply light mode class
  }, [darkMode]);

  // Array of project data containing image, title, description, and link
  const projects = [
    {
      image: "Project1-th.png",
      title: "Project 1",
      description: "Minimal Store",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      image: "Project1-th.png",
      title: "Project 2",
      description: "Stylish Blog",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      image: "Project1-th.png",
      title: "Project 3",
      description: "Creative Portfolio",
      link: "",
    },
    // Add more projects as needed
  ];

  return (
    <div className="mt-20 text-center md:text-left">
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2 ${
          darkMode ? "text-text-title-light" : "text-text-title-dark"
        }`}
      >
        RECENT
      </h1>
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4 ${
          darkMode ? "text-text-title2-light" : "text-text-title2-dark"
        }`}
      >
        PROJECTS
      </h1>
      <div>
        <ul>
          {projects.map((project, index) => (
            <li
              key={index}
              className={`flex items-center rounded-xl lg:w-[80%] w-80 h-24 my-4 p-4 transition duration-300 ease-in-out cursor-pointer ${
                darkMode ? "bg-light-mode" : "bg-dark-mode"
              }`} // Using Tailwind classes for background
              onMouseEnter={(e) => {
                e.currentTarget.classList.add(
                  darkMode ? "bg-active-dark" : "bg-active-dark"
                );
              }}
              onMouseLeave={(e) => {
                e.currentTarget.classList.remove("bg-active-dark"); // Reset background color on mouse leave
              }}
              onClick={() => window.open(project.link, "_blank")} // Open link in a new tab
            >
              <img
                src={project.image} // Image for the project
                alt="Thumbnail"
                className="w-16 h-16 rounded-md mr-4" // Styling for the image
              />
              <div className="flex-1">
                <h3
                  className={`font-semibold ${
                    darkMode ? "text-text-title-dark" : "text-text-title-light"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={
                    darkMode ? "text-light-mode-text" : "text-dark-mode-text"
                  } // Using Tailwind classes for text color
                >
                  {project.description}
                </p>
              </div>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 ${
                    darkMode ? "fill-active-dark" : "fill-active-dark"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" // Arrow path
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

export default ProjectList;
