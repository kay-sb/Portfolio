import { createContext, useContext, useState, ReactNode } from "react";

// Context definition
interface PageContextType {
  isDetailPage: boolean;
  setIsDetailPage: (isDetail: boolean) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [isDetailPage, setIsDetailPage] = useState(false);

  return (
    <PageContext.Provider value={{ isDetailPage, setIsDetailPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
};
