import React, { useEffect, useState } from "react"; // useState اضافه شده
import Profile from "../components/ProfileCart";
import { useTheme } from "../components/ThemeContext";
import Form from "../components/Form";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { projectsData } from "../components/data.json"; // فرض می‌کنم اینجا داده‌ها را وارد می‌کنی

const DetailsPage: React.FC = () => {
  const { darkMode } = useTheme();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  
  const [data, setData] = useState<any>(null); // استفاده از useState برای ذخیره داده‌ها
  const { type } = location.state || {};

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const fetchData = () => {
      const project = projectsData.find((p) => p.id === id);
      setData(project);
    };
    
    fetchData();
  }, [id]);
  

  const renderTitle = () => {
    if (!data) return "Data not available.";
    switch (type) {
      case "project":
        return data.title || "Project Title";
      case "experience":
        return data.role || "Experience Role";
      case "thought":
        return data.title || "Thought Title";
      default:
        return "Details";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center mt-20">
        <Profile />
        <div className="flex-1 w-full text-center md:text-left mt-10 md:mt-5">
          {data ? (
            <div>
              <h2
                className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2 ${
                  darkMode ? "text-text-title-light" : "text-text-title-dark"
                }`}
              >
                {renderTitle()}
              </h2>
              <p
                className={`mb-2 text-xl flex text-start ${
                  darkMode ? "text-text-title-light" : "text-text-title-dark"
                }`}
              >
                {data.description || "No description provided."}
              </p>
            </div>
          ) : (
            <p
              className={`mt-10 font-bold text-[40px] leading-none tracking-wide mb-2 ${
                darkMode ? "text-text-title2-light" : "text-text-title2-dark"
              }`}
            >
              Data not available.
            </p>
          )}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
