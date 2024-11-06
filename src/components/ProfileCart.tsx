"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import data from "@/data/locales/en/common.json"; // Importing the profile data

const Profile: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="flex flex-col items-center rounded-lg max-w-sm mx-10 mt-6 z-30">
      {/* ProfileCard for mobile view (hidden in md and up) */}
      <div className="md:invisible">
        <ProfileCard
          name={data.profile.name}
          description={data.profile.description}
          profileImage={data.profile.profileImage}
        />
      </div>
      {/* ProfileCard for desktop view (visible in md and up) */}
      <div className="flex flex-col items-center rounded-lg max-w-sm fixed top-24">
        <div className="invisible md:visible hidden md:flex">
          <ProfileCard
            name={data.profile.name}
            description={data.profile.description}
            profileImage={data.profile.profileImage}
          />
        </div>
      </div>
    </div>
  );
};

// ProfileCard functional component definition
const ProfileCard: React.FC<{
  name: string;
  description: string;
  profileImage: string;
}> = ({ name, description, profileImage }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`flex flex-col items-center shadow-lg rounded-xl p-4 ${
        theme === "dark" ? "bg-light-mode" : "bg-dark-mode"
      }`}
      style={{
        width: "300px",
        height: "600px",
      }}
    >
      {/* Profile image */}
      <div className="w-60 h-72 pb-4 py-2">
        <Image
          src={profileImage}
          alt="Profile"
          width={160}
          height={90}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      {/* Profile name */}
      <h2
        className={`text-xl my-7 font-bold ${
          theme === "dark" ? "text-dark-mode" : "  text-light-mode"
        }`}
      >
        {name}
      </h2>
      <div>
        {/* Profile description */}
        <p
          className={`text-center flex-grow ${
            theme === "dark" ? "text-dark-mode" : "  text-light-mode"
          }`}
        >
          {description}
        </p>
      </div>
      <div className="flex space-x-4 mt-auto">
        {/* Map through socialLinks array to create icons */}
        {data.socialLinks.map((link) => {
          let icon;
          switch (link.platform) {
            case "telegram":
              icon = (
                <FaTelegramPlane
                  className={`w-6 h-6 ${
                    theme === "dark" ? "fill-active-dark" : "fill-active-dark"
                  }`}
                />
              );
              break;
            case "instagram":
              icon = (
                <FaInstagram
                  className={`w-6 h-6 ${
                    theme === "dark" ? "fill-active-dark" : "fill-active-dark"
                  }`}
                />
              );
              break;
            case "github":
              icon = (
                <FaGithub
                  className={`w-6 h-6 ${
                    theme === "dark" ? "fill-active-dark" : "fill-active-dark"
                  }`}
                />
              );
              break;
            case "linkedin":
              icon = (
                <FaLinkedin
                  className={`w-6 h-6 ${
                    theme === "dark" ? "fill-active-dark" : "fill-active-dark"
                  }`}
                />
              );
              break;
            case "youtube":
              icon = (
                <FaYoutube
                  className={`w-6 h-6 ${
                    theme === "dark" ? "fill-active-dark" : "fill-active-dark"
                  }`}
                />
              );
              break;
            default:
              icon = null;
              break;
          }
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
