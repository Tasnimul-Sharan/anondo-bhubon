/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3A83",
        secondary: "#F48220",
        tertiary: "#8A2BE2",
        off_white: "#F9F9F9",
        border_color: "#e5e7eb",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(44, 58, 131, 0.10)",
        lift: "0 24px 70px rgba(44, 58, 131, 0.24)",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
      keyframes: {
        ripple: {
          "0%": { boxShadow: "0 0 0 0 rgba(44, 58, 131, 0.6)" },
          "70%": { boxShadow: "0 0 0 30px rgba(44, 58, 131, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(44, 58, 131, 0)" },
        },
      },
      animation: {
        ripple: "ripple 2s infinite",
      },
    },
  },
  plugins: [],
};
