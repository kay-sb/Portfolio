// app/project/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import Profile from "@/components/ProfileCart";
import Form from "@/components/Form";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import data from "@/data/locales/en/common.json";
import { useParams } from "next/navigation";
import { Suspense } from "react";

interface ProjectData {
  id: string;
  image: string;
  title: string;
  description: string;
}

const ProjectPage: React.FC = () => {
  const { theme } = useTheme();
  const [project, setProject] = useState<ProjectData | null>(null);
  const params = useParams();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });


  useEffect(() => {
    const { id } = params;
    if (typeof id === "string") {
      const foundBlog = data.projectsPage.projectsData.find((b) => b.id === id) as
        | ProjectData
        | undefined;
      if (foundBlog) {
        setProject(foundBlog);
      }
    }
  }, [params]);

  if (!project) return <p>Blog not available.</p>;

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
            {project ? (
              <div className="text-start md:text-left rounded-lg mx-auto md:mx-0 w-[80%] md:w-full">
                <div
                  className={`p-4 rounded-lg mb-5 ${
                    theme === "dark"
                      ? "bg-text-title2-light"
                      : "bg-text-title2-dark"
                  }`}
                >
                  <h2
                    className={`text-xl font-bold mb-4 ${
                      theme === "dark"
                        ? "text-text-title-light"
                        : "text-text-title-dark"
                    }`}
                  >
                    {project.title}
                  </h2>
                </div>

                <p
                  className={`text-md flex text-start mb-10 ${
                    theme === "dark"
                      ? "text-text-title-light"
                      : "text-text-title-dark"
                  }`}
                >
                  {project.description || "No description provided."}
                </p>
              </div>
            ) : (
              <p
                className={`mt-10 font-bold text-[40px] leading-none tracking-wide mb-2 ${
                  theme === "dark"
                    ? "text-text-title2-light"
                    : "text-text-title2-dark"
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
