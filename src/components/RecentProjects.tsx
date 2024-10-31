import React, { useEffect } from "react"; // Importing React and useEffect hook for managing component lifecycle
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode
import { projectsData } from "../data/datas.json"; // Importing project data from JSON file
import { usePageContext } from "./PageContext"; // Importing PageContext to manage page state

const ProjectList: React.FC = () => {
  const { darkMode } = useTheme(); // Access dark mode state from ThemeContext
  const { isDetailPage } = usePageContext(); // Access whether the page is a detail page from PageContext
  const navigate = useNavigate(); // Initialize navigation function

  // Effect to apply dark/light mode class to the body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Toggle dark mode class based on state
    document.body.classList.toggle("light-mode", !darkMode); // Toggle light mode class based on state
  }, [darkMode]); // Dependency array to re-run effect when darkMode changes

  // Determine which projects to display based on whether it's a detail page
  const displayedProjects = isDetailPage
    ? projectsData // If it's a detail page, display all projects
    : projectsData.slice(0, 3); // Otherwise, display the first 3 projects

  return (
    <div className="mt-20 text-center md:text-left w-full"> {/* Main container for the project list */}
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2 ${
          darkMode ? "text-text-title-light" : "text-text-title-dark"
        }`}
      >
        RECENT {/* Main title */}
      </h1>
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4 ${
          darkMode ? "text-text-title2-light" : "text-text-title2-dark"
        }`}
      >
        PROJECTS {/* Sub-title */}
      </h1>
      <div>
        <ul className="flex flex-col items-center md:items-start "> {/* List of projects */}
          {displayedProjects.map((project) => ( // Map through the displayed projects
            <li
              key={project.id} // Use project ID as key for list items
              className={`flex items-center rounded-xl w-[80%] md:w-full my-4 p-4 transition duration-300 ease-in-out cursor-pointer ${
                darkMode
                  ? "bg-text-title2-dark hover:bg-text-title2-light" // Background color for dark mode
                  : "bg-text-title2-light hover:bg-text-title2-dark" // Background color for light mode
              }`}
              onClick={() =>
                navigate(`/details/project/${project.id}`, {
                  state: {previousScrollPosition: window.scrollY, data: project, type: "project" }, // Navigate to detail page with project data
                })
              } // Call handler on click
            >
              <img
                src={project.image} // Display project thumbnail
                alt="Thumbnail"
                className="w-16 h-16 md:w-24 md:h-24 rounded-md mr-4" // Thumbnail styling
              />
              <div className="flex-1"> {/* Container for project details */}
                <h3
                  className={`font-semibold ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {project.title} {/* Display project title */}
                </h3>
              </div>
              <div> {/* Icon container */}
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" // SVG path for the icon
                    className={`${
                      darkMode ? "text-text-title-light" : "text-text-title-dark"
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

export default ProjectList; // Export the component for use in other files
