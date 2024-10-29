// سایر واردات بدون تغییر
import React, { useEffect, useState } from "react";
import Profile from "../components/ProfileCart";
import { useTheme } from "../components/ThemeContext";
import Form from "../components/Form";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { experienceData, projectsData, thoughtsData } from "../data/datas.json";

const DetailsPage: React.FC = () => {
  const { darkMode } = useTheme();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const { previousScrollPosition } = location.state || {
    previousScrollPosition: 0,
  };

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

  const smoothScrollTo = (targetPosition: number) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 400;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * progress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (400 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    scrollToTop();
  }, [data]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center mt-20">
        <div className=" hidden md:flex">
          <Profile />
        </div>
        <div className="flex-1 w-full  text-center md:text-left mt-5 ">
          {data ? (
            <div className="text-start md:text-left rounded-lg max-w-[80%] mx-auto md:mx-0 w-[80%] md:w-full">
              <div
                className={`p-4 rounded-lg mb-5 ${
                  darkMode ? "bg-text-title2-light" : "bg-text-title2-dark"
                }`}
              >
                {type === "thought" && data.date && data.readTime && (
                  <div className="flex justify-between text-xs mb-2">
                    <span
                      className={`${
                        darkMode
                          ? "text-text-title-light"
                          : "text-text-title-dark"
                      }`}
                    >
                      {data.date}
                    </span>
                    <span
                      className={`${
                        darkMode
                          ? "text-text-title-light"
                          : "text-text-title-dark"
                      }`}
                    >
                      {data.readTime}
                    </span>
                  </div>
                )}

                <h2
                  className={`font-bold text-[16px] xl:text-[40px] leading-none tracking-wide ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {renderTitle()}
                </h2>
              </div>

              <p
                className={`text-[12px] flex text-start mb-10 ${
                  darkMode ? "text-text-title-light" : "text-text-title-dark"
                }`}
              >
                {data.description || "No description provided."}
              </p>

              <button
                onClick={() => {
                  smoothScrollTo(previousScrollPosition);
                  navigate(-1);
                }}
                className={` ${
                  darkMode
                    ? "bg-text-title2-light text-light-mode"
                    : "bg-text-title2-dark text-dark-mode"
                } font-semibold mt-2 py-2 w-full rounded-xl hover:bg-active-dark transition duration-200`}
              >
                Back
              </button>
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
          <div className=" md:hidden">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
