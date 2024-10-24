import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  FolderIcon,
  BriefcaseIcon,
  WrenchIcon,
  PencilSquareIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// Define the props for each NavItem
interface NavItemProps {
  to: string; // Path for navigation
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // Icon component
  label: string; // Tooltip text
  darkMode: boolean; // Added darkMode prop
}

// Define colors for dark mode and light mode
const colors = {
  darkModeBg: "rgba(255, 255, 255, 0.03)", // Background color in dark mode
  lightModeBg: "rgba(255, 255, 255, 0.03)", // Background color in light mode
  darkModeText: "rgba(255, 255, 255, 0.80)", // Text color in dark mode
  lightModeText: "rgba(0, 0, 0, 0.80)", // Text color in light mode
  tooltipBgDark: "rgba(255, 255, 255, 0.08)", // Tooltip background color in dark mode
  tooltipBgLight: "rgba(255, 255, 255, 0.08)", // Tooltip background color in light mode
};

// NavItem component
const NavItem: React.FC<NavItemProps> = ({ to, Icon, label, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)} // Show tooltip on hover
      onMouseLeave={() => setIsHovered(false)} // Hide tooltip when not hovered
    >
      <Link to={to}>
        <Icon
          className={`h-6 w-6`} 
          style={{ color: darkMode ? colors.darkModeText : colors.lightModeText }} // Change icon color based on dark mode
        />
      </Link>
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, translateY: -25 }} // Initial state of tooltip
          animate={{ opacity: 1, translateY: 25 }} // Animation when appearing
          exit={{ opacity: 0, translateY: -25 }} // Animation when disappearing
          transition={{ duration: 0.3 }} // Duration of the animation
          className={`absolute px-2 py-[2px] items-center justify-center bottom-[-1rem] transform -translate-x-1/2 border-0 rounded-md shadow-lg text-xs `} // Tooltip background color based on dark mode
          style={{ color: darkMode ? colors.darkModeText : colors.lightModeText , background: darkMode ? colors.tooltipBgDark : colors.tooltipBgLight }}
        >
          {label} {/* Tooltip text */}
        </motion.span>
      )}
    </div>
  );
};

// Navbar component
const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true; // Default to dark mode if not set
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); // Toggle body class for dark mode
    document.body.classList.toggle("light-mode", !darkMode); // Toggle body class for light mode
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode; // Calculate new mode
    setDarkMode(newMode); // Change dark mode state
    localStorage.setItem('darkMode', JSON.stringify(newMode)); // Save new mode to localStorage
  };

  return (
    <div>
      <nav
        className={`absolute top-5 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[300px] h-[50px] rounded-xl shadow-lg z-50`} // Set navbar background based on dark mode
        style={{  background: darkMode ? colors.darkModeBg : colors.lightModeBg }}
      >
        <div className="flex items-center justify-around w-full">
          <NavItem to="/" Icon={HomeIcon} label="Home" darkMode={darkMode} />
          <NavItem to="/projects" Icon={FolderIcon} label="Projects" darkMode={darkMode} />
          <NavItem to="/experience" Icon={BriefcaseIcon} label="Experience" darkMode={darkMode} />
          <NavItem to="/tools" Icon={WrenchIcon} label="Tools" darkMode={darkMode} />
          <NavItem to="/blog" Icon={PencilSquareIcon} label="Thoughts" darkMode={darkMode} />
        </div>
      </nav>
      <button
        onClick={toggleDarkMode} // Change dark mode on button click
        className={`fixed bottom-5 left-5 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg`} // Set button background based on dark mode
        style={{ background: darkMode ? colors.darkModeBg : colors.lightModeBg }}
      >
        {darkMode ? (
          <MoonIcon className={`h-6 w-6`}
          style={{ color: darkMode ? colors.darkModeText : colors.lightModeText }}
           /> // Show moon icon in dark mode
        ) : (
          <SunIcon className={`h-6 w-6`}
          style={{ color: darkMode ? colors.darkModeText : colors.lightModeText }}
           /> // Show sun icon in light mode
        )}
      </button>
    </div>
  );
};

export default Navbar;
