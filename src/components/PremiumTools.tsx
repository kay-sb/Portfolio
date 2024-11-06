"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePageStore } from "@/stores/usePageStore";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import data from "@/data/locales/en/common.json"; // اینجا لینک دیتای جدید

import { SiTypescript, SiCinema4D, SiAdobexd } from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

const PremiumTools: React.FC = () => {
  const { theme } = useTheme();
  const { isDetailPage } = usePageStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const displayedProjects = isDetailPage ? data.tools : data.tools.slice(0, 9);
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
        {data.titletools.main}
      </h1>
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4 ${
          theme === "dark" ? "text-text-title2-light" : "text-text-title2-dark"
        }`}
      >
        {data.titletools.sub}
      </h1>
      <div className="flex flex-col justify-center items-center md:items-start w-full">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 md:w-full">
          {displayedProjects.map((tool, index) => (
            <div
              key={index}
              className={`flex items-center rounded-xl h-24 w-24 lg:w-auto my-4 p-4 transition duration-300 ease-in-out cursor-pointer overflow-hidden ${
                theme === "dark"
                  ? "bg-text-title2-dark hover:bg-text-title2-light"
                  : "bg-text-title2-light hover:bg-text-title2-dark"
              }`}
              onClick={() => window.open(tool.link, "_blank")}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: tool.icon.replace(
                    "<svg ",
                    `<svg class="${
                      theme === "dark"
                        ? "fill-text-title-light"
                        : "fill-text-title-dark"
                    } w-16 h-16"`
                  ),
                }}
              />

              <div className="hidden lg:flex">
                <h3
                  className={`font-semibold font-xl pl-1 ${
                    theme === "dark"
                      ? "text-text-title-light"
                      : "text-text-title-dark"
                  }`}
                >
                  {tool.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PremiumTools;
