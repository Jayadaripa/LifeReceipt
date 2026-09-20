/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060a0f",
        panel: "#0b1219",
        panel2: "#101a22",
        lime: "#b7ff4a",
        mint: "#35e0b3",
        muted: "#82909e",
      },
      boxShadow: {
        glow: "0 0 60px rgba(183,255,74,.12)",
      },
    },
  },
  plugins: [],
};
