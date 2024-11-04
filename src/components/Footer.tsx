import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <footer
      className={`mb-20 mt-20 p-4 text-center z-30 ${
        theme === "dark" ? "text-light-mode" : "text-dark-mode"
      }`}
    >
      <p className="text-[0.7rem] md:text-lg ">
        Made by{" "}
        <span className="text-[0.8rem] text-active-dark md:text-xl">
          Kianoush Sabouri
        </span>
      </p>
    </footer>
  );
};

export default Footer;
