"use client";

import React, { useEffect } from "react";
import { useThemeStore } from "@/stores/useThemeStore";
import { projectsData } from "@/data/projects.json";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { usePageStore } from "@/stores/usePageStore";
import { useRouter } from "next/navigation";

const ProjectList: React.FC = () => {
  const { darkMode } = useThemeStore();
  const { isDetailPage, setIsDetailPage } = usePageStore();
  const router = useRouter();

  const handleClick = (id: string) => {
    setIsDetailPage(!isDetailPage);
    router.push(`/projects/${id}`);
  };
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  const displayedProjects = isDetailPage
    ? projectsData
    : projectsData.slice(0, 3);

  return (
    <motion.div
      className="mt-20 text-center md:text-left w-full"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2 ${
          darkMode ? "text-text-title-light" : "text-text-title-dark"
        }`}
      >
        RECENT
      </h1>
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4 ${
          darkMode ? "text-text-title2-light" : "text-text-title2-dark"
        }`}
      >
        PROJECTS
      </h1>
      <div>
        <ul className="flex flex-col items-center md:items-start">
          {displayedProjects.map((project) => (
            <li
              key={project.id}
              className={`flex items-center rounded-xl w-[80%] md:w-full my-4 p-4 transition duration-300 ease-in-out cursor-pointer ${
                darkMode
                  ? "bg-text-title2-dark hover:bg-text-title2-light"
                  : "bg-text-title2-light hover:bg-text-title2-dark"
              }`}
              onClick={() => handleClick(project.id)} // ارسال شناسه پروژه به handleClick
            >
              <img
                src={project.image}
                alt="Thumbnail"
                className="w-16 h-16 md:w-24 md:h-24 rounded-md mr-4"
              />
              <div className="flex-1">
                <h3
                  className={`font-semibold ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {project.title}
                </h3>
              </div>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    className={`${
                      darkMode
                        ? "text-text-title-light"
                        : "text-text-title-dark"
                    }`}
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectList;
