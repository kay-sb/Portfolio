import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode

// Define color constants for dark and light modes
const colors = {
  textTitleLight: "rgba(255, 255, 255, 0.8)", // Light mode title text color
  textTitleDark: "rgba(0, 0, 0, 0.8)", // Dark mode title text color
  textTitle2Light: "rgba(255, 255, 255, 0.1)", // Light mode subtitle text color
  textTitle2Dark: "rgb(21, 19, 18, 0.3)", // Dark mode subtitle text color
  bgLight: "rgb(234, 236, 237)", // Light mode background color
  bgDark: "rgb(21, 19, 18)", // Dark mode background color
  bgHoverLight: "rgb(255, 80, 80)", // Light mode hover background color
  bgHoverDark: "rgb(255, 80, 80)", // Dark mode hover background color
  Arrow: "rgb(255, 130, 130)", // Arrow color for the project link
};

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
      link: "#",
    },
    {
      image: "Project1-th.png",
      title: "Project 2",
      description: "Stylish Blog",
      link: "#",
    },
    {
      image: "Project1-th.png",
      title: "Project 3",
      description: "Creative Portfolio",
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <div className="mt-20 text-center md:text-left">
      <h1
        className="font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2"
        style={{
          color: darkMode ? colors.textTitleLight : colors.textTitleDark, // Title color based on mode
        }}
      >
        RECENT
      </h1>
      <h1
        className="font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4"
        style={{
          color: darkMode ? colors.textTitle2Light : colors.textTitle2Dark, // Subtitle color based on mode
        }}
      >
        PROJECTS
      </h1>
      <div>
        <ul>
          {projects.map((project, index) => (
            <li
              key={index}
              className="flex items-center rounded-xl lg:w-[80%] w-80 h-24 my-4 p-4 transition duration-300 ease-in-out"
              style={{
                backgroundColor: darkMode ? colors.bgLight : colors.bgDark, // Background color based on mode
              }}
              onMouseEnter={
                (e) =>
                  (e.currentTarget.style.backgroundColor = darkMode
                    ? colors.bgHoverLight
                    : colors.bgHoverDark) // Change background color on hover
              }
              onMouseLeave={
                (e) =>
                  (e.currentTarget.style.backgroundColor = darkMode
                    ? colors.bgLight
                    : colors.bgDark) // Reset background color on mouse leave
              }
            >
              <img
                src={project.image} // Image for the project
                alt="Thumbnail"
                className="w-16 h-16 rounded-md mr-4" // Styling for the image
              />
              <div className="flex-1">
                <h3
                  className=" font-semibold"
                  style={{
                    color: darkMode
                      ? colors.textTitleDark
                      : colors.textTitleLight,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: darkMode
                      ? colors.textTitleDark
                      : colors.textTitleLight, 
                  }}
                >
                  {project.description}
                </p>
              </div>
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill={colors.Arrow} // Arrow color
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" // Arrow path
                    />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;
