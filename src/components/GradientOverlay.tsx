import React from "react";
import { useThemeStore } from "@/stores/useThemeStore";

const GradientOverlay: React.FC = () => {
  const { darkMode } = useThemeStore();

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-20">
      <div
        className={`fixed top-0 w-full h-32 ${
          darkMode ? "bg-gradient-to-b from-dark-mode" : "bg-gradient-to-b from-light-mode"
        }`}
      ></div>
      <div
        className={`fixed bottom-0 w-full h-32 ${
          darkMode ? "bg-gradient-to-t from-dark-mode" : "bg-gradient-to-t from-light-mode"
        }`}
      ></div>
    </div>
  );
};

GradientOverlay.displayName = "GradientOverlay";

export default React.memo(GradientOverlay);
