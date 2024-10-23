import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, FolderIcon, BriefcaseIcon, WrenchIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

// Define the props for each NavItem
interface NavItemProps {
  to: string; // Path for navigation
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // Icon component
  label: string; // Tooltip text
}

// NavItem component
const NavItem: React.FC<NavItemProps> = ({ to, Icon, label }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  return (
    <div 
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
      onMouseEnter={() => setIsHovered(true)} // Show label on hover
      onMouseLeave={() => setIsHovered(false)} // Hide label when not hovered
    >
      <Link to={to}>
        <Icon className="h-6 w-6 text-white" />
      </Link>
      {isHovered && (
        <span style={{
          opacity: 1,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          position: 'absolute', 
          bottom: '-2.5rem',
          left: '50%',
          transform: 'translateX(-50%) translateY(-20px)', // Start from above
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          color: 'rgba(255, 255, 255, 1)',
          fontSize: '0.7rem',
          padding: '2px 10px',
          borderRadius: '25px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          animation: 'fadeInDown 0.3s ease forwards', // Apply the animation
        }}>
          {label}
        </span>
      )}
    </div>
  );
};

// Navbar component
const Navbar: React.FC = () => {
  return (
    <nav style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.03)', 
      width: '300px', 
      height: '50px', 
      position: 'absolute', 
      top: '20px', 
      left: '50%', 
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: '25px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    }}>
      <NavItem to="/" Icon={HomeIcon} label="Home" />
      <NavItem to="/projects" Icon={FolderIcon} label="Projects" />
      <NavItem to="/experience" Icon={BriefcaseIcon} label="Experience" />
      <NavItem to="/tools" Icon={WrenchIcon} label="Tools" />
      <NavItem to="/blog" Icon={PencilSquareIcon} label="Thoughts" />
    </nav>
  );
};

export default Navbar;