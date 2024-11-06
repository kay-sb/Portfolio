"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Importing JSON data
import data from '@/data/locales/en/common.json';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const { text, author } = data.footerData[0];

  return (
    <footer className={`mb-20 mt-20 p-4 text-center z-30 ${theme === "dark" ? "text-light-mode" : "text-dark-mode"}`}>
      <p className="text-[0.7rem] md:text-lg ">
        {text}{" "}
        <span className="text-[0.8rem] text-active-dark md:text-xl">
          {author}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
