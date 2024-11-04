"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePageStore } from "@/stores/usePageStore";
import experienceData from "@/data/experiences.json";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ExperienceList: React.FC = () => {
  const { theme } = useTheme();
  const { isDetailPage, setIsDetailPage } = usePageStore();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (id: string) => {
    setIsDetailPage(!isDetailPage);
    router.push(`/experiences/${id}`);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Function to truncate description text if it exceeds maxLength
  const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength
      ? `${description.substring(0, maxLength)}...`
      : description;
  };

  const displayedProjects = isDetailPage
    ? experienceData.experienceData
    : experienceData.experienceData.slice(0, 3);

  if (!mounted) return null;
  return (
    <motion.div
      className="mt-20 text-center md:text-left"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2 ${
          theme === "dark" ? "text-text-title-light" : "text-text-title-dark"
        }`}
      >
        YEARS OF
      </h1>
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4 ${
          theme === "dark" ? "text-text-title2-light" : "text-text-title2-dark"
        }`}
      >
        EXPERIENCE
      </h1>
      <div>
        <ul className="flex flex-col items-center md:items-start">
          {displayedProjects.map((experience) => (
            <li
              key={experience.id}
              className={`relative flex items-center rounded-xl w-[80%] md:w-full h-auto my-4 p-4 transition duration-300 ease-in-out cursor-pointer ${
                theme === "dark"
                  ? "bg-text-title2-dark hover:bg-text-title2-light"
                  : "bg-text-title2-light hover:bg-text-title2-dark"
              }`}
              onClick={() => handleClick(experience.id)}
            >
              <div className="flex-1 top-4 left-4">
                <h3
                  className={`text-lg flex font-semibold items-start ${
                    theme === "dark"
                      ? "text-text-title-light"
                      : "text-text-title-dark"
                  }`}
                >
                  {experience.title}
                </h3>
                <p
                  className={`mt-5 mb-2 text-[0.8rem] flex text-start ${
                    theme === "dark"
                      ? "text-text-title-light"
                      : "text-text-title-dark"
                  }`}
                >
                  {truncateDescription(experience.description, 300)}
                </p>
              </div>
              <div className="absolute top-2 right-2">
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
                      theme === "dark"
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

export default ExperienceList;
