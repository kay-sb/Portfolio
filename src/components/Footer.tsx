import React from "react";
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode

const Footer: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`p-4 text-center ${
        darkMode ? "text-light-mode" : "text-dark-mode"
      }`}
    >
      <p className="text-[0.7rem] md:text-lg ">
        Made by{" "}
        <span className={" text-[0.8rem] text-active-dark md:text-xl"}>
          Kianoush Sabouri
        </span>
      </p>
    </footer>
  );
};

export default Footer;
