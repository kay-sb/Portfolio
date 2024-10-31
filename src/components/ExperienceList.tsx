import React, { useEffect } from "react"; // Importing React and useEffect hook for managing component lifecycle
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode
import { usePageContext } from "./PageContext"; // Importing PageContext to manage page state
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import { experienceData } from "../data/datas.json"; // Importing experience data from JSON file

const ExperienceList: React.FC = () => {
  const { darkMode } = useTheme(); // Access dark mode state from ThemeContext
  const { isDetailPage } = usePageContext(); // Access whether the page is a detail page from PageContext
  const navigate = useNavigate(); // Initialize navigation function

  // Effect to apply dark/light mode class to the body
  useEffect(() => {
    // Toggle classes based on dark mode state
    document.body.classList.toggle("dark-mode", darkMode); // Apply dark mode class
    document.body.classList.toggle("light-mode", !darkMode); // Apply light mode class
  }, [darkMode]); // Dependency array to re-run effect when darkMode changes

  // Function to truncate description text if it exceeds maxLength
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      // If description length is greater than maxLength
      return `${description.substring(0, maxLength)}...`; // Return truncated description with ellipsis
    }
    return description; // Otherwise return the full description
  };

  // Determine which experiences to display based on whether it's a detail page
  const displayedProjects = isDetailPage
    ? experienceData // If it's a detail page, display all experiences
    : experienceData.slice(0, 3); // Otherwise, display the first 3 experiences

  return (
    <div className="mt-20 text-center md:text-left">
      {" "}
      {/* Container for the component */}
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2 ${
          darkMode ? "text-text-title-light" : "text-text-title-dark"
        }`}
      >
        YEARS OF {/* Main title */}
      </h1>
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4 ${
          darkMode ? "text-text-title2-light" : "text-text-title2-dark"
        }`}
      >
        EXPERIENCE {/* Sub-title */}
      </h1>
      <div>
        <ul className="flex flex-col items-center md:items-start ">
          {" "}
          {/* List of experiences */}
          {displayedProjects.map(
            (
              experience // Map through the displayed experiences
            ) => (
              <li
                key={experience.id} // Use experience ID as key for list items
                className={`relative flex items-center rounded-xl w-[80%] md:w-full h-auto my-4 p-4 transition duration-300 ease-in-out cursor-pointer ${
                  darkMode
                    ? "bg-text-title2-dark hover:bg-text-title2-light" // Background color for dark mode
                    : "bg-text-title2-light hover:bg-text-title2-dark" // Background color for light mode
                }`}
                onClick={() =>
                  navigate(`/details/experience/${experience.id}`, {
                    state: {
                      previousScrollPosition: window.scrollY,
                      data: experience,
                      type: "experience",
                    }, // Navigate to detail page with experience data
                  })
                }
              >
                <div className="flex-1 top-4 left-4">
                  {" "}
                  {/* Container for experience details */}
                  <h3
                    className={`text-lg flex font-semibold items-start ${
                      darkMode
                        ? "text-text-title-light"
                        : "text-text-title-dark"
                    }`}
                  >
                    {experience.title} {/* Display experience title */}
                  </h3>
                  <p
                    className={`mt-5 mb-2 text-[0.8rem] flex text-start ${
                      darkMode
                        ? "text-text-title-light"
                        : "text-text-title-dark"
                    }`}
                  >
                    {truncateDescription(experience.description, 300)}{" "}
                    {/* Display truncated description */}
                  </p>
                </div>
                <div className="absolute top-2 right-2">
                  {" "}
                  {/* Icon container */}
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
                        darkMode
                          ? "text-text-title-light"
                          : "text-text-title-dark"
                      }`}
                    />
                  </svg>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceList; // Export the component for use in other files
