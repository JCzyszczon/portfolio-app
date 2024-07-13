/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textColor: "var(--text-color)",
        backgroundColor: "var(--background-color)",
        glassColor: "var(--glass-color)",
        borderColor: "var(--border-color)",
        hoverBorderColor: "var(--hover-border-color)",
        linkColor: "var(--link-color)",
        hoverButtonColor: "var(--hover-button-color)",
        lessImportantTextColor: "var(--less-important-text-color)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
