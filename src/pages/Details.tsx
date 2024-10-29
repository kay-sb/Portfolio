import React, { useEffect, useState } from "react"; 
import Profile from "../components/ProfileCart";
import { useTheme } from "../components/ThemeContext";
import Form from "../components/Form";
import { useLocation, useParams } from "react-router-dom";
import { experienceData, projectsData, thoughtsData } from "../data/datas.json"; // اطمینان حاصل کن که به درستی داده‌ها رو وارد می‌کنی

const DetailsPage: React.FC = () => {
  const { darkMode } = useTheme();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  
  const [data, setData] = useState<any>(null);
  const { type } = location.state || {};

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const fetchData = () => {
      let item;
      switch (type) {
        case "project":
          item = projectsData.find((p) => p.id === id);
          break;
        case "experience":
          item = experienceData.find((e) => e.id === id);
          break;
        case "thought":
          item = thoughtsData.find((t) => t.id === id);
          break;
        default:
          item = null;
      }
      if (!item) {
        console.warn(`Data with ID ${id} not found in ${type}.`);
      }
      setData(item);
    };

    fetchData();
  }, [id, type]);

  const renderTitle = () => {
    if (!data) return "Data not available.";
    switch (type) {
      case "project":
        return data.title || "Project Title";
      case "experience":
        return data.title || "Experience Title"; 
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
