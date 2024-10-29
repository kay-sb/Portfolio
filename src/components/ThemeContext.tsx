import React, { createContext, useContext, useEffect, useState } from 'react'; // Importing necessary React modules

// Define a context for managing theme state
const ThemeContext = createContext<{
  darkMode: boolean; // State variable for dark mode
  toggleDarkMode: () => void; // Function to toggle dark mode
} | null>(null); // Initial value is null

// Create a provider component for the ThemeContext
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false); // State to hold dark mode value

  // Effect to load saved dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode"); // Retrieve the saved mode
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode)); // Set state if a saved mode exists
    }
  }, []); // Empty dependency array means this runs once on mount

  // Function to toggle the dark mode state
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode; // Toggle the mode
      localStorage.setItem("darkMode", JSON.stringify(newMode)); // Save the new mode to localStorage
      return newMode; // Return the new mode
    });
  };

  // Provide the darkMode state and toggle function to the context
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children} {/* Render children components */}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext easily in other components
export const useTheme = () => {
  const context = useContext(ThemeContext); // Access the context
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider"); // Error handling if used outside provider
  }
  return context; // Return the context value
};
