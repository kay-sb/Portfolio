// app/experience/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useThemeStore } from "@/stores/useThemeStore";
import Profile from "@/components/ProfileCart";
import Form from "@/components/Form";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import experienceData from "@/data/experiences.json";
import { useParams } from "next/navigation";
import { Suspense } from "react";

interface experienceData {
  id: string;
  image: string;
  title: string;
  description: string;
}

const ProjectPage: React.FC = () => {
  const { darkMode } = useThemeStore();
  const [experience, setExperience] = useState<experienceData | null>(null);
  const params = useParams();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const { id } = params;
    if (typeof id === "string") {
      const foundBlog = experienceData.experienceData.find(
        (b) => b.id === id
      ) as experienceData | undefined;
      if (foundBlog) {
        setExperience(foundBlog);
      }
    }
  }, [params]);

  if (!experience) return <p>Blog not available.</p>;

  return (
    <Suspense>
      <div className="min-h-screen flex flex-col items-center mt-2">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center mt-20">
          <div className="hidden md:flex">
            <Profile />
          </div>
          <motion.div
            className="flex-1 w-full text-center md:text-left mt-5"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {experience ? (
              <div className="text-start md:text-left rounded-lg mx-auto md:mx-0 w-[80%] md:w-full">
                <div
                  className={`p-4 rounded-lg mb-5 ${
                    darkMode ? "bg-text-title2-light" : "bg-text-title2-dark"
                  }`}
                >
                  <h2
                    className={`text-xl font-bold mb-4 ${
                      darkMode
                        ? "text-text-title-light"
                        : "text-text-title-dark"
                    }`}
                  >
                    {experience.title}
                  </h2>
                </div>

                <p
                  className={`text-md flex text-start mb-10 ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {experience.description || "No description provided."}
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
            <div className="flex justify-center items-center md:hidden">
              <Profile />
            </div>
          </motion.div>
        </div>
      </div>
    </Suspense>
  );
};

export default ProjectPage;
