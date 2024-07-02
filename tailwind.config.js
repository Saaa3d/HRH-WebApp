/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,cjs,mjs,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        greenLight: "#25E025",
        green: "#2DB42D",
        blueDark: "#0d689d",
        grayDark: "#B5C2CA"
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        upDown: "upDown 2s infinite",
      },
    },
  },
  plugins: [],
};
