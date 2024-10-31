// سایر واردات بدون تغییر
import React, { useEffect, useState } from "react";
import Profile from "../components/ProfileCart";
import { useTheme } from "../components/ThemeContext";
import Form from "../components/Form";
import { useLocation, useParams } from "react-router-dom";
import { experienceData, projectsData} from "../data/datas.json";

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
      default:
        return "Details";
    }
  };


  useEffect(() => {
    window.scrollTo({top: 0});
  }, []);
  

  return (
    <div className="min-h-screen flex flex-col items-center mt-2">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center mt-20">
        <div className=" hidden md:flex">
          <Profile />
        </div>
        <div className="flex-1 w-full text-center md:text-left mt-5 ">
          {data ? (
            <div className="text-start md:text-left rounded-lg mx-auto md:mx-0 w-[80%] md:w-full">
              <div
                className={`p-4 rounded-lg mb-5 ${
                  darkMode ? "bg-text-title2-light" : "bg-text-title2-dark"
                }`}
              >
                <h2
                  className={`text-xl font-bold mb-4 ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {renderTitle()}
                </h2>
              </div>

              <p
                className={`text-md flex text-start mb-10 ${
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
          <div className=" flex justify-center items-center md:hidden">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
