import React, { useEffect } from "react"; // Importing React and the useEffect hook from React
import { useTheme } from "./ThemeContext"; // Importing the useTheme hook to access the theme context
import { FaReact } from "react-icons/fa"; // Importing React icon
import { SiTypescript, SiCinema4D, SiAdobexd } from "react-icons/si"; // Importing icons for TypeScript, Cinema 4D, and Adobe XD
import { DiPhotoshop, DiIllustrator } from "react-icons/di"; // Importing icons for Photoshop and Illustrator
import { usePageContext } from "./PageContext"; // Importing the usePageContext hook to access page context

const PremiumTools: React.FC = () => {
  const { darkMode } = useTheme(); // Destructuring darkMode from the theme context
  const { isDetailPage } = usePageContext(); // Destructuring isDetailPage from the page context

  useEffect(() => {
    // Effect to toggle dark and light mode classes on the body element
    document.body.classList.toggle("dark-mode", darkMode); // Apply dark mode class if darkMode is true
    document.body.classList.toggle("light-mode", !darkMode); // Apply light mode class if darkMode is false
  }, [darkMode]); // Dependency array to re-run the effect when darkMode changes

  const Tools = [
    // Array of tools with their corresponding icons, titles, and links
    {
      icon: (
        <FaReact
          className={`w-16 h-16 ${
            darkMode ? "fill-text-title-light" : "fill-text-title-dark"
          }`}
        />
      ),
      title: "React", // Tool title
      link: "https://kianoush-sb.vercel.app", // Link to tool
    },
    {
      icon: (
        <SiTypescript
          className={`w-16 h-16 ${
            darkMode ? "fill-text-title-light" : "fill-text-title-dark"
          }`}
        />
      ),
      title: "TypeScript",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      icon: (
        <DiPhotoshop
          className={`w-16 h-16 ${
            darkMode ? "fill-text-title-light" : "fill-text-title-dark"
          }`}
        />
      ),
      title: "Photoshop",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      icon: (
        <DiIllustrator
          className={`w-16 h-16 ${
            darkMode ? "fill-text-title-light" : "fill-text-title-dark"
          }`}
        />
      ),
      title: "Illustrator",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      icon: (
        <SiAdobexd
          className={`w-16 h-16 ${
            darkMode ? "fill-text-title-light" : "fill-text-title-dark"
          }`}
        />
      ),
      title: "XD",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      icon: (
        <SiCinema4D
          className={`w-16 h-16 ${
            darkMode ? "fill-text-title-light" : "fill-text-title-dark"
          }`}
        />
      ),
      title: "Cinema 4D",
      link: "https://kianoush-sb.vercel.app",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 64 64"
          className={`w-16 h-16 ${
            darkMode ? "fill-text-title-light" : "fill-text-title-dark"
          }`}
        >
          <path d="M 45.8125 1.0175781 C 45.684844 1.0419844 45.558609 1.0909688 45.443359 1.1679688 C 41.037359 4.1049687 38.226922 8.9912188 36.919922 11.699219 C 34.956922 8.1992187 32.677406 6 26.941406 6 C 16.300406 6 12 14.083078 12 17.455078 C 12 18.441078 12.760531 19.584203 16.019531 19.908203 C 13.575531 24.649203 11 31.850641 11 41.181641 C 11 56.253641 16.977391 63 22.900391 63 C 24.544391 63 33.184641 62.250656 41.931641 47.472656 C 44.966641 42.345656 47.173391 37.5935 48.525391 33.3125 C 49.258391 33.7365 49.927703 34 50.470703 34 C 53.306703 34 55 30.533563 55 24.726562 C 55 20.739562 51.979 12 43 12 C 41.244 12 39.850594 12.18625 38.808594 12.40625 C 40.064594 9.86125 42.667688 5.4230313 46.554688 2.8320312 C 47.014688 2.5260312 47.137078 1.9053125 46.830078 1.4453125 C 46.599828 1.1003125 46.195469 0.94435938 45.8125 1.0175781 z M 26.941406 8 C 32.334406 8 33.873516 9.9643125 36.103516 14.445312 C 36.125516 14.490312 36.165359 14.518594 36.193359 14.558594 C 36.237359 14.621594 36.275984 14.687234 36.333984 14.740234 C 36.381984 14.783234 36.439141 14.807844 36.494141 14.839844 C 36.546141 14.870844 36.589437 14.913547 36.648438 14.935547 C 36.656438 14.938547 36.663875 14.937453 36.671875 14.939453 C 36.696875 14.948453 36.725953 14.947125 36.751953 14.953125 C 36.834953 14.975125 36.917 15 37 15 C 37.014 15 37.027016 14.994141 37.041016 14.994141 C 37.065016 14.993141 37.087328 14.985422 37.111328 14.982422 C 37.207328 14.971422 37.298719 14.948156 37.386719 14.910156 C 37.404719 14.902156 37.423406 14.904484 37.441406 14.896484 C 37.459406 14.887484 39.335 14 43 14 C 50.63 14 53 21.862562 53 24.726562 C 53 29.008563 51.959703 32 50.470703 32 C 49.265703 32 44.990906 28.040797 41.753906 24.341797 C 41.562906 24.123797 41.286 24 41 24 C 40.948 24 40.89575 24.003719 40.84375 24.011719 C 40.50375 24.065719 40.215078 24.289469 40.080078 24.605469 C 40.053078 24.669469 37.279 31 32 31 C 28.636 31 26 27.486 26 23 C 26 21.139 26.292531 19.650266 26.894531 18.447266 C 27.067531 18.102266 27.026062 17.688766 26.789062 17.384766 C 26.552063 17.080766 26.16525 16.941437 25.78125 17.023438 C 25.73725 17.033437 21.38 18 18 18 C 15.063 18 14.191906 17.487797 14.003906 17.341797 C 14.109906 15.116797 17.270406 8 26.941406 8 z M 24.435547 19.328125 C 24.143547 20.411125 24 21.626 24 23 C 24 28.607 27.514 33 32 33 C 36.913 33 39.942703 28.937094 41.220703 26.746094 C 42.608703 28.269094 44.777781 30.525187 46.800781 32.117188 C 45.518781 36.401188 43.311938 41.216078 40.210938 46.455078 C 31.842938 60.592078 23.791391 61 22.900391 61 C 18.132391 61 13 54.798641 13 41.181641 C 13 31.677641 15.779375 24.492094 18.234375 19.996094 C 20.404375 19.971094 22.831547 19.614125 24.435547 19.328125 z M 41.289062 31.705078 C 40.899578 31.726641 40.545297 31.975234 40.404297 32.365234 C 40.218297 32.884234 40.487812 33.457531 41.007812 33.644531 L 42.888672 34.320312 C 43.000672 34.360312 43.116516 34.380859 43.228516 34.380859 C 43.638516 34.380859 44.021922 34.12775 44.169922 33.71875 C 44.355922 33.19975 44.086406 32.626453 43.566406 32.439453 L 41.683594 31.761719 C 41.552844 31.715219 41.418891 31.697891 41.289062 31.705078 z M 39.435547 36.365234 C 39.045875 36.349578 38.665734 36.564453 38.490234 36.939453 C 38.255234 37.439453 38.470703 38.034531 38.970703 38.269531 L 40.779297 39.121094 C 40.917297 39.186094 41.062078 39.216797 41.205078 39.216797 C 41.581078 39.216797 41.939375 39.004578 42.109375 38.642578 C 42.344375 38.142578 42.130859 37.5475 41.630859 37.3125 L 39.820312 36.460938 C 39.695062 36.401938 39.565438 36.370453 39.435547 36.365234 z M 37.177734 40.886719 C 36.791156 40.844766 36.397813 41.033031 36.195312 41.394531 C 35.927312 41.877531 36.157 42.517031 36.546875 42.710938 L 38.091406 43.507812 C 38.208406 43.586812 38.347125 43.617469 38.490234 43.617469 C 38.782234 43.617469 39.052531 43.355531 39.177734 43.04375 C 39.472734 42.49275 39.284938 41.782078 38.800781 41.5625 L 37.167969 40.710938 C 37.061625 40.671125 36.952891 40.646391 37.177734 40.886719 z " />
        </svg>
      ),
      title: "Fl Studio",
      link: "https://instagram.com",
    },
  ];

  const displayedProjects = isDetailPage ? Tools : Tools.slice(0, 9);

  return (
    <div className="mt-20 text-center md:text-left">
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2 ${
          darkMode ? "text-text-title-light" : "text-text-title-dark"
        }`}
      >
        PREMIUM
      </h1>
      <h1
        className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4 ${
          darkMode ? "text-text-title2-light" : "text-text-title2-dark"
        }`}
      >
        TOOLS
      </h1>
      <div className="flex flex-col justify-center items-center md:items-start px-10 md:px-0 lg:max-w-[80%]">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 ">
          {displayedProjects.map(
            (
              tool,
              index // Iterating over the Tools array to render each tool
            ) => (
              <div
                key={index}
                className={`flex items-center rounded-xl h-24 w-24 lg:w-auto my-4 p-4 transition duration-300 ease-in-out cursor-pointer overflow-hidden ${
                  darkMode
                    ? "bg-text-title2-dark hover:bg-text-title2-light"
                    : "bg-text-title2-light hover:bg-text-title2-dark"
                }`}
                onClick={() => window.open(tool.link, "_blank")}
              >
                <div className="flex items-center justify-center">
                  {tool.icon}
                </div>
                <div className="hidden lg:flex">
                  <h3
                    className={`font-semibold font-xl pl-1 ${
                      darkMode
                        ? "text-text-title-light"
                        : "text-text-title-dark"
                    }`}
                  >
                    {tool.title}
                  </h3>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PremiumTools;
