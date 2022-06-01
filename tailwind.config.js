// const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#323130",
      disable: "#a19f9d",
      white: "#ffffff",
      "edge-blue": "#0078d7",
      blue: {
        DEFAULT: "#2564cf",
        100: "#ecf6fd",
      },
      gray: {
        DEFAULT: "#f3f2f1",
        200: "#edebe9",
      },
    },
    borderRadius: {
      none: "0",
      default: "4px",
      full: "100%",
      2: "2px",
      4: "4px",
      5: "5px",
      8: "8px",
      12: "12px",
      20: "20px",
      30: "30px",
    },
    borderWidth: {
      unset: "unset",
      none: "none",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
    },
    spacing: {
      auto: "auto",
      unset: "unset",
      none: "none",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      11: "11px",
      12: "12px",
      14: "14px",
      16: "16px",
      20: "20px",
      22: "22px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      44: "44px",
      48: "48px",
      52: "52px",
      56: "56px",
      60: "60px",
      64: "64px",
      68: "68px",
      72: "72px",
      76: "76px",
      80: "80px",
      84: "84px",
      92: "92px",
      98: "98px",
      100: "100px",
      114: "114px",
      120: "120px",
      128: "128px",
      140: "140px",
      192: "192px",
      200: "200px",
      218: "218px",
      300: "300px",
      320: "320px",
    },
    margin: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    width: (theme) => ({
      full: "100%",
      screen: "100vw",
      "fit-content": "fit-content",
      inherit: "inherit",
      ...theme("spacing"),
    }),
    height: (theme) => ({
      full: "100%",
      screen: "100vh",
      "fit-content": "fit-content",
      inherit: "inherit",
      ...theme("spacing"),
      "75%": "75%",
      "50%": "50%",
    }),
    maxHeight: (theme) => ({
      ...theme("height"),
      screen: "100vh",
    }),
    maxWidth: (theme) => theme("width"),
    minHeight: (theme) => theme("maxHeight"),
    minWidth: (theme) => theme("width"),
    fontFamily: {
      sans: ["'Segoe', 'Segoe UI', 'Arial', 'sans-serif'"],
    },
    fontSize: {
      "2xs": ["12px", "16px"],
      xs: ["14px", "20px"],
      sm: ["16px", "24px"],
      base: ["18px", "26px"],
      tiny: ["20px", "28px"],
      md: ["22px", "32px"],
      lg: ["24px", "32px"],
      xl: ["32px", "40px"],
      "2xl": ["48px", "56px"],
    },
  },
  plugins: [],
};
