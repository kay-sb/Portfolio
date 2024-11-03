import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-title-light': 'rgba(255, 255, 255, 0.8)',
        'text-title-dark': 'rgba(0, 0, 0, 0.8)',
        'text-title2-light': 'rgba(255, 255, 255, 0.1)',
        'text-title2-dark': 'rgba(0, 0, 0, 0.1)',
        'text-light': 'rgb(234, 236, 237)',
        'text-dark': 'rgb(21, 19, 18)',
        'dark-mode-bg': 'rgba(255, 255, 255, 0.03)',
        'light-mode-bg': 'rgba(255, 255, 255, 0.03)',
        'dark-mode-text': 'rgba(255, 255, 255, 0.80)',
        'light-mode-text': 'rgba(0, 0, 0, 0.80)',
        'tooltip-bg-dark': 'rgba(255, 255, 255, 0.08)',
        'tooltip-bg-light': 'rgba(255, 255, 255, 0.08)',
        'active-dark': 'rgb(255, 80, 80)',
        'active-light': 'rgb(255, 130, 130)',
        'clr-Social': 'rgb(255, 80, 80)',
        'arrow': 'rgb(255, 130, 130)',
        'dark-mode': 'rgb(21, 19, 18)',
        'light-mode': 'rgb(234, 236, 237)',
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
};

export default config;
