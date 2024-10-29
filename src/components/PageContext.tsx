import { createContext, useContext, useState, ReactNode } from "react"; // Importing necessary hooks and types from React

// Definition of the context interface
interface PageContextType {
  isDetailPage: boolean; // A boolean state to determine if the current page is a detail page
  setIsDetailPage: (isDetail: boolean) => void; // Function to update the isDetailPage state
}

// Creating the PageContext with an undefined default value
const PageContext = createContext<PageContextType | undefined>(undefined);

// PageProvider component to manage the context state
export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [isDetailPage, setIsDetailPage] = useState(false); // State to hold whether we are on a detail page

  return (
    <PageContext.Provider value={{ isDetailPage, setIsDetailPage }}> {/* Providing the state and updater function to context */}
      {children} {/* Rendering child components */}
    </PageContext.Provider>
  );
};

// Custom hook to access the PageContext
export const usePageContext = () => {
  const context = useContext(PageContext); // Getting the context
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider"); // Error if used outside the provider
  }
  return context; // Returning the context
};
