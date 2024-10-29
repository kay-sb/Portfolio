import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode
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

// Define props for each NavItem
interface NavItemProps {
  to: string; // Path for navigation
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // Icon component
  label: string; // Tooltip text
  darkMode: boolean; // Dark mode status
  isActive: boolean; // Active status
  onClick?: () => void; // Optional click handler
}

// NavItem component
const NavItem: React.FC<NavItemProps> = ({
  to,
  Icon,
  label,
  darkMode,
  isActive,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false); // Hover state for tooltip

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false); // Delay before hiding tooltip
    }, 150);
  };

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)} // Show tooltip on hover
      onMouseLeave={handleMouseLeave} // Hide tooltip on mouse leave
    >
      <Link to={to} onClick={onClick}>
        <Icon
          className={`h-6 w-6 ${
            isActive
              ? darkMode
                ? "text-active-dark"
                : "text-active-dark"
              : darkMode
              ? "text-dark-mode-text"
              : "text-light-mode-text"
          }`}
        />
      </Link>
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, translateY: -25, scale: 0 }} // Initial state of tooltip
          animate={{ opacity: 1, translateY: 25, scale: 1 }} // Animation for showing tooltip
          exit={{ opacity: 0, translateY: -25, scale: 0 }} // Animation for hiding tooltip
          transition={{ duration: 0.3 }} // Animation duration
          onAnimationComplete={() => !isHovered && setIsHovered(false)}
          className={`absolute px-2 py-[2px] items-center justify-center bottom-[-1rem] transform -translate-x-1/2 border-0 rounded-md shadow-lg text-xs ${
            darkMode
              ? "text-dark-mode-text bg-tooltip-bg-dark"
              : "text-light-mode-text bg-tooltip-bg-light"
          }`}
        >
          {label} {/* Tooltip text */}
        </motion.span>
      )}
    </div>
  );
};

// Define props for the Navbar component
interface NavbarProps {}

// Navbar component
const Navbar: React.FC<NavbarProps> = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Access dark mode state and toggle function from ThemeContext
  const location = useLocation(); // Get the current location
  const activeItem = location.pathname; // Get the active path
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Toggle class for dark mode
    document.body.classList.toggle("light-mode", !darkMode); // Toggle class for light mode
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Show button if scrolled down more than 200px
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  const handleToggleDarkMode = () => {
    toggleDarkMode(); // Toggle dark mode on button click
  };

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
            isActive={activeItem === "/"}
          />
          <NavItem
            to="/projects"
            Icon={FolderIcon}
            label="Projects"
            darkMode={darkMode}
            isActive={activeItem === "/projects"}
          />
          <NavItem
            to="/experience"
            Icon={BriefcaseIcon}
            label="Experience"
            darkMode={darkMode}
            isActive={activeItem === "/experience"}
          />
          <NavItem
            to="/tools"
            Icon={WrenchIcon}
            label="Tools"
            darkMode={darkMode}
            isActive={activeItem === "/tools"}
          />
          <NavItem
            to="/thoughts"
            Icon={PencilSquareIcon}
            label="Thoughts"
            darkMode={darkMode}
            isActive={activeItem === "/thoughts"}
          />
        </div>
      </nav>
      <button
        onClick={handleToggleDarkMode} // Change dark mode state on click
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
          onClick={scrollToTop} // Scroll to top on click
          className={`fixed bottom-5 right-5 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg z-50 ${
            darkMode ? "dark-mode" : "light-mode"
          }`}
        >
          {darkMode ? (
            <ArrowUpIcon className="h-6 w-6 text-dark-mode-text" />
          ) : (
            <ArrowUpIcon className="h-6 w-6 text-light-mode-text " />
          )}
        </button>
      )}
    </div>
  );
};

export default Navbar; // Exporting the Navbar component
