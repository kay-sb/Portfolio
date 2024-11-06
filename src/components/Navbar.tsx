"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { MoonIcon, SunIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

// Importing JSON file
import data from "@/data/locales/en/common.json";

// Create a mapping of icon names to components
const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  HomeIcon: require("@heroicons/react/24/outline").HomeIcon,
  FolderIcon: require("@heroicons/react/24/outline").FolderIcon,
  BriefcaseIcon: require("@heroicons/react/24/outline").BriefcaseIcon,
  WrenchIcon: require("@heroicons/react/24/outline").WrenchIcon,
  PencilSquareIcon: require("@heroicons/react/24/outline").PencilSquareIcon,
};

interface NavItemProps {
  to: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, Icon, label, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };
  if (!mounted) return null;

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
              : theme === "dark"
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
            theme === "dark"
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
  const { theme, setTheme } = useTheme();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  return (
    <div>
      <nav
        className={`absolute top-5 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[300px] h-[50px] rounded-xl shadow-lg z-50 ${
          theme === "dark" ? "bg-dark-mode-bg" : "bg-light-mode-bg"
        }`}
      >
        <div className="flex items-center justify-around w-full">
          {data.navbarData.map((item) => {
            const IconComponent = iconMap[item.Icon];
            return <NavItem key={item.to} {...item} Icon={IconComponent} />;
          })}
        </div>
      </nav>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`fixed bottom-5 left-5 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg z-50 ${
          theme === "dark" ? "bg-dark-mode" : "bg-light-mode"
        }`}
      >
        {theme === "dark" ? (
          <MoonIcon className="h-6 w-6 text-dark-mode-text" />
        ) : (
          <SunIcon className="h-6 w-6 text-light-mode-text" />
        )}
      </button>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg z-40 ${
            theme === "dark" ? "bg-dark-mode" : "bg-light-mode"
          }`}
        >
          <ArrowUpIcon
            className={`h-6 w-6 ${
              theme === "dark" ? "text-dark-mode-text" : "text-light-mode-text"
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default Navbar;
