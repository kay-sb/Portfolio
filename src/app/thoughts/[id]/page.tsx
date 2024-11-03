// app/blog/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useThemeStore } from "@/stores/useThemeStore";
import Profile from "@/components/ProfileCart";
import Form from "@/components/Form";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import blogData from "@/data/blog.json";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

interface Section {
  type: "text" | "image" | "list";
  heading: string;
  description: string;
  list?: Array<{ name: string; description: string }>;
  image?: string;
}

interface BlogData {
  id: string;
  date: string;
  readTime: string;
  title: string;
  introduction: string;
  image?: string;
  sections?: Section[];
}

const BlogPage: React.FC = () => {
  const { darkMode } = useThemeStore();
  const params = useParams();
  const [blog, setBlog] = useState<BlogData | null>(null);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const { id } = params;
    if (typeof id === "string") {
      const foundBlog = blogData.blogData.find((b) => b.id === id) as
        | BlogData
        | undefined;
      if (foundBlog) {
        setBlog(foundBlog);
      }
    }
  }, [params]);

  if (!blog) return <p>Blog not available.</p>;

  return (
    <Suspense>
      <div className="min-h-screen flex flex-col items-center mt-2">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center mt-20">
          <div className="hidden md:flex">
            <Profile />
          </div>
          <motion.div
            className="mt-5 mx-auto w-full"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[80%] md:w-full mx-auto md:mx-0">
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="responsive"
                  width={16}
                  height={9}
                  className="w-full h-auto rounded-md mb-4"
                />
              )}
              <div
                className={`p-4 rounded-lg mb-5 ${
                  darkMode ? "bg-text-title2-light" : "bg-text-title2-dark"
                }`}
              >
                <p
                  className={`text-sm mb-4 flex justify-between ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {blog.date} • {blog.readTime}
                </p>
                <h1
                  className={`text-xl font-bold mb-4 ${
                    darkMode ? "text-text-title-light" : "text-text-title-dark"
                  }`}
                >
                  {blog.title}
                </h1>
              </div>
              <p
                className={`mb-8 leading-7 ${
                  darkMode ? "text-text-title-light" : "text-text-title-dark"
                }`}
              >
                {blog.introduction}
              </p>

              {blog.sections?.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2
                    className={`text-2xl font-semibold mb-4 ${
                      darkMode
                        ? "text-text-title-light"
                        : "text-text-title-dark"
                    }`}
                  >
                    {section.heading}
                  </h2>
                  <p
                    className={`mb-4 ${
                      darkMode
                        ? "text-text-title-light"
                        : "text-text-title-dark"
                    }`}
                  >
                    {section.description}
                  </p>
                  {section.list && (
                    <ul className="list-disc list-inside">
                      {section.list.map((item, i) => (
                        <li
                          key={i}
                          className={`mb-2 ${
                            darkMode
                              ? "text-text-title-light"
                              : "text-text-title-dark"
                          }`}
                        >
                          <strong>{item.name}:</strong> {item.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
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

export default BlogPage;
