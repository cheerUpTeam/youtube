/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "basic-01": "var(--basic-01)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
