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
      <p className="text-sm">
        Made by{" "}
        <span className={"text-active-dark"}>
          Kianoush Sabouri
        </span>
      </p>
    </footer>
  );
};

export default Footer;
