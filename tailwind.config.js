/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "basic-01": "var(--basic-01)",
        "basic-02": "var(--basic-02)",
        "font-01": "var(--font-01)",
        "font-02": "var(--font-02)",
        "border-01": "var(--border-01)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
