/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '28em': '28em',
        '30em': '30em',
        '40em': '40em',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
  compilerOptions: {
    baseUrl: "./src",
    paths: {
      "@/*": ["./*"],
    },
  },
};
