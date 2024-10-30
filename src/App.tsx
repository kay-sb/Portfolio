import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import { PageProvider } from "./components/PageContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ExperiencePage from "./pages/Experience";
import ToolsPage from "./pages/Tools";
import ThoughtPage from "./pages/Thoughts";
import Footer from "./components/Footer";
import DetailsPage from "./pages/Details";
import BlogPage from "./pages/Blog";

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
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
          <div style={{ paddingBottom: "4rem" }} />
          <Footer />
        </PageProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
