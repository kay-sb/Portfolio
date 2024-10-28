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
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illum blanditiis unde officia placeat. Cupiditate tenetur, vel delectus facere perferendis, voluptatem possimus architecto, doloremque nam non officiis rem velit! Consectetur. ",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      title: "Experoence 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illum blanditiis unde officia placeat. Cupiditate tenetur, vel delectus facere perferendis, voluptatem possimus architecto, doloremque nam non officiis rem velit! Consectetur.",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      title: "Experoence 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illum blanditiis unde officia placeat. Cupiditate tenetur, vel delectus facere perferendis, voluptatem possimus architecto, doloremque nam non officiis rem velit! Consectetur.",
      link: "",
    },
    // Add more experiences as needed
  ];

  return (
    <div className=" mt-20 text-center md:text-left">
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
        <ul className=" flex flex-col items-center md:items-start md:px-0 ">
          {Experoence.map((experience, index) => (
            <li
              key={index}
              className={`relative flex items-center rounded-xl w-full max-w-[80%] h-auto my-4 p-4 transition duration-300 ease-in-out cursor-pointer ${
                darkMode
                  ? "bg-light-mode hover:bg-active-dark"
                  : "bg-dark-mode hover:bg-active-dark"
              }`}
              onClick={() => window.open(experience.link, "_blank")} // Open link in a new tab
            >
              <div className="flex-1 top-4 left-4">
                <h3
                  className={`text-lg flex font-semibold items-start ${
                    darkMode ? "text-text-title-dark" : "text-text-title-light"
                  }`}
                >
                  {experience.title}
                </h3>
                <p
                  className={` text-[0.6rem] flex text-start ${
                    darkMode ? "text-text-title-dark" : "text-text-title-light"
                  }`}
                >
                  {experience.description}
                </p>
              </div>
              <div className="absolute top-2 right-2">
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

export default ExperoenceList;
