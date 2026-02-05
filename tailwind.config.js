/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22ff55",

        /* Dark theme system */
        darkBg: "#0f0f0f",
        darkSurface: "#161616",
        darkCard: "#1e1e1e",

        /* Light theme helpers */
        lightBg: "#ffffff",
        lightSurface: "#f5f5f5",
      },
    },
  },
  plugins: [],
};

