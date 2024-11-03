"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; 
import { useThemeStore } from "@/stores/useThemeStore"; 
import {
  HomeIcon,
  FolderIcon,
  BriefcaseIcon,
  WrenchIcon,
  PencilSquareIcon,
  SunIcon,
  MoonIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface NavItemProps {
  to: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  darkMode: boolean;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  Icon,
  label,
  darkMode,
  isActive,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={to}>
        <Icon
          className={`h-6 w-6 ${
            isActive
              ? "text-active-dark" 
              : darkMode
              ? "text-dark-mode-text"
              : "text-light-mode-text" 
          }`}
        />
      </Link>
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, translateY: -25, scale: 0 }}
          animate={{ opacity: 1, translateY: 25, scale: 1 }}
          exit={{ opacity: 0, translateY: -25, scale: 0 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={() => !isHovered && setIsHovered(false)}
          className={`absolute px-2 py-[2px] items-center justify-center bottom-[-1rem] transform -translate-x-1/2 border-0 rounded-md shadow-lg text-xs ${
            darkMode
              ? "text-dark-mode-text bg-tooltip-bg-dark"
              : "text-light-mode-text bg-tooltip-bg-light"
          }`}
        >
          {label}
        </motion.span>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useThemeStore(); // استفاده از Zustand
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <nav
        className={`absolute top-5 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[300px] h-[50px] rounded-xl shadow-lg z-50 ${
          darkMode ? "bg-dark-mode-bg" : "bg-light-mode-bg"
        }`}
      >
        <div className="flex items-center justify-around w-full">
          <NavItem
            to="/"
            Icon={HomeIcon}
            label="Home"
            darkMode={darkMode}
            isActive={true} 
          />
          <NavItem
            to="/projects"
            Icon={FolderIcon}
            label="Projects"
            darkMode={darkMode}
            isActive={false} 
          />
          <NavItem
            to="/experiences"
            Icon={BriefcaseIcon}
            label="Experience"
            darkMode={darkMode}
            isActive={false}
          />
          <NavItem
            to="/tools"
            Icon={WrenchIcon}
            label="Tools"
            darkMode={darkMode}
            isActive={false}
          />
          <NavItem
            to="/thoughts"
            Icon={PencilSquareIcon}
            label="Thoughts"
            darkMode={darkMode}
            isActive={false}
          />
        </div>
      </nav>
      <button
        onClick={toggleDarkMode}
        className={`fixed bottom-5 left-5 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg z-50 ${
          darkMode ? "dark-mode" : "light-mode"
        }`}
      >
        {darkMode ? (
          <MoonIcon className="h-6 w-6 text-dark-mode-text" />
        ) : (
          <SunIcon className="h-6 w-6 text-light-mode-text " />
        )}
      </button>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg z-40 ${
            darkMode ? "dark-mode" : "light-mode"
          }`}
        >
          <ArrowUpIcon
            className={`h-6 w-6 ${
              darkMode ? "text-dark-mode-text" : "text-light-mode-text"
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default Navbar;
