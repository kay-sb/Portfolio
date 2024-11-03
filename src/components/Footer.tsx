import React from "react";
import { useThemeStore }  from "@/stores/useThemeStore";

const Footer: React.FC = () => {
  const { darkMode } = useThemeStore();

  return (
    <footer
      className={`mb-20 mt-20 p-4 text-center z-30 ${
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
