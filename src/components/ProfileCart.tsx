import React from "react"; // Importing React
import { useTheme } from "./ThemeContext"; // Import the useTheme hook to manage dark mode
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"; // Importing icons from react-icons

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center rounded-lg max-w-sm mx-10 mt-6 z-50">
      {/* ProfileCard for mobile view (hidden in md and up) */}
      <div className="md:invisible">
        <ProfileCard
          name="Kianoush Sabouri" // Profile name
          description="I'm a frontend developer with graphic design skills. I also have experience in music production, photography, and videography." // Profile description
          profileImage="/Profile.jpg" // Profile image
        />
      </div>
      {/* ProfileCard for desktop view (visible in md and up) */}
      <div className="flex flex-col items-center rounded-lg max-w-sm fixed top-24">
        <div className="invisible md:visible hidden md:flex">
          <ProfileCard
            name="Kianoush Sabouri" // Profile name
            description="I'm a frontend developer with graphic design skills. I also have experience in music production, photography, and videography." // Profile description
            profileImage="/Profile.jpg" // Profile image
          />
        </div>
      </div>
    </div>
  );
};

// Define the props that the ProfileCard component will accept
interface ProfileCardProps {
  name: string; // Name of the person
  description: string; // Description or bio of the person
  profileImage: string; // URL for the profile image
}

// Array of social media links
const socialLinks = [
  { platform: "telegram", url: "https://t.me/kianoush_sb" },
  { platform: "instagram", url: "https://instagram.com/kianoush_sb" },
  { platform: "github", url: "https://github.com/kay-sb" },
  { platform: "linkedin", url: "https://linkedin.com/in/yourusername" },
  {
    platform: "youtube",
    url: "https://www.youtube.com/channel/UCDcNg9t3D1W9KyzJejVZV5Q",
  },
];

// ProfileCard functional component definition
const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  description,
  profileImage,
}) => {
  const theme = useTheme(); // Access the theme object to determine if dark mode is active

  return (
    <div
      className={`flex flex-col items-center shadow-lg rounded-xl p-4 ${
        theme.darkMode ? "light-mode" : "dark-mode"
      }`} // Conditional class for dark/light mode
      style={{
        width: "300px", // Fixed width for the card
        height: "600px", // Fixed height for the card
      }}
    >
      {/* Profile image */}
      <div className="w-60 h-72 pb-4 py-2">
        <img
          src={profileImage} // Profile image source
          alt="Profile" // Alt text for the image
          className="w-full h-full object-cover rounded-xl" // Styling for the image
        />
      </div>
      {/* Profile name */}
      <h2
        className={`text-xl my-7 font-bold ${
          theme.darkMode ? "text-dark-mode" : "text-light-mode"
        }`}
      >
        {name} {/* Display the name */}
      </h2>
      <div>
        {/* Profile description */}
        <p
          className={`text-center flex-grow ${
            theme.darkMode ? "text-dark-mode" : "text-light-mode"
          }`}
        >
          {description} {/* Display the description */}
        </p>
      </div>
      <div className="flex space-x-4 mt-auto">
        {/* Map through socialLinks array to create icons */}
        {socialLinks.map((link) => {
          let icon; // Variable to hold the icon based on the platform
          switch (link.platform) {
            // Determine which icon to render based on platform
            case "telegram":
              icon = (
                <FaTelegramPlane
                  className={`w-6 h-6 ${
                    theme.darkMode ? "fill-active-dark" : "fill-active-dark"
                  }`}
                />
              );
              break;
            case "instagram":
              icon = (
                <FaInstagram
                  className={`w-6 h-6 ${
                    theme.darkMode ? "fill-active-dark" : "fill-active-dark"
                  }`}
                />
              );
              break;
            case "github":
              icon = (
                <FaGithub
                  className={`w-6 h-6 ${
                    theme.darkMode ? "fill-active-dark" : "fill-active-dark"
                  }`}
                />
              );
              break;
            case "linkedin":
              icon = (
                <FaLinkedin
                  className={`w-6 h-6 ${
                    theme.darkMode ? "fill-active-dark" : "fill-active-dark"
                  }`}
                />
              );
              break;
            case "youtube":
              icon = (
                <FaYoutube
                  className={`w-6 h-6 ${
                    theme.darkMode ? "fill-active-dark" : "fill-active-dark"
                  }`}
                />
              );
              break;
            default:
              icon = null; // Default case if platform is unknown
              break;
          }
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon} {/* Render the corresponding icon */}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Profile; // Exporting Profile component
