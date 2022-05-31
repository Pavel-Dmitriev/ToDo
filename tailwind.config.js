// const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#323130",
      disable: "#a19f9d",
      white: "#ffffff",
      blue: {
        DEFAULT: "#2564cf",
        100: "#ecf6fd",
      },
      gray: {
        DEFAULT: "#f3f2f1",
        200: "#edebe9",
      },
    },
    extend: {},
  },
  plugins: [],
};
