import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  isActive: boolean; // Add isActive prop to track active state
  onClick?: () => void; // Add optional onClick prop
}

// Define colors for dark mode and light mode
const colors = {
  darkModeBg: "rgba(255, 255, 255, 0.03)", // Background color in dark mode
  lightModeBg: "rgba(255, 255, 255, 0.03)", // Background color in light mode
  darkModeText: "rgba(255, 255, 255, 0.80)", // Text color in dark mode
  lightModeText: "rgba(0, 0, 0, 0.80)", // Text color in light mode
  tooltipBgDark: "rgba(255, 255, 255, 0.08)", // Tooltip background color in dark mode
  tooltipBgLight: "rgba(255, 255, 255, 0.08)", // Tooltip background color in light mode
  activeLight: "rgb(255, 130, 130)", // Active color in light mode
  activeDark: "rgb(255, 80, 80)", // Active color in dark mode
};

// NavItem component
const NavItem: React.FC<NavItemProps> = ({ to, Icon, label, darkMode, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 150);//the delay.
  };

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)} // Show tooltip on hover
      onMouseLeave={handleMouseLeave} // Hide tooltip when not hovered
    >
      <Link to={to} onClick={onClick}>
      <Icon
          className={`h-6 w-6`}
          style={{
            color: isActive ? (darkMode ? colors.activeDark : colors.activeLight) : (darkMode ? colors.darkModeText : colors.lightModeText),
          }} 
        />
      </Link>
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, translateY: -25, scale: 0 }} // Initial state of tooltip
          animate={{ opacity: 1, translateY: 25, scale: 1 }} // Animation when appearing
          exit={{opacity: 0, translateY: -25, scale: 0,}} // Animation when disappearing
          transition={{ duration: 0.3 }} // Duration of the animation
          onAnimationComplete={() => !isHovered && setIsHovered(false)}
          className={`absolute px-2 py-[2px] items-center justify-center bottom-[-1rem] transform -translate-x-1/2 border-0 rounded-md shadow-lg text-xs `} // Tooltip background color based on dark mode
          style={{
            color: darkMode ? colors.darkModeText : colors.lightModeText,
            background: darkMode ? colors.tooltipBgDark : colors.tooltipBgLight,
          }}
        >
          {label} {/* Tooltip text */}
        </motion.span>
      )}
    </div>
  );
};

// Define the props for the Navbar
interface NavbarProps {
  darkMode: boolean; // Dark mode status
  toggleDarkMode: (newMode: boolean) => void; // Function to toggle dark mode
}

// Navbar component
const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation(); // State to track active nav item
  const activeItem = location.pathname;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode); 
    document.body.classList.toggle("light-mode", !darkMode); 
  }, [darkMode])

  const handleToggleDarkMode = () => {
    const newMode = !darkMode; // Calculate new mode
    toggleDarkMode(newMode); // Change dark mode state
    localStorage.setItem("darkMode", JSON.stringify(newMode)); // Save new mode to localStorage
  };

  return (
    <div>
      <nav
        className={`absolute top-5 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[300px] h-[50px] rounded-xl shadow-lg z-50`}
        style={{
          background: darkMode ? colors.darkModeBg : colors.lightModeBg,
        }}
      >
        <div className="flex items-center justify-around w-full">
          <NavItem 
            to="/" 
            Icon={HomeIcon} 
            label="Home" 
            darkMode={darkMode}
            isActive={activeItem === '/'} 
            onClick={() => {}}
          />
          <NavItem
            to="/projects"
            Icon={FolderIcon}
            label="Projects"
            darkMode={darkMode}
            isActive={activeItem === '/projects'} 
            onClick={() => {}}
          />
          <NavItem
            to="/experience"
            Icon={BriefcaseIcon}
            label="Experience"
            darkMode={darkMode}
            isActive={activeItem === '/experience'} 
            onClick={() => {}}
          />
          <NavItem
            to="/tools"
            Icon={WrenchIcon}
            label="Tools"
            darkMode={darkMode}
            isActive={activeItem === '/tools'} 
            onClick={() => {}}
          />
          <NavItem
            to="/thoughts"
            Icon={PencilSquareIcon}
            label="Thoughts"
            darkMode={darkMode}
            isActive={activeItem === '/thoughts'} 
            onClick={() => {}}
          />
        </div>
      </nav>
      <button
        onClick={handleToggleDarkMode} // Change dark mode on button click
        className={`fixed bottom-5 left-5 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg`}
        style={{
          background: darkMode ? colors.darkModeBg : colors.lightModeBg,
        }}
      >
        {darkMode ? (
          <MoonIcon
            className={`h-6 w-6`}
            style={{
              color: darkMode ? colors.darkModeText : colors.lightModeText,
            }}
          /> // Show moon icon in dark mode
        ) : (
          <SunIcon
            className={`h-6 w-6`}
            style={{
              color: darkMode ? colors.darkModeText : colors.lightModeText,
            }}
          /> // Show sun icon in light mode
        )}
      </button>
    </div>
  );
};

export default Navbar;
