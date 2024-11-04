"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  if (!mounted) return null;
  return (
    <motion.div
      className="text-center md:text-left"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1
        className={`font-bold text-[50px] md:text-[75px] xl:text-[110px] leading-none tracking-wide pb-2 ${
          theme === "dark" ? "text-text-title-light" : "text-text-title-dark"
        }`}
      >
        FRONTEND
      </h1>
      <h1
        className={`font-bold text-[45px] md:text-[65px] xl:text-[90px] leading-none tracking-wide pb-4 ${
          theme === "dark" ? "text-text-title2-light" : "text-text-title2-dark"
        }`}
      >
        DEVELOPER
      </h1>
      <p
        className={`w-full max-w-[80%] text-sm md:max-w-[450px] lg:max-w-[500px] mx-auto md:mx-0 ${
          theme === "dark" ? "text-text-title-light" : "text-text-title-dark"
        }`}
      >
        As a frontend developer with a flair for graphic design, I bring ideas
        to life through clean, interactive user interfaces. My background in
        music production, photography, and videography enhances my attention to
        detail and creativity, allowing me to craft immersive digital
        experiences.
      </p>

      <div className="flex gap-16 lg:gap-20 mt-8 justify-center md:justify-start">
        <div className="text-left">
          <h2
            className={`font-bold text-4xl sm:text-3xl md:text-4xl lg:text-6xl ${
              theme === "dark"
                ? "text-text-title-light"
                : "text-text-title-dark"
            }`}
          >
            +1
          </h2>
          <h3
            className={`text-[12px] md:text-sm ${
              theme === "dark"
                ? "text-text-title-light"
                : "text-text-title-dark"
            }`}
          >
            Years
          </h3>
          <h3
            className={`text-[12px] md:text-sm ${
              theme === "dark"
                ? "text-text-title-light"
                : "text-text-title-dark"
            }`}
          >
            Experience
          </h3>
        </div>

        <div className="text-left">
          <h2
            className={`font-bold text-4xl sm:text-3xl md:text-4xl lg:text-6xl ${
              theme === "dark"
                ? "text-text-title-light"
                : "text-text-title-dark"
            }`}
          >
            +1
          </h2>
          <h3
            className={`text-[12px] md:text-sm ${
              theme === "dark"
                ? "text-text-title-light"
                : "text-text-title-dark"
            }`}
          >
            Projects
          </h3>
          <h3
            className={`text-[12px] md:text-sm ${
              theme === "dark"
                ? "text-text-title-light"
                : "text-text-title-dark"
            }`}
          >
            Completed
          </h3>
        </div>

        <div className="text-left">
          <h2
            className={`font-bold text-4xl sm:text-3xl md:text-4xl lg:text-6xl ${
              theme === "dark"
                ? "text-text-title-light"
                : "text-text-title-dark"
            }`}
          >
            +1
          </h2>
          <h3
            className={`text-[12px] md:text-sm ${
              theme === "dark"
                ? "text-text-title-light"
                : "text-text-title-dark"
            }`}
          >
            Worldwide
          </h3>
          <h3
            className={`text-[12px] md:text-sm ${
              theme === "dark"
                ? "text-text-title-light"
                : "text-text-title-dark"
            }`}
          >
            Clients
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
