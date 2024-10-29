import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import { PageProvider } from "./components/PageContext";
import Navbar from "./components/Navbar";
import HomePage from "./Page/Home";
import ProjectsPage from "./Page/Projects";
import ExperiencePage from "./Page/Experience";
import ToolsPage from "./Page/Tools";
import ThoughtPage from "./Page/Thoughts";
import Footer from "./components/Footer";
import DetailsPage from "./Page/Details";

const App: React.FC = () => {
  // Access theme directly from the ThemeContext using the useTheme hook
  return (
    <Router>
      <ThemeProvider>
        <PageProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/thoughts" element={<ThoughtPage />} />
            <Route path="/details/:category/:id" element={<DetailsPage />} />
          </Routes>
          <div style={{ paddingBottom: "4rem" }} />
          <Footer />
        </PageProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
