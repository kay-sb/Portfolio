import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { usePageContext } from "./PageContext";
import { useNavigate } from "react-router-dom";
import { blogData } from "../data/blog.json"; // Importing new blog data

const ThoughtsList: React.FC = () => {
  const { darkMode } = useTheme();
  const { isDetailPage } = usePageContext();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);


  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      // If description length is greater than maxLength
      return `${description.substring(0, maxLength)}...`; // Return truncated description with ellipsis
    }
    return description; // Otherwise return the full description
  };
  
  // Display only needed data: id, date, title, and introduction
  const displayedBlogs = isDetailPage ? blogData : blogData.slice(0, 3);
  // Adjust slice as needed




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
          {displayedBlogs.map((blog, index) => (
            <li
              key={index}
              className={`relative flex items-center rounded-xl w-[80%] md:w-full h-auto my-4 p-4 transition duration-300 ease-in-out cursor-pointer ${
                darkMode
                  ? "bg-text-title2-dark hover:bg-text-title2-light"
                  : "bg-text-title2-light hover:bg-text-title2-dark"
              }`}
              onClick={() => {
                localStorage.setItem("selectedBlog", JSON.stringify(blog));
                navigate(`/blog/${blog.id}`);
              }} 
            >
              <div className="mb-2 flex-1">
                <h3
                  className={`text-lg font-semibold text-start top-4 left-4 ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {blog.title}
                </h3>
                <p
                  className={`text-[0.8rem] text-start my-4 mb-6 ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {truncateDescription(blog.introduction, 300)}
                </p>
                <span
                  className={`absolute bottom-3 left-4 text-xs ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {blog.date}
                </span>
                <span
                  className={`absolute bottom-3 right-4 text-xs ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {blog.readTime}
                </span>
                <div className="absolute top-2 right-2">
                  {" "} {/* Icon container */}
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThoughtsList;
