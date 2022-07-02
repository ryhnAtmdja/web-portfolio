/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#059669",
        secondary: "#0f172a",
        tertiary: "#64748b",
      },
      fontFamily: {},
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
