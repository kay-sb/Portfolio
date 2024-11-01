import React from "react";
import { useTheme } from "./ThemeContext";

const GradientOverlay: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-20">
      <div
        className={`absolute top-0 w-full h-32 ${
          darkMode
            ? "bg-gradient-to-b from-dark-mode "
            : "bg-gradient-to-b from-light-mode "
        }`}
      ></div>
      <div
        className={`absolute bottom-0 w-full h-32 ${
          darkMode
            ? "bg-gradient-to-t from-dark-mode "
            : "bg-gradient-to-t from-light-mode "
        }`}
      ></div>
    </div>
  );
};

export default GradientOverlay;
