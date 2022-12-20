const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      borderWidth: {
        1.5: "1.5px",
      },
      colors: {
        // Variables defined in src/assets/css/variables.css
        pale: "var(--pale)",
        dark: "var(--dark)",
        yellow: "var(--yellow)",
        "pale-yellow": "var(--pale-yellow)",
        "dark-yellow": "var(--dark-yellow)",
        "soft-gray": "var(--soft-gray)",
        "light-gray": "var(--light-gray)",
        gray: "var(--gray)",
        "dark-gray": "var(--dark-gray)",
        "darker-gray": "var(--darker-gray)",
        blue: "var(--blue)",
        "light-blue": "var(--light-blue)",
        "pale-blue": "var(--pale-blue)",
        green: "var(--green)",
        "pale-green": "var(--pale-green)",
        red: "var(--red)",
        "pale-red": "var(--pale-red)",
        cerulean: "var(--cerulean)",
        lilac: "var(--lilac)",
        rose: "var(--rose)",
        orange: "var(--orange)",
        "light-orange": "var(--light-orange)",
        primary: "var(--primary)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Mono", ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
