import React, { useState, useEffect } from "react";
import { useTheme } from 'next-themes';

const GradientOverlay: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-20">
      <div
        className={`fixed top-0 w-full h-32 ${
          theme === "dark" ? "bg-gradient-to-b from-dark-mode" : "bg-gradient-to-b from-light-mode"
        }`}
      ></div>
      <div
        className={`fixed bottom-0 w-full h-32 ${
          theme === "dark" ? "bg-gradient-to-t from-dark-mode" : "bg-gradient-to-t from-light-mode"
        }`}
      ></div>
    </div>
  );
};

GradientOverlay.displayName = "GradientOverlay";

export default React.memo(GradientOverlay);
